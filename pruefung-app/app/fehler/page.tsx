'use client';
import { useEffect, useState } from 'react';
import { Guard } from '@/components/Guard';
import { LessonBar, LessonHead } from '@/components/Lesson';
import { SetCard, type SetState } from '@/components/SetCard';
import { resolveAttempt } from '@/lib/resolve';
import { useStore } from '@/lib/store';
import type { ExamSet } from '@/lib/types';

/** Every question answered wrong on the first try, to answer again. Not saved, just practice. */
function Fehler() {
  const { attempts, blocks } = useStore();
  const [list, setList] = useState<ExamSet[] | null>(null);
  const [st, setSt] = useState<Record<string, SetState & { checked?: boolean }>>({});

  useEffect(() => {
    void (async () => {
      const out: ExamSet[] = [];
      for (const a of attempts) {
        const ctx = await resolveAttempt(a, blocks); if (!ctx) continue;
        for (const id of ctx.test.sections.flatMap((s) => s.sets)) {
          const s = ctx.sets[id]; if (!s || s.module === 'schreiben' || out.some((x) => x.id === id)) continue;
          const groups = s.groups.map((g) => ({ ...g, items: g.items.filter((i) => a.answers[id]?.[String(i.n)] !== i.a) })).filter((g) => g.items.length);
          if (groups.length) out.push({ ...s, groups });
        }
      }
      setList(out);
    })();
  }, [attempts, blocks]);

  const n = list?.reduce((a, s) => a + s.groups.reduce((x, g) => x + g.items.length, 0), 0) ?? 0;
  return (
    <>
      <LessonBar />
      <LessonHead hue="rose" title="Fehler wiederholen" sub={n ? `${n} Fragen, die du beim ersten Versuch falsch hattest. Erst antworten, dann den markierten Satz mitlesen.` : 'Noch keine Fehler gespeichert. Sie erscheinen hier, sobald du einen Teil abgibst.'} />
      {list?.map((s) => {
        const cur = st[s.id] ?? { ans: {}, conf: {} };
        const set = (p: Partial<SetState & { checked: boolean }>) => setSt((x) => ({ ...x, [s.id]: { ...cur, ...p } }));
        return (
          <div key={s.id}>
            {s.module === 'hoeren' && !cur.checked && <p className="redohint"><b>So geht&apos;s:</b> 1. Hör die Aufnahme noch einmal und beantworte nur deine falschen Aufgaben. 2. Auswerten. 3. Hör noch einmal und lies den markierten Satz mit.</p>}
            <SetCard set={s} mode="practice" state={cur} checked={cur.checked}
              onAnswer={(k, v) => set({ ans: { ...cur.ans, [String(k)]: v } })} onConf={(k, c) => set({ conf: { ...cur.conf, [String(k)]: c } })}
              onCheck={() => set({ checked: true })} onReset={() => set({ ans: {}, conf: {}, checked: false })} />
          </div>
        );
      })}
    </>
  );
}
export default function Page() { return <Guard><Fehler /></Guard>; }
