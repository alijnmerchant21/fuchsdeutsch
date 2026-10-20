'use client';
/* Copy of shared/shell/ReportButton.tsx. Edit the original, then run: npm run shell */
/* "Report a problem": a small warning button at the bottom right of every page, and a short form.
   Sends to POST {apiBase}/api/report (shared/shell/report-route.ts). Source of truth: shared/shell/. */
import { useEffect, useRef, useState } from 'react';

type Lang = 'de' | 'en';
const T = {
  en: {
    tip: 'Report a problem', title: 'Report a problem', lead: 'Something broken, wrong or confusing? Tell us. We read every report.',
    kinds: ['Something is broken', 'Wrong answer or typo', 'Audio or picture', 'Idea or wish'],
    subject: 'Subject', subjectPh: 'In a few words', body: 'What happened?', bodyPh: 'What did you do, what did you expect, what happened instead?',
    email: 'Your email', emailHint: 'optional, so we can answer you', send: 'Send report', sending: 'Sending …', cancel: 'Cancel',
    thanks: 'Thank you!', thanksText: 'Your report reached us. We will look at it soon.', close: 'Close', page: 'Page',
  },
  de: {
    tip: 'Problem melden', title: 'Problem melden', lead: 'Etwas ist kaputt, falsch oder unklar? Sag es uns. Wir lesen jede Meldung.',
    kinds: ['Etwas funktioniert nicht', 'Falsche Lösung oder Tippfehler', 'Audio oder Bild', 'Idee oder Wunsch'],
    subject: 'Betreff', subjectPh: 'In ein paar Worten', body: 'Was ist passiert?', bodyPh: 'Was hast du gemacht, was hast du erwartet, was ist stattdessen passiert?',
    email: 'Deine E-Mail', emailHint: 'freiwillig, damit wir dir antworten können', send: 'Meldung senden', sending: 'Wird gesendet …', cancel: 'Abbrechen',
    thanks: 'Danke!', thanksText: 'Deine Meldung ist angekommen. Wir schauen sie uns bald an.', close: 'Schließen', page: 'Seite',
  },
};

export interface ReportConfig {
  app: 'kurs' | 'pruefung' | 'spiele';
  /** '' for the course, '/pruefung' or '/spiele' for the apps with a base path. */
  apiBase: string;
  email?: string | null;
  getToken?: () => Promise<string | null>;
}

const Warn = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.3 3.9 1.8 18.2A2 2 0 0 0 3.5 21h17a2 2 0 0 0 1.7-2.8L13.7 3.9a2 2 0 0 0-3.4 0Z" />
    <path d="M12 9v4" /><path d="M12 17h.01" />
  </svg>
);

export function ReportButton({ cfg, lang }: { cfg: ReportConfig; lang: Lang }) {
  const t = T[lang];
  const [open, setOpen] = useState(false);
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [email, setEmail] = useState(cfg.email || '');
  const [trap, setTrap] = useState('');
  const [state, setState] = useState<'idle' | 'busy' | 'done'>('idle');
  const [err, setErr] = useState<string | null>(null);
  const first = useRef<HTMLInputElement>(null);

  useEffect(() => { if (cfg.email) setEmail((e) => e || cfg.email || ''); }, [cfg.email]);
  useEffect(() => {
    if (!open) return;
    const t0 = window.setTimeout(() => first.current?.focus(), 60);
    const key = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', key);
    document.body.style.overflow = 'hidden';
    return () => { window.clearTimeout(t0); window.removeEventListener('keydown', key); document.body.style.overflow = ''; };
  }, [open]);

  const reset = () => { setSubject(''); setBody(''); setErr(null); setState('idle'); };
  const close = () => { setOpen(false); if (state === 'done') reset(); };
  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject.trim() || !body.trim()) return;
    setState('busy'); setErr(null);
    try {
      const token = cfg.getToken ? await cfg.getToken() : null;
      const r = await fetch(`${cfg.apiBase}/api/report`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) },
        body: JSON.stringify({ app: cfg.app, page: window.location.pathname + window.location.search, subject, body, email, website: trap }),
      });
      const j = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(j.error || `Error ${r.status}`);
      setState('done');
    } catch (e2) { setErr((e2 as Error).message); setState('idle'); }
  };

  return (
    <>
      <button type="button" className="fx-report" onClick={() => setOpen(true)} aria-label={t.tip}>
        <Warn /><span className="fx-report-tip">{t.tip}</span>
      </button>
      {open && (
        <div className="fx-modal" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) close(); }}>
          <div className="fx-dialog" role="dialog" aria-modal="true" aria-labelledby="fx-report-title">
            {state === 'done' ? (
              <div className="fx-done">
                <span className="fx-done-mark" aria-hidden>✓</span>
                <h2 id="fx-report-title">{t.thanks}</h2>
                <p>{t.thanksText}</p>
                <button type="button" className="fx-btn" onClick={close}>{t.close}</button>
              </div>
            ) : (
              <form onSubmit={send}>
                <div className="fx-dialog-head">
                  <span className="fx-dialog-icon"><Warn /></span>
                  <div><h2 id="fx-report-title">{t.title}</h2><p>{t.lead}</p></div>
                  <button type="button" className="fx-x" onClick={close} aria-label={t.close}>×</button>
                </div>
                <div className="fx-kinds">
                  {t.kinds.map((k) => <button key={k} type="button" className={subject === k ? 'is-on' : ''} onClick={() => setSubject(k)}>{k}</button>)}
                </div>
                <label className="fx-field">{t.subject}<input ref={first} value={subject} onChange={(e) => setSubject(e.target.value)} placeholder={t.subjectPh} maxLength={140} required /></label>
                <label className="fx-field">{t.body}<textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder={t.bodyPh} rows={5} maxLength={4000} required /></label>
                <label className="fx-field">{t.email} <small>{t.emailHint}</small><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" maxLength={254} /></label>
                <input className="fx-trap" tabIndex={-1} autoComplete="off" value={trap} onChange={(e) => setTrap(e.target.value)} aria-hidden />
                {err && <p className="fx-err" role="alert">{err}</p>}
                <div className="fx-actions">
                  <button type="button" className="fx-btn ghost" onClick={close}>{t.cancel}</button>
                  <button type="submit" className="fx-btn" disabled={state === 'busy' || !subject.trim() || !body.trim()}>{state === 'busy' ? t.sending : t.send}</button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
