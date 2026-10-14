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
  return (
    <header className="nav">
      <Link href={user ? (isAdmin ? '/admin' : '/lernen') : '/'} className="brand" aria-label={`${BRAND} Startseite`}>
        <Fox size={38} /><span>{BRAND}</span>
      </Link>
      <nav className="nav-links" aria-label="Hauptnavigation">
        {!isAdmin && link('/lernen', 'Lernen')}
        {link('/spiele', 'Spiele')}
        {!isAdmin && link('/bestenliste', 'Bestenliste')}
        {!isAdmin && link('/community', 'Community')}
        {isAdmin && link('/admin', 'Admin')}
      </nav>
      <div className="nav-right">
        {user && (
          <>
            {!isAdmin && (
              <>
                <span className={`stat streak ${streakAlive(progress.streak) ? 'is-alive' : ''}`} title={streakAlive(progress.streak) ? 'Deine Serie läuft' : 'Lerne heute, um eine Serie zu starten'}>
                  <span className="flame" aria-hidden>🔥</span>{streakAlive(progress.streak) ? progress.streak.count : 0}<span className="sr-only"> Tage Serie</span>
                </span>
                <span className="stat" title="Erfahrungspunkte"><span aria-hidden>⭐</span>{progress.xp}<span className="sr-only"> XP</span></span>
                <div className="seg" role="group" aria-label="Erklärungen">
                  <button type="button" aria-pressed={progress.mode === 'easy'} onClick={() => setMode('easy')} title="Erklärungen auf Deutsch und Englisch">Easy</button>
                  <button type="button" aria-pressed={progress.mode === 'advanced'} onClick={() => setMode('advanced')} title="Erklärungen nur auf Deutsch">Deutsch pur</button>
                </div>
                <Link href="/willkommen" className="avatar" title={`${user.name}: Profil bearbeiten`} aria-label="Profil bearbeiten">{user.name.slice(0, 1).toUpperCase()}</Link>
              </>
            )}
            {isAdmin && <span className="pill t-lilac">Admin</span>}
            <button type="button" className="link-btn small" onClick={() => void signOut()}>Abmelden</button>
          </>
        )}
        {ready && !user && <Link href="/login" className="btn btn-sm">Anmelden</Link>}
      </div>
      {isAdmin && adminView && <div className="admin-bar">Admin: Kursinhalte sind frei zugänglich. <Link href="/admin">Verwaltung</Link></div>}
    </header>
  );
}
