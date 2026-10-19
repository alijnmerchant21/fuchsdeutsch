'use client';
/* Games leaderboard: this week or all time, all games or one game. First names only. */
import { useEffect, useState } from 'react';
import { Fox } from '@/components/Fox';
import { Guard } from '@/components/Guard';
import { Flame } from '@/components/StreakBar';
import { DEMO_MODE } from '@/lib/config';
import { GAMES } from '@/lib/games';
import { En } from '@/lib/lang';
import { leaderboard, type Row } from '@/lib/progress';
import { useStore } from '@/lib/store';

function Board() {
  const { user, plays } = useStore();
  const [scope, setScope] = useState<'week' | 'all'>('week');
  const [game, setGame] = useState<string | null>(null);
  const [rows, setRows] = useState<Row[] | null>(null);
  const [err, setErr] = useState<string | null>(null);
  useEffect(() => {
    setRows(null); setErr(null);
    void leaderboard(scope, game, user!.name.split(' ')[0], plays).then(setRows).catch((e: Error) => setErr(e.message));
  }, [scope, game, user, plays]);
  const top = rows?.slice(0, 3) ?? [];
  const rest = rows?.slice(3) ?? [];
  const order = [1, 0, 2].filter((i) => top[i]);
  const live = GAMES.filter((g) => g.live);

  return (
    <div className="lb">
      <div className="lb-head">
        <div>
          <p className="lp-eyebrow">Fuchsdeutsch Spiele</p>
          <h1 className="lib-h1">Bestenliste</h1>
          <p className="lib-lead">Wer hat die meisten XP gesammelt? Nur Vornamen, wie in Fuchsdeutsch.</p>
          <En as="p" block>Who has collected the most XP? First names only, like in Fuchsdeutsch.</En>
        </div>
        <Fox size={88} mood="proud" className="lib-fox" />
      </div>

      <div className="lb-tools">
        <div className="seg2" role="tablist">
          <button role="tab" aria-selected={scope === 'week'} onClick={() => setScope('week')}>Diese Woche</button>
          <button role="tab" aria-selected={scope === 'all'} onClick={() => setScope('all')}>Gesamt</button>
        </div>
        <div className="seg2" role="tablist">
          <button role="tab" aria-selected={game === null} onClick={() => setGame(null)}>Alle Spiele</button>
          {live.map((g) => <button key={g.id} role="tab" aria-selected={game === g.id} onClick={() => setGame(g.id)}>{g.title}</button>)}
        </div>
      </div>
      {DEMO_MODE && <p className="small dim">Demo-Modus: Die anderen Namen sind Beispiele. Mit Supabase siehst du echte Spieler.</p>}

      {err && <div className="card formcard"><p className="msg-err">Die Bestenliste lädt gerade nicht: {err}</p></div>}
      {!rows && !err && <p className="dim">Lädt …</p>}
      {rows && rows.length === 0 && (
        <div className="card formcard lp-center"><Fox size={64} mood="sleepy" /><p>Noch niemand hat XP gesammelt. Sei die oder der Erste!</p></div>
      )}

      {rows && rows.length > 0 && (
        <>
          <div className="podium">
            {order.map((i) => {
              const r = top[i];
              return (
                <div key={i} className={`pod pod-${i + 1} ${r.is_me ? 'me' : ''}`} style={{ animationDelay: `${[200, 0, 350][i]}ms` }}>
                  <span className="pod-medal">{['🥇', '🥈', '🥉'][i]}</span>
                  <span className="pod-av">{r.player[0]?.toUpperCase()}</span>
                  <b>{r.player}{r.is_me && ' (du)'}</b>
                  <span className="pod-xp">{r.score} XP</span>
                  <div className="pod-block"><span>{i + 1}</span></div>
                </div>
              );
            })}
          </div>
          {rest.length > 0 && (
            <ol className="card lb-list" start={4}>
              {rest.map((r, k) => (
                <li key={k} className={r.is_me ? 'me' : ''} style={{ animationDelay: `${k * 50}ms` }}>
                  <span className="lb-pos">{k + 4}</span>
                  <span className="pod-av sm">{r.player[0]?.toUpperCase()}</span>
                  <b>{r.player}{r.is_me && ' (du)'}</b>
                  <span className="lb-streak">{r.streak_days > 0 && <><Flame on size={18} />{r.streak_days}</>}</span>
                  <span className="lb-xp">{r.score} XP</span>
                </li>
              ))}
            </ol>
          )}
          {!rows.some((r) => r.is_me) && <p className="small dim lp-center">Du bist noch nicht dabei. Spiel eine Runde und sammle XP!</p>}
        </>
      )}
    </div>
  );
}

export default function Page() { return <Guard><Board /></Guard>; }
