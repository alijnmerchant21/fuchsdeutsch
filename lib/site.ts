/** Custom domain in production. Set in Vercel: NEXT_PUBLIC_SITE_URL=https://www.fuchsdeutsch.de */
export const CANONICAL_SITE = (process.env.NEXT_PUBLIC_SITE_URL || '').replace(/\/$/, '');

/** Origin used for auth redirects so magic links stay on the real domain, not *.vercel.app. */
export function siteOrigin(): string {
  if (typeof window === 'undefined') return CANONICAL_SITE || 'https://www.fuchsdeutsch.de';
  const { origin, hostname } = window.location;
  if (hostname === 'localhost' || hostname === '127.0.0.1') return origin;
  if (CANONICAL_SITE) return CANONICAL_SITE;
  return origin;
}

export function authCallbackUrl(next = '/lernen'): string {
  const path = next.startsWith('/') && !next.startsWith('//') ? next : '/lernen';
  return `${siteOrigin()}/auth/callback?next=${encodeURIComponent(path)}`;
}
