'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { DEMO_MODE } from '@/lib/config';
import { useLang, useT } from '@/lib/lang';
import { useStore } from '@/lib/store';
import { Fox } from './Fox';

/** Fuchsdeutsch home page (same domain in production, absolute so it also works on the Vercel preview URL). */
const SITE = process.env.NEXT_PUBLIC_SITE_ROOT ?? 'https://www.fuchsdeutsch.de/';

export function Topbar() {
  const { user, isAdmin, signOut, candidate, ready } = useStore();
  const { lang, setLang, help, setHelp } = useLang();
  const t = useT();
  const path = usePathname();
  const router = useRouter();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  useEffect(() => { setTheme((document.documentElement.getAttribute('data-theme') as 'light' | 'dark') || 'light'); }, []);
  const flip = () => {
    const n = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', n);
    try { localStorage.setItem('FDPTHEME', n); } catch { /* ignore */ }
    setTheme(n);
  };
  const go = (id: string) => {
    if (path !== '/') { router.push('/#' + id); return; }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <header className="topbar">
      <Link className="brand" href="/"><Fox size={34} /><span className="bname">Fuchsdeutsch</span><span className="ptag">Prüfung</span></Link>
      <nav className="sitenav" aria-label="Fuchsdeutsch">
        <a href={SITE}>{t('← Zu Fuchsdeutsch', '← To Fuchsdeutsch')}</a>
        <span className="soon" aria-disabled="true" title={t('Kommt bald', 'Coming soon')}>{t('Spiele', 'Games')} <small>{t('bald', 'soon')}</small></span>
        <span className="soon" aria-disabled="true" title={t('Kommt bald', 'Coming soon')}>Tausend <small>{t('bald', 'soon')}</small></span>
      </nav>
      {user ? (
        <span className="topsub">{candidate?.exam_date ? `Goethe-Zertifikat ${(candidate.level ?? 'b1').toUpperCase()} · Prüfung am ${new Date(candidate.exam_date + 'T12:00').toLocaleDateString('de-DE', { day: 'numeric', month: 'long' })}` : 'Goethe-Zertifikat A1 bis B2'}</span>
      ) : (
        <nav className="navlinks" aria-label="Seite">
          <button type="button" onClick={() => go('how')}>{t('So funktioniert es', 'How it works')}</button>
          <button type="button" onClick={() => go('why')}>{t('Warum anders', 'Why different')}</button>
          <button type="button" onClick={() => go('preise')}>{t('Preise', 'Pricing')}</button>
        </nav>
      )}
      {DEMO_MODE && <span className="mtag">Demo</span>}
      {isAdmin && <Link className="linkbtn" href="/admin">Admin</Link>}
      {user && path !== '/setup' ? (
        <button type="button" className="helpsw" role="switch" aria-checked={help} onClick={() => setHelp(!help)} title="English help: instructions and tips with an English line">
          <span className="track" /><span className="lbl">English-Hilfe</span>
        </button>
      ) : (
        <span className="langsw" role="group" aria-label="Sprache / Language">
          <button type="button" aria-pressed={lang === 'de'} onClick={() => setLang('de')}>DE</button>
          <button type="button" aria-pressed={lang === 'en'} onClick={() => setLang('en')}>EN</button>
        </span>
      )}
      {user && <button className="linkbtn" onClick={() => void signOut()}>{path === '/setup' ? t('Abmelden', 'Log out') : 'Abmelden'}</button>}
      {ready && !user && path !== '/login' && <Link className="btn navbtn" href="/login">{t('Anmelden', 'Log in')}</Link>}
      <button className="ghost" onClick={flip} title={t('Hell oder dunkel', 'Light or dark')} aria-label={t('Hell oder dunkel', 'Light or dark')}>{theme === 'dark' ? '☀' : '☾'}</button>
    </header>
  );
}
