#!/usr/bin/env node
/* Makes the MP3s for every own Hören text in content/<level>/bank.json that has no file yet.
   Usage: node tools/make-audio.mjs ENV_FILE [a1 a2 b2 ...] [--only <setId> ...]
   ENV_FILE has ELEVENLABS_API_KEY=… lines (any names starting with ELEVENLABS_API_KEY). Keys are used in order;
   when one runs out of credits the next one is used. Each spoken line is cached in .audio-cache/ so nothing is paid twice.
   Needs ffmpeg. Voices: same lists as lib/voices.ts. */
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';

const ROOT = resolve(dirname(new URL(import.meta.url).pathname), '..');
const args = process.argv.slice(2);
const envFile = args[0];
const onlyAt = args.indexOf('--only');
const only = onlyAt >= 0 ? args.slice(onlyAt + 1) : [];
const levels = (onlyAt >= 0 ? args.slice(1, onlyAt) : args.slice(1)).filter((x) => /^[ab][12]$/.test(x));
const KEYS = readFileSync(envFile, 'utf8').split('\n').map((l) => l.match(/^ELEVENLABS_API_KEY[^=]*=\s*(\S+)/)?.[1]).filter(Boolean);
if (!KEYS.length) { console.error('No ELEVENLABS_API_KEY in', envFile); process.exit(1); }
let ki = 0;

const FEMALE = ['EXAVITQu4vr4xnSDxMaL', 'XrExE9yKIg1WjnnlVkGX', 'cgSgspJ2msm6clMCkdW9', 'Xb7hH8MSUJpSbSDYk0k2', 'pFZP5JQG7iQjIQuC4Bku', 'FGY2WhTYpPnrIDTdsKH5'];
const MALE = ['onwK4e9ZLuTAKqWW03F9', 'TX3LPaxmHKxFdv7VOQHJ', 'JBFqnCBsd6RMkjVDRZzb', 'bIHbv24MWmeRgasZH58o', 'nPczCjzI2devNBz1zQrb', 'cjVigY5qzO86Huf0OWal', 'iP95p4xoKVk53GoZ742B'];
const SETTINGS = { stability: 0.45, similarity_boost: 0.8, style: 0.15, use_speaker_boost: true, speed: 0.88 };
const MODEL = 'eleven_multilingual_v2';
const WPM = { a1: 105, a2: 115, b1: 125, b2: 140 };

function assignVoices(codes, genders = {}, seed = '') {
  let h = 0; for (const ch of seed) h = (h * 31 + ch.charCodeAt(0)) | 0;
  const off = Math.abs(h); const out = {}; let f = 0, m = 0;
  for (const c of codes) {
    if (out[c]) continue;
    const g = genders[c] ?? (/^(ANS|ANSAGE|SPRECHER|MOD|RADIO)/.test(c) ? 'm' : 'f');
    out[c] = g === 'm' ? MALE[(off + m++) % MALE.length] : FEMALE[(off + f++) % FEMALE.length];
  }
  return out;
}

async function tts(voice, text, prev, next) {
  const body = { text, model_id: MODEL, language_code: 'de', voice_settings: SETTINGS };
  if (prev) body.previous_text = prev;
  if (next) body.next_text = next;
  while (ki < KEYS.length) {
    const r = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voice}?output_format=mp3_44100_128`, {
      method: 'POST', headers: { 'xi-api-key': KEYS[ki], 'Content-Type': 'application/json', Accept: 'audio/mpeg' }, body: JSON.stringify(body),
    });
    if (r.ok) return Buffer.from(await r.arrayBuffer());
    const msg = await r.text();
    if ([401, 402, 429].includes(r.status) && /quota|credits|limit|missing_permissions|invalid_api_key|unusual/i.test(msg)) { console.log(`  key ${ki + 1} not usable (${r.status}), next key`); ki++; continue; }
    if (r.status === 429) { await new Promise((s) => setTimeout(s, 5000)); continue; }
    if (r.status === 400 && msg.includes('language_code') && body.language_code) { delete body.language_code; continue; }
    throw new Error(`ElevenLabs ${r.status}: ${msg.slice(0, 300)}`);
  }
  throw new Error('All keys used up.');
}

const cache = join(ROOT, '.audio-cache'); mkdirSync(cache, { recursive: true });
const gapFile = (sec) => {
  const p = join(cache, `gap${sec}.mp3`);
  if (!existsSync(p)) execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'lavfi', '-i', 'anullsrc=r=44100:cl=mono', '-t', String(sec), '-q:a', '4', p]);
  return p;
};
const ff = (a) => execFileSync('ffmpeg', ['-y', '-loglevel', 'error', ...a]);

let made = 0, chars = 0;
for (const level of levels.length ? levels : ['a1', 'a2', 'b1', 'b2']) {
  const f = join(ROOT, 'content', level, 'bank.json');
  if (!existsSync(f)) continue;
  const bank = JSON.parse(readFileSync(f, 'utf8'));
  for (const set of Object.values(bank)) {
    if (set.module !== 'hoeren' || (only.length && !only.includes(set.id))) continue;
    for (const g of set.groups) {
      if (!g.audio || !g.script?.length) continue;
      const target = join(ROOT, 'public', g.audio);
      if (existsSync(target)) continue;
      mkdirSync(dirname(target), { recursive: true });
      const voices = assignVoices(g.script.map(([c]) => c), set.genders, set.id);
      const parts = [];
      for (let i = 0; i < g.script.length; i++) {
        const [sp, text] = g.script[i];
        const prev = i && g.script[i - 1][0] === sp ? g.script[i - 1][1] : undefined;
        const next = i + 1 < g.script.length && g.script[i + 1][0] === sp ? g.script[i + 1][1] : undefined;
        const h = createHash('sha1').update(JSON.stringify([voices[sp], text, prev, next, MODEL, SETTINGS])).digest('hex').slice(0, 16);
        const p = join(cache, h + '.mp3');
        if (!existsSync(p)) { writeFileSync(p, await tts(voices[sp], text, prev, next)); chars += text.length; }
        parts.push(p);
        if (i + 1 < g.script.length) parts.push(gapFile(g.script[i + 1][0] !== sp ? 0.45 : 0.8));
      }
      const name = createHash('sha1').update(g.audio).digest('hex').slice(0, 10);
      const list = join(cache, name + '.txt');
      writeFileSync(list, parts.map((x) => `file '${x}'\n`).join(''));
      const raw = join(cache, name + '-raw.mp3');
      ff(['-f', 'concat', '-safe', '0', '-i', list, '-af', 'loudnorm=I=-18:TP=-1.5', '-ar', '44100', '-ac', '1', '-b:a', '96k', raw]);
      const words = g.script.reduce((a, [, t]) => a + t.split(/\s+/).length, 0);
      const dur = parseFloat(execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', raw]).toString());
      const tempo = Math.max(0.8, Math.min(1, +(WPM[level] / (words / (dur / 60))).toFixed(3)));
      ff(['-i', raw, '-af', `atempo=${tempo}`, '-ar', '44100', '-ac', '1', '-b:a', '96k', target]);
      made++;
      console.log(`${g.audio}  ${g.script.length} lines, ${Math.round(dur)}s, tempo ${tempo}`);
    }
  }
}
console.log(`done: ${made} files, ${chars} new characters, last key ${ki + 1}`);
