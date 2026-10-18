export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
/** No keys: everything runs in this browser (localStorage). */
export const DEMO_MODE = !SUPABASE_URL || !SUPABASE_ANON_KEY;
/** Goethe B1: 60 of 100 points per module. */
export const PASS = 60;
/** URL prefix of the app (Next adds it to <Link>, but not to raw src/fetch/redirect URLs). */
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '/pruefung';
export const asset = (p: string) => (/^https?:\/\//.test(p) ? p : `${BASE}/${p.replace(/^\//, '')}`);
