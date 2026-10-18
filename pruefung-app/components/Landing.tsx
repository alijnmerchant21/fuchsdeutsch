'use client';
/* Public home page. Flow: hero (what it is, two buttons) → how it works (the loop) → why different → prices → start. */
import Link from 'next/link';
import { useEffect, useState, type ReactNode } from 'react';
import { useT } from '@/lib/lang';
import { Fox } from './Fox';
import { Reveal } from './Reveal';

const I = {
  test: <svg viewBox="0 0 24 24" aria-hidden><rect x="5" y="3.5" width="14" height="17" rx="2.5" /><path d="M9 3.5h6v3H9zM8.5 11h7M8.5 14.5h7M8.5 18h4" /></svg>,
  scan: <svg viewBox="0 0 24 24" aria-hidden><circle cx="10.5" cy="10.5" r="6" /><path d="M15 15l5 5M8 11.5l2 2 3.5-4" /></svg>,
  target: <svg viewBox="0 0 24 24" aria-hidden><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1" /></svg>,
  loop: <svg viewBox="0 0 24 24" aria-hidden><path d="M19.5 12a7.5 7.5 0 0 1-13 5.1M4.5 12a7.5 7.5 0 0 1 13-5.1" /><path d="M17.5 3.5v3.4h-3.4M6.5 20.5v-3.4h3.4" /></svg>,
  check: <svg viewBox="0 0 24 24" aria-hidden><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>,
  x: <svg viewBox="0 0 24 24" aria-hidden><path d="M7 7l10 10M17 7L7 17" /></svg>,
  down: <svg viewBox="0 0 24 24" aria-hidden><path d="M12 5v14M6 13l6 6 6-6" /></svg>,
  shield: <svg viewBox="0 0 24 24" aria-hidden><path d="M12 3l7.5 3v5.5c0 4.6-3.2 8.3-7.5 9.5-4.3-1.2-7.5-4.9-7.5-9.5V6z" /><path d="M8.5 12l2.5 2.5 4.5-5" /></svg>,
};

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

/** Hero art: Fuchsi on a morphing blob, exam chips floating around, a mini result that improves block by block. */
function HeroArt() {
  const t = useT();
  const [i, setI] = useState(0);
  useEffect(() => { const id = setInterval(() => setI((x) => (x + 1) % 4), 2200); return () => clearInterval(id); }, []);
  const steps = [
    { label: 'Mock Test 1', h: 38, l: 41 },
    { label: 'Block 1', h: 49, l: 50 },
    { label: 'Block 2', h: 57, l: 61 },
    { label: 'Block 3', h: 66, l: 68 },
  ];
  const s = steps[i];
  const chips = [t('Hören', 'Listening'), t('Lesen', 'Reading'), t('sicher oder geraten?', 'sure or guessed?'), t('Teil 4: Wer sagt was?', 'Part 4: who says what?')];
  return (
    <div className="ha" aria-hidden>
      <div className="ha-blob" />
      <Fox size={170} mood="happy" className="ha-fox" />
      {chips.map((c, k) => <span key={c} className={`ha-chip ha-c${k} ${k === i ? 'on' : ''}`}>{c}</span>)}
      <div className="ha-card">
        <div className="ha-card-top"><b>{s.label}</b><span className={s.h >= 60 ? 'ok' : ''}>{s.h >= 60 ? t('auf Kurs', 'on track') : t('noch nicht', 'not yet')}</span></div>
        {([['Hören', s.h], ['Lesen', s.l]] as [string, number][]).map(([n, v]) => (
          <div key={n} className="ha-row"><span>{n}</span><div><i style={{ width: `${v}%` }} className={v >= 60 ? 'ok' : ''} /><u /></div><b>{v}</b></div>
        ))}
      </div>
    </div>
  );
}

function Step({ n, hue, icon, title, children, tag, delay }: { n: string; hue: string; icon: ReactNode; title: string; children: ReactNode; tag?: string; delay: number }) {
  return (
    <Reveal as="article" className={`lp-step hue-${hue}`} delay={delay}>
      <div className="lp-step-top"><span className="lp-num">{n}</span><span className="lp-ico">{icon}</span></div>
      <h3>{title}</h3>
      <p>{children}</p>
      {tag && <span className="lp-tag">{tag}</span>}
    </Reveal>
  );
}

export function Landing() {
  const t = useT();
  const words = t('Kein Kurs.', 'No course.').split(' ');
  const words2 = t('Nur deine Schwächen.', 'Just your weak spots.').split(' ');

  return (
    <div className="lp">
      {/* ---------- hero ---------- */}
      <section className="lp-hero">
        <div className="lp-hero-text">
          <p className="lp-eyebrow rise" style={{ animationDelay: '0ms' }}>{t('Goethe-Zertifikat A1 bis B2 · Mock-Prüfungszentrum', 'Goethe-Zertifikat A1 to B2 · Mock exam center')}</p>
          <h1 className="lp-h1">
            {words.map((w, k) => <span key={k} className="rise word" style={{ animationDelay: `${80 + k * 90}ms` }}>{w}</span>)}<br />
            <span className="lp-soft">{words2.map((w, k) => <span key={k} className="rise word" style={{ animationDelay: `${260 + k * 90}ms` }}>{w}</span>)}</span>
          </h1>
          <p className="lp-lead rise" style={{ animationDelay: '600ms' }}>{t(
            'Ein kostenloser Mock Test zeigt, wo du Punkte verlierst. Danach bekommst du Übungsblöcke, die nur für dich gebaut werden. Nach jedem Block analysieren wir neu.',
            'A free mock test shows where you lose points. Then you get practice blocks built only for you. After every block we analyze again.')}</p>
          <div className="lp-ctas rise" style={{ animationDelay: '720ms' }}>
            <Link className="btn big lp-pill" href="/login">{t('Kostenlos starten', 'Start for free')} <span aria-hidden>→</span></Link>
            <button type="button" className="btn big ghostbtn lp-pill2" onClick={() => scrollTo('how')}>{t('So funktioniert es', 'How it works')} <span className="lp-down">{I.down}</span></button>
          </div>
          <button type="button" className="lp-ribbon rise" style={{ animationDelay: '780ms' }} onClick={() => scrollTo('garantie')}>
            <span className="lp-ico">{I.shield}</span>
            <span><b>{t('Kostenlos weiter, bis du bestehst*', 'Free until you pass*')}</b> {t('Nicht bestanden? Wir üben gratis mit dir weiter.', 'Failed? We keep practicing with you for free.')}</span>
          </button>
          <ul className="lp-facts rise" style={{ animationDelay: '840ms' }}>
            <li><b>40</b><span>{t('Minuten Mock Test', 'minute mock test')}</span></li>
            <li><b>$0</b><span>{t('für Test und Auswertung', 'for test and evaluation')}</span></li>
            <li><b>60</b><span>{t('Punkte pro Modul zum Bestehen', 'points per module to pass')}</span></li>
          </ul>
        </div>
        <div className="lp-hero-art rise" style={{ animationDelay: '300ms' }}><HeroArt /></div>
      </section>

      {/* ---------- how it works: the loop ---------- */}
      <section className="lp-sec" id="how">
        <Reveal>
          <p className="lp-eyebrow">{t('So funktioniert es', 'How it works')}</p>
          <h2 className="lp-h2">{t('Ein Test.', 'One test.')}<br /><span className="lp-soft">{t('Dann ein Plan, der mitlernt.', 'Then a plan that learns with you.')}</span></h2>
          <p className="lp-lead narrow">{t(
            'Andere geben allen dieselben Übungen. Bei uns entsteht jeder neue Block aus deinen letzten Antworten. So übst du nur, was dich wirklich Punkte kostet.',
            'Others give everyone the same exercises. Here every new block is built from your last answers, so you only practice what really costs you points.')}</p>
        </Reveal>
        <div className="lp-steps">
          <Step delay={0} n="01" hue="sky" icon={I.test} title={t('Mock Test machen', 'Take the mock test')} tag={t('Kostenlos', 'Free')}>
            {t('Hören, Lesen und Schreiben im echten Goethe-Format. Mit Zeitlimit, wie in der Prüfung.', 'Listening, reading and writing in the real Goethe format, timed like the exam.')}
          </Step>
          <Step delay={120} n="02" hue="mint" icon={I.scan} title={t('Auswertung bekommen', 'Get your evaluation')} tag={t('Kostenlos', 'Free')}>
            {t('Punkte pro Teil, deine häufigsten Fallen und woran du arbeiten solltest.', 'Points per part, your most common traps and what to focus on.')}
          </Step>
          <Step delay={240} n="03" hue="peach" icon={I.target} title={t('Eigener Übungsblock', 'Your own practice block')} tag={t('Ab $9', 'From $9')}>
            {t('Wir bauen deinen nächsten Block nur aus deinen Schwächen. Passend zu Prüfungsdatum und Lernzeit.', 'We build your next block only from your weak spots, sized to your exam date and study time.')}
          </Step>
          <Step delay={360} n="04" hue="lilac" icon={<span className="spin">{I.loop}</span>} title={t('Neu auswerten, neu bauen', 'Evaluate again, build again')} tag={t('Bis zur Prüfung', 'Until exam day')}>
            {t('Nach jedem Block analysieren wir deine Ergebnisse und bauen den nächsten.', 'After every block we analyze your results and build the next one.')}
          </Step>
        </div>
        <Reveal className="lp-loop" delay={200}><span className="lp-ico"><span className="spin">{I.loop}</span></span>{t('Schritt 3 und 4 wiederholen sich bis zum Prüfungstag. Du siehst immer nur den aktuellen Block.', 'Steps 3 and 4 repeat until exam day. You only ever see the current block.')}</Reveal>
        <div className="lp-next"><button type="button" className="linkbtn" onClick={() => scrollTo('why')}>{t('Warum ist das anders?', 'Why is this different?')} ↓</button></div>
      </section>

      {/* ---------- why different ---------- */}
      <section className="lp-sec" id="why">
        <Reveal>
          <p className="lp-eyebrow">{t('Warum anders', 'Why different')}</p>
          <h2 className="lp-h2">{t('Dasselbe Buch für alle?', 'The same book for everyone?')}<br /><span className="lp-soft">{t('Nicht hier.', 'Not here.')}</span></h2>
        </Reveal>
        <div className="lp-compare">
          <Reveal as="article" className="lp-col">
            <h3>{t('Übungsbuch oder normale App', 'Practice book or a normal app')}</h3>
            <ul>
              <li><span className="lp-mark no">{I.x}</span>{t('Gleiche Übungen für alle', 'Same exercises for everyone')}</li>
              <li><span className="lp-mark no">{I.x}</span>{t('Du übst auch, was du schon kannst', 'You also practice what you already know')}</li>
              <li><span className="lp-mark no">{I.x}</span>{t('Niemand sagt dir, warum du falsch liegst', 'Nobody tells you why you got it wrong')}</li>
            </ul>
          </Reveal>
          <Reveal as="article" className="lp-col good" delay={150}>
            <h3><Fox size={28} /> Fuchsdeutsch Prüfung</h3>
            <ul>
              <li><span className="lp-mark">{I.check}</span>{t('Jeder Block aus deinen eigenen Fehlern', 'Every block built from your own mistakes')}</li>
              <li><span className="lp-mark">{I.check}</span>{t('„Sicher oder geraten?“ zeigt, ob Fallen oder Wörter das Problem sind', '"Sure or guessed?" shows whether traps or vocabulary are the problem')}</li>
              <li><span className="lp-mark">{I.check}</span>{t('Bei jeder Lösung der Satz im Text, der sie beweist', 'For every answer, the sentence in the text that proves it')}</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ---------- prices ---------- */}
      <section className="lp-sec" id="garantie">
        <Reveal className="lp-guar">
          <div className="lp-guar-badge"><span className="lp-guar-ico">{I.shield}</span><Fox size={110} mood="proud" /></div>
          <div className="lp-guar-text">
            <p className="lp-eyebrow">{t('Bestehensgarantie', 'Pass guarantee')}</p>
            <h2 className="lp-h2">{t('Nicht bestanden?', 'Did not pass?')}<br /><span className="lp-soft">{t('Wir machen kostenlos weiter.*', 'We keep going for free.*')}</span></h2>
            <p className="lp-lead">{t(
              'Wenn du alle Blöcke gemacht hast und trotzdem durchfällst, bekommst du einen Gutschein: dein Plan läuft für die nicht bestandenen Module kostenlos weiter, bis zu deinem nächsten Prüfungstermin.',
              'If you did all your blocks and still fail, you get a voucher: your plan keeps running for free for the modules you failed, until your next exam date.')}</p>
            <ul className="lp-guar-list">
              <li><span className="lp-mark">{I.check}</span>{t('Neue Blöcke, gebaut aus deinem Verlauf', 'New blocks built from your history')}</li>
              <li><span className="lp-mark">{I.check}</span>{t('Nur für die Module, die noch fehlen', 'Only for the modules you still need')}</li>
              <li><span className="lp-mark">{I.check}</span>{t('Bis zum nächsten Termin, ohne neue Kosten', 'Until your next date, at no extra cost')}</li>
            </ul>
            <Link className="linkbtn" href="/garantie">{t('*Es gelten Bedingungen. Alle Details lesen →', '*Terms and conditions apply. Read all details →')}</Link>
          </div>
        </Reveal>
      </section>

      <section className="lp-sec" id="preise">
        <Reveal>
          <p className="lp-eyebrow">{t('Preise', 'Pricing')}</p>
          <h2 className="lp-h2">{t('Einmal zahlen.', 'Pay once.')}<br /><span className="lp-soft">{t('Bis zur Prüfung.', 'Until your exam.')}</span></h2>
        </Reveal>
        <div className="lp-prices">
          <Reveal as="article" className="lp-price">
            <p className="lp-pname">{t('Mock Test + Auswertung', 'Mock test + evaluation')}</p>
            <p className="lp-amount">$0</p>
            <p className="dim">{t('Einmal pro Konto', 'Once per account')}</p>
          </Reveal>
          <Reveal as="article" className="lp-price" delay={120}>
            <p className="lp-pname">{t('A1 oder A2', 'A1 or A2')}</p>
            <p className="lp-amount">$15</p>
            <p className="dim">{t('Die ganze Prüfung, alle Blöcke bis zum Termin', 'The whole exam, all blocks until your date')}</p>
          </Reveal>
          <Reveal as="article" className="lp-price best" delay={240}>
            <span className="lp-badge">{t('Beliebt', 'Popular')}</span>
            <p className="lp-pname">{t('B1 oder B2', 'B1 or B2')}</p>
            <p className="lp-amount">$9<small className="dim"> / {t('Modul', 'module')}</small></p>
            <p className="dim">{t('Alle Module $21: Hören, Lesen, Schreiben. Sprechen kommt bald.', 'All modules $21: listening, reading, writing. Speaking coming soon.')}</p>
          </Reveal>
        </div>
        <p className="dim small lp-center">{t('Bei jedem bezahlten Plan: kostenlos weiter, bis du bestehst.* Fuchsdeutsch-Absolventen zahlen die Hälfte. In der Beta ist alles kostenlos.', 'With every paid plan: free until you pass.* Fuchsdeutsch graduates pay half. Everything is free during the beta.')} <Link className="linkbtn" href="/garantie">{t('Bedingungen', 'Terms')}</Link></p>
      </section>

      {/* ---------- start ---------- */}
      <Reveal as="section" className="lp-cta">
        <Fox size={72} mood="wow" />
        <h2>{t('Bereit für deinen Mock Test?', 'Ready for your mock test?')}</h2>
        <p className="dim">{t('40 Minuten, kostenlos. Danach weißt du genau, woran du arbeiten musst.', '40 minutes, free. Afterwards you know exactly what to work on.')}</p>
        <Link className="btn big lp-pill" href="/login">{t('Kostenlos starten', 'Start for free')} <span aria-hidden>→</span></Link>
      </Reveal>
    </div>
  );
}
