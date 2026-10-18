'use client';
/* One exam set as a card, built like the B1-Trainer: answer, mark sure/guessed, check, then see
   the solution with the marked sentence and the transcript. */
import { levelOf, teilInfoOf, trapLabel } from '@/lib/content';
import { countWords, isRight } from '@/lib/score';
import type { ExamSet, Item } from '@/lib/types';
import { ExamAudio } from './ExamAudio';
import { Reading, Rich, safeHtml } from './Rich';
import { Timer } from './Timer';
import { asset } from '@/lib/config';
import { En, INSTR_EN } from '@/lib/lang';

export type Mode = 'exam' | 'practice' | 'review';
export interface SetState { ans: Record<string, string>; conf: Record<string, 's' | 'g'> }

interface Props {
  set: ExamSet;
  mode: Mode;
  state: SetState;
  onAnswer?: (n: number, v: string) => void;
  onConf?: (n: number, c: 's' | 'g') => void;
  checked?: boolean;
  onCheck?: () => void;
  onReset?: () => void;
  writing?: Record<string, string>;
  onWrite?: (taskId: string, text: string) => void;
  feedback?: Record<string, { score: number; max: number; comment: string }> | null;
  step?: number;
  anchor?: string;
}

const optsOf = (set: ExamSet, it: Item): [string, string][] =>
  it.type === 'rf' ? [['r', 'Richtig'], ['f', 'Falsch']]
    : it.type === 'jn' ? [['ja', 'Ja'], ['nein', 'Nein']]
      : ((it.type === 'who' ? set.who : it.opts) ?? []).map((o, i) => ['abcdef'[i], o] as [string, string]);

const labelOf = (set: ExamSet, it: Item, v?: string) => {
  if (!v) return '–';
  if (it.type === 'txt') return it.a.split('|')[0];
  if (it.type === 'ad') return v === '0' ? '0 (keine Anzeige)' : `${v}) ${set.ads?.find((a) => a.k === v)?.title ?? ''}`;
  const o = optsOf(set, it).find((x) => x[0] === v);
  if (!o) return v;
  return it.type === 'rf' || it.type === 'jn' ? o[1] : `${v}) ${o[1]}`;
};

function ItemRow({ set, it, mode, state, checked, onAnswer, onConf, bare }: {
  set: ExamSet; it: Item; mode: Mode; state: SetState; checked: boolean; bare?: boolean;
  onAnswer?: (n: number, v: string) => void; onConf?: (n: number, c: 's' | 'g') => void;
}) {
  const v = state.ans[String(it.n)];
  const c = state.conf[String(it.n)];
  const ok = isRight(it, v);
  const col = it.type === 'abc' || it.type === 'who';
  const trap = trapLabel(set.module, it.trap);
  return (
    <div className={`item ${checked ? (ok ? 'is-ok' : 'is-no') : ''}`}>
      {!bare && <div className="q"><span className="num">{it.n}</span><Rich text={it.q} /></div>}
      {it.type === 'txt' ? (
        <input className="txtans" value={v ?? ''} disabled={checked} onChange={(e) => onAnswer?.(it.n, e.target.value)} aria-label={it.q ?? `Feld ${it.n}`}
          spellCheck={false} autoCorrect="off" autoCapitalize="off" autoComplete="off" />
      ) : it.type === 'ad' ? (
        <select value={v ?? ''} disabled={checked} onChange={(e) => onAnswer?.(it.n, e.target.value)} aria-label={`Lösung für ${it.n}`}>
          <option value="">{set.noZero ? 'Bitte wählen …' : 'Anzeige wählen …'}</option>
          {(set.ads ?? []).map((a) => <option key={a.k} value={a.k}>{a.k}) {a.title.length > 70 ? a.title.slice(0, 68) + ' …' : a.title}</option>)}
          {!set.noZero && <option value="0">0: keine Anzeige passt</option>}
        </select>
      ) : (
        <div className={`opts ${col ? 'abc' : ''}`}>
          {optsOf(set, it).map(([k, l]) => {
            const cls = checked ? (k === it.a ? 'right' : v === k ? 'wrong' : '') : v === k ? 'sel' : '';
            return <button key={k} type="button" className={`opt ${cls}`} disabled={checked} onClick={() => onAnswer?.(it.n, k)}>{col && <i>{k}</i>}{l}</button>;
          })}
        </div>
      )}
      {it.type !== 'txt' && (mode !== 'review' || c) ? (
        <div className="conf"><span>Wie sicher? <En>(sure or guessed?)</En></span>
          <button type="button" className={`cbtn ${c === 's' ? 'on' : ''}`} disabled={checked} onClick={() => onConf?.(it.n, 's')}>sicher</button>
          <button type="button" className={`cbtn ${c === 'g' ? 'on' : ''}`} disabled={checked} onClick={() => onConf?.(it.n, 'g')}>geraten</button>
        </div>
      ) : null}
      {checked && (
        <div className={`why ${ok ? '' : 'no'}`}>
          {ok ? '✓ Richtig' : <>✗ Lösung: <b>{labelOf(set, it, it.a)}</b></>}
          {!ok && c === 's' && <> <span className="mtag">sicher, aber falsch</span></>}
          {it.why && <><br /><Rich text={it.why} /></>}
          {trap && <> <span className="traptag" title={trap[1]}>{trap[0]}</span> <En>{trap[1]}</En></>}
        </div>
      )}
    </div>
  );
}

function scriptHtml(set: ExamSet, script: [string, string][], marks: { ev: string; ok: boolean; n: number }[]) {
  const multi = new Set(script.map((l) => l[0])).size > 1;
  let html = script.map(([sp, t]) => `<p>${multi ? `<b class="spk">${safeHtml(set.speakers?.[sp] ?? sp)}:</b> ` : ''}${safeHtml(t)}</p>`).join('');
  for (const m of marks) {
    const e = safeHtml(m.ev); const i = html.indexOf(e);
    if (e && i >= 0) html = html.slice(0, i) + `<mark class="ev ${m.ok ? 'ok' : 'no'}"><sup>${m.n}</sup>${e}</mark>` + html.slice(i + e.length);
  }
  return html;
}

export function SetCard(p: Props) {
  const { set, mode, state, step, anchor } = p;
  const checked = mode === 'review' || !!p.checked;
  const items = set.groups.flatMap((g) => g.items);
  const marks = (its: Item[]) => (checked ? its.filter((i) => i.ev).map((i) => ({ ev: i.ev!, ok: isRight(i, state.ans[String(i.n)]), n: i.n })) : []);
  const row = (it: Item, bare?: boolean) => <ItemRow key={it.n} set={set} it={it} mode={mode} state={state} checked={checked} onAnswer={p.onAnswer} onConf={p.onConf} bare={bare} />;
  const lvl = levelOf(set);
  const info = set.module === 'schreiben' ? null : teilInfoOf(set);
  const name = set.module === 'schreiben' ? `Schreiben · ${lvl === 'b1' ? 'Aufgabe' : 'Teil'} ${set.teil}` : info?.name ? `${set.module === 'hoeren' ? 'Hören' : 'Lesen'} ${info.name}` : `Teil ${set.teil}`;
  const instrEn = set.instr_en ?? (lvl === 'b1' ? INSTR_EN[`${set.module}-${set.teil}`] : undefined);
  const layout = set.layout ?? (lvl === 'b1' && set.module === 'lesen' ? (set.teil === 3 ? 'ads' : set.teil === 4 ? 'persons' : 'text') : 'text');
  const writes = set.module === 'schreiben' && !!set.tasks?.length;

  const open = items.filter((i) => !state.ans[String(i.n)]).length;
  const noConf = items.filter((i) => state.ans[String(i.n)] && !state.conf[String(i.n)]).length;
  const right = items.filter((i) => isRight(i, state.ans[String(i.n)])).length;
  const sureWrong = items.filter((i) => !isRight(i, state.ans[String(i.n)]) && state.conf[String(i.n)] === 's').length;

  const sub = set.module === 'hoeren'
    ? (set.source === 'licensed' ? 'Originalaufnahme wie in der Prüfung' : (set.groups[0]?.plays ?? 1) > 1 ? 'Du hörst jeden Text zweimal' : 'Du hörst den Text nur einmal')
    : set.module === 'lesen' && info ? `${info.mins} Minuten in der Prüfung` : null;

  let body: React.ReactNode;
  if (writes) {
    body = (set.tasks ?? []).map((t) => {
      const text = p.writing?.[t.id] ?? '';
      const w = countWords(text);
      const fb = p.feedback?.[t.id];
      return (
        <div key={t.id}>
          <p className="intro">{set.instr}</p>
          <En as="p" block>{instrEn}</En>
          <p className="task">{t.situation}</p>
          <ul className="stratlist">{t.points.map((x) => <li key={x}>{x}</li>)}</ul>
          <textarea className="writebox" value={text} readOnly={checked} onChange={(e) => p.onWrite?.(t.id, e.target.value)}
            placeholder="Schreiben Sie hier …" rows={t.words > 50 ? 12 : 7} spellCheck={false} autoCorrect="off" autoCapitalize="off" />
          <p className={`small ${w < t.words * 0.8 ? 'dim' : ''}`}>{w} Wörter · Ziel: circa {t.words} <En>({w} words, aim for about {t.words})</En></p>
          {checked && (fb
            ? <div className={`result ${fb.score / fb.max >= 0.6 ? 'ok' : 'low'}`}><b>{fb.score} von {fb.max} Punkten</b><span style={{ whiteSpace: 'pre-wrap' }}>{fb.comment}</span></div>
            : <div className="result low"><b>Abgegeben</b><span>Wir korrigieren deinen Text nach den Goethe-Kriterien. Die Korrektur erscheint hier und in deinem Ergebnis.</span><En>We correct your text with the Goethe criteria. The correction appears here and in your result.</En></div>)}
        </div>
      );
    });
  } else if (set.module === 'hoeren') {
    body = (
      <>
        <p className="task">{set.instr}</p>
        <En as="p" block>{instrEn}</En>
        {set.who && <p className="whokey">{set.who.map((w, i) => <span key={w}><b>{'abcdef'[i]}</b> {w}</span>)}</p>}
        {set.groups.map((g, gi) => (
          <div className="hgroup" key={gi}>
            {(set.groups.length > 1 || set.teil !== 4) && g.title && <h4>{g.title}</h4>}
            {checked
              ? g.audio && <div className="freeplay"><audio controls preload="none" src={asset(g.audio)} /><span className="dim small">Jetzt beliebig oft hören.</span></div>
              : <ExamAudio src={g.audio} plays={g.plays} script={g.script} />}
            <div className="items">{g.items.map((i) => row(i))}</div>
            {checked && g.script?.length ? (
              <details className="transcript" open><summary>Text zum Mitlesen</summary>
                <div dangerouslySetInnerHTML={{ __html: scriptHtml(set, g.script, marks(g.items)) }} />
              </details>
            ) : null}
          </div>
        ))}
      </>
    );
  } else if (layout === 'ads') {
    const used = new Map<string, number>();
    for (const i of items) { const v = state.ans[String(i.n)]; if (v && v !== '0') used.set(v, (used.get(v) ?? 0) + 1); }
    body = (
      <>
        <p className="task">{set.instr}</p>
        <En as="p" block>{instrEn}</En>
        {set.topic && <p className="intro">{set.topic}</p>}
        {set.groups.filter((g) => g.body).map((g, gi) => <div key={gi}>{g.title && <h4>{g.title}</h4>}<Reading body={g.body!} marks={marks(g.items)} /></div>)}
        <div className="split t3">
          <div className="items">{items.map((i) => row(i))}</div>
          <div className={`ads ${(set.ads ?? []).every((x) => !x.body?.trim()) ? 'adlist' : ''}`}>{(set.ads ?? []).map((a) => {
            const forN = checked ? items.filter((i) => i.a === a.k).map((i) => i.n) : [];
            return (
              <div key={a.k} className={`ad ${checked && forN.length ? 'adok' : ''} ${!checked && (used.get(a.k) ?? 0) > 1 ? 'addup' : ''}`}>
                <span className="adk">{a.k}</span><b>{a.title}</b><br />{a.body}
                {forN.length > 0 && <span className="adfor">→ {forN.join(', ')}</span>}
              </div>
            );
          })}</div>
        </div>
      </>
    );
  } else if (layout === 'persons') {
    body = (
      <>
        <p className="task">{set.instr}</p>
        <En as="p" block>{instrEn}</En>
        {set.topic && <p className="intro">{set.topic}</p>}
        {set.groups.map((g, gi) => (
          <div className="person" key={gi}>
            <div className="pname">{g.items.map((i) => <span key={i.n} className="num">{i.n}</span>)}{g.title}</div>
            {g.body && <Reading body={g.body} marks={marks(g.items)} />}
            {g.items.map((i) => row(i, true))}
          </div>
        ))}
      </>
    );
  } else {
    body = (
      <>
        <p className="task">{set.instr}</p>
        <En as="p" block>{instrEn}</En>
        {set.topic && <p className="intro">{set.topic}</p>}
        {set.groups.map((g, gi) => (
          <div key={gi}>
            {g.title && <h4>{g.title}</h4>}
            <div className="split">
              {g.body && <Reading body={g.body} marks={marks(g.items)} />}
              <div className="items">{g.items.map((i) => row(i))}</div>
            </div>
          </div>
        ))}
      </>
    );
  }

  return (
    <section className="card block" id={anchor} data-step={step}>
      <header className="bh">
        <span className="modchip">{name}</span>
        <span className="row tight">
          {sub && <span className="mins">{sub}</span>}
          {mode === 'practice' && !checked && set.module === 'lesen' && info && <Timer minutes={0} />}
        </span>
      </header>
      {body}
      {checked && !writes && (
        <div className={`result ${right / Math.max(1, items.length) >= 0.6 ? 'ok' : 'low'}`}>
          <b>{right} von {items.length} richtig</b>
          <En>{right} of {items.length} correct{sureWrong ? `, ${sureWrong}× sure but wrong: read the marked sentence again` : ''}</En>
          <span>{sureWrong ? `${sureWrong}× sicher, aber falsch. ${set.module === 'hoeren' ? 'Hör diese Stellen noch einmal und lies den markierten Satz mit.' : 'Lies den markierten Satz noch einmal genau.'}` : 'Keine „sicher, aber falsch“. Sehr gut.'}</span>
        </div>
      )}
      {mode === 'practice' && (
        <div className="actions">
          {checked
            ? p.onReset && !writes && <button type="button" className="btn ghostbtn" onClick={p.onReset}>Nochmal versuchen</button>
            : <button type="button" className="btn" onClick={p.onCheck}>{writes ? 'Abgeben' : 'Auswerten'}</button>}
          {!checked && !writes && <span className="left">{open ? `${open} offen` : 'Alles beantwortet'}{noConf ? `, ${noConf}× sicher/geraten fehlt` : ''}</span>}
        </div>
      )}
    </section>
  );
}
