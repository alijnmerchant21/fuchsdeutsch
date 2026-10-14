// Turns every listening text into an MP3 with ElevenLabs, one voice per speaker.
// Usage:
//   npm run audio -- --dry --course a1        what would be made, and how many characters it costs
//   npm run audio -- --voices                 list German voices to pick from
//   npm run audio -- --course a1              make the A1 files
//   npm run audio -- --only t1-audio --force  remake one file
//   npm run audio -- --prefix a1-k1- --max-chars 9000   one chapter, never more than 9000 characters
// Setup: ELEVENLABS_API_KEY in .env.local, and a voice for each speaker in scripts/voices.json
// (copy voices.example.json). A voice is either an id string or { "id": "...", "speed": 0.9 }.
// ELEVENLABS_MODEL overrides the model (default eleven_v3, the most natural one).
// Needs Node 22+ and ffmpeg. Files land in public/audio/<block id>.mp3 and the player uses them automatically.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { allAudio, loadContent } from './load-content.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const flag = (name) => args.includes(`--${name}`);
const opt = (name) => { const i = args.indexOf(`--${name}`); return i >= 0 ? args[i + 1] : undefined; };

const key = process.env.ELEVENLABS_API_KEY;
const model = process.env.ELEVENLABS_MODEL || 'eleven_v3';
const API = 'https://api.elevenlabs.io/v1';
const PAUSE_SECONDS = 0.45;

if (flag('voices')) {
  if (!key) { console.error('Set ELEVENLABS_API_KEY first (in .env.local).'); process.exit(1); }
  const res = await fetch(`${API}/shared-voices?language=de&page_size=100&sort=usage_character_count_1y`, { headers: { 'xi-api-key': key } });
  if (!res.ok) { console.error(`${res.status} ${await res.text()}`); process.exit(1); }
  const { voices } = await res.json();
  for (const v of voices) console.log(`${v.voice_id}  ${v.name} | ${v.gender}, ${v.age}, ${v.accent || ''} | ${v.use_case || ''} | ${(v.descriptive || '')}`);
  console.log(`\n${voices.length} German voices. Add the ones you like to "My Voices" in ElevenLabs, then put their ids in scripts/voices.json.`);
  process.exit(0);
}

const data = loadContent();
const all = allAudio(data).map((b) => ({ id: b.id, lines: b.lines }));
let blocks = all;
const course = opt('course');
if (course) {
  const c = data.courses.find((x) => x.id === course);
  if (!c) { console.error(`No course "${course}". Options: ${data.courses.map((x) => x.id).join(', ')}`); process.exit(1); }
  const ids = new Set(allAudio({ courses: [c] }).map((b) => b.id));
  blocks = blocks.filter((b) => ids.has(b.id));
}
const only = opt('only');
if (only) { const ids = new Set(only.split(',')); blocks = blocks.filter((b) => ids.has(b.id)); }
const prefix = opt('prefix');
if (prefix) blocks = blocks.filter((b) => b.id.startsWith(prefix));

const out = join(root, 'public', 'audio');
let todo = blocks.filter((b) => flag('force') || !existsSync(join(out, `${b.id}.mp3`)));
// --max-chars N: stop before the character budget runs out, in course order.
const maxChars = Number(opt('max-chars') || Infinity);
if (Number.isFinite(maxChars)) {
  let used = 0;
  todo = todo.filter((b) => { const n = b.lines.reduce((m, l) => m + l.text.length, 0); if (used + n > maxChars) return false; used += n; return true; });
}
const chars = todo.reduce((n, b) => n + b.lines.reduce((m, l) => m + l.text.length, 0), 0);
const cast = [...new Set(todo.flatMap((b) => b.lines.map((l) => l.speaker)))];
console.log(`${blocks.length} listening texts selected, ${todo.length} to make, ${chars} characters, model ${model}.`);
console.log(`Speakers needed: ${cast.join(', ')}`);
if (flag('dry')) process.exit(0);

if (!key) { console.error('Set ELEVENLABS_API_KEY first (in .env.local).'); process.exit(1); }
const voicesPath = join(root, 'scripts', 'voices.json');
if (!existsSync(voicesPath)) { console.error('Create scripts/voices.json (copy voices.example.json and fill in voice ids).'); process.exit(1); }
const voices = JSON.parse(readFileSync(voicesPath, 'utf8'));
const missing = cast.filter((s) => !voiceOf(s)?.id || voiceOf(s).id.includes('VOICE_ID'));
if (missing.length) { console.error(`No voice id in voices.json for: ${missing.join(', ')}`); process.exit(1); }
try { execFileSync('ffmpeg', ['-version'], { stdio: 'ignore' }); } catch { console.error('ffmpeg is missing (brew install ffmpeg).'); process.exit(1); }

function voiceOf(speaker) {
  const v = voices[speaker];
  return typeof v === 'string' ? { id: v } : v;
}

function body(text, voice, minimal) {
  if (minimal) return { text, model_id: model };
  const settings = model === 'eleven_v3'
    ? { stability: 0.5 }
    : { stability: 0.45, similarity_boost: 0.8, style: 0.15, use_speaker_boost: true };
  if (voice.speed) settings.speed = voice.speed;
  return { text, model_id: model, language_code: 'de', voice_settings: settings };
}

async function tts(text, voice) {
  let minimal = false;
  for (let attempt = 1; attempt <= 4; attempt++) {
    const res = await fetch(`${API}/text-to-speech/${voice.id}?output_format=mp3_44100_128`, {
      method: 'POST',
      headers: { 'xi-api-key': key, 'content-type': 'application/json' },
      body: JSON.stringify(body(text, voice, minimal)),
    });
    if (res.ok) return Buffer.from(await res.arrayBuffer());
    const msg = await res.text();
    if ((res.status === 400 || res.status === 422) && !minimal) {
      console.warn(`  model rejected the settings (${msg.slice(0, 120)}), retrying with defaults`);
      minimal = true; continue;
    }
    if (res.status === 429 || res.status >= 500) { await new Promise((r) => setTimeout(r, 2000 * attempt)); continue; }
    throw new Error(`${res.status} ${msg}`);
  }
  throw new Error('ElevenLabs kept failing after 4 attempts.');
}

const tmp = join(root, '.audio-tmp');
mkdirSync(out, { recursive: true }); mkdirSync(tmp, { recursive: true });
const silence = join(tmp, 'pause.mp3');
execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'lavfi', '-i', 'anullsrc=r=44100:cl=mono', '-t', String(PAUSE_SECONDS), '-c:a', 'libmp3lame', '-b:a', '128k', silence]);

for (const b of todo) {
  const parts = [];
  for (const [i, line] of b.lines.entries()) {
    const p = join(tmp, `${b.id}-${i}.mp3`);
    writeFileSync(p, await tts(line.text, voiceOf(line.speaker)));
    if (i > 0) parts.push(silence);
    parts.push(p);
  }
  const list = join(tmp, `${b.id}.txt`);
  writeFileSync(list, parts.map((p) => `file '${p}'`).join('\n'));
  // Re-encode so the pauses join cleanly, and even out the loudness of different voices.
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'concat', '-safe', '0', '-i', list,
    '-af', 'loudnorm=I=-16:TP=-1.5:LRA=11', '-ar', '44100', '-ac', '1', '-c:a', 'libmp3lame', '-b:a', '128k', join(out, `${b.id}.mp3`)]);
  console.log(`made ${b.id}.mp3 (${b.lines.length} lines)`);
}
rmSync(tmp, { recursive: true, force: true });
writeFileSync(join(out, 'manifest.json'), JSON.stringify(all.map((b) => b.id).filter((id) => existsSync(join(out, `${id}.mp3`)))));
console.log('Done.');
