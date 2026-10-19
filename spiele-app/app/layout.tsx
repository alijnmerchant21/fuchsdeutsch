import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import '@fontsource-variable/figtree';
import './trainer.css';
import './app.css';
import './spiele.css';
import './shell.css';
import './fd-match.css';
import { SITE } from '@/lib/config';
import { LangProvider } from '@/lib/lang';
import { StoreProvider } from '@/lib/store';
import { Topbar } from '@/components/Topbar';

export const metadata: Metadata = {
  title: 'Fuchsdeutsch Spiele · Deutsch lernen mit Spielen',
  description: 'Small games to learn and improve your German, from A1 to B2. Free with your Fuchsdeutsch account.',
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
          <footer className="foot"><div className="footrow"><span className="small dim">Fuchsdeutsch Spiele · Deutsch lernen mit Spielen, von A1 bis B2.</span><a className="linkbtn" href={SITE}>Fuchsdeutsch</a><a className="linkbtn" href={`${SITE}privacy`}>Datenschutz</a></div></footer>
        </StoreProvider></LangProvider>
      </body>
    </html>
  );
}
