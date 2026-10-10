'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BRAND } from '@/lib/config';
import { streakAlive, useStore } from '@/lib/store';
import { Fox } from './Fox';

export function Nav() {
  const { user, progress, setMode, isAdmin, adminView, signOut, ready } = useStore();
  const path = usePathname();
  const link = (href: string, label: string) => (
    <Link href={href} className={`nav-link ${path === href || (href !== '/' && path.startsWith(href)) ? 'is-here' : ''}`}>{label}</Link>
  );
  const alive = streakAlive(progress.streak);
  return (
    <header className="nav">
      <Link href={user ? '/lernen' : '/'} className="brand" aria-label={`${BRAND} Startseite`}>
        <Fox size={38} /><span>{BRAND}</span>
      </Link>
      <nav className="nav-links" aria-label="Hauptnavigation">
        {link('/lernen', 'Lernen')}
        {link('/spiele', 'Spiele')}
        {link('/community', 'Community')}
        {isAdmin && link('/admin', 'Admin')}
      </nav>
      <div className="nav-right">
        {user && (
          <>
            <span className={`stat streak ${alive ? 'is-alive' : ''}`} title={alive ? 'Deine Serie läuft' : 'Lerne heute, um eine Serie zu starten'}>
              <span className="flame" aria-hidden>🔥</span>{alive ? progress.streak.count : 0}<span className="sr-only"> Tage Serie</span>
            </span>
            <span className="stat" title="Erfahrungspunkte"><span aria-hidden>⭐</span>{progress.xp}<span className="sr-only"> XP</span></span>
            <div className="seg" role="group" aria-label="Erklärungen">
              <button type="button" aria-pressed={progress.mode === 'easy'} onClick={() => setMode('easy')} title="Erklärungen auf Deutsch und Englisch">Easy</button>
              <button type="button" aria-pressed={progress.mode === 'advanced'} onClick={() => setMode('advanced')} title="Erklärungen nur auf Deutsch">Deutsch pur</button>
            </div>
            <button type="button" className="avatar" title={`${user.name}: abmelden`} onClick={() => void signOut()} aria-label="Abmelden">{user.name.slice(0, 1).toUpperCase()}</button>
          </>
        )}
        {ready && !user && <Link href="/login" className="btn btn-sm">Anmelden</Link>}
      </div>
      {isAdmin && adminView && <div className="admin-bar">Admin-Ansicht: Der ganze Kurs ist offen. <Link href="/admin">Ändern</Link></div>}
    </header>
  );
}
