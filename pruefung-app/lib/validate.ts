import { bank, type Licensed } from './content';
import type { BlockContent, ExamSet, Feedback } from './types';

const ISO = /^\d{4}-\d{2}-\d{2}$/;

/** Checks one set. Returns a list of problems (empty = fine). */
export function checkSet(s: ExamSet): string[] {
  const e: string[] = [];
  const at = `Set ${s.id || '?'}`;
  if (!s.id) e.push('Set without id');
  if (!['hoeren', 'lesen', 'schreiben'].includes(s.module)) e.push(`${at}: module must be hoeren, lesen or schreiben`);
  if (!s.instr) e.push(`${at}: instr missing`);
  if (s.module === 'schreiben') {
    if (!s.tasks?.length) e.push(`${at}: tasks missing`);
    for (const t of s.tasks ?? []) if (!t.id || !t.situation || !t.points?.length || !t.words || !t.max) e.push(`${at}: writing task needs id, situation, points, words, max`);
    return e;
  }
  if (!Array.isArray(s.groups) || !s.groups.length) { e.push(`${at}: groups missing`); return e; }
  const seen = new Set<number>();
  for (const g of s.groups) {
    if (s.module === 'hoeren' && !g.script?.length && !g.audio) e.push(`${at}: Hören group needs a script (audio is made from it)`);
    if (s.module === 'lesen' && s.teil !== 3 && !g.body) e.push(`${at}: Lesen group needs body text`);
    for (const i of g.items ?? []) {
      if (seen.has(i.n)) e.push(`${at}: item number ${i.n} used twice`);
      seen.add(i.n);
      const ok =
        i.type === 'rf' ? ['r', 'f'].includes(i.a)
          : i.type === 'jn' ? ['ja', 'nein'].includes(i.a)
            : i.type === 'abc' ? (i.opts?.length === 3 && ['a', 'b', 'c'].includes(i.a))
              : i.type === 'who' ? (s.who?.length === 3 && ['a', 'b', 'c'].includes(i.a))
                : i.type === 'ad' ? (i.a === '0' || !!s.ads?.some((x) => x.k === i.a))
                  : false;
      if (!ok) e.push(`${at}, item ${i.n}: answer "${i.a}" does not fit type ${i.type}`);
      if (i.type !== 'jn' && !i.q) e.push(`${at}, item ${i.n}: question text q missing`);
      if (s.module === 'lesen' && i.ev && g.body && !g.body.includes(i.ev)) e.push(`${at}, item ${i.n}: ev is not an exact quote from the text`);
      if (s.module === 'hoeren' && i.ev && g.script && !g.script.some(([, t]) => t.includes(i.ev!))) e.push(`${at}, item ${i.n}: ev is not an exact quote from the script`);
    }
  }
  return e;
}

export interface Upload { block?: BlockContent & { starts_on: string; ends_on: string }; feedback?: Record<string, Feedback> }

export function checkUpload(u: Upload, lic: Licensed): string[] {
  const e: string[] = [];
  if (!u.block && !u.feedback) return ['Expected JSON with "block" and/or "feedback".'];
  const b = u.block;
  if (b) {
    if (!ISO.test(b.starts_on) || !ISO.test(b.ends_on) || b.ends_on < b.starts_on) e.push('block.starts_on / ends_on must be dates (YYYY-MM-DD), end not before start');
    if (!b.title) e.push('block.title missing');
    if (!Array.isArray(b.days) || !b.days.length) e.push('block.days missing');
    const own = new Map((b.sets ?? []).map((s) => [s.id, s]));
    for (const s of b.sets ?? []) { e.push(...checkSet(s)); if (bank[s.id]) e.push(`Set id ${s.id} already exists in the bank, use a new id`); }
    for (const d of b.days ?? []) {
      if (!ISO.test(d.date) || d.date < b.starts_on || d.date > b.ends_on) e.push(`Day "${d.title}": date ${d.date} outside the block`);
      if (!d.sets?.length) e.push(`Day "${d.title}": no sets`);
      for (const id of d.sets ?? []) {
        if (id.startsWith('mock:')) { if (!lic.tests.some((t) => t.id === id.slice(5))) e.push(`Day "${d.title}": mock ${id} not found (licensed mocks loaded: ${lic.tests.map((t) => t.id).join(', ') || 'none'})`); }
        else if (!own.has(id) && !bank[id] && !lic.sets[id]) e.push(`Day "${d.title}": set ${id} not found`);
      }
    }
  }
  for (const [aid, fb] of Object.entries(u.feedback ?? {})) for (const [t, f] of Object.entries(fb)) {
    if (typeof f.score !== 'number' || typeof f.max !== 'number' || f.score < 0 || f.score > f.max || !f.comment) e.push(`feedback ${aid}/${t}: needs score (0..max), max and comment`);
  }
  return e;
}
