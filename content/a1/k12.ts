import type { Chapter, GameDef, GlossaryEntry } from '../types';
import { artikel, audio, cards, checklist, compose, gap, grammar, match, mcq, order, overview, phrases, section, sort, text, tip, x } from '../helpers';

// A1 Kapitel 12: Reisen, Urlaub, Wetter, Himmelsrichtungen, Postkarte.
// Grammar: man, Fragewörter wer/wen/wem/was, denn, Zeitangaben mit Dativ (vor, nach, seit, in). Aussprache: f, v, w.

export const glossaryA1k12: Record<string, GlossaryEntry> = {
  Urlaub: { de: 'Freie Tage von der Arbeit. Oft macht man eine Reise.', en: 'vacation, holiday' },
  Reise: { de: 'Man fährt an einen anderen Ort, oft für mehrere Tage.', en: 'trip, journey' },
  Wetter: { de: 'Sonne, Regen, Wind, Schnee: Wie ist es draußen?', en: 'weather' },
  Grad: { de: 'So misst man die Temperatur: 20 Grad.', en: 'degree' },
  Unterkunft: { de: 'Ein Ort zum Schlafen auf einer Reise: Hotel, Pension, Jugendherberge.', en: 'accommodation' },
  Jugendherberge: { de: 'Eine billige Unterkunft, oft für junge Leute und Gruppen.', en: 'youth hostel' },
  Norden: { de: 'Die Richtung nach oben auf der Karte.', en: 'north' },
  Süden: { de: 'Die Richtung nach unten auf der Karte.', en: 'south' },
  Postkarte: { de: 'Eine Karte mit Foto. Man schreibt sie aus dem Urlaub.', en: 'postcard' },
  Insel: { de: 'Land mit Wasser rundherum.', en: 'island' },
  man: { de: 'Alle Leute, jede Person. „In Österreich sagt man Servus.“', en: 'one, people, you (in general)' },
};

const einstieg = section('einstieg', 'einstieg', 'Einstieg', 'Ferien!', 'butter', 8,
  ['das Kapitel kennenlernen', 'Reiseziele und Wetter'], [
    overview('e-over', 'Kapitel 12: Ab in den Urlaub!',
      'Das letzte Kapitel! Jetzt planst du einen [[Urlaub]]. Du sprichst über das [[Wetter]] und die Temperatur in [[Grad]], du findest eine [[Unterkunft]] und liest eine Karte mit [[Norden]], [[Süden]], Osten und Westen. Am Ende schreibst du eine [[Postkarte]].\n\nDie WG macht eine [[Reise]] an die Nordsee. Was kann da schon schiefgehen?',
      'The last chapter: travel. Planning a vacation, weather, accommodation, compass directions, and writing a postcard. Grammar: the pronoun man (one, people), the question words wer, wen, wem, was, the word denn in questions, and time expressions with the dative (vor, nach, seit, in).',
      ['über Urlaub und Reisen sprechen', 'das Wetter beschreiben', 'eine Unterkunft buchen', 'eine Postkarte schreiben']),
    match('e-match', [['☀️', 'Die Sonne scheint.'], ['🌧️', 'Es regnet.'], ['❄️', 'Es schneit.'], ['💨', 'Es ist windig.'], ['☁️', 'Es ist bewölkt.'], ['⛈️', 'Es gibt ein Gewitter.']], { task: 'Wie ist das Wetter?', taskEn: 'Match the weather.' }),
    sort('e-sort', ['warm', 'kalt'], [['30 Grad', 0], ['minus 5 Grad', 1], ['heiß', 0], ['kühl', 1], ['sonnig', 0], ['Schnee', 1]], { task: 'Warm oder kalt?', taskEn: 'Warm or cold?' }),
  ]);

const teil1 = section('teil-1', 'modul', 'Teil 1', 'Wohin fahren wir?', 'mint', 15,
  ['Reiseziele vergleichen', 'Himmelsrichtungen', 'man'], [
    grammar('t1-himmel', 'Die Himmelsrichtungen', {
      head: ['', 'Beispiel'],
      rows: [['im Norden', 'Hamburg liegt im Norden von Deutschland.'], ['im Süden', 'München liegt im Süden.'], ['im Osten', 'Leipzig und Dresden liegen im Osten.'], ['im Westen', 'Köln liegt im Westen.']],
      notes: ['Man sagt auch: **an** der Nordsee, **an** der Ostsee, **in** den Alpen, **auf** einer Insel.'],
      en: 'North, south, east, west: im Norden, im Süden, im Osten, im Westen. At the coast: an der Nordsee. In the mountains: in den Alpen. On an island: auf einer Insel.',
    }),
    match('t1-match', [['Hamburg', 'im Norden'], ['München', 'im Süden'], ['Dresden', 'im Osten'], ['Köln', 'im Westen']], { task: 'Wo liegt die Stadt?', taskEn: 'Where is the city?' }),
    audio('t1-audio', 'Hören: Urlaubspläne in der WG', [
      ['felix', 'Ich will in die Berge! In den Alpen kann man wandern und Käse essen.'],
      ['amara', 'Berge? Da ist es kalt! Ich will ans Meer. An der Nordsee kann man am Strand liegen.'],
      ['kenji', 'An der Nordsee ist es aber auch nicht warm. Und es gibt viel Wind.'],
      ['nele', 'Ich kenne eine Insel in der Nordsee. Dort gibt es eine Jugendherberge. Sie ist billig und direkt am Strand.'],
      ['amara', 'Ein Strand! Super!'],
      ['felix', 'Okay, okay. Dann fahren wir an die Nordsee. Aber nächstes Jahr in die Alpen!'],
    ], { task: 'Hör zu. Wohin fährt die WG?', taskEn: 'Listen. Where does the flat share go on vacation?' }),
    mcq('t1-q1', 'Was möchte Felix?', ['ans Meer', 'in die Berge', 'in eine Stadt'], 1),
    mcq('t1-q2', 'Was sagt Kenji über die Nordsee?', ['Es ist sehr heiß.', 'Es gibt viel Wind.', 'Es ist teuer.'], 1),
    mcq('t1-q3', 'Wo schlafen sie?', ['im Hotel', 'in einer Jugendherberge', 'im Zelt'], 1),
    grammar('t1-gram', 'Das Pronomen man', {
      intro: '**man** bedeutet: alle Leute, jede Person. Das Verb steht wie bei **er/sie/es**.',
      head: ['', 'Beispiel'],
      rows: [['man + Verb', 'An der Nordsee **kann man** am Strand liegen.'], ['', 'In Österreich **sagt man** „Servus“.'], ['', 'Wie **schreibt man** das?']],
      en: 'man = one, people, you in general. The verb takes the er/sie/es form: man kann, man sagt, man schreibt.',
    }),
    gap('t1-gap', ['In den Alpen {{kann}} man wandern. (können)', 'Wie {{sagt}} man das auf Deutsch? (sagen)', 'Hier {{darf}} man nicht parken. (dürfen)', 'In der Schweiz {{spricht}} man vier Sprachen. (sprechen)'],
      { task: 'Ergänze das Verb.', taskEn: 'Fill in the verb in the man form.' }),
  ]);

const teil2 = section('teil-2', 'modul', 'Teil 2', 'Die Reise planen', 'sky', 15,
  ['eine Unterkunft buchen', 'Fragewörter wer, wen, wem', 'Zeitangaben mit Dativ'], [
    audio('t2-audio', 'Hören: Anruf bei der Jugendherberge', [
      ['opaFiete', 'Jugendherberge Sandbank, Moin!'],
      ['nele', 'Guten Tag, hier ist Nele Wagner. Haben Sie im August noch ein Zimmer für vier Personen frei?'],
      ['opaFiete', 'Moment … Vom zehnten bis zum siebzehnten August? Ja, da haben wir ein Vierbettzimmer.'],
      ['nele', 'Super! Was kostet das?'],
      ['opaFiete', 'Fünfunddreißig Euro pro Person und Nacht. Mit Frühstück.'],
      ['nele', 'Gibt es auch Abendessen?'],
      ['opaFiete', 'Ja, für zwölf Euro extra. Und Fahrräder kann man bei uns leihen.'],
      ['nele', 'Prima, dann buche ich das Zimmer.'],
      ['opaFiete', 'Gut. Und denken Sie an die Fähre! Die letzte fährt um sechs.'],
    ], { task: 'Hör zu. Was bucht Nele?', taskEn: 'Listen. What does Nele book? "Moin" is the greeting in northern Germany.' }),
    mcq('t2-q1', 'Wie lange bleibt die WG?', ['vom 10. bis 17. August', 'vom 17. bis 24. August', 'eine Nacht'], 0),
    mcq('t2-q2', 'Was kostet eine Nacht pro Person?', ['12 €', '35 €', '47 €'], 1),
    mcq('t2-q3', 'Wann fährt die letzte Fähre?', ['um 16 Uhr', 'um 18 Uhr', 'um 20 Uhr'], 1),
    tip('t2-tip', 'Moin!', 'In Norddeutschland sagt man **Moin** oder **Moin moin**. Und das nicht nur am Morgen, sondern den ganzen Tag!'),
    grammar('t2-frage', 'Fragewörter: wer, wen, wem, was', {
      head: ['Fall', 'Person', 'Sache', 'Beispiel'],
      rows: [['Nominativ', '**Wer?**', '**Was?**', '**Wer** bucht das Zimmer? Nele.'], ['Akkusativ', '**Wen?**', '**Was?**', '**Wen** ruft Nele an? Die Jugendherberge.'], ['Dativ', '**Wem?**', '–', '**Wem** gehört das Fahrrad? Felix.']],
      en: 'Question words change with the case: wer (who, subject), wen (whom, accusative), wem (to whom, dative). was = what.',
    }),
    gap('t2-gap', ['{{Wer}} fährt an die Nordsee? Die WG.', '{{Wen}} besucht Felix? Seine Oma.', '{{Wem}} gehört der Koffer? Amara.', '{{Was}} kostet das Zimmer? 35 Euro.'],
      { bank: ['Wer', 'Wen', 'Wem', 'Was'], task: 'wer, wen, wem oder was?', taskEn: 'Choose the question word.' }),
    grammar('t2-zeit', 'Zeitangaben mit Dativ', {
      head: ['Präposition', 'Beispiel'],
      rows: [['vor', 'Ich habe **vor einer** Woche gebucht.'], ['nach', '**Nach dem** Frühstück gehen wir zum Strand.'], ['seit', 'Ich lerne **seit einem** Jahr Deutsch.'], ['in', '**In zwei** Wochen fahren wir in den Urlaub.'], ['bis', 'Wir bleiben **bis zum** 17. August.']],
      notes: ['**vor** = in der Vergangenheit. **in** = in der Zukunft. **seit** = von früher bis jetzt.'],
      en: 'Time with the dative: vor (ago), nach (after), seit (since, for), in (in, in the future). Example: vor einer Woche = a week ago.',
    }),
    mcq('t2-q4', 'Kenji lebt ___ einem Jahr in Leipzig. (bis jetzt)', ['vor', 'seit', 'in'], 1),
    mcq('t2-q5', '___ drei Tagen haben wir Urlaub. (Zukunft)', ['In', 'Vor', 'Seit'], 0),
  ]);

const teil3 = section('teil-3', 'modul', 'Teil 3', 'Grüße von der Insel', 'lilac', 15,
  ['eine Postkarte lesen und schreiben', 'denn in Fragen', 'Wetter beschreiben'], [
    text('t3-text', `Liebe Frau Klein,

viele Grüße von der Insel! Wir sind seit drei Tagen hier. Die Jugendherberge ist direkt am Strand. Das Wetter ist leider nicht so gut. Es ist windig und es regnet oft. Aber gestern hat die Sonne geschienen und wir sind im Meer geschwommen. Brrr, das Wasser war nur 17 Grad!

Man kann hier viel machen: Rad fahren, wandern und frischen Fisch essen. Ich spreche jeden Tag Deutsch. Nur das Plattdeutsch hier verstehe ich nicht!

Bis bald im Deutschkurs!
Ihr Kenji`, { kicker: 'Lesen', title: 'Eine Postkarte von Kenji', task: 'Lies die Postkarte.', taskEn: 'Read Kenji’s postcard to his German teacher. Plattdeutsch = Low German, a regional language in the north.' }),
    mcq('t3-q1', 'Wie ist das Wetter meistens?', ['sonnig und heiß', 'windig und regnerisch', 'kalt mit Schnee'], 1),
    mcq('t3-q2', 'Was haben sie gestern gemacht?', ['im Meer geschwommen', 'eine Stadt besichtigt', 'Plattdeutsch gelernt'], 0),
    mcq('t3-q3', 'Wie warm war das Wasser?', ['7 Grad', '17 Grad', '27 Grad'], 1),
    grammar('t3-gram', 'Die Partikel denn', {
      intro: 'In Fragen benutzt man oft **denn**. Es macht die Frage freundlicher und zeigt Interesse.',
      head: ['ohne denn', 'mit denn'],
      rows: [['Wo seid ihr?', 'Wo seid ihr **denn**?'], ['Wie ist das Wetter?', 'Wie ist das Wetter **denn**?'], ['Was ist los?', 'Was ist **denn** los?']],
      en: 'denn in questions makes them sound friendlier and more interested. It has no direct English translation.',
    }),
    compose('t3-comp', 'Schreib eine Postkarte an eine Freundin.', [
      ['Anrede, dann: Wo bist du?', 'Greeting, then say where you are.', ['Liebe Sara,', 'ich bin', 'gerade', 'in Wien.']],
      ['Beschreib das Wetter.', 'Describe the weather.', ['Das Wetter', 'ist', 'super:', 'Die Sonne scheint.']],
      ['Sag, was du gestern gemacht hast.', 'Say what you did yesterday.', ['Gestern', 'habe', 'ich', 'ein Museum besucht.']],
      ['Gruß', 'Sign off', ['Viele Grüße', 'und', 'bis bald!']],
    ], { task: 'Bau die Postkarte.', taskEn: 'Build the postcard.' }),
    phrases('t3-phr', 'Über das Wetter sprechen', {
      'Fragen': ['Wie ist das Wetter (denn)?', 'Wie viel Grad sind es?'],
      'Antworten': ['Die Sonne scheint. / Es regnet. / Es schneit.', 'Es ist warm / kalt / windig.', 'Es sind 25 Grad.'],
    }),
  ]);

const wg = section('wg', 'kommunikation', 'Die Fuchsbau-WG', 'Folge 12: Die letzte Fähre', 'rose', 12,
  ['eine Geschichte hören', 'das Ende der Staffel'], [
    text('wg-intro', 'Der letzte Urlaubstag. Die WG macht eine Radtour. Es ist schon spät. Die letzte Fähre fährt um sechs.', { kicker: 'Die Geschichte', en: 'The last day of vacation. The flat share is on a bike tour. It is already late. The last ferry leaves at six.' }),
    audio('wg-audio', 'Folge 12: Die letzte Fähre', [
      ['nele', 'Leute, es ist schon halb sechs! Die Fähre!'],
      ['felix', 'Was? Ich dachte, die Fähre fährt um sieben!'],
      ['kenji', 'Nein, um sechs! Schnell, wir müssen fahren!'],
      ['erzaehler', 'Fünfzehn Minuten später. Amaras Fahrrad hat einen Platten.'],
      ['amara', 'Oh nein! Mein Reifen ist kaputt! Fahrt ohne mich!'],
      ['felix', 'Nie! Wir sind eine WG. Wir bleiben zusammen.'],
      ['opaFiete', 'Na, ihr vier? Problem? Kommt, ich fahre euch mit meinem Traktor zum Hafen.'],
      ['erzaehler', 'Um eine Minute vor sechs sind sie am Hafen. Die Fähre wartet.'],
      ['kenji', 'Vielen Dank! Sie sind unser Held!'],
      ['opaFiete', 'Kein Ding. Kommt mal wieder. Tschüss und gute Fahrt!'],
      ['nele', 'Was für ein Jahr, Leute. Danke, dass ihr meine WG seid.'],
      ['amara', 'Und Kenji? Vor einem Jahr hast du kein Wort Deutsch gesprochen!'],
      ['kenji', 'Ja. Und jetzt habe ich eine Fähre auf Deutsch gerettet!'],
    ], { task: 'Hör die Geschichte.', taskEn: 'Listen to the final episode.' }),
    mcq('wg-q1', 'Was ist das Problem mit Amaras Fahrrad?', ['Es ist weg.', 'Der Reifen ist kaputt.', 'Es ist zu langsam.'], 1),
    mcq('wg-q2', 'Wer hilft der WG?', ['ein Mann mit einem Traktor', 'ein Taxi', 'die Polizei'], 0),
    mcq('wg-q3', 'Wann kommen sie am Hafen an?', ['um 17:59', 'um 18:15', 'um 17:30'], 0),
    mcq('wg-q4', 'Was sagt Amara über Kenji?', ['Er spricht jetzt schlecht Deutsch.', 'Vor einem Jahr hat er kein Deutsch gesprochen.', 'Er will nach Japan zurück.'], 1),
  ]);

const grammatik = section('grammatik', 'grammatik', 'Grammatik', 'Alles auf einen Blick', 'peach', 10,
  ['man, Fragewörter, Zeitangaben'], [
    grammar('g-1', 'Wohin? Präpositionen für Reiseziele', {
      head: ['Ziel', 'Wohin?', 'Wo?'],
      rows: [['Stadt, Land ohne Artikel', '**nach** Hamburg, **nach** Spanien', '**in** Hamburg, **in** Spanien'], ['Land mit Artikel', '**in die** Schweiz, **in die** Türkei', '**in der** Schweiz, **in der** Türkei'], ['Meer, See, Fluss', '**an die** Nordsee, **an den** See', '**an der** Nordsee, **am** See'], ['Berge', '**in die** Berge / Alpen', '**in den** Bergen / Alpen'], ['Insel', '**auf die** Insel', '**auf der** Insel']],
      en: 'Travel destinations: nach + cities and most countries, in die + countries with an article and mountains, an + sea or lake, auf + island.',
    }),
    mcq('g-q1', 'Wir fahren ___ Italien.', ['nach', 'in die', 'an die'], 0),
    mcq('g-q2', 'Im Sommer fahre ich ___ Ostsee.', ['nach', 'an die', 'in die'], 1),
    mcq('g-q3', '___ hilft der WG? Opa Fiete.', ['Wen', 'Wem', 'Wer'], 2),
    mcq('g-q4', 'Ich habe ___ zwei Tagen gebucht.', ['vor', 'in', 'seit'], 0),
  ]);

const uebungen = section('uebungen', 'uebung', 'Übungen', 'Training', 'butter', 15,
  ['über Urlaub sprechen', 'Aussprache: f, v, w'], [
    order('u-order', ['Im Sommer', 'fahren', 'wir', 'an die Nordsee.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence.' }),
    audio('u-aus', 'Aussprache: f, v, w', [
      ['frauKlein', 'f und v klingen meistens gleich, wie f: fahren, Ferien, viel, Vater, vier.'],
      ['frauKlein', 'w klingt wie das englische v: Wetter, Wind, wandern, Wien.'],
      ['frauKlein', 'Bei Fremdwörtern klingt v oft wie w: Vase, Video, November.'],
      ['frauKlein', 'Und jetzt alle zusammen: Viele Wanderer fahren im Winter nach Wien.'],
    ], { task: 'Hör zu und sprich nach.', taskEn: 'Listen and repeat. German v usually sounds like f, and w sounds like English v.' }),
    sort('u-sort', ['wie f', 'wie w (englisch v)'], [['Vater', 0], ['Wetter', 1], ['viel', 0], ['Wind', 1], ['vier', 0], ['Video', 1]], { task: 'Wie klingt es?', taskEn: 'How does it sound?' }),
    gap('u-gap', ['Wir fahren {{nach}} Österreich.', 'Ich liege gern {{am}} Strand.', 'Sie wandern {{in}} den Bergen.', 'Er wohnt {{auf}} einer Insel.'], { bank: ['nach', 'am', 'in', 'auf'], task: 'Ergänze die Präposition.', taskEn: 'Fill in the preposition.' }),
  ]);

const wortschatz = section('wortschatz', 'wortschatz', 'Wortschatz und Check', 'Das kann ich jetzt', 'mint', 8,
  ['Wörter wiederholen', 'den Stand einschätzen', 'bereit für die Prüfung'], [
    cards('w-cards', [
      ['der Urlaub', 'freie Tage', 'vacation'], ['die Reise', 'man fährt weg', 'trip'], ['das Wetter', 'Sonne, Regen …', 'weather'],
      ['Es regnet.', '🌧️', 'it is raining'], ['Die Sonne scheint.', '☀️', 'the sun is shining'], ['das Meer', 'viel Wasser, salzig', 'sea'],
      ['der Strand', 'Sand am Meer', 'beach'], ['die Berge (Pl.)', 'hoch, zum Wandern', 'mountains'], ['die Insel', 'Land im Wasser', 'island'],
      ['buchen', 'reservieren', 'to book'], ['der Norden', '⬆️ auf der Karte', 'north'], ['die Fähre', 'Schiff für Autos und Menschen', 'ferry'],
    ]),
    checklist('w-check', ['Ich kann über Urlaubspläne sprechen.', 'Ich kann das Wetter beschreiben.', 'Ich kann am Telefon ein Zimmer buchen.', 'Ich kann eine Postkarte schreiben.', 'Ich kenne man, wer/wen/wem und die Zeitangaben mit Dativ.']),
    text('w-end', 'Herzlichen Glückwunsch! Du hast alle zwölf Kapitel geschafft. Nach der Kapitelprüfung kommt die **Abschlussprüfung A1**. Sie ist wie die Prüfung *Start Deutsch 1*: Hören, Lesen, Schreiben und Sprechen. Viel Erfolg!', { kicker: 'Geschafft!', en: 'Congratulations, you finished all twelve chapters. After this chapter exam comes the A1 final exam, modeled on Start Deutsch 1. Good luck!' }),
  ]);

export const a1k12: Chapter = {
  id: 'a1-k12', number: 12, title: 'Ab in den Urlaub!', theme: 'Reisen, Wetter, Unterkunft, Postkarte',
  grammar: 'man. Fragewörter wer, wen, wem, was. denn. Zeitangaben mit Dativ.',
  sections: [einstieg, teil1, teil2, teil3, wg, grammatik, uebungen, wortschatz],
  games: ['a1k12-sprint', 'a1k12-memory', 'a1k12-satzbau', 'a1k12-artikel'],
  exam: [
    x(1, mcq('x1', 'Wir fahren ___ Spanien.', ['in', 'nach', 'an'], 1)),
    x(1, mcq('x2', 'Im Urlaub liege ich gern ___ Strand.', ['am', 'im', 'auf'], 0)),
    x(1, mcq('x3', 'In Österreich sagt ___ „Servus“.', ['man', 'mann', 'wer'], 0)),
    x(3, gap('x4', ['{{Wer}} kommt mit? Felix.', '{{Wem}} gehört die Tasche? Nele.', '{{Wen}} rufst du an? Meine Mutter.'], { task: 'Fragewörter.' })),
    x(2, gap('x5', ['Ich lerne {{seit}} einem Jahr Deutsch.', 'Ich war {{vor}} zwei Wochen in Rom.'], { task: 'seit oder vor.' })),
    x(1, mcq('x6', 'Wie ist das Wetter morgen im Süden?', ['sonnig, 24 Grad', 'Regen, 15 Grad', 'Schnee'], 0),
      audio('x-st1', 'Hören: Der Wetterbericht', [
        ['moderatorin', 'Und nun das Wetter für morgen. Im Norden regnet es den ganzen Tag, bei fünfzehn Grad. Auch im Westen gibt es viele Wolken. Im Süden scheint die Sonne. Dort wird es warm, bis vierundzwanzig Grad.'],
      ])),
    x(1, mcq('x7', 'Wie ist das Wetter im Norden? (Hörtext oben)', ['Es regnet.', 'Es schneit.', 'Die Sonne scheint.'], 0)),
    x(1, mcq('x8', 'Was kostet das Zimmer pro Nacht?', ['45 €', '54 €', '90 €'], 0),
      text('x-st2', '**Pension Seeblick** am Bodensee\nDoppelzimmer mit Balkon und Seeblick: 45 € pro Person und Nacht, mit Frühstück.\nFahrradverleih: 10 € pro Tag.\nHunde sind willkommen!\nAnreise ab 15 Uhr, Abreise bis 10 Uhr.', { kicker: 'Lesen' })),
    x(1, mcq('x9', 'Bis wann muss man am letzten Tag das Zimmer verlassen? (Text oben)', ['bis 15 Uhr', 'bis 10 Uhr', 'bis 12 Uhr'], 1)),
    x(2, order('x10', ['Wie', 'ist', 'das Wetter', 'denn?'], { task: 'Bau die Frage.' })),
    x(1, mcq('x11', 'Hamburg liegt im …', ['Süden', 'Norden', 'Osten'], 1)),
    x(1, mcq('x12', '„Moin“ sagt man vor allem in …', ['Norddeutschland', 'Bayern', 'Österreich'], 0)),
  ],
};

export const gamesA1k12: GameDef[] = [
  {
    id: 'a1k12-sprint', engine: 'sprint', title: 'Reise-Sprint', blurb: 'nach, in, an oder auf? Schnell!', skill: 'Präpositionen', tone: 'mint', chapter: 12, emoji: '⚡',
    rules: 'Du siehst ein Reiseziel. Tippe auf die richtige Präposition für Wohin?', label: 'Wohin?',
    items: [
      { q: '___ Berlin', a: 'nach', wrong: ['in die', 'an die'] }, { q: '___ Schweiz', a: 'in die', wrong: ['nach', 'an die'] },
      { q: '___ Nordsee', a: 'an die', wrong: ['nach', 'in die'] }, { q: '___ Berge', a: 'in die', wrong: ['an die', 'nach'] },
      { q: '___ Insel', a: 'auf die', wrong: ['nach', 'an die'] }, { q: '___ Italien', a: 'nach', wrong: ['in die', 'auf'] },
      { q: '___ Türkei', a: 'in die', wrong: ['nach', 'an die'] }, { q: '___ See', a: 'an den', wrong: ['nach', 'in den'] },
      { q: '___ Österreich', a: 'nach', wrong: ['in die', 'an'] }, { q: '___ Ostsee', a: 'an die', wrong: ['in die', 'nach'] },
      { q: '___ Alpen', a: 'in die', wrong: ['an die', 'auf die'] }, { q: '___ Hause', a: 'nach', wrong: ['zu', 'in'] },
    ],
  },
  {
    id: 'a1k12-memory', engine: 'memory', title: 'Wetter-Memory', blurb: 'Wetter und Bild: Finde die Paare.', skill: 'Wetter', tone: 'lilac', chapter: 12, emoji: '🃏',
    rules: 'Dreh zwei Karten um. Ein Paar ist ein Wort und das passende Bild.', kinds: ['Wort', 'Bild'],
    pairs: [['die Sonne', '☀️'], ['der Regen', '🌧️'], ['der Schnee', '❄️'], ['der Wind', '💨'], ['die Wolke', '☁️'], ['das Gewitter', '⛈️'], ['der Strand', '🏖️'], ['die Berge', '⛰️'], ['der Koffer', '🧳'], ['die Fähre', '⛴️']],
  },
  {
    id: 'a1k12-satzbau', engine: 'satzbau', title: 'Urlaubs-Baukasten', blurb: 'Bau Sätze über Reisen.', skill: 'Satzbau', tone: 'sky', chapter: 12, emoji: '🧱',
    rules: 'Tippe die Wörter in der richtigen Reihenfolge an.',
    sentences: [
      { parts: ['Im Sommer', 'fahren', 'wir', 'an die Nordsee.'], hint: 'Verb auf Position 2' },
      { parts: ['In den Alpen', 'kann', 'man', 'wandern.'], hint: 'man + Modalverb' },
      { parts: ['Wie', 'ist', 'das Wetter', 'denn?'], hint: 'denn am Ende' },
      { parts: ['Ich', 'lerne', 'seit einem Jahr', 'Deutsch.'], hint: 'seit + Dativ' },
      { parts: ['Wem', 'gehört', 'der', 'Koffer?'], hint: 'wem = Dativ' },
      { parts: ['Es', 'regnet', 'den ganzen', 'Tag.'], hint: 'Wetter: es' },
      { parts: ['Nach dem Frühstück', 'gehen', 'wir', 'zum Strand.'], hint: 'nach + Dativ' },
      { parts: ['Gestern', 'sind', 'wir', 'im Meer geschwommen.'], hint: 'schwimmen: Perfekt mit sein' },
    ],
  },
  {
    id: 'a1k12-artikel', engine: 'regen', title: 'Artikel-Regen', blurb: 'der, die oder das? Reisen und Wetter.', skill: 'Artikel', tone: 'rose', chapter: 12, emoji: '☔',
    rules: 'Ein Nomen fällt herunter. Tippe auf den richtigen Artikel.', buckets: ['der', 'die', 'das'],
    words: artikel('der Urlaub, das Meer, die Reise, der Strand, das Wetter, die Insel, der Koffer, das Hotel, die Fähre, der Regen, das Zimmer, die Sonne, der Schnee, das Gewitter, die Postkarte, der Wind, das Ticket, die Jugendherberge'),
  },
];
