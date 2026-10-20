'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { DEMO_MODE, PASS_MARK } from './config';
import { authCallbackUrl } from './site';
import { supabase } from './supabase';

export type Mode = 'easy' | 'advanced';
export interface User { id: string; email: string; name: string }
export interface ExamResult { best: number; passed: boolean; attempts: number }
/** Answers from the welcome form. */
export interface LearnerProfile {
  name: string;
  gender: 'frau' | 'mann' | 'divers' | 'none';
  reasons: string[];
  nativeLanguage: string;
  /** Daily XP goal. */
  goal: number;
  /** Show first name and points on the leaderboard. */
  board: boolean;
  /** Language the sign-up was done in. 'en' starts with English help on, 'de' with German only. */
  uiLang?: 'de' | 'en';
}
export interface Streak { count: number; best: number; last: string | null; freezes: number }

export interface Progress {
  mode: Mode;
  xp: number;
  /** sectionKey ("kapitel-1/modul-1") -> ISO time finished */
  done: Record<string, string>;
  /** examKey ("kapitel-1" or "final") -> result */
  exams: Record<string, ExamResult>;
  /** gameId -> high score */
  games: Record<string, number>;
  /** YYYY-MM-DD -> XP earned that day */
  days: Record<string, number>;
  streak: Streak;
  joined: string;
  profile?: LearnerProfile;
  /** Course shown on the dashboard. */
  course?: string;
  /** Marked writing tasks whose points were already added: submission id -> XP. */
  writing?: Record<string, number>;
  /** Active learning time in seconds: sectionKey -> seconds. */
  time?: Record<string, number>;
  /** Active learning time per day: YYYY-MM-DD -> seconds. */
  timeDays?: Record<string, number>;
  /** First try on each exercise: sectionKey -> block id -> score 0..1. */
  scores?: Record<string, Record<string, number>>;
}

const emptyProgress = (): Progress => ({
  mode: 'easy', xp: 0, done: {}, exams: {}, games: {}, days: {},
  streak: { count: 0, best: 0, last: null, freezes: 1 }, joined: new Date().toISOString(),
});

const dayKey = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const daysBetween = (a: string, b: string) => Math.round((new Date(b + 'T12:00').getTime() - new Date(a + 'T12:00').getTime()) / 86400000);

/** Streak rules: one activity per day keeps it. One missed day is covered by a freeze if you have one. */
export function bumpStreak(s: Streak, today = dayKey()): Streak {
  if (s.last === today) return s;
  let { count, freezes } = s;
  const gap = s.last ? daysBetween(s.last, today) : Infinity;
  if (gap === 1) count += 1;
  else if (gap === 2 && freezes > 0) { freezes -= 1; count += 1; }
  else count = 1;
  if (count % 7 === 0 && freezes < 2) freezes += 1; // earn a freeze every 7 days, hold at most 2
  return { count, freezes, last: today, best: Math.max(s.best, count) };
}

/** True if the streak is still alive today (done today or yesterday). */
export function streakAlive(s: Streak): boolean {
  if (!s.last) return false;
  const gap = daysBetween(s.last, dayKey());
  return gap <= 1 || (gap === 2 && s.freezes > 0);
}

interface Store {
  ready: boolean;
  user: User | null;
  isAdmin: boolean;
  /** Closed beta: may this account use the course? null while checking. */
  access: boolean | null;
  /** Beta step 1: put an email on the list. 'ok' = answer the welcome questions next, 'exists' = already done, else an error. */
  joinBeta: (email: string) => Promise<string>;
  /** Beta step 2: store the welcome answers with the sign-up, so they are not asked again after approval. */
  saveBetaProfile: (email: string, profile: LearnerProfile, course: string) => Promise<string>;
  /** Admin switch: see the whole course unlocked. */
  adminView: boolean;
  progress: Progress;
  signInDemo: (name: string, email: string) => void;
  /** Google login. `next` is where the browser lands afterwards (default: the course). */
  signInGoogle: (next?: string) => Promise<void>;
  signInEmail: (email: string) => Promise<string | null>;
  /** Email + password. Sends no email, so no rate limit. Accounts are created in the Supabase dashboard. */
  signInPassword: (email: string, password: string) => Promise<string | null>;
  /** Lets a signed-in user add or change a password, so they do not need email links. */
  setPassword: (password: string) => Promise<string | null>;
  signOut: () => Promise<void>;
  saveProfile: (p: LearnerProfile) => void;
  setCourse: (id: string) => void;
  setMode: (m: Mode) => void;
  setAdminView: (on: boolean) => void;
  setDemoAdmin: (on: boolean) => void;
  completeSection: (key: string, xp: number) => void;
  /** Adds active time (seconds) to a section and to today. */
  addTime: (key: string, seconds: number) => void;
  /** Keeps the first score of an exercise (0..1), for the admin's accuracy numbers. */
  recordScore: (key: string, blockId: string, score: number) => void;
  recordExam: (key: string, percent: number) => void;
  recordGame: (id: string, score: number, xp: number) => void;
  /** Adds the XP for a marked text once. */
  rewardWriting: (submissionId: string, xp: number) => void;
}

const Ctx = createContext<Store | null>(null);
const LS_USER = 'fd:user';
const LS_ADMIN = 'fd:admin';
const LS_BETA = 'fd:beta';
type BetaAnswers = Partial<LearnerProfile> & { course?: string };

/** Turns the answers stored with a beta sign-up into the learner profile. */
function withAnswers(p: Progress, a: BetaAnswers, fallbackName: string): Progress {
  const profile: LearnerProfile = {
    name: String(a.name || fallbackName).slice(0, 40),
    gender: a.gender && ['frau', 'mann', 'divers', 'none'].includes(a.gender) ? a.gender : 'none',
    reasons: Array.isArray(a.reasons) ? a.reasons.map(String).slice(0, 10) : [],
    nativeLanguage: String(a.nativeLanguage || '').slice(0, 40),
    goal: [25, 50, 100].includes(Number(a.goal)) ? Number(a.goal) : 50,
    board: a.board !== false,
    uiLang: a.uiLang === 'de' ? 'de' : 'en',
  };
  // English help follows the language of the sign-up: English sign-up = help on, German = German only.
  return { ...p, profile, course: a.course || p.course, mode: profile.uiLang === 'de' ? 'advanced' : 'easy' };
}
const lsKey = (id: string) => `fd:progress:${id}`;

function readLS<T>(key: string, fallback: T): T {
  try { const v = localStorage.getItem(key); return v ? (JSON.parse(v) as T) : fallback; } catch { return fallback; }
}
function writeLS(key: string, value: unknown) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* storage unavailable */ }
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [access, setAccess] = useState<boolean | null>(null);
  const [adminView, setAdminViewState] = useState(false);
  const [progress, setProgress] = useState<Progress>(emptyProgress);
  const userRef = useRef<User | null>(null);

  const loadLocal = useCallback((u: User) => {
    setProgress({ ...emptyProgress(), ...readLS<Partial<Progress>>(lsKey(u.id), {}) });
  }, []);

  // Boot: restore session.
  useEffect(() => {
    const sb = supabase();
    if (!sb) {
      const u = readLS<User | null>(LS_USER, null);
      if (u) { setUser(u); loadLocal(u); }
      const admin = readLS<{ is: boolean; view: boolean }>(LS_ADMIN, { is: false, view: false });
      setIsAdmin(admin.is); setAdminViewState(admin.is && admin.view);
      setAccess(true); // demo mode has no list, everyone is in
      setReady(true);
      return;
    }
    const apply = async (session: { user: { id: string; email?: string; user_metadata?: Record<string, string> } } | null) => {
      if (!session) { setAccess(null); setUser(null); setIsAdmin(false); setAdminViewState(false); setProgress(emptyProgress()); setReady(true); return; }
      const su = session.user;
      const u: User = { id: su.id, email: su.email || '', name: su.user_metadata?.full_name || su.user_metadata?.name || (su.email || 'Lernfuchs').split('@')[0] };
      setAccess(null); // decided below, after the welcome answers are in place
      setUser(u);
      loadLocal(u); // instant, from cache
      const { data } = await sb.from('profiles').select('is_admin, progress').eq('id', u.id).maybeSingle();
      // The database decides who is admin (flag in profiles or an admin email, see supabase/004_admin_email.sql).
      const { data: adminRpc } = await sb.rpc('is_admin');
      const admin = !!(adminRpc || data?.is_admin);
      setIsAdmin(admin);
      let answers: BetaAnswers | null = null;
      let acc = true;
      if (!admin) {
        // Closed beta. If supabase/006_beta.sql has not been run yet, keep the site open.
        const { data: ok, error } = await sb.rpc('beta_access');
        acc = error ? true : !!ok;
        if (ok) {
          const { data: a } = await sb.rpc('my_beta_profile');
          if (a && typeof a === 'object') answers = a as BetaAnswers;
        }
      }
      if (admin) {
        setAdminViewState(true);
        writeLS(LS_ADMIN, { is: true, view: true });
      }
      let cur: Progress = { ...emptyProgress(), ...readLS<Partial<Progress>>(lsKey(u.id), {}) };
      if (data) {
        if (data.progress && Object.keys(data.progress).length) {
          const remote = { ...emptyProgress(), ...(data.progress as Partial<Progress>) };
          // Keep whichever copy has more XP so offline work is never lost.
          if ((remote.xp || 0) >= (cur.xp || 0)) { cur = remote; setProgress(remote); writeLS(lsKey(u.id), remote); }
        }
      } else {
        await sb.from('profiles').upsert({ id: u.id, email: u.email, name: u.name });
      }
      // Beta testers answered the welcome questions when they signed up. Use them instead of asking again.
      if (!admin && answers && !cur.profile) {
        const next = withAnswers(cur, answers, u.name);
        setProgress(next); writeLS(lsKey(u.id), next);
        await sb.from('profiles').upsert({ id: u.id, email: u.email, name: u.name, progress: next });
      }
      setAccess(acc);
      setAdminViewState(readLS<{ view: boolean }>(LS_ADMIN, { view: false }).view);
      setReady(true);
    };
    sb.auth.getSession().then(({ data }) => apply(data.session));
    const { data: sub } = sb.auth.onAuthStateChange((_e, session) => { void apply(session); });
    return () => sub.subscription.unsubscribe();
  }, [loadLocal]);

  // Save: local cache always, Supabase when configured (debounced).
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const save = useCallback((p: Progress) => {
    const u = userRef.current;
    if (!u) return;
    writeLS(lsKey(u.id), p);
    const sb = supabase();
    if (!sb) return;
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      void sb.from('profiles').upsert({
        id: u.id, email: u.email, name: u.name, progress: p,
        xp: p.xp, streak: p.streak.count, last_active: p.streak.last, updated_at: new Date().toISOString(),
      });
    }, 600);
  }, []);

  const update = useCallback((fn: (p: Progress) => Progress) => {
    setProgress((prev) => { const next = fn(prev); save(next); return next; });
  }, [save]);

  const earn = (p: Progress, xp: number): Progress => {
    const today = dayKey();
    return { ...p, xp: p.xp + xp, days: { ...p.days, [today]: (p.days[today] || 0) + xp }, streak: bumpStreak(p.streak, today) };
  };

  // The name from the welcome form wins over the one from the login provider.
  const shownUser = useMemo(() => (user ? { ...user, name: progress.profile?.name || user.name } : null), [user, progress.profile?.name]);
  userRef.current = shownUser;

  const store = useMemo<Store>(() => ({
    ready, user: shownUser, isAdmin, access, adminView, progress,
    joinBeta: async (email) => {
      const e = email.trim().toLowerCase();
      const sb = supabase();
      if (!sb) return readLS<Record<string, unknown>>(LS_BETA, {})[e] ? 'exists' : 'ok';
      const { data, error } = await sb.rpc('beta_signup', { p_email: e });
      if (error) return /check constraint|violates/i.test(error.message) ? 'Please check your email address.' : 'Something went wrong. Please try again in a moment.';
      return String(data);
    },
    saveBetaProfile: async (email, profile, course) => {
      const e = email.trim().toLowerCase();
      const sb = supabase();
      if (!sb) { writeLS(LS_BETA, { ...readLS<Record<string, unknown>>(LS_BETA, {}), [e]: { ...profile, course } }); return 'ok'; }
      const { data, error } = await sb.rpc('beta_profile', { p_email: e, p_profile: { ...profile, course } });
      if (error) return 'Something went wrong. Please try again in a moment.';
      return String(data);
    },
    saveProfile: (profile) => {
      if (isAdmin) return;
      // First time only: English help follows the language the form was filled in.
      update((p) => ({ ...p, profile, ...(!p.profile && profile.uiLang ? { mode: profile.uiLang === 'de' ? 'advanced' as const : 'easy' as const } : {}) }));
    },
    setCourse: (course) => update((p) => ({ ...p, course })),
    signInDemo: (name, email) => {
      const u: User = { id: 'demo-' + email.toLowerCase().replace(/[^a-z0-9]/g, '-'), email, name };
      writeLS(LS_USER, u); setUser(u);
      const cur: Progress = { ...emptyProgress(), ...readLS<Partial<Progress>>(lsKey(u.id), {}) };
      const answers = readLS<Record<string, BetaAnswers>>(LS_BETA, {})[email.trim().toLowerCase()];
      const next = answers && !cur.profile ? withAnswers(cur, answers, name) : cur;
      writeLS(lsKey(u.id), next); setProgress(next);
    },
    signInGoogle: async (next) => {
      const sb = supabase();
      if (sb) await sb.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: authCallbackUrl(next || '/lernen') } });
    },
    signInEmail: async (email) => {
      const sb = supabase();
      if (!sb) return 'Supabase ist nicht eingerichtet.';
      const { error } = await sb.auth.signInWithOtp({ email, options: { emailRedirectTo: authCallbackUrl('/lernen') } });
      return error ? error.message : null;
    },
    signInPassword: async (email, password) => {
      const sb = supabase();
      if (!sb) return 'Supabase ist nicht eingerichtet.';
      const { error } = await sb.auth.signInWithPassword({ email, password });
      return error ? error.message : null;
    },
    setPassword: async (password) => {
      const sb = supabase();
      if (!sb) return 'Supabase ist nicht eingerichtet.';
      const { error } = await sb.auth.updateUser({ password });
      return error ? error.message : null;
    },
    signOut: async () => {
      const sb = supabase();
      if (sb) await sb.auth.signOut();
      try { localStorage.removeItem(LS_USER); } catch { /* ignore */ }
      setUser(null); setProgress(emptyProgress());
    },
    setMode: (mode) => update((p) => ({ ...p, mode })),
    setAdminView: (on) => { setAdminViewState(on); writeLS(LS_ADMIN, { is: isAdmin, view: on }); },
    setDemoAdmin: (on) => {
      if (!DEMO_MODE) return; // real admins are set in the database
      setIsAdmin(on); setAdminViewState(on); writeLS(LS_ADMIN, { is: on, view: on });
    },
    rewardWriting: (id, xp) => { if (isAdmin) return; update((p) => (p.writing?.[id] !== undefined ? p : earn({ ...p, writing: { ...(p.writing || {}), [id]: xp } }, xp))); },
    addTime: (key, seconds) => {
      if (isAdmin || seconds <= 0) return;
      const today = dayKey();
      update((p) => ({ ...p, time: { ...p.time, [key]: Math.round((p.time?.[key] || 0) + seconds) }, timeDays: { ...p.timeDays, [today]: Math.round((p.timeDays?.[today] || 0) + seconds) } }));
    },
    recordScore: (key, blockId, score) => {
      if (isAdmin) return;
      update((p) => (p.scores?.[key]?.[blockId] !== undefined ? p : { ...p, scores: { ...p.scores, [key]: { ...p.scores?.[key], [blockId]: Math.max(0, Math.min(1, score)) } } }));
    },
    completeSection: (key, xp) => { if (isAdmin) return; update((p) => (p.done[key] ? p : earn({ ...p, done: { ...p.done, [key]: new Date().toISOString() } }, xp))); },
    recordExam: (key, percent) => {
      if (isAdmin) return;
      update((p) => {
        const old = p.exams[key];
        const passed = percent >= PASS_MARK;
        const firstPass = passed && !old?.passed;
        const next = { ...p, exams: { ...p.exams, [key]: { best: Math.max(old?.best || 0, percent), passed: passed || !!old?.passed, attempts: (old?.attempts || 0) + 1 } } };
        return earn(next, firstPass ? 100 : 10);
      });
    },
    recordGame: (id, score, xp) => { if (isAdmin) return; update((p) => earn({ ...p, games: { ...p.games, [id]: Math.max(p.games[id] || 0, score) } }, xp)); },
  }), [ready, shownUser, isAdmin, access, adminView, progress, loadLocal, update]);

  return <Ctx.Provider value={store}>{children}</Ctx.Provider>;
}

export function useStore(): Store {
  const s = useContext(Ctx);
  if (!s) throw new Error('useStore must be used inside StoreProvider');
  return s;
}

export { dayKey };
