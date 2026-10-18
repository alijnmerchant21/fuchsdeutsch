'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Guard } from '@/components/Guard';
import { allOwnMocks, diagnoseFor, loadLicensed, modName, type Licensed } from '@/lib/content';
import { LEVEL_IDS } from '@/lib/levels';
import { daysBetween, fmt, today } from '@/lib/dates';
import { db } from '@/lib/db';
import { readiness } from '@/lib/score';
import type { Attempt, Block, Candidate, Claim } from '@/lib/types';

function Mocks() {
  const [lic, setLic] = useState<Licensed | null>(null);
  useEffect(() => { void loadLicensed().then(setLic); }, []);
  const own = allOwnMocks();
  return (
    <div className="card block">
      <h3>Mock Tests</h3>
      <p className="small dim">Vorschau für dich. Versteckte Tests sehen Kandidaten nicht, auch nicht im Export für Claude.</p>
      <table className="table"><tbody>
        {LEVEL_IDS.map((l) => <tr key={'d' + l}><td><b>{l.toUpperCase()}</b></td><td>Diagnose (Mock Test 1)</td><td>{diagnoseFor(l).sections.map((s) => `${s.title} ${s.minutes}`).join(' · ')} Min.</td><td><Link className="linkbtn" href={`/admin/mock/diag-${l}`}>ansehen</Link></td></tr>)}
        {own.map((t) => <tr key={t.id}><td><b>{t.id.slice(0, 2).toUpperCase()}</b></td><td>{t.title}</td><td>{t.sections.map((s) => `${s.title} ${s.minutes}`).join(' · ')} Min.</td><td><Link className="linkbtn" href={`/admin/mock/${t.id}`}>ansehen</Link></td></tr>)}
        {(lic?.tests ?? []).map((t) => <tr key={t.id}><td><b>B1</b></td><td>{t.title} {t.hidden && <span className="mtag">versteckt</span>}</td><td>{t.sections.map((s) => `${s.title} ${s.minutes}`).join(' · ')} Min.</td><td><Link className="linkbtn" href={`/admin/mock/${t.id}`}>ansehen</Link></td></tr>)}
      </tbody></table>
    </div>
  );
}

function Admin() {
  const [data, setData] = useState<{ c: Candidate[]; a: Attempt[]; b: Block[]; cl: Claim[] } | null>(null);
  const [err, setErr] = useState('');
  useEffect(() => { Promise.all([db.allCandidates(), db.allAttempts(), db.allBlocks(), db.allClaims()]).then(([c, a, b, cl]) => setData({ c, a, b, cl })).catch((e) => setErr(e.message)); }, []);
  if (err) return <p className="msg-err">{err}</p>;
  if (!data) return <p className="dim">Lädt …</p>;
  const t = today();
  const diagOnly = [...new Set(data.a.filter((a) => a.kind === 'diagnose').map((a) => a.user_id))].filter((u) => !data.c.some((c) => c.user_id === u));

  const rows = data.c.map((c) => {
    const att = data.a.filter((a) => a.user_id === c.user_id);
    const bl = data.b.filter((b) => b.user_id === c.user_id).sort((x, y) => x.seq - y.seq);
    const last = bl[bl.length - 1];
    const allDone = last && last.content.days.every((_, i) => att.some((a) => a.ref === `${last.id}:${i}`));
    const due = !last || last.ends_on < t || allDone;
    const toCorrect = att.filter((a) => Object.keys(a.writing ?? {}).length && !a.feedback).length;
    const claim = data.cl.some((x) => x.user_id === c.user_id && x.status === 'pending');
    return { c, att, last, due, toCorrect, claim, r: readiness(att) };
  }).sort((x, y) => Number(y.due) - Number(x.due) || x.c.exam_date.localeCompare(y.c.exam_date));

  return (
    <>
      <div className="lessonhead card hue-butter">
        <div className="tlabel">Admin</div>
        <h2>Kandidaten</h2>
        <p className="tsub">„Block fällig“ heißt: kein Block, Block zu Ende oder alles erledigt. Öffnen, für Claude exportieren, Antwort einfügen.</p>
      </div>
      <div className="card block">
        <table className="table">
          <thead><tr><th>Name</th><th>Prüfung</th><th>Module</th><th>Hören</th><th>Lesen</th><th>Schreiben</th><th>Block</th><th>Status</th></tr></thead>
          <tbody>{rows.map(({ c, last, due, toCorrect, claim, r }) => (
            <tr key={c.user_id}>
              <td><Link className="linkbtn" href={`/admin/${c.user_id}`}>{c.name || c.email}</Link><br /><span className="small dim">{c.email}</span></td>
              <td><b>{(c.level ?? 'b1').toUpperCase()}</b> · {fmt(c.exam_date)}<br /><span className="small dim">{daysBetween(t, c.exam_date)} Tage</span></td>
              <td>{c.modules.map((m) => <span key={m} className={`pill ${c.unlocked.includes(m) ? 'on' : ''}`}>{modName(m)}</span>)}</td>
              <td>{r.hoeren ?? '–'}</td><td>{r.lesen ?? '–'}</td><td>{r.schreiben ?? '–'}</td>
              <td>{last ? <>#{last.seq} bis {fmt(last.ends_on)}</> : '–'}</td>
              <td>{due && <span className="mtag">Block fällig</span>} {toCorrect > 0 && <span className="pill">{toCorrect} Schreiben</span>} {claim && <span className="mtag">Gutschein-Antrag</span>}</td>
            </tr>
          ))}</tbody>
        </table>
        {diagOnly.length > 0 && <p className="small dim">{diagOnly.length} Konto/Konten haben nur den Mock Test gemacht, ohne Plan.</p>}
      </div>
      <Mocks />
    </>
  );
}
export default function Page() { return <Guard admin><Admin /></Guard>; }
