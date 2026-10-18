// Turns every listening text into an MP3 with ElevenLabs, one voice per speaker.
// Usage:
//   npm run audio -- --dry --course a1        what would be made, and how many characters it costs
//   npm run audio -- --voices                 list German voices to pick from
//   npm run audio -- --course a1              make the A1 files
//   npm run audio -- --only t1-audio --force  remake one file
//   npm run audio -- --prefix a1-k1- --max-chars 9000   one chapter, never more than 9000 characters
//   npm run audio -- --credits                how many credits each key has left
// Setup: ELEVENLABS_API_KEY in .env.local, and a voice for each speaker in scripts/voices.json.
// More keys: ELEVENLABS_API_KEY_1, _2, … (or ELEVENLABS_API_KEYS=a,b,c). When one runs out of credits,
// the next one is used. A voice that one account cannot use is tried on the next account.
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

// Every key in .env.local, in order: ELEVENLABS_API_KEY, then ELEVENLABS_API_KEY_1, _2, …, then ELEVENLABS_API_KEYS.
const keys = [...new Set([
  process.env.ELEVENLABS_API_KEY,
  ...Object.keys(process.env).filter((k) => /^ELEVENLABS_API_KEY_\d+$/.test(k)).sort((a, b) => Number(a.split('_').pop()) - Number(b.split('_').pop())).map((k) => process.env[k]),
  ...(process.env.ELEVENLABS_API_KEYS || '').split(','),
].map((k) => (k || '').trim()).filter(Boolean))];
const key = keys[0];
const label = (i) => `key ${i + 1} (…${keys[i].slice(-4)})`;
const model = process.env.ELEVENLABS_MODEL || 'eleven_v3';
const API = process.env.ELEVENLABS_API_BASE || 'https://api.elevenlabs.io/v1';
const PAUSE_SECONDS = 0.45;

if (flag('credits')) {
  if (!keys.length) { console.error('No ElevenLabs key in .env.local.'); process.exit(1); }
  let total = 0;
  for (const [i, k] of keys.entries()) {
    const res = await fetch(`${API}/user/subscription`, { headers: { 'xi-api-key': k } });
    if (!res.ok) { console.log(`${label(i)}: error ${res.status}`); continue; }
    const sub = await res.json();
    const left = Math.max(0, (sub.character_limit || 0) - (sub.character_count || 0));
    total += left;
    const reset = sub.next_character_count_reset_unix ? new Date(sub.next_character_count_reset_unix * 1000).toLocaleDateString() : '?';
    console.log(`${label(i)}: ${left} of ${sub.character_limit} credits left (${sub.tier}), resets ${reset}`);
  }
  console.log(`Total: ${total} credits.`);
  process.exit(0);
}

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
console.log(`${blocks.length} listening texts selected, ${todo.length} to make, ${chars} characters, model ${model}, ${keys.length} key(s).`);
console.log(`Speakers needed: ${cast.join(', ')}`);
if (flag('dry')) process.exit(0);

if (!keys.length) { console.error('Set ELEVENLABS_API_KEY first (in .env.local).'); process.exit(1); }
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

class OutOfCredits extends Error {}

let current = 0;
const spent = new Set();        // keys with no credits left
const noVoice = new Map();      // voice id -> keys that cannot use it

/** Next key that still has credits and has not failed for this voice. */
function pickKey(voiceId) {
  const bad = noVoice.get(voiceId) || new Set();
  for (let n = 0; n < keys.length; n++) {
    const i = (current + n) % keys.length;
    if (!spent.has(i) && !bad.has(i)) return i;
  }
  return -1;
}

async function tts(text, voice) {
  let minimal = false;
  for (let attempt = 1; attempt <= 4 + keys.length * 2; attempt++) {
    const i = pickKey(voice.id);
    if (i < 0) {
      if (spent.size === keys.length) throw new OutOfCredits('All keys are out of credits.');
      throw new Error(`No key can use voice ${voice.id}. Add it to "My Voices" in one of the accounts.`);
    }
    if (i !== current) { console.log(`  switching to ${label(i)}`); current = i; }
    const res = await fetch(`${API}/text-to-speech/${voice.id}?output_format=mp3_44100_128`, {
      method: 'POST',
      headers: { 'xi-api-key': keys[i], 'content-type': 'application/json' },
      body: JSON.stringify(body(text, voice, minimal)),
    });
    if (res.ok) return Buffer.from(await res.arrayBuffer());
    const msg = await res.text();
    if (/quota_exceeded|insufficient|credits|character_limit/i.test(msg) || res.status === 402) {
      console.log(`  ${label(i)} is out of credits`);
      spent.add(i); continue;
    }
    if (res.status === 401) { console.log(`  ${label(i)} was refused (${msg.slice(0, 80)}), skipping it`); spent.add(i); continue; }
    if (res.status === 404 || /voice_not_found|voice.*(not|does not) exist/i.test(msg)) {
      console.log(`  ${label(i)} cannot use voice ${voice.id}, trying the next key`);
      if (!noVoice.has(voice.id)) noVoice.set(voice.id, new Set());
      noVoice.get(voice.id).add(i); continue;
    }
    if ((res.status === 400 || res.status === 422) && !minimal) {
      console.warn(`  model rejected the settings (${msg.slice(0, 120)}), retrying with defaults`);
      minimal = true; continue;
    }
    if (res.status === 429 || res.status >= 500) { await new Promise((r) => setTimeout(r, 2000 * attempt)); continue; }
    throw new Error(`${res.status} ${msg}`);
  }
  throw new Error('ElevenLabs kept failing after several attempts.');
}

const tmp = join(root, '.audio-tmp');
mkdirSync(out, { recursive: true }); mkdirSync(tmp, { recursive: true });
const silence = join(tmp, 'pause.mp3');
execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'lavfi', '-i', 'anullsrc=r=44100:cl=mono', '-t', String(PAUSE_SECONDS), '-c:a', 'libmp3lame', '-b:a', '128k', silence]);

const writeManifest = () => writeFileSync(join(out, 'manifest.json'), JSON.stringify(all.map((b) => b.id).filter((id) => existsSync(join(out, `${id}.mp3`)))));
let made = 0;
try {
  for (const b of todo) {
    const parts = [];
    for (const [i, line] of b.lines.entries()) {
      const p = join(tmp, `${b.id}-${i}.mp3`);
      // A line made in an earlier run that stopped halfway is reused, so no credits are spent twice.
      if (!existsSync(p) || flag('force')) writeFileSync(p, await tts(line.text, voiceOf(line.speaker)));
      if (i > 0) parts.push(silence);
      parts.push(p);
    }
    const list = join(tmp, `${b.id}.txt`);
    writeFileSync(list, parts.map((p) => `file '${p}'`).join('\n'));
    // Re-encode so the pauses join cleanly, and even out the loudness of different voices.
    execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'concat', '-safe', '0', '-i', list,
      '-af', 'loudnorm=I=-16:TP=-1.5:LRA=11', '-ar', '44100', '-ac', '1', '-c:a', 'libmp3lame', '-b:a', '128k', join(out, `${b.id}.mp3`)]);
    for (const [i] of b.lines.entries()) rmSync(join(tmp, `${b.id}-${i}.mp3`), { force: true });
    writeManifest();
    made++;
    console.log(`made ${b.id}.mp3 (${b.lines.length} lines) [${made}/${todo.length}]`);
  }
} catch (e) {
  writeManifest();
  if (e instanceof OutOfCredits) {
    console.log(`\nStopped: all ${keys.length} key(s) are out of credits. Made ${made} of ${todo.length} files.`);
    console.log('Run the same command again after the credits reset or with a new key. Finished lines are kept.');
    process.exit(0);
  }
  throw e;
}
rmSync(tmp, { recursive: true, force: true });
writeManifest();
console.log(`Done: ${made} files.`);
