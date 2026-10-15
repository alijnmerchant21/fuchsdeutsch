import type { Chapter, GameDef, GlossaryEntry } from '../types';
import { audio, cards, checklist, compose, gap, grammar, match, mcq, order, overview, phrases, section, sort, text, tip, x } from '../helpers';

// A1 Kapitel 5: Uhrzeit, Tagesablauf, Familie, Termine am Telefon, sich entschuldigen.
// Grammar: Possessivartikel, Modalverben können/müssen/wollen, Satzklammer. Aussprache: r.

export const glossaryA1k5: Record<string, GlossaryEntry> = {
  Uhrzeit: { de: 'Wie spät ist es? Zum Beispiel: Es ist acht Uhr.', en: 'time (on the clock)' },
  Viertel: { de: 'Ein Viertel ist 15 Minuten.', en: 'quarter' },
  halb: { de: '30 Minuten vor der vollen Stunde. „halb acht“ = 7:30.', en: 'half (halb acht = 7:30)' },
  Termin: { de: 'Eine feste Zeit, zum Beispiel beim Arzt.', en: 'appointment' },
  Verspätung: { de: 'Wenn man zu spät kommt.', en: 'delay, being late' },
  Familie: { de: 'Eltern, Kinder, Geschwister, Großeltern.', en: 'family' },
  Geschwister: { de: 'Brüder und Schwestern.', en: 'siblings' },
  müssen: { de: 'Man hat keine Wahl. „Ich muss arbeiten.“', en: 'must, have to' },
  können: { de: 'Man ist fähig oder hat Zeit. „Ich kann schwimmen.“', en: 'can, to be able to' },
  wollen: { de: 'Einen Plan oder Wunsch haben. „Ich will Deutsch lernen.“', en: 'to want' },
  Alltag: { de: 'Das normale Leben, jeden Tag.', en: 'everyday life' },
};

const einstieg = section('einstieg', 'einstieg', 'Einstieg', 'Wie spät ist es?', 'butter', 8,
  ['das Kapitel kennenlernen', 'erste Uhrzeiten'], [
    overview('e-over', 'Kapitel 5: Alltag und Familie',
      'In Kapitel 5 geht es um deinen [[Alltag]]. Wann stehst du auf? Wann arbeitest du? Du lernst die [[Uhrzeit]], machst einen [[Termin]] am Telefon und entschuldigst dich für eine [[Verspätung]]. Du sprichst auch über deine [[Familie]].\n\nGrammatik: Modalverben wie [[können]], [[müssen]] und [[wollen]]. Mit ihnen bekommt der Satz eine **Klammer**.',
      'This chapter is about daily life and family: telling the time, daily routines, making an appointment on the phone and apologizing for being late. Grammar: possessive articles (mein, dein …), modal verbs (können, müssen, wollen) and the sentence bracket.',
      ['die Uhrzeit sagen', 'über den Tag sprechen', 'die Familie vorstellen', 'einen Termin machen', 'sich entschuldigen']),
    match('e-match', [['8:00', 'acht Uhr'], ['8:15', 'Viertel nach acht'], ['8:30', 'halb neun'], ['8:45', 'Viertel vor neun'], ['8:10', 'zehn nach acht'], ['8:50', 'zehn vor neun']],
      { task: 'Wie spät ist es?', taskEn: 'Match the time. Careful: halb neun means 8:30, half to nine!' }),
  ]);

const teil1 = section('teil-1', 'modul', 'Teil 1', 'Die Uhrzeit und mein Tag', 'mint', 15,
  ['die Uhrzeit sagen', 'am, um, von … bis', 'den Tagesablauf beschreiben'], [
    grammar('t1-gram', 'Die Uhrzeit', {
      intro: 'Es gibt zwei Arten: **offiziell** (Bahn, Radio, Arbeit) und **inoffiziell** (mit Freunden).',
      head: ['Uhr', 'offiziell', 'inoffiziell'],
      rows: [['7:00', 'sieben Uhr', 'sieben'], ['7:15', 'sieben Uhr fünfzehn', 'Viertel nach sieben'], ['7:30', 'sieben Uhr dreißig', '**halb acht**'], ['7:45', 'sieben Uhr fünfundvierzig', 'Viertel vor acht'], ['19:20', 'neunzehn Uhr zwanzig', 'zwanzig nach sieben']],
      notes: ['**halb acht** = 7:30. Man denkt an die nächste Stunde!', 'Fragen: *Wie spät ist es?* oder *Wie viel Uhr ist es?*', 'In Teilen von Süddeutschland und Österreich sagt man auch *viertel acht* (7:15) und *dreiviertel acht* (7:45).'],
      en: 'Informal time: halb acht = 7:30 (half way to eight). Viertel nach = quarter past, Viertel vor = quarter to.',
    }),
    gap('t1-gap', ['9:30 = halb {{zehn}}', '6:15 = Viertel nach {{sechs}}', '11:45 = Viertel vor {{zwölf}}', '2:30 = halb {{drei}}'],
      { task: 'Ergänze die Stunde.', taskEn: 'Fill in the hour as a word.' }),
    grammar('t1-praep', 'Zeitangaben: am, um, von … bis', {
      head: ['', 'Beispiel'],
      rows: [['**am** + Tag / Tageszeit', 'am Montag, am Morgen, am Abend'], ['**um** + Uhrzeit', 'um acht Uhr, um halb neun'], ['**von … bis** + Uhrzeit', 'von neun bis fünf'], ['Ausnahme', '**in** der Nacht']],
      en: 'am + day or part of day, um + clock time, von … bis = from … to.',
    }),
    text('t1-text', `**Amaras Tag**

Amara arbeitet im Krankenhaus. Diese Woche hat sie Frühdienst.
Sie steht um fünf Uhr auf. Um halb sechs frühstückt sie.
Sie arbeitet von sechs bis zwei. Am Nachmittag kauft sie ein oder schläft.
Am Abend telefoniert sie mit ihrer Mutter in Accra. Um zehn geht sie ins Bett.`, { kicker: 'Lesen', task: 'Lies den Text.', taskEn: 'Read about Amara’s day. Frühdienst = early shift.' }),
    mcq('t1-q1', 'Wann steht Amara auf?', ['um fünf Uhr', 'um halb sechs', 'um sechs Uhr'], 0),
    mcq('t1-q2', 'Wann arbeitet sie?', ['von fünf bis zehn', 'von sechs bis zwei', 'am Abend'], 1),
    tip('t1-tip', 'Trennbare Verben', '**aufstehen**: *Sie **steht** um fünf Uhr **auf**.* Der erste Teil geht ans Ende. Mehr dazu in Kapitel 6!'),
    gap('t1-gap2', ['{{Am}} Montag habe ich frei.', '{{Um}} acht Uhr frühstücke ich.', 'Ich arbeite {{von}} neun {{bis}} fünf.', '{{In}} der Nacht schlafe ich.'],
      { bank: ['Am', 'Um', 'von', 'bis', 'In'], task: 'Ergänze am, um, von, bis, in.', taskEn: 'Fill in the time prepositions.' }),
  ]);

const teil2 = section('teil-2', 'modul', 'Teil 2', 'Das ist meine Familie', 'sky', 15,
  ['die Familie vorstellen', 'Possessivartikel'], [
    match('t2-match', [['die Mutter', 'der Vater'], ['die Schwester', 'der Bruder'], ['die Tochter', 'der Sohn'], ['die Oma', 'der Opa'], ['die Tante', 'der Onkel'], ['die Frau', 'der Mann']], { task: 'Finde die Paare.', taskEn: 'Match the female and male family words.' }),
    audio('t2-audio', 'Hören: Familienfotos', [
      ['kenji', 'Schau, Nele, das ist meine Familie in Osaka.'],
      ['nele', 'Oh, schön! Wer ist das?'],
      ['kenji', 'Das ist mein Vater. Er ist auch Koch. Und das ist meine Mutter. Sie ist Lehrerin.'],
      ['nele', 'Und die zwei Kinder?'],
      ['kenji', 'Das sind meine Schwester Yuki und ihr Sohn. Mein Neffe ist drei Jahre alt.'],
      ['nele', 'Süß! Ich habe keine Geschwister. Aber ich habe eine Katze!'],
    ], { task: 'Hör zu. Wer ist auf dem Foto?', taskEn: 'Listen. Who is on Kenji’s photo?' }),
    mcq('t2-q1', 'Was ist Kenjis Vater von Beruf?', ['Lehrer', 'Koch', 'Arzt'], 1),
    mcq('t2-q2', 'Wie heißt Kenjis Schwester?', ['Yuki', 'Nele', 'Osaka'], 0),
    mcq('t2-q3', 'Hat Nele Geschwister?', ['Ja, einen Bruder.', 'Nein, keine.', 'Ja, eine Schwester.'], 1),
    grammar('t2-gram', 'Possessivartikel', {
      intro: 'Possessivartikel funktionieren wie **ein/eine**.',
      head: ['', 'maskulin / neutral', 'feminin / Plural'],
      rows: [['ich', 'mein Vater', 'mein**e** Mutter'], ['du', 'dein Bruder', 'dein**e** Schwester'], ['er / es', 'sein Sohn', 'sein**e** Tochter'], ['sie', 'ihr Onkel', 'ihr**e** Tante'], ['wir', 'unser Opa', 'unser**e** Oma'], ['ihr', 'euer Kind', 'eur**e** Kinder'], ['sie / Sie', 'ihr / Ihr Mann', 'ihr**e** / Ihr**e** Frau']],
      notes: ['Im Akkusativ maskulin: *Ich besuche mein**en** Vater.* (wie einen)'],
      en: 'Possessive articles take the same endings as ein: mein Vater, meine Mutter, meinen Vater (accusative). sein = his, ihr = her/their, Ihr = your (formal).',
    }),
    gap('t2-gap', ['Das ist {{meine}} Mutter. (ich)', 'Ist das {{dein}} Bruder? (du)', 'Kenji und {{seine}} Schwester. (er)', 'Amara und {{ihr}} Vater. (sie)', 'Wir besuchen {{unsere}} Oma. (wir)', 'Ich liebe {{meinen}} Opa. (ich, Akkusativ)'],
      { task: 'Ergänze den Possessivartikel.', taskEn: 'Fill in the possessive article.' }),
  ]);

const teil3 = section('teil-3', 'modul', 'Teil 3', 'Einen Termin machen', 'lilac', 15,
  ['am Telefon einen Termin machen', 'Modalverben', 'sich entschuldigen'], [
    audio('t3-audio', 'Hören: Beim Friseur anrufen', [
      ['frauHaeberle', 'Salon Häberle, guten Tag!'],
      ['felix', 'Grüß Gott, hier ist Felix Huber. Ich möchte einen Termin machen.'],
      ['frauHaeberle', 'Gern. Können Sie am Donnerstag um zehn Uhr?'],
      ['felix', 'Um zehn muss ich arbeiten. Geht es auch am Nachmittag?'],
      ['frauHaeberle', 'Am Donnerstag um halb vier?'],
      ['felix', 'Ja, das passt. Vielen Dank!'],
      ['frauHaeberle', 'Gerne. Also Donnerstag, fünfzehn Uhr dreißig. Auf Wiederhören!'],
    ], { task: 'Hör zu. Wann ist der Termin?', taskEn: 'Listen. When is the appointment? Frau Häberle is from Stuttgart. On the phone you say Auf Wiederhören.' }),
    mcq('t3-q1', 'Warum kann Felix nicht um zehn Uhr?', ['Er muss arbeiten.', 'Er schläft.', 'Er hat keine Zeit am Donnerstag.'], 0),
    mcq('t3-q2', 'Wann ist der Termin?', ['Donnerstag, 10:00', 'Donnerstag, 15:30', 'Dienstag, 15:30'], 1),
    grammar('t3-gram', 'Modalverben und die Satzklammer', {
      intro: 'Das Modalverb steht auf **Position 2**. Das zweite Verb steht im Infinitiv **am Ende**. Das ist die **Satzklammer**.',
      head: ['', 'können', 'müssen', 'wollen'],
      rows: [['ich', 'kann', 'muss', 'will'], ['du', 'kannst', 'musst', 'willst'], ['er/sie/es', 'kann', 'muss', 'will'], ['wir', 'können', 'müssen', 'wollen'], ['ihr', 'könnt', 'müsst', 'wollt'], ['sie/Sie', 'können', 'müssen', 'wollen']],
      notes: ['*Ich **muss** am Donnerstag **arbeiten**.*', '*Felix **will** einen Termin **machen**.*', 'ich und er/sie/es: **keine Endung**! (ich kann, er kann)'],
      en: 'Modal verbs: können = can, müssen = must, wollen = want. The modal is in position 2, the main verb goes to the end in the infinitive. ich and er have no ending.',
    }),
    order('t3-order', ['Ich', 'muss', 'am Montag', 'arbeiten.'], { task: 'Bau den Satz mit Klammer.', taskEn: 'Build the sentence with the bracket: modal in position 2, infinitive at the end.' }),
    gap('t3-gap', ['Ich {{kann}} gut kochen. (können)', 'Du {{musst}} heute einkaufen. (müssen)', 'Er {{will}} Deutsch lernen. (wollen)', '{{Könnt}} ihr am Freitag kommen? (können)'],
      { task: 'Ergänze das Modalverb.', taskEn: 'Fill in the modal verb.' }),
    phrases('t3-phr', 'Termine und Entschuldigungen', {
      'Termin machen': ['Ich möchte einen Termin machen.', 'Geht es am Montag?', 'Das passt gut. / Da kann ich leider nicht.'],
      'Zu spät': ['Entschuldigung, ich bin zu spät.', 'Tut mir leid, der Bus hatte Verspätung.', 'Kein Problem!'],
      'Telefon': ['Hier ist …', 'Auf Wiederhören!'],
    }),
  ]);

const wg = section('wg', 'kommunikation', 'Die Fuchsbau-WG', 'Folge 5: Zu spät!', 'rose', 10,
  ['eine Geschichte hören', 'sich entschuldigen'], [
    text('wg-intro', 'Heute Abend gibt es ein WG-Essen um sieben Uhr. Alle sind da. Nur Felix nicht.', { kicker: 'Die Geschichte', en: 'There is a flat-share dinner at seven tonight. Everyone is there except Felix.' }),
    audio('wg-audio', 'Folge 5: Zu spät!', [
      ['nele', 'Es ist schon halb acht! Wo ist Felix?'],
      ['amara', 'Ich rufe ihn an.'],
      ['felix', 'Hallo Amara! Entschuldigung, ich bin zu spät. Die Straßenbahn hat Verspätung.'],
      ['amara', 'Wann kannst du hier sein?'],
      ['felix', 'In zwanzig Minuten. Ihr könnt schon essen!'],
      ['kenji', 'Wir wollen nicht ohne Felix essen. Wir warten.'],
      ['erzaehler', 'Um zehn vor acht klingelt es.'],
      ['felix', 'Tut mir wirklich leid! Hier, für euch: ein Kuchen von meiner Oma aus Wien. Sachertorte!'],
      ['nele', 'Okay, Felix. Du bist entschuldigt!'],
    ], { task: 'Hör die Geschichte.', taskEn: 'Listen to the story.' }),
    mcq('wg-q1', 'Um wie viel Uhr ist das Essen?', ['um sieben', 'um halb acht', 'um acht'], 0),
    mcq('wg-q2', 'Warum ist Felix zu spät?', ['Er schläft.', 'Die Straßenbahn hat Verspätung.', 'Er kauft einen Kuchen.'], 1),
    mcq('wg-q3', 'Wann kommt Felix?', ['um 19:50', 'um 19:30', 'um 20:10'], 0),
    mcq('wg-q4', 'Was bringt Felix mit?', ['Blumen', 'einen Kuchen', 'Bier'], 1),
  ]);

const grammatik = section('grammatik', 'grammatik', 'Grammatik', 'Alles auf einen Blick', 'peach', 10,
  ['Possessivartikel', 'Modalverben und Satzklammer'], [
    grammar('g-1', 'Die Satzklammer', {
      head: ['Position 1', 'Position 2', 'Mitte', 'Ende'],
      rows: [['Ich', '**kann**', 'heute nicht', '**kommen**.'], ['Am Montag', '**muss**', 'Amara früh', '**aufstehen**.'], ['Was', '**willst**', 'du am Wochenende', '**machen**?'], ['**Kannst**', 'du', 'mir', '**helfen**?']],
      en: 'The sentence bracket: conjugated modal in position 2 (or 1 in yes/no questions), infinitive at the very end.',
    }),
    sort('g-sort', ['mein', 'meine'], [['Vater', 0], ['Mutter', 1], ['Kind', 0], ['Eltern', 1], ['Bruder', 0], ['Tante', 1], ['Handy', 0], ['Geschwister', 1]],
      { task: 'mein oder meine? (Nominativ)', taskEn: 'Sort: mein or meine (nominative)?' }),
    mcq('g-q1', 'Welcher Satz ist richtig?', ['Ich muss arbeiten am Samstag.', 'Ich muss am Samstag arbeiten.', 'Ich arbeiten muss am Samstag.'], 1),
    mcq('g-q2', '„Er ___ gut Gitarre spielen.“', ['kannst', 'kann', 'könnt'], 1),
    mcq('g-q3', 'Amara und ___ Mutter telefonieren.', ['seine', 'ihre', 'ihr'], 1),
  ]);

const uebungen = section('uebungen', 'uebung', 'Übungen', 'Training', 'butter', 15,
  ['Termine machen', 'Aussprache: das r'], [
    compose('u-comp', 'Du rufst beim Arzt an.', [
      ['Sag deinen Namen.', 'Say your name.', ['Guten Tag,', 'hier ist', 'Maria Lopez.']],
      ['Sag, was du möchtest.', 'Say you want an appointment.', ['Ich', 'möchte', 'einen Termin', 'machen.']],
      ['Frag nach Dienstag.', 'Ask if Tuesday works.', ['Geht', 'es', 'am Dienstag?']],
      ['Sag, dass du am Morgen nicht kannst.', 'Say you cannot in the morning.', ['Am Morgen', 'kann', 'ich', 'leider nicht.']],
    ], { task: 'Bau das Telefongespräch.', taskEn: 'Build the phone call.' }),
    audio('u-aus', 'Aussprache: das r', [
      ['frauKlein', 'Am Wortanfang hört man das r gut: rot, Reis, richtig, Radio.'],
      ['frauKlein', 'Am Wortende klingt das r fast wie ein a: Vater, Mutter, Bruder, Schwester.'],
      ['frauKlein', 'Auch hier: der, er, wir, vier, Uhr.'],
    ], { task: 'Hör zu und sprich nach.', taskEn: 'Listen and repeat. At the end of a word, r sounds almost like a short "a".' }),
    sort('u-sort', ['r hört man gut', 'r klingt wie a'], [['rot', 0], ['Vater', 1], ['Reis', 0], ['Bruder', 1], ['Radio', 0], ['vier', 1]], { task: 'Wie klingt das r?', taskEn: 'How does the r sound?' }),
    order('u-order', ['Kannst', 'du', 'am Freitag', 'kommen?'], { task: 'Bau die Frage.', taskEn: 'Build the question.' }),
  ]);

const wortschatz = section('wortschatz', 'wortschatz', 'Wortschatz und Check', 'Das kann ich jetzt', 'mint', 8,
  ['Wörter wiederholen', 'den Stand einschätzen'], [
    cards('w-cards', [
      ['die Uhr', 'zeigt die Zeit', 'clock, o’clock'], ['halb acht', '7:30', 'half past seven'], ['Viertel nach', '+15 Minuten', 'quarter past'],
      ['aufstehen', 'am Morgen aus dem Bett gehen', 'to get up'], ['der Termin', 'feste Zeit', 'appointment'], ['zu spät', 'nicht pünktlich', 'late'],
      ['die Eltern', 'Mutter und Vater', 'parents'], ['die Geschwister', 'Brüder und Schwestern', 'siblings'], ['der Sohn / die Tochter', 'Kinder', 'son / daughter'],
      ['können', 'fähig sein', 'can'], ['müssen', 'keine Wahl haben', 'must'], ['wollen', 'einen Wunsch haben', 'to want'],
    ]),
    match('w-extra-time', [['halb acht', '7:30'], ['Viertel nach drei', '3:15'], ['Viertel vor fünf', '4:45'], ['acht Uhr', '8:00'], ['aufstehen', 'to get up'], ['der Termin', 'appointment']],
      { task: 'Uhrzeit und Alltag', taskEn: 'Time and daily life.' }),
    gap('w-extra-gap', ['Ich stehe um sieben Uhr {{auf}}.', 'Meine {{Mutter}} ist Lehrerin.', 'Mein {{Vater}} liest gern.', 'Kann ich einen {{Termin}} machen?'],
      { bank: ['auf', 'Mutter', 'Vater', 'Termin'], task: 'Familie und Tag', taskEn: 'Family and day.' }),
    mcq('w-extra-q1', '„Wie spät ___ es?“', ['ist', 'bist', 'sind'], 0),
    mcq('w-extra-q2', '„Ich ___ um acht zur Arbeit.“', ['gehe', 'gehst', 'geht'], 0),
    text('w-story-tip', 'Optional lesen: **Mein Tag** und **Meine Familie**.', { kicker: 'Extra', en: 'Optional reading: “Mein Tag” and “Meine Familie”.' }),
    checklist('w-check', ['Ich kann die Uhrzeit sagen.', 'Ich kann meinen Tag beschreiben.', 'Ich kann meine Familie vorstellen.', 'Ich kann am Telefon einen Termin machen.', 'Ich kann mich entschuldigen.', 'Ich kenne die Satzklammer.']),
  ]);

export const a1k5: Chapter = {
  id: 'a1-k5', number: 5, title: 'Alltag und Familie', theme: 'Uhrzeit, Tagesablauf, Familie, Termine',
  grammar: 'Possessivartikel. Modalverben können, müssen, wollen. Satzklammer.',
  sections: [einstieg, teil1, teil2, teil3, wg, grammatik, uebungen, wortschatz],
  games: ['a1k5-sprint', 'a1k5-memory', 'a1k5-satzbau', 'a1k5-artikel'],
  exam: [
    x(1, mcq('x1', '7:30 inoffiziell:', ['halb sieben', 'halb acht', 'sieben halb'], 1)),
    x(1, mcq('x2', 'Ich komme ___ acht Uhr.', ['am', 'um', 'im'], 1)),
    x(1, mcq('x3', 'Die Mutter von meiner Mutter ist meine …', ['Tante', 'Oma', 'Schwester'], 1)),
    x(4, gap('x4', ['Das ist {{mein}} Bruder. (ich)', 'Wo ist {{deine}} Schwester? (du)', 'Nele und {{ihre}} Katze. (sie)', 'Ich besuche {{meinen}} Vater. (ich, Akkusativ)'], { task: 'Possessivartikel.' })),
    x(3, gap('x5', ['Ich {{kann}} heute nicht. (können)', 'Er {{muss}} arbeiten. (müssen)', 'Wir {{wollen}} essen. (wollen)'], { task: 'Modalverben.' })),
    x(1, mcq('x6', 'Wann ist der neue Termin?', ['Montag, 9 Uhr', 'Mittwoch, 14:30', 'Mittwoch, 9 Uhr'], 1),
      audio('x-st1', 'Hören: Nachricht auf der Mailbox', [
        ['frauBaumann', 'Guten Tag, Herr Okafor, hier ist die Praxis Dr. Meier. Sie haben am Montag um neun Uhr einen Termin. Leider ist Frau Doktor Meier am Montag krank. Können Sie am Mittwoch um halb drei kommen? Bitte rufen Sie uns zurück. Auf Wiederhören.'],
      ])),
    x(1, mcq('x7', 'Was soll Herr Okafor machen? (Hörtext oben)', ['zurückrufen', 'am Montag kommen', 'nichts'], 0)),
    x(1, mcq('x8', 'Warum schreibt Tom?', ['Er kommt zu spät.', 'Er kann nicht kommen.', 'Er hat Geburtstag.'], 0),
      text('x-st2', 'Hi Lisa, sorry! Mein Zug hat 30 Minuten Verspätung. Ich bin erst um Viertel nach sieben im Café. Ihr könnt schon bestellen. Bis gleich! Tom', { kicker: 'Lesen' })),
    x(1, mcq('x9', 'Wann ist Tom im Café? (Text oben)', ['um 6:45', 'um 7:15', 'um 7:30'], 1)),
    x(2, order('x10', ['Ich', 'muss', 'am Sonntag', 'arbeiten.'], { task: 'Bau den Satz.' })),
    x(2, order('x11', ['Wann', 'können', 'Sie', 'kommen?'], { task: 'Bau die Frage.' })),
    x(1, mcq('x12', 'Am Ende eines Telefongesprächs sagt man oft:', ['Auf Wiedersehen!', 'Auf Wiederhören!', 'Guten Morgen!'], 1)),
  ],
};

export const gamesA1k5: GameDef[] = [
  {
    id: 'a1k5-sprint', engine: 'sprint', title: 'Uhrzeit-Sprint', blurb: 'Wie spät ist es? Schnell antworten!', skill: 'Uhrzeit', tone: 'mint', chapter: 5, emoji: '⚡',
    rules: 'Du siehst eine Uhrzeit. Tippe auf die richtige inoffizielle Uhrzeit. Achtung bei halb!', label: 'Wie spät ist es?',
    items: [
      { q: '7:30', a: 'halb acht', wrong: ['halb sieben', 'sieben halb'] }, { q: '3:15', a: 'Viertel nach drei', wrong: ['Viertel vor drei', 'Viertel nach vier'] },
      { q: '9:45', a: 'Viertel vor zehn', wrong: ['Viertel nach neun', 'Viertel vor neun'] }, { q: '12:30', a: 'halb eins', wrong: ['halb zwölf', 'halb dreizehn'] },
      { q: '6:10', a: 'zehn nach sechs', wrong: ['zehn vor sechs', 'zehn nach sieben'] }, { q: '4:50', a: 'zehn vor fünf', wrong: ['zehn nach vier', 'zehn vor vier'] },
      { q: '1:00', a: 'ein Uhr', wrong: ['eins Uhr', 'halb eins'] }, { q: '10:30', a: 'halb elf', wrong: ['halb zehn', 'zehn halb'] },
      { q: '8:20', a: 'zwanzig nach acht', wrong: ['zwanzig vor acht', 'zwanzig nach neun'] }, { q: '5:45', a: 'Viertel vor sechs', wrong: ['Viertel nach fünf', 'Viertel vor fünf'] },
      { q: '11:15', a: 'Viertel nach elf', wrong: ['Viertel vor elf', 'Viertel nach zwölf'] }, { q: '2:30', a: 'halb drei', wrong: ['halb zwei', 'zwei halb'] },
    ],
  },
  {
    id: 'a1k5-memory', engine: 'memory', title: 'Familien-Memory', blurb: 'Finde die Paare: Frau und Mann in der Familie.', skill: 'Familie', tone: 'lilac', chapter: 5, emoji: '🃏',
    rules: 'Dreh zwei Karten um. Ein Paar ist das weibliche und das männliche Familienwort.', kinds: ['weiblich', 'männlich'],
    pairs: [['die Mutter', 'der Vater'], ['die Schwester', 'der Bruder'], ['die Tochter', 'der Sohn'], ['die Oma', 'der Opa'], ['die Tante', 'der Onkel'], ['die Frau', 'der Mann'], ['die Nichte', 'der Neffe'], ['die Cousine', 'der Cousin']],
  },
  {
    id: 'a1k5-satzbau', engine: 'satzbau', title: 'Klammer-Baukasten', blurb: 'Modalverb auf Position 2, Infinitiv ans Ende!', skill: 'Satzklammer', tone: 'sky', chapter: 5, emoji: '🧱',
    rules: 'Tippe die Wörter in der richtigen Reihenfolge an. Denk an die Satzklammer.',
    sentences: [
      { parts: ['Ich', 'muss', 'heute', 'arbeiten.'], hint: 'Infinitiv am Ende' },
      { parts: ['Kannst', 'du', 'gut', 'kochen?'], hint: 'Ja/Nein-Frage mit Modalverb' },
      { parts: ['Felix', 'will', 'einen Termin', 'machen.'], hint: 'wollen + Infinitiv' },
      { parts: ['Am Montag', 'muss', 'Amara', 'früh aufstehen.'], hint: 'Position 2' },
      { parts: ['Wir', 'können', 'am Freitag', 'kommen.'], hint: 'Infinitiv am Ende' },
      { parts: ['Was', 'willst', 'du', 'essen?'], hint: 'W-Frage mit Modalverb' },
      { parts: ['Das', 'ist', 'meine', 'Schwester.'], hint: 'Possessivartikel' },
      { parts: ['Ich', 'komme', 'um', 'halb acht.'], hint: 'um + Uhrzeit' },
    ],
  },
  {
    id: 'a1k5-artikel', engine: 'regen', title: 'am, um oder im?', blurb: 'Fang die Zeitangaben!', skill: 'Zeitangaben', tone: 'rose', chapter: 5, emoji: '☔',
    rules: 'Ein Wort fällt herunter. Brauchst du am, um oder im? Tippe auf die richtige Präposition.', buckets: ['am', 'um', 'im'],
    words: [['Montag', 0], ['Morgen', 0], ['Abend', 0], ['Wochenende', 0], ['Freitag', 0], ['Nachmittag', 0], ['acht Uhr', 1], ['halb neun', 1], ['Mitternacht', 1], ['Viertel nach zwei', 1], ['zehn Uhr', 1], ['14:30', 1], ['Mai', 2], ['Sommer', 2], ['Winter', 2], ['Januar', 2], ['Herbst', 2], ['Oktober', 2]],
  },
];
