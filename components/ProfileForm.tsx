'use client';
import { useState } from 'react';
import { courses } from '@/content/course';
import type { LearnerProfile } from '@/lib/store';

// English first, so A1 beginners understand everything. The small German word is a free first lesson.
const genders: { id: LearnerProfile['gender']; en: string; de: string }[] = [
  { id: 'frau', en: 'Ms.', de: 'Frau' }, { id: 'mann', en: 'Mr.', de: 'Herr' }, { id: 'divers', en: 'Just my name', de: 'Divers' }, { id: 'none', en: 'Skip', de: 'Keine Angabe' },
];
const reasons: { id: string; en: string; icon: string }[] = [
  { id: 'job', en: 'Work', icon: '💼' },
  { id: 'study', en: 'University', icon: '🎓' },
  { id: 'living', en: 'Living there', icon: '🏡' },
  { id: 'exam', en: 'An exam', icon: '📝' },
  { id: 'family', en: 'Family or partner', icon: '❤️' },
  { id: 'travel', en: 'Travel', icon: '✈️' },
  { id: 'fun', en: 'Just for fun', icon: '🎉' },
];
const goals = [{ xp: 25, en: 'Casual', sub: '5 min a day', icon: '🐢' }, { xp: 50, en: 'Regular', sub: '10 min a day', icon: '🦊' }, { xp: 100, en: 'Serious', sub: '20 min a day', icon: '🚀' }];

export interface ProfileFormProps {
  initial?: LearnerProfile;
  initialName?: string;
  initialCourse?: string;
  submitLabel: string;
  busy?: boolean;
  onSubmit: (profile: LearnerProfile, course: string) => void;
}

/** The welcome questions. Used on the welcome page and in the beta sign-up on the homepage. */
export function ProfileForm({ initial: old, initialName = '', initialCourse, submitLabel, busy = false, onSubmit }: ProfileFormProps) {
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
    onSubmit({ name: name.trim(), gender, reasons: why, nativeLanguage: lang.trim(), goal, board }, level);
  };

  return (
    <form className="card form" onSubmit={submit}>
      <label>Your first name
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Dana" autoComplete="given-name" maxLength={40} required />
      </label>

      <fieldset>
        <legend>Which course do you want to start with? <span className="en">You can switch any time.</span></legend>
        <div className="choices goals-row">
          {courses.map((c) => (
            <button key={c.id} type="button" className="choice choice-big" aria-pressed={level === c.id} onClick={() => setLevel(c.id)}>
              <b>{c.level}</b><small>{c.level === 'A1' ? 'Complete beginner' : c.level === 'A2' ? 'I know the basics' : 'I can already talk'}</small>
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend>Why are you learning German? <span className="en">Pick one or more.</span></legend>
        <div className="choices">
          {reasons.map((r) => (
            <button key={r.id} type="button" className="choice" aria-pressed={why.includes(r.id)}
              onClick={() => setWhy(why.includes(r.id) ? why.filter((x) => x !== r.id) : [...why, r.id])}>
              <span aria-hidden>{r.icon}</span> {r.en}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend>Your daily goal</legend>
        <div className="choices goals-row">
          {goals.map((g) => (
            <button key={g.xp} type="button" className="choice choice-big" aria-pressed={goal === g.xp} onClick={() => setGoal(g.xp)}>
              <b><span aria-hidden>{g.icon}</span> {g.en}</b><small>{g.sub}</small>
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend>How should we address you? <span className="en">Optional.</span></legend>
        <div className="choices">
          {genders.map((g) => (
            <button key={g.id} type="button" className="choice" aria-pressed={gender === g.id} onClick={() => setGender(g.id)}>
              {g.en} <span className="en">{g.de}</span>
            </button>
          ))}
        </div>
      </fieldset>

      <label>Your first language <span className="en">Optional.</span>
        <input value={lang} onChange={(e) => setLang(e.target.value)} placeholder="e.g. Hindi, Turkish, English" maxLength={40} />
      </label>

      <label className="check-row">
        <input type="checkbox" checked={board} onChange={(e) => setBoard(e.target.checked)} />
        <span>Show my first name and points on the leaderboard</span>
      </label>

      <button className="btn btn-lg" type="submit" disabled={!ok || busy}>{busy ? 'One moment …' : submitLabel}</button>
      {!ok && <p className="muted small">Please add your first name and pick at least one reason.</p>}
    </form>
  );
}
