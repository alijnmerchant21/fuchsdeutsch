'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { DEMO_MODE, PASS_MARK } from './config';
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
  /** Admin switch: see the whole course unlocked. */
  adminView: boolean;
  progress: Progress;
  signInDemo: (name: string, email: string) => void;
  signInGoogle: () => Promise<void>;
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
  recordExam: (key: string, percent: number) => void;
  recordGame: (id: string, score: number, xp: number) => void;
}

const Ctx = createContext<Store | null>(null);
const LS_USER = 'fd:user';
const LS_ADMIN = 'fd:admin';
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
      setReady(true);
      return;
    }
    const apply = async (session: { user: { id: string; email?: string; user_metadata?: Record<string, string> } } | null) => {
      if (!session) { setUser(null); setIsAdmin(false); setAdminViewState(false); setProgress(emptyProgress()); setReady(true); return; }
      const su = session.user;
      const u: User = { id: su.id, email: su.email || '', name: su.user_metadata?.full_name || su.user_metadata?.name || (su.email || 'Lernfuchs').split('@')[0] };
      setUser(u);
      loadLocal(u); // instant, from cache
      const { data } = await sb.from('profiles').select('is_admin, progress').eq('id', u.id).maybeSingle();
      // The database decides who is admin (flag in profiles or an admin email, see supabase/004_admin_email.sql).
      const { data: adminRpc } = await sb.rpc('is_admin');
      const admin = !!(adminRpc || data?.is_admin);
      setIsAdmin(admin);
      if (admin) {
        setAdminViewState(true);
        writeLS(LS_ADMIN, { is: true, view: true });
      }
      if (data) {
        if (data.progress && Object.keys(data.progress).length) {
          const remote = { ...emptyProgress(), ...(data.progress as Partial<Progress>) };
          const local = readLS<Partial<Progress>>(lsKey(u.id), {});
          // Keep whichever copy has more XP so offline work is never lost.
          if ((remote.xp || 0) >= (local.xp || 0)) { setProgress(remote); writeLS(lsKey(u.id), remote); }
        }
      } else {
        await sb.from('profiles').upsert({ id: u.id, email: u.email, name: u.name });
      }
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
    ready, user: shownUser, isAdmin, adminView, progress,
    saveProfile: (profile) => { if (isAdmin) return; update((p) => ({ ...p, profile })); },
    setCourse: (course) => update((p) => ({ ...p, course })),
    signInDemo: (name, email) => {
      const u: User = { id: 'demo-' + email.toLowerCase().replace(/[^a-z0-9]/g, '-'), email, name };
      writeLS(LS_USER, u); setUser(u); loadLocal(u);
    },
    signInGoogle: async () => {
      const sb = supabase();
      if (sb) await sb.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: `${window.location.origin}/lernen` } });
    },
    signInEmail: async (email) => {
      const sb = supabase();
      if (!sb) return 'Supabase ist nicht eingerichtet.';
      const { error } = await sb.auth.signInWithOtp({ email, options: { emailRedirectTo: `${window.location.origin}/lernen` } });
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
  }), [ready, shownUser, isAdmin, adminView, progress, loadLocal, update]);

  return <Ctx.Provider value={store}>{children}</Ctx.Provider>;
}

export function useStore(): Store {
  const s = useContext(Ctx);
  if (!s) throw new Error('useStore must be used inside StoreProvider');
  return s;
}

export { dayKey };
