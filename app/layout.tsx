import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import '@fontsource-variable/figtree';
import './globals.css';
import './v3.css';
import { StoreProvider } from '@/lib/store';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Fuchsdeutsch: Learn German, free',
  description: 'A free German course with short lessons, a story that runs through every chapter and Goethe-style exams. A1, A2 and B2.1 are open. Closed beta, limited spots, no deposit.',
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#F2F3F5' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body>
        <StoreProvider>
          <Nav />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
