// Turns every listening text into an MP3 with ElevenLabs, one voice per speaker.
// Usage:  ELEVENLABS_API_KEY=... npm run audio
// 1. Put a voice id for each speaker in scripts/voices.json (see voices.example.json).
// 2. Run the script. Files land in public/audio/<block id>.mp3 and the player uses them automatically.
// Needs Node 22+ and ffmpeg (to join the lines of a dialogue).
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { allAudio, loadContent } from './load-content.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const key = process.env.ELEVENLABS_API_KEY;
if (!key) { console.error('Set ELEVENLABS_API_KEY first.'); process.exit(1); }
const voicesPath = join(root, 'scripts', 'voices.json');
if (!existsSync(voicesPath)) { console.error('Create scripts/voices.json (copy voices.example.json and fill in voice ids).'); process.exit(1); }
const voices = JSON.parse(readFileSync(voicesPath, 'utf8'));

// Collect every listening text from the course content.
const blocks = allAudio(loadContent()).map((b) => ({ id: b.id, lines: b.lines }));
console.log(`Found ${blocks.length} listening texts.`);

const out = join(root, 'public', 'audio');
const tmp = join(root, '.audio-tmp');
mkdirSync(out, { recursive: true }); mkdirSync(tmp, { recursive: true });

for (const b of blocks) {
  const target = join(out, `${b.id}.mp3`);
  if (existsSync(target) && !process.argv.includes('--force')) { console.log(`skip ${b.id} (exists)`); continue; }
  const parts = [];
  for (const [i, line] of b.lines.entries()) {
    const voice = voices[line.speaker];
    if (!voice) { console.error(`No voice id for speaker "${line.speaker}" in voices.json`); process.exit(1); }
    const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voice}?output_format=mp3_44100_128`, {
      method: 'POST',
      headers: { 'xi-api-key': key, 'content-type': 'application/json' },
      body: JSON.stringify({ text: line.text, model_id: 'eleven_multilingual_v2', language_code: 'de' }),
    });
    if (!res.ok) { console.error(`${b.id} line ${i}: ${res.status} ${await res.text()}`); process.exit(1); }
    const p = join(tmp, `${b.id}-${i}.mp3`);
    writeFileSync(p, Buffer.from(await res.arrayBuffer()));
    parts.push(p);
  }
  const list = join(tmp, `${b.id}.txt`);
  writeFileSync(list, parts.map((p) => `file '${p}'`).join('\n'));
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'concat', '-safe', '0', '-i', list, '-c', 'copy', target]);
  console.log(`made ${b.id}.mp3 (${b.lines.length} lines)`);
}
rmSync(tmp, { recursive: true, force: true });
writeFileSync(join(out, 'manifest.json'), JSON.stringify(blocks.map((b) => b.id).filter((id) => existsSync(join(out, `${id}.mp3`)))));
console.log('Done.');
