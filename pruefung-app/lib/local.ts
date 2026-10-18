/* Per-user browser storage for small conveniences: unfinished answers of a day and the Fehlerheft. */
import type { Answers, Conf } from './types';

export interface Draft { ans: Answers; conf: Conf; writing: Record<string, string>; checked: Record<string, boolean> }
export const emptyDraft = (): Draft => ({ ans: {}, conf: {}, writing: {}, checked: {} });

const get = <T,>(k: string, d: T): T => { try { const r = localStorage.getItem(k); return r ? (JSON.parse(r) as T) : d; } catch { return d; } };
const put = (k: string, v: unknown) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* ignore */ } };

export const loadDraft = (uid: string, ref: string) => get<Draft>(`fdp:draft:${uid}:${ref}`, emptyDraft());
export const saveDraft = (uid: string, ref: string, d: Draft) => put(`fdp:draft:${uid}:${ref}`, d);

export const loadNotes = (uid: string) => get<Record<string, { title: string; date: string; text: string }>>(`fdp:notes:${uid}`, {});
export const saveNote = (uid: string, ref: string, title: string, date: string, text: string) => {
  const all = loadNotes(uid);
  if (text.trim()) all[ref] = { title, date, text }; else delete all[ref];
  put(`fdp:notes:${uid}`, all);
};
