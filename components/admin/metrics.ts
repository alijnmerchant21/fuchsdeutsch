/* Numbers per learner, worked out from the saved progress (profiles.progress) and the Prüfung tables. */
import { courseById, courses } from '@/content/course';
import { PASS_MARK } from '@/lib/config';
import { sectionKey } from '@/lib/unlock';
import { lastDays, type AttemptRow, type BetaRow, type CandRow, type ProfileRow } from './data';

export interface ChapterStat { id: string; n: number; title: string; done: number; total: number; test: number | null; passed: boolean; acc: number | null; time: number }
export interface CourseStats {
  courseId: string; level: string; title: string;
  done: number; total: number; passed: number; chapters: ChapterStat[];
  time: number; acc: number | null; testAvg: number | null; days: { key: string; value: number }[];
}

export function courseOf(p: ProfileRow, beta?: BetaRow): string {
  return p.progress?.course || beta?.profile?.course || courses[0].id;
}

export function courseStats(p: ProfileRow, beta?: BetaRow): CourseStats {
  const course = courseById(courseOf(p, beta)) || courses[0];
  const prog = p.progress || {};
  const done = prog.done || {};
  const time = prog.time || {};
  const scores = prog.scores || {};
  const chapters: ChapterStat[] = course.chapters.map((ch) => {
    const keys = ch.sections.map((s) => sectionKey(ch.id, s.id));
    const sc = keys.flatMap((k) => Object.values(scores[k] || {}));
    const ex = prog.exams?.[ch.id];
    return {
      id: ch.id, n: ch.number, title: ch.title,
      done: keys.filter((k) => done[k]).length, total: keys.length,
      test: ex ? ex.best : null, passed: !!ex?.passed || (ex?.best ?? 0) >= PASS_MARK,
      acc: sc.length ? sc.reduce((a, b) => a + b, 0) / sc.length : null,
      time: keys.reduce((a, k) => a + (time[k] || 0), 0) + (time[`${ch.id}/pruefung`] || 0),
    };
  });
  const all = Object.values(scores).flatMap((m) => Object.values(m));
  const tests = chapters.filter((c) => c.test !== null).map((c) => c.test as number);
  return {
    courseId: course.id, level: course.level, title: course.title,
    done: chapters.reduce((a, c) => a + c.done, 0), total: chapters.reduce((a, c) => a + c.total, 0),
    passed: chapters.filter((c) => c.passed).length, chapters,
    time: Object.values(time).reduce((a, b) => a + b, 0),
    acc: all.length ? all.reduce((a, b) => a + b, 0) / all.length : null,
    testAvg: tests.length ? tests.reduce((a, b) => a + b, 0) / tests.length : null,
    days: lastDays(30).map((k) => ({ key: k, value: Math.round((prog.timeDays?.[k] || 0) / 60) })),
  };
}

export const MODULES = ['hoeren', 'lesen', 'schreiben', 'sprechen'] as const;
export const MODULE_NAME: Record<string, string> = { hoeren: 'Hören', lesen: 'Lesen', schreiben: 'Schreiben', sprechen: 'Sprechen' };

/** Percent per module for one attempt ("hoeren-1" + "hoeren-2" -> Hören). */
export function moduleScores(a: AttemptRow): Record<string, number> {
  const sum: Record<string, { right: number; total: number }> = {};
  for (const [k, v] of Object.entries(a.scores || {})) {
    const m = k.split('-')[0];
    sum[m] = { right: (sum[m]?.right || 0) + (v?.right || 0), total: (sum[m]?.total || 0) + (v?.total || 0) };
  }
  return Object.fromEntries(Object.entries(sum).filter(([, v]) => v.total > 0).map(([k, v]) => [k, Math.round((v.right / v.total) * 100)]));
}
export function attemptPct(a: AttemptRow): number | null {
  const v = Object.values(a.scores || {}).reduce((acc, s) => ({ right: acc.right + (s?.right || 0), total: acc.total + (s?.total || 0) }), { right: 0, total: 0 });
  return v.total ? Math.round((v.right / v.total) * 100) : null;
}
export const attemptSecs = (a: AttemptRow) => Math.max(0, Math.min(4 * 3600, (new Date(a.finished_at).getTime() - new Date(a.started_at).getTime()) / 1000));

export interface ExamStats { level: string; attempts: AttemptRow[]; time: number; latest: Record<string, number>; best: number | null }
export function examStats(c: CandRow, attempts: AttemptRow[]): ExamStats {
  const mine = attempts.filter((a) => a.user_id === c.user_id);
  const latestMock = mine.find((a) => a.kind !== 'block') || mine[0];
  const pcts = mine.map(attemptPct).filter((x): x is number => x !== null);
  return {
    level: (c.level || 'b1').toUpperCase(), attempts: mine, time: mine.reduce((a, x) => a + attemptSecs(x), 0),
    latest: latestMock ? moduleScores(latestMock) : {}, best: pcts.length ? Math.max(...pcts) : null,
  };
}

/** Every Prüfung Schreiben text, newest first, with the marking if there is one. */
export interface PrText { attempt: AttemptRow; taskId: string; text: string; fb: { score: number; max: number; comment: string } | null }
export function prTexts(attempts: AttemptRow[], userId?: string): PrText[] {
  return attempts
    .filter((a) => (!userId || a.user_id === userId) && a.writing && Object.keys(a.writing).length)
    .flatMap((a) => Object.entries(a.writing || {}).filter(([, text]) => String(text || '').trim()).map(([taskId, text]) => ({ attempt: a, taskId, text: String(text), fb: a.feedback?.[taskId] ?? null })));
}
