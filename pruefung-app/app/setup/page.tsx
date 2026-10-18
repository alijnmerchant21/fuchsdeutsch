'use client';
/* Welcome form for new candidates (and "Plan anpassen" later). After it comes Mock Test 1. */
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Guard } from '@/components/Guard';
import { LessonBar, LessonHead } from '@/components/Lesson';
import { LIVE_MODULES, MODULES } from '@/lib/content';
import { LEVELS, LEVEL_IDS, priceLine, type Level } from '@/lib/levels';
import { addDays, daysBetween, today } from '@/lib/dates';
import { db } from '@/lib/db';
import { blockLength } from '@/lib/plan';
import { useStore } from '@/lib/store';
import type { Candidate, Module } from '@/lib/types';
import { useLang, useT } from '@/lib/lang';

const DAYS: [number, string, string][] = [[1, 'Mo', 'Mon'], [2, 'Di', 'Tue'], [3, 'Mi', 'Wed'], [4, 'Do', 'Thu'], [5, 'Fr', 'Fri'], [6, 'Sa', 'Sat'], [0, 'So', 'Sun']];
const MINS = [15, 30, 45, 60, 90];
const LANGS: [string, string][] = [['Englisch', 'English'], ['Hindi', 'Hindi'], ['Urdu', 'Urdu'], ['Arabisch', 'Arabic'], ['Türkisch', 'Turkish'], ['Spanisch', 'Spanish'], ['Französisch', 'French'], ['Russisch', 'Russian'], ['Ukrainisch', 'Ukrainian'], ['Persisch', 'Persian'], ['Chinesisch', 'Chinese'], ['Andere', 'Other']];
const TYPES: [NonNullable<Candidate['attempt_type']>, string, string][] = [
  ['erst', 'Erste Prüfung', 'First time'], ['wiederholung', 'Wiederholung', 'Retake'], ['offen', 'Noch nicht angemeldet', 'Not booked yet'],
];

function Setup() {
  const { user, candidate, attempts, reload, level: curLevel } = useStore();
  const { lang: ui, setHelp } = useLang();
  const t = useT();
  const router = useRouter();
  const isNew = !candidate;
  const [level, setLevel] = useState<Level>(candidate ? curLevel : 'b1');
  const L = LEVELS[level];
  const [name, setName] = useState(candidate?.name || (user!.name.includes('@') ? '' : user!.name));
  const [date, setDate] = useState(candidate?.exam_date || '');
  const [center, setCenter] = useState(candidate?.exam_center ?? '');
  const [lang, setLang] = useState(candidate?.first_language ?? '');
  const [type, setType] = useState<Candidate['attempt_type']>(candidate?.attempt_type ?? 'erst');
  const [days, setDays] = useState<number[]>(candidate?.study_days ?? [1, 2, 3, 4, 5]);
  const [mins, setMins] = useState(candidate?.minutes_per_day ?? 30);
  const [mods, setMods] = useState<Module[]>(candidate?.modules ?? ['hoeren', 'lesen', 'schreiben']);
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);

  const left = date ? daysBetween(today(), date) : 0;
  const toggle = <T,>(list: T[], v: T) => (list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) { setErr(t('Bitte deinen Vornamen eintragen.', 'Please enter your first name.')); return; }
    if (!date || left < 1) { setErr(t('Bitte ein Prüfungsdatum in der Zukunft wählen. Noch nicht angemeldet? Nimm dein Wunschdatum.', 'Please pick an exam date in the future. Not booked yet? Use the date you are aiming for.')); return; }
    if (!days.length || (L.modular && !mods.length)) { setErr(t('Bitte mindestens einen Lerntag und ein Modul wählen.', 'Please pick at least one study day and one module.')); return; }
    setBusy(true);
    try {
      await db.saveCandidate({
        user_id: user!.id, email: user!.email, name: name.trim(), exam_date: date, study_days: days, minutes_per_day: mins, modules: L.modular ? mods : LIVE_MODULES, level,
        exam_center: center.trim() || null, first_language: lang || null, attempt_type: type,
      });
      // Chose English here? Then English help is on inside the exam (they can turn it off any time).
      if (isNew) setHelp(ui === 'en');
      await reload();
      router.push(attempts.some((a) => a.kind === 'diagnose' && a.ref === (level === 'b1' ? 'diagnose' : `diagnose-${level}`)) ? '/' : '/diagnose');
    } catch (e2) { setErr((e2 as Error).message); setBusy(false); }
  };

  return (
    <>
      {!isNew && <LessonBar />}
      <LessonHead hue="mint" label={isNew ? `${t('Willkommen', 'Welcome')}${name ? ', ' + name : ''}!` : undefined}
        title={isNew ? t('Kurz zu dir', 'A bit about you') : t('Plan anpassen', 'Adjust your plan')}
        sub={isNew ? t('Zwei Minuten. Danach startet dein kostenloser Mock Test.', 'Two minutes. Then your free mock test starts.')
          : t('Wenn du dein Datum änderst, passen wir deinen nächsten Block an.', 'If you change your date, we adjust your next block.')} />
      <form className="card formcard" onSubmit={save}>
        <label className="field">{t('Vorname', 'First name')}<input value={name} onChange={(e) => setName(e.target.value)} required autoComplete="given-name" /></label>
        <div className="field">{t('Welche Prüfung machst du?', 'Which exam are you taking?')}
          <div className="chips levelpick">{LEVEL_IDS.map((l) => (
            <button key={l} type="button" className="chip" aria-pressed={level === l} onClick={() => setLevel(l)}>
              <b>{LEVELS[l].short}</b><small>{LEVELS[l].exam.replace('Goethe-Zertifikat ', 'Goethe ')}</small>
            </button>
          ))}</div>
          {!isNew && level !== curLevel && <small>{t('Neue Stufe: Du startest dort mit einem eigenen kostenlosen Mock Test.', 'New level: you start there with its own free mock test.')}</small>}
        </div>
        <div className="field">{t(`Ist das deine erste ${L.short}-Prüfung?`, `Is this your first ${L.short} exam?`)}
          <div className="chips">{TYPES.map(([v, de, en]) => <button key={v} type="button" className="chip" aria-pressed={type === v} onClick={() => setType(v)}>{t(de, en)}</button>)}</div>
        </div>
        <label className="field">{type === 'offen' ? t('Wann möchtest du die Prüfung machen?', 'When do you want to take the exam?') : t('Wann ist deine Prüfung?', 'When is your exam?')}
          <input type="date" value={date} min={addDays(today(), 1)} onChange={(e) => setDate(e.target.value)} required lang={ui === 'en' ? 'en' : 'de'} />
          {left > 0 && <small>{t(`Noch ${left} Tage. Deine Übungsblöcke dauern je ${blockLength(left)} Tage.`, `${left} days to go. Each practice block lasts ${blockLength(left)} days.`)}</small>}
        </label>
        <label className="field">{t('Wo machst du die Prüfung?', 'Where are you taking the exam?')} <small>{t('optional, z. B. Goethe-Institut München', 'optional, e.g. Goethe-Institut Munich')}</small>
          <input value={center} onChange={(e) => setCenter(e.target.value)} />
        </label>
        <label className="field">{t('Deine Erstsprache', 'Your first language')} <small>{t('optional, hilft uns bei typischen Fehlern', 'optional, helps us spot typical mistakes')}</small>
          <select value={lang} onChange={(e) => setLang(e.target.value)}>
            <option value="">{t('Bitte wählen', 'Please choose')}</option>
            {LANGS.map(([de, en]) => <option key={de} value={de}>{t(de, en)}</option>)}
          </select>
        </label>
        {!L.modular && <div className="field">{t('Module', 'Modules')}
          <small>{t(`Die ${L.short}-Prüfung ist eine Gesamtprüfung: Hören, Lesen und Schreiben üben wir zusammen, Sprechen kommt bald. ${priceLine(level, false)}. In der Beta kostenlos.`, `The ${L.short} exam is scored as one exam: we practice listening, reading and writing together, speaking comes soon. ${priceLine(level, true)}. Free during the beta.`)}</small>
        </div>}
        {L.modular && <div className="field">{t('Welche Module möchtest du üben?', 'Which modules do you want to practice?')}
          <div className="chips">{MODULES.map((m) => (
            <button key={m.id} type="button" className="chip" disabled={!m.live} aria-pressed={mods.includes(m.id)} onClick={() => setMods(toggle(mods, m.id))}>
              {t(m.name, m.en.replace(', coming soon', ''))}{!m.live && t(' · bald', ' · soon')}
            </button>
          ))}</div>
          <small>{type === 'wiederholung' ? t('Wähl nur die Module, die du wiederholst. ', 'Pick only the modules you are retaking. ') : ''}{t(`${priceLine(level, false)}. In der Beta kostenlos.`, `${priceLine(level, true)}. Free during the beta.`)}</small>
        </div>}
        <div className="field">{t('An welchen Tagen übst du?', 'Which days do you practice?')}
          <div className="chips">{DAYS.map(([d, de, en]) => <button key={d} type="button" className="chip" aria-pressed={days.includes(d)} onClick={() => setDays(toggle(days, d))}>{t(de, en)}</button>)}</div>
        </div>
        <div className="field">{t('Wie lange pro Tag?', 'How long per day?')}
          <div className="chips">{MINS.map((m) => <button key={m} type="button" className="chip" aria-pressed={mins === m} onClick={() => setMins(m)}>{m} {t('Min.', 'min')}</button>)}</div>
        </div>
        {err && <p className="msg-err">{err}</p>}
        <div className="actions">
          <button className="btn big" disabled={busy}>{busy ? t('Speichern …', 'Saving …') : isNew ? t('Weiter zum Mock Test', 'Continue to the mock test') : t('Speichern', 'Save')}</button>
        </div>
      </form>
    </>
  );
}

export default function Page() { return <Guard><Setup /></Guard>; }
