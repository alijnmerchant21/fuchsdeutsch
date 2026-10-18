import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // This folder is the project root, even if a parent folder has its own lockfile.
  outputFileTracingRoot: dirname(fileURLToPath(import.meta.url)),
  // Exam Edition lives in its own Vercel project (basePath /prufung) and is shown under this domain.
  // Set PRUEFUNG_ORIGIN in Vercel, e.g. https://fuchsdeutsch-pruefung.vercel.app
  async rewrites() {
    const origin = process.env.PRUEFUNG_ORIGIN;
    if (!origin) return [];
    return [
      { source: '/prufung', destination: `${origin}/prufung` },
      { source: '/prufung/:path*', destination: `${origin}/prufung/:path*` },
    ];
  },
};
export default nextConfig;
