'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { use, useEffect, useState } from 'react';
import { Guard } from '@/components/Guard';
import { LessonBar, LessonHead, StratCard, hueOf } from '@/components/Lesson';
import { ResultView } from '@/components/ResultView';
import { SetCard } from '@/components/SetCard';
import { TestRunner, type Finished } from '@/components/TestRunner';
import { modName, teilInfoOf } from '@/lib/content';
import { fmt, today } from '@/lib/dates';
import { db } from '@/lib/db';
import { emptyDraft, loadDraft, loadNotes, saveDraft, saveNote, type Draft } from '@/lib/local';
import { resolveDay } from '@/lib/resolve';
import { scoreTest } from '@/lib/score';
import { useStore } from '@/lib/store';
import type { ExamSet, TestDef } from '@/lib/types';
import { En } from '@/lib/lang';
import { party } from '@/lib/fx';

const dLong = (s: string) => new Date(s + 'T12:00').toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long' });

function Day({ id, idx }: { id: string; idx: number }) {
  const { user, blocks, attempts, reload } = useStore();
  const router = useRouter();
  const block = blocks.find((b) => b.id === id);
  const ref = `${id}:${idx}`;
  const [ctx, setCtx] = useState<{ test: TestDef | null; sets: Record<string, ExamSet> } | null>(null);
  const [draft, setDraft] = useState<Draft>(emptyDraft());
  const [retry, setRetry] = useState<Record<string, boolean>>({});
  const [note, setNote] = useState('');
  const [go, setGo] = useState(false);
  const [err, setErr] = useState('');

  useEffect(() => { if (block) void resolveDay(block, idx).then(setCtx); }, [block, idx]);
  useEffect(() => { if (user) { setDraft(loadDraft(user.id, ref)); setNote(loadNotes(user.id)[ref]?.text ?? ''); } }, [user, ref]);

  if (!block) return <p className="msg-err">Block nicht gefunden.</p>;
  const day = block.content.days[idx];
  if (!day) return <p className="msg-err">Tag nicht gefunden.</p>;
  const done = attempts.find((a) => a.ref === ref);
  const closed = block.ends_on < today();
  const notYet = day.date > today();
  const n = block.content.days.length;
  const isToday = day.date === today();
  const timed = !!day.test || day.sets.some((s) => s.startsWith('mock:'));
  const hue = hueOf(block.seq);
  const setIds = ctx?.test?.sections.flatMap((s) => s.sets) ?? [];

  // Strategy card before the first set of each Hören/Lesen Teil; the day's tips go on the first one.
  const blocksList: ({ kind: 'strat'; module: 'hoeren' | 'lesen'; teil: number; extra?: string[] } | { kind: 'set'; id: string })[] = [];
  const seen = new Set<string>();
  for (const sid of setIds) {
    const s = ctx?.sets[sid]; if (!s) continue;
    const k = `${s.module}-${s.teil}`;
    if (!timed && !done && s.module !== 'schreiben' && !seen.has(k)) { seen.add(k); blocksList.push({ kind: 'strat', module: s.module as 'hoeren' | 'lesen', teil: s.teil, extra: seen.size === 1 ? day.tips : undefined }); }
    blocksList.push({ kind: 'set', id: sid });
  }
  const stepName = (b: (typeof blocksList)[number]) => {
    if (b.kind === 'strat') return 'Strategie';
    const s = ctx?.sets[b.id]; if (!s) return '';
    return s.module === 'schreiben' ? `Schreiben ${s.teil}` : `${modName(s.module)} ${teilInfoOf(s)?.name.split(' · ')[0] ?? ''}`;
  };

  const head = (
    <>
      <LessonBar label={`Tag ${idx + 1} von ${n} · Block ${block.seq}`}
        prev={idx > 0 ? `/block/${id}/${idx - 1}` : null} next={idx < n - 1 ? `/block/${id}/${idx + 1}` : null} />
      <LessonHead hue={hue} label={`${isToday ? 'Heute, ' : ''}${dLong(day.date)}${day.test ? ' · Blocktest' : ''}`} title={day.title} done={!!done}
        en={day.en} steps={!timed && !done ? blocksList.map(stepName) : undefined}>
        {idx === 0 && block.content.note && <p className="weekintro">{block.content.note}</p>}
      </LessonHead>
    </>
  );

  if (done && !Object.keys(retry).length) {
    return (
      <>
        {head}
        <ResultView attempt={done} blocks={blocks} showReview={false}>
          {!timed && <div className="actions"><button className="btn ghostbtn" onClick={() => { const r: Record<string, boolean> = {}; setIds.forEach((s) => (r[s] = true)); setRetry(r); setDraft(emptyDraft()); }}>Nochmal üben</button><span className="left">Zählt nicht mehr für die Analyse.</span></div>}
        </ResultView>
        {ctx && setIds.map((sid, i) => ctx.sets[sid] && (
          <SetCard key={sid} set={ctx.sets[sid]} mode="review" step={i + 1} state={{ ans: done.answers[sid] ?? {}, conf: done.conf?.[sid] ?? {} }} writing={done.writing} feedback={done.feedback} />
        ))}
        <Footer />
      </>
    );
  }
  if (!done && closed) return <>{head}<div className="notice"><b>Dieser Block ist geschlossen</b>Die Zeit für diesen Block ist abgelaufen. Wir bauen den nächsten Block aus den Antworten, die du bis dahin gegeben hast.</div></>;
  if (notYet) return <>{head}<div className="notice pending"><b>Noch nicht offen</b>Dieser Tag öffnet sich am {fmt(day.date)}.</div></>;
  if (!ctx) return <>{head}<p className="dim">Lädt …</p></>;
  if (!ctx.test || !ctx.test.sections.length) return <>{head}<p className="msg-err">Für diesen Tag fehlen die Aufgaben. Bitte melde dich bei uns.</p></>;

  const save = async (r: Finished) => {
    try {
      const scores = scoreTest(ctx.test!, ctx.sets, r.answers);
      const kind = day.sets.some((s) => s.startsWith('mock:')) ? 'mock' : 'block';
      const aid = await db.saveAttempt({ user_id: user!.id, kind, ref, block_id: block.id, answers: r.answers, conf: r.conf, writing: r.writing, scores, started_at: r.started_at, finished_at: new Date().toISOString() });
      await reload();
      return aid;
    } catch (e) { setErr((e as Error).message); return null; }
  };

  // ---------- timed: block test or full mock ----------
  if (timed) {
    if (!go) {
      return (
        <>
          {head}
          <div className="donebar">
            <span className="dim">{ctx.test.sections.map((s) => `${s.title} ${s.minutes} Min.`).join(' · ')} · mit Zeitlimit wie in der Prüfung</span>
            <button className="btn big" onClick={() => setGo(true)}>Starten</button>
          </div>
        </>
      );
    }
    return <>{err && <p className="msg-err">Speichern fehlgeschlagen: {err}</p>}<TestRunner test={ctx.test} sets={ctx.sets} hue={hue} label={`Block ${block.seq} · ${day.title}`} onFinish={async (r) => { const aid = await save(r); if (aid) router.push(`/ergebnis/${aid}`); }} /></>;
  }

  // ---------- practice day: like a B1-Trainer lesson ----------
  const update = (d: Draft) => { setDraft(d); saveDraft(user!.id, ref, d); };
  const check = async (sid: string) => {
    const d = { ...draft, checked: { ...draft.checked, [sid]: true } };
    update(d);
    if (!done && setIds.every((s) => d.checked[s])) {
      const aid = await save({ answers: d.ans, conf: d.conf, writing: d.writing, started_at: new Date().toISOString() });
      if (aid) { update(emptyDraft()); party(); }
    }
  };
  const left = setIds.filter((s) => !draft.checked[s]).length;
  let step = 0;

  return (
    <>
      {head}
      {err && <p className="msg-err">Speichern fehlgeschlagen: {err}</p>}
      {blocksList.map((b, i) => {
        if (b.kind === 'strat') return <StratCard key={`s${i}`} module={b.module} teil={b.teil} extra={b.extra} step={++step} anchor={`b${i}`} />;
        const s = ctx.sets[b.id]; if (!s) return null;
        return (
          <SetCard key={b.id} set={s} mode="practice" step={++step} anchor={`b${i}`}
            state={{ ans: draft.ans[b.id] ?? {}, conf: draft.conf[b.id] ?? {} }} checked={!!draft.checked[b.id]}
            onAnswer={(nn, v) => update({ ...draft, ans: { ...draft.ans, [b.id]: { ...draft.ans[b.id], [String(nn)]: v } } })}
            onConf={(nn, c) => update({ ...draft, conf: { ...draft.conf, [b.id]: { ...draft.conf[b.id], [String(nn)]: c } } })}
            writing={draft.writing} onWrite={(t, text) => update({ ...draft, writing: { ...draft.writing, [t]: text } })}
            onCheck={() => void check(b.id)}
            onReset={() => update({ ...draft, ans: { ...draft.ans, [b.id]: {} }, conf: { ...draft.conf, [b.id]: {} }, checked: { ...draft.checked, [b.id]: false } })} />
        );
      })}
      <section className="card block notecard">
        <label className="note">Mein Fehlerheft: Welche Falle hat mich heute erwischt? <En>My mistake notebook: which trap caught me today?</En>
          <input type="text" value={note} placeholder="z. B. „nicht Gleis 7, sondern Gleis 9“: Änderung überhört"
            onChange={(e) => { setNote(e.target.value); saveNote(user!.id, ref, day.title, day.date, e.target.value); }} />
        </label>
      </section>
      <div className="donebar">
        <span className="dim">{done ? 'Erledigt. Dein erstes Ergebnis ist gespeichert.' : left ? `Noch ${left} ${left === 1 ? 'Teil' : 'Teile'} auswerten, dann ist der Tag erledigt.` : 'Speichern …'}</span>
        {idx < n - 1 ? <Link className="linkbtn" href={`/block/${id}/${idx + 1}`}>Nächster Tag</Link> : <Link className="linkbtn" href="/">Übersicht</Link>}
      </div>
    </>
  );
}

function Footer() { return <div className="donebar"><Link className="back" href="/">Übersicht</Link></div>; }

export default function Page({ params }: { params: Promise<{ id: string; day: string }> }) {
  const { id, day } = use(params);
  return <Guard><Day id={id} idx={Number(day)} /></Guard>;
}
