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
  const { mkdirSync } = require('node:fs');
  // Transpile content/ and its subfolders (content/a1/ …), keeping the folder structure.
  const walk = (dir, rel) => {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      if (e.isDirectory()) { mkdirSync(join(out, rel, e.name), { recursive: true }); walk(join(dir, e.name), join(rel, e.name)); }
      else if (e.name.endsWith('.ts')) {
        const js = ts.transpileModule(readFileSync(join(dir, e.name), 'utf8'), { compilerOptions: { module: 'commonjs', target: 'es2020' } }).outputText;
        writeFileSync(join(out, rel, e.name.replace(/\.ts$/, '.js')), js);
      }
    }
  };
  walk(join(root, 'content'), '');
  writeFileSync(join(out, 'package.json'), '{"type":"commonjs"}');
  const data = {
    courses: require(join(out, 'course.js')).courses,
    glossaryFor: require(join(out, 'glossary.js')).glossaryFor,
    speakers: require(join(out, 'speakers.js')).speakers,
    games: require(join(out, 'games.js')).games,
    taskEn: require(join(out, 'taskEn.js')).TASK_EN,
  };
  rmSync(out, { recursive: true, force: true });
  return data;
}

/** Every listening text in the course, including the ones inside exams. */
export function allAudio(data) {
  const list = [];
  for (const course of data.courses) {
    for (const ch of course.chapters) {
      for (const s of ch.sections) for (const b of s.blocks) if (b.t === 'audio') list.push(b);
      for (const it of ch.exam) if (it.stimulus?.t === 'audio') list.push(it.stimulus);
    }
    for (const part of Object.values(course.final)) for (const it of part) if (it.stimulus?.t === 'audio') list.push(it.stimulus);
  }
  const ids = new Set();
  for (const b of list) { if (ids.has(b.id)) throw new Error(`Two listening texts share the id "${b.id}". Audio file names must be unique.`); ids.add(b.id); }
  return list;
}
