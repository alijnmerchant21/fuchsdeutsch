import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import '@fontsource-variable/bricolage-grotesque';
import '@fontsource-variable/figtree';
import './globals.css';
import { StoreProvider } from '@/lib/store';
import { Nav } from '@/components/Nav';

export const metadata: Metadata = {
  title: 'Fuchsdeutsch: Learn German, free',
  description: 'A free German course from A1 to C2 with listening in real dialects, games, streaks and Goethe-style exams. Starting with B2.1.',
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#F2F3F5' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body>
        <StoreProvider>
          <Nav />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
