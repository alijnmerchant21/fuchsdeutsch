'use client';
import Link from 'next/link';
import { use, useCallback, useEffect, useState } from 'react';
import { Guard } from '@/components/Guard';
import { ResultView } from '@/components/ResultView';
import { ClaimReview } from '@/components/ClaimReview';
import { loadLicensed, MODULES, type Licensed } from '@/lib/content';
import { daysBetween, fmt, today } from '@/lib/dates';
import { db } from '@/lib/db';
import { buildExport } from '@/lib/export';
import { checkUpload, type Upload } from '@/lib/validate';
import type { Attempt, Block, Candidate, Claim, Feedback, Module } from '@/lib/types';

function Detail({ uid }: { uid: string }) {
  const [c, setC] = useState<Candidate | null>(null);
  const [att, setAtt] = useState<Attempt[]>([]);
  const [bl, setBl] = useState<Block[]>([]);
  const [lic, setLic] = useState<Licensed | null>(null);
  const [claims, setClaims] = useState<Claim[]>([]);
  const [exp, setExp] = useState('');
  const [paste, setPaste] = useState('');
  const [msg, setMsg] = useState<{ ok: boolean; t: string[] } | null>(null);
  const [open, setOpen] = useState<string | null>(null);

  const load = useCallback(async () => {
    const [cand, a, b, l, cl] = await Promise.all([db.candidate(uid), db.attempts(uid), db.blocks(uid), loadLicensed(), db.claims(uid)]);
    setC(cand); setAtt(a); setBl(b); setLic(l); setClaims(cl);
  }, [uid]);
  useEffect(() => { void load(); }, [load]);

  if (!c || !lic) return <p className="dim">Lädt …</p>;
  const t = today();
  const sorted = [...bl].sort((a, b) => a.seq - b.seq);

  const toggleUnlock = async (m: Module) => {
    const next = c.unlocked.includes(m) ? c.unlocked.filter((x) => x !== m) : [...c.unlocked, m];
    await db.setUnlocked(uid, next); await load();
  };

  const doExport = async () => {
    const text = buildExport(c, att, bl, lic);
    setExp(text);
    try { await navigator.clipboard.writeText(text); setMsg({ ok: true, t: ['Kopiert. In Claude einfügen und die JSON-Antwort unten einfügen.'] }); } catch { setMsg({ ok: true, t: ['Text unten markieren und kopieren.'] }); }
  };

  const doImport = async () => {
    let u: Upload;
    try {
      const raw = paste.trim().replace(/^```(?:json)?\s*/, '').replace(/```\s*$/, '');
      u = JSON.parse(raw) as Upload;
    } catch (e) { setMsg({ ok: false, t: ['Kein gültiges JSON: ' + (e as Error).message] }); return; }
    const errs = checkUpload(u, lic);
    if (errs.length) { setMsg({ ok: false, t: errs }); return; }
    const done: string[] = [];
    try {
      if (u.block) {
        const { starts_on, ends_on, ...content } = u.block;
        await db.saveBlock({ user_id: uid, seq: (sorted[sorted.length - 1]?.seq ?? 0) + 1, starts_on, ends_on, content });
        done.push(`Block ${(sorted[sorted.length - 1]?.seq ?? 0) + 1} gespeichert und für den Kandidaten sichtbar (${fmt(starts_on)} bis ${fmt(ends_on)}).`);
        if (u.block.sets?.some((s) => s.module === 'hoeren')) done.push('Neue Hörtexte laufen mit der Browser-Stimme, bis die MP3s erzeugt sind.');
      }
      for (const [aid, fb] of Object.entries(u.feedback ?? {})) {
        const a = att.find((x) => x.id === aid);
        await db.saveFeedback(aid, { ...(a?.feedback ?? {}), ...fb });
        done.push(`Korrektur gespeichert für ${a?.ref ?? aid}.`);
      }
      setPaste(''); setMsg({ ok: true, t: done }); await load();
    } catch (e) { setMsg({ ok: false, t: [(e as Error).message] }); }
  };

  const saveManual = async (a: Attempt, taskId: string, score: number, max: number, comment: string) => {
    const fb: Feedback = { ...(a.feedback ?? {}), [taskId]: { score, max, comment } };
    await db.saveFeedback(a.id, fb); await load();
  };

  const title = (ref: string) => {
    if (ref === 'diagnose') return 'Mock Test 1 · Diagnose';
    const [bid, i] = ref.split(':'); const b = bl.find((x) => x.id === bid);
    return b ? `Block ${b.seq} · ${b.content.days[Number(i)]?.title ?? ''}` : ref;
  };

  return (
    <>
      <div className="lessonhead card hue-butter">
        <div className="tlabel"><Link className="linkbtn" href="/admin">‹ Alle Kandidaten</Link></div>
        <h2>{c.name || c.email}</h2>
        <p className="tsub">{c.email} · Prüfung {fmt(c.exam_date)} ({daysBetween(t, c.exam_date)} Tage) · {c.minutes_per_day} Min. an {c.study_days.length} Tagen pro Woche</p>
        <div className="row">
          <span className="small dim">Freigeschaltet:</span>
          {MODULES.filter((m) => m.live).map((m) => (
            <button key={m.id} className="chip" aria-pressed={c.unlocked.includes(m.id)} onClick={() => void toggleUnlock(m.id)}>
              {m.name}{!c.modules.includes(m.id) && ' (nicht gewählt)'}
            </button>
          ))}
        </div>
      </div>

      {[...claims].reverse().map((cl) => <ClaimReview key={cl.id} claim={cl} cand={c} attempts={att} blocks={bl} onDone={() => void load()} />)}

      <div className="card adminsec">
        <h3>1 · Für Claude exportieren</h3>
        <p className="dim small">Enthält Ergebnisse pro Teil, alle Fehler, offene Schreib-Texte, die Bank und das Antwortformat.</p>
        <button className="btn" onClick={() => void doExport()}>Export erstellen und kopieren</button>
        {exp && <textarea className="mono" readOnly value={exp} style={{ marginTop: 12 }} onFocus={(e) => e.currentTarget.select()} />}
      </div>

      <div className="card adminsec">
        <h3>2 · Antwort von Claude einfügen</h3>
        <p className="dim small">JSON mit „block“ und/oder „feedback“. Wird geprüft, bevor es gespeichert wird.</p>
        <textarea className="mono" value={paste} onChange={(e) => setPaste(e.target.value)} placeholder='{ "block": { … }, "feedback": { … } }' />
        <div className="actions"><button className="btn" disabled={!paste.trim()} onClick={() => void doImport()}>Prüfen und freischalten</button></div>
        {msg && <ul className={msg.ok ? 'msg-ok' : 'msg-err'}>{msg.t.map((x, i) => <li key={i}>{x}</li>)}</ul>}
      </div>

      <div className="card adminsec">
        <h3>Blöcke</h3>
        {!sorted.length && <p className="dim">Noch kein Block.</p>}
        <table className="table"><tbody>{sorted.map((b) => {
          const done = b.content.days.filter((_, i) => att.some((a) => a.ref === `${b.id}:${i}`)).length;
          return (
            <tr key={b.id}>
              <td>#{b.seq}</td><td><b>{b.content.title}</b><br /><span className="small dim">{b.content.focus.join(', ')}</span></td>
              <td>{fmt(b.starts_on)} bis {fmt(b.ends_on)}{b.ends_on < t && <><br /><span className="small dim">geschlossen</span></>}</td>
              <td>{done}/{b.content.days.length} Tage</td>
              <td><button className="linkbtn dangerlink" onClick={async () => { if (window.confirm(`Block ${b.seq} löschen?`)) { await db.deleteBlock(b.id); await load(); } }}>löschen</button></td>
            </tr>
          );
        })}</tbody></table>
      </div>

      <div className="card adminsec">
        <h3>Ergebnisse und Schreiben</h3>
        <table className="table"><tbody>{[...att].sort((a, b) => b.finished_at.localeCompare(a.finished_at)).map((a) => (
          <tr key={a.id}>
            <td>{fmt(a.finished_at.slice(0, 10))}</td>
            <td>{title(a.ref)}<br /><span className="small dim">{Object.entries(a.scores).map(([k, v]) => `${k} ${v.right}/${v.total}`).join(' · ')}</span></td>
            <td>{Object.keys(a.writing ?? {}).length > 0 && (a.feedback ? <span className="pill on">korrigiert</span> : <span className="mtag">Schreiben offen</span>)}</td>
            <td><button className="linkbtn" onClick={() => setOpen(open === a.id ? null : a.id)}>{open === a.id ? 'zu' : 'ansehen'}</button></td>
          </tr>
        ))}</tbody></table>
        {open && (() => {
          const a = att.find((x) => x.id === open)!;
          return (
            <div style={{ marginTop: 16 }}>
              {Object.entries(a.writing ?? {}).map(([taskId, text]) => <ManualFeedback key={taskId} a={a} taskId={taskId} text={text} onSave={saveManual} />)}
              <ResultView attempt={a} blocks={bl} />
            </div>
          );
        })()}
      </div>
    </>
  );
}

function ManualFeedback({ a, taskId, text, onSave }: { a: Attempt; taskId: string; text: string; onSave: (a: Attempt, t: string, s: number, m: number, c: string) => Promise<void> }) {
  const f = a.feedback?.[taskId];
  const [score, setScore] = useState(f?.score ?? 0);
  const [max, setMax] = useState(f?.max ?? (taskId.startsWith('s3') || taskId.endsWith('s3') ? 20 : 40));
  const [comment, setComment] = useState(f?.comment ?? '');
  return (
    <div className="card block notecard">
      <div className="bh"><span className="modchip">Schreiben · {taskId}</span></div>
      <p style={{ whiteSpace: 'pre-wrap' }}>{text || <i className="dim">(leer)</i>}</p>
      <div className="row">
        <label className="row small">Punkte <input type="number" min={0} max={max} value={score} onChange={(e) => setScore(Number(e.target.value))} style={{ width: 80 }} /></label>
        <label className="row small">von <input type="number" min={1} value={max} onChange={(e) => setMax(Number(e.target.value))} style={{ width: 80 }} /></label>
      </div>
      <textarea className="writebox" rows={4} value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Kommentar für den Kandidaten" />
      <div className="actions"><button className="btn" onClick={() => void onSave(a, taskId, score, max, comment)}>Korrektur speichern</button></div>
    </div>
  );
}

export default function Page({ params }: { params: Promise<{ uid: string }> }) {
  const { uid } = use(params);
  return <Guard admin><Detail uid={uid} /></Guard>;
}
