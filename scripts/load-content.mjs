// Loads the TypeScript content files in plain Node, so scripts can read the course data.
import { mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

export const root = join(dirname(fileURLToPath(import.meta.url)), '..');

export function loadContent() {
  const require = createRequire(import.meta.url);
  const ts = require('typescript');
  const out = mkdtempSync(join(tmpdir(), 'fuchsdeutsch-'));
  for (const f of readdirSync(join(root, 'content')).filter((x) => x.endsWith('.ts'))) {
    const js = ts.transpileModule(readFileSync(join(root, 'content', f), 'utf8'), { compilerOptions: { module: 'commonjs', target: 'es2020' } }).outputText;
    writeFileSync(join(out, f.replace(/\.ts$/, '.js')), js);
  }
  writeFileSync(join(out, 'package.json'), '{"type":"commonjs"}');
  const data = {
    course: require(join(out, 'course.js')).course,
    final: require(join(out, 'final.js')),
    glossary: require(join(out, 'glossary.js')).glossary,
    speakers: require(join(out, 'speakers.js')).speakers,
    games: require(join(out, 'games.js')).games,
  };
  rmSync(out, { recursive: true, force: true });
  return data;
}

/** Every listening text in the course, including the ones inside exams. */
export function allAudio(data) {
  const list = [];
  for (const ch of data.course.chapters) {
    for (const s of ch.sections) for (const b of s.blocks) if (b.t === 'audio') list.push(b);
    for (const it of ch.exam) if (it.stimulus?.t === 'audio') list.push(it.stimulus);
  }
  for (const key of ['finalLesen', 'finalHoeren', 'finalSchreiben', 'finalSprechen']) {
    for (const it of data.final[key]) if (it.stimulus?.t === 'audio') list.push(it.stimulus);
  }
  return list;
}
