export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
/** No keys: sign-in is simulated and kept in this browser only. */
export const DEMO_MODE = !SUPABASE_URL || !SUPABASE_ANON_KEY;
/** URL prefix of the app (Next adds it to <Link>, but not to raw src/iframe/redirect URLs). */
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '/spiele';
export const asset = (p: string) => (/^https?:\/\//.test(p) ? p : `${BASE}/${p.replace(/^\//, '')}`);
/** Fuchsdeutsch home page (same domain in production, absolute so it also works on the Vercel preview URL). */
export const SITE = process.env.NEXT_PUBLIC_SITE_ROOT ?? 'https://www.fuchsdeutsch.de/';
