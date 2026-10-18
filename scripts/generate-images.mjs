// Makes the course pictures with FLUX.1 schnell on Cloudflare Workers AI (free: about 170 pictures a day).
// Usage:
//   npm run images -- --dry                    list what would be made
//   npm run images                             make missing pictures, up to 160 per Cloudflare account (inside the free daily quota)
//   npm run images -- --course a2              only one course (a1, a2)
//   npm run images -- --kind cast              only the character cards (also: scene, vocab)
//   npm run images -- --only a1-k1-folge --force   remake one picture
//   npm run images -- --limit 40 --steps 8     fewer pictures, more detail each
// Setup (free): Cloudflare account > Workers AI > "Use REST API". Put CF_ACCOUNT_ID and CF_API_TOKEN in .env.local.
// More accounts = more pictures per day: add CF_ACCOUNT_ID_1 + CF_API_TOKEN_1, CF_ACCOUNT_ID_2 + CF_API_TOKEN_2, …
// When one account hits its daily quota, the script moves on to the next one.
// Files land in public/images/<id>.webp (with ffmpeg) or .jpg, listed in public/images/manifest.json.
// The site shows a picture as soon as it is in the manifest. Run it again tomorrow to continue.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, renameSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadContent } from './load-content.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const flag = (name) => args.includes(`--${name}`);
const opt = (name) => { const i = args.indexOf(`--${name}`); return i >= 0 ? args[i + 1] : undefined; };

// Every Cloudflare account in .env.local: CF_ACCOUNT_ID/CF_API_TOKEN plus CF_ACCOUNT_ID_<n>/CF_API_TOKEN_<n>.
const accounts = [];
for (const [k, v] of Object.entries(process.env)) {
  const m = k.match(/^CF_ACCOUNT_ID(?:_(\d+))?$/);
  if (!m || !v?.trim()) continue;
  const t = process.env[m[1] ? `CF_API_TOKEN_${m[1]}` : 'CF_API_TOKEN'];
  if (!t?.trim()) { console.log(`${k} has no matching ${m[1] ? `CF_API_TOKEN_${m[1]}` : 'CF_API_TOKEN'}, skipped.`); continue; }
  accounts.push({ name: k.replace('CF_ACCOUNT_ID', 'account').replace('account_', 'account ') || 'account', n: Number(m[1] ?? -1), id: v.trim(), token: t.trim() });
}
accounts.sort((a, b) => a.n - b.n);
let current = 0;
const MODEL = '@cf/black-forest-labs/flux-1-schnell';
const steps = Math.min(8, Math.max(1, Number(opt('steps') || 4)));
const limit = Number(opt('limit') || 160 * Math.max(1, accounts.length));
const WIDTH = { cast: 512, scene: 1024, vocab: 384 };

const out = join(root, 'public', 'images');
mkdirSync(out, { recursive: true });
const manifestPath = join(out, 'manifest.json');
const manifest = existsSync(manifestPath) ? JSON.parse(readFileSync(manifestPath, 'utf8')) : {};

const { images } = loadContent();
let specs = images.allImageSpecs(opt('course'));
const kind = opt('kind');
if (kind) specs = specs.filter((s) => s.kind === kind);
const only = opt('only');
if (only) { const ids = new Set(only.split(',')); specs = specs.filter((s) => ids.has(s.id)); }
const todo = specs.filter((s) => flag('force') || !manifest[s.id]).slice(0, limit);
const counts = todo.reduce((m, s) => ({ ...m, [s.kind]: (m[s.kind] || 0) + 1 }), {});
console.log(`${specs.length} pictures selected, ${specs.filter((s) => manifest[s.id]).length} already made, ${todo.length} to make now (${Object.entries(counts).map(([k, n]) => `${n} ${k}`).join(', ') || 'none'}), ${steps} steps.`);
if (flag('dry')) { for (const s of todo) console.log(`  ${s.id}: ${s.prompt.slice(0, 120)}…`); process.exit(0); }
if (!todo.length) process.exit(0);
if (!accounts.length) { console.error('Set CF_ACCOUNT_ID and CF_API_TOKEN in .env.local (Cloudflare > Workers AI > Use REST API).'); process.exit(1); }
console.log(`${accounts.length} Cloudflare account(s).`);

let ffmpeg = true;
try { execFileSync('ffmpeg', ['-version'], { stdio: 'ignore' }); } catch { ffmpeg = false; console.log('ffmpeg not found: saving .jpg files (brew install ffmpeg for smaller .webp).'); }

const save = () => writeFileSync(manifestPath, JSON.stringify(Object.fromEntries(Object.entries(manifest).sort()), null, 1) + '\n');
let made = 0;
const isQuota = (status, text) => status === 429 || /quota|daily|neurons|4006/i.test(text);
outer: for (const s of todo) {
  let data = null;
  for (;;) {
    const acc = accounts[current];
    const res = await fetch(`${process.env.CF_API_BASE || 'https://api.cloudflare.com/client/v4'}/accounts/${acc.id}/ai/run/${MODEL}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${acc.token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: s.prompt, steps }),
    });
    const text = await res.text();
    data = null;
    try { data = JSON.parse(text); } catch { /* not JSON */ }
    if (res.ok && data?.result?.image) break;
    const bad = res.status === 401 || res.status === 403;
    if (isQuota(res.status, text) || bad) {
      console.log(`  ${acc.name}: ${bad ? 'token or account id not accepted' : 'daily quota used up'}, switching account.`);
      accounts.splice(current, 1);
      if (!accounts.length) { console.error('All Cloudflare accounts are used up for today. Run again tomorrow, it continues where it stopped.'); break outer; }
      current %= accounts.length;
      continue;
    }
    console.error(`  ${s.id}: failed (${res.status}) ${text.slice(0, 200)}`);
    continue outer;
  }
  const jpg = join(out, `${s.id}.jpg`);
  writeFileSync(jpg, Buffer.from(data.result.image, 'base64'));
  let file = `${s.id}.jpg`;
  if (ffmpeg) {
    const webp = join(out, `${s.id}.webp`);
    const quiet = { stdio: 'ignore' };
    try {
      execFileSync('ffmpeg', ['-y', '-i', jpg, '-vf', `scale=${WIDTH[s.kind]}:-2`, '-quality', '78', webp], quiet);
      rmSync(jpg); file = `${s.id}.webp`;
    } catch {
      // This ffmpeg has no webp encoder: shrink the jpg instead.
      rmSync(webp, { force: true });
      const small = join(out, `${s.id}.small.jpg`);
      try {
        execFileSync('ffmpeg', ['-y', '-i', jpg, '-vf', `scale=${WIDTH[s.kind]}:-2`, '-q:v', '5', small], quiet);
        renameSync(small, jpg);
      } catch { rmSync(small, { force: true }); }
    }
  }
  manifest[s.id] = file;
  save();
  made++;
  console.log(`  ${s.id} ✓ (${made}/${todo.length})`);
}
save();
console.log(`Done: ${made} new pictures. Check them in public/images, delete any you dislike from manifest.json and run again with --only <id> --force.`);
