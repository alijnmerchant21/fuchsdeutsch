import type { Answers, Attempt, ExamSet, Feedback, Scores, TestDef } from './types';

export const key = (module: string, teil: number) => `${module}-${teil}`;

export function scoreTest(test: TestDef, sets: Record<string, ExamSet>, answers: Answers): Scores {
  const out: Scores = {};
  for (const sec of test.sections) for (const id of sec.sets) {
    const s = sets[id];
    if (!s || s.module === 'schreiben') continue;
    const k = key(s.module, s.teil);
    out[k] ??= { right: 0, total: 0 };
    for (const g of s.groups) for (const i of g.items) {
      out[k].total += 1;
      if ((answers[id]?.[String(i.n)] ?? '') === i.a) out[k].right += 1;
    }
  }
  return out;
}

/** Points out of 100 for Hören or Lesen, from all Teile in the scores. */
export function modulePoints(scores: Scores, module: string): number | null {
  let r = 0, t = 0;
  for (const [k, v] of Object.entries(scores)) if (k.startsWith(module + '-')) { r += v.right; t += v.total; }
  return t ? Math.round((100 * r) / t) : null;
}

/** Schreiben out of 100, once the admin has corrected it. */
export function writingPoints(fb: Feedback | null | undefined): number | null {
  if (!fb) return null;
  const v = Object.values(fb);
  if (!v.length) return null;
  const max = v.reduce((a, x) => a + x.max, 0);
  return max ? Math.round((100 * v.reduce((a, x) => a + x.score, 0)) / max) : null;
}

/** Official items per Teil, used to weight Teile into a module estimate. */
const WEIGHT: Record<string, number> = { 'hoeren-1': 10, 'hoeren-2': 5, 'hoeren-3': 7, 'hoeren-4': 8, 'lesen-1': 6, 'lesen-2': 6, 'lesen-3': 7, 'lesen-4': 7, 'lesen-5': 4 };

/** Latest result per Teil across all attempts (newest wins). */
export function latestPerTeil(attempts: Attempt[]): Scores {
  const out: Scores = {};
  for (const a of [...attempts].sort((x, y) => x.finished_at.localeCompare(y.finished_at)))
    for (const [k, v] of Object.entries(a.scores)) if (v.total) out[k] = v;
  return out;
}

/** Readiness per module out of 100: latest score of each Teil, weighted like the real exam. */
export function readiness(attempts: Attempt[]): Record<string, number | null> {
  const per = latestPerTeil(attempts);
  const out: Record<string, number | null> = { hoeren: null, lesen: null, schreiben: null };
  for (const m of ['hoeren', 'lesen']) {
    let w = 0, sum = 0;
    for (const [k, v] of Object.entries(per)) if (k.startsWith(m + '-')) { const wt = WEIGHT[k] ?? 5; w += wt; sum += wt * (v.right / v.total); }
    out[m] = w ? Math.round((100 * sum) / w) : null;
  }
  for (const a of [...attempts].sort((x, y) => x.finished_at.localeCompare(y.finished_at))) {
    const p = writingPoints(a.feedback); if (p !== null) out.schreiben = p;
  }
  return out;
}

export const countWords = (s: string) => (s.trim().match(/\S+/g) ?? []).length;
