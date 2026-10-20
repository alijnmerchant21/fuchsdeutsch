'use client';
/* Sign-in and the candidate's own data. Same Supabase accounts as Fuchsdeutsch. */
import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';
import { BASE, DEMO_MODE } from './config';
import { db } from './db';
import { setCurrentLevel } from './content';
import { levelOfCandidate, type Level } from './levels';
import { supabase } from './supabase';
import type { Attempt, Block, Candidate, Claim } from './types';

export interface User { id: string; email: string; name: string }

interface Store {
  ready: boolean;
  user: User | null;
  isAdmin: boolean;
  candidate: Candidate | null;
  /** Prüfung waitlist: approved by the admin? null while loading. */
  access: boolean | null;
  /** exam level of the candidate (b1 until the form is filled) */
  level: Level;
  attempts: Attempt[];
  blocks: Block[];
  claims: Claim[];
  reload: () => Promise<void>;
  signInDemo: (name: string, email: string, admin: boolean) => void;
  signInEmail: (email: string) => Promise<string | null>;
  signInPassword: (email: string, password: string) => Promise<string | null>;
  signInGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

const Ctx = createContext<Store | null>(null);
const LS_DEMO = 'fdp:demo-user';

const demoId = (email: string) => {
  let h = 0; for (const c of email.toLowerCase()) h = (h * 31 + c.charCodeAt(0)) | 0;
  return 'demo-' + Math.abs(h).toString(36);
};

export function StoreProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setAdmin] = useState(false);
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [access, setAccess] = useState<boolean | null>(null);
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [claims, setClaims] = useState<Claim[]>([]);

  const load = useCallback(async (u: User | null) => {
    if (!u) { setCandidate(null); setAttempts([]); setBlocks([]); setClaims([]); setAdmin(false); setAccess(null); return; }
    const [c, a, b, cl, adm, acc] = await Promise.all([db.candidate(u.id), db.attempts(u.id), db.blocks(u.id), db.claims(u.id), DEMO_MODE ? Promise.resolve(false) : db.isAdmin(), db.access(u.id)]);
    setAccess(acc);
    setCurrentLevel(levelOfCandidate(c));
    setCandidate(c); setAttempts(a); setBlocks(b); setClaims(cl);
    if (!DEMO_MODE) setAdmin(adm);
  }, []);

  useEffect(() => {
    if (DEMO_MODE) {
      try {
        const raw = localStorage.getItem(LS_DEMO);
        if (raw) { const d = JSON.parse(raw) as User & { admin?: boolean }; setUser(d); setAdmin(!!d.admin); void load(d).then(() => setAdmin(!!d.admin)); }
      } catch { /* ignore */ }
      setReady(true);
      return;
    }
    const sb = supabase()!;
    const fromSession = (s: { user: { id: string; email?: string; user_metadata?: { full_name?: string; name?: string } } } | null): User | null =>
      s ? { id: s.user.id, email: s.user.email ?? '', name: s.user.user_metadata?.full_name || s.user.user_metadata?.name || (s.user.email ?? '').split('@')[0] } : null;
    void sb.auth.getSession().then(async ({ data }) => { const u = fromSession(data.session); setUser(u); await load(u); setReady(true); });
    const { data: sub } = sb.auth.onAuthStateChange((_e, session) => { const u = fromSession(session); setUser(u); void load(u); });
    return () => sub.subscription.unsubscribe();
  }, [load]);

  const reload = useCallback(async () => { await load(user); if (DEMO_MODE && user) { try { setAdmin(!!JSON.parse(localStorage.getItem(LS_DEMO) || '{}').admin); } catch { /* ignore */ } } }, [load, user]);

  const signInDemo = (name: string, email: string, admin: boolean) => {
    const u = { id: demoId(email), email: email.toLowerCase(), name };
    try { localStorage.setItem(LS_DEMO, JSON.stringify({ ...u, admin })); } catch { /* ignore */ }
    setUser(u); setAdmin(admin); void load(u).then(() => setAdmin(admin));
  };

  const redirect = () => `${window.location.origin}${BASE}/auth/callback`;

  const signInEmail = async (email: string) => {
    const sb = supabase(); if (!sb) return 'Demo mode';
    const { error } = await sb.auth.signInWithOtp({ email, options: { emailRedirectTo: redirect() } });
    return error?.message ?? null;
  };
  const signInPassword = async (email: string, password: string) => {
    const sb = supabase(); if (!sb) return 'Demo mode';
    const { error } = await sb.auth.signInWithPassword({ email, password });
    return error?.message ?? null;
  };
  const signInGoogle = async () => {
    const sb = supabase(); if (!sb) return;
    await sb.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: redirect() } });
  };
  const signOut = async () => {
    if (DEMO_MODE) { try { localStorage.removeItem(LS_DEMO); } catch { /* ignore */ } }
    else await supabase()!.auth.signOut();
    setUser(null); void load(null);
  };

  return (
    <Ctx.Provider value={{ ready, user, isAdmin, candidate, access, level: levelOfCandidate(candidate), attempts, blocks, claims, reload, signInDemo, signInEmail, signInPassword, signInGoogle, signOut }}>
      {children}
    </Ctx.Provider>
  );
}

export function useStore() {
  const s = useContext(Ctx);
  if (!s) throw new Error('StoreProvider missing');
  return s;
}
