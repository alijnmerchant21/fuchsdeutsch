export const BRAND = 'Fuchsdeutsch';

// Free trial window. Everyone who joins inside it learns free, no deposit.
// Change TRIAL_START to your real launch date.
export const TRIAL_START = '2026-10-10';
export const TRIAL_DAYS = 45;
export const DEPOSIT_USD = 39;

// Score needed to pass a chapter exam or the final exam (percent).
export const PASS_MARK = 60;

export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
export const DEMO_MODE = !SUPABASE_URL || !SUPABASE_ANON_KEY;

export function trialDaysLeft(now = new Date()): number {
  const end = new Date(TRIAL_START + 'T00:00:00');
  end.setDate(end.getDate() + TRIAL_DAYS);
  return Math.max(0, Math.ceil((end.getTime() - now.getTime()) / 86400000));
}
