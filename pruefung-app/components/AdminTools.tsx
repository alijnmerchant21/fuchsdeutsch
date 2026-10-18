'use client';
/* Admin tools on a candidate page: make audio for new Hören texts in a block, send an email by hand. */
import { useEffect, useState } from 'react';
import { callApi, emailLog, type EmailLog } from '@/lib/api';
import { daysBetween, fmt, today } from '@/lib/dates';
import type { Attempt, Block, Candidate } from '@/lib/types';

/** Lists Hören groups in the block's own sets that still have no recorded MP3, and makes them one by one. */
export function BlockAudio({ block, onDone }: { block: Block; onDone: () => void }) {
  const todo = (block.content.sets ?? []).filter((s) => s.module === 'hoeren')
    .flatMap((s) => s.groups.map((g, gi) => ({ set: s.id, gi, title: g.title ?? s.title ?? s.id, has: !!g.audio && /^https?:/.test(g.audio) })))
    .filter((x) => !x.has);
  const [busy, setBusy] = useState(false);
  const [log, setLog] = useState<string[]>([]);
  if (!todo.length) return null;
  const run = async () => {
    setBusy(true); setLog([]);
    for (const [k, x] of todo.entries()) {
      setLog((l) => [...l, `${k + 1}/${todo.length} ${x.title} …`]);
      try {
        const r = await callApi<{ bytes: number }>('audio', { blockId: block.id, setId: x.set, group: x.gi });
        setLog((l) => [...l.slice(0, -1), `${k + 1}/${todo.length} ${x.title} ✓ ${(r.bytes / 1e6).toFixed(1)} MB`]);
      } catch (e) {
        setLog((l) => [...l.slice(0, -1), `${k + 1}/${todo.length} ${x.title} ✗ ${(e as Error).message}`]);
        break;
      }
    }
    setBusy(false); onDone();
  };
  return (
    <span className="audiotool">
      <button className="linkbtn" disabled={busy} onClick={() => void run()}>{busy ? 'Audio läuft …' : `Audio erzeugen (${todo.length})`}</button>
      {log.length > 0 && <span className="small dim" style={{ display: 'block', whiteSpace: 'pre-wrap' }}>{log.join('\n')}</span>}
    </span>
  );
}

type Kind = 'block' | 'reminder' | 'feedback' | 'custom';

function template(kind: Kind, c: Candidate, blocks: Block[]): { subject: string; text: string; button: string } {
  const name = c.name || 'du';
  const last = [...blocks].sort((a, b) => a.seq - b.seq).at(-1);
  const left = daysBetween(today(), c.exam_date);
  if (kind === 'block' && last) return {
    subject: `Block ${last.seq} ist bereit`,
    text: `Hallo ${name},\n\ndein Block ${last.seq} ist freigeschaltet: „${last.content.title}“. Er läuft vom ${fmt(last.starts_on)} bis ${fmt(last.ends_on)}. Mach jeden Tag deinen Teil, dann können wir den nächsten Block genau auf dich zuschneiden.\n\nNoch ${left} Tage bis zur Prüfung.\n\nYour block ${last.seq} is ready. It runs from ${fmt(last.starts_on)} to ${fmt(last.ends_on)}.\n\nViel Erfolg!\nFuchsdeutsch Prüfung`,
    button: `Block ${last.seq} öffnen`,
  };
  if (kind === 'reminder' && last) {
    const end = daysBetween(today(), last.ends_on);
    return {
      subject: end <= 0 ? `Heute endet Block ${last.seq}` : `Noch ${end} ${end === 1 ? 'Tag' : 'Tage'} in Block ${last.seq}`,
      text: `Hallo ${name},\n\nkurze Erinnerung: Block ${last.seq} endet am ${fmt(last.ends_on)}. Was bis dahin fertig ist, nehmen wir für deinen nächsten Block. Offene Tage kannst du danach nicht mehr machen.\n\nQuick reminder: block ${last.seq} ends on ${fmt(last.ends_on)}. We build your next block from what you finish by then.\n\nFuchsdeutsch Prüfung`,
      button: 'Weiter üben',
    };
  }
  if (kind === 'feedback') return {
    subject: 'Deine Schreib-Korrektur ist da',
    text: `Hallo ${name},\n\nwir haben deinen Text korrigiert. Du findest Punkte und Kommentar in deinem Ergebnis unter „Verlauf“.\n\nWe corrected your writing. You find the points and comments in your result under "Verlauf".\n\nFuchsdeutsch Prüfung`,
    button: 'Korrektur ansehen',
  };
  return { subject: '', text: `Hallo ${name},\n\n\n\nFuchsdeutsch Prüfung`, button: 'Zur Prüfung' };
}

export function EmailCard({ c, blocks, attempts }: { c: Candidate; blocks: Block[]; attempts: Attempt[] }) {
  const [kind, setKind] = useState<Kind>(blocks.length ? 'block' : 'custom');
  const [draft, setDraft] = useState(() => template(blocks.length ? 'block' : 'custom', c, blocks));
  const [msg, setMsg] = useState<{ ok: boolean; t: string } | null>(null);
  const [busy, setBusy] = useState(false);
  const [log, setLog] = useState<EmailLog[]>([]);
  useEffect(() => { void emailLog(c.user_id).then(setLog); }, [c.user_id]);
  const pick = (k: Kind) => { setKind(k); setDraft(template(k, c, blocks)); setMsg(null); };
  const corrected = attempts.some((a) => a.feedback);
  const send = async () => {
    if (!window.confirm(`E-Mail an ${c.email} senden?`)) return;
    setBusy(true); setMsg(null);
    try {
      await callApi('email', { userId: c.user_id, kind, ...draft });
      setMsg({ ok: true, t: `Gesendet an ${c.email}.` });
      setLog(await emailLog(c.user_id));
    } catch (e) { setMsg({ ok: false, t: (e as Error).message }); }
    setBusy(false);
  };
  return (
    <div className="card adminsec">
      <h3>E-Mail senden</h3>
      <p className="dim small">Geht über Resend an {c.email}. Nichts wird automatisch verschickt.</p>
      <div className="chips">
        <button className="chip" aria-pressed={kind === 'block'} disabled={!blocks.length} onClick={() => pick('block')}>Block bereit</button>
        <button className="chip" aria-pressed={kind === 'reminder'} disabled={!blocks.length} onClick={() => pick('reminder')}>Erinnerung</button>
        <button className="chip" aria-pressed={kind === 'feedback'} disabled={!corrected} onClick={() => pick('feedback')}>Korrektur da</button>
        <button className="chip" aria-pressed={kind === 'custom'} onClick={() => pick('custom')}>Eigene</button>
      </div>
      <label className="field">Betreff<input value={draft.subject} onChange={(e) => setDraft({ ...draft, subject: e.target.value })} /></label>
      <label className="field">Text<textarea className="writebox" rows={9} value={draft.text} onChange={(e) => setDraft({ ...draft, text: e.target.value })} /></label>
      <label className="field">Button<input value={draft.button} onChange={(e) => setDraft({ ...draft, button: e.target.value })} /></label>
      <div className="actions"><button className="btn" disabled={busy || !draft.subject.trim()} onClick={() => void send()}>{busy ? 'Sendet …' : 'Senden'}</button></div>
      {msg && <p className={msg.ok ? 'msg-ok' : 'msg-err'}>{msg.t}</p>}
      {log.length > 0 && <ul className="small dim">{log.slice(0, 8).map((l) => <li key={l.id}>{fmt(l.created_at.slice(0, 10))} · {l.subject}</li>)}</ul>}
    </div>
  );
}
