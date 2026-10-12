import type { Chapter, GameDef, GlossaryEntry } from '../types';
import { artikel, audio, cards, checklist, compose, gap, grammar, match, mcq, order, overview, phrases, section, sort, text, tip, x } from '../helpers';

// A2 Kapitel 12: Festival, Musik, eine Band vorstellen, Zeitungsmeldungen, Malerei, ein Bild beschreiben.
// Grammar: Indefinitpronomen, Relativsätze im Nominativ und Akkusativ. Aussprache: Rückfragen.

export const glossaryA2k12: Record<string, GlossaryEntry> = {
  Festival: { de: 'Ein großes Fest mit Musik, oft mehrere Tage lang und draußen.', en: 'festival' },
  Bühne: { de: 'Der erhöhte Platz, auf dem Musiker spielen oder Schauspieler spielen.', en: 'stage' },
  Auftritt: { de: 'Wenn ein Musiker oder eine Band vor Publikum spielt.', en: 'performance, gig' },
  Publikum: { de: 'Alle Menschen, die bei einem Konzert oder im Theater zuschauen.', en: 'audience' },
  Gemälde: { de: 'Ein Bild, das jemand mit Farben gemalt hat.', en: 'painting' },
  Vordergrund: { de: 'Der vordere Teil von einem Bild.', en: 'foreground' },
  Hintergrund: { de: 'Der hintere Teil von einem Bild.', en: 'background' },
  Relativsatz: { de: 'Ein Nebensatz, der ein Nomen genauer beschreibt: der Mann, der dort steht.', en: 'relative clause' },
  Meldung: { de: 'Eine kurze Nachricht in der Zeitung oder im Radio.', en: 'news item' },
  Rückfrage: { de: 'Eine Frage, wenn man etwas nicht genau verstanden hat.', en: 'follow-up question' },
};

const einstieg = section('einstieg', 'einstieg', 'Einstieg', 'Musik liegt in der Luft', 'butter', 8,
  ['das Kapitel kennenlernen', 'über Musik sprechen'], [
    overview('e-over', 'Kapitel 12: Gute Unterhaltung!',
      'Das letzte Kapitel von A2! Es geht um Musik, Kunst und Unterhaltung. Du planst einen Besuch auf einem [[Festival]], stellst eine Band vor und verstehst kurze [[Meldung|Zeitungsmeldungen]]. Du beschreibst ein [[Gemälde]] mit [[Vordergrund]] und [[Hintergrund]]. Mit **[[Relativsatz|Relativsätzen]]** beschreibst du Personen und Dinge genauer.\n\nIn der WG passiert alles auf einmal: Kenji ist zurück, Felix bekommt eine zweite Chance, und am Ende gibt es eine große Feier.',
      'The last chapter of A2: music, art and entertainment. Plan a festival visit, introduce a band, understand short news items and describe a painting. Grammar: indefinite pronouns (jemand, niemand, etwas, nichts, alle) and relative clauses in the nominative and accusative (der Mann, der …, der Film, den …).',
      ['einen Festivalbesuch planen', 'über Musik sprechen', 'Personen genauer beschreiben', 'ein Bild beschreiben']),
    match('e-match', [['die Gitarre', '🎸'], ['das Schlagzeug', '🥁'], ['das Klavier', '🎹'], ['die Geige', '🎻'], ['die Trompete', '🎺'], ['das Saxofon', '🎷'], ['das Mikrofon', '🎤'], ['das Akkordeon', '🪗']], { task: 'Welches Instrument ist das?', taskEn: 'Match the instrument to the picture.' }),
    sort('e-sort', ['Musik', 'Kunst'], [['das Konzert', 0], ['das Museum', 1], ['die Band', 0], ['das Gemälde', 1], ['die Bühne', 0], ['die Ausstellung', 1]], { task: 'Musik oder Kunst?', taskEn: 'Music or art?' }),
  ]);

const teil1 = section('teil-1', 'modul', 'Teil 1', 'Auf zum Festival!', 'mint', 15,
  ['einen Festivalbesuch planen', 'nachfragen', 'Indefinitpronomen'], [
    text('t1-text', `**Fuchsrock Festival · 18. bis 20. Juli · Leipzig, Am Kulkwitzer See**

Drei Tage, drei Bühnen, über 40 Bands! Rock, Pop, Indie und elektronische Musik.

**Tickets:** 3-Tage-Ticket 129 €, Tagesticket 59 €, Camping +20 €
**Anreise:** Mit der S-Bahn bis Miltitzer Allee, dann 10 Minuten zu Fuß. Parkplätze gibt es nur wenige.
**Wichtig:** Glasflaschen sind verboten. Wasser gibt es kostenlos an den Trinkstationen.
**Neu dabei:** Am Sonntag um 16 Uhr spielt eine Leipziger Band auf der Seebühne: **Die Füchse**!`,
      { kicker: 'Lesen', title: 'Das Festival', task: 'Lies die Informationen.', taskEn: 'Read the festival information.' }),
    mcq('t1-q1', 'Was kostet ein Ticket für drei Tage mit Camping?', ['129 €', '149 €', '59 €'], 1),
    mcq('t1-q2', 'Was darf man nicht mitbringen?', ['Wasser', 'Glasflaschen', 'Zelte'], 1),
    mcq('t1-q3', 'Wer spielt am Sonntag um 16 Uhr?', ['eine Band aus Berlin', 'Die Füchse', 'ein DJ'], 1),
    audio('t1-audio', 'Hören: Wer kommt mit?', [
      ['felix', 'Leute, ihr habt es gelesen, oder? Das Festival hat uns wieder eingeladen! Diesmal spielen wir wirklich!'],
      ['nele', 'Felix, das ist großartig! Natürlich kommen wir. Alle!'],
      ['amara', 'Ich habe am Sonntag leider Dienst. Aber ich tausche mit jemandem. Für dich mache ich das.'],
      ['felix', 'Und Kenji? Er kommt doch am Samstag aus Wien zurück, oder?'],
      ['nele', 'Wie bitte? Samstag? Ich dachte, er kommt erst nächste Woche.'],
      ['felix', 'Nein, er hat gestern geschrieben. Er möchte nichts verpassen.'],
      ['amara', 'Hat jemand schon Tickets gekauft?'],
      ['felix', 'Niemand muss Tickets kaufen. Jede Band bekommt vier Gästekarten. Für euch!'],
    ], { task: 'Hör zu. Wer kommt zum Festival?', taskEn: 'Listen. Who is going to the festival?' }),
    mcq('t1-q4', 'Was macht Amara, weil sie am Sonntag Dienst hat?', ['Sie bleibt zu Hause.', 'Sie tauscht mit jemandem.', 'Sie kommt später.'], 1),
    mcq('t1-q5', 'Warum muss niemand Tickets kaufen?', ['Das Festival ist kostenlos.', 'Jede Band bekommt Gästekarten.', 'Nele hat schon Tickets.'], 1),
    grammar('t1-gram', 'Indefinitpronomen', {
      intro: 'Mit Indefinitpronomen spricht man über Personen oder Dinge, die man **nicht genau** nennt.',
      head: ['', 'positiv', 'negativ'],
      rows: [['Person', '**jemand**: Hat **jemand** Tickets gekauft?', '**niemand**: **Niemand** muss Tickets kaufen.'], ['Sache', '**etwas**: Ich möchte dir **etwas** sagen.', '**nichts**: Er möchte **nichts** verpassen.'], ['alle', '**alle**: **Alle** kommen mit.', '**keiner**: **Keiner** hat Zeit.'], ['ein Teil', '**viele, einige**: **Viele** Bands spielen.', '**wenige**: Nur **wenige** Parkplätze.']],
      notes: ['**jemand / niemand** im Akkusativ und Dativ oft ohne Endung: *Ich tausche mit jemand(em).*', '**etwas** und **nichts** haben keine Endung.', '**man** = alle Menschen allgemein: *Auf dem Festival **kann man** campen.*'],
      en: 'Indefinite pronouns: jemand (someone), niemand (no one), etwas (something), nichts (nothing), alle (everyone), keiner (nobody), viele (many), wenige (few).',
    }),
    gap('t1-gap', ['Ist {{jemand}} zu Hause? Nein, {{niemand}}.', 'Möchtest du {{etwas}} trinken? Nein danke, {{nichts}}.', '{{Alle}} lieben Felix’ Band!'], { bank: ['jemand', 'niemand', 'etwas', 'nichts', 'Alle'], task: 'Ergänze.', taskEn: 'Fill in the indefinite pronouns.' }),
  ]);

const teil2 = section('teil-2', 'modul', 'Teil 2', 'Die Band, die …', 'sky', 15,
  ['eine Band vorstellen', 'Zeitungsmeldungen verstehen', 'Relativsätze'], [
    grammar('t2-gram', 'Relativsätze im Nominativ und Akkusativ', {
      intro: 'Ein **Relativsatz** beschreibt ein Nomen genauer. Er beginnt mit einem **Relativpronomen**. Das Verb steht **am Ende**.',
      head: ['', 'maskulin', 'neutral', 'feminin', 'Plural'],
      rows: [['Nominativ', 'der Musiker, **der** Gitarre spielt', 'das Lied, **das** im Radio läuft', 'die Sängerin, **die** aus Wien kommt', 'die Fans, **die** laut singen'], ['Akkusativ', 'der Musiker, **den** ich kenne', 'das Lied, **das** ich liebe', 'die Sängerin, **die** ich toll finde', 'die Fans, **die** wir treffen']],
      notes: ['Das Relativpronomen hat das **Genus** vom Nomen (der → der/den) und den **Fall** vom Relativsatz.', 'Nominativ: Das Pronomen ist das **Subjekt** im Relativsatz. *der Musiker, **der** Gitarre spielt* (Er spielt Gitarre.)', 'Akkusativ: Das Pronomen ist das **Objekt**. *der Musiker, **den** ich kenne* (Ich kenne ihn.)', 'Nur maskulin ist anders: **der / den**. Sonst ist Nominativ = Akkusativ.'],
      en: 'Relative clauses describe a noun: der Musiker, der Gitarre spielt (the musician who plays guitar). The pronoun takes the gender of the noun and the case it has in its own clause. Only masculine changes: der (subject) / den (object). The verb goes to the end.',
    }),
    gap('t2-gap', ['Felix ist der Musiker, {{der}} Gitarre spielt.', 'Das ist das Lied, {{das}} ich so liebe.', 'Lina ist die Frau, {{die}} Felix liebt.', 'Das ist der Koch, {{den}} alle kennen.', 'Die Füchse sind eine Band, {{die}} Rock spielt.'], { task: 'Ergänze das Relativpronomen.', taskEn: 'Fill in the relative pronoun.' }),
    sort('t2-sort', ['der (Nominativ)', 'den (Akkusativ)'], [['der Mann, ___ dort steht', 0], ['der Mann, ___ ich kenne', 1], ['der Film, ___ gestern lief', 0], ['der Film, ___ wir gesehen haben', 1], ['der Sänger, ___ aus Graz kommt', 0], ['der Sänger, ___ alle lieben', 1]], { task: 'der oder den?', taskEn: 'Sort: der (subject) or den (object)?' }),
    text('t2-text', `**Leipziger Volkszeitung · Kultur · kurz notiert**

**Zweite Chance für „Die Füchse“**
Die Leipziger Band „Die Füchse“, die im Frühling vom Fuchsrock Festival eine Absage bekommen hat, spielt nun doch. Eine andere Band hat abgesagt. Sänger und Gitarrist Felix Huber, der aus Wien kommt und seit fünf Jahren in Leipzig lebt, sagt: „Wir haben ein halbes Jahr geübt. Jetzt zeigen wir, was wir können.“

**Neues Restaurant in der Fuchsstraße**
Im Erdgeschoss der Fuchsstraße 12 eröffnet am 25. Juli das Restaurant „Fuchs & Yuzu“. Koch Kenji Tanaka, den viele Leipziger von seinem Pop-up-Restaurant kennen, verbindet japanische und sächsische Küche. Zuletzt hat er drei Monate in Wien gearbeitet.`,
      { kicker: 'Lesen', title: 'Zeitungsmeldungen', task: 'Lies die Meldungen.', taskEn: 'Read the two short news items. Notice the relative clauses.' }),
    mcq('t2-q1', 'Warum dürfen „Die Füchse“ jetzt doch spielen?', ['Eine andere Band hat abgesagt.', 'Felix hat Geld bezahlt.', 'Das Festival ist größer geworden.'], 0),
    mcq('t2-q2', 'Wann eröffnet „Fuchs & Yuzu“?', ['am 18. Juli', 'am 25. Juli', 'am 12. Juli'], 1),
    mcq('t2-q3', 'Woher kennen viele Leipziger Kenji?', ['aus dem Fernsehen', 'von seinem Pop-up-Restaurant', 'aus Wien'], 1),
  ]);

const teil3 = section('teil-3', 'modul', 'Teil 3', 'Ein Bild beschreiben', 'lilac', 15,
  ['über Malerei sprechen', 'ein Bild beschreiben', 'eine Bildbeschreibung verstehen'], [
    text('t3-text', `**Linas Bild für das Restaurant**

Lina, Felix’ Freundin, hat für Kenjis Restaurant ein großes Bild gemalt. So beschreibt sie es:

„Im **Vordergrund** sieht man einen roten Fuchs, der an einem Tisch sitzt. Vor ihm steht eine Schüssel mit Nudeln. Er trägt eine weiße Kochmütze. **Links** sitzen drei Freunde, die lachen und essen. **Rechts** steht ein Musiker, der Gitarre spielt.

In der **Mitte** des Bildes sieht man ein Fenster. Durch das Fenster sieht man Leipzig in der Nacht. Im **Hintergrund** gibt es einen Berg mit Schnee. Das ist der Fuji, den Kenji so vermisst. Oben am Himmel hängt ein großer gelber Mond.

Die Farben sind warm: viel Rot, Orange und Gelb. Ich wollte zeigen, dass ein Restaurant wie ein Zuhause sein kann.“`,
      { kicker: 'Lesen', title: 'Eine Bildbeschreibung', task: 'Lies die Beschreibung. Stell dir das Bild vor.', taskEn: 'Read the description and imagine the painting.' }),
    match('t3-match', [['im Vordergrund', 'ein Fuchs mit Kochmütze'], ['links', 'drei Freunde'], ['rechts', 'ein Musiker mit Gitarre'], ['im Hintergrund', 'ein Berg mit Schnee'], ['oben', 'ein gelber Mond']], { task: 'Was ist wo?', taskEn: 'What is where in the painting?' }),
    mcq('t3-q1', 'Wer sind die Personen auf dem Bild wahrscheinlich?', ['die WG', 'Linas Familie', 'Touristen'], 0),
    mcq('t3-q2', 'Was möchte Lina mit dem Bild zeigen?', ['Ein Restaurant kann wie ein Zuhause sein.', 'Japan ist schöner als Leipzig.', 'Füchse können kochen.'], 0),
    phrases('t3-phr', 'Ein Bild beschreiben', {
      'Ort': ['Im Vordergrund / Im Hintergrund sieht man …', 'In der Mitte / Links / Rechts / Oben / Unten ist …', 'Neben / Hinter / Vor … steht …'],
      'Farben und Wirkung': ['Die Farben sind hell / dunkel / warm / kalt.', 'Das Bild wirkt fröhlich / ruhig / traurig.', 'Mir gefällt besonders …'],
    }),
    compose('t3-comp', 'Beschreib ein Bild aus deinem Zuhause oder dein Lieblingsbild.', [
      ['Was ist im Vordergrund?', 'What is in the foreground?', ['Im Vordergrund', 'sieht man', 'eine Frau,', 'die liest.']],
      ['Was ist im Hintergrund?', 'What is in the background?', ['Im Hintergrund', 'ist', 'ein See', 'mit Bergen.']],
      ['Wie sind die Farben?', 'What are the colors like?', ['Die Farben', 'sind', 'hell', 'und freundlich.']],
      ['Wie gefällt dir das Bild?', 'How do you like it?', ['Mir', 'gefällt', 'das Bild', 'sehr gut.']],
    ], { task: 'Bau die Beschreibung.', taskEn: 'Build the description.' }),
    tip('t3-tip', 'Malerei in D-A-CH', 'Berühmte Maler aus Deutschland, Österreich und der Schweiz: **Albrecht Dürer** (um 1500), **Caspar David Friedrich** (Landschaften, um 1800), **Gustav Klimt** (Wien, um 1900, viel Gold), **Paul Klee** (Schweiz, bunte Formen). In Leipzig gibt es heute die „Neue Leipziger Schule“, eine bekannte Gruppe junger Maler.'),
  ]);

const wg = section('wg', 'kommunikation', 'Die Fuchsbau-WG', 'Folge 12: Das große Finale', 'rose', 12,
  ['eine Geschichte hören', 'das Ende der Staffel'], [
    text('wg-intro', 'Sonntag, 16 Uhr, Fuchsrock Festival, Seebühne. Tausend Menschen warten. Hinter der Bühne ist Felix sehr nervös.', { kicker: 'Die Geschichte', en: 'Sunday, 4 p.m., the festival’s lake stage. A thousand people are waiting. Backstage, Felix is very nervous.' }),
    audio('wg-audio', 'Folge 12: Das große Finale', [
      ['felix', 'So viele Menschen! Ich kann das nicht. Ich habe alles vergessen.'],
      ['kenji', 'Felix, erinnerst du dich an mein Probearbeiten in Wien? Ich war auch so nervös. Und du hast gesagt: Du schaffst das.'],
      ['amara', 'Und beim Halbmarathon hast du mir gesagt: Du hast ein halbes Jahr trainiert. Ihr habt ein halbes Jahr geübt!'],
      ['nele', 'Wir stehen ganz vorne. Schau einfach zu uns.'],
      ['erzaehler', 'Felix geht auf die Bühne. Das Publikum jubelt.'],
      ['felix', 'Servus Leipzig! Wir sind Die Füchse. Das erste Lied ist für drei Menschen, die immer an mich geglaubt haben. Und für jemanden, der bald das beste Restaurant der Stadt eröffnet!'],
      ['erzaehler', 'Eine Stunde später. Das Konzert ist vorbei. Alle singen noch.'],
      ['jule', 'Felix, das war fantastisch! Alle haben mitgesungen!'],
      ['kenji', 'Und am Freitag eröffnet Fuchs & Yuzu. Ihr seid alle eingeladen. Herr Lehmann auch.'],
      ['nele', 'Wisst ihr was? Vor zwei Jahren war Kenji der Neue, der kaum Deutsch gesprochen hat.'],
      ['kenji', 'Und jetzt habe ich ein Restaurant in Leipzig und die beste WG der Welt.'],
      ['amara', 'Auf den Fuchsbau!'],
    ], { task: 'Hör die Geschichte.', taskEn: 'Listen to the season finale. jubeln = to cheer.' }),
    mcq('wg-q1', 'Wie fühlt sich Felix vor dem Konzert?', ['sehr nervös', 'ganz ruhig', 'müde'], 0),
    mcq('wg-q2', 'Für wen ist das erste Lied?', ['für das Publikum', 'für seine Freunde aus der WG', 'für seine Eltern'], 1),
    mcq('wg-q3', 'Was passiert am Freitag?', ['Felix spielt noch ein Konzert.', 'Kenji eröffnet sein Restaurant.', 'Amara hat Geburtstag.'], 1),
    mcq('wg-q4', 'Wie war Kenji vor zwei Jahren?', ['Er hat kaum Deutsch gesprochen.', 'Er hatte schon ein Restaurant.', 'Er hat in Wien gewohnt.'], 0),
  ]);

const grammatik = section('grammatik', 'grammatik', 'Grammatik', 'Alles auf einen Blick', 'peach', 10,
  ['Relativsätze', 'Indefinitpronomen'], [
    grammar('g-1', 'Relativsätze: so funktionieren sie', {
      head: ['Hauptsatz', 'Relativpronomen', 'Mitte', 'Verb am Ende'],
      rows: [['Das ist der Musiker,', '**der**', 'aus Wien', '**kommt**.'], ['Das ist der Koch,', '**den**', 'alle', '**kennen**.'], ['Das ist das Bild,', '**das**', 'Lina gemalt', '**hat**.'], ['Das sind die Freunde,', '**die**', 'immer an ihn geglaubt', '**haben**.']],
      en: 'Relative clauses: comma, relative pronoun, the rest, verb at the end.',
    }),
    mcq('g-q1', 'Das ist der Film, ___ ich gestern gesehen habe.', ['der', 'den', 'die'], 1),
    mcq('g-q2', 'Das ist die Sängerin, ___ so schön singt.', ['der', 'die', 'den'], 1),
    mcq('g-q3', 'Ist ___ hier? Nein, niemand.', ['etwas', 'jemand', 'nichts'], 1),
    mcq('g-q4', 'Ich habe Hunger, aber im Kühlschrank ist ___.', ['niemand', 'nichts', 'keiner'], 1),
  ]);

const uebungen = section('uebungen', 'uebung', 'Übungen', 'Training', 'butter', 15,
  ['eine Band vorstellen', 'Aussprache: Rückfragen'], [
    compose('u-comp', 'Stell deine Lieblingsband oder deinen Lieblingsmusiker vor.', [
      ['Wer ist es?', 'Who is it?', ['Meine Lieblingsband', 'ist', 'eine Band,', 'die Jazz spielt.']],
      ['Woher kommt sie?', 'Where is it from?', ['Die Musiker,', 'die in der Band spielen,', 'kommen', 'aus Brasilien.']],
      ['Was magst du?', 'What do you like?', ['Das Lied,', 'das ich am liebsten höre,', 'heißt', '„Sol“.']],
    ], { task: 'Bau die Vorstellung.', taskEn: 'Build the introduction with relative clauses.' }),
    audio('u-aus', 'Aussprache: Rückfragen', [
      ['frauKlein', 'Wenn du etwas nicht verstanden hast, fragst du nach. Die Stimme geht am Ende hoch.'],
      ['frauKlein', 'Wie bitte? Am Samstag? Er kommt am SAMSTAG?'],
      ['frauKlein', 'Das Ticket kostet WIE viel? Hundertneunundzwanzig Euro?'],
      ['frauKlein', 'Mit Rückfragen zeigst du auch Überraschung.'],
    ], { task: 'Hör zu und sprich nach.', taskEn: 'Listen and repeat. Follow-up questions rise at the end and often show surprise.' }),
    match('u-match', [['Wie bitte?', 'Ich habe nicht verstanden.'], ['Am Samstag?', 'Ich bin überrascht über den Tag.'], ['Was hast du gesagt?', 'Bitte sag es noch einmal.'], ['Wirklich?', 'Ich kann es kaum glauben.']], { task: 'Was bedeutet die Rückfrage?', taskEn: 'What does the follow-up question mean?' }),
    order('u-order', ['Das ist', 'die Band,', 'die', 'ich', 'so liebe.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence.' }),
  ]);

const wortschatz = section('wortschatz', 'wortschatz', 'Wortschatz und Check', 'Das kann ich jetzt', 'mint', 8,
  ['Wörter wiederholen', 'den Stand einschätzen', 'bereit für die Prüfung'], [
    cards('w-cards', [
      ['das Festival', 'großes Musikfest', 'festival'], ['die Bühne', 'hier spielt die Band', 'stage'], ['der Auftritt', 'Konzert einer Band', 'performance'],
      ['das Publikum', 'alle Zuschauer', 'audience'], ['jubeln', 'laut vor Freude rufen', 'to cheer'], ['jemand / niemand', 'eine Person / keine Person', 'someone / no one'],
      ['etwas / nichts', 'eine Sache / keine Sache', 'something / nothing'], ['das Gemälde', 'gemaltes Bild', 'painting'], ['der Vordergrund', 'vorne im Bild', 'foreground'],
      ['der Hintergrund', 'hinten im Bild', 'background'], ['die Meldung', 'kurze Nachricht', 'news item'], ['Wie bitte?', 'Rückfrage', 'Pardon?'],
    ]),
    checklist('w-check', ['Ich kann einen Festivalbesuch planen.', 'Ich kann Indefinitpronomen benutzen.', 'Ich kann Personen und Dinge mit Relativsätzen beschreiben.', 'Ich kann ein Bild beschreiben.', 'Ich kann nachfragen, wenn ich etwas nicht verstehe.']),
    text('w-end', 'Herzlichen Glückwunsch! Du hast alle zwölf Kapitel von A2 geschafft. Nach der Kapitelprüfung kommt die **Abschlussprüfung A2**. Sie ist wie die Prüfung *Goethe-Zertifikat A2*: Hören, Lesen, Schreiben und Sprechen. Viel Erfolg!', { kicker: 'Geschafft!', en: 'Congratulations, you finished all twelve A2 chapters. After this chapter exam comes the A2 final exam, modeled on the Goethe-Zertifikat A2. Good luck!' }),
  ]);

export const a2k12: Chapter = {
  id: 'a2-k12', number: 12, title: 'Gute Unterhaltung!', theme: 'Festival, Musik, Zeitungsmeldungen, Malerei',
  grammar: 'Indefinitpronomen. Relativsätze im Nominativ und Akkusativ.',
  sections: [einstieg, teil1, teil2, teil3, wg, grammatik, uebungen, wortschatz],
  games: ['a2k12-sprint', 'a2k12-memory', 'a2k12-satzbau', 'a2k12-artikel'],
  exam: [
    x(1, mcq('x1', 'Das ist der Mann, ___ neben mir wohnt.', ['der', 'den', 'das'], 0)),
    x(1, mcq('x2', 'Das ist der Kuchen, ___ ich gebacken habe.', ['der', 'den', 'die'], 1)),
    x(1, mcq('x3', 'Hat ___ meinen Schlüssel gesehen?', ['jemand', 'etwas', 'nichts'], 0)),
    x(4, gap('x4', ['Das ist die Lehrerin, {{die}} Deutsch unterrichtet.', 'Das ist das Auto, {{das}} ich kaufen möchte.', 'Das ist der Freund, {{den}} ich in Wien besucht habe.', 'Das sind die Kinder, {{die}} im Park spielen.'], { task: 'Relativpronomen.' })),
    x(2, gap('x5', ['Ich habe Durst. Hast du {{etwas}} zu trinken?', 'Ich rufe an, aber {{niemand}} ist zu Hause.'], { task: 'Indefinitpronomen.' })),
    x(1, mcq('x6', 'Wann beginnt das Konzert?', ['um 19 Uhr', 'um 20 Uhr', 'um 21 Uhr'], 1),
      audio('x-st1', 'Hören: Am Telefon', [
        ['jule', 'Hey Tom, hast du heute Abend Zeit? Im Werk 2 spielt eine Band aus Dresden.'],
        ['jonas', 'Klingt gut. Wann geht es los?'],
        ['jule', 'Einlass ist um sieben, das Konzert beginnt um acht.'],
        ['jonas', 'Und was kosten die Karten?'],
        ['jule', 'Fünfzehn Euro an der Abendkasse.'],
      ])),
    x(1, mcq('x7', 'Was kosten die Karten? (Hörtext oben)', ['5 €', '15 €', '50 €'], 1)),
    x(1, mcq('x8', 'Was kann man im Museum am Sonntag machen?', ['kostenlos die Ausstellung sehen', 'selbst malen', 'ein Konzert hören'], 1),
      text('x-st2', '**Museum der bildenden Künste Leipzig**\nNeue Ausstellung: „Farben der Stadt“, Bilder der Neuen Leipziger Schule.\nDienstag bis Sonntag 10 bis 18 Uhr, Mittwoch bis 20 Uhr.\nJeden Sonntag 14 Uhr: Malworkshop für Kinder und Erwachsene (Anmeldung an der Kasse).\nEintritt: 10 €, am ersten Mittwoch im Monat frei.', { kicker: 'Lesen' })),
    x(1, mcq('x9', 'Wann ist der Eintritt frei? (Text oben)', ['jeden Sonntag', 'am ersten Mittwoch im Monat', 'nie'], 1)),
    x(2, order('x10', ['Das ist', 'der Film,', 'den', 'ich', 'so liebe.'], { task: 'Bau den Satz.' })),
    x(1, mcq('x11', 'Du hast nicht verstanden. Was sagst du?', ['Wie bitte?', 'Genau!', 'Gute Idee!'], 0)),
    x(1, mcq('x12', 'Was ist hinten in einem Bild?', ['der Vordergrund', 'der Hintergrund', 'die Mitte'], 1)),
  ],
};

export const gamesA2k12: GameDef[] = [
  {
    id: 'a2k12-sprint', engine: 'sprint', title: 'Relativ-Sprint', blurb: 'der, den, das oder die? Schnell!', skill: 'Relativpronomen', tone: 'mint', chapter: 12, emoji: '⚡',
    rules: 'Du siehst einen Satz mit Relativsatz. Tippe auf das richtige Relativpronomen.', label: 'Welches Pronomen?',
    items: [
      { q: 'der Mann, ___ Gitarre spielt', a: 'der', wrong: ['den', 'das'] }, { q: 'der Mann, ___ ich kenne', a: 'den', wrong: ['der', 'dem'] },
      { q: 'das Lied, ___ im Radio läuft', a: 'das', wrong: ['der', 'den'] }, { q: 'die Frau, ___ singt', a: 'die', wrong: ['der', 'das'] },
      { q: 'die Fans, ___ jubeln', a: 'die', wrong: ['der', 'den'] }, { q: 'der Film, ___ wir sehen', a: 'den', wrong: ['der', 'die'] },
      { q: 'das Bild, ___ Lina malt', a: 'das', wrong: ['den', 'die'] }, { q: 'der Koch, ___ aus Japan kommt', a: 'der', wrong: ['den', 'das'] },
      { q: 'die Band, ___ ich liebe', a: 'die', wrong: ['den', 'der'] }, { q: 'der Kuchen, ___ Kenji backt', a: 'den', wrong: ['der', 'das'] },
      { q: 'das Kind, ___ lacht', a: 'das', wrong: ['der', 'die'] }, { q: 'der Nachbar, ___ immer klingelt', a: 'der', wrong: ['den', 'die'] },
    ],
  },
  {
    id: 'a2k12-memory', engine: 'memory', title: 'Instrumente-Memory', blurb: 'Instrument und Bild: Finde die Paare.', skill: 'Musik', tone: 'lilac', chapter: 12, emoji: '🃏',
    rules: 'Dreh zwei Karten um. Ein Paar ist ein Instrument und das passende Bild.', kinds: ['Wort', 'Bild'],
    pairs: [['die Gitarre', '🎸'], ['das Schlagzeug', '🥁'], ['das Klavier', '🎹'], ['die Geige', '🎻'], ['die Trompete', '🎺'], ['das Saxofon', '🎷'], ['das Mikrofon', '🎤'], ['das Akkordeon', '🪗'], ['die Kopfhörer', '🎧'], ['die Bühne', '🎪']],
  },
  {
    id: 'a2k12-satzbau', engine: 'satzbau', title: 'Relativsatz-Baukasten', blurb: 'Beschreib Personen genauer!', skill: 'Relativsätze', tone: 'sky', chapter: 12, emoji: '🧱',
    rules: 'Tippe die Wörter in der richtigen Reihenfolge an. Im Relativsatz steht das Verb am Ende.',
    sentences: [
      { parts: ['Felix ist', 'der Musiker,', 'der', 'Gitarre', 'spielt.'], hint: 'Nominativ: der' },
      { parts: ['Kenji ist', 'der Koch,', 'den', 'alle', 'kennen.'], hint: 'Akkusativ: den' },
      { parts: ['Das ist', 'das Bild,', 'das', 'Lina', 'gemalt hat.'], hint: 'Perfekt am Ende' },
      { parts: ['Hat', 'jemand', 'meine Jacke', 'gesehen?'], hint: 'jemand = eine Person' },
      { parts: ['Niemand', 'muss', 'Tickets', 'kaufen.'], hint: 'niemand = keine Person' },
      { parts: ['Im Vordergrund', 'sieht', 'man', 'einen Fuchs.'], hint: 'Bildbeschreibung' },
      { parts: ['Er', 'möchte', 'nichts', 'verpassen.'], hint: 'nichts = keine Sache' },
      { parts: ['Das sind', 'die Fans,', 'die', 'laut', 'singen.'], hint: 'Plural: die' },
    ],
  },
  {
    id: 'a2k12-artikel', engine: 'regen', title: 'Artikel-Regen', blurb: 'der, die oder das? Musik und Kunst.', skill: 'Artikel', tone: 'rose', chapter: 12, emoji: '☔',
    rules: 'Ein Nomen fällt herunter. Tippe auf den richtigen Artikel.', buckets: ['der', 'die', 'das'],
    words: artikel('der Auftritt, das Festival, die Bühne, der Sänger, das Publikum, die Band, der Vordergrund, das Gemälde, die Ausstellung, der Hintergrund, das Konzert, die Meldung, der Maler, das Lied, die Geige, der Eintritt, das Zelt, die Farbe'),
  },
];
