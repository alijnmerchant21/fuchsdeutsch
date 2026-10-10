'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useCallback, useEffect, useState, type ComponentType } from 'react';
import { Fox } from '@/components/Fox';
import { PartizipSprint, Satzbau, Wortregen, ZeitMemory, type GameProps } from '@/components/games/Games';
import { games } from '@/content/games';
import { party } from '@/lib/fx';
import { useStore } from '@/lib/store';

const registry: Record<string, ComponentType<GameProps>> = {
  'partizip-sprint': PartizipSprint,
  'zeit-memory': ZeitMemory,
  satzbau: Satzbau,
  zeitstrahl: Wortregen,
};
const rules: Record<string, string> = {
  'partizip-sprint': 'Du siehst ein Verb. Tippe auf das richtige Partizip II. Du hast 60 Sekunden.',
  'zeit-memory': 'Dreh zwei Karten um. Ein Paar ist ein Infinitiv mit seinem Präteritum, zum Beispiel gehen und ging.',
  satzbau: 'Tippe die Satzteile in der richtigen Reihenfolge an. Achte auf Dativ und Akkusativ.',
  zeitstrahl: 'Ein Zeitwort fällt herunter. Tippe auf die richtige Gruppe, bevor es unten ankommt. Du hast drei Leben.',
};

export default function GamePage() {
  const { game } = useParams<{ game: string }>();
  const { user, progress, recordGame } = useStore();
  const meta = games.find((g) => g.id === game);
  const Game = registry[game];
  const [phase, setPhase] = useState<'intro' | 'play' | 'end'>('intro');
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(0);
  const [best, setBest] = useState(0);

  useEffect(() => {
    if (!meta) return;
    try { setBest(Number(localStorage.getItem(`fd:best:${meta.id}`)) || 0); } catch { /* ignore */ }
  }, [meta]);

  const end = useCallback((s: number) => {
    if (!meta) return;
    setScore(s); setPhase('end');
    setBest((b) => { const nb = Math.max(b, s); try { localStorage.setItem(`fd:best:${meta.id}`, String(nb)); } catch { /* ignore */ } return nb; });
    if (user) recordGame(meta.id, s, Math.min(30, Math.round(s / 5)));
    if (s > 0) party();
  }, [meta, user, recordGame]);

  if (!meta || !Game) return <main className="page center"><Fox size={90} mood="wow" /><h1>Dieses Spiel gibt es nicht.</h1><Link className="btn" href="/spiele">Zum Spielplatz</Link></main>;
  const record = Math.max(best, user ? progress.games[meta.id] || 0 : 0);

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
          <p className="lead">{rules[meta.id]}</p>
          <button type="button" className="btn btn-lg" onClick={() => setPhase('play')}>Los geht’s</button>
          {!user && <p className="muted small">Ohne Anmeldung bleibt dein Rekord nur in diesem Browser. <Link href="/login">Anmelden</Link></p>}
        </div>
      )}
      {phase === 'play' && <Game key={round} onEnd={end} />}
      {phase === 'end' && (
        <div className="game-intro card pop">
          <Fox size={110} mood={score >= record && score > 0 ? 'proud' : 'happy'} className="bob" />
          <h2>{score >= record && score > 0 ? 'Neuer Rekord!' : 'Runde vorbei'}</h2>
          <p className="result-pct">{score} Punkte</p>
          {user && <p className="muted">+{Math.min(30, Math.round(score / 5))} XP für deinen Kurs</p>}
          <div className="hero-cta">
            <button type="button" className="btn btn-lg" onClick={() => { setRound((r) => r + 1); setPhase('play'); }}>Noch einmal</button>
            <Link href="/spiele" className="btn btn-lg btn-ghost">Anderes Spiel</Link>
          </div>
        </div>
      )}
    </main>
  );
}
