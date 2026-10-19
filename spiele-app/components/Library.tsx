'use client';
/* The signed-in home: all games as cards, filtered by level. */
import { useEffect, useMemo, useState } from 'react';
import { GAMES, LEVELS, type Level } from '@/lib/games';
import { En } from '@/lib/lang';
import { useStore } from '@/lib/store';
import { Fox } from './Fox';
import { GameCard } from './GameCard';
import { StreakBar } from './StreakBar';

type Filter = 'all' | Level;
const LS = 'fds:level';

export function Library() {
  const { user } = useStore();
  const [filter, setFilter] = useState<Filter>('all');
  useEffect(() => {
    try { const v = localStorage.getItem(LS); if (v === 'all' || LEVELS.some((l) => l.id === v)) setFilter(v as Filter); } catch { /* ignore */ }
  }, []);
  const pick = (f: Filter) => { setFilter(f); try { localStorage.setItem(LS, f); } catch { /* ignore */ } };

  const shown = useMemo(() => {
    const list = filter === 'all' ? GAMES : GAMES.filter((g) => g.level === filter);
    const order = LEVELS.map((l) => l.id);
    return [...list].sort((a, b) => Number(!!b.live) - Number(!!a.live) || order.indexOf(a.level) - order.indexOf(b.level));
  }, [filter]);
  const liveN = shown.filter((g) => g.live).length;
  const first = user?.name?.split(' ')[0];

  return (
    <div className="lib">
      <section className="lib-head">
        <div>
          <p className="lp-eyebrow">Fuchsdeutsch Spiele</p>
          <h1 className="lib-h1">{first ? `Hallo ${first}!` : 'Hallo!'} <span className="lp-soft">Was spielen wir heute?</span></h1>
          <p className="lib-lead">Wähl dein Niveau und such dir ein Spiel aus. Jedes Spiel übt ein Thema aus dem Alltag.</p>
          <En as="p" block>Pick your level and choose a game. Every game practices one everyday topic.</En>
        </div>
        <Fox size={96} mood="happy" className="lib-fox" />
      </section>

      <StreakBar />

      <div className="lvlbar" role="tablist" aria-label="Niveau">
        {(['all', ...LEVELS.map((l) => l.id)] as Filter[]).map((id) => {
          const L = LEVELS.find((l) => l.id === id);
          const n = id === 'all' ? GAMES.length : GAMES.filter((g) => g.level === id).length;
          return (
            <button key={id} type="button" role="tab" aria-selected={filter === id} className="lvl" onClick={() => pick(id)}>
              <b>{L ? L.name : 'Alle'}</b>
              <span>{L ? L.de : 'Alle Niveaus'}</span>
              <i>{n}</i>
            </button>
          );
        })}
      </div>

      <p className="lib-count small dim">
        {shown.length} {shown.length === 1 ? 'Spiel' : 'Spiele'} · {liveN ? `${liveN} spielbar` : 'noch keins spielbar'}, {shown.length - liveN} {shown.length - liveN === 1 ? 'kommt' : 'kommen'} bald
        {liveN === 0 && <En> · Nothing playable at this level yet. Try B1.</En>}
      </p>

      <div className="ggrid" key={filter}>
        {shown.map((g, i) => <GameCard key={g.id} g={g} mode="app" i={i} />)}
      </div>
    </div>
  );
}
