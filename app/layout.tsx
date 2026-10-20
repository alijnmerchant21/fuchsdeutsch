import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import '@fontsource-variable/figtree';
import './globals.css';
import './v3.css';
import '../shared/shell/shell.css';
import { StoreProvider } from '@/lib/store';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Fuchsdeutsch: Learn German, free',
  description: 'A free German course with short lessons, a story that runs through every chapter and Goethe-style exams. A1, A2, B1 and B2.1 are open. Closed beta, limited spots, no deposit.',
};
export const viewport: Viewport = {
  width: 'device-width', initialScale: 1,
  themeColor: [{ media: '(prefers-color-scheme: light)', color: '#fafafa' }, { media: '(prefers-color-scheme: dark)', color: '#16181d' }],
};

// Light or dark is set before the page paints, so there is no flash. Same key as Fuchsdeutsch Prüfung.
const themeInit = `(function(){var t=null;try{t=localStorage.getItem('FDPTHEME')}catch(e){}if(t!=='dark'){t='light'}document.documentElement.setAttribute('data-theme',t)})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeInit }} /></head>
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
