// Copies the shared header (shared/shell/) into Prüfung and Spiele. Those apps deploy on their own,
// so they cannot import from the parent folder. Run after every change: npm run shell
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const note = (f) => `/* Copy of shared/shell/${f}. Edit the original, then run: npm run shell */\n`;
for (const app of ['pruefung-app', 'spiele-app']) {
  for (const [from, to] of [['SiteHeader.tsx', 'components/SiteHeader.tsx'], ['shell.css', 'app/shell.css'], ['fd-match.css', 'app/fd-match.css'], ['ReportButton.tsx', 'components/ReportButton.tsx'], ['report-route.ts', 'app/api/report/route.ts']]) {
    const src = readFileSync(join(root, 'shared/shell', from), 'utf8');
    const out = src.startsWith("'use client';\n") ? src.replace("'use client';\n", `'use client';\n${note(from)}`) : note(from) + src;
    mkdirSync(dirname(join(root, app, to)), { recursive: true });
    writeFileSync(join(root, app, to), out);
    console.log(`${app}/${to}`);
  }
}
