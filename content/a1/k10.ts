import type { Chapter, GameDef, GlossaryEntry } from '../types';
import { audio, cards, checklist, compose, gap, grammar, match, mcq, order, overview, phrases, section, sort, text, tip, x } from '../helpers';

// A1 Kapitel 10: Lebenslauf, Schule und Studium, über Vergangenes sprechen, telefonieren.
// Grammar: Perfekt mit haben und sein, Partizip II (regelmäßig, unregelmäßig, -ieren). Aussprache: h.

export const glossaryA1k10: Record<string, GlossaryEntry> = {
  Perfekt: { de: 'Eine Zeitform für die Vergangenheit: Ich habe gearbeitet.', en: 'present perfect (spoken past)' },
  Studium: { de: 'Man lernt an der Universität.', en: 'university studies' },
  Ausbildung: { de: 'Man lernt einen Beruf in einer Firma und in der Schule.', en: 'vocational training, apprenticeship' },
  Lebenslauf: { de: 'Ein Text mit den wichtigen Stationen im Leben: Schule, Arbeit …', en: 'CV, résumé' },
  Abitur: { de: 'Der Schulabschluss nach 12 oder 13 Jahren. Danach kann man studieren.', en: 'high school diploma (university entrance)' },
  Praktikum: { de: 'Man arbeitet kurz in einer Firma und lernt dort.', en: 'internship' },
  gestern: { de: 'Der Tag vor heute.', en: 'yesterday' },
  letzte: { de: 'Vorbei. „letzte Woche“ = die Woche vor dieser Woche.', en: 'last' },
  Mailbox: { de: 'Hier kann man eine Nachricht am Telefon hinterlassen.', en: 'voicemail' },
};

const einstieg = section('einstieg', 'einstieg', 'Einstieg', 'Was hast du gemacht?', 'butter', 8,
  ['das Kapitel kennenlernen', 'erste Sätze im Perfekt'], [
    overview('e-over', 'Kapitel 10: Lernen und Arbeiten',
      'In Kapitel 10 sprichst du über die Vergangenheit. Was hast du [[gestern]] gemacht? Was hast du [[letzte]] Woche gelernt? Du liest einen [[Lebenslauf]] und sprichst über Schule, [[Studium]] und [[Ausbildung]]. Du telefonierst und sprichst auf eine [[Mailbox]].\n\nGrammatik: das [[Perfekt]]. So spricht man in Deutschland über die Vergangenheit.',
      'This chapter is about the past: what you did yesterday, school, studies and training, a CV and phone calls. Grammar: the present perfect (Perfekt) with haben or sein and the past participle (gemacht, gegangen, studiert). In spoken German this is the normal past tense.',
      ['über gestern sprechen', 'den Lebenslauf erzählen', 'telefonieren und eine Nachricht hinterlassen', 'das Perfekt bilden']),
    text('e-text', '*Gestern **habe** ich lange **geschlafen**. Dann **habe** ich Kaffee **getrunken**. Am Nachmittag **bin** ich in die Stadt **gefahren**.*\n\nSo klingt das Perfekt: **haben** oder **sein** auf Position 2, das **Partizip** am Ende.', { kicker: 'Neu', en: 'The Perfekt has two parts: haben or sein in position 2 and the past participle at the end. Another sentence bracket!' }),
    match('e-match', [['machen', 'gemacht'], ['schlafen', 'geschlafen'], ['trinken', 'getrunken'], ['fahren', 'gefahren'], ['lernen', 'gelernt'], ['gehen', 'gegangen']], { task: 'Infinitiv und Partizip', taskEn: 'Match the infinitive and the participle.' }),
  ]);

const teil1 = section('teil-1', 'modul', 'Teil 1', 'Gestern', 'mint', 15,
  ['über gestern sprechen', 'Perfekt mit haben', 'Partizip II'], [
    audio('t1-audio', 'Hören: Wie war dein Tag?', [
      ['nele', 'Hallo Kenji! Wie war dein freier Tag?'],
      ['kenji', 'Super! Am Morgen habe ich lange geschlafen. Dann habe ich mit meiner Mutter telefoniert.'],
      ['nele', 'Und am Nachmittag?'],
      ['kenji', 'Am Nachmittag habe ich Deutsch gelernt. Ich habe zwei Stunden Vokabeln gemacht.'],
      ['nele', 'Fleißig! Und am Abend?'],
      ['kenji', 'Am Abend habe ich einen Film gesehen. Und du? Was hast du gemacht?'],
      ['nele', 'Ich habe den ganzen Tag gearbeitet. Ich habe eine App programmiert.'],
    ], { task: 'Hör zu. Was hat Kenji gemacht?', taskEn: 'Listen. What did Kenji do on his day off?' }),
    order('t1-order', ['lange geschlafen', 'mit der Mutter telefoniert', 'Deutsch gelernt', 'einen Film gesehen'], { task: 'Was hat Kenji zuerst gemacht? Bring die Aktivitäten in die richtige Reihenfolge.', taskEn: 'Put Kenji’s activities in order.' }),
    mcq('t1-q1', 'Was hat Nele gemacht?', ['Sie hat geschlafen.', 'Sie hat gearbeitet.', 'Sie hat einen Film gesehen.'], 1),
    grammar('t1-gram', 'Das Partizip II', {
      head: ['Typ', 'Infinitiv', 'Partizip II'],
      rows: [['regelmäßig: ge- … -t', 'machen, lernen, kaufen', '**ge**mach**t**, **ge**lern**t**, **ge**kauf**t**'], ['unregelmäßig: ge- … -en', 'schlafen, sehen, trinken', '**ge**schlaf**en**, **ge**seh**en**, **ge**trunk**en**'], ['-ieren: ohne ge-', 'telefonieren, studieren', 'telefonier**t**, studier**t**'], ['be-, ver-, er-: ohne ge-', 'besuchen, verstehen, erzählen', 'besuch**t**, verstand**en**, erzähl**t**']],
      notes: ['Unregelmäßige Partizipien muss man lernen. Oft ändert sich auch der Vokal: trinken → getr**u**nken.'],
      en: 'Regular verbs: ge- + stem + -t. Irregular: ge- + stem + -en, often with a vowel change. Verbs ending in -ieren and verbs with be-, ver-, er- have no ge-.',
    }),
    sort('t1-sort', ['mit ge-', 'ohne ge-'], [['gemacht', 0], ['studiert', 1], ['gelernt', 0], ['besucht', 1], ['gesehen', 0], ['telefoniert', 1], ['getrunken', 0], ['verstanden', 1]],
      { task: 'Mit oder ohne ge-?', taskEn: 'Sort the participles.' }),
    gap('t1-gap', ['Ich habe Pizza {{gegessen}}. (essen)', 'Wir haben Musik {{gehört}}. (hören)', 'Hast du Deutsch {{gelernt}}? (lernen)', 'Sie hat Medizin {{studiert}}. (studieren)', 'Er hat ein Buch {{gelesen}}. (lesen)'],
      { task: 'Ergänze das Partizip.', taskEn: 'Fill in the participle.' }),
  ]);

const teil2 = section('teil-2', 'modul', 'Teil 2', 'Mein Weg', 'sky', 15,
  ['einen Lebenslauf verstehen', 'Perfekt mit sein', 'Jahreszahlen'], [
    grammar('t2-gram', 'Perfekt mit sein', {
      intro: 'Die meisten Verben bilden das Perfekt mit **haben**. Verben der **Bewegung** (von A nach B) und der **Veränderung** nehmen **sein**.',
      head: ['Infinitiv', 'Perfekt mit sein'],
      rows: [['gehen', 'Ich **bin** ins Kino **gegangen**.'], ['fahren', 'Wir **sind** nach Berlin **gefahren**.'], ['fliegen', 'Amara **ist** nach Ghana **geflogen**.'], ['kommen', 'Wann **bist** du nach Hause **gekommen**?'], ['umziehen', 'Kenji **ist** nach Leipzig **umgezogen**.'], ['aufstehen', 'Ich **bin** um sieben **aufgestanden**.'], ['bleiben, sein', 'Ich **bin** zu Hause **geblieben**. Ich **bin** in Wien **gewesen**.']],
      notes: ['Trennbare Verben: **ge** steht in der Mitte: auf**ge**standen, um**ge**zogen, ein**ge**kauft.', '**bleiben** und **sein** nehmen auch sein, obwohl es keine Bewegung gibt.'],
      en: 'Verbs of movement (gehen, fahren, fliegen, kommen) and change (aufstehen, umziehen) use sein. Also bleiben and sein. In separable verbs, ge- goes in the middle: aufgestanden.',
    }),
    sort('t2-sort', ['haben', 'sein'], [['gemacht', 0], ['gefahren', 1], ['gegessen', 0], ['gegangen', 1], ['gearbeitet', 0], ['geflogen', 1], ['gelesen', 0], ['geblieben', 1]],
      { task: 'haben oder sein?', taskEn: 'Does the participle go with haben or sein?' }),
    text('t2-text', `**Amara Owusu: Mein Weg**

Ich bin 1993 in Accra geboren. 2011 habe ich die Schule abgeschlossen. Dann habe ich vier Jahre Pflege studiert. Danach habe ich fünf Jahre in einem Krankenhaus in Accra gearbeitet.

2020 habe ich einen Deutschkurs gemacht, zuerst online. 2022 bin ich nach Deutschland gekommen. In Leipzig habe ich noch einen Kurs besucht und eine Prüfung gemacht. Seit 2023 arbeite ich hier im Krankenhaus.`, { kicker: 'Lesen', task: 'Lies Amaras Lebenslauf.', taskEn: 'Read Amara’s story. "Ich bin 1993 geboren" = I was born in 1993.' }),
    match('t2-match', [['1993', 'in Accra geboren'], ['2011', 'Schule abgeschlossen'], ['2020', 'Deutschkurs online'], ['2022', 'nach Deutschland gekommen'], ['2023', 'Arbeit in Leipzig']], { task: 'Was war wann?', taskEn: 'What happened when?' }),
    tip('t2-tip', 'Jahreszahlen', 'Bis 1999 sagt man die Jahre in zwei Teilen: **1993** = *neunzehnhundertdreiundneunzig*.\n\nAb 2000: **2022** = *zweitausendzweiundzwanzig*.\n\nMan sagt **2022** oder **im Jahr 2022**, aber nicht *in 2022*.'),
    mcq('t2-q1', 'Was hat Amara studiert?', ['Medizin', 'Pflege', 'Deutsch'], 1),
    mcq('t2-q2', 'Wie lange hat sie in Accra im Krankenhaus gearbeitet?', ['vier Jahre', 'fünf Jahre', 'zwei Jahre'], 1),
  ]);

const teil3 = section('teil-3', 'modul', 'Teil 3', 'Am Telefon', 'lilac', 15,
  ['telefonieren', 'eine Nachricht hinterlassen'], [
    audio('t3-audio', 'Hören: Eine Nachricht auf der Mailbox', [
      ['erzaehler', 'Hallo, hier ist die Mailbox von Felix Huber. Bitte sprechen Sie nach dem Ton.'],
      ['resi', 'Servus Felix, hier ist Resi aus Innsbruck! Lang nicht gehört! Ich bin nächste Woche in Leipzig. Ich habe dort ein Seminar. Hast du am Mittwochabend Zeit? Ruf mich bitte zurück. Meine Nummer ist null sechs sechs vier, drei vier fünf, zwölf achtundsiebzig. Baba!'],
    ], { task: 'Hör zu. Wer ruft an und warum?', taskEn: 'Listen. Who is calling and why? "Baba" is a casual Austrian goodbye.' }),
    mcq('t3-q1', 'Woher kommt Resi?', ['aus Wien', 'aus Innsbruck', 'aus Leipzig'], 1),
    mcq('t3-q2', 'Warum ist Resi in Leipzig?', ['Sie hat Urlaub.', 'Sie hat ein Seminar.', 'Sie zieht um.'], 1),
    mcq('t3-q3', 'Was soll Felix machen?', ['zurückrufen', 'eine E-Mail schreiben', 'nach Innsbruck fahren'], 0),
    phrases('t3-phr', 'Am Telefon', {
      'Sich melden': ['Hallo, hier ist …', 'Guten Tag, mein Name ist …', 'Firma Müller, Sie sprechen mit …'],
      'Bitten': ['Kann ich bitte mit … sprechen?', 'Können Sie das bitte wiederholen?', 'Bitte sprechen Sie langsam.'],
      'Mailbox': ['Bitte ruf mich zurück.', 'Meine Nummer ist …', 'Bis bald! / Auf Wiederhören!'],
    }),
    compose('t3-comp', 'Sprich auf die Mailbox von deiner Kollegin Sara.', [
      ['Melde dich.', 'Say who you are.', ['Hallo Sara,', 'hier', 'ist', 'Tom.']],
      ['Sag, dass du gestern krank warst.', 'Say you were sick yesterday.', ['Ich', 'war', 'gestern', 'krank.']],
      ['Frag nach den Hausaufgaben.', 'Ask about the homework.', ['Was', 'habt', 'ihr', 'gemacht?']],
      ['Bitte um einen Rückruf.', 'Ask her to call back.', ['Ruf', 'mich', 'bitte', 'zurück.']],
    ], { task: 'Bau die Nachricht.', taskEn: 'Build the message.' }),
  ]);

const wg = section('wg', 'kommunikation', 'Die Fuchsbau-WG', 'Folge 10: Das Wochenende', 'rose', 10,
  ['eine Geschichte hören', 'das Perfekt im Kontext'], [
    text('wg-intro', 'Es ist Montagmorgen. Alle sitzen beim Frühstück. Wer hat am Wochenende was gemacht?', { kicker: 'Die Geschichte', en: 'Monday morning. Everyone is at breakfast. Who did what at the weekend?' }),
    audio('wg-audio', 'Folge 10: Das Wochenende', [
      ['amara', 'Und Felix, wie war dein Wochenende mit Resi?'],
      ['felix', 'Toll! Wir sind am Samstag nach Dresden gefahren. Wir haben die Frauenkirche gesehen und Kuchen gegessen.'],
      ['nele', 'Ich bin zu Hause geblieben. Ich habe für die Uni gelernt. Langweilig!'],
      ['kenji', 'Ich habe am Samstag gearbeitet. Das Restaurant war voll. Wir haben zweihundert Gäste gehabt!'],
      ['amara', 'Und ich? Ich habe etwas Wichtiges gemacht.'],
      ['nele', 'Was denn?'],
      ['amara', 'Ich habe die B1-Prüfung gemacht. Und ich habe bestanden!'],
      ['felix', 'Wahnsinn! Gratuliere! Das müssen wir feiern!'],
    ], { task: 'Hör die Geschichte.', taskEn: 'Listen to the story. "bestanden" = passed (an exam).' }),
    match('wg-match', [['Felix', 'ist nach Dresden gefahren'], ['Nele', 'ist zu Hause geblieben'], ['Kenji', 'hat im Restaurant gearbeitet'], ['Amara', 'hat eine Prüfung gemacht']], { task: 'Wer hat was gemacht?', taskEn: 'Who did what?' }),
    mcq('wg-q1', 'Was haben Felix und Resi in Dresden gegessen?', ['Pizza', 'Kuchen', 'Würstchen'], 1),
    mcq('wg-q2', 'Wie viele Gäste hatte das Restaurant?', ['20', '200', '2000'], 1),
  ]);

const grammatik = section('grammatik', 'grammatik', 'Grammatik', 'Alles auf einen Blick', 'peach', 10,
  ['das Perfekt'], [
    grammar('g-1', 'Das Perfekt: die Satzklammer', {
      head: ['Position 1', 'Position 2', 'Mitte', 'Ende'],
      rows: [['Ich', '**habe**', 'gestern Pizza', '**gegessen**.'], ['Am Samstag', '**sind**', 'wir nach Dresden', '**gefahren**.'], ['Was', '**hast**', 'du am Wochenende', '**gemacht**?'], ['**Bist**', 'du schon', 'mal in Wien', '**gewesen**?']],
      en: 'haben/sein in position 2 (or 1 in yes/no questions), participle at the end.',
    }),
    grammar('g-2', 'Wichtige unregelmäßige Partizipien', {
      head: ['mit haben', '', 'mit sein', ''],
      rows: [['essen', 'gegessen', 'gehen', 'gegangen'], ['trinken', 'getrunken', 'fahren', 'gefahren'], ['schlafen', 'geschlafen', 'kommen', 'gekommen'], ['sehen', 'gesehen', 'fliegen', 'geflogen'], ['lesen', 'gelesen', 'bleiben', 'geblieben'], ['schreiben', 'geschrieben', 'sein', 'gewesen']],
      en: 'Learn these by heart.',
    }),
    mcq('g-q1', 'Wir ___ nach Hamburg gefahren.', ['haben', 'sind', 'hat'], 1),
    mcq('g-q2', 'Ich habe einen Brief ___.', ['geschreibt', 'geschrieben', 'schreiben'], 1),
    mcq('g-q3', 'Wann ___ du aufgestanden?', ['hast', 'bist', 'ist'], 1),
  ]);

const uebungen = section('uebungen', 'uebung', 'Übungen', 'Training', 'butter', 15,
  ['über das Wochenende erzählen', 'Aussprache: h'], [
    compose('u-comp', 'Erzähl über dein Wochenende.', [
      ['Samstagmorgen: lange schlafen', 'Saturday morning: sleep in', ['Am Samstag', 'habe', 'ich', 'lange geschlafen.']],
      ['Samstagnachmittag: in die Stadt fahren', 'Saturday afternoon: go into town', ['Dann', 'bin', 'ich', 'in die Stadt gefahren.']],
      ['Sonntag: Freunde besuchen', 'Sunday: visit friends', ['Am Sonntag', 'habe', 'ich', 'Freunde besucht.']],
    ], { task: 'Bau die Sätze.', taskEn: 'Build the sentences.' }),
    audio('u-aus', 'Aussprache: das h', [
      ['frauKlein', 'Am Wortanfang hört man das h: Hallo, Haus, heute, haben, hören.'],
      ['frauKlein', 'Nach einem Vokal hört man das h nicht. Der Vokal ist dann lang: gehen, Uhr, wohnen, Fahrrad.'],
    ], { task: 'Hör zu und sprich nach.', taskEn: 'Listen and repeat. At the start of a word you hear the h. After a vowel it is silent and makes the vowel long.' }),
    sort('u-sort', ['h hört man', 'h hört man nicht'], [['Haus', 0], ['gehen', 1], ['heute', 0], ['Uhr', 1], ['hören', 0], ['wohnen', 1]], { task: 'Hört man das h?', taskEn: 'Do you hear the h?' }),
    gap('u-gap', ['Ich {{bin}} um sieben aufgestanden.', 'Wir {{haben}} Kaffee getrunken.', 'Er {{ist}} nach Wien geflogen.', '{{Hast}} du die E-Mail gelesen?'], { bank: ['bin', 'haben', 'ist', 'Hast'], task: 'haben oder sein?', taskEn: 'Fill in haben or sein.' }),
  ]);

const wortschatz = section('wortschatz', 'wortschatz', 'Wortschatz und Check', 'Das kann ich jetzt', 'mint', 8,
  ['Wörter wiederholen', 'den Stand einschätzen'], [
    cards('w-cards', [
      ['gestern', 'der Tag vor heute', 'yesterday'], ['letzte Woche', 'die Woche vor dieser', 'last week'], ['die Schule', 'für Kinder', 'school'],
      ['das Studium', 'an der Uni', 'studies'], ['die Ausbildung', 'einen Beruf lernen', 'training'], ['das Praktikum', 'kurz in einer Firma lernen', 'internship'],
      ['die Prüfung', 'ein Test', 'exam'], ['bestehen', 'die Prüfung ist gut', 'to pass'], ['umziehen', 'neue Wohnung', 'to move'],
      ['geboren', 'der Anfang vom Leben', 'born'], ['zurückrufen', 'noch einmal anrufen', 'to call back'], ['die Mailbox', 'Nachricht am Telefon', 'voicemail'],
    ]),
    checklist('w-check', ['Ich kann sagen, was ich gestern gemacht habe.', 'Ich kenne das Perfekt mit haben und sein.', 'Ich kann über Schule und Beruf sprechen.', 'Ich kann eine Nachricht am Telefon verstehen.', 'Ich kann Jahreszahlen sagen.']),
  ]);

export const a1k10: Chapter = {
  id: 'a1-k10', number: 10, title: 'Lernen und Arbeiten', theme: 'Vergangenheit, Lebenslauf, Telefonieren',
  grammar: 'Perfekt mit haben und sein. Partizip II.',
  sections: [einstieg, teil1, teil2, teil3, wg, grammatik, uebungen, wortschatz],
  games: ['a1k10-sprint', 'a1k10-memory', 'a1k10-satzbau', 'a1k10-artikel'],
  exam: [
    x(1, mcq('x1', 'Ich habe gestern Fußball ___.', ['gespielt', 'spielen', 'gespielen'], 0)),
    x(1, mcq('x2', 'Sie ___ nach Paris geflogen.', ['hat', 'ist', 'haben'], 1)),
    x(1, mcq('x3', 'Partizip von „telefonieren“:', ['getelefoniert', 'telefoniert', 'telefonieren'], 1)),
    x(4, gap('x4', ['Wir haben Kaffee {{getrunken}}. (trinken)', 'Ich bin zu Hause {{geblieben}}. (bleiben)', 'Er hat ein Buch {{gelesen}}. (lesen)', 'Sie ist um sechs {{aufgestanden}}. (aufstehen)'], { task: 'Partizip II.' })),
    x(2, gap('x5', ['Ich {{bin}} ins Kino gegangen.', 'Wir {{haben}} Pizza gegessen.'], { task: 'haben oder sein.' })),
    x(1, mcq('x6', 'Wann ist Herr Kowalski nach Deutschland gekommen?', ['2010', '2015', '2018'], 1),
      text('x-st1', 'Ich heiße Marek Kowalski. Ich bin in Krakau geboren. Dort habe ich Informatik studiert. 2015 bin ich nach Deutschland gekommen. Zuerst habe ich in München gearbeitet. 2018 bin ich nach Hamburg umgezogen. Jetzt arbeite ich bei einer Softwarefirma.', { kicker: 'Lesen' })),
    x(1, mcq('x7', 'Wo wohnt Herr Kowalski jetzt? (Text oben)', ['in Krakau', 'in München', 'in Hamburg'], 2)),
    x(1, mcq('x8', 'Warum ruft Frau Berger an?', ['Der Kurs fällt aus.', 'Der Kurs ist in einem anderen Raum.', 'Der Kurs beginnt früher.'], 1),
      audio('x-st2', 'Hören: Nachricht von der Sprachschule', [
        ['frauKlein', 'Guten Tag, hier ist Petra Berger von der Sprachschule Lingua. Ihr Deutschkurs morgen ist nicht im Raum zwölf, sondern im Raum zwanzig. Der Kurs beginnt wie immer um neun Uhr. Bis morgen!'],
      ])),
    x(1, mcq('x9', 'In welchem Raum ist der Kurs? (Hörtext oben)', ['12', '20', '9'], 1)),
    x(2, order('x10', ['Am Sonntag', 'bin', 'ich', 'nach Hause gefahren.'], { task: 'Bau den Satz.' })),
    x(1, mcq('x11', 'Was sagt man am Telefon, wenn man nichts versteht?', ['Können Sie das bitte wiederholen?', 'Ruf mich zurück!', 'Auf Wiederhören!'], 0)),
    x(1, mcq('x12', '1998 sagt man:', ['eintausendneunhundertachtundneunzig', 'neunzehnhundertachtundneunzig', 'neunzehnachtundneunzig'], 1)),
  ],
};

export const gamesA1k10: GameDef[] = [
  {
    id: 'a1k10-sprint', engine: 'sprint', title: 'Partizip-Sprint', blurb: 'Welches Partizip ist richtig?', skill: 'Partizip II', tone: 'mint', chapter: 10, emoji: '⚡',
    rules: 'Du siehst einen Infinitiv. Tippe auf das richtige Partizip II.', label: 'Partizip?',
    items: [
      { q: 'machen', a: 'gemacht', wrong: ['gemachen', 'machte'] }, { q: 'trinken', a: 'getrunken', wrong: ['getrinkt', 'getrinken'] },
      { q: 'gehen', a: 'gegangen', wrong: ['gegeht', 'gegehen'] }, { q: 'studieren', a: 'studiert', wrong: ['gestudiert', 'studieren'] },
      { q: 'schlafen', a: 'geschlafen', wrong: ['geschlaft', 'geschläft'] }, { q: 'besuchen', a: 'besucht', wrong: ['gebesucht', 'besuchen'] },
      { q: 'sehen', a: 'gesehen', wrong: ['gesieht', 'gesaht'] }, { q: 'schreiben', a: 'geschrieben', wrong: ['geschreibt', 'geschreiben'] },
      { q: 'aufstehen', a: 'aufgestanden', wrong: ['geaufstanden', 'aufgesteht'] }, { q: 'einkaufen', a: 'eingekauft', wrong: ['geeinkauft', 'eingekaufen'] },
      { q: 'sein', a: 'gewesen', wrong: ['geseint', 'gesein'] }, { q: 'kommen', a: 'gekommen', wrong: ['gekommt', 'gekamen'] },
      { q: 'verstehen', a: 'verstanden', wrong: ['geverstanden', 'versteht'] }, { q: 'essen', a: 'gegessen', wrong: ['geesst', 'gegesst'] },
    ],
  },
  {
    id: 'a1k10-memory', engine: 'memory', title: 'Partizip-Memory', blurb: 'Infinitiv und Partizip: Finde die Paare.', skill: 'Partizip II', tone: 'lilac', chapter: 10, emoji: '🃏',
    rules: 'Dreh zwei Karten um. Ein Paar ist ein Infinitiv und sein Partizip.', kinds: ['Infinitiv', 'Partizip'],
    pairs: [['essen', 'gegessen'], ['fahren', 'gefahren'], ['lesen', 'gelesen'], ['fliegen', 'geflogen'], ['bleiben', 'geblieben'], ['finden', 'gefunden'], ['sprechen', 'gesprochen'], ['nehmen', 'genommen'], ['helfen', 'geholfen'], ['treffen', 'getroffen']],
  },
  {
    id: 'a1k10-satzbau', engine: 'satzbau', title: 'Perfekt-Baukasten', blurb: 'haben oder sein auf 2, Partizip ans Ende!', skill: 'Perfekt', tone: 'sky', chapter: 10, emoji: '🧱',
    rules: 'Tippe die Wörter in der richtigen Reihenfolge an.',
    sentences: [
      { parts: ['Ich', 'habe', 'Pizza', 'gegessen.'], hint: 'haben + Partizip' },
      { parts: ['Wir', 'sind', 'nach Dresden', 'gefahren.'], hint: 'Bewegung: sein' },
      { parts: ['Was', 'hast', 'du', 'gemacht?'], hint: 'W-Frage im Perfekt' },
      { parts: ['Gestern', 'bin', 'ich', 'zu Hause geblieben.'], hint: 'bleiben: sein' },
      { parts: ['Amara', 'hat', 'die Prüfung', 'bestanden.'], hint: 'bestehen: haben' },
      { parts: ['Bist', 'du', 'früh', 'aufgestanden?'], hint: 'Ja/Nein-Frage, sein' },
      { parts: ['Kenji', 'hat', 'mit seiner Mutter', 'telefoniert.'], hint: '-ieren: ohne ge-' },
      { parts: ['Ich', 'bin', '1995', 'geboren.'], hint: 'geboren mit sein' },
    ],
  },
  {
    id: 'a1k10-artikel', engine: 'regen', title: 'haben oder sein?', blurb: 'Fang die Partizipien!', skill: 'Perfekt', tone: 'rose', chapter: 10, emoji: '☔',
    rules: 'Ein Partizip fällt herunter. Perfekt mit haben, mit sein, oder ist es kein Partizip?', buckets: ['haben', 'sein', 'kein Partizip'],
    words: [['gemacht', 0], ['gegessen', 0], ['gelernt', 0], ['getrunken', 0], ['studiert', 0], ['gelesen', 0], ['gegangen', 1], ['gefahren', 1], ['geflogen', 1], ['gekommen', 1], ['geblieben', 1], ['aufgestanden', 1], ['gehen', 2], ['machte', 2], ['fährt', 2], ['lesen', 2], ['geht', 2], ['trinkt', 2]],
  },
];
