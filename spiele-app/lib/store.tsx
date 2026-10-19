'use client';
/* Sign-in only. Same Supabase accounts as Fuchsdeutsch and Fuchsdeutsch Prüfung. */
import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';
import { BASE, DEMO_MODE } from './config';
import { addXp, loadPlays, type Play } from './progress';
import { supabase } from './supabase';

export interface User { id: string; email: string; name: string }

interface Store {
  ready: boolean;
  user: User | null;
  /** this player's XP entries (all games) */
  plays: Play[];
  /** save XP for a game and refresh streak and totals */
  earn: (game: string, xp: number) => Promise<void>;
  signInDemo: (name: string, email: string) => void;
  signInEmail: (email: string) => Promise<string | null>;
  signInPassword: (email: string, password: string) => Promise<string | null>;
  signInGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

const Ctx = createContext<Store | null>(null);
const LS_DEMO = 'fds:demo-user';

export function StoreProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [plays, setPlays] = useState<Play[]>([]);
  const uid = user?.id;
  useEffect(() => { if (!uid) { setPlays([]); return; } void loadPlays().then(setPlays); }, [uid]);
  const earn = useCallback(async (game: string, xp: number) => {
    await addXp(game, xp);
    setPlays(await loadPlays());
  }, []);

  useEffect(() => {
    if (DEMO_MODE) {
      try { const raw = localStorage.getItem(LS_DEMO); if (raw) setUser(JSON.parse(raw) as User); } catch { /* ignore */ }
      setReady(true);
      return;
    }
    const sb = supabase()!;
    const fromSession = (s: { user: { id: string; email?: string; user_metadata?: { full_name?: string; name?: string } } } | null): User | null =>
      s ? { id: s.user.id, email: s.user.email ?? '', name: s.user.user_metadata?.full_name || s.user.user_metadata?.name || (s.user.email ?? '').split('@')[0] } : null;
    void sb.auth.getSession().then(({ data }) => { setUser(fromSession(data.session)); setReady(true); });
    const { data: sub } = sb.auth.onAuthStateChange((_e, session) => setUser(fromSession(session)));
    return () => sub.subscription.unsubscribe();
  }, []);

  const signInDemo = (name: string, email: string) => {
    const u = { id: 'demo-' + email.toLowerCase(), email: email.toLowerCase(), name };
    try { localStorage.setItem(LS_DEMO, JSON.stringify(u)); } catch { /* ignore */ }
    setUser(u);
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
    setUser(null);
  };

  return <Ctx.Provider value={{ ready, user, plays, earn, signInDemo, signInEmail, signInPassword, signInGoogle, signOut }}>{children}</Ctx.Provider>;
}

export function useStore() {
  const s = useContext(Ctx);
  if (!s) throw new Error('StoreProvider missing');
  return s;
}
