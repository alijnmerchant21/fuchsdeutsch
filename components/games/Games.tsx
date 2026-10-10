'use client';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { GameDef } from '@/content/types';
import { norm, shuffle, sparkle } from '@/lib/fx';

// Four game engines. Each chapter feeds them its own words and sentences (see GameDef).
type Of<E extends GameDef['engine']> = Extract<GameDef, { engine: E }>;
export interface GameProps<E extends GameDef['engine']> { def: Of<E>; onEnd: (score: number) => void }

/* ---------- Sprint: 60 seconds, pick the right form ---------- */
export function Sprint({ def, onEnd }: GameProps<'sprint'>) {
  const deck = useMemo(() => shuffle(def.items), [def]);
  const [i, setI] = useState(0);
  const [time, setTime] = useState(60);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [flash, setFlash] = useState<{ pick: string; ok: boolean } | null>(null);
  const scoreRef = useRef(0); scoreRef.current = score;
  const card = deck[i % deck.length];
  const options = useMemo(() => shuffle([card.a, ...card.wrong]), [card]);

  useEffect(() => {
    const t = setInterval(() => setTime((s) => s - 1), 1000);
    return () => clearInterval(t);
  }, []);
  useEffect(() => { if (time <= 0) onEnd(scoreRef.current); }, [time, onEnd]);

  const pick = (o: string) => {
    if (flash) return;
    const ok = o === card.a;
    setFlash({ pick: o, ok });
    if (ok) { setScore((s) => s + 10 + Math.min(combo, 5) * 2); setCombo((c) => c + 1); sparkle(0.5, 0.5); }
    else { setCombo(0); setTime((s) => s - 3); }
    setTimeout(() => { setFlash(null); setI((n) => n + 1); }, ok ? 450 : 1100);
  };

  return (
    <div className="game-play">
      <div className="game-hud">
        <span className="stat">⏱ {Math.max(0, time)} s</span>
        <span className="stat">⭐ {score}</span>
        <span className={`stat ${combo >= 3 ? 'is-hot' : ''}`}>Serie ×{combo}</span>
      </div>
      <div className="timebar"><i style={{ width: `${Math.max(0, (time / 60) * 100)}%` }} /></div>
      <div className="big-card pop" key={i}>
        <small>{def.label}</small>
        <b>{card.q}</b>
        {card.sub && <span className="muted">{card.sub}</span>}
      </div>
      <div className="options game-options">
        {options.map((o) => (
          <button key={o} type="button" className={`option ${flash && o === card.a ? 'is-right' : ''} ${flash && flash.pick === o && !flash.ok ? 'is-wrong shake' : ''}`} onClick={() => pick(o)}>{o}</button>
        ))}
      </div>
      <p className="muted small center-text">Falsche Antwort: 3 Sekunden Abzug. Ab Serie 3 gibt es Bonuspunkte.</p>
    </div>
  );
}

/* ---------- Memory: find the pairs ---------- */
export function Memory({ def, onEnd }: GameProps<'memory'>) {
  const n = Math.min(8, def.pairs.length);
  const cards = useMemo(() => {
    const pairs = shuffle(def.pairs).slice(0, n);
    return shuffle(pairs.flatMap(([a, b], p) => [{ text: a, p, kind: 0 }, { text: b, p, kind: 1 }]));
  }, [def, n]);
  const [open, setOpen] = useState<number[]>([]);
  const [found, setFound] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const busy = useRef(false);

  const flip = (idx: number) => {
    if (busy.current || open.includes(idx) || found.includes(cards[idx].p)) return;
    const next = [...open, idx];
    setOpen(next);
    if (next.length === 2) {
      setMoves((m) => m + 1);
      busy.current = true;
      const [a, b] = next;
      const hit = cards[a].p === cards[b].p;
      setTimeout(() => {
        if (hit) {
          const f = [...found, cards[a].p]; setFound(f); sparkle(0.5, 0.5);
          if (f.length === n) setTimeout(() => onEnd(Math.max(20, 200 - (moves + 1 - n) * 10)), 600);
        }
        setOpen([]); busy.current = false;
      }, hit ? 500 : 950);
    }
  };

  return (
    <div className="game-play">
      <div className="game-hud"><span className="stat">Züge: {moves}</span><span className="stat">Paare: {found.length} / {n}</span></div>
      <div className="memory">
        {cards.map((c, idx) => {
          const up = open.includes(idx) || found.includes(c.p);
          return (
            <button key={idx} type="button" className={`mem ${up ? 'is-up' : ''} ${found.includes(c.p) ? 'is-found' : ''}`} onClick={() => flip(idx)} aria-label={up ? c.text : 'verdeckte Karte'}>
              <span className="mem-inner">
                <span className="mem-face mem-back" aria-hidden>🦊</span>
                <span className={`mem-face mem-front ${c.kind === 0 ? 't-sky' : 't-butter'}`}><small>{def.kinds[c.kind]}</small><b>{c.text}</b></span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- Satzbau: build sentences from parts ---------- */
export function Satzbau({ def, onEnd }: GameProps<'satzbau'>) {
  const rounds = useMemo(() => shuffle(def.sentences).slice(0, 6), [def]);
  const [r, setR] = useState(0);
  const [line, setLine] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [fails, setFails] = useState(0);
  const [state, setState] = useState<'idle' | 'right' | 'wrong'>('idle');
  const cur = rounds[r];
  const pool = useMemo(() => shuffle(cur.parts.map((w, i) => ({ w, i }))), [cur]);

  const add = (i: number) => {
    if (state !== 'idle') return;
    const next = [...line, i]; setLine(next);
    if (next.length === cur.parts.length) {
      const ok = norm(next.map((x) => cur.parts[x]).join(' ')) === norm(cur.parts.join(' '));
      if (ok) {
        const gained = fails === 0 ? 20 : 10; const total = score + gained;
        setScore(total); setState('right'); sparkle(0.5, 0.45);
        setTimeout(() => { if (r + 1 >= rounds.length) onEnd(total); else { setR(r + 1); setLine([]); setFails(0); setState('idle'); } }, 900);
      } else { setState('wrong'); setFails((f) => f + 1); setTimeout(() => { setLine([]); setState('idle'); }, 900); }
    }
  };

  return (
    <div className="game-play">
      <div className="game-hud"><span className="stat">Satz {r + 1} / {rounds.length}</span><span className="stat">⭐ {score}</span></div>
      <div className={`order-line big is-${state} ${state === 'wrong' ? 'shake' : ''}`}>
        {line.length === 0 && <span className="muted">Tippe die Teile in der richtigen Reihenfolge an.</span>}
        {line.map((i) => <button key={i} type="button" className="chip chip-in" onClick={() => state === 'idle' && setLine(line.filter((x) => x !== i))}>{cur.parts[i]}</button>)}
      </div>
      <div className="bank big" key={r}>
        {pool.map(({ w, i }) => <button key={i} type="button" className={`chip pop ${line.includes(i) ? 'is-used' : ''}`} disabled={line.includes(i)} onClick={() => add(i)}>{w}</button>)}
      </div>
      <p className="center-text">{fails > 0 ? <span className="hint-msg">Tipp: {cur.hint}</span> : <span className="muted small">Erster Versuch richtig: 20 Punkte.</span>}</p>
    </div>
  );
}

/* ---------- Wortregen: catch falling words in the right bucket ---------- */
export function Regen({ def, onEnd }: GameProps<'regen'>) {
  const deck = useMemo(() => shuffle(def.words), [def]);
  const [n, setN] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [flash, setFlash] = useState<{ b: number; ok: boolean } | null>(null);
  const [x] = useState(() => deck.map(() => 8 + Math.random() * 52));
  const scoreRef = useRef(0); scoreRef.current = score;
  const locked = useRef(false);
  const word = deck[n % deck.length];
  const duration = Math.max(2.4, 5.8 - n * 0.15);

  const lose = useCallback(() => {
    setLives((l) => { if (l - 1 <= 0) setTimeout(() => onEnd(scoreRef.current), 500); return l - 1; });
  }, [onEnd]);

  const step = (ok: boolean, b: number) => {
    if (locked.current) return;
    locked.current = true;
    setFlash({ b, ok });
    if (ok) { setScore((s) => s + 10); sparkle((b + 0.5) / 3, 0.8); } else lose();
    setTimeout(() => { setFlash(null); setN((v) => v + 1); locked.current = false; }, ok ? 300 : 900);
  };

  return (
    <div className="game-play">
      <div className="game-hud">
        <span className="stat">⭐ {score}</span>
        <span className="stat" aria-label={`${lives} Leben`}>{'🧡'.repeat(Math.max(0, lives))}{'🤍'.repeat(3 - Math.max(0, lives))}</span>
      </div>
      <div className="rain">
        {lives > 0 && !flash && (
          <span key={n} className="drop" style={{ left: `${x[n % x.length]}%`, animationDuration: `${duration}s` }} onAnimationEnd={() => step(false, word[1])}>{word[0]}</span>
        )}
        {flash && !flash.ok && <span className="rain-msg">{word[0]} → {def.buckets[word[1]]}</span>}
      </div>
      <div className="buckets rain-buckets">
        {def.buckets.map((b, bi) => (
          <button key={b} type="button" className={`bucket t-${['peach', 'mint', 'sky'][bi]} ${flash?.b === bi ? (flash.ok ? 'is-hit' : 'shake') : ''}`} onClick={() => step(word[1] === bi, bi)}>
            <span className="bucket-title">{b}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export function GameView({ def, onEnd }: { def: GameDef; onEnd: (score: number) => void }) {
  switch (def.engine) {
    case 'sprint': return <Sprint def={def} onEnd={onEnd} />;
    case 'memory': return <Memory def={def} onEnd={onEnd} />;
    case 'satzbau': return <Satzbau def={def} onEnd={onEnd} />;
    case 'regen': return <Regen def={def} onEnd={onEnd} />;
  }
}
