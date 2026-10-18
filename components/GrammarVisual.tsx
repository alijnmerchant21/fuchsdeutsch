'use client';
import type { Visual } from '@/content/visuals';
import type { ReactNode } from 'react';
import { De, En } from './Hint';

const C = { sky: '#cfe6fb', mint: '#cdeedb', peach: '#ffd9c2', lilac: '#e2dbfa', butter: '#fdf0b5', rose: '#fbd5e0', ink: '#1c1d1f', line: '#d1d7dc', muted: '#5b5d63' };

function Positions({ v }: { v: Extract<Visual, { kind: 'positions' }> }) {
  // Number the slots only for simple verb-second sentences. Elsewhere only the verb is labelled.
  const numbered = v.rows.every((r) => r.verb.length === 1 && r.verb[0] <= 1);
  return (
    <div className="gv gv-pos">
      <p className="gv-title"><De en={v.titleEn}>{v.title}</De></p>
      {v.rows.map((r, ri) => {
        const bracket = r.verb.length > 1;
        return (
          <div key={ri} className="gv-row">
            <span className="gv-label"><De en={r.labelEn}>{r.label}</De></span>
            <div className={`gv-parts ${bracket ? 'has-bracket' : ''}`}>
              {r.parts.map((p, i) => (
                <span key={i} className={`gv-part ${r.verb.includes(i) ? 'is-verb' : ''}`}>
                  <small>{r.verb.includes(i) ? 'Verb' : numbered ? String(i + 1) : '\u00a0'}</small>
                  {p}
                </span>
              ))}
              {bracket && <span className="gv-bracket" aria-hidden />}
            </div>
          </div>
        );
      })}
    </div>
  );
}

const GENDERS = [
  { a: 'der', de: 'maskulin', en: 'masculine', c: C.sky },
  { a: 'das', de: 'neutral', en: 'neuter', c: C.mint },
  { a: 'die', de: 'feminin', en: 'feminine', c: C.rose },
  { a: 'die', de: 'Plural', en: 'plural', c: C.lilac },
];

function Articles({ v }: { v: Extract<Visual, { kind: 'articles' }> }) {
  return (
    <div className="gv">
      <p className="gv-title">
        <De en={v.titleEn || (v.caseLabel ? `Same colors, ${v.caseLabel === 'Dativ' ? 'dative' : 'accusative'} forms` : 'Every noun has a gender. Learn the color with the word.')}>
          {v.title || (v.caseLabel ? `Dieselben Farben im ${v.caseLabel}` : 'Jedes Nomen hat ein Genus. Lern die Farbe mit dem Wort.')}
        </De>
      </p>
      <div className="gv-cards">
        {GENDERS.map((g, i) => (
          <div key={i} className="gv-card" style={{ background: g.c }}>
            <small><De en={g.en} inline>{g.de}</De></small>
            <b>{v.examples[i]}</b>
          </div>
        ))}
      </div>
    </div>
  );
}

function Clock() {
  const r = 80;
  const at = (h: number, rad: number) => [100 + rad * Math.sin((h / 12) * 2 * Math.PI), 100 - rad * Math.cos((h / 12) * 2 * Math.PI)];
  const wedge = (from: number, to: number, fill: string) => {
    const [x1, y1] = at(from, r); const [x2, y2] = at(to, r);
    return <path d={`M100 100 L${x1} ${y1} A${r} ${r} 0 0 1 ${x2} ${y2} Z`} fill={fill} />;
  };
  const labels: [number, string, string][] = [[0, 'Uhr', 'o’clock'], [3, 'Viertel nach', 'quarter past'], [6, 'halb', 'half to'], [9, 'Viertel vor', 'quarter to']];
  return (
    <div className="gv gv-split">
      <svg viewBox="0 0 200 200" width="190" height="190" role="img" aria-label="Uhr mit Viertel nach, halb und Viertel vor">
        <circle cx="100" cy="100" r={r} fill="#fff" stroke={C.line} strokeWidth="2" />
        {wedge(0, 3, C.mint)}{wedge(3, 6, C.butter)}{wedge(6, 9, C.peach)}{wedge(9, 12, C.lilac)}
        {[...Array(12)].map((_, i) => { const [x, y] = at(i, 66); return <text key={i} x={x} y={y + 4} textAnchor="middle" fontSize="11" fontWeight="700" fill={C.ink}>{i || 12}</text>; })}
        <line x1="100" y1="100" x2="100" y2="40" stroke={C.ink} strokeWidth="3" strokeLinecap="round" />
        <line x1="100" y1="100" x2="135" y2="100" stroke={C.ink} strokeWidth="4" strokeLinecap="round" />
        <circle cx="100" cy="100" r="4" fill={C.ink} />
      </svg>
      <ul className="gv-legend">
        {labels.map(([h, de, en], i) => <li key={h}><i style={{ background: [C.mint, C.butter, C.peach, C.lilac][i] }} /><De en={en}>{de}</De></li>)}
        <li className="gv-note"><De en="halb acht = 7:30 (half way to eight)">halb acht = 7:30</De></li>
      </ul>
    </div>
  );
}

const PLACES: { de: string; en: string; draw: (box: ReactNode) => ReactNode }[] = [
  { de: 'in', en: 'in', draw: (b) => <>{b}<circle cx="40" cy="44" r="7" fill={C.peach} stroke={C.ink} /></> },
  { de: 'auf', en: 'on', draw: (b) => <>{b}<circle cx="40" cy="23" r="7" fill={C.peach} stroke={C.ink} /></> },
  { de: 'unter', en: 'under', draw: (b) => <>{b}<circle cx="40" cy="70" r="7" fill={C.peach} stroke={C.ink} /></> },
  { de: 'über', en: 'above', draw: (b) => <>{b}<circle cx="40" cy="12" r="7" fill={C.peach} stroke={C.ink} /></> },
  { de: 'neben', en: 'next to', draw: (b) => <>{b}<circle cx="70" cy="50" r="7" fill={C.peach} stroke={C.ink} /></> },
  { de: 'vor', en: 'in front of', draw: (b) => <>{b}<circle cx="50" cy="60" r="9" fill={C.peach} stroke={C.ink} /></> },
  { de: 'hinter', en: 'behind', draw: (b) => <><circle cx="52" cy="28" r="6" fill={C.peach} stroke={C.ink} />{b}</> },
];

function Places() {
  const box = <rect x="22" y="30" width="36" height="32" rx="4" fill={C.sky} stroke={C.ink} strokeWidth="1.5" />;
  return (
    <div className="gv">
      <p className="gv-title"><De en="Where is the ball? Prepositions with the dative">Wo ist der Ball? Präpositionen mit Dativ</De></p>
      <div className="gv-places">
        {PLACES.map((p) => (
          <figure key={p.de}>
            <svg viewBox="0 0 80 80" width="80" height="80" role="img" aria-label={p.de}>{p.draw(box)}</svg>
            <figcaption><b>{p.de}</b><En>{p.en}</En></figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

function WoWohin() {
  return (
    <div className="gv">
      <div className="gv-two">
        <figure>
          <svg viewBox="0 0 140 90" width="140" height="90" role="img" aria-label="Wo? Ein Punkt im Zimmer">
            <rect x="20" y="10" width="100" height="70" rx="6" fill={C.mint} stroke={C.ink} strokeWidth="1.5" />
            <circle cx="70" cy="45" r="9" fill={C.peach} stroke={C.ink} />
          </svg>
          <figcaption><b>Wo?</b> → Dativ<br /><span>Ich bin <b>im</b> Wohnzimmer.</span><En>Where? Staying in one place: dative</En></figcaption>
        </figure>
        <figure>
          <svg viewBox="0 0 140 90" width="140" height="90" role="img" aria-label="Wohin? Ein Pfeil ins Zimmer">
            <rect x="50" y="10" width="80" height="70" rx="6" fill={C.lilac} stroke={C.ink} strokeWidth="1.5" />
            <line x1="6" y1="45" x2="84" y2="45" stroke={C.ink} strokeWidth="3" strokeLinecap="round" />
            <path d="M76 36 L88 45 L76 54" fill="none" stroke={C.ink} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <figcaption><b>Wohin?</b> → Akkusativ<br /><span>Ich gehe <b>ins</b> Wohnzimmer.</span><En>Where to? Moving somewhere: accusative</En></figcaption>
        </figure>
      </div>
    </div>
  );
}

function Seasons() {
  const s = [
    { de: 'der Frühling', en: 'spring', m: 'März, April, Mai', c: C.mint },
    { de: 'der Sommer', en: 'summer', m: 'Juni, Juli, August', c: C.butter },
    { de: 'der Herbst', en: 'autumn', m: 'September, Oktober, November', c: C.peach },
    { de: 'der Winter', en: 'winter', m: 'Dezember, Januar, Februar', c: C.sky },
  ];
  return (
    <div className="gv">
      <div className="gv-cards">
        {s.map((x) => <div key={x.de} className="gv-card" style={{ background: x.c }}><b><De en={x.en}>{x.de}</De></b><small>{x.m}</small></div>)}
      </div>
    </div>
  );
}

function Compass() {
  const pts: [string, string, string, number, number][] = [
    ['Norden', 'north', 'Hamburg', 100, 22], ['Osten', 'east', 'Dresden', 176, 104], ['Süden', 'south', 'München', 100, 186], ['Westen', 'west', 'Köln', 24, 104],
  ];
  return (
    <div className="gv gv-split">
      <svg viewBox="0 0 200 200" width="190" height="190" role="img" aria-label="Kompass mit Norden, Osten, Süden und Westen">
        <circle cx="100" cy="100" r="62" fill={C.sky} stroke={C.line} strokeWidth="2" />
        <path d="M100 48 L110 100 L100 152 L90 100 Z" fill="#fff" stroke={C.ink} strokeWidth="1.5" />
        <path d="M100 48 L110 100 L90 100 Z" fill={C.peach} stroke={C.ink} strokeWidth="1.5" />
        {pts.map(([de, , , x, y]) => <text key={de} x={x} y={y} textAnchor="middle" fontSize="13" fontWeight="800" fill={C.ink}>{de[0]}</text>)}
      </svg>
      <ul className="gv-legend">
        {pts.map(([de, en, city]) => <li key={de}><b>im {de}</b> <span className="muted">· {city}</span><En>{`in the ${en}`}</En></li>)}
      </ul>
    </div>
  );
}

const ROUTES: { de: string; en: string; path: string; place: ReactNode }[] = [
  { de: 'durch den Park', en: 'through the park', place: <><circle cx="60" cy="40" r="26" fill={C.mint} /><circle cx="48" cy="34" r="6" fill="#8fd1ad" /><circle cx="70" cy="46" r="7" fill="#8fd1ad" /></>, path: 'M8 40 L112 40' },
  { de: 'über die Brücke', en: 'over the bridge', place: <><rect x="0" y="48" width="120" height="22" fill={C.sky} /><path d="M30 48 Q60 22 90 48" fill="none" stroke={C.ink} strokeWidth="2" /></>, path: 'M8 46 L30 46 Q60 20 90 46 L112 46' },
  { de: 'an der Kirche vorbei', en: 'past the church', place: <><rect x="48" y="16" width="24" height="26" fill={C.lilac} stroke={C.ink} /><path d="M48 16 L60 4 L72 16 Z" fill={C.lilac} stroke={C.ink} /></>, path: 'M8 56 L112 56' },
  { de: 'den Fluss entlang', en: 'along the river', place: <path d="M0 52 Q30 40 60 52 T120 52 L120 70 L0 70 Z" fill={C.sky} />, path: 'M8 38 Q34 28 60 38 T112 38' },
  { de: 'um den Platz herum', en: 'around the square', place: <circle cx="60" cy="40" r="18" fill={C.butter} stroke={C.ink} />, path: 'M60 12 A28 28 0 1 1 59.9 12' },
  { de: 'gegenüber vom Kino', en: 'opposite the cinema', place: <><rect x="10" y="50" width="40" height="20" fill={C.peach} stroke={C.ink} /><rect x="70" y="8" width="40" height="20" fill={C.lilac} stroke={C.ink} /></>, path: 'M30 46 L90 32' },
];

function Routes() {
  return (
    <div className="gv">
      <p className="gv-title"><De en="Describing a route">Wege beschreiben</De></p>
      <div className="gv-places">
        {ROUTES.map((r) => (
          <figure key={r.de} style={{ minWidth: 120 }}>
            <svg viewBox="0 0 120 72" width="120" height="72" role="img" aria-label={r.de}>
              {r.place}
              <path d={r.path} fill="none" stroke={C.ink} strokeWidth="2.5" strokeDasharray="5 4" strokeLinecap="round" />
            </svg>
            <figcaption><b>{r.de}</b><En>{r.en}</En></figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export function GrammarVisual({ v }: { v: Visual }) {
  switch (v.kind) {
    case 'positions': return <Positions v={v} />;
    case 'articles': return <Articles v={v} />;
    case 'clock': return <Clock />;
    case 'places': return <Places />;
    case 'wowohin': return <WoWohin />;
    case 'seasons': return <Seasons />;
    case 'compass': return <Compass />;
    case 'routes': return <Routes />;
  }
}
