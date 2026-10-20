'use client';
/* Small charts for the control center: one hue per chart, thin bars with rounded tops,
   a hover label on every bar, and the numbers also written out as text. */
import type { ReactNode } from 'react';

export type Tone = 'mint' | 'sky' | 'lilac' | 'peach' | 'butter' | 'rose';

export function Kpi({ label, value, sub, tone = 'lilac', onClick }: { label: string; value: ReactNode; sub?: ReactNode; tone?: Tone; onClick?: () => void }) {
  const Tag = onClick ? 'button' : 'div';
  return (
    <Tag className={`ad-kpi t-${tone}`} onClick={onClick} type={onClick ? 'button' : undefined}>
      <span className="ad-kpi-label">{label}</span>
      <b className="ad-kpi-value">{value}</b>
      {sub && <span className="ad-kpi-sub">{sub}</span>}
    </Tag>
  );
}

/** Vertical bars over time or over chapters. `line` draws a reference line (for example the pass mark). */
export function Bars({ data, tone = 'lilac', max, height = 120, line, fmt = (v) => String(v), label }: {
  data: { key: string; label: string; value: number; tip?: string }[]; tone?: Tone; max?: number; height?: number;
  line?: { value: number; label: string }; fmt?: (v: number) => string; label: string;
}) {
  const top = Math.max(max ?? 0, ...data.map((d) => d.value), line?.value ?? 0, 1);
  const every = Math.ceil(data.length / 10);
  return (
    <figure className={`ad-bars t-${tone}`} aria-label={label}>
      <div className="ad-bars-plot" style={{ height }}>
        {line && <span className="ad-bars-line" style={{ bottom: `${(line.value / top) * 100}%` }}><i>{line.label}</i></span>}
        {data.map((d) => (
          <span key={d.key} className="ad-bar" data-tip={d.tip ?? `${d.label}: ${fmt(d.value)}`} tabIndex={0}>
            <span className={`ad-bar-fill ${line && d.value >= line.value ? 'is-pass' : ''}`} style={{ height: `${d.value > 0 ? Math.max(3, (d.value / top) * 100) : 0}%` }} />
          </span>
        ))}
      </div>
      <div className="ad-bars-axis">
        {data.map((d, i) => <span key={d.key}>{i % every === 0 ? d.label : ''}</span>)}
      </div>
    </figure>
  );
}

/** Horizontal bars with the value written at the end (levels, modules). */
export function HBars({ data, tone = 'mint', max, fmt = (v) => String(v) }: { data: { key: string; label: string; value: number }[]; tone?: Tone; max?: number; fmt?: (v: number) => string }) {
  const top = Math.max(max ?? 0, ...data.map((d) => d.value), 1);
  return (
    <div className={`ad-hbars t-${tone}`}>
      {data.map((d) => (
        <div key={d.key} className="ad-hbar">
          <span className="ad-hbar-label">{d.label}</span>
          <span className="ad-hbar-track"><span className="ad-hbar-fill" style={{ width: `${(d.value / top) * 100}%` }} /></span>
          <b>{fmt(d.value)}</b>
        </div>
      ))}
    </div>
  );
}

/** A ring meter for one share (0..1), with the number in the middle. */
export function Ring({ value, label, tone = 'mint', size = 92 }: { value: number | null; label: string; tone?: Tone; size?: number }) {
  const r = 38, c = 2 * Math.PI * r;
  const v = value === null ? 0 : Math.max(0, Math.min(1, value));
  return (
    <figure className={`ad-ring t-${tone}`} style={{ width: size, '--s': `${size}px` } as React.CSSProperties} aria-label={`${label}: ${value === null ? '–' : Math.round(v * 100) + ' %'}`}>
      <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden>
        <circle cx="50" cy="50" r={r} className="ad-ring-track" />
        <circle cx="50" cy="50" r={r} className="ad-ring-fill" strokeDasharray={`${v * c} ${c}`} transform="rotate(-90 50 50)" />
      </svg>
      <b>{value === null ? '–' : `${Math.round(v * 100)}%`}</b>
      <figcaption>{label}</figcaption>
    </figure>
  );
}

/** A thin progress line (0..1). */
export function Meter({ value, tone = 'mint' }: { value: number; tone?: Tone }) {
  return <span className={`ad-meter t-${tone}`} aria-hidden><span style={{ width: `${Math.max(0, Math.min(1, value)) * 100}%` }} /></span>;
}
