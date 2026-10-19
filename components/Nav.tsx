'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { SiteHeader, type ShellItem } from '@/shared/shell/SiteHeader';
import { findChapter } from '@/content/course';
import { useUiLang } from '@/lib/lang';
import { streakAlive, useStore } from '@/lib/store';
import { chapterOpen, sectionOpen } from '@/lib/unlock';

/** Spiele is linked once its Vercel project is live (set NEXT_PUBLIC_SPIELE_LIVE=1). Until then it shows "soon". */
const SPIELE_LIVE = process.env.NEXT_PUBLIC_SPIELE_LIVE === '1';

export function Nav() {
  const { user, progress, isAdmin, adminView, signOut, ready, access } = useStore();
  const router = useRouter();
  const [lang, setLang] = useUiLang();
  const path = usePathname();
  const en = lang === 'en';
  const here = (href: string) => path === href || path.startsWith(href + '/');

  // Row 2: the parts of the page you are on.
  const homeParts = (prefix: string): ShellItem[] => [
    { key: 'levels', label: en ? 'Levels' : 'Niveaus', href: `${prefix}#levels` },
    { key: 'exam', label: en ? 'Exam prep' : 'Prüfungstraining', href: `${prefix}#exam` },
    { key: 'features', label: en ? 'What you get' : 'Was du bekommst', href: `${prefix}#features` },
    ...(!user || access === false ? [{ key: 'beta', label: en ? 'Free beta' : 'Kostenlose Beta', href: `${prefix}#beta` }] : []),
  ];
  let sections: ShellItem[] = [];
  const chapterMatch = path.match(/^\/kurs\/([^/]+)\/([^/]+)/);
  const found = chapterMatch ? findChapter(chapterMatch[1]) : null;
  if (!ready) sections = [];
  else if (path === '/') sections = homeParts('');
  else if (found && user) {
    // A chapter: its sections, then the chapter test. Closed sections are greyed out.
    const { chapter: ch, course, index } = found;
    const open = chapterOpen(course, index, progress, isAdmin);
    sections = [
      { key: 'back', label: '←', href: '/kurs', internal: true },
      ...ch.sections.map((s, i): ShellItem => ({
        key: s.id, label: s.label, href: `/kurs/${ch.id}/${s.id}`, internal: true,
        active: chapterMatch![2] === s.id, locked: !(open && sectionOpen(ch, i, progress, isAdmin)),
      })),
      { key: 'test', label: en ? 'Chapter test' : 'Kapiteltest', href: `/kurs/${ch.id}/pruefung`, internal: true, active: chapterMatch![2] === 'pruefung' },
    ];
  } else if (user && isAdmin) {
    sections = [
      { key: 'admin', label: 'Admin', href: '/admin', internal: true, active: here('/admin') },
      { key: 'kurs', label: 'Kurse', href: '/kurs', internal: true, active: here('/kurs') },
      { key: 'geschichten', label: 'Geschichten', href: '/geschichten', internal: true, active: here('/geschichten') },
    ];
  } else if (user) {
    sections = [
      { key: 'start', label: 'Start', href: '/lernen', internal: true, active: here('/lernen') },
      { key: 'kurs', label: en ? 'My course' : 'Mein Kurs', href: '/kurs', internal: true, active: here('/kurs') },
      { key: 'geschichten', label: en ? 'Stories' : 'Geschichten', href: '/geschichten', internal: true, active: here('/geschichten') },
      { key: 'bestenliste', label: en ? 'Leaderboard' : 'Bestenliste', href: '/bestenliste', internal: true, active: here('/bestenliste') },
      { key: 'final', label: en ? 'Final exam' : 'Abschlussprüfung', href: '/abschlusspruefung', internal: true, active: here('/abschlusspruefung') },
    ];
  } else sections = homeParts('/');

  const alive = streakAlive(progress.streak);
  const right = (
    <>
      {user && !isAdmin && (
        <>
          <span className={`v3-chip t-butter fx-hide-sm ${alive ? '' : 'is-off'}`} title={alive ? 'Deine Serie läuft' : 'Lerne heute, um eine Serie zu starten'}>
            <span aria-hidden>🔥</span> {alive ? progress.streak.count : 0}<span className="sr-only"> Tage Serie</span>
          </span>
          <span className="v3-chip t-lilac fx-hide-sm" title="Erfahrungspunkte">{progress.xp} XP</span>
          <Link href="/willkommen" className="v3-avatar" title={`${user.name}: Profil bearbeiten`} aria-label="Profil bearbeiten">{user.name.slice(0, 1).toUpperCase()}</Link>
        </>
      )}
      {user && <button type="button" className="v3-textbtn" onClick={() => void signOut().then(() => router.push('/'))}>{en ? 'Log out' : 'Abmelden'}</button>}
    </>
  );
  return (
    <SiteHeader
      app="kurs" root="" foxSrc="/fox-logo.png" lang={lang} onLang={setLang}
      kursHref={user ? (isAdmin ? '/admin' : '/lernen') : '/'} spieleLive={SPIELE_LIVE}
      sections={sections} right={right}
      below={isAdmin && adminView ? <div className="admin-bar">Admin: Kursinhalte sind frei zugänglich. <Link href="/admin">Verwaltung</Link></div> : undefined}
    />
  );
}
