'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useUiLang } from '@/lib/lang';
import { BRAND } from '@/lib/config';
import { streakAlive, useStore } from '@/lib/store';
import { Fox } from './Fox';

export function Nav() {
  const { user, progress, isAdmin, adminView, signOut, ready } = useStore();
  const router = useRouter();
  const [lang] = useUiLang();
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
        <nav className="v3-navlinks" aria-label="Hauptnavigation">
          {user && !isAdmin && link('/lernen', 'Start')}
          {user && !isAdmin && link('/kurs', 'Mein Kurs')}
          {user && !isAdmin && link('/geschichten', 'Geschichten')}
          {user && !isAdmin && link('/bestenliste', 'Bestenliste')}
          {/* Fuchsdeutsch Prüfung is its own app under /pruefung, so a full page load, not a client link. */}
          <a href="/pruefung" className={`v3-navlink ${path.startsWith('/pruefung') ? 'is-here' : ''}`}>Prüfung</a>
          <span className="v3-navlink is-soon" aria-disabled="true" title={lang === 'en' ? 'Coming soon' : 'Kommt bald'}>{lang === 'en' ? 'Games' : 'Spiele'} <small>{lang === 'en' ? 'soon' : 'bald'}</small></span>
          <span className="v3-navlink is-soon" aria-disabled="true" title={lang === 'en' ? 'Coming soon' : 'Kommt bald'}>Tausend <small>{lang === 'en' ? 'soon' : 'bald'}</small></span>
          {user && isAdmin && link('/admin', 'Admin')}
        </nav>
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
          {user && <button type="button" className="v3-textbtn" onClick={() => void signOut().then(() => router.push('/'))}>{lang === 'en' ? 'Log out' : 'Abmelden'}</button>}
        </div>
      </div>
      {isAdmin && adminView && <div className="admin-bar">Admin: Kursinhalte sind frei zugänglich. <Link href="/admin">Verwaltung</Link></div>}
    </header>
  );
}
