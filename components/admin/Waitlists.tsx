'use client';
import { useState } from 'react';
import { courseById } from '@/content/course';
import { supabase } from '@/lib/supabase';
import { fmtDate, type AdminData, type BetaRow, type CandRow } from './data';
import type { ComposeRequest } from './EmailComposer';
import type { ATT } from './text';

type Which = 'kurs' | 'pruefung';
type Filter = 'waiting' | 'approved' | 'all';

export function Waitlists({ data, t, lang, which, setWhich, compose, reload }: {
  data: AdminData; t: ATT; lang: 'de' | 'en'; which: Which; setWhich: (w: Which) => void;
  compose: (r: ComposeRequest) => void; reload: () => void;
}) {
  const [filter, setFilter] = useState<Filter>('waiting');
  const [copied, setCopied] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const approvedPr = new Map(data.access.map((a) => [a.user_id, a.approved_at]));
  const kursWait = data.beta.filter((b) => !b.approved).length;
  const prWait = data.cands.filter((c) => !approvedPr.has(c.user_id)).length;
  const missing = which === 'pruefung' && data.missing.includes('exam_access');

  // Course
  const approveKurs = (b: BetaRow, on: boolean) => async () => {
    const sb = supabase();
    if (!sb) return 'No database';
    const { error } = await sb.from('beta_signups').update({ approved: on, approved_at: on ? new Date().toISOString() : null }).eq('email', b.email);
    return error ? error.message : null;
  };
  const askKurs = (b: BetaRow) => compose({
    to: b.email, app: 'kurs', kind: 'kurs-approved', lang: b.profile?.uiLang === 'de' ? 'de' : 'en',
    vars: { name: b.profile?.name || b.email.split('@')[0], email: b.email, course: courseById(b.profile?.course)?.title || b.profile?.course || 'Deutsch A1' },
    userId: data.profiles.find((p) => p.email?.toLowerCase() === b.email.toLowerCase())?.id ?? null,
    approve: approveKurs(b, true),
  });
  // Prüfung
  const approvePr = (c: CandRow, on: boolean) => async () => {
    const sb = supabase();
    if (!sb) return 'No database';
    const { error } = on ? await sb.from('exam_access').insert({ user_id: c.user_id }) : await sb.from('exam_access').delete().eq('user_id', c.user_id);
    return error ? error.message : null;
  };
  const askPr = (c: CandRow) => compose({
    to: c.email, app: 'pruefung', kind: 'pruefung-approved', lang: 'en', userId: c.user_id,
    vars: { name: c.name || c.email.split('@')[0], email: c.email, date: fmtDate(c.exam_date, 'en'), course: `Goethe ${(c.level || 'b1').toUpperCase()}` },
    approve: approvePr(c, true),
  });
  const undo = async (run: () => Promise<string | null>) => { const e = await run(); setErr(e); reload(); };

  const kursRows = data.beta.filter((b) => filter === 'all' || (filter === 'approved' ? b.approved : !b.approved));
  const prRows = data.cands.filter((c) => filter === 'all' || (filter === 'approved' ? approvedPr.has(c.user_id) : !approvedPr.has(c.user_id)));
  const copy = () => {
    const list = which === 'kurs' ? data.beta.filter((b) => b.approved).map((b) => b.email) : data.cands.filter((c) => approvedPr.has(c.user_id)).map((c) => c.email);
    void navigator.clipboard?.writeText(list.join(', ')).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
  };

  return (
    <div className="ad-stack">
      <div className="ad-toolbar">
        <div className="ad-tabs" role="tablist">
          <button type="button" role="tab" aria-selected={which === 'kurs'} onClick={() => setWhich('kurs')}>{t.wlKurs} <span className="ad-count">{kursWait}</span></button>
          <button type="button" role="tab" aria-selected={which === 'pruefung'} onClick={() => setWhich('pruefung')}>{t.wlPr} <span className="ad-count">{prWait}</span></button>
        </div>
        <div className="ad-seg" role="group">
          {(['waiting', 'approved', 'all'] as const).map((f) => <button key={f} type="button" aria-pressed={filter === f} onClick={() => setFilter(f)}>{f === 'waiting' ? t.waiting : f === 'approved' ? t.approved : t.all}</button>)}
        </div>
        <button type="button" className="ad-link" onClick={copy}>{copied ? t.copied : t.copyEmails}</button>
      </div>
      {err && <p className="ad-err">{err}</p>}
      {missing && <p className="ad-warn">{t.sqlMissing('supabase/008_control_center.sql')}</p>}

      {which === 'kurs' ? (
        <div className="ad-card ad-table-wrap">
          <table className="ad-table">
            <thead><tr><th>{t.name}</th><th>{t.email}</th><th>{t.course}</th><th>{t.why}</th><th>{t.native}</th><th>{t.signedUp}</th><th>{t.status}</th></tr></thead>
            <tbody>
              {kursRows.map((b) => (
                <tr key={b.email}>
                  <td><b>{b.profile?.name || <span className="ad-dim">{t.answersOpen}</span>}</b></td><td>{b.email}</td>
                  <td>{b.profile?.course ? <span className="ad-pill t-mint">{courseById(b.profile.course)?.level || b.profile.course}</span> : ''}</td>
                  <td>{(b.profile?.reasons || []).join(', ')}</td><td>{b.profile?.nativeLanguage || ''}</td><td>{fmtDate(b.created_at, lang)}</td>
                  <td>{b.approved
                    ? <span className="ad-row-actions"><span className="ad-pill t-mint">{t.approved}</span><button type="button" className="ad-link" onClick={() => void undo(approveKurs(b, false))}>{t.undo}</button></span>
                    : <button type="button" className="ad-btn sm" onClick={() => askKurs(b)}>{t.approve}</button>}</td>
                </tr>
              ))}
              {!kursRows.length && <tr><td colSpan={7} className="ad-empty">{t.none}</td></tr>}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="ad-card ad-table-wrap">
          <table className="ad-table">
            <thead><tr><th>{t.name}</th><th>{t.email}</th><th>{t.level}</th><th>{t.examDate}</th><th>{t.perDay}</th><th>{t.modules}</th><th>{t.native}</th><th>{t.signedUp}</th><th>{t.status}</th></tr></thead>
            <tbody>
              {prRows.map((c) => (
                <tr key={c.user_id}>
                  <td><b>{c.name}</b></td><td>{c.email}</td><td><span className="ad-pill t-peach">{(c.level || 'b1').toUpperCase()}</span></td>
                  <td>{fmtDate(c.exam_date, lang)}</td><td>{c.minutes_per_day} min</td><td>{c.modules.join(', ')}</td><td>{c.first_language || ''}</td><td>{fmtDate(c.created_at, lang)}</td>
                  <td>{approvedPr.has(c.user_id)
                    ? <span className="ad-row-actions"><span className="ad-pill t-mint">{t.approved}</span><button type="button" className="ad-link" onClick={() => void undo(approvePr(c, false))}>{t.undo}</button></span>
                    : <button type="button" className="ad-btn sm" onClick={() => askPr(c)} disabled={missing}>{t.approve}</button>}</td>
                </tr>
              ))}
              {!prRows.length && <tr><td colSpan={9} className="ad-empty">{t.none}</td></tr>}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
