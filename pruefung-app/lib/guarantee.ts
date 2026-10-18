/* Pass guarantee: which conditions a candidate meets right now. Same rules as the /garantie page. */
import { PASS } from './config';
import { addDays, daysBetween, today } from './dates';
import { modulePoints, writingPoints } from './score';
import type { Attempt, Block, Candidate, Claim, Module } from './types';

export interface Check { id: string; ok: boolean; de: string; en: string; detailDe: string; detailEn: string }
export interface Status { checks: Check[]; moduleOk: Partial<Record<Module, boolean>>; mockScores: Partial<Record<Module, number | null>>; examPassed: boolean }

const LIVE: Module[] = ['hoeren', 'lesen', 'schreiben'];
const day = (iso: string) => iso.slice(0, 10);

export function guaranteeStatus(c: Candidate, attempts: Attempt[], blocks: Block[], claim?: Claim | null, now = today()): Status {
  const exam = c.exam_date;
  const mods = c.modules.filter((m) => LIVE.includes(m));

  // 1. Plan bought (first unlocked) at least 14 days before the exam.
  const bought = c.unlocked_at ? day(c.unlocked_at) : null;
  const c1 = !!bought && daysBetween(bought, exam) >= 14;

  // 2. At least 90 % of the due practice days done within their block's deadline.
  let due = 0, onTime = 0;
  for (const b of blocks) b.content.days.forEach((d, i) => {
    if (d.date > now || d.date > exam) return;
    due += 1;
    const a = attempts.find((x) => x.ref === `${b.id}:${i}`);
    if (a && day(a.finished_at) <= b.ends_on) onTime += 1;
  });
  const pct = due ? Math.round((100 * onTime) / due) : 0;
  const c2 = due > 0 && onTime / due >= 0.9;

  // 3a. Every block test that is due has been done.
  let tests = 0, testsDone = 0;
  for (const b of blocks) b.content.days.forEach((d, i) => {
    if (!d.test || d.date > now) return;
    tests += 1;
    if (attempts.some((x) => x.ref === `${b.id}:${i}`)) testsDone += 1;
  });
  // 3b. Last full mock before the exam: at least 60 in each module.
  const mock = [...attempts].filter((a) => a.kind === 'mock' && day(a.finished_at) <= exam).sort((a, b) => b.finished_at.localeCompare(a.finished_at))[0];
  const mockScores: Partial<Record<Module, number | null>> = {};
  for (const m of mods) mockScores[m] = !mock ? null : m === 'schreiben' ? writingPoints(mock.feedback) : modulePoints(mock.scores, m);
  const moduleOk: Partial<Record<Module, boolean>> = {};
  for (const m of mods) moduleOk[m] = tests === testsDone && (mockScores[m] ?? -1) >= PASS;
  const c3 = mods.length > 0 && mods.every((m) => moduleOk[m]);

  // 4. Exam taken on the planned date. 5. Result uploaded within 30 days.
  const examPassed = now > exam;
  const c4 = !!claim && claim.exam_taken_on === exam;
  const c5 = !!claim && daysBetween(claim.result_received_on, day(claim.created_at)) <= 30;

  const mockDe = !mock ? 'Noch kein vollständiger Mock Test' : mods.map((m) => `${{ hoeren: 'Hören', lesen: 'Lesen', schreiben: 'Schreiben', sprechen: 'Sprechen' }[m]} ${mockScores[m] ?? '…'}`).join(' · ');
  const mockEn = !mock ? 'No full mock test yet' : mods.map((m) => `${{ hoeren: 'Listening', lesen: 'Reading', schreiben: 'Writing', sprechen: 'Speaking' }[m]} ${mockScores[m] ?? '…'}`).join(' · ');

  const checks: Check[] = [
    { id: 'plan', ok: c1, de: 'Plan mindestens 14 Tage vor der Prüfung', en: 'Plan at least 14 days before the exam',
      detailDe: bought ? `Freigeschaltet am ${bought}` : 'Noch nicht freigeschaltet', detailEn: bought ? `Unlocked on ${bought}` : 'Not unlocked yet' },
    { id: 'days', ok: c2, de: 'Mindestens 90 % der Übungstage pünktlich', en: 'At least 90% of practice days on time',
      detailDe: due ? `${onTime} von ${due} pünktlich (${pct} %)` : 'Noch keine Übungstage fällig', detailEn: due ? `${onTime} of ${due} on time (${pct}%)` : 'No practice days due yet' },
    { id: 'tests', ok: c3, de: 'Alle Blocktests + letzter Mock Test mit 60 Punkten', en: 'All block tests + last mock test with 60 points',
      detailDe: `Blocktests ${testsDone}/${tests} · ${mockDe}`, detailEn: `Block tests ${testsDone}/${tests} · ${mockEn}` },
    { id: 'date', ok: c4, de: 'Prüfung am geplanten Termin', en: 'Exam on the planned date',
      detailDe: claim ? `Abgelegt am ${claim.exam_taken_on}` : `Geplant: ${exam}`, detailEn: claim ? `Taken on ${claim.exam_taken_on}` : `Planned: ${exam}` },
    { id: 'upload', ok: c5, de: 'Ergebnis innerhalb von 30 Tagen hochgeladen', en: 'Result uploaded within 30 days',
      detailDe: claim ? `Hochgeladen am ${day(claim.created_at)}` : examPassed ? 'Jetzt hochladen' : 'Nach der Prüfung', detailEn: claim ? `Uploaded on ${day(claim.created_at)}` : examPassed ? 'Upload now' : 'After the exam' },
  ];
  return { checks, moduleOk, mockScores, examPassed };
}

/** Modules a claim would cover: failed in the exam and conditions 1 to 3 met for that module. */
export function coveredModules(st: Status, claim: Claim): Module[] {
  const base = st.checks.find((c) => c.id === 'plan')!.ok && st.checks.find((c) => c.id === 'days')!.ok;
  return (Object.entries(claim.results) as [Module, boolean][]).filter(([m, passed]) => !passed && base && st.moduleOk[m]).map(([m]) => m);
}

/** Voucher end: next exam date if given, at most 6 months after the decision. */
export function voucherUntil(next: string | null | undefined, from = today()): string {
  const max = addDays(from, 182);
  return next && next < max ? next : max;
}
