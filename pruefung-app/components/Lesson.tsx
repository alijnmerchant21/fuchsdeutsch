'use client';
/* Page frame from the B1-Trainer: back bar with pager, colored head card with step chips, strategy card. */
import Link from 'next/link';
import type { ReactNode } from 'react';
import { tips } from '@/lib/content';
import { safeHtml } from './Rich';
import { En, TIPS_EN } from '@/lib/lang';

export function LessonBar({ label, prev, next }: { label?: string; prev?: string | null; next?: string | null }) {
  return (
    <nav className="lessonbar">
      <Link className="back" href="/">Übersicht</Link>
      {label && <span className="dim">{label}</span>}
      {(prev !== undefined || next !== undefined) && (
        <span className="pager">
          {prev ? <Link className="pg" href={prev} aria-label="Zurück">‹</Link> : <button className="pg" disabled aria-label="Zurück">‹</button>}
          {next ? <Link className="pg" href={next} aria-label="Weiter">›</Link> : <button className="pg" disabled aria-label="Weiter">›</button>}
        </span>
      )}
    </nav>
  );
}

export function LessonHead({ hue = 'lilac', label, title, sub, en, done, steps, children }: {
  hue?: string; label?: ReactNode; title: string; sub?: ReactNode; en?: ReactNode; done?: boolean; steps?: string[]; children?: ReactNode;
}) {
  return (
    <header className={`card lessonhead hue-${hue}`}>
      {label && <p className="tlabel">{label}</p>}
      <h2><span className="hl">{title}</span>{done && <> <span className="donebadge">erledigt</span></>}</h2>
      {sub && <p className="tsub">{sub}</p>}
      {en && <En as="p" block>{en}</En>}
      {children}
      {steps && steps.length > 1 && (
        <ol className="steps">
          {steps.map((s, i) => (
            <li key={i}><a href={`#b${i}`} onClick={(e) => { e.preventDefault(); document.getElementById(`b${i}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>{s}</a></li>
          ))}
        </ol>
      )}
    </header>
  );
}

export function StratCard({ module, teil, extra, step, anchor }: { module: 'hoeren' | 'lesen'; teil: number; extra?: string[]; step?: number; anchor?: string }) {
  const t = tips[module]?.[String(teil)];
  if (!t) return null;
  return (
    <section className="card block stratcard" id={anchor} data-step={step}>
      <header className="bh"><span className="modchip">Strategie für {module === 'hoeren' ? 'Hören' : 'Lesen'} {t.name}</span><span className="mins">2 Min lesen</span></header>
      <p className="dim">{t.items} Aufgaben, {t.how}, {t.mins} Minuten in der Prüfung.</p>
      <ol className="stratlist">
        {(extra ?? []).map((x, i) => <li key={'x' + i} dangerouslySetInnerHTML={{ __html: safeHtml(x) }} />)}
        {t.tips.map((x, i) => (
          <li key={i}><span dangerouslySetInnerHTML={{ __html: x }} /><En block>{TIPS_EN[`${module}-${teil}`]?.[i]}</En></li>
        ))}
      </ol>
    </section>
  );
}

export const HUES = ['lilac', 'sky', 'peach', 'mint', 'rose', 'butter'];
export const hueOf = (seq: number) => HUES[(seq - 1) % HUES.length];
