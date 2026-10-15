'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BRAND } from '@/lib/config';
import { streakAlive, useStore } from '@/lib/store';
import { Fox } from './Fox';

export function Nav() {
  const { user, progress, isAdmin, adminView, signOut, ready } = useStore();
  const path = usePathname();
  const here = (href: string) => path === href || (href !== '/' && path.startsWith(href));
  const link = (href: string, label: string, also?: string) => (
    <Link href={href} className={`v3-navlink ${here(href) || (also && here(also)) ? 'is-here' : ''}`}>{label}</Link>
  );
  const alive = streakAlive(progress.streak);
  return (
    <header className="v3-nav">
      <div className="v3-nav-in">
        <Link href={user ? (isAdmin ? '/admin' : '/lernen') : '/'} className="v3-brand" aria-label={`${BRAND} Startseite`}>
          <Fox size={34} /><span>{BRAND}</span>
        </Link>
        {user && (
          <nav className="v3-navlinks" aria-label="Hauptnavigation">
            {!isAdmin && link('/lernen', 'Start')}
            {!isAdmin && link('/kurs', 'Mein Kurs')}
            {!isAdmin && link('/geschichten', 'Geschichten')}
            {!isAdmin && link('/bestenliste', 'Bestenliste')}
            {isAdmin && link('/admin', 'Admin')}
          </nav>
        )}
        <div className="v3-nav-right">
          {user && !isAdmin && (
            <>
              <span className={`v3-chip t-butter ${alive ? '' : 'is-off'}`} title={alive ? 'Deine Serie läuft' : 'Lerne heute, um eine Serie zu starten'}>
                <span aria-hidden>🔥</span> {alive ? progress.streak.count : 0}<span className="sr-only"> Tage Serie</span>
              </span>
              <span className="v3-chip t-lilac" title="Erfahrungspunkte">{progress.xp} XP</span>
              <Link href="/willkommen" className="v3-avatar" title={`${user.name}: Profil bearbeiten`} aria-label="Profil bearbeiten">{user.name.slice(0, 1).toUpperCase()}</Link>
            </>
          )}
          {user && isAdmin && <span className="v3-chip t-lilac">Admin</span>}
          {user && <button type="button" className="v3-textbtn" onClick={() => void signOut()}>Abmelden</button>}
          {ready && !user && <Link href="/login" className="v3-btn small">Anmelden</Link>}
        </div>
      </div>
      {isAdmin && adminView && <div className="admin-bar">Admin: Kursinhalte sind frei zugänglich. <Link href="/admin">Verwaltung</Link></div>}
    </header>
  );
}
