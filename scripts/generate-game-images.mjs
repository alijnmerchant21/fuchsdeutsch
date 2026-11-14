// Makes the realistic pictures for the Spiele games with FLUX.1 schnell on Cloudflare Workers AI.
// Every game lists its pictures in spiele-app/public/games/img/<game>/prompts.json: [{ key, prompt, w, h }].
// The picture lands next to it as <key>.webp, cropped to w x h. Games show a drawing until the file exists.
// Usage:
//   npm run game-images -- --dry               list what would be made
//   npm run game-images                        make all missing pictures
//   npm run game-images -- --game wohin-damit  only one game
//   npm run game-images -- --only sofa --game wohin-damit --force   remake one picture
// Uses the same CF_ACCOUNT_ID / CF_API_TOKEN (and _1, _2, …) from .env.local as `npm run images`.
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const flag = (name) => args.includes(`--${name}`);
const opt = (name) => { const i = args.indexOf(`--${name}`); return i >= 0 ? args[i + 1] : undefined; };

const accounts = [];
for (const [k, v] of Object.entries(process.env)) {
  const m = k.match(/^CF_ACCOUNT_ID(?:_(\d+))?$/);
  if (!m || !v?.trim()) continue;
  const t = process.env[m[1] ? `CF_API_TOKEN_${m[1]}` : 'CF_API_TOKEN'];
  if (t?.trim()) accounts.push({ name: k, n: Number(m[1] ?? -1), id: v.trim(), token: t.trim() });
}
accounts.sort((a, b) => a.n - b.n);
let current = 0;
const MODEL = '@cf/black-forest-labs/flux-1-schnell';
const steps = Math.min(8, Math.max(1, Number(opt('steps') || 6)));
const STYLE = ' Photorealistic, soft warm natural light, gentle pastel color grading, high detail, no text, no letters, no logos, no watermark.';

const base = join(root, 'spiele-app', 'public', 'games', 'img');
const games = readdirSync(base, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name)
  .filter((g) => !opt('game') || g === opt('game'));
const only = opt('only') ? new Set(opt('only').split(',')) : null;
const todo = [];
for (const g of games) {
  const p = join(base, g, 'prompts.json');
  if (!existsSync(p)) continue;
  for (const s of JSON.parse(readFileSync(p, 'utf8'))) {
    if (only && !only.has(s.key)) continue;
    const file = join(base, g, `${s.key}.webp`);
    if (!flag('force') && existsSync(file)) continue;
    todo.push({ ...s, game: g, file });
  }
}
console.log(`${todo.length} pictures to make in ${games.length} game(s).`);
if (flag('dry')) { for (const s of todo) console.log(`  ${s.game}/${s.key} ${s.w}x${s.h}: ${s.prompt.slice(0, 100)}…`); process.exit(0); }
if (!todo.length) process.exit(0);
if (!accounts.length) { console.error('Set CF_ACCOUNT_ID and CF_API_TOKEN in .env.local.'); process.exit(1); }

let made = 0;
const isQuota = (status, text) => status === 429 || /quota|daily|neurons|4006/i.test(text);
outer: for (const s of todo) {
  let data = null;
  for (;;) {
    const acc = accounts[current];
    const res = await fetch(`https://api.cloudflare.com/client/v4/accounts/${acc.id}/ai/run/${MODEL}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${acc.token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: s.prompt + STYLE, steps }),
    });
    const text = await res.text();
    try { data = JSON.parse(text); } catch { data = null; }
    if (res.ok && data?.result?.image) break;
    const bad = res.status === 401 || res.status === 403;
    if (isQuota(res.status, text) || bad) {
      console.log(`  ${acc.name}: ${bad ? 'not accepted' : 'daily quota used up'}, switching account.`);
      accounts.splice(current, 1);
      if (!accounts.length) { console.error('All accounts used up for today. Run again tomorrow.'); break outer; }
      current %= accounts.length;
      continue;
    }
    console.error(`  ${s.game}/${s.key}: failed (${res.status}) ${text.slice(0, 160)}`);
    continue outer;
  }
  const w = s.w || 1024, h = s.h || 768;
  const buf = await sharp(Buffer.from(data.result.image, 'base64')).resize(w, h, { fit: 'cover' }).webp({ quality: 78 }).toBuffer();
  writeFileSync(s.file, buf);
  made++;
  console.log(`  ${s.game}/${s.key} ✓ (${made}/${todo.length})`);
}
console.log(`Done: ${made} new pictures.`);
