/* Builds the hand-off for Claude: candidate data, mistakes, writing, and the exact format to answer in. */
import { bank, findSet, type Licensed } from './content';
import { daysBetween, today } from './dates';
import { nextBlockWindow } from './plan';
import { latestPerTeil, readiness } from './score';
import type { Attempt, Block, Candidate } from './types';

export function buildExport(c: Candidate, attempts: Attempt[], blocks: Block[], lic: Licensed) {
  const sorted = [...blocks].sort((a, b) => a.seq - b.seq);
  const last = sorted[sorted.length - 1];
  const used = new Set<string>();
  for (const b of sorted) for (const d of b.content.days) for (const s of d.sets) used.add(s);
  used.add('diagnose');

  const mistakes: unknown[] = [];
  for (const a of attempts) {
    const block = blocks.find((b) => b.id === a.block_id);
    for (const [setId, ans] of Object.entries(a.answers)) {
      const s = findSet(setId, block, lic);
      if (!s) continue;
      for (const g of s.groups) for (const i of g.items) {
        const given = ans[String(i.n)];
        if (given !== i.a) mistakes.push({ attempt: a.ref, set: setId, module: s.module, teil: s.teil, n: i.n, q: i.q ?? g.title, given: given ?? null, correct: i.a, trap: i.trap, sure: a.conf?.[setId]?.[String(i.n)] === 's' });
      }
    }
  }

  const writing = attempts.filter((a) => Object.keys(a.writing ?? {}).length).map((a) => ({
    attempt_id: a.id, ref: a.ref, corrected: !!a.feedback,
    texts: Object.entries(a.writing).map(([taskId, text]) => {
      const task = Object.values(bank).flatMap((s) => s.tasks ?? []).find((t) => t.id === taskId)
        ?? blocks.flatMap((b) => b.content.sets ?? []).flatMap((s) => s.tasks ?? []).find((t) => t.id === taskId);
      return { task_id: taskId, task, text };
    }),
  }));

  const unfinished = last ? last.content.days.map((d, i) => ({ date: d.date, title: d.title, done: attempts.some((a) => a.ref === `${last.id}:${i}`) })) : [];

  const catalog = Object.values(bank).filter((s) => !s.id.startsWith('diag-')).map((s) => ({
    id: s.id, module: s.module, teil: s.teil, items: s.groups.reduce((x, g) => x + g.items.length, 0), title: s.groups[0]?.title ?? s.tasks?.[0]?.situation.slice(0, 60), already_used: used.has(s.id),
  }));

  const trim = (id: string, items = 1) => {
    const x = JSON.parse(JSON.stringify(bank[id]));
    x.groups = x.groups.slice(0, 1).map((g: { items: unknown[]; body?: string; script?: unknown[] }) => ({ ...g, items: g.items.slice(0, items), ...(g.body ? { body: g.body.slice(0, 300) + ' …' } : {}), ...(g.script ? { script: g.script.slice(0, 2) } : {}) }));
    if (x.ads) x.ads = x.ads.slice(0, 2);
    return x;
  };
  const examples = [trim('hdB4'), trim('l-dA2'), trim('l-dB3'), trim('l-dB4'), bank['s3-vermieter']];

  const data = {
    today: today(),
    candidate: { exam_date: c.exam_date, days_left: daysBetween(today(), c.exam_date), study_days: c.study_days, minutes_per_day: c.minutes_per_day, modules: c.modules, unlocked: c.unlocked },
    next_block: { seq: (last?.seq ?? 0) + 1, ...nextBlockWindow(c.exam_date) },
    readiness_out_of_100: readiness(attempts),
    latest_per_teil: latestPerTeil(attempts),
    last_block: last ? { seq: last.seq, ends_on: last.ends_on, focus: last.content.focus, days: unfinished } : null,
    mistakes,
    writing_to_correct: writing.filter((w) => !w.corrected),
    bank_sets: catalog,
    example_set_shapes: examples,
    licensed_mocks: lic.tests.map((t) => ({ id: 'mock:' + t.id, title: t.title, already_used: used.has('mock:' + t.id) })),
  };

  const prompt = `You are building the next practice block for a Goethe-Zertifikat B1 candidate on Fuchsdeutsch Prüfung, a mock exam center (practice only, no teaching).

Rules:
- Use next_block.starts_on and next_block.ends_on. Put a day only on the candidate's study_days (0 = Sunday … 6 = Saturday) and size each day to minutes_per_day.
- Mostly exam-format questions for the weakest Teile (see latest_per_teil and mistakes, 60% = pass line). A smaller share for the stronger Teile to keep them sharp. Only modules in candidate.modules.
- At most 3 short exam tips per day. Never teach grammar or vocabulary.
- The last day of the block is a short block test (test: true) covering the focus Teile.
- Full mocks ("mock:<id>" from licensed_mocks, not already_used) only at checkpoints, and one 1 to 2 days before the exam if next_block.last_block is true.
- Prefer bank_sets that are not already_used. Write new sets when the bank runs out. New sets must be original, in exact Goethe B1 format, with ids that start with "b${data.next_block.seq}-".
- Hören sets need a script per group ([speakerCode, text] lines, with speakers names) and plays (Teil 1 and 4: 2, Teil 2 and 3: 1). Audio is generated from the script afterwards.
- Every item needs: n (unique in the set), type (rf | abc | who | ad | jn), q, a, why (one short sentence), ev (exact quote from text/script) and trap where it fits. abc needs opts (3). who needs set.who (3 names). ad needs set.ads (a-j) and a = letter or "0".
- If last_block shows unfinished days, still build the block from what was done, and note that the analysis was partial in "note".
- Correct every text in writing_to_correct with the Goethe B1 criteria (task fulfilment, coherence, vocabulary, structures). Score out of task.max. Comment in simple German with one English line, short and concrete.

Answer with JSON only, in this shape:
{
  "block": {
    "title": "…", "starts_on": "YYYY-MM-DD", "ends_on": "YYYY-MM-DD",
    "focus": ["hoeren-4", "lesen-3"], "note": "one or two sentences for the candidate",
    "days": [ { "date": "YYYY-MM-DD", "title": "…", "en": "…", "tips": ["…"], "sets": ["<set id>"], "test": false } ],
    "sets": [ /* new ExamSet objects, same shape as in the bank */ ]
  },
  "feedback": { "<attempt_id>": { "<task_id>": { "score": 0, "max": 20, "comment": "…" } } }
}

Candidate data:
${JSON.stringify(data, null, 1)}`;
  return prompt;
}
