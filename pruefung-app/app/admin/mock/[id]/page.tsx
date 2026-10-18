'use client';
/* Admin preview of a full mock test (own or licensed, also hidden ones): every set as a practice card. */
import Link from 'next/link';
import { use, useEffect, useState } from 'react';
import { Guard } from '@/components/Guard';
import { SetCard, type SetState } from '@/components/SetCard';
import { bank, findMock, loadLicensed, type Licensed } from '@/lib/content';
import type { ExamSet } from '@/lib/types';

function Preview({ id }: { id: string }) {
  const [lic, setLic] = useState<Licensed | null>(null);
  const [st, setSt] = useState<Record<string, SetState>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [writing, setWriting] = useState<Record<string, string>>({});
  useEffect(() => { void loadLicensed().then(setLic); }, []);
  if (!lic) return <p className="dim">Lädt …</p>;
  const test = findMock(id, lic);
  if (!test) return <p className="msg-err">Mock {id} nicht gefunden.</p>;
  const sets: Record<string, ExamSet> = { ...lic.sets, ...bank };
  const hidden = (test as { hidden?: boolean }).hidden;
  return (
    <>
      <div className="lessonhead card hue-butter">
        <div className="tlabel"><Link className="linkbtn" href="/admin">‹ Admin</Link></div>
        <h2>{test.title}</h2>
        <p className="tsub">{test.en} · {test.sections.map((s) => `${s.title} ${s.minutes} Min.`).join(' · ')}{hidden ? ' · versteckt (nicht für Kandidaten)' : ''}</p>
      </div>
      {test.sections.flatMap((sec) => sec.sets).map((sid) => {
        const s = sets[sid];
        if (!s) return <p key={sid} className="msg-err">Set {sid} fehlt.</p>;
        const state = st[sid] ?? { ans: {}, conf: {} };
        return (
          <SetCard key={sid} set={s} mode="practice" state={state} checked={!!checked[sid]}
            onAnswer={(n, v) => setSt((x) => ({ ...x, [sid]: { ...state, ans: { ...state.ans, [String(n)]: v } } }))}
            onConf={(n, c) => setSt((x) => ({ ...x, [sid]: { ...state, conf: { ...state.conf, [String(n)]: c } } }))}
            onCheck={() => setChecked((x) => ({ ...x, [sid]: true }))}
            onReset={() => { setChecked((x) => ({ ...x, [sid]: false })); setSt((x) => ({ ...x, [sid]: { ans: {}, conf: {} } })); }}
            writing={writing} onWrite={(t, text) => setWriting((w) => ({ ...w, [t]: text }))} />
        );
      })}
    </>
  );
}

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return <Guard admin><Preview id={id} /></Guard>;
}
