'use client';
/* Claim the "free until you pass" voucher: upload the Goethe result, mark passed / failed per module. */
import Link from 'next/link';
import { useState } from 'react';
import { Guard } from '@/components/Guard';
import { LessonBar, LessonHead } from '@/components/Lesson';
import { modName } from '@/lib/content';
import { today } from '@/lib/dates';
import { db } from '@/lib/db';
import { party } from '@/lib/fx';
import { coveredModules, guaranteeStatus } from '@/lib/guarantee';
import { En } from '@/lib/lang';
import { useStore } from '@/lib/store';
import type { Claim, Module } from '@/lib/types';

const MAX_MB = 5;

function Einloesen() {
  const { user, candidate, attempts, blocks, claims, reload } = useStore();
  const mods = (candidate?.modules ?? []).filter((m) => m !== 'sprechen') as Module[];
  const [taken, setTaken] = useState(candidate?.exam_date ?? '');
  const [received, setReceived] = useState(today());
  const [next, setNext] = useState('');
  const [results, setResults] = useState<Partial<Record<Module, boolean>>>({});
  const [file, setFile] = useState<File | null>(null);
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);

  if (!candidate) return <p className="dim">Bitte zuerst den Plan einrichten. <Link className="linkbtn" href="/setup">Plan</Link></p>;
  const last = claims[claims.length - 1];
  const st = guaranteeStatus(candidate, attempts, blocks, null);

  if (last) {
    return (
      <>
        <LessonBar />
        <LessonHead hue="mint" title="Dein Antrag ist da" sub="Den Stand siehst du auf deiner Übersicht." en="Your claim is in. You can follow it on your overview." />
        <div className={`guarstate ${last.status}`}>
          {last.status === 'pending' ? 'Wir prüfen dein Ergebnis.' : last.status === 'approved' ? `Gutschein aktiv bis ${last.voucher_until}.` : `Kein Gutschein: ${last.admin_note ?? ''}`}
        </div>
        <Link className="btn" href="/">Zur Übersicht</Link>
      </>
    );
  }
  if (!st.examPassed) {
    return (
      <>
        <LessonBar />
        <LessonHead hue="mint" title="Noch vor der Prüfung" sub={`Hochladen geht nach deinem Prüfungstag (${candidate.exam_date}).`} en="You can upload after your exam day." />
      </>
    );
  }

  const allSet = mods.every((m) => results[m] !== undefined);
  const failed = mods.filter((m) => results[m] === false);
  const preview: Claim = { id: '', user_id: user!.id, exam_taken_on: taken, result_received_on: received, results, file_path: '', file_name: '', status: 'pending', created_at: new Date().toISOString() };
  const covered = allSet ? coveredModules(guaranteeStatus(candidate, attempts, blocks, preview), preview) : [];

  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setErr('');
    if (!file) { setErr('Bitte dein Ergebnis als PDF oder Foto hochladen.'); return; }
    if (file.size > MAX_MB * 1024 * 1024) { setErr(`Die Datei ist zu groß (max. ${MAX_MB} MB).`); return; }
    if (!allSet) { setErr('Bitte bei jedem Modul „bestanden“ oder „nicht bestanden“ wählen.'); return; }
    if (received > today() || taken > today()) { setErr('Die Daten dürfen nicht in der Zukunft liegen.'); return; }
    setBusy(true);
    try {
      await db.submitClaim({ user_id: user!.id, exam_taken_on: taken, result_received_on: received, results, next_exam_date: next || null, file_name: file.name }, file);
      if (!failed.length) party();
      await reload();
    } catch (e2) { setErr((e2 as Error).message); setBusy(false); }
  };

  return (
    <>
      <LessonBar />
      <LessonHead hue="mint" label="Bestehensgarantie" title="Ergebnis hochladen"
        sub="Lade deinen Ergebnisbogen von Goethe hoch und sag uns, welche Module du bestanden hast."
        en="Upload your Goethe result letter and tell us which modules you passed." />
      <form className="card formcard" onSubmit={submit}>
        <label className={`drop ${file ? 'has' : ''}`}>
          <input type="file" accept="application/pdf,image/*" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
          <b>{file ? `📄 ${file.name}` : 'Ergebnis als PDF oder Foto wählen'}</b>
          <span className="small dim">{file ? `${(file.size / 1024 / 1024).toFixed(1)} MB` : `Max. ${MAX_MB} MB. Nur wir sehen die Datei. Sie dient nur der Prüfung deines Antrags.`}</span>
          <En>{file ? '' : `PDF or photo, max ${MAX_MB} MB. Only we can see it.`}</En>
        </label>

        <div className="field" style={{ marginTop: 18 }}>Ergebnis pro Modul <En>Result per module</En>
          <div className="modres">{mods.map((m) => (
            <div key={m}><b>{modName(m)}</b>
              <div className="chips">
                <button type="button" className="chip" aria-pressed={results[m] === true} onClick={() => setResults({ ...results, [m]: true })}>bestanden</button>
                <button type="button" className="chip" aria-pressed={results[m] === false} onClick={() => setResults({ ...results, [m]: false })}>nicht bestanden</button>
              </div>
            </div>
          ))}</div>
        </div>

        <label className="field">Prüfung abgelegt am <En>Exam taken on</En><input type="date" value={taken} max={today()} onChange={(e) => setTaken(e.target.value)} required /></label>
        <label className="field">Ergebnis erhalten am <En>Result received on</En><input type="date" value={received} max={today()} onChange={(e) => setReceived(e.target.value)} required /></label>
        {failed.length > 0 && (
          <label className="field">Nächster Prüfungstermin <small>falls schon bekannt</small> <En>Next exam date, if known</En>
            <input type="date" value={next} min={today()} onChange={(e) => setNext(e.target.value)} />
          </label>
        )}

        {allSet && failed.length > 0 && (
          <div className="covered">
            {covered.length
              ? <><b>Nach deinem Verlauf deckt der Gutschein: {covered.map(modName).join(', ')}.</b> Wir prüfen das noch einmal mit deinem Ergebnisbogen.<En block>Based on your history, the voucher covers these modules. We double-check with your result letter.</En></>
              : <><b>Nach deinem Verlauf sind die Bedingungen für {failed.map(modName).join(', ')} nicht erfüllt.</b> Du kannst trotzdem einreichen, wir schauen es uns an.<En block>Based on your history the conditions are not met for these modules. You can still submit and we will take a look.</En></>}
          </div>
        )}
        {allSet && !failed.length && <div className="covered"><b>Glückwunsch, alles bestanden! 🎉</b> Lade dein Ergebnis trotzdem hoch, damit wir es feiern können.<En block>Congratulations, you passed everything!</En></div>}

        {err && <p className="msg-err">{err}</p>}
        <div className="actions"><button className="btn big" disabled={busy}>{busy ? 'Hochladen …' : 'Einreichen'}</button></div>
      </form>
    </>
  );
}

export default function Page() { return <Guard><Einloesen /></Guard>; }
