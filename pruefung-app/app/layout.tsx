import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import '@fontsource-variable/bricolage-grotesque';
import '@fontsource/atkinson-hyperlegible/400.css';
import '@fontsource/atkinson-hyperlegible/700.css';
import '@fontsource/atkinson-hyperlegible/400-italic.css';
import './trainer.css';
import './app.css';
import { StoreProvider } from '@/lib/store';
import { LangProvider } from '@/lib/lang';
import { Topbar } from '@/components/Topbar';

export const metadata: Metadata = {
  title: 'Fuchsdeutsch Prüfung · Goethe B1 Mock-Prüfungen',
  description: 'Free diagnostic mock test for the Goethe-Zertifikat B1, then practice blocks aimed at your weak parts.',
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1 };

const themeInit = `(function(){var t=null;try{t=localStorage.getItem('FDPTHEME')}catch(e){}if(t!=='dark'){t='light'}document.documentElement.setAttribute('data-theme',t)})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" translate="no" className="notranslate" suppressHydrationWarning>
      <head>
        <meta name="google" content="notranslate" />
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>
        <LangProvider><StoreProvider>
          <Topbar />
          <main>{children}</main>
          <footer className="foot"><div className="footrow"><span className="small dim">Fuchsdeutsch Prüfung · Übungsmaterial im Format des Goethe-Zertifikats B1. Kein offizielles Angebot des Goethe-Instituts.</span><Link className="linkbtn" href="/garantie">Garantie-Bedingungen</Link><Link className="linkbtn" href="/datenschutz">Datenschutz</Link></div></footer>
        </StoreProvider></LangProvider>
      </body>
    </html>
  );
}
