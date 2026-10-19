'use client';
/* Fuchsdeutsch shell: the one header used by all three apps (course, Prüfung, Spiele).
   Source of truth: shared/shell/. `npm run shell` copies it into each app, so edit it here, not in the copies.
   Row 1: fox + brand, the four apps (a pastel pill slides to the one under the mouse), DE/EN, light or dark, extras.
   Row 2: the parts of the current page or app, centered, each with its own pastel; it follows the scroll for #sections. */
import Link from 'next/link';
import { useCallback, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react';

export type ShellApp = 'kurs' | 'pruefung' | 'spiele';
export type ShellLang = 'de' | 'en';
export interface ShellItem {
  key: string;
  label: ReactNode;
  /** Route in this app (client link), absolute URL, or '#id' of a section on this page. */
  href?: string;
  onClick?: () => void;
  active?: boolean;
  /** Next.js client link. False for links into another app (full page load). */
  internal?: boolean;
  soon?: boolean;
  /** Not open yet (a lesson you have not reached): greyed out with a lock. */
  locked?: boolean;
}

const TONES = ['mint', 'peach', 'sky', 'butter', 'lilac', 'rose'] as const;
const APP_TONE: Record<string, (typeof TONES)[number]> = { kurs: 'mint', pruefung: 'peach', spiele: 'sky', tausend: 'lilac' };
const useIsoLayout = typeof window === 'undefined' ? useEffect : useLayoutEffect;

/** A row of links with one pastel pill that glides to the hovered link and back to the current one. */
function PillRow({ items, tones, className, label, center, soon = 'soon' }: { items: ShellItem[]; tones: string[]; className: string; label: string; center?: boolean; soon?: string }) {
  const inner = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState<number | null>(null);
  const [pill, setPill] = useState<{ x: number; w: number; on: boolean }>({ x: 0, w: 0, on: false });
  const active = items.findIndex((i) => i.active);
  const idx = hover ?? active;

  const measure = useCallback(() => {
    const el = inner.current?.querySelectorAll<HTMLElement>('[data-pill]')[idx];
    if (!el || idx < 0) { setPill((p) => ({ ...p, on: false })); return; }
    setPill({ x: el.offsetLeft, w: el.offsetWidth, on: true });
  }, [idx]);
  useIsoLayout(() => { measure(); }, [measure, items]);
  useEffect(() => {
    window.addEventListener('resize', measure);
    void document.fonts?.ready.then(measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);
  // Keep the current item in view when the row scrolls sideways on a phone.
  useEffect(() => {
    if (active < 0) return;
    const el = inner.current?.querySelectorAll<HTMLElement>('[data-pill]')[active];
    const box = inner.current?.parentElement;
    if (el && box && box.scrollWidth > box.clientWidth) box.scrollTo({ left: el.offsetLeft - 24, behavior: 'smooth' });
  }, [active]);

  const tone = idx >= 0 ? tones[idx % tones.length] : tones[0];
  return (
    <nav className={className} aria-label={label} onMouseLeave={() => setHover(null)}>
      <div className={`fx-row ${center ? 'is-center' : ''}`} ref={inner}>
        <span className={`fx-pill ${pill.on ? 'is-on' : ''}`} aria-hidden style={{ translate: `${pill.x}px 0`, width: pill.w, background: `var(--fx-${tone})` }} />
        {items.map((it, i) => {
          const cls = `fx-link ${it.active ? 'is-here' : ''} ${it.soon || it.locked ? 'is-soon' : ''}`;
          const body = <>{it.locked && <span aria-hidden>🔒</span>}{it.label}{it.soon && <small>{soon}</small>}</>;
          const enter = () => setHover(it.soon || it.locked ? null : i);
          const common = { 'data-pill': '', className: cls, onMouseEnter: enter, onFocus: enter, onBlur: () => setHover(null) };
          if (it.soon || it.locked) return <span key={it.key} {...common} aria-disabled="true">{body}</span>;
          if (!it.href) return <button key={it.key} type="button" {...common} onClick={it.onClick} aria-current={it.active ? 'true' : undefined}>{body}</button>;
          if (it.internal) return <Link key={it.key} href={it.href} {...common} onClick={it.onClick} aria-current={it.active ? 'page' : undefined}>{body}</Link>;
          return <a key={it.key} href={it.href} {...common} onClick={it.onClick} aria-current={it.active ? 'page' : undefined}>{body}</a>;
        })}
      </div>
    </nav>
  );
}

/** DE | EN with a dark thumb that glides over with a little bounce. */
export function LangSwitch({ lang, onChange }: { lang: ShellLang; onChange: (l: ShellLang) => void }) {
  const [moving, setMoving] = useState(false);
  const pick = (l: ShellLang) => {
    if (l === lang) return;
    setMoving(true); onChange(l);
    window.setTimeout(() => setMoving(false), 260);
  };
  return (
    <div className={`fx-lang ${moving ? 'is-moving' : ''}`} data-lang={lang} role="group" aria-label="Sprache / Language">
      <span className="fx-lang-thumb" aria-hidden />
      <button type="button" aria-pressed={lang === 'de'} onClick={() => pick('de')}>DE</button>
      <button type="button" aria-pressed={lang === 'en'} onClick={() => pick('en')}>EN</button>
    </div>
  );
}

/** Light or dark. The page sets data-theme before it paints; FDPTHEME is shared by all three apps. */
export function ThemeSwitch({ en }: { en: boolean }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [spin, setSpin] = useState(0);
  useEffect(() => { setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'); }, []);
  const flip = () => {
    const n = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', n);
    try { localStorage.setItem('FDPTHEME', n); } catch { /* storage unavailable */ }
    setTheme(n); setSpin((s) => s + 1);
  };
  const t = en ? 'Light or dark' : 'Hell oder dunkel';
  return (
    <button type="button" className="fx-theme" onClick={flip} title={t} aria-label={t}>
      <span key={spin} className={spin ? 'is-spin' : ''}>{theme === 'dark' ? '☀' : '☾'}</span>
    </button>
  );
}

/** Highlights the section of the page that is on screen (for '#id' items). */
function useScrollSpy(ids: string[]) {
  const [on, setOn] = useState<string | null>(null);
  const key = ids.join('|');
  useEffect(() => {
    if (!ids.length) return;
    const pick = () => {
      const line = window.innerHeight * 0.35;
      let cur: string | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) cur = id;
      }
      // At the very bottom the last section counts, even if it is short.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        const last = [...ids].reverse().find((id) => document.getElementById(id));
        if (last) cur = last;
      }
      setOn(cur);
    };
    pick();
    window.addEventListener('scroll', pick, { passive: true });
    window.addEventListener('resize', pick);
    const t = window.setInterval(pick, 1200); // sections that appear later (sign-up card)
    return () => { window.removeEventListener('scroll', pick); window.removeEventListener('resize', pick); window.clearInterval(t); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
  return on;
}

export interface SiteHeaderProps {
  app: ShellApp;
  /** '' in the course app, the absolute site root (no trailing slash) in Prüfung and Spiele. */
  root: string;
  foxSrc: string;
  lang: ShellLang;
  onLang?: (l: ShellLang) => void;
  /** Where "Kurs" leads (home for visitors, /lernen for learners). */
  kursHref?: string;
  spieleLive?: boolean;
  /** Row 2. Items with href '#id' follow the scroll. */
  sections?: ShellItem[];
  /** Extra controls on the right (XP, avatar, log out, English help). */
  right?: ReactNode;
  /** Shown under the header, full width (admin bar and similar). */
  below?: ReactNode;
}

export function SiteHeader({ app, root, foxSrc, lang, onLang, kursHref, spieleLive = false, sections = [], right, below }: SiteHeaderProps) {
  const en = lang === 'en';
  const apps: ShellItem[] = [
    { key: 'kurs', label: en ? 'Course' : 'Kurs', href: kursHref ?? `${root}/`, active: app === 'kurs', internal: app === 'kurs' },
    { key: 'pruefung', label: 'Prüfung', href: app === 'pruefung' ? '/' : `${root}/pruefung`, active: app === 'pruefung', internal: app === 'pruefung' },
    { key: 'spiele', label: en ? 'Games' : 'Spiele', href: app === 'spiele' ? '/' : `${root}/spiele`, active: app === 'spiele', internal: app === 'spiele', soon: !spieleLive && app !== 'spiele' },
    { key: 'tausend', label: 'Tausend', soon: true },
  ];
  const spyIds = sections.filter((s) => s.href?.startsWith('#')).map((s) => s.href!.slice(1));
  const spied = useScrollSpy(spyIds);
  const row2 = sections.map((s) => (s.href?.startsWith('#') ? { ...s, active: s.active ?? spied === s.href.slice(1) } : s));
  const [wiggle, setWiggle] = useState(0);
  return (
    <header className={`fx-head fx-app-${app}`}>
      <div className="fx-top">
        <a href={`${root}/`} className="fx-brand" aria-label="Fuchsdeutsch" onMouseEnter={() => setWiggle((w) => w + 1)}>
          <span key={wiggle} className={`fx-fox ${wiggle ? 'is-wiggle' : ''}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={foxSrc} alt="" width={34} height={34} />
          </span>
          <span className="fx-name">Fuchsdeutsch</span>
        </a>
        <div className="fx-scroll fx-apps-wrap">
          <PillRow items={apps} tones={apps.map((a) => APP_TONE[a.key])} className="fx-apps" label={en ? 'Fuchsdeutsch apps' : 'Fuchsdeutsch-Bereiche'} soon={en ? 'soon' : 'bald'} />
        </div>
        <div className="fx-right">
          {right}
          {onLang && <LangSwitch lang={lang} onChange={onLang} />}
          <ThemeSwitch en={en} />
        </div>
      </div>
      {row2.length > 0 && (
        <div className="fx-sub">
          <div className="fx-scroll">
            <PillRow items={row2} tones={[...TONES]} className="fx-sections" label={en ? 'On this page' : 'Auf dieser Seite'} center />
          </div>
        </div>
      )}
      {below}
    </header>
  );
}
