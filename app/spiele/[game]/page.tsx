'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useCallback, useState } from 'react';
import { Fox } from '@/components/Fox';
import { RequireUser } from '@/components/Guard';
import { GameView } from '@/components/games/Games';
import { gameById } from '@/content/games';
import { party } from '@/lib/fx';
import { useStore } from '@/lib/store';

function GamePage() {
  const { game } = useParams<{ game: string }>();
  const { progress, recordGame } = useStore();
  const meta = gameById(game);
  const [phase, setPhase] = useState<'intro' | 'play' | 'end'>('intro');
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(0);
  const [before, setBefore] = useState(0);

  const end = useCallback((s: number) => {
    if (!meta) return;
    setScore(s); setPhase('end');
    recordGame(meta.id, s, Math.min(30, Math.round(s / 5)));
    if (s > 0) party();
  }, [meta, recordGame]);

  if (!meta) return <main className="page center"><Fox size={90} mood="wow" /><h1>Dieses Spiel gibt es nicht.</h1><Link className="btn" href="/spiele">Zum Spielplatz</Link></main>;
  const record = progress.games[meta.id] || 0;
  const isRecord = score > before && score > 0;

  return (
    <main className={`page game t-${meta.tone}`}>
      <div className="game-top">
        <Link href="/spiele" className="back" aria-label="Zum Spielplatz">←</Link>
        <h1><span aria-hidden>{meta.emoji}</span> {meta.title}</h1>
        <span className="stat" title="Dein Rekord">🏆 {record}</span>
      </div>
      {phase === 'intro' && (
        <div className="game-intro card pop">
          <Fox size={110} mood="happy" className="bob" />
          <p className="muted small">Kapitel {meta.chapter}, {meta.skill}</p>
          <p className="lead">{meta.rules}</p>
          <button type="button" className="btn btn-lg" onClick={() => { setBefore(record); setPhase('play'); }}>Los geht’s</button>
        </div>
      )}
      {phase === 'play' && <GameView key={round} def={meta} onEnd={end} />}
      {phase === 'end' && (
        <div className="game-intro card pop">
          <Fox size={110} mood={isRecord ? 'proud' : 'happy'} className="bob" />
          <h2>{isRecord ? 'Neuer Rekord!' : 'Runde vorbei'}</h2>
          <p className="result-pct">{score} Punkte</p>
          <p className="muted">+{Math.min(30, Math.round(score / 5))} XP für deinen Kurs</p>
          <div className="hero-cta">
            <button type="button" className="btn btn-lg" onClick={() => { setBefore(record); setRound((r) => r + 1); setPhase('play'); }}>Noch einmal</button>
            <Link href="/bestenliste" className="btn btn-lg btn-ghost">Bestenliste</Link>
            <Link href="/spiele" className="btn btn-lg btn-ghost">Anderes Spiel</Link>
          </div>
        </div>
      )}
    </main>
  );
}

export default function Page() { return <RequireUser><GamePage /></RequireUser>; }
