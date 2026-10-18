/** Served at www.fuchsdeutsch.de/pruefung (Fuchsdeutsch rewrites /pruefung/* to this app). */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '/pruefung';
/** @type {import('next').NextConfig} */
export default { reactStrictMode: true, basePath, env: { NEXT_PUBLIC_BASE_PATH: basePath } };
