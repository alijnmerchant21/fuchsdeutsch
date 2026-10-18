/* Data access. Supabase when keys are set, otherwise this browser's localStorage (demo mode).
   Every row carries user_id, so tests, results and blocks always belong to one candidate. */
import { supabase } from './supabase';
import type { Attempt, Block, Candidate, Claim, ClaimStatus, Feedback, Module } from './types';

const LS = { cands: 'fdp:candidates', attempts: 'fdp:attempts', blocks: 'fdp:blocks', claims: 'fdp:claims' };
function read<T>(k: string): T[] { try { return JSON.parse(localStorage.getItem(k) || '[]') as T[]; } catch { return []; } }
function write<T>(k: string, v: T[]) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* storage full or blocked */ } }
const uid = () => (typeof crypto !== 'undefined' && 'randomUUID' in crypto ? crypto.randomUUID() : Math.random().toString(36).slice(2) + Date.now());

function fail(e: { message: string } | null) { if (e) throw new Error(e.message); }

export const db = {
  async candidate(userId: string): Promise<Candidate | null> {
    const sb = supabase();
    if (!sb) return read<Candidate>(LS.cands).find((c) => c.user_id === userId) ?? null;
    const { data, error } = await sb.from('exam_candidates').select('*').eq('user_id', userId).maybeSingle();
    fail(error); return (data as Candidate) ?? null;
  },

  /** Candidates save their own setup. "unlocked" is only changed by the admin. */
  async saveCandidate(c: Omit<Candidate, 'unlocked' | 'created_at'> & Partial<Pick<Candidate, 'unlocked' | 'created_at'>>) {
    const sb = supabase();
    if (!sb) {
      const all = read<Candidate>(LS.cands);
      const prev = all.find((x) => x.user_id === c.user_id);
      const row: Candidate = { unlocked: [], created_at: new Date().toISOString(), ...prev, ...c } as Candidate;
      write(LS.cands, [...all.filter((x) => x.user_id !== c.user_id), row]);
      return;
    }
    const { error } = await sb.from('exam_candidates').upsert({
      user_id: c.user_id, email: c.email, name: c.name, exam_date: c.exam_date,
      study_days: c.study_days, minutes_per_day: c.minutes_per_day, modules: c.modules,
      exam_center: c.exam_center ?? null, first_language: c.first_language ?? null, attempt_type: c.attempt_type ?? null,
    });
    fail(error);
  },

  async attempts(userId: string): Promise<Attempt[]> {
    const sb = supabase();
    if (!sb) return read<Attempt>(LS.attempts).filter((a) => a.user_id === userId);
    const { data, error } = await sb.from('exam_attempts').select('*').eq('user_id', userId).order('finished_at');
    fail(error); return (data as Attempt[]) ?? [];
  },

  async attempt(id: string): Promise<Attempt | null> {
    const sb = supabase();
    if (!sb) return read<Attempt>(LS.attempts).find((a) => a.id === id) ?? null;
    const { data, error } = await sb.from('exam_attempts').select('*').eq('id', id).maybeSingle();
    fail(error); return (data as Attempt) ?? null;
  },

  async saveAttempt(a: Omit<Attempt, 'id'>): Promise<string> {
    const sb = supabase();
    if (!sb) { const id = uid(); write(LS.attempts, [...read<Attempt>(LS.attempts), { ...a, id }]); return id; }
    const { data, error } = await sb.from('exam_attempts').insert({
      user_id: a.user_id, kind: a.kind, ref: a.ref, block_id: a.block_id ?? null, answers: a.answers, conf: a.conf ?? {},
      writing: a.writing, scores: a.scores, started_at: a.started_at, finished_at: a.finished_at,
    }).select('id').single();
    fail(error); return (data as { id: string }).id;
  },

  async blocks(userId: string): Promise<Block[]> {
    const sb = supabase();
    if (!sb) return read<Block>(LS.blocks).filter((b) => b.user_id === userId).sort((a, b) => a.seq - b.seq);
    const { data, error } = await sb.from('exam_blocks').select('*').eq('user_id', userId).order('seq');
    fail(error); return (data as Block[]) ?? [];
  },

  /* ---------- admin ---------- */

  async isAdmin(): Promise<boolean> {
    const sb = supabase();
    if (!sb) return false;
    const { data } = await sb.rpc('exam_is_admin');
    return data === true;
  },

  async allCandidates(): Promise<Candidate[]> {
    const sb = supabase();
    if (!sb) return read<Candidate>(LS.cands);
    const { data, error } = await sb.from('exam_candidates').select('*').order('created_at', { ascending: false });
    fail(error); return (data as Candidate[]) ?? [];
  },

  async allAttempts(): Promise<Attempt[]> {
    const sb = supabase();
    if (!sb) return read<Attempt>(LS.attempts);
    const { data, error } = await sb.from('exam_attempts').select('*');
    fail(error); return (data as Attempt[]) ?? [];
  },

  async allBlocks(): Promise<Block[]> {
    const sb = supabase();
    if (!sb) return read<Block>(LS.blocks);
    const { data, error } = await sb.from('exam_blocks').select('*');
    fail(error); return (data as Block[]) ?? [];
  },

  async saveBlock(b: Omit<Block, 'id' | 'created_at'> & { id?: string }) {
    const sb = supabase();
    if (!sb) {
      const all = read<Block>(LS.blocks);
      const row: Block = { ...b, id: b.id ?? uid(), created_at: new Date().toISOString() } as Block;
      write(LS.blocks, [...all.filter((x) => x.id !== row.id), row]);
      return;
    }
    const { error } = await sb.from('exam_blocks').upsert({ ...(b.id ? { id: b.id } : {}), user_id: b.user_id, seq: b.seq, starts_on: b.starts_on, ends_on: b.ends_on, content: b.content });
    fail(error);
  },

  async deleteBlock(id: string) {
    const sb = supabase();
    if (!sb) { write(LS.blocks, read<Block>(LS.blocks).filter((b) => b.id !== id)); return; }
    const { error } = await sb.from('exam_blocks').delete().eq('id', id);
    fail(error);
  },

  async saveFeedback(attemptId: string, feedback: Feedback) {
    const sb = supabase();
    if (!sb) { write(LS.attempts, read<Attempt>(LS.attempts).map((a) => (a.id === attemptId ? { ...a, feedback } : a))); return; }
    const { error } = await sb.rpc('exam_set_feedback', { p_attempt: attemptId, p_feedback: feedback });
    fail(error);
  },

  async setUnlocked(userId: string, modules: Module[]) {
    const sb = supabase();
    if (!sb) { write(LS.cands, read<Candidate>(LS.cands).map((c) => (c.user_id === userId ? { ...c, unlocked: modules, unlocked_at: c.unlocked_at ?? (modules.length ? new Date().toISOString() : null) } : c))); return; }
    const { error } = await sb.rpc('exam_set_unlocked', { p_user: userId, p_modules: modules });
    fail(error);
  },

  /* ---------- pass guarantee ---------- */

  async claims(userId: string): Promise<Claim[]> {
    const sb = supabase();
    if (!sb) return read<Claim>(LS.claims).filter((c) => c.user_id === userId).sort((a, b) => a.created_at.localeCompare(b.created_at));
    const { data, error } = await sb.from('exam_claims').select('*').eq('user_id', userId).order('created_at');
    fail(error); return (data as Claim[]) ?? [];
  },

  async allClaims(): Promise<Claim[]> {
    const sb = supabase();
    if (!sb) return read<Claim>(LS.claims);
    const { data, error } = await sb.from('exam_claims').select('*').order('created_at', { ascending: false });
    fail(error); return (data as Claim[]) ?? [];
  },

  /** Uploads the result letter (Supabase Storage, or a data URL in demo mode) and files the claim. */
  async submitClaim(c: Omit<Claim, 'id' | 'status' | 'created_at' | 'file_path'>, file: File) {
    const sb = supabase();
    if (!sb) {
      const dataUrl = await new Promise<string>((res, rej) => { const r = new FileReader(); r.onload = () => res(String(r.result)); r.onerror = () => rej(new Error('Datei konnte nicht gelesen werden')); r.readAsDataURL(file); });
      write(LS.claims, [...read<Claim>(LS.claims), { ...c, id: uid(), status: 'pending', created_at: new Date().toISOString(), file_path: dataUrl }]);
      return;
    }
    const path = `${c.user_id}/${Date.now()}-${file.name.replace(/[^\w.-]+/g, '_')}`;
    const up = await sb.storage.from('exam-results').upload(path, file, { upsert: false, contentType: file.type || undefined });
    fail(up.error);
    const { error } = await sb.from('exam_claims').insert({
      user_id: c.user_id, exam_taken_on: c.exam_taken_on, result_received_on: c.result_received_on, results: c.results,
      next_exam_date: c.next_exam_date ?? null, file_path: path, file_name: c.file_name,
    });
    fail(error);
  },

  /** Link to view the uploaded result (admin or owner). */
  async claimFileUrl(c: Claim): Promise<string> {
    const sb = supabase();
    if (!sb) return c.file_path;
    const { data, error } = await sb.storage.from('exam-results').createSignedUrl(c.file_path, 3600);
    fail(error); return data!.signedUrl;
  },

  /** Admin decision. Approving unlocks the failed modules and moves the exam date. */
  async decideClaim(claim: Claim, status: ClaimStatus, note: string, until: string | null, modules: Module[], nextExam: string | null) {
    const sb = supabase();
    if (!sb) {
      write(LS.claims, read<Claim>(LS.claims).map((x) => (x.id === claim.id ? { ...x, status, admin_note: note, voucher_until: until, voucher_modules: modules, decided_at: new Date().toISOString() } : x)));
      if (status === 'approved') write(LS.cands, read<Candidate>(LS.cands).map((c) => (c.user_id === claim.user_id ? { ...c, unlocked: [...new Set([...c.unlocked, ...modules])], exam_date: nextExam || c.exam_date } : c)));
      return;
    }
    const { error } = await sb.rpc('exam_decide_claim', { p_claim: claim.id, p_status: status, p_note: note, p_until: until, p_modules: modules, p_next_exam: nextExam });
    fail(error);
  },
};
