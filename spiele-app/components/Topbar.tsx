'use client';
import { usePathname } from 'next/navigation';
import { asset, DEMO_MODE, SITE } from '@/lib/config';
import { useLang, useT } from '@/lib/lang';
import { useStore } from '@/lib/store';
import { SiteHeader, type ShellItem } from './SiteHeader';

/** The shared Fuchsdeutsch header (components/SiteHeader.tsx) with the Spiele second row. */
export function Topbar() {
  const { user, signOut, ready } = useStore();
  const { lang, setLang, help, setHelp } = useLang();
  const t = useT();
  const path = usePathname();
  const onLanding = path === '/';

  let sections: ShellItem[] = [];
  if (ready && !user) {
    const pre = onLanding ? '' : '/';
    sections = [
      { key: 'how', label: t('So funktioniert es', 'How it works'), href: `${pre}#how`, internal: !onLanding },
      { key: 'spiele', label: t('Die Spiele', 'The games'), href: `${pre}#spiele`, internal: !onLanding },
    ];
  } else if (ready && user) {
    sections = [
      { key: 'alle', label: t('Alle Spiele', 'All games'), href: '/', internal: true, active: path === '/' || path.startsWith('/spiel/') },
      { key: 'bestenliste', label: t('🏆 Bestenliste', '🏆 Leaderboard'), href: '/bestenliste', internal: true, active: path.startsWith('/bestenliste') },
    ];
  }

  const right = (
    <>
      {DEMO_MODE && <span className="mtag">Demo</span>}
      {user && (
        <button type="button" className="helpsw" role="switch" aria-checked={help} onClick={() => setHelp(!help)} title="English help: an English line under the German texts">
          <span className="track" /><span className="lbl">English-Hilfe</span>
        </button>
      )}
      {user && <button className="linkbtn" onClick={() => void signOut()}>{t('Abmelden', 'Log out')}</button>}
    </>
  );
  return (
    <SiteHeader
      app="spiele" root={SITE.replace(/\/$/, '')} foxSrc={asset('fox-logo.png')} lang={lang}
      onLang={user ? undefined : setLang} spieleLive sections={sections} right={right}
    />
  );
}
