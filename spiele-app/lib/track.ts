/* Copy of shared/shell/track.ts. Edit the original, then run: npm run shell */
/* Who uses which app. Remembers where a visitor first came from (referrer site or ?ref= / utm_source),
   and once a day tells Supabase that this signed-in person used this app (app_touch, supabase/009_app_access.sql).
   Source of truth: shared/shell/track.ts (`npm run shell` copies it). */
import type { SupabaseClient } from '@supabase/supabase-js';

type App = 'kurs' | 'pruefung' | 'spiele';
const SRC = 'fd:src';

/** First touch on this device, e.g. "ref:instagram" or "site:google.com" or "direct". Kept once. */
export function firstTouch(): string {
  try {
    const have = localStorage.getItem(SRC);
    if (have) return have;
    const q = new URLSearchParams(window.location.search);
    const tag = q.get('ref') || q.get('utm_source');
    let src = 'direct';
    if (tag) src = `ref:${tag.slice(0, 60)}`;
    else if (document.referrer) {
      const host = new URL(document.referrer).hostname.replace(/^www\./, '');
      if (host && !host.endsWith('fuchsdeutsch.de')) src = `site:${host}`;
    }
    localStorage.setItem(SRC, src);
    return src;
  } catch { return 'direct'; }
}

/** Once a day per app and account. Safe to call on every page. */
export async function touchApp(sb: SupabaseClient | null, app: App, userId: string | null | undefined) {
  const src = typeof window !== 'undefined' ? firstTouch() : 'direct';
  if (!sb || !userId) return;
  const key = `fd:touch:${app}:${userId}`;
  const today = new Date().toISOString().slice(0, 10);
  try { if (localStorage.getItem(key) === today) return; } catch { /* storage blocked: touch anyway */ }
  const { error } = await sb.rpc('app_touch', { p_app: app, p_source: src });
  if (!error) { try { localStorage.setItem(key, today); } catch { /* ignore */ } }
}
