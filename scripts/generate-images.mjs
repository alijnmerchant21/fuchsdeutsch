// Makes the course pictures with FLUX.1 schnell on Cloudflare Workers AI (free: about 170 pictures a day).
// Usage:
//   npm run images -- --dry                    list what would be made
//   npm run images                             make up to 160 missing pictures (stays inside the free daily quota)
//   npm run images -- --course a2              only one course (a1, a2)
//   npm run images -- --kind cast              only the character cards (also: scene, vocab)
//   npm run images -- --only a1-k1-folge --force   remake one picture
//   npm run images -- --limit 40 --steps 8     fewer pictures, more detail each
// Setup (free): Cloudflare account > Workers AI > "Use REST API". Put CF_ACCOUNT_ID and CF_API_TOKEN in .env.local.
// Files land in public/images/<id>.webp (with ffmpeg) or .jpg, listed in public/images/manifest.json.
// The site shows a picture as soon as it is in the manifest. Run it again tomorrow to continue.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadContent } from './load-content.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const flag = (name) => args.includes(`--${name}`);
const opt = (name) => { const i = args.indexOf(`--${name}`); return i >= 0 ? args[i + 1] : undefined; };

const account = process.env.CF_ACCOUNT_ID;
const token = process.env.CF_API_TOKEN;
const MODEL = '@cf/black-forest-labs/flux-1-schnell';
const steps = Math.min(8, Math.max(1, Number(opt('steps') || 4)));
const limit = Number(opt('limit') || 160);
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
if (!account || !token) { console.error('Set CF_ACCOUNT_ID and CF_API_TOKEN in .env.local (Cloudflare > Workers AI > Use REST API).'); process.exit(1); }

let ffmpeg = true;
try { execFileSync('ffmpeg', ['-version'], { stdio: 'ignore' }); } catch { ffmpeg = false; console.log('ffmpeg not found: saving .jpg files (brew install ffmpeg for smaller .webp).'); }

const save = () => writeFileSync(manifestPath, JSON.stringify(Object.fromEntries(Object.entries(manifest).sort()), null, 1) + '\n');
let made = 0;
for (const s of todo) {
  const res = await fetch(`https://api.cloudflare.com/client/v4/accounts/${account}/ai/run/${MODEL}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt: s.prompt, steps, seed: [...s.id].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7) }),
  });
  const text = await res.text();
  let data = null;
  try { data = JSON.parse(text); } catch { /* not JSON */ }
  if (!res.ok || !data?.result?.image) {
    console.error(`  ${s.id}: failed (${res.status}) ${text.slice(0, 200)}`);
    if (res.status === 429 || /quota|limit|neurons/i.test(text)) { console.error('Daily free quota reached. Run again tomorrow.'); break; }
    continue;
  }
  const jpg = join(out, `${s.id}.jpg`);
  writeFileSync(jpg, Buffer.from(data.result.image, 'base64'));
  let file = `${s.id}.jpg`;
  if (ffmpeg) {
    const webp = join(out, `${s.id}.webp`);
    try {
      execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', jpg, '-vf', `scale=${WIDTH[s.kind]}:-2`, '-quality', '78', webp]);
      rmSync(jpg); file = `${s.id}.webp`;
    } catch { /* keep the jpg */ }
  }
  manifest[s.id] = file;
  save();
  made++;
  console.log(`  ${s.id} ✓ (${made}/${todo.length})`);
}
save();
console.log(`Done: ${made} new pictures. Check them in public/images, delete any you dislike from manifest.json and run again with --only <id> --force.`);
