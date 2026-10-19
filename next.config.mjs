import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // This folder is the project root, even if a parent folder has its own lockfile.
  outputFileTracingRoot: dirname(fileURLToPath(import.meta.url)),
  // Course finals moved from /pruefung/<course> to /abschlusspruefung/<course>.
  async redirects() {
    return [{ source: '/pruefung/:course(a1|a2|b1|b2-1|b2-2|c1|c2)', destination: '/abschlusspruefung/:course', permanent: true }];
  },
  // Exam Edition (pruefung-app/, own Vercel project with basePath /pruefung) is shown under this domain.
  // Set PRUEFUNG_ORIGIN in Vercel, e.g. https://fuchsdeutsch-pruefung.vercel.app
  async rewrites() {
    const out = [];
    const origin = process.env.PRUEFUNG_ORIGIN;
    if (origin) out.push(
      { source: '/pruefung', destination: `${origin}/pruefung` },
      { source: '/pruefung/:path*', destination: `${origin}/pruefung/:path*` },
    );
    // Fuchsdeutsch Spiele (spiele-app/, own Vercel project with basePath /spiele). Set SPIELE_ORIGIN in Vercel.
    const spiele = process.env.SPIELE_ORIGIN;
    if (spiele) out.push(
      { source: '/spiele', destination: `${spiele}/spiele` },
      { source: '/spiele/:path*', destination: `${spiele}/spiele/:path*` },
    );
    return out;
  },
};
export default nextConfig;
