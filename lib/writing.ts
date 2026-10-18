// Free writing: hand in a text, read back Claude's marking. Table: supabase/007_writing.sql.
// In demo mode (no Supabase) texts are kept in this browser, so the flow can be tried locally.
import { supabase } from './supabase';

export interface WritingCriterion { name: string; points: number; max: number; note?: string }
export interface WritingError { wrong: string; right: string; why?: string }
export interface WritingFeedback {
  summary: string;
  summaryEn?: string;
  criteria: WritingCriterion[];
  errors: WritingError[];
  corrected?: string;
}
export interface WritingSubmission {
  id: string;
  user_id?: string;
  email?: string | null;
  name?: string | null;
  course: string;
  chapter: string;
  block: string;
  level?: string | null;
  prompt?: string | null;
  body: string;
  words?: number | null;
  status: 'submitted' | 'reviewed';
  score?: number | null;
  max_score?: number | null;
  feedback?: WritingFeedback | null;
  created_at: string;
  reviewed_at?: string | null;
}

const LS = 'fd:writing';
const readLocal = (): WritingSubmission[] => { try { return JSON.parse(localStorage.getItem(LS) || '[]'); } catch { return []; } };
const writeLocal = (rows: WritingSubmission[]) => { try { localStorage.setItem(LS, JSON.stringify(rows)); } catch { /* storage unavailable */ } };

export const countWords = (t: string) => (t.trim() ? t.trim().split(/\s+/).length : 0);

/** Marking scheme per level: criteria names and maximum points. Claude gets the same list. */
export function criteriaFor(level: string): { name: string; max: number }[] {
  if (level.startsWith('A1')) return [{ name: 'Inhalt', max: 4 }, { name: 'Wortschatz', max: 3 }, { name: 'Grammatik', max: 3 }];
  if (level.startsWith('A2')) return [{ name: 'Inhalt', max: 4 }, { name: 'Wortschatz', max: 3 }, { name: 'Grammatik', max: 3 }];
  if (level.startsWith('B1')) return [{ name: 'Inhalt', max: 5 }, { name: 'Kommunikative Gestaltung', max: 5 }, { name: 'Wortschatz', max: 5 }, { name: 'Grammatik', max: 5 }];
  return [{ name: 'Inhalt', max: 5 }, { name: 'Textaufbau', max: 5 }, { name: 'Wortschatz', max: 5 }, { name: 'Grammatik', max: 5 }];
}

/** The learner's latest text for one writing task, or null. */
export async function myWriting(chapter: string, block: string): Promise<WritingSubmission | null> {
  const sb = supabase();
  if (!sb) return readLocal().filter((r) => r.chapter === chapter && r.block === block).sort((a, b) => b.created_at.localeCompare(a.created_at))[0] || null;
  const { data: u } = await sb.auth.getUser();
  if (!u.user) return null;
  const { data } = await sb.from('writing_submissions').select('*').eq('user_id', u.user.id).eq('chapter', chapter).eq('block', block)
    .order('created_at', { ascending: false }).limit(1).maybeSingle();
  return (data as WritingSubmission) || null;
}

/** Hand in a text. Returns null when saved, else an error message. */
export async function submitWriting(row: { course: string; chapter: string; block: string; level: string; prompt: string; body: string; name?: string; email?: string }): Promise<string | null> {
  const body = row.body.trim().slice(0, 6000);
  if (!body) return 'Bitte schreib zuerst einen Text.';
  const sb = supabase();
  const full = { ...row, body, words: countWords(body), prompt: row.prompt.slice(0, 3000) };
  if (!sb) {
    writeLocal([...readLocal(), { ...full, id: `local-${Date.now()}`, status: 'submitted', created_at: new Date().toISOString() }]);
    return null;
  }
  const { error } = await sb.from('writing_submissions').insert(full);
  if (error) return /relation|does not exist/i.test(error.message) ? 'Schreiben ist noch nicht eingerichtet (supabase/007_writing.sql).' : 'Das hat nicht geklappt. Bitte versuch es gleich noch einmal.';
  return null;
}

/** Admin: texts by status, oldest first. */
export async function listWriting(status: 'submitted' | 'reviewed' | 'all'): Promise<{ rows: WritingSubmission[]; error?: string }> {
  const sb = supabase();
  if (!sb) {
    const rows = readLocal().filter((r) => status === 'all' || r.status === status);
    return { rows };
  }
  let q = sb.from('writing_submissions').select('*').order('created_at', { ascending: true }).limit(500);
  if (status !== 'all') q = q.eq('status', status);
  const { data, error } = await q;
  return { rows: (data as WritingSubmission[]) || [], error: error?.message };
}

/** Admin: store Claude's marking for one text. */
export async function saveReview(id: string, review: { score: number; max_score: number; feedback: WritingFeedback }): Promise<string | null> {
  const patch = { ...review, status: 'reviewed' as const, reviewed_at: new Date().toISOString() };
  const sb = supabase();
  if (!sb) { writeLocal(readLocal().map((r) => (r.id === id ? { ...r, ...patch } : r))); return null; }
  const { error } = await sb.from('writing_submissions').update(patch).eq('id', id);
  return error ? error.message : null;
}

/** Admin: the open texts as one message for Claude, with the marking rules and the answer format. */
export function exportForClaude(rows: WritingSubmission[]): string {
  const items = rows.map((r) => ({
    id: r.id, level: r.level, course: r.course, chapter: r.chapter, task: r.prompt, words: r.words,
    criteria: criteriaFor(r.level || ''), text: r.body,
  }));
  return `You are an experienced, kind German teacher marking short texts written by learners of German (Fuchsdeutsch course).
Mark each text strictly for its CEFR level, in the style of the Goethe-Institut writing criteria.

For every item:
- Give points for each criterion in "criteria" (integers from 0 to max). "Inhalt" checks whether every point in the task is covered.
- score = sum of the criterion points, max_score = sum of the max values.
- summary: 2 to 3 encouraging sentences in simple German at the learner's level: what is good, what to work on next.
- summaryEn: the same in English.
- errors: up to 8 of the most important mistakes, each { "wrong": exact words from the text, "right": the correction, "why": a very short reason in simple German }.
- corrected: the whole text, corrected, changing as little as possible.
- If the text is empty, off-topic or not German, give 0 for Inhalt and explain kindly.

Answer with ONLY a JSON array, no other text, in this format:
[{ "id": "...", "score": 14, "max_score": 20, "feedback": { "summary": "...", "summaryEn": "...", "criteria": [{ "name": "Inhalt", "points": 4, "max": 5, "note": "..." }], "errors": [{ "wrong": "...", "right": "...", "why": "..." }], "corrected": "..." } }]

Items:
${JSON.stringify(items, null, 1)}`;
}

/** Admin: check Claude's answer before saving it. Returns the reviews or a list of problems. */
export function parseReviews(raw: string, open: WritingSubmission[]): { ok: { id: string; score: number; max_score: number; feedback: WritingFeedback }[]; problems: string[] } {
  const problems: string[] = [];
  let data: unknown;
  const trimmed = raw.trim().replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/, '');
  try { data = JSON.parse(trimmed); } catch { return { ok: [], problems: ['Kein gültiges JSON. Bitte nur das JSON-Array einfügen.'] }; }
  if (!Array.isArray(data)) return { ok: [], problems: ['Erwartet wird ein JSON-Array [ … ].'] };
  const ids = new Set(open.map((r) => r.id));
  const ok: { id: string; score: number; max_score: number; feedback: WritingFeedback }[] = [];
  for (const [i, it] of data.entries()) {
    const r = it as { id?: string; score?: number; max_score?: number; feedback?: WritingFeedback };
    const tag = `Eintrag ${i + 1}`;
    if (!r.id || !ids.has(r.id)) { problems.push(`${tag}: unbekannte id ${r.id ?? '(fehlt)'}`); continue; }
    if (!Number.isFinite(r.score) || !Number.isFinite(r.max_score) || (r.score as number) < 0 || (r.score as number) > (r.max_score as number)) { problems.push(`${tag}: score/max_score fehlen oder passen nicht`); continue; }
    const f = r.feedback;
    if (!f || typeof f.summary !== 'string' || !Array.isArray(f.criteria) || !Array.isArray(f.errors)) { problems.push(`${tag}: feedback braucht summary, criteria und errors`); continue; }
    ok.push({ id: r.id, score: Math.round(r.score as number), max_score: Math.round(r.max_score as number), feedback: f });
  }
  return { ok, problems };
}
