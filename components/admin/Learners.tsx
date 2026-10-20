'use client';
import { useMemo, useState } from 'react';
import { courses } from '@/content/course';
import { Bars, HBars, Kpi, Meter, Ring } from './Charts';
import { fmtDate, fmtTime, lastSeen, type AdminData, type CandRow, type ProfileRow } from './data';
import type { ComposeRequest } from './EmailComposer';
import { attemptPct, attemptSecs, courseOf, courseStats, examStats, MODULE_NAME, moduleScores, prTexts } from './metrics';
import { PruefungTools } from './PruefungTools';
import type { ATT } from './text';

type Which = 'kurs' | 'pruefung';

export function Learners({ data, t, lang, open, setOpen, which, setWhich, compose, reload, toWaitlist }: {
  data: AdminData; t: ATT; lang: 'de' | 'en'; open: string | null; setOpen: (id: string | null) => void;
  which: Which; setWhich: (w: Which) => void; compose: (r: ComposeRequest) => void; reload: () => void; toWaitlist: () => void;
}) {
  const [level, setLevel] = useState('all');
  const [q, setQ] = useState('');
  const betaByEmail = useMemo(() => new Map(data.beta.map((b) => [b.email.toLowerCase(), b])), [data.beta]);
  const learners = data.profiles.filter((p) => !p.is_admin && (p.progress?.profile || betaByEmail.has(p.email?.toLowerCase()) || Object.keys(p.progress?.done || {}).length));
  const match = (s: string) => !q || s.toLowerCase().includes(q.toLowerCase());

  if (open) {
    const p = data.profiles.find((x) => x.id === open) || null;
    const c = data.cands.find((x) => x.user_id === open) || null;
    if (p || c) return <Detail p={p} c={c} data={data} t={t} lang={lang} back={() => setOpen(null)} compose={compose} reload={reload} />;
  }

  const kursLevels = courses.map((c) => ({ id: c.id, label: c.level }));
  const prLevels = ['a1', 'a2', 'b1', 'b2'].map((l) => ({ id: l, label: l.toUpperCase() }));
  const levels = which === 'kurs' ? kursLevels : prLevels;
  const kursRows = learners
    .map((p) => ({ p, s: courseStats(p, betaByEmail.get(p.email?.toLowerCase())) }))
    .filter(({ p, s }) => (level === 'all' || s.courseId === level) && (match(p.email || '') || match(p.progress?.profile?.name || p.name || '')))
    .sort((a, b) => (lastSeen(b.p) || '').localeCompare(lastSeen(a.p) || ''));
  const prRows = data.cands
    .map((c) => ({ c, s: examStats(c, data.attempts) }))
    .filter(({ c }) => (level === 'all' || (c.level || 'b1') === level) && (match(c.email) || match(c.name)))
    .sort((a, b) => (b.s.attempts[0]?.finished_at || b.c.created_at).localeCompare(a.s.attempts[0]?.finished_at || a.c.created_at));
  // Signed up for the beta but never logged in (waiting, or approved and not logged in yet).
  const known = new Set(data.profiles.map((p) => p.email?.toLowerCase()));
  const signups = data.beta
    .filter((b) => !known.has(b.email.toLowerCase()))
    .filter((b) => (level === 'all' || (b.profile?.course || courses[0].id) === level) && (match(b.email) || match(b.profile?.name || '')));
  const count = (id: string) => (which === 'kurs'
    ? learners.filter((p) => courseOf(p, betaByEmail.get(p.email?.toLowerCase())) === id).length + data.beta.filter((b) => !known.has(b.email.toLowerCase()) && (b.profile?.course || courses[0].id) === id).length
    : data.cands.filter((c) => (c.level || 'b1') === id).length);

  return (
    <div className="ad-stack">
      <div className="ad-toolbar">
        <div className="ad-tabs" role="tablist">
          <button type="button" role="tab" aria-selected={which === 'kurs'} onClick={() => { setWhich('kurs'); setLevel('all'); }}>{t.usersKurs} <span className="ad-count">{learners.length + data.beta.filter((b) => !known.has(b.email.toLowerCase())).length}</span></button>
          <button type="button" role="tab" aria-selected={which === 'pruefung'} onClick={() => { setWhich('pruefung'); setLevel('all'); }}>{t.usersPr} <span className="ad-count">{data.cands.length}</span></button>
        </div>
        <input className="ad-search" value={q} onChange={(e) => setQ(e.target.value)} placeholder={t.search} aria-label={t.search} />
      </div>
      <div className="ad-levels">
        <button type="button" aria-pressed={level === 'all'} onClick={() => setLevel('all')}>{t.all}</button>
        {levels.map((l) => <button key={l.id} type="button" aria-pressed={level === l.id} onClick={() => setLevel(l.id)}>{l.label} <span>{count(l.id)}</span></button>)}
      </div>

      {which === 'kurs' ? (
        <div className="ad-card ad-table-wrap">
          <table className="ad-table ad-click">
            <thead><tr><th>{t.name}</th><th>{t.level}</th><th>{t.progress}</th><th>{t.time}</th><th>{t.accuracy}</th><th>{t.xp}</th><th>{t.lastActive}</th><th>{t.status}</th></tr></thead>
            <tbody>
              {kursRows.map(({ p, s }) => (
                <tr key={p.id} onClick={() => setOpen(p.id)} tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter') setOpen(p.id); }}>
                  <td><b>{p.progress?.profile?.name || p.name || p.email}</b><small className="ad-sub">{p.email}</small></td>
                  <td><span className="ad-pill t-mint">{s.level}</span></td>
                  <td className="ad-prog"><Meter value={s.total ? s.done / s.total : 0} /><small>{s.done}/{s.total}</small></td>
                  <td>{fmtTime(s.time)}</td><td>{s.acc === null ? '–' : `${Math.round(s.acc * 100)}%`}</td><td>{p.xp}</td>
                  <td>{fmtDate(lastSeen(p), lang) || <span className="ad-dim">{t.never}</span>}</td>
                  <td><span className="ad-pill t-mint">{t.active}</span></td>
                </tr>
              ))}
              {signups.map((b) => (
                <tr key={`b-${b.email}`} onClick={toWaitlist} tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter') toWaitlist(); }}>
                  <td><b>{b.profile?.name || <span className="ad-dim">{t.answersOpen}</span>}</b><small className="ad-sub">{b.email}</small></td>
                  <td><span className="ad-pill t-mint">{courses.find((c) => c.id === b.profile?.course)?.level || '–'}</span></td>
                  <td className="ad-dim">–</td><td className="ad-dim">–</td><td className="ad-dim">–</td><td className="ad-dim">–</td>
                  <td className="ad-dim">{t.signedUp} {fmtDate(b.created_at, lang)}</td>
                  <td>{b.approved ? <span className="ad-pill t-sky">{t.notLoggedIn}</span> : <span className="ad-pill t-peach">{t.waiting} →</span>}</td>
                </tr>
              ))}
              {!kursRows.length && !signups.length && <tr><td colSpan={8} className="ad-empty">{t.none}</td></tr>}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="ad-card ad-table-wrap">
          <table className="ad-table ad-click">
            <thead><tr><th>{t.name}</th><th>{t.level}</th><th>{t.examDate}</th><th>{t.prAttempts}</th><th>Best</th><th>{t.time}</th><th>{t.status}</th></tr></thead>
            <tbody>
              {prRows.map(({ c, s }) => (
                <tr key={c.user_id} onClick={() => setOpen(c.user_id)} tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter') setOpen(c.user_id); }}>
                  <td><b>{c.name || c.email}</b><small className="ad-sub">{c.email}</small></td>
                  <td><span className="ad-pill t-peach">{s.level}</span></td><td>{fmtDate(c.exam_date, lang)}</td>
                  <td>{s.attempts.length}</td><td>{s.best === null ? '–' : `${s.best}%`}</td><td>{fmtTime(s.time)}</td>
                  <td>{data.access.some((a) => a.user_id === c.user_id) ? <span className="ad-pill t-mint">{t.approved}</span> : <span className="ad-pill t-peach">{t.waiting}</span>}</td>
                </tr>
              ))}
              {!prRows.length && <tr><td colSpan={7} className="ad-empty">{t.none}</td></tr>}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function Fact({ k, v }: { k: string; v: React.ReactNode }) { return <div className="ad-fact"><span>{k}</span><b>{v || '–'}</b></div>; }

function Detail({ p, c, data, t, lang, back, compose, reload }: { p: ProfileRow | null; c: CandRow | null; data: AdminData; t: ATT; lang: 'de' | 'en'; back: () => void; compose: (r: ComposeRequest) => void; reload: () => void }) {
  const email = p?.email || c?.email || '';
  const beta = data.beta.find((b) => b.email.toLowerCase() === email.toLowerCase());
  const name = p?.progress?.profile?.name || beta?.profile?.name || c?.name || p?.name || email;
  const s = p ? courseStats(p, beta) : null;
  const ex = c ? examStats(c, data.attempts) : null;
  const id = p?.id || c?.user_id || '';
  const prof = p?.progress?.profile;
  const texts = data.writing.filter((w) => w.user_id === id);
  const reports = data.reports.filter((r) => r.user_id === id || (r.email && r.email.toLowerCase() === email.toLowerCase()));
  const emails = data.emails.filter((m) => m.to_email.toLowerCase() === email.toLowerCase());
  const mail = () => compose({ to: email, userId: id, app: c && !p ? 'pruefung' : 'kurs', kind: 'custom', lang: prof?.uiLang === 'de' ? 'de' : 'en', vars: { name: String(name).split(' ')[0], email } });

  return (
    <div className="ad-stack">
      <div className="ad-detail-head">
        <button type="button" className="ad-link" onClick={back}>← {t.closeDetail}</button>
        <div className="ad-person">
          <span className="ad-avatar">{String(name).slice(0, 1).toUpperCase()}</span>
          <div><h2>{name}</h2><p>{email} · {t.joined} {fmtDate(p?.created_at || c?.created_at, lang)} · {t.lastActive} {p ? fmtDate(lastSeen(p), lang) || t.never : '–'}</p></div>
          <div className="ad-person-tags">
            {s && <span className="ad-pill t-mint">{t.usersKurs} {s.level}</span>}
            {ex && <span className="ad-pill t-peach">Prüfung {ex.level}</span>}
          </div>
          <button type="button" className="ad-btn" onClick={mail}>✉ {t.sendEmail}</button>
        </div>
      </div>

      {s && p && (
        <>
          <div className="ad-kpis">
            <Kpi label={t.sections} value={`${s.done}/${s.total}`} tone="mint" sub={<Meter value={s.total ? s.done / s.total : 0} />} />
            <Kpi label={t.chapters} value={`${s.passed}/${s.chapters.length}`} tone="sky" />
            <Kpi label={t.examsAvg} value={s.testAvg === null ? '–' : `${Math.round(s.testAvg)}%`} tone="peach" />
            <Kpi label={t.time} value={fmtTime(s.time)} tone="lilac" sub={<small>{t.timeNote}</small>} />
            <Kpi label={t.xp} value={p.xp} tone="butter" sub={`${t.streak}: ${p.streak}`} />
          </div>
          <div className="ad-grid2">
            <section className="ad-card"><h3>{t.perChapter}</h3>
              <Bars data={s.chapters.map((ch) => ({ key: ch.id, label: `K${ch.n}`, value: ch.total ? Math.round((ch.done / ch.total) * 100) : 0, tip: `${t.chapterN(ch.n)}: ${ch.done}/${ch.total}` }))} max={100} tone="mint" label={t.perChapter} fmt={(v) => `${v}%`} />
            </section>
            <section className="ad-card"><h3>{t.examScores}</h3>
              <Bars data={s.chapters.map((ch) => ({ key: ch.id, label: `K${ch.n}`, value: ch.test ?? 0, tip: `${t.chapterN(ch.n)}: ${ch.test === null ? '–' : `${ch.test}%`}` }))} max={100} line={{ value: 60, label: '60 %' }} tone="peach" label={t.examScores} fmt={(v) => `${v}%`} />
            </section>
            <section className="ad-card"><h3>{t.timeDays}</h3>
              <Bars data={s.days.map((d) => ({ key: d.key, label: d.key.slice(8), value: d.value }))} tone="lilac" label={t.timeDays} fmt={(v) => `${v} min`} />
            </section>
            <section className="ad-card ad-rings"><h3>{t.accChapter}</h3>
              <div className="ad-ring-row">
                <Ring value={s.acc} label={t.accuracy} tone="mint" size={110} />
                <Bars data={s.chapters.map((ch) => ({ key: ch.id, label: `K${ch.n}`, value: ch.acc === null ? 0 : Math.round(ch.acc * 100), tip: `${t.chapterN(ch.n)}: ${ch.acc === null ? '–' : `${Math.round(ch.acc * 100)}%`}` }))} max={100} tone="sky" label={t.accChapter} fmt={(v) => `${v}%`} height={96} />
              </div>
            </section>
          </div>
        </>
      )}

      {ex && c && (
        <div className="ad-grid2">
          <section className="ad-card"><h3>{t.prPlan}</h3>
            <div className="ad-facts">
              <Fact k={t.level} v={`Goethe ${ex.level}`} /><Fact k={t.examDate} v={fmtDate(c.exam_date, lang)} /><Fact k={t.perDay} v={`${c.minutes_per_day} min`} />
              <Fact k={t.modules} v={c.modules.join(', ')} /><Fact k={t.center} v={c.exam_center} /><Fact k={t.attempt} v={c.attempt_type} /><Fact k={t.native} v={c.first_language} />
              <Fact k={t.prTime} v={fmtTime(ex.time)} />
            </div>
          </section>
          <section className="ad-card"><h3>{t.prModules}</h3>
            {Object.keys(ex.latest).length ? <HBars data={Object.entries(ex.latest).map(([k, v]) => ({ key: k, label: MODULE_NAME[k] || k, value: v }))} max={100} tone="peach" fmt={(v) => `${v}%`} /> : <p className="ad-empty">{t.noData}</p>}
          </section>
          <section className="ad-card ad-span2"><h3>{t.prAttempts}</h3>
            {ex.attempts.length ? (
              <div className="ad-table-wrap"><table className="ad-table">
                <thead><tr><th>{t.eWhen}</th><th>{t.type}</th><th>Ref</th><th>%</th><th>{t.modules}</th><th>{t.time}</th></tr></thead>
                <tbody>{ex.attempts.map((a) => (
                  <tr key={a.id}><td>{fmtDate(a.finished_at, lang)}</td><td>{a.kind}</td><td className="ad-dim">{a.ref.slice(0, 24)}</td><td><b>{attemptPct(a) ?? '–'}{attemptPct(a) !== null ? '%' : ''}</b></td>
                    <td>{Object.entries(moduleScores(a)).map(([k, v]) => <span key={k} className="ad-pill t-sky">{MODULE_NAME[k] || k} {v}%</span>)}</td><td>{fmtTime(attemptSecs(a))}</td></tr>
                ))}</tbody>
              </table></div>
            ) : <p className="ad-empty">{t.noData}</p>}
          </section>
          <section className="ad-card ad-span2"><h3>{t.prWriting} <span className="ad-count">{prTexts(data.attempts, c.user_id).length}</span></h3>
            <div className="ad-texts">
              {prTexts(data.attempts, c.user_id).map((x) => (
                <article key={`${x.attempt.id}-${x.taskId}`} className="ad-text">
                  <header><b>{t.task} {x.taskId}</b><span className="ad-dim">{x.attempt.ref} · {fmtDate(x.attempt.finished_at, lang)}</span>
                    {x.fb ? <span className="ad-pill t-mint">{x.fb.score}/{x.fb.max}</span> : <span className="ad-pill t-butter">{t.notMarked}</span>}</header>
                  <p className="ad-pre">{x.text}</p>
                  {x.fb?.comment && <p className="ad-hint"><b>{t.comment}:</b> {x.fb.comment}</p>}
                </article>
              ))}
              {!prTexts(data.attempts, c.user_id).length && <p className="ad-empty">{t.noData}</p>}
            </div>
          </section>
          <PruefungTools uid={c.user_id} t={t} onChange={reload} />
        </div>
      )}

      <div className="ad-grid2">
        <section className="ad-card"><h3>{t.form}</h3>
          <div className="ad-facts">
            <Fact k={t.name} v={prof?.name || beta?.profile?.name} />
            <Fact k={t.course} v={beta?.profile?.course || p?.progress?.course} />
            <Fact k={t.why} v={(prof?.reasons || beta?.profile?.reasons || []).join(', ')} />
            <Fact k={t.native} v={prof?.nativeLanguage || beta?.profile?.nativeLanguage} />
            <Fact k={t.gender} v={prof?.gender || beta?.profile?.gender} />
            <Fact k={t.goal} v={prof?.goal || beta?.profile?.goal ? `${prof?.goal || beta?.profile?.goal} XP` : ''} />
            <Fact k={t.board} v={prof ? (prof.board ? t.yes : t.no) : ''} />
            <Fact k={t.uiLang} v={(prof?.uiLang || beta?.profile?.uiLang || '').toUpperCase()} />
            <Fact k={t.signedUp} v={fmtDate(beta?.created_at, lang)} />
          </div>
        </section>
        <section className="ad-card"><h3>{t.texts} <span className="ad-count">{texts.length}</span></h3>
          <ul className="ad-list">{texts.slice(0, 8).map((w) => <li key={w.id}><b>{w.block}</b><span>{w.chapter}</span><span className={`ad-pill ${w.status === 'reviewed' ? 't-mint' : 't-butter'}`}>{w.status === 'reviewed' ? `${w.score}/${w.max_score}` : t.wOpen}</span><small>{fmtDate(w.created_at, lang)}</small></li>)}
            {!texts.length && <li className="ad-empty">{t.none}</li>}</ul>
          <h3 className="ad-mt">{t.reportsBy} <span className="ad-count">{reports.length}</span></h3>
          <ul className="ad-list">{reports.slice(0, 5).map((r) => <li key={r.id}><b>{r.subject}</b><span>{r.app}</span><span className={`ad-pill ${r.status === 'open' ? 't-rose' : 't-mint'}`}>{r.status === 'open' ? t.rOpen : t.rDone}</span><small>{fmtDate(r.created_at, lang)}</small></li>)}
            {!reports.length && <li className="ad-empty">{t.none}</li>}</ul>
          <h3 className="ad-mt">{t.emailsTo} <span className="ad-count">{emails.length}</span></h3>
          <ul className="ad-list">{emails.slice(0, 5).map((m) => <li key={m.id}><b>{m.subject}</b><span>{t.eKindNames[m.kind] || m.kind}</span><small>{fmtDate(m.created_at, lang)}</small></li>)}
            {!emails.length && <li className="ad-empty">{t.none}</li>}</ul>
        </section>
      </div>
    </div>
  );
}
