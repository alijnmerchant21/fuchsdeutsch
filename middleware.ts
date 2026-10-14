import { NextRequest, NextResponse } from 'next/server';
import { CANONICAL_SITE } from '@/lib/site';

/** Send production traffic from the default Vercel URL to the custom domain (same session storage). */
export function middleware(req: NextRequest) {
  if (!CANONICAL_SITE || process.env.VERCEL_ENV !== 'production') return NextResponse.next();
  const host = req.nextUrl.hostname;
  if (!host.endsWith('.vercel.app')) return NextResponse.next();
  const dest = new URL(req.nextUrl.pathname + req.nextUrl.search, CANONICAL_SITE);
  return NextResponse.redirect(dest, 308);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|audio|fox-logo.png).*)'],
};
