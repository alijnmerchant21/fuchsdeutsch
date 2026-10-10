'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Fox } from '@/components/Fox';
import { RequireUser } from '@/components/Guard';
import { course } from '@/content/course';
import { games } from '@/content/games';
import { isExercise } from '@/content/types';
import { DEMO_MODE } from '@/lib/config';
import { useStore } from '@/lib/store';
import { supabase } from '@/lib/supabase';

interface Row { id: string; email: string; name: string; xp: number; streak: number; last_active: string | null; created_at: string }

function Admin() {
  const { isAdmin, adminView, setAdminView, setDemoAdmin } = useStore();
  const [rows, setRows] = useState<Row[] | null>(null);
  useEffect(() => {
    const sb = supabase();
    if (!sb || !isAdmin) return;
    void sb.from('profiles').select('id,email,name,xp,streak,last_active,created_at').order('created_at', { ascending: false }).limit(200)
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
          <h2>Ganzen Kurs ohne Sperren ansehen</h2>
          <p className="muted">Wenn das an ist, sind alle Abschnitte, Prüfungen und die Abschlussprüfung offen. Dein eigener Fortschritt ändert sich nicht.</p>
        </div>
        <div className="seg" role="group" aria-label="Admin-Ansicht">
          <button type="button" aria-pressed={adminView} onClick={() => setAdminView(true)}>An</button>
          <button type="button" aria-pressed={!adminView} onClick={() => setAdminView(false)}>Aus</button>
        </div>
      </div>
      {DEMO_MODE && <p><button type="button" className="link-btn" onClick={() => setDemoAdmin(false)}>Admin-Modus verlassen (Demo)</button></p>}

      <h2>Kursinhalt</h2>
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
          {ch.games.length > 0 && <p className="small">Spiele: {games.filter((g) => ch.games.includes(g.id)).map((g) => <Link key={g.id} href={`/spiele/${g.id}`} className="chip-btn">{g.emoji} {g.title}</Link>)}</p>}
        </details>
      ))}
      <p><Link href="/abschlusspruefung" className="btn btn-sm">Abschlussprüfung ansehen</Link></p>

      <h2>Lernende</h2>
      {DEMO_MODE ? <p className="muted">Im Demo-Modus gibt es keine Datenbank. Nach der Supabase-Einrichtung erscheint hier die Liste aller Konten mit E-Mail, XP, Serie und letzter Aktivität.</p> : (
        <div className="card table-wrap">
          <table>
            <thead><tr><th>Name</th><th>E-Mail</th><th>XP</th><th>Serie</th><th>Zuletzt aktiv</th><th>Dabei seit</th></tr></thead>
            <tbody>
              {(rows || []).map((r) => <tr key={r.id}><td>{r.name}</td><td>{r.email}</td><td>{r.xp}</td><td>{r.streak}</td><td>{r.last_active || 'noch nie'}</td><td>{new Date(r.created_at).toLocaleDateString('de-DE')}</td></tr>)}
              {rows && rows.length === 0 && <tr><td colSpan={6}>Noch keine Konten.</td></tr>}
              {!rows && <tr><td colSpan={6}>Lade …</td></tr>}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}

export default function Page() { return <RequireUser><Admin /></RequireUser>; }
