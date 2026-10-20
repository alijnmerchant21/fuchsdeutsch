'use client';
/* Reports, sent emails, writing marking and course content. */
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { courses } from '@/content/course';
import { isExercise } from '@/content/types';
import { supabase } from '@/lib/supabase';
import { exportForClaude, listWriting, parseReviews, saveReview, type WritingSubmission } from '@/lib/writing';
import { fmtDate, type AdminData } from './data';
import { prTexts } from './metrics';
import type { ComposeRequest } from './EmailComposer';
import type { ATT } from './text';

type L = 'de' | 'en';

/* ---------- reports ---------- */
export function Reports({ data, t, lang, compose, reload }: { data: AdminData; t: ATT; lang: L; compose: (r: ComposeRequest) => void; reload: () => void }) {
  const [filter, setFilter] = useState<'open' | 'done' | 'all'>('open');
  const rows = data.reports.filter((r) => filter === 'all' || r.status === filter);
  const set = async (id: string, status: 'open' | 'done') => { await supabase()?.from('site_reports').update({ status }).eq('id', id); reload(); };
  if (data.missing.includes('site_reports')) return <p className="ad-warn">{t.sqlMissing('supabase/008_control_center.sql')}</p>;
  return (
    <div className="ad-stack">
      <div className="ad-toolbar">
        <div className="ad-seg" role="group">
          {(['open', 'done', 'all'] as const).map((f) => <button key={f} type="button" aria-pressed={filter === f} onClick={() => setFilter(f)}>{f === 'open' ? `${t.rOpen} (${data.reports.filter((r) => r.status === 'open').length})` : f === 'done' ? t.rDone : t.all}</button>)}
        </div>
      </div>
      <div className="ad-reports">
        {rows.map((r) => (
          <article key={r.id} className={`ad-card ad-report ${r.status === 'done' ? 'is-done' : ''}`}>
            <header>
              <span className={`ad-pill ${r.app === 'pruefung' ? 't-peach' : r.app === 'spiele' ? 't-sky' : 't-mint'}`}>{r.app}</span>
              <h3>{r.subject}</h3>
              <small>{fmtDate(r.created_at, lang)} · {new Date(r.created_at).toLocaleTimeString(lang === 'de' ? 'de-DE' : 'en-GB', { hour: '2-digit', minute: '2-digit' })}</small>
            </header>
            <p className="ad-report-body">{r.body}</p>
            <div className="ad-facts small">
              <div className="ad-fact"><span>{t.page}</span><b>{r.page ? <a href={r.app === 'kurs' ? r.page : `${r.page.startsWith('/' + r.app) ? '' : `/${r.app}`}${r.page}`} target="_blank" rel="noreferrer">{r.page}</a> : '–'}</b></div>
              <div className="ad-fact"><span>{t.from}</span><b>{r.email || t.anonymous}</b></div>
            </div>
            <div className="ad-actions">
              {r.email && <button type="button" className="ad-btn ghost sm" onClick={() => compose({ to: r.email!, userId: r.user_id, app: r.app === 'pruefung' ? 'pruefung' : r.app === 'spiele' ? 'spiele' : 'kurs', kind: 'custom', lang, vars: { name: '' }, subjectPrefix: `Re: ${r.subject}` })}>✉ {t.reply}</button>}
              {r.status === 'open'
                ? <button type="button" className="ad-btn sm" onClick={() => void set(r.id, 'done')}>✓ {t.markDone}</button>
                : <button type="button" className="ad-link" onClick={() => void set(r.id, 'open')}>{t.reopen}</button>}
            </div>
          </article>
        ))}
        {!rows.length && <p className="ad-empty ad-card">{t.none}</p>}
      </div>
    </div>
  );
}

/* ---------- emails ---------- */
export function Emails({ data, t, lang, compose }: { data: AdminData; t: ATT; lang: L; compose: (r: ComposeRequest) => void }) {
  if (data.missing.includes('sent_emails')) return <p className="ad-warn">{t.sqlMissing('supabase/008_control_center.sql')}</p>;
  return (
    <div className="ad-stack">
      <div className="ad-toolbar"><button type="button" className="ad-btn" onClick={() => compose({ to: '', app: 'kurs', kind: 'custom', lang, vars: { name: '' } })}>✉ {t.sendEmail}</button></div>
      <div className="ad-card ad-table-wrap">
        <table className="ad-table">
          <thead><tr><th>{t.eWhen}</th><th>{t.eTo}</th><th>{t.app}</th><th>{t.eKind}</th><th>{t.eSubject}</th></tr></thead>
          <tbody>
            {data.emails.map((m) => (
              <tr key={m.id}><td>{fmtDate(m.created_at, lang)}</td><td>{m.to_email}</td><td>{m.app}</td><td><span className="ad-pill t-lilac">{t.eKindNames[m.kind] || m.kind}</span></td>
                <td><details><summary>{m.subject}</summary><p className="ad-pre">{m.body}</p></details></td></tr>
            ))}
            {!data.emails.length && <tr><td colSpan={5} className="ad-empty">{t.none}</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ---------- writing: export open texts for Claude, paste the marking back ---------- */
export function Writing({ t, lang, data, openLearner }: { t: ATT; lang: L; data: AdminData; openLearner: (id: string) => void }) {
  const [which, setWhich] = useState<'kurs' | 'pruefung'>('kurs');
  const pr = prTexts(data.attempts);
  const prOpen = pr.filter((x) => !x.fb).length;
  const kursOpen = data.writing.filter((w) => w.status === 'submitted').length;
  const tabs = (
    <div className="ad-tabs" role="tablist">
      <button type="button" role="tab" aria-selected={which === 'kurs'} onClick={() => setWhich('kurs')}>{t.wKurs} <span className="ad-count">{kursOpen}</span></button>
      <button type="button" role="tab" aria-selected={which === 'pruefung'} onClick={() => setWhich('pruefung')}>{t.wPr} <span className="ad-count">{prOpen}</span></button>
    </div>
  );
  if (which === 'pruefung') {
    const name = (uid: string) => { const c = data.cands.find((x) => x.user_id === uid); return c ? `${c.name || c.email} · ${(c.level || 'b1').toUpperCase()}` : uid; };
    return (
      <div className="ad-stack">
        <div className="ad-toolbar">{tabs}</div>
        <p className="ad-hint">{t.prToolsHint}</p>
        <div className="ad-card ad-table-wrap">
          <table className="ad-table ad-click">
            <thead><tr><th>{t.wWhen}</th><th>{t.wWho}</th><th>{t.task}</th><th>{t.wText}</th><th>{t.wPoints}</th><th /></tr></thead>
            <tbody>
              {pr.map((x) => (
                <tr key={`${x.attempt.id}-${x.taskId}`} onClick={() => openLearner(x.attempt.user_id)}>
                  <td>{fmtDate(x.attempt.finished_at, lang)}</td><td>{name(x.attempt.user_id)}</td><td>{x.taskId}</td>
                  <td>{x.text.slice(0, 70)}{x.text.length > 70 ? '…' : ''}</td>
                  <td>{x.fb ? <span className="ad-pill t-mint">{x.fb.score}/{x.fb.max}</span> : <span className="ad-pill t-butter">{t.notMarked}</span>}</td>
                  <td><span className="ad-link">{t.openLearner} →</span></td>
                </tr>
              ))}
              {!pr.length && <tr><td colSpan={6} className="ad-empty">{t.none}</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  return <CourseWriting t={t} lang={lang} tabs={tabs} />;
}

function CourseWriting({ t, lang, tabs }: { t: ATT; lang: L; tabs: React.ReactNode }) {
  const [filter, setFilter] = useState<'submitted' | 'reviewed'>('submitted');
  const [rows, setRows] = useState<WritingSubmission[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [paste, setPaste] = useState('');
  const [msg, setMsg] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [busy, setBusy] = useState(false);
  const load = (f = filter) => { setRows(null); void listWriting(f).then((r) => { setRows(r.rows); setError(r.error || null); }); };
  useEffect(() => load(filter), [filter]); // eslint-disable-line react-hooks/exhaustive-deps
  const copy = () => { void navigator.clipboard?.writeText(exportForClaude(rows || [])).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2500); }); };
  const save = async () => {
    const { ok, problems } = parseReviews(paste, rows || []);
    if (!ok.length) { setMsg(problems.join(' · ') || t.wNothing); return; }
    setBusy(true);
    const failed: string[] = [];
    for (const r of ok) { const e = await saveReview(r.id, r); if (e) failed.push(`${r.id}: ${e}`); }
    setBusy(false);
    setMsg(`${t.wSaved(ok.length - failed.length)}${problems.length ? ` · ${problems.join(' · ')}` : ''}${failed.length ? ` · ${failed.join(' · ')}` : ''}`);
    if (!failed.length) setPaste('');
    load();
  };
  if (error) return <p className="ad-warn">{t.sqlMissing('supabase/007_writing.sql')} ({error})</p>;
  return (
    <div className="ad-stack">
      <div className="ad-toolbar">
        {tabs}
        <div className="ad-seg" role="group">
          <button type="button" aria-pressed={filter === 'submitted'} onClick={() => setFilter('submitted')}>{t.wOpen}{filter === 'submitted' && rows ? ` (${rows.length})` : ''}</button>
          <button type="button" aria-pressed={filter === 'reviewed'} onClick={() => setFilter('reviewed')}>{t.wDone}</button>
        </div>
        {filter === 'submitted' && !!rows?.length && <button type="button" className="ad-btn sm" onClick={copy}>{copied ? t.wCopied : t.wCopy}</button>}
      </div>
      <div className="ad-card ad-table-wrap">
        <table className="ad-table">
          <thead><tr><th>{t.wWhen}</th><th>{t.wWho}</th><th>{t.course}</th><th>{t.wTask}</th><th>{t.wWords}</th><th>{t.wText}</th>{filter === 'reviewed' && <th>{t.wPoints}</th>}</tr></thead>
          <tbody>
            {(rows || []).map((r) => (
              <tr key={r.id}>
                <td>{fmtDate(r.created_at, lang)}</td><td>{r.name || r.email}</td><td>{r.level} · {r.chapter}</td>
                <td><Link href={`/kurs/${r.chapter}/uebungen`} target="_blank">{r.block}</Link></td><td>{r.words}</td>
                <td><details><summary>{r.body.slice(0, 60)}{r.body.length > 60 ? '…' : ''}</summary><p className="ad-pre">{r.body}</p></details></td>
                {filter === 'reviewed' && <td>{r.score} / {r.max_score}</td>}
              </tr>
            ))}
            {rows && !rows.length && <tr><td colSpan={7} className="ad-empty">{t.none}</td></tr>}
            {!rows && <tr><td colSpan={7} className="ad-empty">{t.loading}</td></tr>}
          </tbody>
        </table>
      </div>
      {filter === 'submitted' && !!rows?.length && (
        <div className="ad-card ad-stack">
          <p className="ad-hint">{t.wHelp}</p>
          <textarea className="ad-textarea" rows={8} value={paste} onChange={(e) => setPaste(e.target.value)} placeholder='[{ "id": "…", "score": 14, "max_score": 20, "feedback": { … } }]' />
          <div><button type="button" className="ad-btn" disabled={busy || !paste.trim()} onClick={() => void save()}>{busy ? t.wSaving : t.wSave}</button></div>
          {msg && <p className="ad-hint" role="status">{msg}</p>}
        </div>
      )}
    </div>
  );
}

/* ---------- course content: course cards, then chapter cards, then sections ---------- */
const TONES = ['mint', 'sky', 'butter', 'lilac', 'peach', 'rose'];
export function Content({ t, open, setOpen }: { t: ATT; open: string | null; setOpen: (id: string | null) => void }) {
  const [chapter, setChapter] = useState<string | null>(null);
  const course = courses.find((c) => c.id === open);
  if (!course) {
    return (
      <div className="ad-cards">
        {courses.map((c, i) => {
          const secs = c.chapters.flatMap((ch) => ch.sections);
          return (
            <button key={c.id} type="button" className={`ad-card ad-coursecard t-${TONES[i % TONES.length]}`} onClick={() => setOpen(c.id)}>
              <b className="ad-coursecard-level">{c.level}</b>
              <span>{c.title}</span>
              <small>{t.chaptersN(c.chapters.length)} · {t.sectionsN(secs.length)} · {secs.flatMap((s) => s.blocks).filter(isExercise).length} {t.exercises}</small>
            </button>
          );
        })}
      </div>
    );
  }
  const ch = course.chapters.find((x) => x.id === chapter);
  return (
    <div className="ad-stack">
      <div className="ad-toolbar">
        <button type="button" className="ad-link" onClick={() => { if (ch) setChapter(null); else setOpen(null); }}>← {ch ? course.title : t.nav.content}</button>
        <h2 className="ad-h2">{ch ? `${t.chapterN(ch.number)}: ${ch.title}` : course.title}</h2>
        {!ch && <Link className="ad-btn ghost sm" href={`/abschlusspruefung/${course.id}`} target="_blank">{t.finalTest(course.level)}</Link>}
      </div>
      {!ch ? (
        <div className="ad-cards">
          {course.chapters.map((x, i) => (
            <button key={x.id} type="button" className={`ad-card ad-chaptercard t-${TONES[i % TONES.length]}`} onClick={() => setChapter(x.id)} disabled={!x.sections.length}>
              <small>{t.chapterN(x.number)}</small>
              <b>{x.title}</b>
              <span className="ad-dim">{x.theme}</span>
              <span className="ad-chip-row">
                <span className="ad-pill">{x.sections.length ? t.sectionsN(x.sections.length) : t.inWork}</span>
                {!!x.exam.length && <span className="ad-pill">{x.exam.length} {t.tasks}</span>}
              </span>
            </button>
          ))}
        </div>
      ) : (
        <div className="ad-card ad-table-wrap">
          <p className="ad-hint">{ch.theme}. {ch.grammar}</p>
          <table className="ad-table">
            <thead><tr><th>{t.section}</th><th>{t.name}</th><th>{t.blocks}</th><th>{t.exercises}</th><th>{t.audio}</th><th /></tr></thead>
            <tbody>
              {ch.sections.map((s) => (
                <tr key={s.id}><th scope="row">{s.label}</th><td>{s.title}</td><td>{s.blocks.length}</td><td>{s.blocks.filter(isExercise).length}</td><td>{s.blocks.filter((b) => b.t === 'audio').length}</td>
                  <td><Link href={`/kurs/${ch.id}/${s.id}`} target="_blank">{t.view} ↗</Link></td></tr>
              ))}
              <tr><th scope="row">{t.chapterTest}</th><td /><td>{ch.exam.length}</td><td>{ch.exam.length}</td><td>{ch.exam.filter((e) => e.stimulus?.t === 'audio').length}</td><td><Link href={`/kurs/${ch.id}/pruefung`} target="_blank">{t.view} ↗</Link></td></tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
