/* Builds the hand-off for Claude: candidate data, mistakes, writing, and the exact format to answer in. */
import { bank, findSet, levelOf, ownMocks, teilInfo, type Licensed } from './content';
import { LEVELS, levelOfCandidate } from './levels';
import { daysBetween, today } from './dates';
import { nextBlockWindow } from './plan';
import { isRight, latestPerTeil, readiness } from './score';
import type { Attempt, Block, Candidate } from './types';

export function buildExport(c: Candidate, attempts: Attempt[], blocks: Block[], lic: Licensed) {
  const sorted = [...blocks].sort((a, b) => a.seq - b.seq);
  const last = sorted[sorted.length - 1];
  const used = new Set<string>();
  for (const b of sorted) for (const d of b.content.days) for (const s of d.sets) used.add(s);
  used.add('diagnose');
  const level = levelOfCandidate(c);
  const L = LEVELS[level];
  const mine = Object.values(bank).filter((s) => levelOf(s) === level);

  const mistakes: unknown[] = [];
  for (const a of attempts) {
    const block = blocks.find((b) => b.id === a.block_id);
    for (const [setId, ans] of Object.entries(a.answers)) {
      const s = findSet(setId, block, lic);
      if (!s) continue;
      for (const g of s.groups) for (const i of g.items) {
        const given = ans[String(i.n)];
        if (!isRight(i, given)) mistakes.push({ attempt: a.ref, set: setId, module: s.module, teil: s.teil, n: i.n, q: i.q ?? g.title, given: given ?? null, correct: i.a, trap: i.trap, sure: a.conf?.[setId]?.[String(i.n)] === 's' });
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

  const catalog = mine.filter((s) => !s.id.includes('diag-')).map((s) => ({
    id: s.id, module: s.module, teil: s.teil, items: s.groups.reduce((x, g) => x + g.items.length, 0), title: s.groups[0]?.title ?? s.tasks?.[0]?.situation.slice(0, 60), already_used: used.has(s.id),
  }));

  const trim = (id: string, items = 1) => {
    const x = JSON.parse(JSON.stringify(bank[id]));
    x.groups = x.groups.slice(0, 1).map((g: { items: unknown[]; body?: string; script?: unknown[] }) => ({ ...g, items: g.items.slice(0, items), ...(g.body ? { body: g.body.slice(0, 300) + ' …' } : {}), ...(g.script ? { script: g.script.slice(0, 2) } : {}) }));
    if (x.ads) x.ads = x.ads.slice(0, 2);
    return x;
  };
  const firstOf = new Map<string, string>();
  for (const s of mine) if (!firstOf.has(`${s.module}-${s.teil}`)) firstOf.set(`${s.module}-${s.teil}`, s.id);
  const examples = [...firstOf.values()].map((id) => (bank[id].tasks?.length ? bank[id] : trim(id)));
  const format: Record<string, unknown> = {};
  for (const m of ['hoeren', 'lesen', 'schreiben']) for (let t = 1; t <= 5; t++) {
    const i = teilInfo(m, t, level); if (i) format[`${m}-${t}`] = { name: i.name, items: i.items, minutes: i.mins, plays: i.plays, how: i.how };
  }
  const mocks = [...ownMocks(level), ...(level === 'b1' ? lic.tests.filter((x) => !x.hidden) : [])];

  const data = {
    today: today(),
    exam: L.exam,
    level,
    scoring: L.modular ? 'each module separately, 60 of 100 to pass' : 'whole exam together, 60 of 100 to pass',
    exam_format: format,
    candidate: { exam_date: c.exam_date, days_left: daysBetween(today(), c.exam_date), study_days: c.study_days, minutes_per_day: c.minutes_per_day, modules: c.modules, unlocked: c.unlocked },
    next_block: { seq: (last?.seq ?? 0) + 1, ...nextBlockWindow(c.exam_date) },
    readiness_out_of_100: readiness(attempts),
    latest_per_teil: latestPerTeil(attempts),
    last_block: last ? { seq: last.seq, ends_on: last.ends_on, focus: last.content.focus, days: unfinished } : null,
    mistakes,
    writing_to_correct: writing.filter((w) => !w.corrected),
    bank_sets: catalog,
    example_set_shapes: examples,
    full_mocks: mocks.map((t) => ({ id: 'mock:' + t.id, title: t.title, already_used: used.has('mock:' + t.id) })),
  };

  const prompt = `You are building the next practice block for a ${L.exam} candidate on Fuchsdeutsch Prüfung, a mock exam center (practice only, no teaching).

Rules:
- Use next_block.starts_on and next_block.ends_on. Put a day only on the candidate's study_days (0 = Sunday … 6 = Saturday) and size each day to minutes_per_day.
- Mostly exam-format questions for the weakest Teile (see latest_per_teil and mistakes, 60% = pass line). A smaller share for the stronger Teile to keep them sharp. Only modules in candidate.modules.
- At most 3 short exam tips per day. Never teach grammar or vocabulary.
- The last day of the block is a short block test (test: true) covering the focus Teile.
- Full mocks ("mock:<id>" from full_mocks, not already_used) only at checkpoints, and one 1 to 2 days before the exam if next_block.last_block is true.
- Prefer bank_sets that are not already_used. Write new sets when the bank runs out. New sets must be original, in the exact format of exam_format (${L.exam}), with "level": "${level}" and ids that start with "${level}-u-b${data.next_block.seq}-".
- Hören sets need a script per group ([speakerCode, text] lines, with speakers names) plays (see exam_format) and genders (speaker code -> m/f). Audio is generated from the script afterwards.
- Every item needs: n (unique in the set), type (rf | abc | who | ad | jn | txt), q, a, why (one short sentence), ev (exact quote from text/script) and trap where it fits. abc needs opts (2 or 3). who needs set.who (2 to 6 names). ad needs set.ads ({k, title, body}) and a = letter, or "0" unless set.noZero. txt = short free answer, a = "answer|alternative". Every set also needs instr_en (English of instr). Lesen sets may set layout: text | ads | persons (see example_set_shapes).
- If last_block shows unfinished days, still build the block from what was done, and note that the analysis was partial in "note".
- Correct every text in writing_to_correct with the ${L.exam} criteria (task fulfilment, coherence, vocabulary, structures). Score out of task.max. Comment in simple German with one English line, short and concrete.

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
