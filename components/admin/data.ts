'use client';
/* Loads everything the control center shows, in one go. Admin rights come from Supabase row level security. */
import { useCallback, useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import type { Progress } from '@/lib/store';
import type { WritingSubmission } from '@/lib/writing';

export interface BetaRow { email: string; profile: { name?: string; course?: string; reasons?: string[]; nativeLanguage?: string; goal?: number; gender?: string; uiLang?: 'de' | 'en'; board?: boolean } | null; approved: boolean; created_at: string; approved_at?: string | null }
export interface ProfileRow { id: string; email: string; name: string | null; is_admin: boolean; xp: number; streak: number; last_active: string | null; created_at: string; updated_at: string | null; progress: Partial<Progress> | null }
export interface CandRow { user_id: string; email: string; name: string; level?: string | null; exam_date: string; study_days: number[]; minutes_per_day: number; modules: string[]; exam_center?: string | null; first_language?: string | null; attempt_type?: string | null; unlocked: string[]; created_at: string }
export interface AccessRow { user_id: string; approved_at: string }
export interface AttemptRow { id: string; user_id: string; kind: string; ref: string; scores: Record<string, { right: number; total: number }>; started_at: string; finished_at: string }
export interface ReportRow { id: string; created_at: string; app: string; page: string | null; subject: string; body: string; email: string | null; user_id: string | null; user_agent: string | null; status: 'open' | 'done' }
export interface EmailRow { id: string; created_at: string; to_email: string; user_id: string | null; app: string; kind: string; subject: string; body: string | null }

export interface AdminData {
  beta: BetaRow[]; profiles: ProfileRow[]; cands: CandRow[]; access: AccessRow[]; attempts: AttemptRow[];
  writing: WritingSubmission[]; reports: ReportRow[]; emails: EmailRow[];
  /** Tables that could not be read (not set up yet). */
  missing: string[];
}

const EMPTY: AdminData = { beta: [], profiles: [], cands: [], access: [], attempts: [], writing: [], reports: [], emails: [], missing: [] };

export function useAdminData(enabled: boolean) {
  const [data, setData] = useState<AdminData | null>(null);
  const load = useCallback(async () => {
    const sb = supabase();
    if (!sb || !enabled) {
      // Local preview with sample people: /admin?sample (only outside production).
      if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && window.location.search.includes('sample')) {
        const { sampleData } = await import('./sample');
        setData(sampleData());
        return;
      }
      setData(EMPTY); return;
    }
    const missing: string[] = [];
    const q = async <T,>(table: string, run: () => PromiseLike<{ data: unknown; error: { message: string } | null }>): Promise<T[]> => {
      const { data: rows, error } = await run();
      if (error) { missing.push(table); return []; }
      return (rows as T[]) || [];
    };
    const [beta, profiles, cands, access, attempts, writing, reports, emails] = await Promise.all([
      q<BetaRow>('beta_signups', () => sb.from('beta_signups').select('*').order('created_at', { ascending: false }).limit(2000)),
      q<ProfileRow>('profiles', () => sb.from('profiles').select('id,email,name,is_admin,xp,streak,last_active,created_at,updated_at,progress').order('created_at', { ascending: false }).limit(2000)),
      q<CandRow>('exam_candidates', () => sb.from('exam_candidates').select('*').order('created_at', { ascending: false }).limit(2000)),
      q<AccessRow>('exam_access', () => sb.from('exam_access').select('user_id,approved_at').limit(5000)),
      q<AttemptRow>('exam_attempts', () => sb.from('exam_attempts').select('id,user_id,kind,ref,scores,started_at,finished_at').order('finished_at', { ascending: false }).limit(5000)),
      q<WritingSubmission>('writing_submissions', () => sb.from('writing_submissions').select('*').order('created_at', { ascending: false }).limit(2000)),
      q<ReportRow>('site_reports', () => sb.from('site_reports').select('*').order('created_at', { ascending: false }).limit(2000)),
      q<EmailRow>('sent_emails', () => sb.from('sent_emails').select('*').order('created_at', { ascending: false }).limit(2000)),
    ]);
    setData({ beta, profiles, cands, access, attempts, writing, reports, emails, missing });
  }, [enabled]);
  useEffect(() => { void load(); }, [load]);
  return { data, reload: load, setData };
}

/* ---------- small helpers ---------- */
export const dayKey = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
export function lastDays(n: number): string[] {
  const out: string[] = [];
  const d = new Date();
  for (let i = n - 1; i >= 0; i--) { const x = new Date(d); x.setDate(d.getDate() - i); out.push(dayKey(x)); }
  return out;
}
export const fmtDate = (s: string | null | undefined, lang: 'de' | 'en') => (s ? new Date(s.length === 10 ? s + 'T12:00' : s).toLocaleDateString(lang === 'de' ? 'de-DE' : 'en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : '');
export function fmtTime(sec: number): string {
  if (!sec) return '0 min';
  const m = Math.round(sec / 60);
  if (m < 60) return `${m} min`;
  return `${Math.floor(m / 60)} h ${String(m % 60).padStart(2, '0')} min`;
}
/** Last day with activity: newest of profile last_active, time per day and finished sections. */
export function lastSeen(p: ProfileRow): string | null {
  const days = [p.last_active, ...Object.keys(p.progress?.timeDays || {}), ...Object.values(p.progress?.done || {}).map((s) => s.slice(0, 10))].filter(Boolean) as string[];
  return days.sort().pop() || null;
}
