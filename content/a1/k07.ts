import type { Chapter, GameDef, GlossaryEntry } from '../types';
import { artikel, audio, cards, checklist, compose, gap, grammar, match, mcq, order, overview, phrases, section, sort, text, tip, x } from '../helpers';

// A1 Kapitel 7: Arbeit und Büro, Arbeitsweg, E-Mails, Small Talk.
// Grammar: und/oder/aber, Dativ, Präpositionen mit Dativ (mit, bei, zu, nach, von, aus). Aussprache: s, sch, st, sp.

export const glossaryA1k7: Record<string, GlossaryEntry> = {
  Büro: { de: 'Ein Raum. Hier arbeitet man am Schreibtisch und am Computer.', en: 'office' },
  Firma: { de: 'Ein Unternehmen, zum Beispiel ein Hotel oder eine Bank.', en: 'company' },
  Besprechung: { de: 'Ein Treffen bei der Arbeit. Man spricht über ein Thema.', en: 'meeting' },
  Kantine: { de: 'Ein Restaurant für die Mitarbeiter in einer Firma.', en: 'staff canteen' },
  Chef: { de: 'Die Person, die bestimmt. Frau: die Chefin.', en: 'boss' },
  Arbeitsweg: { de: 'Der Weg von zu Hause zur Arbeit.', en: 'commute' },
  Pause: { de: 'Eine kurze Zeit ohne Arbeit.', en: 'break' },
  Drucker: { de: 'Ein Gerät. Es bringt Texte vom Computer auf Papier.', en: 'printer' },
  'Small Talk': { de: 'Ein kurzes, lockeres Gespräch über einfache Themen, zum Beispiel das Wetter.', en: 'small talk' },
  Kunde: { de: 'Eine Person, die etwas kauft oder einen Service bekommt.', en: 'customer, client' },
};

const einstieg = section('einstieg', 'einstieg', 'Einstieg', 'An die Arbeit!', 'butter', 8,
  ['das Kapitel kennenlernen', 'Wörter im Büro'], [
    overview('e-over', 'Kapitel 7: Arbeitsalltag',
      'Kenji hat jetzt eine Stelle im Restaurant. Nele macht ein Praktikum in einem [[Büro]]. In Kapitel 7 lernst du Wörter für die Arbeit: der Computer, der [[Drucker]], die [[Besprechung]], die [[Kantine]]. Du sagst, wie du zur Arbeit fährst, schreibst eine kurze E-Mail und machst [[Small Talk]] in der [[Pause]].\n\nGrammatik: der **Dativ**. Nach Präpositionen wie *mit, bei, zu* ändern sich die Artikel.',
      'This chapter is about work: the office, your commute, short work emails and small talk with colleagues. Grammar: connecting sentences with und, oder, aber, and the dative case after prepositions like mit, bei, zu, nach, von, aus.',
      ['über die Arbeit sprechen', 'den Arbeitsweg beschreiben', 'eine kurze E-Mail schreiben', 'Small Talk machen']),
    match('e-match', [['der Computer', '💻'], ['der Drucker', '🖨️'], ['das Telefon', '☎️'], ['der Kalender', '📅'], ['der Kugelschreiber', '🖊️'], ['die Brille', '👓']],
      { task: 'Was ist das?', taskEn: 'Match the office words to the pictures.' }),
  ]);

const teil1 = section('teil-1', 'modul', 'Teil 1', 'Neles Praktikum', 'mint', 15,
  ['über die Arbeit sprechen', 'Sätze verbinden: und, oder, aber'], [
    text('t1-text', `Hallo Mama,

mein Praktikum ist toll! Die Firma heißt „AppFuchs“. Wir machen Apps für Hotels. Ich arbeite von neun bis fünf. Am Morgen habe ich eine Besprechung mit dem Team, und dann programmiere ich.

Mittags esse ich in der Kantine oder ich gehe mit den Kollegen in ein Café. Die Kollegen sind nett, aber mein Chef spricht sehr schnell!

Liebe Grüße
Nele`, { kicker: 'Lesen', title: 'Eine E-Mail von Nele', task: 'Lies die E-Mail.', taskEn: 'Read Nele’s email to her mother.' }),
    mcq('t1-q1', 'Was macht die Firma?', ['Apps für Hotels', 'Hotels', 'Computer'], 0),
    mcq('t1-q2', 'Was macht Nele am Morgen?', ['Sie geht ins Café.', 'Sie hat eine Besprechung.', 'Sie schläft.'], 1),
    mcq('t1-q3', 'Was ist ein Problem für Nele?', ['Die Kollegen sind nicht nett.', 'Der Chef spricht schnell.', 'Die Kantine ist teuer.'], 1),
    grammar('t1-gram', 'und, oder, aber', {
      intro: 'Diese Wörter verbinden zwei Sätze. Sie stehen auf **Position 0**. Danach kommt ein normaler Satz.',
      head: ['Satz 1', 'Position 0', 'Satz 2'],
      rows: [['Ich habe eine Besprechung,', '**und**', 'dann programmiere ich.'], ['Ich esse in der Kantine,', '**oder**', 'ich gehe ins Café.'], ['Die Kollegen sind nett,', '**aber**', 'der Chef spricht schnell.']],
      notes: ['Vor **aber** steht immer ein Komma. Vor **und** und **oder** meistens nicht.'],
      en: 'und (and), oder (or), aber (but) join two sentences without changing the word order. Always put a comma before aber.',
    }),
    gap('t1-gap', ['Ich trinke Kaffee, {{aber}} ich mag keinen Tee.', 'Nele programmiert {{und}} Kenji kocht.', 'Fährst du mit dem Bus {{oder}} gehst du zu Fuß?', 'Die Arbeit ist interessant, {{aber}} anstrengend.'],
      { bank: ['und', 'oder', 'aber', 'aber'], task: 'und, oder oder aber?', taskEn: 'Fill in und, oder or aber.' }),
  ]);

const teil2 = section('teil-2', 'modul', 'Teil 2', 'Wie kommst du zur Arbeit?', 'sky', 15,
  ['den Arbeitsweg beschreiben', 'der Dativ', 'mit, zu, bei, nach, von, aus'], [
    audio('t2-audio', 'Hören: Der Arbeitsweg', [
      ['amara', 'Ich fahre mit dem Fahrrad zum Krankenhaus. Das dauert nur zehn Minuten.'],
      ['kenji', 'Ich fahre mit der Straßenbahn zur Arbeit. Das Restaurant ist bei der Oper.'],
      ['felix', 'Ich arbeite meistens zu Hause. Aber am Dienstag fahre ich mit dem Zug nach Dresden. Da gebe ich Unterricht.'],
      ['nele', 'Ich gehe zu Fuß zur Firma. Ich komme um Viertel vor neun aus dem Haus.'],
    ], { task: 'Hör zu. Wie kommen sie zur Arbeit?', taskEn: 'Listen. How does each roommate get to work?' }),
    match('t2-match', [['Amara', 'mit dem Fahrrad'], ['Kenji', 'mit der Straßenbahn'], ['Felix', 'mit dem Zug nach Dresden'], ['Nele', 'zu Fuß']], { task: 'Wer fährt wie?', taskEn: 'Who travels how?' }),
    mcq('t2-q1', 'Wo ist Kenjis Restaurant?', ['bei der Oper', 'in Dresden', 'beim Krankenhaus'], 0),
    grammar('t2-gram', 'Der Dativ', {
      intro: 'Nach den Präpositionen **mit, zu, bei, nach, von, aus** steht immer der **Dativ**.',
      head: ['', 'maskulin', 'neutral', 'feminin', 'Plural'],
      rows: [['Nominativ', 'der Bus', 'das Auto', 'die Bahn', 'die Kollegen'], ['Dativ bestimmt', '**dem** Bus', '**dem** Auto', '**der** Bahn', '**den** Kolleg**en**'], ['Dativ unbestimmt', '**einem** Bus', '**einem** Auto', '**einer** Bahn', 'Kolleg**en**']],
      notes: ['Kurzformen: **zu dem = zum**, **zu der = zur**, **bei dem = beim**, **von dem = vom**.', 'Im Dativ Plural bekommt das Nomen ein **-n**: mit den Kinder**n**.', '**nach** + Stadt/Land: *nach Dresden*. **nach Hause** = zu mir nach Hause. **zu Hause** = ich bin da.'],
      en: 'The dative case follows mit, zu, bei, nach, von, aus. der/das → dem, die → der, plural die → den (+n). Short forms: zum, zur, beim, vom.',
    }),
    gap('t2-gap', ['Ich fahre mit {{dem}} Bus. (der Bus)', 'Kenji fährt mit {{der}} Straßenbahn. (die Straßenbahn)', 'Amara fährt {{zum}} Krankenhaus. (zu + das)', 'Nele geht {{zur}} Firma. (zu + die)', 'Felix arbeitet {{bei}} einer Musikschule.', 'Ich komme {{aus}} dem Büro.'],
      { task: 'Ergänze.', taskEn: 'Fill in the dative article, short form or preposition.' }),
    sort('t2-sort', ['zum', 'zur'], [['Bahnhof', 0], ['Arbeit', 1], ['Krankenhaus', 0], ['Post', 1], ['Arzt', 0], ['Uni', 1]], { task: 'zum oder zur?', taskEn: 'Sort: zum (der/das words) or zur (die words)?' }),
    tip('t2-tip', 'zu Hause oder nach Hause?', '*Ich bin **zu Hause**.* (Wo? Ich bin da.)\n\n*Ich gehe **nach Hause**.* (Wohin? Ich gehe jetzt.)'),
  ]);

const teil3 = section('teil-3', 'modul', 'Teil 3', 'E-Mails und Small Talk', 'lilac', 15,
  ['eine E-Mail an Kollegen schreiben', 'Small Talk in der Pause'], [
    text('t3-mail', `**Betreff:** Besprechung morgen

Liebe Frau Schmidt,

leider kann ich morgen nicht zur Besprechung um 10 Uhr kommen. Ich habe einen Termin beim Arzt. Geht es auch am Donnerstag?

Viele Grüße
Nele Wagner`, { kicker: 'Lesen', title: 'Eine E-Mail an die Chefin', task: 'Lies die E-Mail.', taskEn: 'Read the email. Betreff = subject.' }),
    mcq('t3-q1', 'Warum kann Nele nicht kommen?', ['Sie ist im Urlaub.', 'Sie hat einen Arzttermin.', 'Sie muss programmieren.'], 1),
    grammar('t3-gram', 'Anrede und Gruß in E-Mails', {
      head: ['', 'formell (Sie)', 'informell (du)'],
      rows: [['Anrede', 'Sehr geehrte Frau Schmidt, / Liebe Frau Schmidt,', 'Liebe Nele, / Lieber Kenji, / Hallo Felix,'], ['Gruß', 'Mit freundlichen Grüßen / Viele Grüße', 'Liebe Grüße / Bis bald!']],
      notes: ['Nach der Anrede kommt ein Komma. Der Text beginnt dann **klein**.', '**Liebe** für Frauen, **Lieber** für Männer.'],
      en: 'Email greetings: Sehr geehrte/r (very formal), Liebe/r (friendly). After the comma the text starts with a lowercase letter (unless it is a noun).',
    }),
    compose('t3-comp', 'Schreib eine E-Mail an deinen Chef, Herrn Berger. Du bist krank.', [
      ['Anrede, dann: Du bist krank.', 'Greeting, then say you are sick.', ['Lieber Herr Berger,', 'ich bin', 'leider', 'krank.']],
      ['Sag, dass du heute nicht kommst.', 'Say you are not coming today.', ['Ich', 'kann', 'heute nicht', 'ins Büro kommen.']],
      ['Sag, dass du dich morgen meldest.', 'Say you will get in touch tomorrow.', ['Ich', 'melde mich', 'morgen', 'wieder.']],
    ], { task: 'Bau die E-Mail.', taskEn: 'Build the email.' }),
    audio('t3-audio', 'Hören: Small Talk in der Kaffeeküche', [
      ['jonas', 'Hallo! Du bist neu hier, oder?'],
      ['nele', 'Ja, ich bin Nele, die Praktikantin.'],
      ['jonas', 'Ich bin Jonas, aus der IT. Und, wie gefällt es dir bei uns?'],
      ['nele', 'Sehr gut, danke! Die Arbeit ist interessant.'],
      ['jonas', 'Schönes Wetter heute, oder? Hast du schon Pläne für das Wochenende?'],
      ['nele', 'Ja, ich fahre mit Freunden zum See. Und du?'],
      ['jonas', 'Ich besuche meine Eltern in Halle. Na dann, schönes Wochenende!'],
    ], { task: 'Hör zu. Worüber sprechen sie?', taskEn: 'Listen. What do they talk about?' }),
    sort('t3-sort', ['gutes Small-Talk-Thema', 'kein gutes Thema'], [['das Wetter', 0], ['das Wochenende', 0], ['das Gehalt', 1], ['der Urlaub', 0], ['Krankheiten', 1], ['das Essen in der Kantine', 0]],
      { task: 'Small Talk: Was passt?', taskEn: 'Which topics are good for small talk at work? Gehalt = salary.' }),
    phrases('t3-phr', 'Small Talk', {
      'Anfangen': ['Du bist neu hier, oder?', 'Schönes Wetter heute!', 'Wie war dein Wochenende?'],
      'Antworten': ['Ja, seit Montag.', 'Ja, endlich Sonne!', 'Gut, danke. Und deins?'],
      'Beenden': ['Na dann, bis später!', 'Schönes Wochenende!', 'Ich muss leider weiter.'],
    }),
  ]);

const wg = section('wg', 'kommunikation', 'Die Fuchsbau-WG', 'Folge 7: Der erste Arbeitstag', 'rose', 10,
  ['eine Geschichte hören', 'Dativ im Kontext'], [
    text('wg-intro', 'Heute ist Kenjis erster Tag im Restaurant „Zum Fuchs“. Am Abend erzählt er in der WG.', { kicker: 'Die Geschichte', en: 'Today is Kenji’s first day at the restaurant. In the evening he tells the others about it.' }),
    audio('wg-audio', 'Folge 7: Der erste Arbeitstag', [
      ['amara', 'Und, Kenji? Wie war dein erster Tag?'],
      ['kenji', 'Lang! Ich war von zehn bis zehn im Restaurant.'],
      ['nele', 'Zwölf Stunden? Wow. Und die Kollegen?'],
      ['kenji', 'Sehr nett. Die Chefin heißt Frau Lehmann. Sie kommt aus Sachsen. Ich verstehe sie nicht immer!'],
      ['felix', 'Haha, das Sächsische! Das ist schwer.'],
      ['kenji', 'Aber das Beste: Ich koche mit dem Chefkoch zusammen. Und am Freitag darf ich ein japanisches Gericht machen!'],
      ['amara', 'Super! Dann kommen wir am Freitag zum Essen ins Restaurant.'],
    ], { task: 'Hör die Geschichte.', taskEn: 'Listen to the story.' }),
    mcq('wg-q1', 'Wie lange war Kenji im Restaurant?', ['acht Stunden', 'zehn Stunden', 'zwölf Stunden'], 2),
    mcq('wg-q2', 'Warum versteht Kenji die Chefin nicht immer?', ['Sie spricht Sächsisch.', 'Sie spricht Englisch.', 'Sie spricht leise.'], 0),
    mcq('wg-q3', 'Was darf Kenji am Freitag machen?', ['frei haben', 'ein japanisches Gericht kochen', 'mit der Chefin essen'], 1),
    mcq('wg-q4', 'Was planen die anderen?', ['Sie kochen zu Hause.', 'Sie gehen am Freitag ins Restaurant.', 'Sie fahren nach Sachsen.'], 1),
  ]);

const grammatik = section('grammatik', 'grammatik', 'Grammatik', 'Alles auf einen Blick', 'peach', 10,
  ['Dativ', 'Präpositionen mit Dativ'], [
    grammar('g-1', 'Präpositionen mit Dativ', {
      head: ['Präposition', 'Beispiel'],
      rows: [['mit', 'Ich fahre **mit dem** Bus.'], ['zu', 'Ich gehe **zum** Arzt / **zur** Arbeit.'], ['bei', 'Ich arbeite **bei einer** Firma. Ich bin **beim** Arzt.'], ['nach', 'Ich fahre **nach** Berlin. Ich gehe **nach** Hause.'], ['von', 'Das ist ein Geschenk **vom** Chef.'], ['aus', 'Ich komme **aus dem** Büro.']],
      en: 'Six prepositions that always take the dative: mit, zu, bei, nach, von, aus.',
    }),
    grammar('g-2', 'Artikel im Überblick', {
      head: ['', 'maskulin', 'neutral', 'feminin', 'Plural'],
      rows: [['Nominativ', 'der / ein', 'das / ein', 'die / eine', 'die'], ['Akkusativ', 'den / einen', 'das / ein', 'die / eine', 'die'], ['Dativ', 'dem / einem', 'dem / einem', 'der / einer', 'den (+n)']],
      en: 'All three cases at a glance.',
    }),
    mcq('g-q1', 'Ich fahre mit ___ Auto.', ['das', 'dem', 'den'], 1),
    mcq('g-q2', 'Nele geht ___ Arbeit.', ['zum', 'zur', 'zu'], 1),
    mcq('g-q3', 'Kenji spielt mit den ___. (die Kinder)', ['Kinder', 'Kindern', 'Kinds'], 1),
  ]);

const uebungen = section('uebungen', 'uebung', 'Übungen', 'Training', 'butter', 15,
  ['Dativ üben', 'Aussprache: s, sch, st, sp'], [
    order('u-order', ['Ich', 'fahre', 'mit der Straßenbahn', 'zur Arbeit.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence.' }),
    gap('u-gap', ['Felix fährt {{nach}} Dresden.', 'Ich bin heute {{zu}} Hause.', 'Amara kommt {{aus}} Ghana.', 'Kenji arbeitet {{bei}} „Zum Fuchs“.'], { bank: ['nach', 'zu', 'aus', 'bei'], task: 'Welche Präposition?', taskEn: 'Which preposition?' }),
    audio('u-aus', 'Aussprache: s, sch, st, sp', [
      ['frauKlein', 'sch klingt wie im Englischen „sh“: Schreibtisch, schnell, Tisch.'],
      ['frauKlein', 'st und sp am Wortanfang klingen wie „scht“ und „schp“: Straße, Stunde, sprechen, Sport.'],
      ['frauKlein', 'In der Mitte oder am Ende ist st normal: Post, erste, gestern.'],
    ], { task: 'Hör zu und sprich nach.', taskEn: 'Listen and repeat. At the start of a word, st and sp sound like "sht" and "shp".' }),
    sort('u-sort', ['wie „scht/schp“', 'normal s-t'], [['Straße', 0], ['Post', 1], ['sprechen', 0], ['gestern', 1], ['Stunde', 0], ['erste', 1]], { task: 'Wie spricht man st/sp?', taskEn: 'How is st/sp pronounced here?' }),
    mcq('u-q1', 'Ich habe heute keine Zeit, ___ morgen kann ich.', ['und', 'aber', 'oder'], 1),
  ]);

const wortschatz = section('wortschatz', 'wortschatz', 'Wortschatz und Check', 'Das kann ich jetzt', 'mint', 8,
  ['Wörter wiederholen', 'den Stand einschätzen'], [
    cards('w-cards', [
      ['das Büro', 'Raum für die Arbeit', 'office'], ['die Firma', 'das Unternehmen', 'company'], ['der Chef / die Chefin', 'bestimmt bei der Arbeit', 'boss'],
      ['der Kollege / die Kollegin', 'arbeitet mit mir', 'colleague'], ['die Besprechung', 'Treffen bei der Arbeit', 'meeting'], ['die Pause', 'kurze Zeit ohne Arbeit', 'break'],
      ['die Kantine', 'Restaurant in der Firma', 'canteen'], ['der Drucker', 'macht Papier aus Dateien', 'printer'], ['zu Hause', 'wo ich wohne', 'at home'],
      ['nach Hause', 'dahin, wo ich wohne', 'home (direction)'], ['mit dem Bus', 'Verkehrsmittel', 'by bus'], ['Viele Grüße', 'am Ende einer E-Mail', 'best regards'],
    ]),
    checklist('w-check', ['Ich kann über meine Arbeit sprechen.', 'Ich kann sagen, wie ich zur Arbeit komme.', 'Ich kann eine kurze E-Mail schreiben.', 'Ich kann Small Talk machen.', 'Ich kenne die Präpositionen mit Dativ.']),
  ]);

export const a1k7: Chapter = {
  id: 'a1-k7', number: 7, title: 'Arbeitsalltag', theme: 'Büro, Arbeitsweg, E-Mails, Small Talk',
  grammar: 'und, oder, aber. Dativ. Präpositionen mit Dativ.',
  sections: [einstieg, teil1, teil2, teil3, wg, grammatik, uebungen, wortschatz],
  games: ['a1k7-sprint', 'a1k7-memory', 'a1k7-satzbau', 'a1k7-artikel'],
  exam: [
    x(1, mcq('x1', 'Ich fahre mit ___ Fahrrad.', ['das', 'dem', 'der'], 1)),
    x(1, mcq('x2', 'Ich gehe ___ Arzt.', ['zur', 'zum', 'nach'], 1)),
    x(1, mcq('x3', 'Am Abend gehe ich ___ Hause.', ['zu', 'nach', 'bei'], 1)),
    x(3, gap('x4', ['Er kommt {{aus}} der Schweiz.', 'Sie fährt {{mit}} dem Zug.', 'Wir fahren {{nach}} Wien.'], { task: 'Ergänze die Präposition.' })),
    x(2, gap('x5', ['Ich mag Kaffee, {{aber}} keinen Tee.', 'Nimmst du Tee {{oder}} Kaffee?'], { task: 'und, oder, aber.' })),
    x(1, mcq('x6', 'Warum schreibt Herr Klose?', ['Er ist krank.', 'Die Besprechung ist später.', 'Er hat Urlaub.'], 1),
      text('x-st1', '**Betreff:** Besprechung heute\n\nLiebe Kolleginnen und Kollegen,\n\ndie Besprechung ist heute nicht um 10 Uhr, sondern um 14 Uhr. Sie ist im Raum 3, nicht im Raum 5. Bitte bringt eure Laptops mit.\n\nViele Grüße\nPeter Klose', { kicker: 'Lesen' })),
    x(1, mcq('x7', 'Wo ist die Besprechung? (Text oben)', ['im Raum 3', 'im Raum 5', 'in der Kantine'], 0)),
    x(1, mcq('x8', 'Wie fährt die Frau zur Arbeit?', ['mit dem Auto', 'mit der U-Bahn', 'mit dem Fahrrad'], 2),
      audio('x-st2', 'Hören: Im Radio', [
        ['moderatorin', 'Wie kommen Sie zur Arbeit? Wir fragen auf der Straße.'],
        ['jule', 'Ich fahre immer mit dem Fahrrad. Auch im Winter! Das ist gesund und billig.'],
        ['moderatorin', 'Und wie lange brauchen Sie?'],
        ['jule', 'Zwanzig Minuten. Mit dem Bus brauche ich vierzig.'],
      ])),
    x(1, mcq('x9', 'Wie lange braucht sie mit dem Bus? (Hörtext oben)', ['20 Minuten', '40 Minuten', '14 Minuten'], 1)),
    x(2, order('x10', ['Ich', 'fahre', 'mit dem Zug', 'nach Berlin.'], { task: 'Bau den Satz.' })),
    x(1, mcq('x11', 'Formelle E-Mail an Frau Kaya. Die Anrede:', ['Hallo Frau Kaya,', 'Sehr geehrte Frau Kaya,', 'Lieber Frau Kaya,'], 1)),
    x(1, mcq('x12', 'Gutes Thema für Small Talk?', ['das Wetter', 'das Gehalt', 'Krankheiten'], 0)),
  ],
};

export const gamesA1k7: GameDef[] = [
  {
    id: 'a1k7-sprint', engine: 'sprint', title: 'Dativ-Sprint', blurb: 'dem, der oder den? 60 Sekunden!', skill: 'Dativ', tone: 'mint', chapter: 7, emoji: '⚡',
    rules: 'Du siehst eine Präposition und ein Nomen. Tippe auf den richtigen Dativ-Artikel.', label: 'Welcher Artikel?',
    items: [
      { q: 'mit ___ Bus', a: 'dem', wrong: ['der', 'den'] }, { q: 'mit ___ Straßenbahn', a: 'der', wrong: ['dem', 'die'] },
      { q: 'mit ___ Auto', a: 'dem', wrong: ['das', 'den'] }, { q: 'mit ___ Kollegen (Plural)', a: 'den', wrong: ['dem', 'die'] },
      { q: 'aus ___ Büro', a: 'dem', wrong: ['der', 'das'] }, { q: 'bei ___ Firma', a: 'der', wrong: ['dem', 'die'] },
      { q: 'von ___ Chef', a: 'dem', wrong: ['den', 'der'] }, { q: 'mit ___ Fahrrad', a: 'dem', wrong: ['das', 'der'] },
      { q: 'aus ___ Schweiz', a: 'der', wrong: ['dem', 'die'] }, { q: 'mit ___ Kindern', a: 'den', wrong: ['dem', 'die'] },
      { q: 'zu ___ Bahnhof', a: 'dem (zum)', wrong: ['der (zur)', 'den'] }, { q: 'zu ___ Post', a: 'der (zur)', wrong: ['dem (zum)', 'die'] },
    ],
  },
  {
    id: 'a1k7-memory', engine: 'memory', title: 'Büro-Memory', blurb: 'Wort und Bild: Arbeit und Büro.', skill: 'Arbeit', tone: 'lilac', chapter: 7, emoji: '🃏',
    rules: 'Dreh zwei Karten um. Ein Paar ist ein Wort und das passende Bild.', kinds: ['Wort', 'Bild'],
    pairs: [['der Computer', '💻'], ['der Drucker', '🖨️'], ['das Telefon', '☎️'], ['der Kalender', '📅'], ['der Kugelschreiber', '🖊️'], ['die E-Mail', '📧'], ['die Besprechung', '👥'], ['der Kaffee', '☕'], ['die Uhr', '⏰'], ['das Papier', '📄']],
  },
  {
    id: 'a1k7-satzbau', engine: 'satzbau', title: 'Arbeitsweg-Baukasten', blurb: 'Bau Sätze mit Dativ und und/oder/aber.', skill: 'Satzbau', tone: 'sky', chapter: 7, emoji: '🧱',
    rules: 'Tippe die Wörter in der richtigen Reihenfolge an.',
    sentences: [
      { parts: ['Ich', 'fahre', 'mit dem Bus', 'zur Arbeit.'], hint: 'mit + Dativ' },
      { parts: ['Nele', 'geht', 'zu Fuß', 'zur Firma.'], hint: 'zur = zu der' },
      { parts: ['Felix', 'fährt', 'mit dem Zug', 'nach Dresden.'], hint: 'nach + Stadt' },
      { parts: ['Kenji', 'kocht,', 'aber', 'Felix schläft.'], hint: 'aber auf Position 0' },
      { parts: ['Heute', 'bin', 'ich', 'zu Hause.'], hint: 'zu Hause = wo?' },
      { parts: ['Amara', 'kommt', 'aus dem', 'Krankenhaus.'], hint: 'aus + Dativ' },
      { parts: ['Ich', 'arbeite', 'bei', 'einer Firma.'], hint: 'bei + Dativ' },
      { parts: ['Gehst', 'du', 'jetzt', 'nach Hause?'], hint: 'nach Hause = wohin?' },
    ],
  },
  {
    id: 'a1k7-artikel', engine: 'regen', title: 'Artikel-Regen', blurb: 'der, die oder das? Wörter aus dem Büro.', skill: 'Artikel', tone: 'rose', chapter: 7, emoji: '☔',
    rules: 'Ein Nomen fällt herunter. Tippe auf den richtigen Artikel.', buckets: ['der', 'die', 'das'],
    words: artikel('der Computer, das Büro, die Firma, der Drucker, das Telefon, die Besprechung, der Chef, das Papier, die Kantine, der Kalender, das Praktikum, die Pause, der Kunde, das Team, die Arbeit, der Schreibtisch, das Meeting, die Kollegin'),
  },
];
