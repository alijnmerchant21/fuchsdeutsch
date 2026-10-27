'use client';
/* Who uses which app: per-app funnel, overlap between apps, where people started and came from. */
import { HBars, Kpi } from './Charts';
import { lastDays, type AdminData, type AppRow } from './data';
import type { ATT } from './text';

const APPS = ['kurs', 'pruefung', 'spiele'] as const;
const TONE = { kurs: 'mint', pruefung: 'peach', spiele: 'sky' } as const;

/** One person per email, with the apps they joined. */
export function byPerson(rows: AppRow[]) {
  const m = new Map<string, AppRow[]>();
  for (const r of rows) m.set(r.email, [...(m.get(r.email) || []), r]);
  return m;
}

export function AppsPanel({ data, t }: { data: AdminData; t: ATT }) {
  if (data.missing.includes('app_access')) return <p className="ad-warn">{t.sqlMissing('supabase/009_app_access.sql')}</p>;
  const week = lastDays(7)[0];
  const people = byPerson(data.apps);
  const combos = new Map<string, number>();
  const started = new Map<string, number>();
  const sources = new Map<string, number>();
  for (const rows of people.values()) {
    const key = APPS.filter((a) => rows.some((r) => r.app === a)).map((a) => t.appNames[a]).join(' + ');
    combos.set(key, (combos.get(key) || 0) + 1);
    const first = [...rows].sort((a, b) => a.created_at.localeCompare(b.created_at))[0];
    started.set(first.app, (started.get(first.app) || 0) + 1);
    const src = rows.map((r) => r.source).find(Boolean) || 'direct';
    const label = src === 'direct' ? t.direct : src.replace(/^ref:|^site:/, '');
    sources.set(label, (sources.get(label) || 0) + 1);
  }
  const sorted = (m: Map<string, number>) => [...m.entries()].sort((a, b) => b[1] - a[1]);
  return (
    <section className="ad-card ad-span2">
      <h3>{t.appsTitle} <span className="ad-count">{people.size} {t.people}</span></h3>
      <div className="ad-apps">
        {APPS.map((a) => {
          const rows = data.apps.filter((r) => r.app === a);
          return (
            <div key={a} className={`ad-appbox t-${TONE[a]}`}>
              <b className="ad-appbox-name">{t.appNames[a]}</b>
              <div className="ad-appbox-nums">
                <Kpi label={t.signups} value={rows.length} tone={TONE[a]} />
                {a !== 'spiele' && <Kpi label={t.waiting} value={rows.filter((r) => r.status === 'waiting').length} tone={TONE[a]} />}
                <Kpi label={t.approved} value={rows.filter((r) => r.status === 'approved').length} tone={TONE[a]} />
                <Kpi label={t.active7} value={rows.filter((r) => (r.last_seen_at || '').slice(0, 10) >= week).length} tone={TONE[a]} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="ad-grid3">
        <div><h3>{t.overlap}</h3><HBars data={sorted(combos).map(([k, v]) => ({ key: k, label: k.includes('+') ? k : t.only(k), value: v }))} tone="lilac" /></div>
        <div><h3>{t.startedIn}</h3><HBars data={sorted(started).map(([k, v]) => ({ key: k, label: t.appNames[k] || k, value: v }))} tone="peach" /></div>
        <div><h3>{t.cameFrom}</h3><HBars data={sorted(sources).slice(0, 8).map(([k, v]) => ({ key: k, label: k, value: v }))} tone="sky" /></div>
      </div>
    </section>
  );
}

/** Small pills: which apps this person joined, and their status there. */
export function AppPills({ rows, t }: { rows: AppRow[]; t: ATT }) {
  return (
    <span className="ad-apppills">
      {APPS.map((a) => {
        const r = rows.find((x) => x.app === a);
        if (!r) return null;
        return <span key={a} className={`ad-pill t-${TONE[a]} ${r.status === 'waiting' ? 'is-wait' : ''}`} title={`${t.appNames[a]}: ${r.status === 'waiting' ? t.waiting : t.approved}`}>{t.appNames[a]}{r.status === 'waiting' ? ' ⏳' : ''}</span>;
      })}
    </span>
  );
}
