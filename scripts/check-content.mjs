// Checks the course content for mistakes a learner would trip over. Run: npm run check
import { allAudio, loadContent } from './load-content.mjs';

const data = loadContent();
const errors = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);
const norm = (s) => s.trim().toLowerCase().replace(/\s+/g, ' ').replace(/ß/g, 'ss').replace(/[.!?,]+$/g, '');
const stats = { sections: 0, blocks: 0, exercises: 0, audio: 0, examItems: 0, words: 0 };

let glossary = {};
function rich(where, s) {
  if (!s) return;
  stats.words += s.split(/\s+/).length;
  for (const m of s.matchAll(/\[\[([^\]]+)\]\]/g)) {
    const [a, b] = m[1].split('|');
    if (!(glossary[a] || (b && glossary[b]))) err(where, `glossary entry missing for [[${m[1]}]]`);
  }
  if (/~~|\{\{|\}\}/.test(s)) err(where, 'stray markup in text');
}

function block(where, b, seen) {
  const w = `${where}/${b.id}`;
  if (seen.has(b.id)) err(w, 'duplicate block id in this section');
  seen.add(b.id);
  stats.blocks++;
  rich(w, b.body); rich(w, b.prompt); rich(w, b.q); rich(w, b.intro); rich(w, b.note);
  (b.notes || []).forEach((n) => rich(w, n));
  (b.rows || []).flat().forEach((c) => rich(w, c));
  switch (b.t) {
    case 'mcq':
      stats.exercises++;
      if (!(b.answer >= 0 && b.answer < b.options.length)) err(w, 'answer index out of range');
      if (new Set(b.options).size !== b.options.length) err(w, 'duplicate options');
      break;
    case 'gap': {
      stats.exercises++;
      const answers = b.lines.flatMap((l) => [...l.matchAll(/\{\{([^}]+)\}\}/g)].map((m) => m[1].split('|')));
      if (!answers.length) err(w, 'no gaps');
      if (b.bank) {
        const bank = b.bank.map(norm);
        for (const a of answers) if (!a.some((x) => bank.includes(norm(x)))) err(w, `answer "${a[0]}" is not in the word bank`);
        if (b.bank.length < answers.length && new Set(answers.map((a) => norm(a[0]))).size > b.bank.length) err(w, 'word bank is smaller than the number of different answers');
      }
      break;
    }
    case 'match':
      stats.exercises++;
      if (new Set(b.pairs.map((p) => p[0])).size !== b.pairs.length) err(w, 'duplicate left side');
      if (new Set(b.pairs.map((p) => p[1])).size !== b.pairs.length) err(w, 'duplicate right side (pairs would be ambiguous)');
      break;
    case 'order':
      stats.exercises++;
      if (!b.answers.some((a) => norm(a) === norm(b.words.join(' ')))) {
        const sorted = (x) => [...x].sort().join('|');
        if (!b.answers.some((a) => sorted(a.split(' ')) === sorted(b.words.join(' ').split(' ')))) err(w, 'answer does not use exactly the given words');
      }
      if (b.words.length < 3) err(w, 'fewer than 3 parts');
      if (new Set(b.words).size !== b.words.length) err(w, 'duplicate parts (order would be ambiguous)');
      break;
    case 'sort':
      stats.exercises++;
      for (const it of b.items) if (!(it.cat >= 0 && it.cat < b.cats.length)) err(w, `category out of range for "${it.text}"`);
      for (let c = 0; c < b.cats.length; c++) if (!b.items.some((it) => it.cat === c)) err(w, `category "${b.cats[c]}" has no items`);
      break;
    case 'compose':
      stats.exercises++;
      for (const [i, st] of b.steps.entries()) {
        if (st.words.length < 3) err(w, `step ${i + 1} has fewer than 3 parts`);
        if (new Set(st.words).size !== st.words.length) err(w, `step ${i + 1} has duplicate parts`);
        if (!/[.?!]$/.test(st.words[st.words.length - 1])) err(w, `step ${i + 1} does not end with punctuation`);
      }
      break;
    case 'write':
      err(w, 'free writing block found (not checkable)');
      break;
    case 'audio':
      stats.audio++;
      for (const l of b.lines) if (!data.speakers[l.speaker]) err(w, `unknown speaker "${l.speaker}"`);
      break;
    case 'cards':
      if (b.cards.length < 6) err(w, 'fewer than 6 cards');
      break;
  }
}

const gameIds = new Set(data.games.map((g) => g.id));
if (gameIds.size !== data.games.length) err('games', 'duplicate game id');
for (const g of data.games) {
  if (g.engine === 'sprint') for (const it of g.items) { if (it.wrong.includes(it.a)) err(`game ${g.id}`, `"${it.q}" lists the right answer as wrong`); }
  if (g.engine === 'memory') { if (g.pairs.length < 8) err(`game ${g.id}`, 'needs at least 8 pairs'); const all = g.pairs.flat(); if (new Set(all).size !== all.length) err(`game ${g.id}`, 'duplicate card text'); }
  if (g.engine === 'satzbau') { if (g.sentences.length < 6) err(`game ${g.id}`, 'needs at least 6 sentences'); for (const s of g.sentences) if (new Set(s.parts).size !== s.parts.length) err(`game ${g.id}`, `duplicate parts in "${s.parts.join(' ')}"`); }
  if (g.engine === 'regen') for (const w of g.words) if (!(w[1] >= 0 && w[1] <= 2) || !w[0]) err(`game ${g.id}`, `bad entry ${JSON.stringify(w)}`);
}

let nChapters = 0;
const points = [];
for (const course of data.courses) {
  glossary = data.glossaryFor(course.id);
  for (const ch of course.chapters) {
    nChapters++;
    const tag = `${course.id}/${ch.id}`;
    if (ch.sections.length !== 8) err(tag, `has ${ch.sections.length} sections, expected 8`);
    if (ch.sections[0]?.blocks[0]?.t !== 'overview') err(tag, 'does not start with a chapter overview');
    if (ch.games.length !== 4) err(tag, 'needs 4 games');
    for (const g of ch.games) {
      const def = data.games.find((x) => x.id === g);
      if (!def) err(tag, `unknown game "${g}"`);
      else if ((def.course || 'b2-1') !== course.id || def.chapter !== ch.number) err(tag, `game "${g}" is labeled for another course or chapter`);
    }
    const secIds = new Set();
    for (const s of ch.sections) {
      stats.sections++;
      if (secIds.has(s.id)) err(tag, `duplicate section id ${s.id}`);
      secIds.add(s.id);
      const seen = new Set();
      for (const b of s.blocks) block(`${tag}/${s.id}`, b, seen);
    }
    const seen = new Set();
    let p = 0;
    for (const it of ch.exam) {
      stats.examItems++; p += it.points;
      if (it.stimulus) block(`${tag}/exam`, it.stimulus, seen);
      block(`${tag}/exam`, it.q, seen);
    }
    if (ch.exam.length < 10) err(tag, 'exam has fewer than 10 items');
    points.push(`${course.level} K${ch.number}=${p}`);
  }
  for (const [key, part] of Object.entries(course.final)) {
    const seen = new Set();
    if (part.length < 5) err(`${course.id}/final/${key}`, 'fewer than 5 items');
    for (const it of part) { if (it.stimulus) block(`${course.id}/final/${key}`, it.stimulus, seen); block(`${course.id}/final/${key}`, it.q, seen); }
  }
}
const chapterIds = data.courses.flatMap((c) => c.chapters.map((ch) => ch.id));
if (new Set(chapterIds).size !== chapterIds.length) err('courses', 'chapter ids must be unique across courses');

// A1 to B1: every German task line needs English (taskEn on the block or content/taskEn.ts).
for (const c of data.courses.filter((x) => ['a1', 'a2', 'b1'].includes(x.id))) {
  const walk = (o) => {
    if (Array.isArray(o)) return o.forEach(walk);
    if (o && typeof o === 'object') {
      if (typeof o.task === 'string' && !o.taskEn && !data.taskEn[o.task.trim()]) err(`${c.id}/${o.id}`, `task has no English: "${o.task}" (add taskEn or an entry in content/taskEn.ts)`);
      Object.values(o).forEach(walk);
    }
  };
  walk(c.chapters); walk(c.final);
}

// Pictures and diagrams must point at real blocks.
{
  const keys = new Set();
  const words = new Set();
  for (const c of data.courses) for (const ch of c.chapters) for (const sec of ch.sections) for (const b of sec.blocks) {
    keys.add(`${ch.id}/${b.id}`); if (b.t === 'audio') keys.add(b.id);
    if (b.t === 'match') b.pairs.forEach((p) => p.forEach((w) => words.add(w)));
  }
  for (const k of Object.keys(data.images.SCENES)) if (!keys.has(k)) err('content/*/images.ts', `scene key "${k}" matches no block`);
  for (const k of Object.keys(data.visuals.VISUALS)) if (!keys.has(k)) err('content/*/visuals.ts', `diagram key "${k}" matches no block`);
  for (const w of Object.keys(data.images.VOCAB)) if (!words.has(w)) err('content/*/images.ts', `vocabulary word "${w}" is in no match exercise`);
}

console.log(`Courses: ${data.courses.length}, chapters: ${nChapters}, sections: ${stats.sections}, blocks: ${stats.blocks}, exercises: ${stats.exercises}, listening texts: ${allAudio(data).length}, exam items: ${stats.examItems}, games: ${data.games.length}, glossary entries: ${data.courses.map((c) => `${c.level} ${Object.keys(data.glossaryFor(c.id)).length}`).join(', ')}`);
console.log('Exam points per chapter: ' + points.join(', '));
if (errors.length) { console.log(`\n${errors.length} problem(s):`); errors.forEach((e) => console.log(' - ' + e)); process.exit(1); }
console.log('No problems found.');
