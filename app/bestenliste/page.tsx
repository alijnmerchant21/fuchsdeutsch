'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Fox } from '@/components/Fox';
import { RequireUser } from '@/components/Guard';
import { games } from '@/content/games';
import { DEMO_MODE } from '@/lib/config';
import { useStore } from '@/lib/store';
import { supabase } from '@/lib/supabase';

interface Row { player: string; score: number; streak_days: number; is_me: boolean }

function Board() {
  const { user, progress } = useStore();
  const [tab, setTab] = useState<string>('xp');
  const [rows, setRows] = useState<Row[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let live = true;
    setRows(null); setError(false);
    const mine = tab === 'xp' ? progress.xp : progress.games[tab] || 0;
    const sb = supabase();
    if (!sb) {
      // Demo mode has no shared database, so the list can only show you.
      setRows(mine > 0 ? [{ player: user!.name.split(' ')[0], score: mine, streak_days: progress.streak.count, is_me: true }] : []);
      return;
    }
    void sb.rpc('leaderboard', { game: tab === 'xp' ? null : tab, max_rows: 50 }).then(({ data, error: err }) => {
      if (!live) return;
      if (err) { setError(true); setRows([]); } else setRows((data as Row[]) || []);
    });
    return () => { live = false; };
    // Reload when the tab changes or when your own score changes.
  }, [tab, progress.xp, progress.games, progress.streak.count, user]);

  const unit = tab === 'xp' ? 'XP' : 'Punkte';
  return (
    <main className="page">
      <header className="games-head">
        <Fox size={84} mood="proud" />
        <div>
          <h1>Bestenliste</h1>
          <p className="lead">Wer lernt am fleißigsten? Punkte gibt es für Abschnitte, Prüfungen und Spiele.</p>
        </div>
      </header>
      <div className="board-pick">
        <button type="button" className="choice" aria-pressed={tab === 'xp'} onClick={() => setTab('xp')}>Gesamt (XP)</button>
        <label className="sr-only" htmlFor="board-game">Spiel wählen</label>
        <select id="board-game" value={tab === 'xp' ? '' : tab} onChange={(e) => setTab(e.target.value || 'xp')}>
          <option value="">Rangliste für ein Spiel …</option>
          {[...new Set(games.map((g) => g.chapter))].map((c) => (
            <optgroup key={c} label={`Kapitel ${c}`}>
              {games.filter((g) => g.chapter === c).map((g) => <option key={g.id} value={g.id}>{g.title}</option>)}
            </optgroup>
          ))}
        </select>
      </div>
      <div className="card board">
        {rows === null && <p className="muted pad-s">Lade …</p>}
        {error && <p className="muted pad-s">Die Bestenliste ist noch nicht eingerichtet. Führe in Supabase die Datei supabase/002_profile_leaderboard.sql aus.</p>}
        {rows && !error && rows.length === 0 && (
          <p className="muted pad-s">Noch keine Einträge. {tab === 'xp' ? <Link href="/lernen">Starte den ersten Abschnitt</Link> : <Link href={`/spiele/${tab}`}>Spiel die erste Runde</Link>} und steh ganz oben.</p>
        )}
        {rows && rows.length > 0 && (
          <ol className="board-list">
            {rows.map((r, i) => (
              <li key={i} className={r.is_me ? 'is-me' : ''}>
                <span className={`rank rank-${i + 1}`}>{i + 1}</span>
                <span className="board-name">{r.player}{r.is_me && <em> (du)</em>}</span>
                {tab === 'xp' && r.streak_days > 0 && <span className="board-streak" title="Tage in Folge">🔥 {r.streak_days}</span>}
                <b className="board-score">{r.score} <small>{unit}</small></b>
              </li>
            ))}
          </ol>
        )}
      </div>
      {DEMO_MODE && <p className="muted small">Demo-Modus: Ohne Datenbank siehst du hier nur dich selbst.</p>}
      {progress.profile && !progress.profile.board && <p className="muted small">Du erscheinst nicht auf der Liste. Das kannst du in <Link href="/willkommen">deinem Profil</Link> ändern.</p>}
    </main>
  );
}

export default function Page() { return <RequireUser><Board /></RequireUser>; }
