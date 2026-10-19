/** Served at www.fuchsdeutsch.de/spiele (Fuchsdeutsch rewrites /spiele/* to this app). */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '/spiele';
/** @type {import('next').NextConfig} */
export default { reactStrictMode: true, basePath, env: { NEXT_PUBLIC_BASE_PATH: basePath } };
