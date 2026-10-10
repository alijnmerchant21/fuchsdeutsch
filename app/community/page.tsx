import { Fox } from '@/components/Fox';

const items = [
  { tone: 'sky', title: 'Forum', text: 'Fragen stellen, Antworten finden, Texte teilen. Sortiert nach Kapitel.' },
  { tone: 'mint', title: 'Live-Chat', text: 'Schreib in Echtzeit mit anderen Lernenden, pro Niveau ein Raum.' },
  { tone: 'butter', title: 'Tägliche Sprechstunde', text: 'Jeden Tag eine Stunde live mit Lehrerinnen und Lehrern. Komm vorbei und frag.' },
  { tone: 'lilac', title: 'KI-Tutor', text: 'Frag zu jeder Übung nach. Der Tutor erklärt, warum eine Antwort richtig ist.' },
  { tone: 'rose', title: 'Live sprechen mit KI', text: 'Übe Gespräche mit einer KI-Partnerin: Termine, Smalltalk, Prüfungssituationen.' },
];

export default function Community() {
  return (
    <main className="page">
      <header className="games-head">
        <Fox size={96} mood="happy" className="bob" />
        <div>
          <h1>Community</h1>
          <p className="lead">Hier entsteht der Treffpunkt für alle Lernfüchse. Das kommt als Nächstes:</p>
        </div>
      </header>
      <div className="game-grid">
        {items.map((i) => (
          <div key={i.title} className={`game-card is-static t-${i.tone}`}>
            <b>{i.title}</b><span>{i.text}</span><small>in Arbeit</small>
          </div>
        ))}
      </div>
    </main>
  );
}
