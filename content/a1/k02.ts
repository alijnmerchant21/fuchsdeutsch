import type { Chapter, GameDef, GlossaryEntry } from '../types';
import { artikel, audio, cards, checklist, compose, gap, grammar, match, mcq, order, overview, phrases, section, sort, text, tip, x } from '../helpers';

// A1 Kapitel 2: Hobbys, Wochentage, Zahlen ab 20, Berufe.
// Grammar: Ja/Nein-Fragen, Verben mit Vokalwechsel, der/das/die, Singular und Plural, haben.

export const glossaryA1k2: Record<string, GlossaryEntry> = {
  Hobby: { de: 'Etwas, das man in der Freizeit gern macht.', en: 'hobby' },
  Freizeit: { de: 'Die Zeit ohne Arbeit und ohne Schule.', en: 'free time' },
  gern: { de: 'Mit Freude. „Ich koche gern.“', en: 'gladly; (I) like to …' },
  Beruf: { de: 'Die Arbeit, die man macht, zum Beispiel Lehrerin oder Koch.', en: 'job, profession' },
  Kollege: { de: 'Eine Person, die mit dir arbeitet.', en: 'colleague' },
  Wochenende: { de: 'Samstag und Sonntag.', en: 'weekend' },
  Formular: { de: 'Ein Papier oder eine Webseite mit Feldern. Man schreibt Informationen hinein.', en: 'form' },
  Pflegerin: { de: 'Eine Frau, die kranke oder alte Menschen versorgt.', en: 'nurse, carer' },
  Koch: { de: 'Ein Mann, der im Restaurant kocht.', en: 'cook, chef' },
  Musiker: { de: 'Ein Mann, der Musik macht.', en: 'musician' },
};

const einstieg = section('einstieg', 'einstieg', 'Einstieg', 'Was machst du gern?', 'butter', 8,
  ['das Kapitel kennenlernen', 'Hobbys benennen'], [
    overview('e-over', 'Kapitel 2: Freunde, Kollegen und ich',
      'In Kapitel 2 sprichst du über dein Leben: Was machst du [[gern]] in der [[Freizeit]]? Was ist dein [[Beruf]]? An welchem Tag hast du Zeit? Du lernst die Wochentage, die Zahlen ab 20 und wie man ein einfaches [[Formular]] ausfüllt.\n\nIn der WG gibt es ein Problem: Wer kauft ein? Wer putzt? Die vier machen einen Plan.',
      'This chapter is about hobbies, jobs, weekdays and numbers above 20. Grammar: yes/no questions, verbs that change their vowel (fahren, lesen), the articles der, die, das, plurals and the verb haben.',
      ['über Hobbys sprechen', 'Wochentage und Zahlen ab 20', 'Berufe nennen', 'ein Formular ausfüllen']),
    match('e-match', [['schwimmen', '🏊'], ['lesen', '📚'], ['kochen', '🍳'], ['Fußball spielen', '⚽'], ['Musik hören', '🎧'], ['tanzen', '💃'], ['Rad fahren', '🚲'], ['fotografieren', '📸']],
      { task: 'Welches Hobby ist das?', taskEn: 'Match the hobby to the picture.' }),
    text('e-text', 'Was machst du **gern**? *Ich lese gern. Ich koche gern. Ich spiele gern Fußball.*\n\n**gern** steht nach dem Verb.', { kicker: 'Wichtig', en: 'To say you like doing something, add "gern" after the verb: Ich koche gern = I like cooking.' }),
  ]);

const teil1 = section('teil-1', 'modul', 'Teil 1', 'Hobbys und Wochentage', 'mint', 15,
  ['Hobbys nennen', 'Wochentage', 'Ja/Nein-Fragen'], [
    audio('t1-audio', 'Hören: Wann hast du Zeit?', [
      ['amara', 'Felix, spielst du gern Fußball?'],
      ['felix', 'Nein, nicht so gern. Aber ich spiele gern Gitarre. Und du?'],
      ['amara', 'Ich tanze gern. Am Mittwoch habe ich einen Tanzkurs.'],
      ['felix', 'Cool! Hast du am Freitag Zeit? Wir machen Musik im Park.'],
      ['amara', 'Am Freitag? Ja, super! Ich komme.'],
    ], { task: 'Hör zu.', taskEn: 'Listen. What do Felix and Amara like doing?' }),
    mcq('t1-q1', 'Was macht Felix gern?', ['Fußball spielen', 'Gitarre spielen', 'tanzen'], 1),
    mcq('t1-q2', 'Wann hat Amara einen Tanzkurs?', ['am Montag', 'am Mittwoch', 'am Freitag'], 1),
    grammar('t1-tage', 'Die Wochentage', {
      head: ['', ''],
      rows: [['der Montag', 'am Montag'], ['der Dienstag', 'am Dienstag'], ['der Mittwoch', 'am Mittwoch'], ['der Donnerstag', 'am Donnerstag'], ['der Freitag', 'am Freitag'], ['der Samstag', 'am Samstag'], ['der Sonntag', 'am Sonntag'], ['das Wochenende', 'am Wochenende']],
      notes: ['Alle Tage sind **der**. Mit Tagen sagt man **am**: *am Montag*.', 'In Norddeutschland sagt man oft **Sonnabend** für Samstag.'],
      en: 'All weekdays are masculine (der). "On Monday" = am Montag.',
    }),
    order('t1-order', ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'], { task: 'Bring die Tage in die richtige Reihenfolge.', taskEn: 'Put the days in order, starting with Monday.' }),
    grammar('t1-gram', 'Ja/Nein-Fragen', {
      intro: 'Bei Ja/Nein-Fragen steht das **Verb auf Position 1**.',
      head: ['Verb', 'Subjekt', 'Rest', 'Antwort'],
      rows: [['**Spielst**', 'du', 'gern Fußball?', 'Ja. / Nein.'], ['**Hast**', 'du', 'am Freitag Zeit?', 'Ja, klar!'], ['**Kommst**', 'du', 'aus Wien?', 'Nein, aus Graz.']],
      en: 'Yes/no questions start with the verb. Compare: Du spielst Fußball (statement) and Spielst du Fußball? (question).',
    }),
    order('t1-order2', ['Tanzt', 'du', 'gern?'], { task: 'Bau die Ja/Nein-Frage.', taskEn: 'Build the yes/no question.' }),
    sort('t1-sort', ['W-Frage', 'Ja/Nein-Frage'], [['Was machst du gern?', 0], ['Liest du gern?', 1], ['Wann hast du Zeit?', 0], ['Hast du am Sonntag Zeit?', 1], ['Wo wohnst du?', 0], ['Wohnst du in Leipzig?', 1]],
      { task: 'Welche Frage ist das?', taskEn: 'Sort: question word question or yes/no question?' }),
  ]);

const teil2 = section('teil-2', 'modul', 'Teil 2', 'Zahlen ab 20', 'sky', 12,
  ['Zahlen bis 1000', 'nach dem Alter fragen'], [
    grammar('t2-gram', 'Zahlen ab 20', {
      intro: 'Auf Deutsch sagt man erst die Einer, dann die Zehner: **21 = einundzwanzig** (eins + und + zwanzig).',
      head: ['', '', ''],
      rows: [['20 zwanzig', '21 einundzwanzig', '22 zweiundzwanzig'], ['30 dreißig', '35 fünfunddreißig', '40 vierzig'], ['50 fünfzig', '60 sechzig', '70 siebzig'], ['80 achtzig', '90 neunzig', '100 (ein)hundert'], ['101 hunderteins', '250 zweihundertfünfzig', '1000 (ein)tausend']],
      notes: ['Achtung: **dreißig** mit ß, **sechzig** und **siebzig** sind kurz.'],
      en: 'German says the ones before the tens: 47 is "seven and forty" (siebenundvierzig). Watch dreißig, sechzig, siebzig.',
    }),
    match('t2-match', [['24', 'vierundzwanzig'], ['42', 'zweiundvierzig'], ['36', 'sechsunddreißig'], ['63', 'dreiundsechzig'], ['77', 'siebenundsiebzig'], ['99', 'neunundneunzig']],
      { task: 'Achtung, Zahlendreher! Was passt?', taskEn: 'Careful, 24 and 42 sound similar. Match.' }),
    audio('t2-audio', 'Hören: Wie alt bist du?', [
      ['nele', 'Kenji, wie alt bist du?'],
      ['kenji', 'Ich bin achtundzwanzig. Und du?'],
      ['nele', 'Ich bin zweiundzwanzig. Amara ist einunddreißig.'],
      ['kenji', 'Und Felix?'],
      ['nele', 'Felix ist fünfundzwanzig. Aber er sagt immer: Ich bin neunzehn!'],
    ], { task: 'Hör zu. Wie alt sind die vier?', taskEn: 'Listen. How old are the four roommates?' }),
    match('t2-match2', [['Kenji', '28'], ['Nele', '22'], ['Amara', '31'], ['Felix', '25']], { task: 'Wer ist wie alt?', taskEn: 'Who is how old?' }),
    gap('t2-gap', ['20 + 13 = {{dreiunddreißig}}', '50 + 6 = {{sechsundfünfzig}}', '70 + 1 = {{einundsiebzig}}', '100 − 20 = {{achtzig}}'],
      { task: 'Schreib die Zahl als Wort.', taskEn: 'Type the number as one word.' }),
    tip('t2-tip', 'Wie alt …?', '*Wie alt **bist** du?* Ich **bin** 28 (Jahre alt).\n\n*Wie alt **sind** Sie?* Für das Alter benutzt man **sein**, nicht haben.'),
  ]);

const teil3 = section('teil-3', 'modul', 'Teil 3', 'Was bist du von Beruf?', 'lilac', 15,
  ['Berufe nennen', 'männliche und weibliche Formen', 'ein Formular ausfüllen'], [
    text('t3-text', `**Kenji** ist [[Koch]]. Er arbeitet in einem Restaurant. Er arbeitet von Dienstag bis Samstag.

**Amara** ist [[Pflegerin]]. Sie arbeitet in einem Krankenhaus. Sie arbeitet oft am Wochenende.

**Felix** ist [[Musiker]]. Er spielt Gitarre in einer Band und gibt Gitarrenunterricht.

**Nele** ist Studentin. Sie studiert Informatik an der Uni Leipzig.`, { kicker: 'Lesen', title: 'Die WG und ihre Berufe', task: 'Lies den Text.', taskEn: 'Read about the roommates’ jobs.' }),
    match('t3-match', [['Kenji', 'Koch'], ['Amara', 'Pflegerin'], ['Felix', 'Musiker'], ['Nele', 'Studentin']], { task: 'Wer macht was?', taskEn: 'Who does what?' }),
    mcq('t3-q1', 'Wer arbeitet oft am Wochenende?', ['Kenji', 'Amara', 'Nele'], 1),
    grammar('t3-gram', 'Berufe: männlich und weiblich', {
      intro: 'Viele Berufe haben eine weibliche Form mit **-in**.',
      head: ['Mann', 'Frau'],
      rows: [['der Lehrer', 'die Lehrer**in**'], ['der Student', 'die Student**in**'], ['der Arzt', 'die Ärzt**in**'], ['der Koch', 'die Köch**in**'], ['der Verkäufer', 'die Verkäufer**in**'], ['der Informatiker', 'die Informatiker**in**']],
      notes: ['*Ich bin Lehrerin.* Ohne Artikel!'],
      en: 'Most jobs add -in for a woman. Some also get an umlaut: Arzt → Ärztin, Koch → Köchin. No article: Ich bin Lehrerin.',
    }),
    gap('t3-gap', ['Er ist Lehrer. Sie ist {{Lehrerin}}.', 'Er ist Arzt. Sie ist {{Ärztin}}.', 'Er ist Verkäufer. Sie ist {{Verkäuferin}}.', 'Sie ist Köchin. Er ist {{Koch}}.'],
      { task: 'Ergänze die Form.', taskEn: 'Fill in the matching form.' }),
    text('t3-form', `**Anmeldung: Sprachkurs Deutsch A1**

**Vorname:** Amara
**Nachname:** Owusu
**Land:** Ghana
**Wohnort:** Leipzig
**Beruf:** Pflegerin
**Alter:** 31
**Sprachen:** Englisch, Twi`, { kicker: 'Lesen', title: 'Ein Formular', task: 'Sieh dir das Formular an.', taskEn: 'Look at the form. Vorname = first name, Nachname = last name, Wohnort = place of residence.' }),
    mcq('t3-q2', 'Was ist Amaras Nachname?', ['Amara', 'Owusu', 'Ghana'], 1),
    mcq('t3-q3', 'Was steht bei „Wohnort“?', ['Ghana', 'Leipzig', 'Pflegerin'], 1),
  ]);

const wg = section('wg', 'kommunikation', 'Die Fuchsbau-WG', 'Folge 2: Der Putzplan', 'rose', 10,
  ['eine Geschichte hören', 'Wochentage benutzen'], [
    text('wg-intro', 'Die Küche ist schmutzig. Nele hat eine Idee: einen Putzplan.', { kicker: 'Die Geschichte', en: 'The kitchen is dirty. Nele has an idea: a cleaning schedule.' }),
    audio('wg-audio', 'Folge 2: Der Putzplan', [
      ['nele', 'Leute, die Küche! Wir brauchen einen Putzplan.'],
      ['felix', 'Oje. Okay. Wer putzt am Montag?'],
      ['kenji', 'Ich arbeite von Dienstag bis Samstag. Ich putze am Montag.'],
      ['amara', 'Ich arbeite oft am Wochenende. Ich nehme den Mittwoch.'],
      ['nele', 'Gut. Ich putze am Donnerstag. Felix, und du?'],
      ['felix', 'Hm, ich spiele am Freitag im Park … Sonntag? Am Sonntag schlafe ich lange.'],
      ['nele', 'Felix! Sonntagnachmittag. Okay?'],
      ['felix', 'Na gut. Sonntagnachmittag.'],
    ], { task: 'Hör die Geschichte.', taskEn: 'Listen to the story.' }),
    match('wg-match', [['Kenji', 'putzt am Montag'], ['Amara', 'putzt am Mittwoch'], ['Nele', 'putzt am Donnerstag'], ['Felix', 'putzt am Sonntag']], { task: 'Der Putzplan', taskEn: 'Complete the cleaning plan.' }),
    mcq('wg-q1', 'Warum putzt Kenji am Montag?', ['Er hat am Montag frei.', 'Er mag Montage.', 'Nele sagt das.'], 0),
    mcq('wg-q2', 'Was macht Felix am Sonntag?', ['Er spielt im Park.', 'Er schläft lange.', 'Er arbeitet.'], 1),
  ]);

const grammatik = section('grammatik', 'grammatik', 'Grammatik', 'Alles auf einen Blick', 'peach', 12,
  ['Artikel und Plural', 'haben', 'Verben mit Vokalwechsel'], [
    grammar('g-art', 'Der bestimmte Artikel: der, das, die', {
      intro: 'Jedes Nomen hat einen Artikel. Lern das Wort immer **mit** Artikel.',
      head: ['maskulin', 'neutral', 'feminin', 'Plural'],
      rows: [['**der** Tisch', '**das** Handy', '**die** Lampe', '**die** Tische'], ['**der** Beruf', '**das** Hobby', '**die** Uhr', '**die** Hobbys']],
      notes: ['Im Plural ist der Artikel immer **die**.', 'Nomen schreibt man immer groß.'],
      en: 'German has three genders: der (masculine), das (neuter), die (feminine). All plurals take die. Learn every noun with its article.',
    }),
    grammar('g-pl', 'Pluralformen', {
      head: ['Endung', 'Singular', 'Plural'],
      rows: [['-e', 'der Tisch', 'die Tisch**e**'], ['-(e)n', 'die Lampe', 'die Lampe**n**'], ['-s', 'das Handy', 'die Handy**s**'], ['-er (oft mit Umlaut)', 'das Buch', 'die B**ü**ch**er**'], ['– (keine Endung)', 'der Lehrer', 'die Lehrer']],
      en: 'There are several plural endings. Learn each noun with its plural: der Tisch, die Tische.',
    }),
    grammar('g-verb', 'haben und Verben mit Vokalwechsel', {
      head: ['', 'haben', 'fahren', 'lesen', 'schlafen'],
      rows: [['ich', 'habe', 'fahre', 'lese', 'schlafe'], ['du', '**hast**', 'f**ä**hrst', 'l**ie**st', 'schl**ä**fst'], ['er/sie/es', '**hat**', 'f**ä**hrt', 'l**ie**st', 'schl**ä**ft'], ['wir', 'haben', 'fahren', 'lesen', 'schlafen'], ['ihr', 'habt', 'fahrt', 'lest', 'schlaft'], ['sie/Sie', 'haben', 'fahren', 'lesen', 'schlafen']],
      notes: ['Der Vokal ändert sich nur bei **du** und **er/sie/es**.'],
      en: 'Some verbs change their vowel only for du and er/sie/es: fahren → fährst, lesen → liest, schlafen → schläft. haben is irregular: hast, hat.',
    }),
    sort('g-sort', ['der', 'das', 'die'], [['Tisch', 0], ['Handy', 1], ['Lampe', 2], ['Beruf', 0], ['Hobby', 1], ['Uhr', 2], ['Montag', 0], ['Foto', 1], ['Gitarre', 2]],
      { task: 'der, das oder die?', taskEn: 'Sort the nouns by article.' }),
    gap('g-gap', ['Amara {{hat}} am Mittwoch einen Tanzkurs. (haben)', 'Felix {{schläft}} am Sonntag lange. (schlafen)', '{{Liest}} du gern? (lesen)', 'Kenji {{fährt}} Rad. (fahren)', 'Wir {{haben}} einen Putzplan. (haben)'],
      { task: 'Ergänze das Verb.', taskEn: 'Fill in the right verb form.' }),
  ]);

const uebungen = section('uebungen', 'uebung', 'Übungen', 'Training', 'butter', 15,
  ['Sätze bauen', 'Aussprache: Satzmelodie'], [
    compose('u-comp', 'Erzähl über dich:', [
      ['Sag deinen Beruf.', 'Say your job.', ['Ich', 'bin', 'Lehrerin.']],
      ['Sag, wann du arbeitest.', 'Say when you work.', ['Ich', 'arbeite', 'von Montag', 'bis Freitag.']],
      ['Sag dein Hobby.', 'Say your hobby.', ['Ich', 'lese', 'gern.']],
      ['Frag nach dem Hobby.', 'Ask about their hobby.', ['Was', 'machst', 'du', 'gern?']],
    ], { task: 'Bau die Sätze.', taskEn: 'Build the sentences step by step.' }),
    order('u-order', ['Hast', 'du', 'am Samstag', 'Zeit?'], { task: 'Bau die Frage.', taskEn: 'Build the question.' }),
    audio('u-aus', 'Aussprache: Die Satzmelodie', [
      ['frauKlein', 'Hör gut zu. Die W-Frage geht am Ende runter: Was machst du gern?'],
      ['frauKlein', 'Die Ja/Nein-Frage geht am Ende hoch: Spielst du gern Fußball?'],
      ['frauKlein', 'Noch einmal: Wo wohnst du? Wohnst du in Leipzig?'],
    ], { task: 'Hör zu und sprich nach.', taskEn: 'Listen and repeat. W-questions fall at the end, yes/no questions rise.' }),
    mcq('u-q1', 'Bei welcher Frage geht die Melodie am Ende hoch?', ['Wo wohnst du?', 'Wohnst du in Leipzig?', 'Was machst du?'], 1),
    gap('u-gap', ['der Tisch, die {{Tische}}', 'die Lampe, die {{Lampen}}', 'das Handy, die {{Handys}}', 'das Buch, die {{Bücher}}'],
      { task: 'Schreib den Plural.', taskEn: 'Write the plural.' }),
    mcq('u-q2', '„Kenji ___ gern Bücher.“', ['lest', 'liest', 'lesen'], 1),
  ]);

const wortschatz = section('wortschatz', 'wortschatz', 'Wortschatz und Check', 'Das kann ich jetzt', 'mint', 8,
  ['Wörter wiederholen', 'den Stand einschätzen'], [
    cards('w-cards', [
      ['das Hobby, die Hobbys', 'was man gern in der Freizeit macht', 'hobby'], ['die Freizeit', 'Zeit ohne Arbeit', 'free time'], ['der Beruf', 'die Arbeit', 'job'],
      ['der Montag', 'erster Tag der Woche', 'Monday'], ['das Wochenende', 'Samstag und Sonntag', 'weekend'], ['Zeit haben', 'frei sein', 'to have time'],
      ['der Lehrer, die Lehrerin', 'arbeitet in der Schule', 'teacher'], ['der Arzt, die Ärztin', 'hilft kranken Menschen', 'doctor'], ['das Formular', 'Papier mit Feldern', 'form'],
      ['der Vorname', 'zum Beispiel Kenji', 'first name'], ['der Nachname', 'zum Beispiel Tanaka', 'last name'], ['gern', 'mit Freude', 'gladly'],
    ]),
    phrases('w-phr', 'Wichtige Sätze', {
      'Hobbys': ['Was machst du gern?', 'Ich spiele gern Gitarre.', 'Ich lese nicht so gern.'],
      'Zeit': ['Hast du am Freitag Zeit?', 'Am Freitag kann ich nicht.', 'Am Samstag habe ich Zeit.'],
      'Beruf und Alter': ['Was bist du von Beruf?', 'Ich bin Koch.', 'Wie alt bist du? Ich bin 28.'],
    }),
    checklist('w-check', ['Ich kann über meine Hobbys sprechen.', 'Ich kenne die Wochentage.', 'Ich kann Zahlen bis 100 sagen.', 'Ich kann meinen Beruf nennen.', 'Ich kann Ja/Nein-Fragen stellen.', 'Ich lerne Nomen mit Artikel und Plural.']),
  ]);

export const a1k2: Chapter = {
  id: 'a1-k2', number: 2, title: 'Freunde, Kollegen und ich', theme: 'Hobbys, Wochentage, Zahlen ab 20, Berufe',
  grammar: 'Ja/Nein-Fragen. Verben mit Vokalwechsel. der, das, die. Plural. haben.',
  sections: [einstieg, teil1, teil2, teil3, wg, grammatik, uebungen, wortschatz],
  games: ['a1k2-sprint', 'a1k2-memory', 'a1k2-satzbau', 'a1k2-artikel'],
  exam: [
    x(1, mcq('x1', '„___ du gern Fußball?“', ['Spielst', 'Spielt', 'Spiele'], 0)),
    x(1, mcq('x2', 'Welcher Tag kommt nach Dienstag?', ['Donnerstag', 'Mittwoch', 'Montag'], 1)),
    x(1, mcq('x3', '45 =', ['vierzigfünf', 'fünfundvierzig', 'vierundfünfzig'], 1)),
    x(4, gap('x4', ['Er {{fährt}} gern Rad. (fahren)', 'Du {{liest}} viel. (lesen)', 'Sie {{hat}} am Montag Zeit. (haben)', 'Er {{schläft}} lange. (schlafen)'], { task: 'Ergänze das Verb.' })),
    x(3, gap('x5', ['das Handy, die {{Handys}}', 'die Lampe, die {{Lampen}}', 'der Tisch, die {{Tische}}'], { task: 'Schreib den Plural.' })),
    x(1, mcq('x6', 'Er ist Arzt. Sie ist …', ['Arztin', 'Ärztin', 'Ärzte'], 1)),
    x(1, mcq('x7', 'Was ist Jonas von Beruf?', ['Lehrer', 'Verkäufer', 'Student'], 1),
      text('x-st1', 'Ich heiße Jonas Weber. Ich bin 34 Jahre alt. Ich bin Verkäufer in einem Supermarkt. Ich arbeite von Montag bis Freitag. Am Wochenende spiele ich Volleyball. Ich lese auch gern.', { kicker: 'Lesen' })),
    x(1, mcq('x8', 'Was macht Jonas am Wochenende? (Text oben)', ['Er arbeitet.', 'Er spielt Volleyball.', 'Er schläft.'], 1)),
    x(1, mcq('x9', 'Wann hat Paul Zeit?', ['am Dienstag', 'am Donnerstag', 'am Samstag'], 1),
      audio('x-st2', 'Hören: Eine Nachricht', [
        ['jonas', 'Hallo Elif, hier ist Paul. Spielen wir zusammen Tennis? Am Dienstag habe ich keine Zeit. Aber am Donnerstag habe ich frei. Ruf mich an! Meine Nummer ist null, eins, sechs, zwo, achtundvierzig, dreiundsiebzig.'],
      ])),
    x(1, mcq('x10', 'Welche Nummer hat Paul? (Hörtext oben)', ['0162 4873', '0162 8437', '0162 4837'], 0)),
    x(2, order('x11', ['Hast', 'du', 'am Freitag', 'Zeit?'], { task: 'Bau die Frage.' })),
    x(1, mcq('x12', 'Welches Wort hat den Artikel **das**?', ['Tisch', 'Lampe', 'Hobby'], 2)),
  ],
};

export const gamesA1k2: GameDef[] = [
  {
    id: 'a1k2-sprint', engine: 'sprint', title: 'Zahlen-Sprint', blurb: 'Hör die Zahl im Kopf: Welche Ziffer passt?', skill: 'Zahlen ab 20', tone: 'mint', chapter: 2, emoji: '⚡',
    rules: 'Du siehst eine Zahl als Wort. Tippe auf die richtige Ziffer. Achtung, Zahlendreher!', label: 'Welche Zahl?',
    items: [
      { q: 'vierundzwanzig', a: '24', wrong: ['42', '44'] }, { q: 'zweiundvierzig', a: '42', wrong: ['24', '22'] },
      { q: 'dreißig', a: '30', wrong: ['13', '33'] }, { q: 'sechsunddreißig', a: '36', wrong: ['63', '66'] },
      { q: 'siebzig', a: '70', wrong: ['17', '60'] }, { q: 'fünfundachtzig', a: '85', wrong: ['58', '95'] },
      { q: 'neunzehn', a: '19', wrong: ['90', '91'] }, { q: 'einundfünfzig', a: '51', wrong: ['15', '41'] },
      { q: 'hundert', a: '100', wrong: ['1000', '10'] }, { q: 'achtundneunzig', a: '98', wrong: ['89', '88'] },
      { q: 'sechzig', a: '60', wrong: ['16', '70'] }, { q: 'dreiundsiebzig', a: '73', wrong: ['37', '63'] },
      { q: 'zweihundert', a: '200', wrong: ['2000', '20'] }, { q: 'siebenundvierzig', a: '47', wrong: ['74', '57'] },
    ],
  },
  {
    id: 'a1k2-memory', engine: 'memory', title: 'Hobby-Memory', blurb: 'Hobby und Bild: Finde die Paare.', skill: 'Hobbys', tone: 'lilac', chapter: 2, emoji: '🃏',
    rules: 'Dreh zwei Karten um. Ein Paar ist ein Hobby und das passende Bild.', kinds: ['Wort', 'Bild'],
    pairs: [['schwimmen', '🏊'], ['lesen', '📚'], ['kochen', '🍳'], ['tanzen', '💃'], ['Rad fahren', '🚲'], ['Gitarre spielen', '🎸'], ['Fußball spielen', '⚽'], ['fotografieren', '📸'], ['malen', '🎨'], ['wandern', '🥾']],
  },
  {
    id: 'a1k2-satzbau', engine: 'satzbau', title: 'Frage-Baukasten', blurb: 'Ja/Nein-Fragen und Aussagen bauen.', skill: 'Satzbau', tone: 'sky', chapter: 2, emoji: '🧱',
    rules: 'Tippe die Wörter in der richtigen Reihenfolge an. Ja/Nein-Fragen beginnen mit dem Verb.',
    sentences: [
      { parts: ['Spielst', 'du', 'gern', 'Fußball?'], hint: 'Ja/Nein-Frage: Verb zuerst' },
      { parts: ['Ich', 'lese', 'gern', 'Bücher.'], hint: 'gern nach dem Verb' },
      { parts: ['Hast', 'du', 'am Freitag', 'Zeit?'], hint: 'Ja/Nein-Frage' },
      { parts: ['Am Montag', 'putzt', 'Kenji', 'die Küche.'], hint: 'Verb auf Position 2' },
      { parts: ['Was', 'bist', 'du', 'von Beruf?'], hint: 'W-Frage' },
      { parts: ['Amara', 'arbeitet', 'oft', 'am Wochenende.'], hint: 'Verb auf Position 2' },
      { parts: ['Wie', 'alt', 'sind', 'Sie?'], hint: 'Wie alt …?' },
      { parts: ['Fährst', 'du', 'gern', 'Rad?'], hint: 'fahren: du fährst' },
    ],
  },
  {
    id: 'a1k2-artikel', engine: 'regen', title: 'Artikel-Regen', blurb: 'der, das oder die? Fang die Wörter!', skill: 'Artikel', tone: 'rose', chapter: 2, emoji: '☔',
    rules: 'Ein Nomen fällt herunter. Tippe auf den richtigen Artikel, bevor es unten ankommt.', buckets: ['der', 'die', 'das'],
    words: artikel('der Tisch, das Handy, die Lampe, der Beruf, das Hobby, die Uhr, der Montag, das Foto, die Gitarre, der Kollege, das Buch, die Freizeit, der Computer, das Formular, die Woche, der Name, das Wochenende, die Musik'),
  },
];
