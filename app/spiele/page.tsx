'use client';
import Link from 'next/link';
import { Fox } from '@/components/Fox';
import { course } from '@/content/course';
import { games } from '@/content/games';
import { useStore } from '@/lib/store';

export default function Spiele() {
  const { user, progress } = useStore();
  return (
    <main className="page">
      <header className="games-head">
        <Fox size={84} mood="wow" className="bob" />
        <div>
          <h1>Spielplatz</h1>
          <p className="lead">Vier kurze Spiele zu jedem Kapitel. Jedes Spiel öffnet sich auf einer eigenen Seite. Deine Punkte werden gespeichert und zählen für die Bestenliste.</p>
        </div>
      </header>
      {!user && <p className="pill t-butter">Zum Spielen brauchst du ein kostenloses Konto, damit deine Punkte gespeichert werden. <Link href="/login?next=/spiele">Anmelden</Link></p>}
      {course.chapters.map((ch) => {
        const list = games.filter((g) => g.chapter === ch.number);
        if (!list.length) return null;
        return (
          <section key={ch.id} className="chapter-games">
            <h2>Kapitel {ch.number}: {ch.title}</h2>
            <div className="game-grid">
              {list.map((g) => (
                <Link key={g.id} href={`/spiele/${g.id}`} target="_blank" rel="noopener" className={`game-card t-${g.tone}`}>
                  <span className="game-emoji" aria-hidden>{g.emoji}</span>
                  <b>{g.title}</b>
                  <span>{g.blurb}</span>
                  <small>{g.skill}{user && progress.games[g.id] ? `, dein Rekord: ${progress.games[g.id]}` : ''}</small>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}
