'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { asset, BASE, DEMO_MODE } from '@/lib/config';
import { useLang, useT } from '@/lib/lang';
import { useStore } from '@/lib/store';
import { supabase } from '@/lib/supabase';

const token = async () => (await supabase()?.auth.getSession())?.data.session?.access_token ?? null;
import { SiteHeader, type ShellItem } from './SiteHeader';

/** Fuchsdeutsch home page (same domain in production, absolute so it also works on the Vercel preview URL). */
const SITE = (process.env.NEXT_PUBLIC_SITE_ROOT ?? 'https://www.fuchsdeutsch.de/').replace(/\/$/, '');
/** Spiele is linked once its Vercel project is live (NEXT_PUBLIC_SPIELE_LIVE=1). Until then it shows "soon". */
const SPIELE_LIVE = process.env.NEXT_PUBLIC_SPIELE_LIVE === '1';

/** The shared Fuchsdeutsch header (components/SiteHeader.tsx) with Prüfung's own second row. */
export function Topbar() {
  const { user, isAdmin, signOut, ready } = useStore();
  const { lang, setLang, help, setHelp } = useLang();
  const t = useT();
  const path = usePathname();
  const here = (href: string) => (href === '/' ? path === '/' : path === href || path.startsWith(href + '/'));
  const onLanding = path === '/';

  let sections: ShellItem[] = [];
  if (ready && !user) {
    const pre = onLanding ? '' : '/';
    sections = [
      { key: 'how', label: t('So funktioniert es', 'How it works'), href: `${pre}#how`, internal: !onLanding },
      { key: 'why', label: t('Warum anders', 'Why different'), href: `${pre}#why`, internal: !onLanding },
      { key: 'preise', label: t('Preise', 'Pricing'), href: `${pre}#preise`, internal: !onLanding },
    ];
  } else if (ready && user && path !== '/setup') {
    const item = (key: string, label: string, href: string): ShellItem => ({ key, label, href, internal: true, active: here(href) });
    sections = [
      item('plan', 'Mein Plan', '/'),
      item('diagnose', 'Mock Test', '/diagnose'),
      item('fehler', 'Fehler wiederholen', '/fehler'),
      item('fallen', 'Die Fallen', '/fallen'),
      item('verlauf', 'Verlauf', '/verlauf'),
      item('heft', 'Fehlerheft', '/heft'),
      ...(isAdmin ? [item('admin', 'Admin', '/admin')] : []),
    ];
  }

  const showLang = !user || path === '/setup';
  const right = (
    <>
      {DEMO_MODE && <span className="mtag">Demo</span>}
      {user && !showLang && (
        <button type="button" className="helpsw" role="switch" aria-checked={help} onClick={() => setHelp(!help)} title="English help: instructions and tips with an English line">
          <span className="track" /><span className="lbl">English-Hilfe</span>
        </button>
      )}
      {user && <button className="linkbtn" onClick={() => void signOut()}>{path === '/setup' ? t('Abmelden', 'Log out') : 'Abmelden'}</button>}
    </>
  );
  return (
    <SiteHeader
      app="pruefung" root={SITE} foxSrc={asset('fox-logo.png')} lang={lang}
      onLang={showLang ? setLang : undefined} spieleLive={SPIELE_LIVE}
      sections={sections} right={right}
      report={{ app: 'pruefung', apiBase: BASE, email: user?.email, getToken: token }}
    />
  );
}
