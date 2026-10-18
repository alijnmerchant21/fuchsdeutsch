import type { Chapter, GameDef, GlossaryEntry } from '../types';
import { artikel, audio, cards, checklist, compose, gap, grammar, match, mcq, order, overview, phrases, section, sort, text, tip, x } from '../helpers';

// B1 Kapitel 3: Veränderungen. Ereignisse im Leben, Glück, Höflichkeit.
// Grammar: Präteritum (regelmäßig, unregelmäßig, Modalverben), Zeitangaben mit Dativ (vor, seit, nach, in, an) und Genitiv (während, innerhalb, außerhalb).
// Aussprache: mehrere Konsonanten hintereinander. Strategie: Texte nach einem Muster schreiben. Plattform 1 (K1 bis K3) am Ende.

export const glossaryB1k3: Record<string, GlossaryEntry> = {
  Veränderung: { de: 'Wenn etwas anders wird als vorher.', en: 'change' },
  Ereignis: { de: 'Etwas Wichtiges, das passiert, zum Beispiel eine Hochzeit oder ein Umzug.', en: 'event' },
  Präteritum: { de: 'Eine Zeitform für die Vergangenheit: ich wohnte, ich ging. Man benutzt sie vor allem in geschriebenen Texten.', en: 'simple past tense' },
  Höflichkeit: { de: 'Freundliches und respektvolles Verhalten anderen Menschen gegenüber.', en: 'politeness' },
  Hausverwaltung: { de: 'Eine Firma, die sich für den Besitzer um ein Haus und die Mieter kümmert.', en: 'property management' },
  Modernisierung: { de: 'Man macht ein altes Gebäude modern, zum Beispiel mit neuen Fenstern oder einer neuen Heizung.', en: 'modernization, renovation' },
  Mieterhöhung: { de: 'Die Miete wird teurer.', en: 'rent increase' },
  Eigentümerwechsel: { de: 'Ein Haus oder eine Firma bekommt einen neuen Besitzer.', en: 'change of ownership' },
  siezen: { de: '„Sie“ zu jemandem sagen.', en: 'to address someone formally (Sie)' },
  duzen: { de: '„du“ zu jemandem sagen.', en: 'to address someone informally (du)' },
  Pünktlichkeit: { de: 'Wenn man genau zur richtigen Zeit kommt.', en: 'punctuality' },
  Wende: { de: 'Die Zeit 1989/1990, als die DDR zu Ende ging und Deutschland wieder ein Land wurde.', en: 'the fall of the Wall and reunification (1989/90)' },
};

const einstieg = section('einstieg', 'einstieg', 'Einstieg', 'Nichts bleibt, wie es ist', 'butter', 8,
  ['das Kapitel kennenlernen', 'Ereignisse im Leben benennen'], [
    overview('e-over', 'Kapitel 3: Veränderungen',
      'November in Leipzig. Ein Brief kommt im Fuchsbau an, und danach ist nichts mehr wie vorher. In Kapitel 3 geht es um [[Veränderung|Veränderungen]]: wichtige [[Ereignis|Ereignisse]] im Leben, ein neuer Job, ein Kind, ein Umzug. Du liest Berichte im [[Präteritum]] und erzählst selbst von früher. Du machst Zeitangaben wie *seit dem Sommer* oder *während des Studiums*.\n\nIn einer Radiosendung sprechen Menschen über Glück. Und du lernst, was [[Höflichkeit]] in Deutschland, Österreich und der Schweiz bedeutet. In der WG liest Nele einen Brief von der [[Hausverwaltung]] vor: Das Haus ist verkauft, eine [[Modernisierung]] ist geplant. Herr Lehmann erzählt die Geschichte des Hauses.',
      'In this chapter you read and tell stories about changes in life: a new job, a child, a move. Grammar: the Präteritum (simple past), which is typical in written stories (wohnte, ging, musste), and time expressions with prepositions that take the dative (vor, seit, nach, in, an) or the genitive (während, innerhalb, außerhalb). You also listen to a radio show about happiness and learn about politeness in Germany, Austria and Switzerland. In the story, a letter arrives: the building has been sold. This chapter ends with Plattform 1, a short review of chapters 1 to 3.',
      ['Berichte über Veränderungen verstehen', 'über Vergangenes berichten (Präteritum)', 'Zeitangaben machen', 'über Glück sprechen', 'über gutes Benehmen sprechen']),
    match('e-match', [['die Hochzeit', '💍'], ['die Geburt', '👶'], ['der Umzug', '📦'], ['der Schulabschluss', '🎓'], ['der erste Job', '💼'], ['die Trennung', '💔'], ['die Rente', '🏖️'], ['der Führerschein', '🚗']],
      { task: 'Welches Ereignis passt zum Bild?', taskEn: 'Match each life event to the picture.' }),
    sort('e-sort', ['Arbeit', 'Familie', 'Wohnen'], [['eine neue Stelle bekommen', 0], ['den Job kündigen', 0], ['heiraten', 1], ['ein Kind bekommen', 1], ['in eine andere Stadt ziehen', 2], ['eine WG gründen', 2]],
      { task: 'Was verändert sich? Sortiere.', taskEn: 'What changes? Sort the events into work, family or housing.' }),
  ]);

const teil1 = section('teil-1', 'modul', 'Teil 1', 'Ein Jahr, das alles veränderte', 'mint', 15,
  ['Berichte über Veränderungen verstehen', 'das Präteritum'], [
    text('t1-text', `**Mein Wendepunkt: Drei Leserinnen und Leser erzählen**

**Priya (34), Leipzig:** Vor zwei Jahren bekam ich meine Tochter Ana. Vorher arbeitete ich sechzig Stunden pro Woche in einer Werbeagentur. Für Kinder hatte ich keine Zeit, dachte ich. Dann kam Ana, und plötzlich war alles anders. In den ersten Monaten schlief ich kaum. Aber ich lernte, was wirklich wichtig ist. Heute arbeite ich Teilzeit und bin viel ruhiger.

**Tomasz (41), Dresden:** Zwanzig Jahre lang arbeitete ich als Bankkaufmann. Der Job war sicher, aber er machte mir keinen Spaß. Mit 39 wollte ich endlich etwas mit den Händen machen. Ich kündigte und begann eine Ausbildung zum Tischler. Meine Freunde verstanden das nicht. Das erste Jahr war hart, weil ich sehr wenig Geld verdiente. Heute baue ich Möbel und bin stolz auf jedes Stück.

**Mira (29), jetzt Graz:** Während meines Studiums in Hamburg lernte ich Lukas kennen. Er kam aus Österreich. Nach dem Studium musste ich mich entscheiden: Hamburg oder Graz? Ich packte meine Sachen und zog zu ihm. Am Anfang fühlte ich mich fremd, denn ich verstand den Dialekt nicht. Innerhalb eines Jahres fand ich aber eine Stelle und neue Freunde.`,
      { kicker: 'Lesen', title: 'Aus einem Magazin', task: 'Lies die drei Berichte. Was hat sich verändert?', taskEn: 'Read the three reports from a magazine. What changed in each person’s life? Notice the past forms: bekam, arbeitete, zog.' }),
    mcq('t1-q1', 'Was hat Priyas Leben verändert?', ['ein neuer Job', 'ihre Tochter', 'ein Umzug'], 1),
    mcq('t1-q2', 'Warum war Tomasz’ erstes Jahr als Tischler schwer?', ['Er verdiente wenig.', 'Seine Freunde halfen ihm nicht.', 'Er fand keine Stelle.'], 0),
    mcq('t1-q3', 'Warum fühlte sich Mira in Graz am Anfang fremd?', ['Sie vermisste das Meer.', 'Sie verstand den Dialekt nicht.', 'Lukas war oft weg.'], 1),
    grammar('t1-gram', 'Das Präteritum', {
      intro: 'In geschriebenen Texten (Berichte, Geschichten, Zeitungen) benutzt man für die Vergangenheit meistens das **Präteritum**. Regelmäßige Verben bekommen **-te**, unregelmäßige Verben ändern den **Vokal**.',
      head: ['', 'Infinitiv', 'ich / er, sie, es', 'wir / sie, Sie'],
      rows: [
        ['regelmäßig', 'wohnen', 'wohn**te**', 'wohn**ten**'],
        ['regelmäßig', 'arbeiten', 'arbeit**ete**', 'arbeit**eten**'],
        ['unregelmäßig', 'kommen', 'k**a**m', 'k**a**men'],
        ['unregelmäßig', 'finden', 'f**a**nd', 'f**a**nden'],
        ['unregelmäßig', 'schlafen', 'schl**ie**f', 'schl**ie**fen'],
        ['gemischt', 'denken', 'd**ach**te', 'd**ach**ten'],
        ['gemischt', 'bringen', 'br**ach**te', 'br**ach**ten'],
        ['wichtig', 'sein / haben / werden', 'war / hatte / wurde', 'waren / hatten / wurden'],
      ],
      notes: [
        '**ich** und **er/sie/es** haben die gleiche Form: *ich kam, sie kam*. Unregelmäßige Verben haben hier keine Endung.',
        'Die anderen Endungen: *du kam**st**, ihr kam**t***.',
        'Verbstamm auf **-t** oder **-d**: mit **-e-**: *arbeit**e**te, red**e**te*.',
        'Trennbare Verben: *Ich lernte Lukas **kennen**. Er fing in der Fabrik **an**.*',
        'Im Gespräch benutzt man meistens das **Perfekt**. Aber *war, hatte* und die Modalverben (*musste, konnte*) hört man auch beim Sprechen sehr oft.',
      ],
      en: 'The Präteritum (simple past) is the typical past tense in written stories and reports. Regular verbs add -te (wohnte), irregular verbs change their vowel (kam, fand, schlief), and mixed verbs do both (dachte, brachte). The ich and er/sie/es forms are the same. In conversation, people mostly use the Perfekt instead, except for sein, haben and the modal verbs.',
    }),
    gap('t1-gap', ['Priya {{bekam}} vor zwei Jahren eine Tochter. (bekommen)', 'Tomasz {{arbeitete}} zwanzig Jahre in einer Bank. (arbeiten)', 'Mira {{zog}} nach Graz. (ziehen)', 'Am Anfang {{verstand}} sie den Dialekt nicht. (verstehen)', 'Wir {{wohnten}} damals in Halle. (wohnen)'],
      { task: 'Ergänze das Verb im Präteritum.', taskEn: 'Fill in the verb in the Präteritum.' }),
    match('t1-match', [['gehen', 'ging'], ['kommen', 'kam'], ['finden', 'fand'], ['denken', 'dachte'], ['schlafen', 'schlief'], ['beginnen', 'begann'], ['bringen', 'brachte']],
      { task: 'Infinitiv und Präteritum', taskEn: 'Match the infinitive to its Präteritum form.' }),
    sort('t1-sort', ['regelmäßig (-te)', 'unregelmäßig (neuer Vokal)'], [['wohnte', 0], ['arbeitete', 0], ['kündigte', 0], ['packte', 0], ['ging', 1], ['fand', 1], ['zog', 1], ['schlief', 1]],
      { task: 'Regelmäßig oder unregelmäßig?', taskEn: 'Sort the Präteritum forms: regular with -te, or irregular with a new vowel?' }),
  ]);

const teil2 = section('teil-2', 'modul', 'Teil 2', 'Was macht Sie glücklich?', 'sky', 15,
  ['eine Radiosendung verstehen', 'über Glück sprechen', 'Zeitangaben mit Dativ und Genitiv'], [
    audio('t2-audio', 'Hören: Leipzig am Abend', [
      ['moderatorin', 'Guten Abend und willkommen bei „Leipzig am Abend“! Unser Thema heute: Was macht Sie glücklich? Die erste Anruferin ist Frau Baumann. Hallo!'],
      ['frauBaumann', 'Hallo! Also, mich macht mein Garten glücklich. Seit meiner Rente bin ich fast jeden Tag dort. Am Sonntagmorgen trinke ich meinen Kaffee zwischen den Tomaten. Das ist für mich pures Glück.'],
      ['moderatorin', 'Wie schön! Danke, Frau Baumann. Und jetzt haben wir Urs aus Bern in der Leitung. Grüezi, Urs!'],
      ['urs', 'Grüezi! Bei mir ist es ganz einfach: Zeit mit meiner Tochter. Sie ist vor einem Jahr auf die Welt gekommen. Während der ersten Monate habe ich kaum geschlafen, aber ich war trotzdem so glücklich wie nie.'],
      ['moderatorin', 'Das glaube ich Ihnen sofort. Und unser dritter Anrufer ist Jonas. Hallo, Jonas!'],
      ['jonas', 'Hi! Ich muss ehrlich sein: Früher dachte ich, Geld macht glücklich. Nach meinem Studium hatte ich einen super bezahlten Job in Frankfurt. Aber ich war total gestresst.'],
      ['moderatorin', 'Und was haben Sie dann gemacht?'],
      ['jonas', 'Ich habe gekündigt. Innerhalb eines Monats war ich wieder in Leipzig. Jetzt arbeite ich weniger und verdiene halt auch weniger. Aber nach der Arbeit habe ich Zeit für Freunde und Musik. Das ist mir viel wichtiger.'],
      ['moderatorin', 'Garten, Familie, Freizeit: Glück hat viele Gesichter. Nach den Nachrichten sprechen wir weiter. Rufen Sie uns an!'],
    ], { task: 'Hör die Radiosendung. Was macht die drei Anrufer glücklich?', taskEn: 'Listen to the radio call-in show. What makes each of the three callers happy? Listen for the time expressions: seit meiner Rente, vor einem Jahr, innerhalb eines Monats.' }),
    mcq('t2-q1', 'Seit wann ist Frau Baumann fast jeden Tag im Garten?', ['seit ihrer Rente', 'seit einem Jahr', 'seit dem Sommer'], 0),
    mcq('t2-q2', 'Wann wurde Urs’ Tochter geboren?', ['vor einem Monat', 'vor einem Jahr', 'vor drei Jahren'], 1),
    mcq('t2-q3', 'Warum hat Jonas seinen Job in Frankfurt gekündigt?', ['Er war total gestresst.', 'Er hat zu wenig verdient.', 'Seine Freundin wohnte in Leipzig.'], 0),
    grammar('t2-gram', 'Zeitangaben mit Präpositionen', {
      intro: 'Viele Zeitangaben bestehen aus **Präposition + Nomen**. Die meisten Präpositionen stehen mit dem **Dativ**. **während, innerhalb** und **außerhalb** stehen mit dem **Genitiv**.',
      head: ['Präposition', 'Kasus', 'Frage', 'Beispiel'],
      rows: [
        ['vor', 'Dativ', 'Wann?', '**vor** zwei Jahr**en**, **vor** ein**em** Monat'],
        ['seit', 'Dativ', 'Seit wann?', '**seit** d**em** Sommer, **seit** mein**er** Rente'],
        ['nach', 'Dativ', 'Wann?', '**nach** d**em** Studium, **nach** d**er** Arbeit'],
        ['in', 'Dativ', 'Wann?', '**im** Herbst, **in** ein**er** Woche'],
        ['an', 'Dativ', 'Wann?', '**am** Montag, **am** Abend'],
        ['während', 'Genitiv', 'Wann?', '**während** d**es** Studium**s**'],
        ['innerhalb', 'Genitiv', 'In welcher Zeit?', '**innerhalb** ein**es** Jahr**es**'],
        ['außerhalb', 'Genitiv', 'Wann nicht?', '**außerhalb** d**er** Sprechzeiten'],
      ],
      notes: [
        '**vor** + Zeit = in der Vergangenheit: *vor zwei Jahren* (two years ago). **in** + Zeit = in der Zukunft: *in zwei Jahren*.',
        '**seit**: Es hat in der Vergangenheit begonnen und dauert noch an. Das Verb steht im **Präsens**: *Ich wohne **seit** drei Jahren hier.*',
        'Genitiv: maskulin und neutral **des …-s / -es**, feminin und Plural **der**: *während des Urlaubs, während der Ferien*.',
        'Im Gespräch hört man oft *während dem Urlaub* (Dativ). In der Prüfung und in Texten: Genitiv!',
      ],
      en: 'Time expressions often use a preposition plus a noun. vor, seit, nach, in and an take the dative: vor zwei Jahren (two years ago), seit dem Sommer (since the summer, still true now, so use the present tense), am Montag. während (during), innerhalb (within) and außerhalb (outside of) take the genitive: während des Studiums, innerhalb eines Jahres.',
    }),
    gap('t2-gap', ['Ich wohne {{seit}} drei Jahren in Leipzig.', '{{Vor}} einem Jahr habe ich geheiratet.', 'Während {{des}} Studiums hatte ich wenig Geld.', 'Wir treffen uns {{am}} Montag.', 'Innerhalb {{eines}} Monats war alles anders.', 'Ich rufe dich {{nach|vor}} der Arbeit an.'],
      { bank: ['seit', 'Vor', 'des', 'am', 'eines', 'nach'], task: 'Ergänze die Zeitangaben.', taskEn: 'Complete the time expressions.' }),
    sort('t2-sort', ['mit Dativ', 'mit Genitiv'], [['seit dem Umzug', 0], ['während des Urlaubs', 1], ['vor einer Woche', 0], ['innerhalb eines Jahres', 1], ['nach dem Essen', 0], ['außerhalb der Arbeitszeit', 1]],
      { task: 'Dativ oder Genitiv?', taskEn: 'Sort the time expressions: dative or genitive?' }),
    phrases('t2-phr', 'Über Glück sprechen', {
      'Was macht dich glücklich?': ['Mich macht … glücklich.', 'Für mich ist Glück, wenn …', 'Am glücklichsten bin ich, wenn …'],
      'Einen Glücksmoment beschreiben': ['Ich erinnere mich gut an …', 'Das war einer der schönsten Tage in meinem Leben.', 'Ich war so glücklich wie nie.'],
      'Reagieren': ['Das kann ich gut verstehen.', 'Das geht mir genauso.', 'Für mich ist das anders.'],
    }),
    compose('t2-comp', 'Was macht dich glücklich? Erzähl der Radiosendung davon.', [
      ['Sag, was dich glücklich macht.', 'Say what makes you happy.', ['Mich', 'macht', 'Musik', 'glücklich.']],
      ['Sag, seit wann.', 'Say since when.', ['Seit', 'meiner Kindheit', 'spiele', 'ich Klavier.']],
      ['Nenne einen besonderen Moment.', 'Name a special moment.', ['Vor zwei Jahren', 'war', 'ich', 'auf einem tollen Konzert.']],
    ], { task: 'Bau die Sätze.', taskEn: 'Build the sentences for your call to the radio show.' }),
  ]);

const teil3 = section('teil-3', 'modul', 'Teil 3', 'Bitte, danke, Sie?', 'lilac', 15,
  ['über gutes Benehmen sprechen', 'Höflichkeit in D-A-CH', 'Prüfungstraining: Lesen Teil 1'], [
    text('t3-text', `**Bitte, danke, Sie? Höflich in D-A-CH**

Wer neu nach Deutschland, Österreich oder in die Schweiz kommt, hat oft Fragen. Wann sagt man „du“, wann „Sie“? Wie pünktlich muss man sein? Hier sind ein paar Regeln.

**Duzen oder siezen?** In allen drei Ländern siezt man Fremde, ältere Menschen und Kollegen in traditionellen Firmen. In Start-ups, an der Uni und im Sportverein duzen sich aber fast alle. Die Regel: Die ältere Person oder die Chefin bietet das „Du“ an. In der Schweiz geht das oft schneller als in Deutschland.

**Pünktlichkeit:** Ein Termin um zehn Uhr heißt zehn Uhr, nicht zehn nach zehn. Wer sich verspätet, schreibt kurz eine Nachricht. Bei einer privaten Einladung darf man etwa zehn Minuten später kommen, aber nicht eine Stunde.

**Titel und Grüße:** In Österreich sind Titel wichtig. Man sagt oft „Frau Doktor“ oder „Herr Magister“. In Süddeutschland und Österreich grüßt man mit „Grüß Gott“, in der Schweiz mit „Grüezi“. Wenn man in ein Wartezimmer oder ein kleines Geschäft kommt, grüßt man alle kurz.

**Beim Essen:** Man wartet, bis alle etwas auf dem Teller haben, und sagt dann „Guten Appetit!“ oder in der Schweiz „En Guete!“.

Höflichkeit ist überall ein bisschen anders. Wer unsicher ist, fragt einfach: „Dürfen wir uns duzen?“ Das ist nie unhöflich.`,
      { kicker: 'Landeskunde', title: 'Gutes Benehmen', task: 'Lies den Text über Höflichkeit.', taskEn: 'Read the text about politeness rules in Germany, Austria and Switzerland (D-A-CH).' }),
    mcq('t3-q1', 'Wer bietet normalerweise das „Du“ an?', ['die jüngere Person', 'die ältere Person oder die Chefin', 'immer der Gast'], 1),
    mcq('t3-q2', 'Was macht man, wenn man zu spät kommt?', ['Man sagt nichts.', 'Man schreibt kurz eine Nachricht.', 'Man bringt Blumen mit.'], 1),
    mcq('t3-q3', 'Wo sind Titel wie „Frau Doktor“ besonders wichtig?', ['in Österreich', 'in der Schweiz', 'in Norddeutschland'], 0),
    sort('t3-sort', ['höflich', 'unhöflich'], [['im Wartezimmer kurz grüßen', 0], ['bei einer Verspätung eine Nachricht schreiben', 0], ['fragen: „Dürfen wir uns duzen?“', 0], ['eine Stunde zu spät zum Essen kommen', 1], ['die Chefin einfach duzen', 1], ['mit dem Essen anfangen, bevor alle etwas haben', 1]],
      { task: 'Höflich oder unhöflich?', taskEn: 'Polite or impolite in D-A-CH? Sort.' }),
    phrases('t3-phr', 'Höflich sein', {
      'Höflich bitten': ['Könnten Sie mir bitte helfen?', 'Würden Sie bitte das Fenster schließen?', 'Wäre es möglich, dass …?'],
      'Sich entschuldigen': ['Entschuldigung, ich bin spät dran.', 'Tut mir leid, das war keine Absicht.', 'Verzeihung, darf ich mal vorbei?'],
      'Das Du anbieten': ['Wollen wir uns nicht duzen?', 'Sag doch einfach du zu mir.', 'Ich bin übrigens die Sofia.'],
    }),
    tip('t3-pt-tip', 'Prüfungstraining: Lesen Teil 1', 'In **Lesen Teil 1** liest du einen Blogtext oder eine private E-Mail. Danach entscheidest du bei sechs Aussagen: **Richtig** oder **Falsch**?\n\n1. Lies zuerst die Aussagen und unterstreiche die wichtigen Wörter (Zahlen, Zeiten, Personen).\n2. Such die passende Stelle im Text. Achtung: Im Text stehen oft **andere Wörter** mit der gleichen Bedeutung.\n3. Vorsicht bei kleinen Unterschieden: *fünf Monate* ist nicht *ein halbes Jahr*.\n4. Die Aussagen kommen in der gleichen Reihenfolge wie im Text.'),
    text('t3-pt-text', `**Sofias Blog: Höflich auf Deutsch? Meine Lektionen**

Hallo zusammen! Seit acht Wochen wohne ich jetzt in Leipzig, und ich habe schon viel gelernt. Am Anfang war ich oft unsicher. In meiner ersten Woche bei der Arbeit sagte ich zu allen „du“. Niemand war böse, denn in meiner Firma duzen sich wirklich alle, sogar der Chef. Beim Bürgeramt war das aber anders. Die Beamtin sah mich ziemlich überrascht an, als ich „Hallo, wie geht’s dir?“ sagte.

Die zweite Lektion: Pünktlichkeit. In Brasilien kommt man zu einer Party gern eine Stunde später. Hier kam ich zu einem Abendessen bei Kollegen um halb neun statt um acht. Alle hatten schon gegessen! Seitdem stelle ich mir immer einen Wecker.

Was mir sehr gefällt: Man grüßt sich im Treppenhaus. Mein Nachbar Herr Lehmann sagt jeden Morgen: „Guten Morgen, Frau Sofia!“ Das finde ich total süß. Nur an eine Sache kann ich mich noch nicht gewöhnen: Am Sonntag soll man keinen Lärm machen. Bohren am Sonntag? Bloß nicht! Mein Regal steht deshalb immer noch auf dem Boden.`,
      { kicker: 'Prüfungstraining', title: 'Lesen Teil 1', task: 'Lies den Blog. Sind die Aussagen richtig oder falsch?', taskEn: 'Read Sofia’s blog post. Are the statements true (Richtig) or false (Falsch)?' }),
    mcq('t3-pt-q1', 'Sofia wohnt seit drei Monaten in Leipzig.', ['Richtig', 'Falsch'], 1, { why: 'Im Text steht: seit acht Wochen, also seit ungefähr zwei Monaten.' }),
    mcq('t3-pt-q2', 'In Sofias Firma sagen alle „du“ zueinander.', ['Richtig', 'Falsch'], 0, { why: 'In ihrer Firma duzen sich alle, sogar der Chef.' }),
    mcq('t3-pt-q3', 'Beim Abendessen bei den Kollegen kam Sofia zu spät.', ['Richtig', 'Falsch'], 0, { why: 'Sie kam um halb neun statt um acht.' }),
    mcq('t3-pt-q4', 'Sofia hat ihr Regal am Sonntag an die Wand gebohrt.', ['Richtig', 'Falsch'], 1, { why: 'Das Regal steht immer noch auf dem Boden.' }),
  ]);

const wg = section('wg', 'kommunikation', 'Die Fuchsbau-WG', 'Folge 3: Der Brief', 'rose', 12,
  ['eine Geschichte hören', 'einen formellen Brief verstehen', 'Vergangenes verstehen (Präteritum)'], [
    text('wg-intro', 'Ein grauer Novembermorgen. Sofia bringt die Post aus dem Briefkasten mit nach oben. Ein großer weißer Umschlag ist dabei, adressiert an alle Mieterinnen und Mieter. Kenji ist auch da, er frühstückt heute mit der WG, bevor er sein Restaurant aufmacht.',
      { kicker: 'Die Geschichte', en: 'A gray November morning. Sofia brings the mail up from the mailbox. There is a big white envelope addressed to all tenants. Kenji is there too: he is having breakfast with the flat share today before he opens his restaurant.' }),
    text('wg-brief', `**Elbstein Immobilien GmbH · Hausverwaltung · München**

München, 3. November 2026

**Eigentümerwechsel und geplante Modernisierung**

Sehr geehrte Mieterinnen und Mieter,

hiermit informieren wir Sie, dass die Elbstein Immobilien GmbH das Haus Karl-Heine-Straße in Leipzig zum 1. November 2026 gekauft hat. Seit diesem Tag ist unsere Firma Ihre neue Vermieterin. Ihre Mietverträge bleiben selbstverständlich gültig.

Im nächsten Jahr planen wir eine umfassende Modernisierung des Gebäudes: neue Fenster, eine neue Heizung, eine Dämmung der Fassade sowie Balkone und einen Aufzug. Während der Bauarbeiten kann es zu Lärm und zu kurzen Unterbrechungen bei Wasser und Strom kommen.

Nach dem Ende der Modernisierung wird sich die Miete im Rahmen der gesetzlichen Regelungen erhöhen. Innerhalb der nächsten vier Wochen erhalten Sie von uns ein persönliches Schreiben mit allen Einzelheiten.

Für Fragen stehe ich Ihnen gern zur Verfügung. Außerhalb der Sprechzeiten (Montag bis Donnerstag, 9 bis 12 Uhr) erreichen Sie mich per E-Mail.

Mit freundlichen Grüßen
i. A. Vogt
Hausverwaltung`,
      { kicker: 'Der Brief', title: 'Post aus München', task: 'Lies den Brief von Herrn Vogt.', taskEn: 'Read the formal letter from Herr Vogt, the property manager.', en: 'The letter says: Elbstein Immobilien GmbH bought the building as of November 1 and is now the landlord. Existing leases stay valid. Next year there will be a major modernization: new windows, new heating, insulation, balconies and an elevator. During the work there may be noise and short interruptions of water and power. After the modernization the rent will go up within the legal limits. Each tenant will get a personal letter with details within four weeks. "i. A." (im Auftrag) means "on behalf of".' }),
    audio('wg-audio', 'Folge 3: Der Brief', [
      ['sofia', 'Leute, hier ist ein Brief für alle Mieter. Von einer Firma aus München. Elbstein Immobilien?'],
      ['nele', 'Zeig mal her. „Eigentümerwechsel“ … Moment mal. Jemand hat unser Haus gekauft?'],
      ['amara', 'Lies doch mal vor, Nele.'],
      ['nele', 'Also: „Im nächsten Jahr planen wir eine umfassende Modernisierung. Nach dem Ende der Modernisierung wird sich die Miete erhöhen.“'],
      ['felix', 'Na super. Und um wie viel? Steht da eine Zahl?'],
      ['nele', 'Nein. Die Details kommen innerhalb der nächsten vier Wochen.'],
      ['kenji', 'Und was ist mit meinem Restaurant? Ich habe doch erst vor einem Jahr eröffnet! Ich habe so viel Geld in die Küche gesteckt.'],
      ['sofia', 'Moment, ich verstehe das nicht ganz. Modernisierung, das ist doch eigentlich gut, oder? Neue Fenster, eine neue Heizung …'],
      ['amara', 'Ja, schon. Aber oft heißt das: Danach ist die Miete so hoch, dass die alten Mieter ausziehen müssen.'],
      ['felix', 'Ich zahle jetzt schon fast die Hälfte von meinem Geld für mein Zimmer. Mehr geht halt nicht.'],
      ['nele', 'Und Herr Lehmann? Er wohnt seit 1968 hier. Für ihn ist das ein Albtraum.'],
      ['sofia', 'Er hat bestimmt auch so einen Brief bekommen. Sollen wir mal runtergehen?'],
    ], { task: 'Hör zu. Wie reagieren die Mitbewohner auf den Brief?', taskEn: 'Listen. How do the flatmates react to the letter? Albtraum = nightmare.' }),
    audio('wg-lehmann', 'Folge 3: Herr Lehmann erzählt', [
      ['herrLehmann', 'Nu, kommt rein, Kinder. Ja, den Brief habe ich auch gekriegt. Setzt euch, ich erzähle euch mal was über dieses Haus.'],
      ['herrLehmann', 'Man baute es 1904, für die Arbeiter der Maschinenfabrik hier um die Ecke. Damals wohnten in jeder Wohnung sechs, sieben Leute. Die Toilette war im Treppenhaus.'],
      ['sofia', 'Und wann kamen Sie hierher?'],
      ['herrLehmann', '1968. Ich war achtzehn und fing in der Fabrik als Schlosser an. Meine Frau Erika lernte ich hier im Treppenhaus kennen. Sie wohnte im dritten Stock.'],
      ['nele', 'Im Treppenhaus? Wie romantisch!'],
      ['herrLehmann', 'Dann kam der Herbst 1989. Jeden Montag gingen wir zur Nikolaikirche und demonstrierten. Wir hatten Angst, aber wir wollten nicht mehr schweigen.'],
      ['felix', 'Und nach der Wende?'],
      ['herrLehmann', 'Das war schwer. Die Fabrik machte zu, viele Nachbarn verloren ihre Arbeit und zogen in den Westen. In den Neunzigern stand das Haus halb leer. Im Winter froren wir, weil niemand die Heizung reparierte.'],
      ['amara', 'Und wann kamen die Studenten?'],
      ['herrLehmann', 'So um 2005. Die Mieten waren billig, und plötzlich war hier wieder Leben: Musik, Partys, Fahrräder im Hof. Und letztes Jahr eröffnete Kenji unten sein Restaurant. Dort war früher der Konsum. Da kaufte meine Erika jeden Morgen Brötchen.'],
      ['kenji', 'Das wusste ich gar nicht.'],
      ['herrLehmann', 'Dieses Haus hat schon viel erlebt. Aber ich bin sechsundsiebzig. Wo soll ich denn noch hin?'],
      ['nele', 'Nirgendwohin, Herr Lehmann. Wir müssen etwas tun.'],
    ], { task: 'Hör zu. Herr Lehmann erzählt die Geschichte des Hauses.', taskEn: 'Listen. Herr Lehmann tells the history of the building in the Präteritum. Konsum = a chain of grocery stores in East Germany. Schlosser = metalworker, fitter.' }),
    mcq('wg-q1', 'Wer ist der neue Besitzer des Hauses?', ['die Stadt Leipzig', 'eine Immobilienfirma aus München', 'Herr Lehmann'], 1),
    mcq('wg-q2', 'Warum macht sich Kenji Sorgen?', ['Er hat erst vor einem Jahr eröffnet und viel Geld investiert.', 'Seine Küche ist kaputt.', 'Er möchte nach München ziehen.'], 0),
    mcq('wg-q3', 'Wann baute man das Haus?', ['1868', '1904', '1968'], 1),
    mcq('wg-q4', 'Wo lernte Herr Lehmann seine Frau kennen?', ['in der Fabrik', 'im Treppenhaus', 'im Konsum'], 1),
    mcq('wg-q5', 'Was war früher dort, wo heute Kenjis Restaurant ist?', ['eine Fabrik', 'ein Lebensmittelladen', 'eine Kneipe'], 1),
  ]);

const grammatik = section('grammatik', 'grammatik', 'Grammatik', 'Alles auf einen Blick', 'peach', 10,
  ['Präteritum der Modalverben', 'Präteritum oder Perfekt?', 'Zeitangaben'], [
    grammar('g-1', 'Präteritum: Modalverben', {
      intro: 'Modalverben bekommen im Präteritum **-te** und verlieren den **Umlaut**: müssen → **musste**, können → **konnte**.',
      head: ['', 'können', 'müssen', 'wollen', 'dürfen'],
      rows: [
        ['ich', 'konn**te**', 'muss**te**', 'woll**te**', 'durf**te**'],
        ['du', 'konn**test**', 'muss**test**', 'woll**test**', 'durf**test**'],
        ['er/sie/es', 'konn**te**', 'muss**te**', 'woll**te**', 'durf**te**'],
        ['wir', 'konn**ten**', 'muss**ten**', 'woll**ten**', 'durf**ten**'],
        ['ihr', 'konn**tet**', 'muss**tet**', 'woll**tet**', 'durf**tet**'],
        ['sie/Sie', 'konn**ten**', 'muss**ten**', 'woll**ten**', 'durf**ten**'],
      ],
      notes: ['Auch: sollen → **sollte**, mögen → **mochte**.', 'Der Infinitiv steht am Ende: *Er **musste** früh **aufstehen**.*', 'Modalverben benutzt man auch beim Sprechen fast immer im Präteritum: *Ich **konnte** nicht kommen.*'],
      en: 'Modal verbs in the Präteritum add -te and drop the umlaut: konnte, musste, durfte. sollen becomes sollte, mögen becomes mochte. The infinitive goes to the end of the sentence. Even in speech, modal verbs are usually used in the Präteritum.',
    }),
    grammar('g-2', 'Präteritum oder Perfekt?', {
      head: ['Situation', 'meistens', 'Beispiel'],
      rows: [
        ['Geschichte, Bericht, Zeitung, Brief', 'Präteritum', 'Man **baute** das Haus 1904.'],
        ['Gespräch, Chat, Nachricht', 'Perfekt', 'Ich **habe** gestern lange **gearbeitet**.'],
        ['sein, haben', 'Präteritum (auch beim Sprechen)', 'Das **war** schwer. Wir **hatten** Angst.'],
        ['Modalverben', 'Präteritum (auch beim Sprechen)', 'Ich **wollte** anrufen.'],
      ],
      notes: ['In Norddeutschland hört man das Präteritum beim Sprechen etwas öfter als in Süddeutschland, Österreich und der Schweiz.', 'Herr Lehmann erzählt eine lange Geschichte, deshalb benutzt er viel Präteritum, fast wie in einem Buch.'],
      en: 'Written stories, reports and newspapers mostly use the Präteritum. Conversation and chat mostly use the Perfekt. Exception: sein, haben and the modal verbs are usually in the Präteritum even when speaking (war, hatte, wollte).',
    }),
    mcq('g-q1', 'Früher ___ ich in Halle. (wohnen, Präteritum)', ['wohnte', 'wohne', 'gewohnt'], 0),
    mcq('g-q2', 'Als Kind ___ ich jeden Tag um sechs aufstehen.', ['muss', 'musste', 'müssen'], 1),
    mcq('g-q3', 'Wir treffen uns ___ Wochenende.', ['am', 'im', 'um'], 0),
    mcq('g-q4', '___ des Urlaubs habe ich viel gelesen.', ['Seit', 'Während', 'Vor'], 1, { why: 'während + Genitiv: während des Urlaubs.' }),
  ]);

const uebungen = section('uebungen', 'uebung', 'Übungen', 'Training', 'butter', 15,
  ['Strategie: nach einem Muster schreiben', 'Aussprache: mehrere Konsonanten'], [
    tip('u-tip', 'Strategie: Eigene Texte nach einem Muster schreiben', 'Du musst nicht alles allein erfinden. Nimm einen guten Text als **Muster**, zum Beispiel die Berichte aus Teil 1.\n\n1. Schau dir den Aufbau an: **Wann? Was ist passiert? Wie war es am Anfang? Wie ist es heute?**\n2. Markiere nützliche Sätze: *Vor zwei Jahren …, Am Anfang …, Heute …*\n3. Tausch nur die Informationen aus und erzähl **deine** Geschichte.'),
    compose('u-comp', 'Schreib nach dem Muster aus Teil 1 über eine Veränderung in deinem Leben.', [
      ['Wann und was?', 'When and what happened?', ['Vor drei Jahren', 'zog', 'ich', 'nach Leipzig.']],
      ['Wie war es am Anfang?', 'What was it like at first?', ['Am Anfang', 'verstand', 'ich', 'fast nichts.']],
      ['Wie ist es heute?', 'How is it today?', ['Heute', 'fühle', 'ich mich', 'hier zu Hause.']],
    ], { task: 'Bau deinen Bericht.', taskEn: 'Build your own short report, following the model from Teil 1.' }),
    audio('u-aus', 'Aussprache: mehrere Konsonanten', [
      ['frauKlein', 'Im Deutschen stehen oft viele Konsonanten hintereinander. Keine Angst: Sprich langsam und lass keinen Laut weg.'],
      ['frauKlein', 'Hör mal: Herbst. Sturm. Herbststurm. Noch einmal: Herbst … sturm. Herbststurm.'],
      ['frauKlein', 'Obst. Saft. Obstsaft. Und jetzt schneller: Obstsaft.'],
      ['frauKlein', 'Bei Verben in der du-Form auch: du kämpfst, du schimpfst, du wechselst.'],
      ['frauKlein', 'Ein Tipp: Bei langen Wörtern hilft eine kleine Pause zwischen den Teilen. Wurst … brot. Arzt … termin. Dann wird es leichter.'],
    ], { task: 'Hör zu und sprich nach.', taskEn: 'Listen and repeat. German often puts many consonants in a row. Speak slowly, do not drop any sound, and make a tiny pause between the parts of a long word.' }),
    sort('u-sort', ['einfaches Wort', 'zusammengesetztes Wort'], [['Herbst', 0], ['Angst', 0], ['nichts', 0], ['du kämpfst', 0], ['Obstsaft', 1], ['Herbststurm', 1], ['Wurstbrot', 1], ['Arzttermin', 1]],
      { task: 'Einfach oder zusammengesetzt? Sprich die Wörter laut.', taskEn: 'Is it a simple word or a compound word? Say each word out loud.' }),
    gap('u-gap', ['Er ist nach Berlin gefahren. → Er {{fuhr}} nach Berlin.', 'Wir haben viel gelacht. → Wir {{lachten}} viel.', 'Ich habe ihn nicht gesehen. → Ich {{sah}} ihn nicht.', 'Sie hat lange gewartet. → Sie {{wartete}} lange.', 'Du bist zu spät gekommen. → Du {{kamst}} zu spät.'],
      { task: 'Vom Perfekt ins Präteritum.', taskEn: 'Rewrite from the Perfekt into the Präteritum.' }),
    order('u-order', ['Seit', 'dem Sommer', 'wohnt', 'Sofia', 'in Leipzig.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence. The time expression comes first, then the verb.' }),
  ]);

const wortschatz = section('wortschatz', 'wortschatz', 'Wortschatz und Check', 'Das kann ich jetzt', 'mint', 12,
  ['Wörter wiederholen', 'den Stand einschätzen', 'Plattform 1: Kapitel 1 bis 3'], [
    cards('w-cards', [
      ['das Ereignis', 'etwas Wichtiges, das passiert', 'event'], ['die Veränderung', 'wenn etwas anders wird', 'change'], ['der Umzug', 'in eine neue Wohnung ziehen', 'move'],
      ['kündigen', 'einen Job oder eine Wohnung beenden', 'to quit, to give notice'], ['die Rente', 'Zeit nach dem Arbeitsleben', 'retirement, pension'], ['die Hochzeit', 'das Fest, wenn man heiratet', 'wedding'],
      ['das Glück', 'ein sehr schönes Gefühl', 'happiness, luck'], ['höflich', 'freundlich und mit Respekt', 'polite'], ['pünktlich', 'genau zur richtigen Zeit', 'on time'],
      ['siezen', '„Sie“ sagen', 'to use the formal Sie'], ['die Miete', 'Geld für die Wohnung', 'rent'], ['der Vermieter', 'ihm gehört die Wohnung', 'landlord'],
    ]),
    phrases('w-phr', 'Von Veränderungen erzählen', {
      'Früher': ['Früher wohnte ich in …', 'Damals hatte ich …', 'Als Kind wollte ich …'],
      'Der Wendepunkt': ['Dann passierte etwas Wichtiges: …', 'Vor zwei Jahren änderte sich alles.', 'Plötzlich war alles anders.'],
      'Heute': ['Heute bin ich …', 'Seit dem Umzug fühle ich mich …', 'Ich bin froh, dass …'],
    }),
    match('w-match', [['der Umzugskarton', 'Darin packt man Sachen für den Umzug.'], ['der Ehering', 'Den trägt man nach der Hochzeit am Finger.'], ['der Kinderwagen', 'Darin schiebt man ein Baby.'], ['der Mietvertrag', 'Den unterschreibt man, wenn man eine Wohnung mietet.'], ['der Briefkasten', 'Hier liegt jeden Tag die Post.'], ['die Fabrik', 'Hier stellen Arbeiter Maschinen oder Waren her.'], ['das Zeugnis', 'Das bekommt man am Ende des Schuljahres.'], ['der Blumenstrauß', 'Den schenkt man oft zum Geburtstag.'], ['der Schlüssel', 'Damit öffnet man die Wohnungstür.']],
      { task: 'Was ist was?', taskEn: 'Match each object to its description.' }),
    gap('w-gap', ['Herr Lehmann wohnt {{seit}} 1968 im Haus.', 'Das Haus {{war}} in den Neunzigern halb leer.', 'Felix {{konnte}} in der Nacht nicht schlafen.', '{{Während}} der Bauarbeiten gibt es viel Lärm.'],
      { bank: ['seit', 'war', 'konnte', 'Während'], task: 'Ergänze.', taskEn: 'Fill in the gaps.' }),
    checklist('w-check', ['Ich kann Berichte über Veränderungen im Leben verstehen.', 'Ich kann im Präteritum über Vergangenes schreiben.', 'Ich kann Zeitangaben mit vor, seit, während und innerhalb machen.', 'Ich kann über Glück sprechen.', 'Ich kann sagen, was in D-A-CH höflich ist.', 'Ich kann einen formellen Brief verstehen.']),
    text('w-pf-intro', '**Plattform 1: Kapitel 1 bis 3.** Zeit für eine kurze Wiederholung: zu + Infinitiv, obwohl, lassen, deshalb und sodass, wegen und trotz mit Genitiv und das Präteritum.',
      { kicker: 'Plattform 1', en: 'Plattform 1: a short review of chapters 1 to 3.' }),
    gap('w-pf-gap', ['Sofia hat heute keine Lust {{zu kochen}}. (kochen)', 'Es ist schwer, in Leipzig eine Wohnung {{zu finden}}. (finden)', 'Vergiss nicht, den Ofen {{auszumachen}}. (ausmachen)'],
      { task: 'zu + Infinitiv: Ergänze.', taskEn: 'Fill in zu + infinitive. With separable verbs, zu goes in the middle: auszumachen.' }),
    mcq('w-pf-q1', 'Felix geht spazieren, ___ es regnet.', ['weil', 'obwohl', 'deshalb'], 1, { task: 'Was passt?', taskEn: 'Which word fits?', why: 'obwohl: Es regnet, aber er geht trotzdem spazieren.' }),
    mcq('w-pf-q2', 'Kenji repariert den Ofen nicht selbst. Er ___ ihn von einem Techniker reparieren.', ['lässt', 'will', 'kann'], 0, { why: 'lassen + Infinitiv: Jemand anderes macht es.' }),
    order('w-pf-order', ['Der Ofen', 'war', 'kaputt,', 'deshalb', 'blieb', 'das Restaurant', 'zu.'], { task: 'Bau den Satz mit deshalb.', taskEn: 'Build the sentence with deshalb. After deshalb, the verb comes next.' }),
    mcq('w-pf-q3', 'Es regnete stark, ___ das Konzert ausfiel.', ['sodass', 'deshalb', 'trotzdem'], 0, { why: 'sodass leitet einen Nebensatz ein: Das Verb steht am Ende.' }),
    gap('w-pf-gap2', ['{{Wegen}} des Regens blieben wir zu Hause.', '{{Trotz}} der Kälte gingen sie spazieren.', 'Wegen {{des}} Lärms konnte Felix nicht schlafen.'],
      { bank: ['Wegen', 'Trotz', 'des'], task: 'wegen oder trotz? Ergänze.', taskEn: 'Fill in wegen (because of) or trotz (despite), both with the genitive.' }),
    mcq('w-pf-q4', 'Als junger Mann ___ Herr Lehmann in der Fabrik.', ['arbeitete', 'arbeitet', 'gearbeitet'], 0, { why: 'Präteritum von arbeiten: er arbeitete.' }),
  ]);

export const b1k3: Chapter = {
  id: 'b1-k3', number: 3, title: 'Veränderungen', theme: 'Ereignisse im Leben, Glück, Höflichkeit',
  grammar: 'Präteritum (regelmäßig, unregelmäßig, Modalverben). Zeitangaben mit Präpositionen (Dativ: vor, seit, nach, in, an. Genitiv: während, innerhalb, außerhalb).',
  sections: [einstieg, teil1, teil2, teil3, wg, grammatik, uebungen, wortschatz],
  games: ['b1k3-sprint', 'b1k3-memory', 'b1k3-satzbau', 'b1k3-artikel'],
  exam: [
    x(1, mcq('x1', 'Gestern ___ ich leider keine Zeit.', ['hatte', 'habe', 'hätte'], 0)),
    x(1, mcq('x2', 'Früher ___ wir in einer kleinen Wohnung in Halle.', ['wohnten', 'wohnen', 'gewohnt'], 0)),
    x(1, mcq('x3', 'Er ___ nicht kommen, weil er krank war.', ['konnte', 'kann', 'konnt'], 0)),
    x(3, gap('x4', ['Sie {{ging}} früh nach Hause. (gehen)', 'Wir {{fanden}} die Wohnung toll. (finden)', 'Ich {{musste}} lange warten. (müssen)'], { task: 'Ergänze im Präteritum.', taskEn: 'Fill in the Präteritum.' })),
    x(3, gap('x5', ['Ich lerne {{seit}} einem Jahr Deutsch.', '{{Während}} des Studiums jobbte sie in einem Café.', 'Wir sehen uns {{am}} Freitag.'], { task: 'Ergänze die Präposition.', taskEn: 'Fill in the preposition.' })),
    x(1, mcq('x6', 'Warum ist Ben nach Leipzig zurückgekommen?', ['wegen einer neuen Stelle', 'weil seine Mutter krank war', 'wegen seiner Freundin'], 1),
      audio('x-st1', 'Hören: Ein Wiedersehen', [
        ['elif', 'Ben? Das gibt’s doch nicht! Wir haben uns ja ewig nicht gesehen!'],
        ['ben', 'Elif! Seit dem Abitur nicht mehr, oder? Das ist bestimmt zehn Jahre her.'],
        ['elif', 'Stimmt. Und, was machst du so?'],
        ['ben', 'Ich war lange in Köln. Aber vor zwei Monaten bin ich zurück nach Leipzig gezogen, weil meine Mutter krank war.'],
        ['elif', 'Oh, das tut mir leid. Geht es ihr jetzt besser?'],
        ['ben', 'Ja, zum Glück. Und du? Arbeitest du immer noch im Krankenhaus?'],
        ['elif', 'Nein, ich habe vor einem Jahr eine eigene Praxis für Physiotherapie eröffnet. Mitten in Connewitz.'],
        ['ben', 'Wow, Glückwunsch! Dann komme ich mal vorbei. Mein Rücken freut sich schon.'],
      ])),
    x(1, mcq('x7', 'Was hat Elif vor einem Jahr gemacht? (Hörtext oben)', ['eine Praxis eröffnet', 'im Krankenhaus angefangen', 'das Abitur gemacht'], 0)),
    x(1, mcq('x8', 'Wann findet das Erzählcafé statt?', ['jeden Mittwoch', 'einmal im Monat', 'nur im Sommer'], 1),
      text('x-st2', '**Erzählcafé: Plagwitz früher und heute**\nWie lebte man vor fünfzig Jahren in Plagwitz? Wo arbeiteten die Menschen, wo kauften sie ein? Ältere Nachbarinnen und Nachbarn erzählen ihre Geschichten.\nWann: jeden ersten Mittwoch im Monat, 15 bis 17 Uhr\nWo: Stadtteilbibliothek, Erdgeschoss\nDer Eintritt ist frei. Kaffee und Kuchen gegen eine kleine Spende. Während der Veranstaltung bitte keine Handys!', { kicker: 'Lesen' })),
    x(1, mcq('x9', 'Was soll man während der Veranstaltung nicht tun? (Text oben)', ['Kuchen essen', 'Fragen stellen', 'das Handy benutzen'], 2)),
    x(2, order('x10', ['Vor', 'zwei Jahren', 'zog', 'Mira', 'nach Graz.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence.' })),
    x(1, mcq('x11', 'Du triffst die Mutter deiner Kollegin zum ersten Mal. Was sagst du?', ['Hi, wie geht’s dir?', 'Guten Tag, freut mich, Sie kennenzulernen.', 'Na, alles klar?'], 1)),
    x(1, mcq('x12', 'Wie heißt das Präteritum von „denken“? (er …)', ['denkte', 'dachte', 'dacht'], 1)),
  ],
};

export const gamesB1k3: GameDef[] = [
  {
    id: 'b1k3-sprint', engine: 'sprint', title: 'Präteritum-Sprint', blurb: 'Welche Form ist richtig? 60 Sekunden!', skill: 'Präteritum', tone: 'mint', chapter: 3, emoji: '⚡',
    rules: 'Du siehst einen Infinitiv. Tippe auf die richtige Präteritum-Form für „ich“.', label: 'ich … (Präteritum)',
    items: [
      { q: 'gehen → ich ___', a: 'ging', wrong: ['gehte', 'gang'] }, { q: 'kommen → ich ___', a: 'kam', wrong: ['kommte', 'kamm'] },
      { q: 'finden → ich ___', a: 'fand', wrong: ['findete', 'fund'] }, { q: 'denken → ich ___', a: 'dachte', wrong: ['denkte', 'dank'] },
      { q: 'bringen → ich ___', a: 'brachte', wrong: ['bringte', 'brang'] }, { q: 'schlafen → ich ___', a: 'schlief', wrong: ['schlafte', 'schluf'] },
      { q: 'wohnen → ich ___', a: 'wohnte', wrong: ['wohn', 'wahn'] }, { q: 'arbeiten → ich ___', a: 'arbeitete', wrong: ['arbeitte', 'arbeit'] },
      { q: 'können → ich ___', a: 'konnte', wrong: ['könnte', 'kannte'] }, { q: 'müssen → ich ___', a: 'musste', wrong: ['müsste', 'muss'] },
      { q: 'sein → ich ___', a: 'war', wrong: ['wurde', 'bin'] }, { q: 'werden → ich ___', a: 'wurde', wrong: ['warde', 'war'] },
    ],
  },
  {
    id: 'b1k3-memory', engine: 'memory', title: 'Präteritum-Memory', blurb: 'Infinitiv und Präteritum: Finde die Paare.', skill: 'unregelmäßige Verben', tone: 'lilac', chapter: 3, emoji: '🃏',
    rules: 'Dreh zwei Karten um. Ein Paar ist ein Infinitiv und seine Präteritum-Form.', kinds: ['Infinitiv', 'Präteritum'],
    pairs: [['gehen', 'ging'], ['kommen', 'kam'], ['sehen', 'sah'], ['finden', 'fand'], ['denken', 'dachte'], ['wissen', 'wusste'], ['beginnen', 'begann'], ['schlafen', 'schlief'], ['ziehen', 'zog'], ['verstehen', 'verstand']],
  },
  {
    id: 'b1k3-satzbau', engine: 'satzbau', title: 'Zeit-Baukasten', blurb: 'Zeitangabe vorne, Verb auf Position 2!', skill: 'Präteritum und Zeitangaben', tone: 'sky', chapter: 3, emoji: '🧱',
    rules: 'Tippe die Wörter in der richtigen Reihenfolge an. Steht die Zeitangabe vorne, kommt danach sofort das Verb.',
    sentences: [
      { parts: ['Vor zwei Jahren', 'bekam', 'Priya', 'eine Tochter.'], hint: 'vor + Dativ' },
      { parts: ['Seit dem Sommer', 'wohnt', 'Sofia', 'in Leipzig.'], hint: 'seit + Präsens' },
      { parts: ['Während des Studiums', 'lernte', 'Mira', 'Lukas', 'kennen.'], hint: 'während + Genitiv' },
      { parts: ['Man', 'baute', 'das Haus', 'im Jahr 1904.'], hint: 'Präteritum' },
      { parts: ['Herr Lehmann', 'musste', 'früh', 'aufstehen.'], hint: 'Modalverb auf 2, Infinitiv am Ende' },
      { parts: ['Nach der Wende', 'stand', 'das Haus', 'halb leer.'], hint: 'nach + Dativ' },
      { parts: ['Innerhalb eines Jahres', 'fand', 'sie', 'eine Stelle.'], hint: 'innerhalb + Genitiv' },
      { parts: ['Am Montag', 'kam', 'ein Brief', 'aus München.'], hint: 'an + Dativ' },
    ],
  },
  {
    id: 'b1k3-artikel', engine: 'regen', title: 'Artikel-Regen', blurb: 'der, die oder das? Leben, Haus und Glück.', skill: 'Artikel', tone: 'rose', chapter: 3, emoji: '☔',
    rules: 'Ein Nomen fällt herunter. Tippe auf den richtigen Artikel.', buckets: ['der', 'die', 'das'],
    words: artikel('der Umzug, die Hochzeit, das Ereignis, die Geburt, der Abschluss, das Glück, die Veränderung, der Brief, die Miete, das Gebäude, die Fabrik, der Vermieter, die Höflichkeit, das Treppenhaus, die Rente, der Termin, die Heizung, das Jahrhundert'),
  },
];
