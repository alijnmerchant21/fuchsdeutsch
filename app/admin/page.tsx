'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Fox } from '@/components/Fox';
import { RequireUser } from '@/components/Guard';
import { courses } from '@/content/course';
import { isExercise } from '@/content/types';
import { DEMO_MODE } from '@/lib/config';
import { useStore } from '@/lib/store';
import { supabase } from '@/lib/supabase';
import { exportForClaude, listWriting, parseReviews, saveReview, type WritingSubmission } from '@/lib/writing';

interface Beta { email: string; profile: { name?: string; course?: string; reasons?: string[]; nativeLanguage?: string; goal?: number } | null; approved: boolean; created_at: string }

function BetaList() {
  const [rows, setRows] = useState<Beta[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<'waiting' | 'approved' | 'all'>('waiting');
  const load = () => {
    const sb = supabase();
    if (!sb) return;
    void sb.from('beta_signups').select('email,profile,approved,created_at').order('created_at', { ascending: true }).limit(1000)
      .then(({ data, error: err }) => { if (err) setError(err.message); else setRows((data as Beta[]) || []); });
  };
  useEffect(load, []);
  const setApproved = async (email: string, approved: boolean) => {
    const sb = supabase();
    if (!sb) return;
    const { error: err } = await sb.from('beta_signups').update({ approved, approved_at: approved ? new Date().toISOString() : null }).eq('email', email);
    if (err) setError(err.message); else setRows((r) => (r || []).map((x) => (x.email === email ? { ...x, approved } : x)));
  };
  const copy = () => {
    const list = (rows || []).filter((r) => r.approved).map((r) => r.email).join(', ');
    void navigator.clipboard?.writeText(list);
  };
  if (DEMO_MODE) return <p className="muted">Im Demo-Modus gibt es keine Warteliste. Nach der Supabase-Einrichtung und supabase/006_beta.sql erscheinen hier alle Anmeldungen.</p>;
  if (error) return <p className="muted">Die Warteliste ist noch nicht eingerichtet oder nicht lesbar ({error}). Führe in Supabase die Datei supabase/006_beta.sql aus.</p>;
  const waiting = (rows || []).filter((r) => !r.approved).length;
  const approved = (rows || []).filter((r) => r.approved).length;
  const shown = (rows || []).filter((r) => filter === 'all' || (filter === 'approved' ? r.approved : !r.approved));
  return (
    <>
      <div className="v3-row">
        <div className="seg" role="group" aria-label="Filter">
          <button type="button" aria-pressed={filter === 'waiting'} onClick={() => setFilter('waiting')}>Wartend ({waiting})</button>
          <button type="button" aria-pressed={filter === 'approved'} onClick={() => setFilter('approved')}>Freigegeben ({approved})</button>
          <button type="button" aria-pressed={filter === 'all'} onClick={() => setFilter('all')}>Alle</button>
        </div>
        <button type="button" className="link-btn" onClick={copy}>Freigegebene E-Mails kopieren</button>
      </div>
      <div className="card table-wrap">
        <table>
          <thead><tr><th>E-Mail</th><th>Name</th><th>Kurs</th><th>Warum Deutsch</th><th>Muttersprache</th><th>Angemeldet</th><th>Status</th></tr></thead>
          <tbody>
            {shown.map((r) => (
              <tr key={r.email}>
                <td>{r.email}</td><td>{r.profile?.name || <span className="muted">Fragen offen</span>}</td><td>{r.profile?.course || ''}</td><td>{(r.profile?.reasons || []).join(', ')}</td><td>{r.profile?.nativeLanguage || ''}</td>
                <td>{new Date(r.created_at).toLocaleDateString('de-DE')}</td>
                <td>{r.approved
                  ? <button type="button" className="link-btn" onClick={() => void setApproved(r.email, false)}>Freigegeben · zurücknehmen</button>
                  : <button type="button" className="btn btn-sm" onClick={() => void setApproved(r.email, true)}>Freigeben</button>}</td>
              </tr>
            ))}
            {rows && shown.length === 0 && <tr><td colSpan={7}>Keine Einträge.</td></tr>}
            {!rows && <tr><td colSpan={7}>Lade …</td></tr>}
          </tbody>
        </table>
      </div>
      <p className="muted small">Freigegebene Personen können sich mit genau dieser E-Mail anmelden. Schick ihnen danach eine kurze E-Mail mit dem Link zur Seite.</p>
    </>
  );
}

/** Free writing: export open texts for Claude, paste the marking back. */
function WritingQueue() {
  const [filter, setFilter] = useState<'submitted' | 'reviewed'>('submitted');
  const [rows, setRows] = useState<WritingSubmission[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [paste, setPaste] = useState('');
  const [msg, setMsg] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [busy, setBusy] = useState(false);
  const load = (f = filter) => { setRows(null); void listWriting(f).then((r) => { setRows(r.rows); setError(r.error || null); }); };
  useEffect(() => load(filter), [filter]); // eslint-disable-line react-hooks/exhaustive-deps

  const copy = () => {
    void navigator.clipboard?.writeText(exportForClaude(rows || [])).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2500); });
  };
  const save = async () => {
    const open = rows || [];
    const { ok, problems } = parseReviews(paste, open);
    if (!ok.length) { setMsg(problems.join(' · ') || 'Nichts zum Speichern.'); return; }
    setBusy(true);
    const failed: string[] = [];
    for (const r of ok) { const e = await saveReview(r.id, r); if (e) failed.push(`${r.id}: ${e}`); }
    setBusy(false);
    setMsg(`${ok.length - failed.length} Texte gespeichert.${problems.length ? ` Übersprungen: ${problems.join(' · ')}` : ''}${failed.length ? ` Fehler: ${failed.join(' · ')}` : ''}`);
    if (!failed.length) setPaste('');
    load();
  };

  if (error) return <p className="muted">Schreiben ist noch nicht eingerichtet oder nicht lesbar ({error}). Führe in Supabase die Datei supabase/007_writing.sql aus.</p>;
  return (
    <>
      <div className="v3-row">
        <div className="seg" role="group" aria-label="Filter">
          <button type="button" aria-pressed={filter === 'submitted'} onClick={() => setFilter('submitted')}>Offen{filter === 'submitted' && rows ? ` (${rows.length})` : ''}</button>
          <button type="button" aria-pressed={filter === 'reviewed'} onClick={() => setFilter('reviewed')}>Korrigiert</button>
        </div>
        {filter === 'submitted' && !!rows?.length && <button type="button" className="btn btn-sm" onClick={copy}>{copied ? 'Kopiert ✓' : 'Für Claude kopieren'}</button>}
      </div>
      <div className="card table-wrap">
        <table>
          <thead><tr><th>Wann</th><th>Wer</th><th>Kurs</th><th>Aufgabe</th><th>Wörter</th><th>Text</th>{filter === 'reviewed' && <th>Punkte</th>}</tr></thead>
          <tbody>
            {(rows || []).map((r) => (
              <tr key={r.id}>
                <td>{new Date(r.created_at).toLocaleDateString('de-DE')}</td><td>{r.name || r.email}</td><td>{r.level} · {r.chapter}</td>
                <td><Link href={`/kurs/${r.chapter}/uebungen`}>{r.block}</Link></td><td>{r.words}</td>
                <td><details><summary>{r.body.slice(0, 60)}{r.body.length > 60 ? '…' : ''}</summary><p className="write-body">{r.body}</p></details></td>
                {filter === 'reviewed' && <td>{r.score} / {r.max_score}</td>}
              </tr>
            ))}
            {rows && rows.length === 0 && <tr><td colSpan={7}>Keine Texte.</td></tr>}
            {!rows && <tr><td colSpan={7}>Lade …</td></tr>}
          </tbody>
        </table>
      </div>
      {filter === 'submitted' && !!rows?.length && (
        <div className="card form">
          <p className="muted small">1. „Für Claude kopieren“ drücken und alles in Claude einfügen. 2. Claudes Antwort (das JSON-Array) hier einfügen. 3. Speichern: Die Lernenden sehen Punkte und Korrekturen sofort.</p>
          <textarea className="write" rows={8} value={paste} onChange={(e) => setPaste(e.target.value)} placeholder='[{ "id": "…", "score": 14, "max_score": 20, "feedback": { … } }]' aria-label="Antwort von Claude" />
          <button type="button" className="btn" disabled={busy || !paste.trim()} onClick={() => void save()}>{busy ? 'Speichere …' : 'Korrekturen speichern'}</button>
          {msg && <p className="muted small" role="status">{msg}</p>}
        </div>
      )}
    </>
  );
}

interface Row { id: string; email: string; name: string; xp: number; streak: number; last_active: string | null; created_at: string; profile: { name?: string; gender?: string; reasons?: string[]; nativeLanguage?: string } | null }

function Admin() {
  const { isAdmin, adminView, setAdminView, setDemoAdmin } = useStore();
  const [rows, setRows] = useState<Row[] | null>(null);
  useEffect(() => {
    const sb = supabase();
    if (!sb || !isAdmin) return;
    void sb.from('profiles').select('id,email,name,xp,streak,last_active,created_at,profile:progress->profile').order('created_at', { ascending: false }).limit(200)
      .then(({ data }) => setRows((data as Row[]) || []));
  }, [isAdmin]);

  if (!isAdmin) {
    return (
      <main className="page narrow center">
        <Fox size={90} mood="wow" />
        <h1>Admin-Bereich</h1>
        {DEMO_MODE ? (
          <>
            <p className="lead">Im Demo-Modus kannst du den Admin-Zugang hier selbst einschalten. Mit Datenbank bekommen nur Konten mit dem Admin-Recht Zugang.</p>
            <button type="button" className="btn btn-lg" onClick={() => setDemoAdmin(true)}>Admin-Modus einschalten</button>
          </>
        ) : <p className="lead">Dein Konto hat kein Admin-Recht. Ein Admin kann es in der Datenbank setzen.</p>}
      </main>
    );
  }

  return (
    <main className="page">
      <h1>Admin</h1>
      <div className="card admin-switch">
        <div>
          <h2>Kurs als Admin durchsehen</h2>
          <p className="muted">Als Admin sind alle Abschnitte und Prüfungen immer offen. Hier kannst du die Lehrer-Ansicht in der Navigation ein- oder ausblenden. Dein Fortschritt wird nicht gezählt.</p>
        </div>
        <div className="seg" role="group" aria-label="Admin-Ansicht">
          <button type="button" aria-pressed={adminView} onClick={() => setAdminView(true)}>An</button>
          <button type="button" aria-pressed={!adminView} onClick={() => setAdminView(false)}>Aus</button>
        </div>
      </div>
      {DEMO_MODE && <p><button type="button" className="link-btn" onClick={() => setDemoAdmin(false)}>Admin-Modus verlassen (Demo)</button></p>}

      <h2>Beta-Warteliste</h2>
      <BetaList />

      <h2>Schreiben: Texte korrigieren</h2>
      <WritingQueue />

      <h2>Kursinhalt</h2>
      {courses.map((course) => (
      <section key={course.id}>
      <h3 className="admin-course">{course.title}</h3>
      {course.chapters.map((ch) => (
        <details key={ch.id} className="card outline" open={ch.sections.length > 0}>
          <summary><b>Kapitel {ch.number}: {ch.title}</b> <span className="muted small">{ch.sections.length ? `${ch.sections.length} Abschnitte, ${ch.exam.length} Prüfungsaufgaben` : 'in Arbeit'}</span></summary>
          <p className="muted small">{ch.theme}. {ch.grammar}</p>
          {ch.sections.length > 0 && (
            <table>
              <thead><tr><th>Abschnitt</th><th>Titel</th><th>Blöcke</th><th>Übungen</th><th>Hörtexte</th><th /></tr></thead>
              <tbody>
                {ch.sections.map((s) => (
                  <tr key={s.id}>
                    <th scope="row">{s.label}</th><td>{s.title}</td><td>{s.blocks.length}</td>
                    <td>{s.blocks.filter(isExercise).length}</td><td>{s.blocks.filter((b) => b.t === 'audio').length}</td>
                    <td><Link href={`/kurs/${ch.id}/${s.id}`}>Ansehen</Link></td>
                  </tr>
                ))}
                <tr><th scope="row">Prüfung</th><td>Kapitelprüfung</td><td>{ch.exam.length}</td><td>{ch.exam.length}</td><td>{ch.exam.filter((e) => e.stimulus?.t === 'audio').length}</td><td><Link href={`/kurs/${ch.id}/pruefung`}>Ansehen</Link></td></tr>
              </tbody>
            </table>
          )}
        </details>
      ))}
      <p><Link href={`/pruefung/${course.id}`} className="btn btn-sm">Abschlussprüfung {course.level} ansehen</Link></p>
      </section>
      ))}

      <h2>Lernende</h2>
      {DEMO_MODE ? <p className="muted">Im Demo-Modus gibt es keine Datenbank. Nach der Supabase-Einrichtung erscheint hier die Liste aller Konten mit E-Mail, Profilangaben, XP, Serie und letzter Aktivität.</p> : (
        <div className="card table-wrap">
          <table>
            <thead><tr><th>Name</th><th>E-Mail</th><th>Anrede</th><th>Warum Deutsch</th><th>Muttersprache</th><th>XP</th><th>Serie</th><th>Zuletzt aktiv</th><th>Dabei seit</th></tr></thead>
            <tbody>
              {(rows || []).map((r) => <tr key={r.id}><td>{r.profile?.name || r.name}</td><td>{r.email}</td><td>{r.profile?.gender || ''}</td><td>{(r.profile?.reasons || []).join(', ')}</td><td>{r.profile?.nativeLanguage || ''}</td><td>{r.xp}</td><td>{r.streak}</td><td>{r.last_active || 'noch nie'}</td><td>{new Date(r.created_at).toLocaleDateString('de-DE')}</td></tr>)}
              {rows && rows.length === 0 && <tr><td colSpan={9}>Noch keine Konten.</td></tr>}
              {!rows && <tr><td colSpan={9}>Lade …</td></tr>}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}

export default function Page() { return <RequireUser><Admin /></RequireUser>; }
