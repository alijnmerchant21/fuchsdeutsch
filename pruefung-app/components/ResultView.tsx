'use client';
/* Result like the B1-Trainer diagnosis: big score per module, bars per Teil, sure/guessed matrix,
   verdict, most common traps, then every answer with the solution. */
import { useEffect, useState } from 'react';
import { PASS } from '@/lib/config';
import { modName, tips, trapLabel } from '@/lib/content';
import { resolveAttempt } from '@/lib/resolve';
import { modulePoints, writingPoints } from '@/lib/score';
import type { Attempt, Block, ExamSet, TestDef } from '@/lib/types';
import { SetCard } from './SetCard';
import { En } from '@/lib/lang';

const teilName = (k: string) => {
  const [m, t] = k.split('-');
  return tips[m as 'hoeren' | 'lesen']?.[t]?.name ?? `Teil ${t}`;
};

export function ResultView({ attempt, blocks, showReview = true, children }: { attempt: Attempt; blocks: Block[]; showReview?: boolean; children?: React.ReactNode }) {
  const [ctx, setCtx] = useState<{ test: TestDef; sets: Record<string, ExamSet> } | null>(null);
  useEffect(() => { void resolveAttempt(attempt, blocks).then(setCtx); }, [attempt, blocks]);

  // matrix and traps from the items of this attempt
  const m = { ss: 0, sw: 0, gs: 0, gw: 0, x: 0 };
  const trapCount: Record<string, { n: number; module: string }> = {};
  let wrong = 0;
  if (ctx) for (const sec of ctx.test.sections) for (const id of sec.sets) {
    const s = ctx.sets[id]; if (!s || s.module === 'schreiben') continue;
    for (const g of s.groups) for (const it of g.items) {
      const ok = attempt.answers[id]?.[String(it.n)] === it.a;
      const c = attempt.conf?.[id]?.[String(it.n)];
      if (c === 's') ok ? m.ss++ : m.sw++; else if (c === 'g') ok ? m.gs++ : m.gw++; else m.x++;
      if (!ok) { wrong++; if (it.trap) { trapCount[it.trap] ??= { n: 0, module: s.module }; trapCount[it.trap].n++; } }
    }
  }
  const hasConf = m.ss + m.sw + m.gs + m.gw > 0;
  const verdict = !hasConf || !wrong ? null
    : m.sw >= Math.max(3, wrong * 0.4) ? { de: `Du warst ${m.sw}× sicher und trotzdem falsch.`, rest: 'Du verstehst viel, aber die Fallen erwischen dich. Die gute Nachricht: Fallen lernt man in zwei bis drei Wochen.', en: `Confident and wrong ${m.sw} times. Traps, not vocabulary, are the main problem. That is the fastest kind to fix.` }
      : m.gw + m.x >= wrong * 0.6 ? { de: 'Die meisten Fehler waren geraten.', rest: 'Du verlierst eher den Faden. Deine Blöcke bringen mehr kurze Texte in diesen Teilen.', en: 'Most mistakes were guesses, so stamina and vocabulary in these Teile come first.' }
        : { de: 'Gemischtes Bild:', rest: 'ein Teil Fallen, ein Teil Wortschatz.', en: 'A mix of traps and vocabulary gaps.' };

  const teile = Object.entries(attempt.scores).sort(([a], [b]) => a.localeCompare(b));
  const weakest = [...teile].filter(([, v]) => v.total).sort(([, a], [, b]) => a.right / a.total - b.right / b.total).slice(0, 2);
  const wp = writingPoints(attempt.feedback);
  const hasWriting = Object.keys(attempt.writing ?? {}).length > 0;

  return (
    <>
      <section className="card block">
        <header className="bh"><span className="modchip">Dein Ergebnis</span><span className="mins">Bestehen ab {PASS} pro Modul</span></header>
        <En as="p" block>Your result. You pass with {PASS} of 100 points in each module. Below every answer you see the solution and the sentence that proves it.</En>
        {(['hoeren', 'lesen'] as const).map((mod) => {
          const pts = modulePoints(attempt.scores, mod);
          if (pts === null) return null;
          const rows = teile.filter(([k]) => k.startsWith(mod + '-'));
          const r = rows.reduce((a, [, v]) => a + v.right, 0), n = rows.reduce((a, [, v]) => a + v.total, 0);
          return (
            <div key={mod}>
              <h4>{modName(mod)}</h4>
              <div className={`bigscore ${pts >= PASS ? 'ok' : 'low'}`}><b>{pts}</b><span>/ 100</span><small>{r} von {n} richtig</small></div>
              <div className="bars">{rows.map(([k, v]) => {
                const p = (100 * v.right) / v.total;
                return <div className="bar" key={k}><span>{teilName(k)}</span><div><i className={p >= PASS ? 'ok' : 'low'} style={{ width: `${p}%` }} /></div><b>{v.right}/{v.total}</b></div>;
              })}</div>
            </div>
          );
        })}
        {hasWriting && (
          <div>
            <h4>Schreiben</h4>
            <div className={`bigscore ${wp === null ? '' : wp >= PASS ? 'ok' : 'low'}`} style={wp === null ? { background: 'var(--card2)' } : undefined}>
              <b>{wp ?? '…'}</b><span>{wp === null ? '' : '/ 100'}</span><small>{wp === null ? 'Wird von uns korrigiert' : 'korrigiert'}</small>
            </div>
          </div>
        )}
        {hasConf && (
          <>
            <div className="matrix">
              <div className="mx ok"><b>{m.ss}</b>sicher + richtig</div><div className="mx bad"><b>{m.sw}</b>sicher + falsch</div>
              <div className="mx"><b>{m.gs}</b>geraten + richtig</div><div className="mx"><b>{m.gw}</b>geraten + falsch</div>
            </div>
            {m.x > 0 && <p className="en small">{m.x}× ohne sicher/geraten.</p>}
          </>
        )}
        {verdict && <p className="verdict"><b>{verdict.de}</b> {verdict.rest}<br /><En>{verdict.en}</En></p>}
        {hasConf && <En as="p" block>Sure + wrong means a trap caught you. Guessed + wrong usually means vocabulary or losing the thread.</En>}
        {weakest.length > 0 && <p><b>Schwächste Teile:</b> {weakest.map(([k]) => `${modName(k.split('-')[0])} ${teilName(k)}`).join(' und ')}.</p>}
        {Object.keys(trapCount).length > 0 && (
          <>
            <p><b>Deine häufigsten Fallen:</b></p>
            <ul className="trapcount">{Object.entries(trapCount).sort((a, b) => b[1].n - a[1].n).map(([k, v]) => {
              const t = trapLabel(v.module, k);
              return t ? <li key={k}><span className="traptag">{t[0]}</span> {v.n}× <En>{t[1]}</En></li> : null;
            })}</ul>
          </>
        )}
        {children}
      </section>

      {showReview && ctx && ctx.test.sections.flatMap((s) => s.sets).map((id, i) => ctx.sets[id] && (
        <SetCard key={id} set={ctx.sets[id]} mode="review" step={i + 1}
          state={{ ans: attempt.answers[id] ?? {}, conf: attempt.conf?.[id] ?? {} }}
          writing={attempt.writing} feedback={attempt.feedback} />
      ))}
    </>
  );
}
