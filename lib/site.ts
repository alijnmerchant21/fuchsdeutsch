/** Custom domain in production. Override with NEXT_PUBLIC_SITE_URL in Vercel if the domain changes. */
export const CANONICAL_SITE = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.fuchsdeutsch.de').replace(/\/$/, '');

const NEXT_KEY = 'fd:auth-next';

/** Origin used for auth redirects so magic links stay on the real domain, not *.vercel.app. */
export function siteOrigin(): string {
  if (typeof window === 'undefined') return CANONICAL_SITE;
  const { origin, hostname } = window.location;
  if (hostname === 'localhost' || hostname === '127.0.0.1') return origin;
  return CANONICAL_SITE;
}

const safePath = (p: string | null | undefined) => (p && p.startsWith('/') && !p.startsWith('//') ? p : '/lernen');

/**
 * Supabase only honours a redirect that exactly matches its allow list, so the URL carries no query.
 * The page to return to is kept in localStorage instead.
 */
export function authCallbackUrl(next = '/lernen'): string {
  try { localStorage.setItem(NEXT_KEY, safePath(next)); } catch { /* storage unavailable */ }
  return `${siteOrigin()}/auth/callback`;
}

export function takeAuthNext(): string {
  try {
    const v = localStorage.getItem(NEXT_KEY);
    localStorage.removeItem(NEXT_KEY);
    return safePath(v);
  } catch { return '/lernen'; }
}
