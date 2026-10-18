'use client';
import { LessonBar, LessonHead } from '@/components/Lesson';
import { traps } from '@/lib/content';
import { En } from '@/lib/lang';

export default function Fallen() {
  return (
    <>
      <LessonBar />
      <LessonHead hue="butter" title="Die Fallen" sub="Fast jede falsche Antwort im Goethe-Hören und -Lesen kommt aus einem dieser Muster. In deinen Ergebnissen siehst du bei jedem Fehler, welche Falle es war." en="Almost every wrong answer comes from one of these patterns. Your results show which trap it was for each mistake." />
      {(['hoeren', 'lesen'] as const).map((m) => (
        <section key={m} className="card block">
          <header className="bh"><span className="modchip">{m === 'hoeren' ? 'Hören' : 'Lesen'}</span><span className="mins">{Object.keys(traps[m]).length} Muster</span></header>
          <div className="traps">{Object.entries(traps[m]).map(([k, [de, en]]) => (
            <div key={k} className="trap"><span className="traptag">{de}</span><En as="p" block>{en}</En></div>
          ))}</div>
        </section>
      ))}
    </>
  );
}
