'use client';
/* XP, streaks and the leaderboard.
   Supabase: table spiele_plays + function spiele_leaderboard (supabase/spiele_schema.sql).
   Demo mode: everything in this browser, the leaderboard is filled with labeled sample players. */
import { DEMO_MODE } from './config';
import { supabase } from './supabase';

export interface Play { game: string; day: string; xp: number }
export interface Stats {
  streak: number;
  /** played today (streak is safe) */
  today: boolean;
  todayXp: number;
  weekXp: number;
  totalXp: number;
  /** last 7 days, oldest first: did the player play that day? */
  week: { day: string; played: boolean }[];
}
export interface Row { player: string; score: number; streak_days: number; is_me: boolean; sample?: boolean }

const LS = 'fds:plays';
export const DAILY_GOAL = 50;

/** Local calendar day as YYYY-MM-DD. */
export const dayOf = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const addDays = (s: string, n: number) => { const d = new Date(s + 'T12:00'); d.setDate(d.getDate() + n); return dayOf(d); };
const monday = (s: string) => { const d = new Date(s + 'T12:00'); const w = (d.getDay() + 6) % 7; d.setDate(d.getDate() - w); return dayOf(d); };

function readLocal(): Play[] {
  try { return JSON.parse(localStorage.getItem(LS) || '[]') as Play[]; } catch { return []; }
}

export async function loadPlays(): Promise<Play[]> {
  if (DEMO_MODE) return readLocal();
  const sb = supabase()!;
  const { data } = await sb.from('spiele_plays').select('game_id, day, xp').order('day', { ascending: true }).limit(5000);
  return (data ?? []).map((r: { game_id: string; day: string; xp: number }) => ({ game: r.game_id, day: r.day, xp: r.xp }));
}

export async function addXp(game: string, xp: number): Promise<void> {
  const amount = Math.max(0, Math.min(500, Math.round(xp)));
  if (!amount) return;
  const p = { game, day: dayOf(), xp: amount };
  if (DEMO_MODE) {
    try { localStorage.setItem(LS, JSON.stringify([...readLocal(), p])); } catch { /* ignore */ }
    return;
  }
  const sb = supabase()!;
  const { data: u } = await sb.auth.getUser();
  if (!u.user) return;
  await sb.from('spiele_plays').insert({ user_id: u.user.id, game_id: game, day: p.day, xp: amount });
}

export function stats(plays: Play[]): Stats {
  const t = dayOf();
  const days = new Set(plays.filter((p) => p.xp > 0).map((p) => p.day));
  let streak = 0;
  let cur = days.has(t) ? t : addDays(t, -1);
  while (days.has(cur)) { streak++; cur = addDays(cur, -1); }
  const mon = monday(t);
  const sum = (f: (p: Play) => boolean) => plays.filter(f).reduce((a, p) => a + p.xp, 0);
  return {
    streak,
    today: days.has(t),
    todayXp: sum((p) => p.day === t),
    weekXp: sum((p) => p.day >= mon),
    totalXp: sum(() => true),
    week: Array.from({ length: 7 }, (_, i) => { const d = addDays(t, i - 6); return { day: d, played: days.has(d) }; }),
  };
}

/* Sample players for demo mode only, clearly marked in the UI. */
const SAMPLE: [string, number, number][] = [['Nele', 640, 12], ['Kenji', 515, 9], ['Amara', 430, 6], ['Felix', 290, 4], ['Lina', 180, 2], ['Herr Lehmann', 95, 1]];

export async function leaderboard(scope: 'week' | 'all', game: string | null, me: string, plays: Play[]): Promise<Row[]> {
  if (DEMO_MODE) {
    const mon = monday(dayOf());
    const mine = plays.filter((p) => (!game || p.game === game) && (scope === 'all' || p.day >= mon)).reduce((a, p) => a + p.xp, 0);
    const f = scope === 'week' ? 0.35 : 1;
    const g = game ? 0.6 : 1;
    const rows: Row[] = SAMPLE.map(([player, xp, s]) => ({ player, score: Math.round(xp * f * g), streak_days: s, is_me: false, sample: true }));
    if (mine > 0) rows.push({ player: me, score: mine, streak_days: stats(plays).streak, is_me: true });
    return rows.sort((a, b) => b.score - a.score);
  }
  const { data, error } = await supabase()!.rpc('spiele_leaderboard', { scope, game, max_rows: 50 });
  if (error) throw new Error(error.message);
  return (data ?? []) as Row[];
}
