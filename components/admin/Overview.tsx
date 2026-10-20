'use client';
import { courses } from '@/content/course';
import { Bars, HBars, Kpi } from './Charts';
import { fmtDate, lastDays, lastSeen, type AdminData } from './data';
import { courseOf } from './metrics';
import type { ATT } from './text';
import type { Tab } from './AdminApp';

export function Overview({ data, t, lang, go }: { data: AdminData; t: ATT; lang: 'de' | 'en'; go: (tab: Tab, sub?: string) => void }) {
  const learners = data.profiles.filter((p) => !p.is_admin);
  const approvedPr = new Set(data.access.map((a) => a.user_id));
  const waitKurs = data.beta.filter((b) => !b.approved).length;
  const waitPr = data.cands.filter((c) => !approvedPr.has(c.user_id)).length;
  const week = lastDays(7)[0];
  const active = learners.filter((p) => (lastSeen(p) || '') >= week).length;
  const openReports = data.reports.filter((r) => r.status === 'open').length;
  const openTexts = data.writing.filter((w) => w.status === 'submitted').length;

  const days30 = lastDays(30);
  const signups = days30.map((k) => ({
    key: k, label: k.slice(8), value: data.beta.filter((b) => b.created_at.slice(0, 10) === k).length + data.cands.filter((c) => c.created_at.slice(0, 10) === k).length,
  }));
  const days14 = lastDays(14);
  const minutes = days14.map((k) => ({ key: k, label: k.slice(8), value: Math.round(learners.reduce((a, p) => a + (p.progress?.timeDays?.[k] || 0), 0) / 60) }));
  const betaByEmail = new Map(data.beta.map((b) => [b.email.toLowerCase(), b]));
  const levels = [
    ...courses.map((c) => ({ key: c.id, label: `${t.usersKurs} ${c.level}`, value: learners.filter((p) => courseOf(p, betaByEmail.get(p.email?.toLowerCase())) === c.id).length })),
    ...['a1', 'a2', 'b1', 'b2'].map((l) => ({ key: `p-${l}`, label: `Prüfung ${l.toUpperCase()}`, value: data.cands.filter((c) => (c.level || 'b1') === l).length })),
  ];
  const recent = [
    ...data.beta.map((b) => ({ k: `b-${b.email}`, who: b.profile?.name || b.email, what: `${t.usersKurs}${b.profile?.course ? ` · ${b.profile.course}` : ''}`, when: b.created_at, ok: b.approved })),
    ...data.cands.map((c) => ({ k: `c-${c.user_id}`, who: c.name || c.email, what: `Prüfung ${(c.level || 'b1').toUpperCase()}`, when: c.created_at, ok: approvedPr.has(c.user_id) })),
  ].sort((a, b) => b.when.localeCompare(a.when)).slice(0, 6);

  return (
    <div className="ad-stack">
      <div className="ad-kpis">
        <Kpi label={t.kWaitKurs} value={waitKurs} tone="peach" onClick={() => go('waitlist', 'kurs')} />
        <Kpi label={t.kWaitPr} value={waitPr} tone="butter" onClick={() => go('waitlist', 'pruefung')} />
        <Kpi label={t.kLearners} value={learners.length + data.cands.filter((c) => !learners.some((p) => p.id === c.user_id)).length} tone="mint" onClick={() => go('users')} />
        <Kpi label={t.kActive} value={active} tone="sky" onClick={() => go('users')} />
        <Kpi label={t.kReports} value={openReports} tone="rose" onClick={() => go('reports')} />
        <Kpi label={t.kTexts} value={openTexts} tone="lilac" onClick={() => go('writing')} />
      </div>
      <div className="ad-grid2">
        <section className="ad-card"><h3>{t.signups30}</h3><Bars data={signups} tone="peach" label={t.signups30} /></section>
        <section className="ad-card"><h3>{t.activity14}</h3><Bars data={minutes} tone="sky" label={t.activity14} fmt={(v) => `${v} min`} /></section>
      </div>
      <div className="ad-grid2">
        <section className="ad-card"><h3>{t.perLevel}</h3><HBars data={levels} tone="mint" /></section>
        <section className="ad-card">
          <h3>{t.recentSignups}</h3>
          <ul className="ad-list">
            {recent.map((r) => <li key={r.k}><b>{r.who}</b><span>{r.what}</span><span className={`ad-pill ${r.ok ? 't-mint' : 't-peach'}`}>{r.ok ? t.approved : t.waiting}</span><small>{fmtDate(r.when, lang)}</small></li>)}
            {!recent.length && <li className="ad-empty">{t.none}</li>}
          </ul>
          <h3 className="ad-mt">{t.recentReports}</h3>
          <ul className="ad-list">
            {data.reports.slice(0, 3).map((r) => <li key={r.id}><b>{r.subject}</b><span>{r.app}</span><span className={`ad-pill ${r.status === 'open' ? 't-rose' : 't-mint'}`}>{r.status === 'open' ? t.rOpen : t.rDone}</span><small>{fmtDate(r.created_at, lang)}</small></li>)}
            {!data.reports.length && <li className="ad-empty">{t.none}</li>}
          </ul>
        </section>
      </div>
    </div>
  );
}
