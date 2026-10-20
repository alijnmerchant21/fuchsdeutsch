'use client';
/* Write, check and send one email. Opens with a draft (approval or own message); everything can be edited. */
import { useEffect, useState } from 'react';
import { draft, type EmailApp, type EmailKind, type EmailLang } from '@/lib/emails';
import { supabase } from '@/lib/supabase';
import type { ATT } from './text';

export interface ComposeRequest {
  to: string;
  userId?: string | null;
  app: EmailApp;
  kind: EmailKind;
  lang: EmailLang;
  vars: Record<string, string>;
  /** Approval: runs before sending, and also offers "approve without email". */
  approve?: () => Promise<string | null>;
  subjectPrefix?: string;
}

export async function sendEmail(body: Record<string, unknown>): Promise<string | null> {
  const token = (await supabase()?.auth.getSession())?.data.session?.access_token;
  const r = await fetch('/api/admin/email', { method: 'POST', headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) }, body: JSON.stringify(body) });
  const j = await r.json().catch(() => ({}));
  return r.ok ? null : j.error || `Error ${r.status}`;
}

export function EmailComposer({ req, t, onClose, onDone }: { req: ComposeRequest; t: ATT; onClose: () => void; onDone: () => void }) {
  const [kind, setKind] = useState<EmailKind>(req.kind);
  const [lang, setLang] = useState<EmailLang>(req.lang);
  const [to, setTo] = useState(req.to);
  const [d, setD] = useState(() => draft(req.kind, req.lang, req.app, req.vars));
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const next = draft(kind, lang, req.app, req.vars);
    setD(req.subjectPrefix && kind === 'custom' ? { ...next, subject: req.subjectPrefix } : next);
  }, [kind, lang, req.app, req.vars, req.subjectPrefix]);
  useEffect(() => {
    const key = (e: KeyboardEvent) => { if (e.key === 'Escape' && !busy) onClose(); };
    window.addEventListener('keydown', key);
    return () => window.removeEventListener('keydown', key);
  }, [busy, onClose]);

  const run = async (withMail: boolean) => {
    setBusy(true); setErr(null);
    if (req.approve) {
      const e = await req.approve();
      if (e) { setErr(e); setBusy(false); return; }
    }
    if (withMail) {
      const e = await sendEmail({ to, userId: req.userId, app: req.app, kind, subject: d.subject, text: d.text, button: d.button, link: d.link });
      if (e) { setErr(e); setBusy(false); return; }
    }
    setBusy(false); setSent(true); onDone();
    window.setTimeout(onClose, 900);
  };

  return (
    <div className="ad-modal" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget && !busy) onClose(); }}>
      <div className="ad-dialog" role="dialog" aria-modal="true" aria-label={t.sendEmail}>
        <div className="ad-dialog-head">
          <h2>{req.approve ? t.approveSend : t.sendEmail}</h2>
          <button type="button" className="ad-x" onClick={onClose} aria-label={t.eCancel}>×</button>
        </div>
        <div className="ad-compose-row">
          <label>{t.eKind}
            <select value={kind} onChange={(e) => setKind(e.target.value as EmailKind)}>
              {(['kurs-approved', 'pruefung-approved', 'custom'] as const).map((k) => <option key={k} value={k}>{t.eKindNames[k]}</option>)}
            </select>
          </label>
          <div className="ad-seg" role="group" aria-label={t.eLang}>
            <button type="button" aria-pressed={lang === 'en'} onClick={() => setLang('en')}>EN</button>
            <button type="button" aria-pressed={lang === 'de'} onClick={() => setLang('de')}>DE</button>
          </div>
        </div>
        <label className="ad-field">{t.eTo}<input type="email" value={to} onChange={(e) => setTo(e.target.value)} /></label>
        <label className="ad-field">{t.eSubject}<input value={d.subject} onChange={(e) => setD({ ...d, subject: e.target.value })} /></label>
        <label className="ad-field">{t.eText}<textarea rows={13} value={d.text} onChange={(e) => setD({ ...d, text: e.target.value })} /></label>
        <div className="ad-compose-row">
          <label className="ad-field">{t.eButton}<input value={d.button} onChange={(e) => setD({ ...d, button: e.target.value })} /></label>
          <label className="ad-field grow">{t.eLink}<input value={d.link} onChange={(e) => setD({ ...d, link: e.target.value })} /></label>
        </div>
        <p className="ad-hint">{t.eHint}</p>
        {err && <p className="ad-err" role="alert">{err}</p>}
        <div className="ad-actions">
          {sent ? <span className="ad-ok">{t.eSent}</span> : (
            <>
              <button type="button" className="ad-btn ghost" onClick={onClose} disabled={busy}>{t.eCancel}</button>
              {req.approve && <button type="button" className="ad-btn ghost" onClick={() => void run(false)} disabled={busy}>{t.approveOnly}</button>}
              <button type="button" className="ad-btn" onClick={() => void run(true)} disabled={busy || !to || !d.subject.trim() || !d.text.trim()}>{busy ? t.eSending : req.approve ? t.approveSend : t.eSend}</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
