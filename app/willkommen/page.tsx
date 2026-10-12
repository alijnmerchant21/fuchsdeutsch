'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Fox } from '@/components/Fox';
import { RequireUser } from '@/components/Guard';
import { useStore, type LearnerProfile } from '@/lib/store';
import { courses } from '@/content/course';

const genders: { id: LearnerProfile['gender']; de: string }[] = [
  { id: 'frau', de: 'Frau' }, { id: 'mann', de: 'Mann' }, { id: 'divers', de: 'Divers' }, { id: 'none', de: 'Keine Angabe' },
];
const reasons: { id: string; de: string; en: string }[] = [
  { id: 'job', de: 'Beruf', en: 'work' },
  { id: 'study', de: 'Studium', en: 'university' },
  { id: 'living', de: 'Leben in D, A oder CH', en: 'living in Germany, Austria or Switzerland' },
  { id: 'exam', de: 'Prüfung (Goethe, telc)', en: 'an exam' },
  { id: 'family', de: 'Familie oder Partner', en: 'family or partner' },
  { id: 'travel', de: 'Reisen', en: 'travel' },
  { id: 'fun', de: 'Spaß an der Sprache', en: 'for fun' },
];
const goals = [{ xp: 25, de: 'Locker', sub: '5 Minuten am Tag' }, { xp: 50, de: 'Normal', sub: '10 Minuten am Tag' }, { xp: 100, de: 'Ernsthaft', sub: '20 Minuten am Tag' }];

function Form() {
  const { user, progress, saveProfile, setCourse } = useStore();
  const router = useRouter();
  const old = progress.profile;
  // A login by email link only knows the address, so do not suggest "name@..." as a first name.
  const guess = old?.name || (user && !user.email.startsWith(user.name) ? user.name.split(' ')[0] : '');
  const [name, setName] = useState(guess);
  const [gender, setGender] = useState<LearnerProfile['gender']>(old?.gender || 'none');
  const [why, setWhy] = useState<string[]>(old?.reasons || []);
  const [lang, setLang] = useState(old?.nativeLanguage || '');
  const [goal, setGoal] = useState(old?.goal || 50);
  const [board, setBoard] = useState(old?.board ?? true);
  const [level, setLevel] = useState(progress.course || courses[0].id);
  const ok = name.trim().length >= 2 && why.length > 0;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ok) return;
    saveProfile({ name: name.trim(), gender, reasons: why, nativeLanguage: lang.trim(), goal, board });
    setCourse(level);
    const next = new URLSearchParams(window.location.search).get('next') || '';
    router.replace(next.startsWith('/') && !next.startsWith('//') && !next.startsWith('/willkommen') ? next : '/lernen');
  };

  return (
    <main className="page narrow welcome">
      <header className="welcome-head">
        <Fox size={84} mood="happy" />
        <div>
          <h1>{old ? 'Dein Profil' : 'Schön, dass du da bist'}</h1>
          <p className="lead">Ein paar kurze Fragen, damit der Kurs zu dir passt. <span className="en">A few quick questions so the course fits you.</span></p>
        </div>
      </header>
      <form className="card form" onSubmit={submit}>
        <label>Wie heißt du? <span className="en">Your first name</span>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Vorname" autoComplete="given-name" maxLength={40} required />
        </label>

        <fieldset>
          <legend>Anrede <span className="en">How should we address you? Optional.</span></legend>
          <div className="choices">
            {genders.map((g) => <button key={g.id} type="button" className="choice" aria-pressed={gender === g.id} onClick={() => setGender(g.id)}>{g.de}</button>)}
          </div>
        </fieldset>

        <fieldset>
          <legend>Warum lernst du Deutsch? <span className="en">Why are you learning German? Pick one or more.</span></legend>
          <div className="choices">
            {reasons.map((r) => (
              <button key={r.id} type="button" className="choice" aria-pressed={why.includes(r.id)} title={r.en}
                onClick={() => setWhy(why.includes(r.id) ? why.filter((x) => x !== r.id) : [...why, r.id])}>{r.de}</button>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend>Mit welchem Kurs startest du? <span className="en">Which course do you want to start with? You can switch any time.</span></legend>
          <div className="choices goals-row">
            {courses.map((c) => (
              <button key={c.id} type="button" className="choice choice-big" aria-pressed={level === c.id} onClick={() => setLevel(c.id)}>
                <b>{c.level}</b><small>{c.blurbEn}</small>
              </button>
            ))}
          </div>
        </fieldset>

        <label>Deine Muttersprache <span className="en">Your first language. Optional.</span>
          <input value={lang} onChange={(e) => setLang(e.target.value)} placeholder="z. B. Hindi, Türkisch, Englisch" maxLength={40} />
        </label>

        <fieldset>
          <legend>Dein Tagesziel <span className="en">Your daily goal</span></legend>
          <div className="choices goals-row">
            {goals.map((g) => (
              <button key={g.xp} type="button" className="choice choice-big" aria-pressed={goal === g.xp} onClick={() => setGoal(g.xp)}>
                <b>{g.de}</b><small>{g.sub}</small>
              </button>
            ))}
          </div>
        </fieldset>

        <label className="check-row">
          <input type="checkbox" checked={board} onChange={(e) => setBoard(e.target.checked)} />
          <span>Mit Vornamen und Punkten auf der Bestenliste erscheinen <span className="en">Show my first name and points on the leaderboard</span></span>
        </label>

        <button className="btn btn-lg" type="submit" disabled={!ok}>{old ? 'Speichern' : 'Los geht’s'}</button>
        {!ok && <p className="muted small">Bitte gib deinen Vornamen an und wähle mindestens einen Grund.</p>}
      </form>
    </main>
  );
}

export default function Page() { return <RequireUser allowNew><Form /></RequireUser>; }
