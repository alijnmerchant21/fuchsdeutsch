'use client';
import Link from 'next/link';
import { Fox } from '@/components/Fox';
import { games } from '@/content/games';
import { useStore } from '@/lib/store';

export default function Spiele() {
  const { user, progress } = useStore();
  return (
    <main className="page">
      <header className="games-head">
        <Fox size={96} mood="wow" className="bob" />
        <div>
          <h1>Spielplatz</h1>
          <p className="lead">Kurze Spiele zum Üben. Jedes Spiel öffnet sich auf einer eigenen Seite und funktioniert auch ohne Kurs und ohne Konto.</p>
        </div>
      </header>
      <div className="game-grid">
        {games.map((g) => (
          <Link key={g.id} href={`/spiele/${g.id}`} target="_blank" rel="noopener" className={`game-card t-${g.tone}`}>
            <span className="game-emoji" aria-hidden>{g.emoji}</span>
            <b>{g.title}</b>
            <span>{g.blurb}</span>
            <small>Kapitel {g.chapter}, {g.skill}{user && progress.games[g.id] ? `, dein Rekord: ${progress.games[g.id]}` : ''}</small>
          </Link>
        ))}
      </div>
    </main>
  );
}
