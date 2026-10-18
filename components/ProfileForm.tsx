'use client';
import { useState } from 'react';
import { courses } from '@/content/course';
import type { LearnerProfile } from '@/lib/store';
import type { UiLang } from '@/lib/lang';

// English first, so A1 beginners understand everything. The small German word is a free first lesson.
const genders: { id: LearnerProfile['gender']; en: string; de: string }[] = [
  { id: 'frau', en: 'Ms.', de: 'Frau' }, { id: 'mann', en: 'Mr.', de: 'Herr' }, { id: 'divers', en: 'Just my name', de: 'Divers' }, { id: 'none', en: 'Skip', de: 'Keine Angabe' },
];
const reasons: { id: string; en: string; de: string; icon: string }[] = [
  { id: 'job', en: 'Work', de: 'Arbeit', icon: '💼' },
  { id: 'study', en: 'University', de: 'Studium', icon: '🎓' },
  { id: 'living', en: 'Living there', de: 'Leben im Land', icon: '🏡' },
  { id: 'exam', en: 'An exam', de: 'Eine Prüfung', icon: '📝' },
  { id: 'family', en: 'Family or partner', de: 'Familie oder Partner', icon: '❤️' },
  { id: 'travel', en: 'Travel', de: 'Reisen', icon: '✈️' },
  { id: 'fun', en: 'Just for fun', de: 'Einfach so, zum Spaß', icon: '🎉' },
];
const goals = [
  { xp: 25, en: 'Casual', de: 'Locker', sub: '5 min a day', subDe: '5 Min. am Tag', icon: '🐢' },
  { xp: 50, en: 'Regular', de: 'Regelmäßig', sub: '10 min a day', subDe: '10 Min. am Tag', icon: '🦊' },
  { xp: 100, en: 'Serious', de: 'Intensiv', sub: '20 min a day', subDe: '20 Min. am Tag', icon: '🚀' },
];
const LEVEL_SUB: Record<string, [string, string]> = {
  A1: ['Complete beginner', 'Ich fange ganz neu an'], A2: ['I know the basics', 'Ich kenne die Grundlagen'],
  B1: ['I can get by', 'Ich komme im Alltag zurecht'], 'B2.1': ['I can already talk', 'Ich kann schon gut sprechen'],
};
const T = {
  en: {
    name: 'Your first name', namePh: 'e.g. Dana', course: 'Which course do you want to start with?', courseSub: 'You can switch any time.',
    why: 'Why are you learning German?', whySub: 'Pick one or more.', goal: 'Your daily goal', address: 'How should we address you?', optional: 'Optional.',
    lang: 'Your first language', langPh: 'e.g. Hindi, Turkish, English', board: 'Show my first name and points on the leaderboard',
    busy: 'One moment …', missing: 'Please add your first name and pick at least one reason.',
  },
  de: {
    name: 'Dein Vorname', namePh: 'z. B. Dana', course: 'Mit welchem Kurs möchtest du anfangen?', courseSub: 'Du kannst jederzeit wechseln.',
    why: 'Warum lernst du Deutsch?', whySub: 'Wähle einen oder mehrere Gründe.', goal: 'Dein Tagesziel', address: 'Wie dürfen wir dich ansprechen?', optional: 'Freiwillig.',
    lang: 'Deine Muttersprache', langPh: 'z. B. Hindi, Türkisch, Englisch', board: 'Meinen Vornamen und meine Punkte in der Bestenliste zeigen',
    busy: 'Einen Moment …', missing: 'Bitte gib deinen Vornamen ein und wähle mindestens einen Grund.',
  },
};

export interface ProfileFormProps {
  initial?: LearnerProfile;
  initialName?: string;
  initialCourse?: string;
  submitLabel: string;
  busy?: boolean;
  onSubmit: (profile: LearnerProfile, course: string) => void;
  /** Language of the form. Also stored, so English help starts on (en) or off (de). */
  lang?: UiLang;
}

/** The welcome questions. Used on the welcome page and in the beta sign-up on the homepage. */
export function ProfileForm({ initial: old, initialName = '', initialCourse, submitLabel, busy = false, onSubmit, lang: ui = 'en' }: ProfileFormProps) {
  const t = T[ui];
  const [name, setName] = useState(old?.name || initialName);
  const [gender, setGender] = useState<LearnerProfile['gender']>(old?.gender || 'none');
  const [why, setWhy] = useState<string[]>(old?.reasons || []);
  const [lang, setLang] = useState(old?.nativeLanguage || '');
  const [goal, setGoal] = useState(old?.goal || 50);
  const [board, setBoard] = useState(old?.board ?? true);
  const [level, setLevel] = useState(initialCourse || courses[0].id);
  const ok = name.trim().length >= 2 && why.length > 0;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ok || busy) return;
    onSubmit({ name: name.trim(), gender, reasons: why, nativeLanguage: lang.trim(), goal, board, uiLang: old?.uiLang || ui }, level);
  };

  return (
    <form className="card form" onSubmit={submit}>
      <label>{t.name}
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder={t.namePh} autoComplete="given-name" maxLength={40} required />
      </label>

      <fieldset>
        <legend>{t.course} <span className="en">{t.courseSub}</span></legend>
        <div className="choices goals-row">
          {courses.map((c) => (
            <button key={c.id} type="button" className="choice choice-big" aria-pressed={level === c.id} onClick={() => setLevel(c.id)}>
              <b>{c.level}</b><small>{(LEVEL_SUB[c.level] || LEVEL_SUB['B2.1'])[ui === 'de' ? 1 : 0]}</small>
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend>{t.why} <span className="en">{t.whySub}</span></legend>
        <div className="choices">
          {reasons.map((r) => (
            <button key={r.id} type="button" className="choice" aria-pressed={why.includes(r.id)}
              onClick={() => setWhy(why.includes(r.id) ? why.filter((x) => x !== r.id) : [...why, r.id])}>
              <span aria-hidden>{r.icon}</span> {ui === 'de' ? r.de : r.en}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend>{t.goal}</legend>
        <div className="choices goals-row">
          {goals.map((g) => (
            <button key={g.xp} type="button" className="choice choice-big" aria-pressed={goal === g.xp} onClick={() => setGoal(g.xp)}>
              <b><span aria-hidden>{g.icon}</span> {ui === 'de' ? g.de : g.en}</b><small>{ui === 'de' ? g.subDe : g.sub}</small>
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend>{t.address} <span className="en">{t.optional}</span></legend>
        <div className="choices">
          {genders.map((g) => (
            <button key={g.id} type="button" className="choice" aria-pressed={gender === g.id} onClick={() => setGender(g.id)}>
              {ui === 'de' ? g.de : <>{g.en} <span className="en">{g.de}</span></>}
            </button>
          ))}
        </div>
      </fieldset>

      <label>{t.lang} <span className="en">{t.optional}</span>
        <input value={lang} onChange={(e) => setLang(e.target.value)} placeholder={t.langPh} maxLength={40} />
      </label>

      <label className="check-row">
        <input type="checkbox" checked={board} onChange={(e) => setBoard(e.target.checked)} />
        <span>{t.board}</span>
      </label>

      <button className="btn btn-lg" type="submit" disabled={!ok || busy}>{busy ? t.busy : submitLabel}</button>
      {!ok && <p className="muted small">{t.missing}</p>}
    </form>
  );
}
