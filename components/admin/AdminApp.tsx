'use client';
/* Fuchsdeutsch control center: course and Prüfung in one place. Opens as its own page (no site header). */
import { useCallback, useEffect, useState } from 'react';
import { LangSwitch, ThemeSwitch } from '@/shared/shell/SiteHeader';
import { DEMO_MODE } from '@/lib/config';
import { useUiLang } from '@/lib/lang';
import { useStore } from '@/lib/store';
import { useAdminData } from './data';
import { EmailComposer, type ComposeRequest } from './EmailComposer';
import { Learners } from './Learners';
import { Content, Emails, Reports, Writing } from './More';
import { Overview } from './Overview';
import { AT } from './text';
import { Waitlists } from './Waitlists';

export type Tab = 'overview' | 'waitlist' | 'users' | 'reports' | 'writing' | 'emails' | 'content';
const TABS: { id: Tab; icon: string }[] = [
  { id: 'overview', icon: '◎' }, { id: 'waitlist', icon: '⏳' }, { id: 'users', icon: '👥' }, { id: 'reports', icon: '⚠' },
  { id: 'writing', icon: '✍' }, { id: 'emails', icon: '✉' }, { id: 'content', icon: '📚' },
];

/** The place in the control center lives in the URL hash (#users/<id>), so reload and back work. */
function readHash(): { tab: Tab; sub: string | null } {
  if (typeof window === 'undefined') return { tab: 'overview', sub: null };
  const [tab, sub] = window.location.hash.replace(/^#/, '').split('/');
  return { tab: (TABS.some((x) => x.id === tab) ? tab : 'overview') as Tab, sub: sub ? decodeURIComponent(sub) : null };
}

export function AdminApp() {
  const { isAdmin, adminView, setAdminView, setDemoAdmin, ready, user } = useStore();
  const [lang, setLang] = useUiLang();
  const t = AT[lang];
  const { data, reload } = useAdminData(isAdmin);
  const [tab, setTab] = useState<Tab>('overview');
  const [sub, setSub] = useState<string | null>(null);
  const [mail, setMail] = useState<ComposeRequest | null>(null);
  const [which, setWhich] = useState<'kurs' | 'pruefung'>('kurs');

  useEffect(() => {
    const on = () => { const h = readHash(); setTab(h.tab); setSub(h.sub); if (h.tab === 'waitlist' && (h.sub === 'kurs' || h.sub === 'pruefung')) setWhich(h.sub); };
    on();
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  const go = useCallback((next: Tab, s?: string | null) => {
    const h = `#${next}${s ? `/${encodeURIComponent(s)}` : ''}`;
    if (window.location.hash !== h) window.history.pushState(null, '', h);
    setTab(next); setSub(s ?? null);
    if (next === 'waitlist' && (s === 'kurs' || s === 'pruefung')) setWhich(s);
    window.scrollTo({ top: 0 });
  }, []);
  useEffect(() => { document.title = `${t.title} · Fuchsdeutsch`; }, [t.title]);

  if (!ready) return <div className="ad-center"><p>{t.loading}</p></div>;
  if (!user || !isAdmin) {
    return (
      <div className="ad-center">
        <h1>{t.title}</h1>
        <p>{t.notAdmin}</p>
        {DEMO_MODE && user && <button type="button" className="ad-btn" onClick={() => setDemoAdmin(true)}>{t.demoAdmin}</button>}
        <a className="ad-link" href="/">{t.back}</a>
      </div>
    );
  }

  const approvedPr = new Set((data?.access || []).map((a) => a.user_id));
  const badge: Partial<Record<Tab, number>> = data ? {
    waitlist: data.beta.filter((b) => !b.approved).length + data.cands.filter((c) => !approvedPr.has(c.user_id)).length,
    reports: data.reports.filter((r) => r.status === 'open').length,
    writing: data.writing.filter((w) => w.status === 'submitted').length,
  } : {};

  return (
    <div className="ad-app">
      <aside className="ad-side">
        <a className="ad-brand" href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/fuchsi.png" alt="" width={30} height={30} />
          <span><b>Fuchsdeutsch</b><small>{t.title}</small></span>
        </a>
        <nav className="ad-nav" aria-label={t.title}>
          {TABS.map((x) => (
            <button key={x.id} type="button" className={tab === x.id ? 'is-on' : ''} aria-current={tab === x.id ? 'page' : undefined} onClick={() => go(x.id)}>
              <span className="ad-nav-icon" aria-hidden>{x.icon}</span>{t.nav[x.id]}
              {!!badge[x.id] && <span className="ad-badge">{badge[x.id]}</span>}
            </button>
          ))}
        </nav>
        <div className="ad-side-foot">
          <label className="ad-switch"><input type="checkbox" checked={adminView} onChange={(e) => setAdminView(e.target.checked)} /><span />{t.viewAs}: {adminView ? t.viewOn : t.viewOff}</label>
          {DEMO_MODE && <button type="button" className="ad-link" onClick={() => setDemoAdmin(false)}>Demo: exit admin</button>}
        </div>
      </aside>
      <div className="ad-main">
        <header className="ad-top">
          <h1>{t.nav[tab]}</h1>
          <div className="ad-top-right">
            <button type="button" className="ad-btn ghost sm" onClick={() => void reload()}>↻ {t.refresh}</button>
            <LangSwitch lang={lang} onChange={setLang} />
            <ThemeSwitch en={lang === 'en'} />
            <a className="ad-btn ghost sm" href="/">{t.back} ↗</a>
          </div>
        </header>
        <main className="ad-body">
          {DEMO_MODE && <p className="ad-warn">{t.demo}</p>}
          {!data ? <p className="ad-empty">{t.loading}</p> : (
            <>
              {tab === 'overview' && <Overview data={data} t={t} lang={lang} go={go} />}
              {tab === 'waitlist' && <Waitlists data={data} t={t} lang={lang} which={which} setWhich={(w) => go('waitlist', w)} compose={setMail} reload={() => void reload()} />}
              {tab === 'users' && <Learners data={data} t={t} lang={lang} open={sub} setOpen={(id) => go('users', id)} which={which} setWhich={setWhich} compose={setMail} />}
              {tab === 'reports' && <Reports data={data} t={t} lang={lang} compose={setMail} reload={() => void reload()} />}
              {tab === 'writing' && <Writing t={t} lang={lang} />}
              {tab === 'emails' && <Emails data={data} t={t} lang={lang} compose={setMail} />}
              {tab === 'content' && <Content t={t} open={sub} setOpen={(id) => go('content', id)} />}
            </>
          )}
        </main>
      </div>
      {mail && <EmailComposer req={mail} t={t} onClose={() => setMail(null)} onDone={() => void reload()} />}
    </div>
  );
}
