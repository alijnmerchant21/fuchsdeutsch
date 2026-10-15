import Link from 'next/link';
import { Fox } from '@/components/Fox';
import { storiesForLevel } from '@/content/stories';

const coming = [
  { tone: 'sky', title: 'Forum', text: 'Fragen stellen, Antworten finden, Texte teilen. Sortiert nach Kapitel.' },
  { tone: 'mint', title: 'Live-Chat', text: 'Schreib in Echtzeit mit anderen Lernenden, pro Niveau ein Raum.' },
  { tone: 'lilac', title: 'KI-Tutor', text: 'Frag zu jeder Übung nach. Der Tutor erklärt, warum eine Antwort richtig ist.' },
];

export default function Community() {
  const a1 = storiesForLevel('A1').slice(0, 3);
  return (
    <main className="page">
      <header className="game-head">
        <Fox size={96} mood="happy" className="bob" />
        <div>
          <h1>Community</h1>
          <p className="lead">Lies kurze Geschichten und treffe bald andere Lernfüchse.</p>
        </div>
      </header>

      <h2>Geschichten zum Lesen</h2>
      <p className="muted">Optional. Nicht nötig für den Kursfortschritt.</p>
      <div className="story-list">
        {a1.map((s) => (
          <Link key={s.id} href={`/geschichten/${s.id}`} className="story-card t-butter">
            <b>{s.title}</b>
            <span className="muted small">{s.minutes} Min. · {s.why}</span>
            <span className="story-go">Lesen →</span>
          </Link>
        ))}
      </div>
      <p><Link href="/geschichten" className="btn btn-sm">Alle Geschichten</Link></p>

      <h2>Bald hier</h2>
      <div className="game-grid">
        {coming.map((i) => (
          <div key={i.title} className={`game-card is-static t-${i.tone}`}>
            <b>{i.title}</b><span>{i.text}</span><small>in Arbeit</small>
          </div>
        ))}
      </div>
    </main>
  );
}
