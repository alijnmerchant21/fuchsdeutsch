'use client';
/* Admin: review a guarantee claim, then approve (voucher) or reject. */
import { useState } from 'react';
import { modName } from '@/lib/content';
import { db } from '@/lib/db';
import { coveredModules, guaranteeStatus, voucherUntil } from '@/lib/guarantee';
import type { Attempt, Block, Candidate, Claim, Module } from '@/lib/types';

export function ClaimReview({ claim, cand, attempts, blocks, onDone }: { claim: Claim; cand: Candidate; attempts: Attempt[]; blocks: Block[]; onDone: () => void }) {
  const st = guaranteeStatus(cand, attempts, blocks, claim);
  const covered = coveredModules(st, claim);
  const failed = (Object.entries(claim.results) as [Module, boolean][]).filter(([, p]) => !p).map(([m]) => m);
  const [mods, setMods] = useState<Module[]>(covered);
  const [next, setNext] = useState(claim.next_exam_date ?? '');
  const [until, setUntil] = useState(voucherUntil(claim.next_exam_date));
  const [note, setNote] = useState('');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');

  const open = async () => { try { window.open(await db.claimFileUrl(claim), '_blank', 'noopener'); } catch (e) { setErr((e as Error).message); } };
  const decide = async (status: 'approved' | 'rejected') => {
    if (status === 'approved' && !mods.length) { setErr('Mindestens ein Modul wählen oder ablehnen.'); return; }
    if (status === 'rejected' && !note.trim()) { setErr('Bitte einen Grund für die Ablehnung schreiben.'); return; }
    setBusy(true); setErr('');
    try { await db.decideClaim(claim, status, note.trim(), status === 'approved' ? until : null, status === 'approved' ? mods : [], status === 'approved' && next ? next : null); onDone(); }
    catch (e) { setErr((e as Error).message); setBusy(false); }
  };

  return (
    <div className="card adminsec guarcard">
      <div className="bh"><span className="modchip guarchip">🛡 Gutschein-Antrag</span><span className={`pill ${claim.status === 'approved' ? 'on' : ''}`}>{claim.status}</span></div>
      <p>Eingereicht am {claim.created_at.slice(0, 10)} · Prüfung am {claim.exam_taken_on} · Ergebnis erhalten am {claim.result_received_on}{claim.next_exam_date ? ` · nächster Termin ${claim.next_exam_date}` : ''}</p>
      <p>Ergebnis: {(Object.entries(claim.results) as [Module, boolean][]).map(([m, p]) => `${modName(m)} ${p ? '✓' : '✗'}`).join(' · ')}</p>
      <button className="btn ghostbtn" onClick={() => void open()}>📄 {claim.file_name} öffnen</button>
      <ul className="guarlist">{st.checks.map((c) => (
        <li key={c.id} className={c.ok ? 'ok' : ''}><span className="gmark">{c.ok ? '✓' : '○'}</span><span><b>{c.de}</b><small>{c.detailDe}</small></span></li>
      ))}</ul>
      <p><b>Laut Verlauf gedeckt:</b> {covered.length ? covered.map(modName).join(', ') : 'keins'}{failed.length ? ` (nicht bestanden: ${failed.map(modName).join(', ')})` : ' (alles bestanden)'}</p>
      {claim.status === 'pending' ? (
        <>
          <div className="field">Gutschein für<div className="chips">{failed.map((m) => (
            <button key={m} type="button" className="chip" aria-pressed={mods.includes(m)} onClick={() => setMods(mods.includes(m) ? mods.filter((x) => x !== m) : [...mods, m])}>{modName(m)}</button>
          ))}</div></div>
          <div className="row">
            <label className="field">Nächster Prüfungstermin<input type="date" value={next} onChange={(e) => { setNext(e.target.value); setUntil(voucherUntil(e.target.value)); }} /></label>
            <label className="field">Gutschein bis<input type="date" value={until} onChange={(e) => setUntil(e.target.value)} /></label>
          </div>
          <textarea className="writebox" rows={3} value={note} onChange={(e) => setNote(e.target.value)} placeholder="Nachricht an den Kandidaten (bei Ablehnung Pflicht)" />
          {err && <p className="msg-err">{err}</p>}
          <div className="actions">
            <button className="btn" disabled={busy || !failed.length} onClick={() => void decide('approved')}>Gutschein freigeben</button>
            <button className="btn ghostbtn" disabled={busy} onClick={() => void decide('rejected')}>Ablehnen</button>
          </div>
        </>
      ) : (
        <p className="small dim">Entschieden am {claim.decided_at?.slice(0, 10)}{claim.voucher_until ? ` · Gutschein bis ${claim.voucher_until} für ${(claim.voucher_modules ?? []).map(modName).join(', ')}` : ''}{claim.admin_note ? ` · „${claim.admin_note}“` : ''}</p>
      )}
    </div>
  );
}
