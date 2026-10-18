import type { Chapter, GameDef, GlossaryEntry } from '../types';
import { artikel, audio, cards, checklist, compose, gap, grammar, match, mcq, order, overview, phrases, section, sort, text, tip, x } from '../helpers';

// A2 Kapitel 5: Vorstellungsgespräch, nach Dingen fragen, Bank und Behörde, höflich bitten, Stadttour Wien.
// Grammar: Adjektive nach dem bestimmten Artikel, ohne + Akkusativ, mit + Dativ, Konjunktiv II: könnte. Aussprache: freundliche Bitten.

export const glossaryA2k5: Record<string, GlossaryEntry> = {
  Vorstellungsgespräch: { de: 'Ein Gespräch mit einer Firma, wenn man sich für eine Stelle bewirbt.', en: 'job interview' },
  bewerben: { de: '„sich bewerben“: einen Job suchen und der Firma schreiben.', en: 'to apply (for a job)' },
  Behörde: { de: 'Ein Amt der Stadt oder des Staates, zum Beispiel das Bürgeramt.', en: 'public authority, government office' },
  Bürgeramt: { de: 'Hier meldet man seine Adresse an und bekommt einen Ausweis.', en: 'citizens’ office' },
  anmelden: { de: 'Offiziell sagen, wo man wohnt oder dass man mitmacht.', en: 'to register' },
  Konto: { de: 'Bei der Bank hat man ein Konto für sein Geld.', en: 'bank account' },
  Ausweis: { de: 'Ein Dokument mit Foto. Es zeigt, wer man ist.', en: 'ID card' },
  Formular: { de: 'Ein Papier mit Feldern zum Ausfüllen.', en: 'form' },
  höflich: { de: 'Freundlich und mit Respekt.', en: 'polite' },
  Sehenswürdigkeit: { de: 'Ein Ort, den Touristen gern ansehen.', en: 'sight, landmark' },
  Probearbeiten: { de: 'Ein Tag, an dem man in einer Firma arbeitet, damit sie einen testen kann.', en: 'trial work day' },
};

const einstieg = section('einstieg', 'einstieg', 'Einstieg', 'Neu in der Stadt', 'butter', 8,
  ['das Kapitel kennenlernen', 'Orte in der Stadt wiederholen'], [
    overview('e-over', 'Kapitel 5: Leben in der Stadt',
      'Wer in eine neue Stadt zieht, hat viel zu tun: Wohnung suchen, Arbeit finden, ein [[Konto]] eröffnen, sich beim [[Bürgeramt]] [[anmelden]]. In Kapitel 5 lernst du, wie man bei der Bank und bei einer [[Behörde]] spricht, wie man [[höflich]] um etwas bittet und wie ein [[Vorstellungsgespräch]] abläuft.\n\nKenji fährt mit Felix nach Wien. Morgen hat er sein [[Probearbeiten]]. Heute zeigt Felix ihm die Stadt.',
      'This chapter is about life in a city: a job interview, the bank, government offices and asking politely. You also take a tour of Vienna. Grammar: adjective endings after the definite article (der neue Job, den neuen Job, mit dem neuen Job), ohne + accusative and mit + dative, and polite requests with könnte (could).',
      ['ein Vorstellungsgespräch verstehen', 'bei Bank und Behörde sprechen', 'höflich um etwas bitten', 'eine Stadt beschreiben']),
    match('e-match', [['die Bank', '🏦'], ['das Bürgeramt', '🏛️'], ['die Post', '📮'], ['die Bibliothek', '📚'], ['das Rathaus', '🏰'], ['die Apotheke', '💊'], ['das Café', '☕'], ['der Bahnhof', '🚉']],
      { task: 'Welcher Ort ist das?', taskEn: 'Match the place to the picture.' }),
    sort('e-sort', ['Bank', 'Bürgeramt'], [['ein Konto eröffnen', 0], ['die neue Adresse anmelden', 1], ['Geld abheben', 0], ['einen Ausweis beantragen', 1], ['Geld überweisen', 0], ['einen Reisepass abholen', 1]],
      { task: 'Wo macht man das?', taskEn: 'Where do you do this: at the bank or at the citizens’ office?' }),
  ]);

const teil1 = section('teil-1', 'modul', 'Teil 1', 'Das Vorstellungsgespräch', 'mint', 15,
  ['ein Vorstellungsgespräch verstehen', 'Adjektive nach dem bestimmten Artikel'], [
    audio('t1-audio', 'Hören: Im Restaurant „Goldener Hirsch“', [
      ['frauHuber', 'Grüß Gott, Herr Tanaka. Schön, dass Sie da sind. Bitte, setzen Sie sich.'],
      ['kenji', 'Vielen Dank für die Einladung.'],
      ['frauHuber', 'Erzählen Sie doch ein bisschen von sich. Wo haben Sie bisher gearbeitet?'],
      ['kenji', 'Ich habe in Osaka eine Ausbildung als Koch gemacht. Seit zwei Jahren arbeite ich im Restaurant „Zum Fuchs“ in Leipzig. Und im letzten Monat hatte ich ein eigenes Pop-up-Restaurant.'],
      ['frauHuber', 'Ja, darüber haben wir in der Zeitung gelesen. Die japanisch-sächsische Küche, sehr originell! Warum möchten Sie nach Wien?'],
      ['kenji', 'Die Wiener Küche interessiert mich sehr. Ich möchte die klassischen Gerichte lernen und mit der japanischen Küche verbinden.'],
      ['frauHuber', 'Gut. Unser Restaurant ist sehr traditionell. Bei uns kommt das berühmte Schnitzel jeden Tag auf den Tisch. Haben Sie Fragen?'],
      ['kenji', 'Ja. Wie sind die Arbeitszeiten?'],
      ['frauHuber', 'Fünf Tage pro Woche, meistens von zwölf bis zweiundzwanzig Uhr. Montag und Dienstag sind frei. Morgen zeigen Sie uns beim Probearbeiten, was Sie können.'],
    ], { task: 'Hör das Vorstellungsgespräch.', taskEn: 'Listen to the job interview. Frau Huber speaks Viennese German.' }),
    mcq('t1-q1', 'Wo hat Kenji seine Ausbildung gemacht?', ['in Leipzig', 'in Osaka', 'in Wien'], 1),
    mcq('t1-q2', 'Warum möchte Kenji nach Wien?', ['Er möchte die Wiener Küche lernen.', 'Er mag Leipzig nicht.', 'Er will mehr Geld verdienen.'], 0),
    mcq('t1-q3', 'Welche Tage sind frei?', ['Samstag und Sonntag', 'Montag und Dienstag', 'nur Sonntag'], 1),
    grammar('t1-gram', 'Adjektive nach dem bestimmten Artikel', {
      intro: 'Vor einem Nomen bekommt das Adjektiv eine Endung. Nach **der, das, die** ist die Endung meistens **-e** oder **-en**.',
      head: ['', 'maskulin', 'neutral', 'feminin', 'Plural'],
      rows: [['Nominativ', 'der neu**e** Job', 'das berühmt**e** Schnitzel', 'die klassisch**e** Küche', 'die neu**en** Kollegen'], ['Akkusativ', 'den neu**en** Job', 'das berühmt**e** Schnitzel', 'die klassisch**e** Küche', 'die neu**en** Kollegen'], ['Dativ', 'dem neu**en** Job', 'dem berühmt**en** Schnitzel', 'der klassisch**en** Küche', 'den neu**en** Kolleg**en**']],
      notes: ['Merke: **-e** nur bei Nominativ Singular und bei Akkusativ neutral und feminin. **Überall sonst: -en.**', 'Gleiche Endungen nach **dieser, welcher, jeder**.'],
      en: 'After der/das/die, adjectives end in -e in five places (nominative singular, accusative neuter and feminine) and in -en everywhere else.',
    }),
    gap('t1-gap', ['Der {{neue}} Koch kommt aus Japan. (neu)', 'Ich liebe die {{klassische}} Wiener Küche. (klassisch)', 'Kenji spricht mit dem {{netten}} Chef. (nett)', 'Wir essen das {{berühmte}} Schnitzel. (berühmt)', 'Die {{alten}} Häuser sind sehr schön. (alt)'],
      { task: 'Ergänze die Adjektivendung.', taskEn: 'Fill in the adjective with the right ending.' }),
    sort('t1-sort', ['-e', '-en'], [['der kleine Tisch', 0], ['den kleinen Tisch', 1], ['die rote Jacke', 0], ['mit der roten Jacke', 1], ['das neue Auto', 0], ['die neuen Autos', 1]],
      { task: '-e oder -en?', taskEn: 'Sort by adjective ending.' }),
  ]);

const teil2 = section('teil-2', 'modul', 'Teil 2', 'Bei der Bank und beim Amt', 'sky', 15,
  ['nach Dingen fragen', 'Gespräche bei Bank und Behörde verstehen', 'ohne + Akkusativ, mit + Dativ'], [
    audio('t2-audio', 'Hören: Ein Konto eröffnen', [
      ['tomasz', 'Guten Tag, was kann ich für Sie tun?'],
      ['amara', 'Guten Tag. Ich möchte ein Girokonto eröffnen. Ich habe eine neue Stelle und brauche ein Konto für mein Gehalt.'],
      ['tomasz', 'Gerne. Haben Sie Ihren Ausweis oder Ihren Pass dabei?'],
      ['amara', 'Ja, hier ist mein Pass. Und meine Meldebescheinigung vom Bürgeramt.'],
      ['tomasz', 'Sehr gut. Möchten Sie das Konto mit oder ohne Kreditkarte?'],
      ['amara', 'Ohne Kreditkarte, bitte. Die Bankkarte reicht mir. Kostet das Konto etwas?'],
      ['tomasz', 'Das Konto kostet vier Euro im Monat. Mit der Online-App können Sie alles selbst machen. Bitte füllen Sie noch dieses Formular aus.'],
      ['amara', 'Könnten Sie mir bei dem Formular helfen? Einige Wörter verstehe ich nicht.'],
      ['tomasz', 'Natürlich, kein Problem.'],
    ], { task: 'Hör zu. Was braucht Amara für das Konto?', taskEn: 'Listen. What does Amara need to open a bank account? Meldebescheinigung = proof of registered address.' }),
    mcq('t2-q1', 'Warum braucht Amara ein neues Konto?', ['für ihr Gehalt', 'für einen Kredit', 'für eine Reise'], 0),
    mcq('t2-q2', 'Was zeigt Amara?', ['ihren Führerschein', 'ihren Pass und die Meldebescheinigung', 'ihren Arbeitsvertrag'], 1),
    mcq('t2-q3', 'Möchte Amara eine Kreditkarte?', ['Ja.', 'Nein.', 'Später.'], 1),
    grammar('t2-gram', 'ohne + Akkusativ, mit + Dativ', {
      head: ['Präposition', 'Fall', 'Beispiel'],
      rows: [['**ohne**', 'Akkusativ', 'ein Konto **ohne den** Ausweis? Nein! / Kaffee **ohne** Milch'], ['**mit**', 'Dativ', 'ein Konto **mit der** Online-App / **mit dem** neuen Pass']],
      notes: ['Mit Adjektiv: *ohne **den neuen** Ausweis*, *mit **dem neuen** Ausweis*.', 'Oft ohne Artikel: *Tee mit Zucker, Kaffee ohne Milch*.'],
      en: 'ohne (without) takes the accusative, mit (with) takes the dative.',
    }),
    gap('t2-gap', ['Ich trinke Kaffee ohne {{den}} Zucker. (der Zucker)', 'Amara geht mit {{ihrem}} Pass zur Bank. (ihr Pass)', 'Ohne {{einen}} Termin geht es nicht. (ein Termin)', 'Ich fahre mit {{der}} neuen Straßenbahn. (die Straßenbahn)'],
      { task: 'Ergänze den Artikel.', taskEn: 'Fill in the article in the right case.' }),
    text('t2-text', `**Bürgeramt Leipzig-Mitte: Wohnsitz anmelden**

Wenn Sie umziehen, müssen Sie sich innerhalb von **zwei Wochen** beim Bürgeramt anmelden.

**Sie brauchen:**
- Ihren Personalausweis oder Reisepass
- die Wohnungsgeberbestätigung (vom Vermieter)
- das ausgefüllte Anmeldeformular

**Termin:** nur online. Ohne Termin müssen Sie oft lange warten.
Die Anmeldung ist **kostenlos**.`, { kicker: 'Lesen', title: 'Informationen vom Amt', task: 'Lies die Informationen.', taskEn: 'Read the information from the citizens’ office. Vermieter = landlord.' }),
    mcq('t2-q4', 'Bis wann muss man sich anmelden?', ['innerhalb von zwei Wochen', 'innerhalb von zwei Monaten', 'sofort'], 0),
    mcq('t2-q5', 'Was kostet die Anmeldung?', ['10 Euro', 'nichts', '25 Euro'], 1),
  ]);

const teil3 = section('teil-3', 'modul', 'Teil 3', 'Rund um den Ring', 'lilac', 15,
  ['höflich um etwas bitten', 'Konjunktiv II: könnte', 'einer Stadttour folgen'], [
    grammar('t3-gram', 'Höfliche Bitten mit könnte', {
      intro: 'Mit **könnte** klingt eine Bitte höflicher als mit **kann**.',
      head: ['', 'können', 'Konjunktiv II'],
      rows: [['ich', 'kann', '**könnte**'], ['du', 'kannst', '**könntest**'], ['er/sie/es', 'kann', '**könnte**'], ['wir', 'können', '**könnten**'], ['ihr', 'könnt', '**könntet**'], ['sie/Sie', 'können', '**könnten**']],
      notes: ['*Kannst du mir helfen?* → ***Könntest** du mir helfen?* (höflicher)', '*Können Sie das wiederholen?* → ***Könnten** Sie das bitte wiederholen?*', 'Mit **bitte** wird es noch freundlicher.'],
      en: 'könnte (could) makes requests more polite: Könnten Sie mir bitte helfen? Note the umlaut, unlike konnte (past).',
    }),
    match('t3-match', [['Kannst du das Fenster zumachen?', 'Könntest du bitte das Fenster zumachen?'], ['Sagen Sie mir den Weg!', 'Könnten Sie mir bitte den Weg sagen?'], ['Hilf mir!', 'Könntest du mir bitte helfen?'], ['Sprechen Sie langsamer!', 'Könnten Sie bitte langsamer sprechen?']], { task: 'Direkt oder höflich: Was passt?', taskEn: 'Match the direct request to its polite version.' }),
    gap('t3-gap', ['{{Könnten}} Sie mir bitte helfen? (Sie)', '{{Könntest}} du mich morgen anrufen? (du)', '{{Könntet}} ihr etwas leiser sein? (ihr)'],
      { task: 'Ergänze könnte.', taskEn: 'Fill in the right form of könnte.' }),
    text('t3-text', `**Felix’ Wien-Tour für Kenji**

„Kenji, die Ringstraße ist wie ein großer Kreis um die Altstadt. Früher war hier die alte Stadtmauer. Heute stehen an der Straße die schönsten Gebäude der Stadt.

Wir beginnen an der **Staatsoper**. Hier hört man die besten Opern der Welt. Dann gehen wir weiter zur **Hofburg**. Dort haben früher die Kaiser gewohnt. Gegenüber siehst du das **Kunsthistorische Museum** und das **Naturhistorische Museum**. Die zwei Gebäude sehen fast gleich aus!

Danach kommen das **Parlament** und das **Rathaus**. Vor dem Rathaus gibt es im Winter einen großen Weihnachtsmarkt. Und zum Schluss: ein Kaffeehaus! In Wien bestellt man keinen ‚Kaffee‘, sondern eine ‚Melange‘. Und zum Kuchen bekommst du immer ein Glas Wasser.“`, { kicker: 'Lesen', title: 'Eine Stadttour', task: 'Lies Felix’ Tour.', taskEn: 'Read Felix’s tour of Vienna’s Ring boulevard. Kaiser = emperor.' }),
    order('t3-order', ['Staatsoper', 'Hofburg', 'Parlament', 'Rathaus', 'Kaffeehaus'], { task: 'In welcher Reihenfolge besuchen sie die Orte?', taskEn: 'Put the stops of the tour in order.' }),
    mcq('t3-q1', 'Was war früher an der Stelle der Ringstraße?', ['ein Fluss', 'die Stadtmauer', 'ein Park'], 1),
    mcq('t3-q2', 'Was bekommt man im Wiener Kaffeehaus zum Kuchen?', ['ein Glas Wasser', 'eine Zeitung', 'Sahne'], 0),
    tip('t3-tip', 'Österreichisch', 'Im Wiener Kaffeehaus hörst du viele österreichische Wörter: **die Melange** (Kaffee mit Milchschaum), **das Schlagobers** (Sahne), **der Paradeiser** (Tomate), **die Marille** (Aprikose). Und **Grüß Gott** statt Guten Tag.'),
  ]);

const wg = section('wg', 'kommunikation', 'Die Fuchsbau-WG', 'Folge 5: Das Probearbeiten', 'rose', 10,
  ['eine Geschichte hören', 'höfliche Bitten im Kontext'], [
    text('wg-intro', 'Kenjis Probearbeiten im „Goldenen Hirsch“. Felix wartet im Kaffeehaus gegenüber. Nach acht Stunden kommt Kenji heraus.', { kicker: 'Die Geschichte', en: 'Kenji’s trial day at the restaurant. Felix waits in the café opposite. After eight hours Kenji comes out.' }),
    audio('wg-audio', 'Folge 5: Das Probearbeiten', [
      ['felix', 'Endlich! Und? Wie war es? Erzähl!'],
      ['kenji', 'Am Anfang war es schwierig. Der Küchenchef spricht sehr schnell und sehr wienerisch. Ich habe nur die Hälfte verstanden.'],
      ['felix', 'Hast du gesagt: Könnten Sie das bitte wiederholen?'],
      ['kenji', 'Ja, zehnmal! Aber dann sollte ich das berühmte Schnitzel machen. Und danach durfte ich ein eigenes Gericht kochen.'],
      ['felix', 'Was hast du gekocht?'],
      ['kenji', 'Schnitzel mit Yuzu und Miso-Kartoffelsalat. Der Chef hat probiert, nichts gesagt und ist gegangen.'],
      ['felix', 'Oh nein.'],
      ['kenji', 'Und dann ist er mit der Chefin zurückgekommen. Sie haben mir die Stelle angeboten!'],
      ['felix', 'Kenji! Das ist fantastisch! Du ziehst nach Wien?'],
      ['kenji', 'Ich weiß es noch nicht. Ich muss nachdenken. Was mache ich ohne die WG?'],
    ], { task: 'Hör die Geschichte.', taskEn: 'Listen to the story.' }),
    mcq('wg-q1', 'Warum war es am Anfang schwierig?', ['Der Chef war unfreundlich.', 'Der Küchenchef spricht schnell und wienerisch.', 'Kenji war krank.'], 1),
    mcq('wg-q2', 'Was hat Kenji gekocht?', ['nur ein normales Schnitzel', 'Schnitzel mit Yuzu und Miso-Kartoffelsalat', 'eine Suppe'], 1),
    mcq('wg-q3', 'Was ist am Ende passiert?', ['Kenji hat die Stelle angeboten bekommen.', 'Kenji hat abgesagt.', 'Der Chef war sauer.'], 0),
    mcq('wg-q4', 'Warum zögert Kenji?', ['Er mag Wien nicht.', 'Er weiß nicht, was er ohne die WG macht.', 'Das Gehalt ist zu niedrig.'], 1),
  ]);

const grammatik = section('grammatik', 'grammatik', 'Grammatik', 'Alles auf einen Blick', 'peach', 10,
  ['Adjektivendungen', 'ohne und mit', 'könnte'], [
    grammar('g-1', 'Adjektivendungen: die Regel', {
      head: ['', 'maskulin', 'neutral', 'feminin', 'Plural'],
      rows: [['Nom.', '-e', '-e', '-e', '-en'], ['Akk.', '-en', '-e', '-e', '-en'], ['Dat.', '-en', '-en', '-en', '-en']],
      en: 'Endings after der, das, die (and dieser, jeder, welcher). Five -e endings, everything else -en.',
    }),
    mcq('g-q1', 'Ich kaufe den ___ Mantel.', ['schwarze', 'schwarzen', 'schwarzer'], 1),
    mcq('g-q2', 'Das ___ Restaurant ist teuer.', ['neue', 'neuen', 'neues'], 0),
    mcq('g-q3', 'Ich gehe nie ___ meinen Schlüssel aus dem Haus.', ['mit', 'ohne', 'von'], 1),
    mcq('g-q4', '___ Sie mir bitte den Zucker geben?', ['Können', 'Konnten', 'Könnten'], 2, { why: 'Alle drei sind grammatisch möglich als Wort, aber „Konnten“ ist Vergangenheit. „Könnten“ ist die höflichste Form.' }),
  ]);

const uebungen = section('uebungen', 'uebung', 'Übungen', 'Training', 'butter', 15,
  ['höflich bitten', 'Aussprache: freundliche Bitten'], [
    compose('u-comp', 'Du bist beim Bürgeramt.', [
      ['Sag, was du möchtest.', 'Say what you want.', ['Ich', 'möchte', 'meine neue Adresse', 'anmelden.']],
      ['Frag höflich nach Hilfe beim Formular.', 'Ask politely for help with the form.', ['Könnten', 'Sie', 'mir bitte', 'helfen?']],
      ['Bitte um Wiederholung.', 'Ask them to repeat.', ['Könnten', 'Sie das', 'bitte', 'wiederholen?']],
    ], { task: 'Bau die Sätze.', taskEn: 'Build the sentences.' }),
    audio('u-aus', 'Aussprache: freundliche Bitten', [
      ['frauKlein', 'Hör den Unterschied. Unfreundlich, kurz und hart: Helfen Sie mir!'],
      ['frauKlein', 'Freundlich, mit weicher Melodie: Könnten Sie mir bitte helfen?'],
      ['frauKlein', 'Bei freundlichen Bitten geht die Stimme am Ende leicht nach oben. Und das Wort bitte macht alles netter.'],
    ], { task: 'Hör zu und sprich nach.', taskEn: 'Listen and repeat. Friendly requests have a softer melody that rises slightly at the end.' }),
    sort('u-sort', ['höflich', 'nicht so höflich'], [['Könnten Sie bitte warten?', 0], ['Warten Sie!', 1], ['Könntest du mir das Salz geben?', 0], ['Gib mir das Salz!', 1], ['Würden Sie bitte leiser sprechen?', 0], ['Sei leise!', 1]], { task: 'Höflich oder nicht?', taskEn: 'Polite or not so polite?' }),
    order('u-order', ['Könnten', 'Sie', 'das bitte', 'langsamer', 'sagen?'], { task: 'Bau die Frage.', taskEn: 'Build the question.' }),
  ]);

const wortschatz = section('wortschatz', 'wortschatz', 'Wortschatz und Check', 'Das kann ich jetzt', 'mint', 8,
  ['Wörter wiederholen', 'den Stand einschätzen'], [
    cards('w-cards', [
      ['das Vorstellungsgespräch', 'Gespräch für einen Job', 'job interview'], ['sich bewerben', 'einen Job suchen', 'to apply'], ['die Stelle', 'der Job', 'position'],
      ['das Konto', 'für Geld bei der Bank', 'account'], ['eröffnen', 'neu aufmachen', 'to open'], ['überweisen', 'Geld auf ein anderes Konto schicken', 'to transfer'],
      ['das Bürgeramt', 'Amt für Ausweis und Adresse', 'citizens’ office'], ['sich anmelden', 'die Adresse registrieren', 'to register'], ['der Ausweis', 'Dokument mit Foto', 'ID card'],
      ['das Formular', 'Papier zum Ausfüllen', 'form'], ['ausfüllen', 'die Felder schreiben', 'to fill in'], ['Könnten Sie …?', 'höfliche Bitte', 'Could you …?'],
    ]),
    phrases('w-x-phr', 'Höflich bitten', {
      'Bitten': ['Könntest du mir kurz helfen?', 'Könnten Sie das bitte ausdrucken?', 'Könnte ich mit Ihrem Telefon anrufen?'],
      'im Vorstellungsgespräch': ['Wie sind die Arbeitszeiten?', 'Wann kann ich anfangen?', 'Darf ich fragen, wie es mit der Bezahlung ist?'],
    }),
    match('w-x-match', [['das Bürgeramt', 'einen Personalausweis beantragen'], ['die Bank', 'ein Konto eröffnen'], ['die Polizei', 'Hilfe holen'], ['die Müllabfuhr', 'den Müll abholen'], ['die Straßenbahn', 'in der Stadt fahren'], ['das Krankenhaus', 'kranke Menschen behandeln']],
      { task: 'Wer macht was in der Stadt?', taskEn: 'What happens where in the city?' }),
    gap('w-x-gap', ['Der {{neue}} Job gefällt Amara.', 'Kenji trinkt Kaffee {{ohne}} Zucker.', 'Felix fährt {{mit}} der Straßenbahn zur Arbeit.', '{{Könnten}} Sie bitte langsamer sprechen?'],
      { bank: ['neue', 'ohne', 'mit', 'Könnten'], task: 'Ergänze.', taskEn: 'Fill in: adjective ending, ohne/mit, polite könnte.' }),
    mcq('w-x-q1', 'Welche Bitte ist am höflichsten?', ['Gib mir dein Handy!', 'Kann ich dein Handy haben?', 'Könntest du mir vielleicht kurz dein Handy leihen?'], 2, { task: 'Höflich sein', taskEn: 'Which request is the most polite?' }),
    mcq('w-x-q2', 'Am Parlament müssen wir ___.', ['umsteigen', 'abfahren', 'ankommen'], 0),
    order('w-x-order', ['Könnten', 'Sie', 'mir', 'den Weg', 'zeigen?'], { task: 'Bau die Bitte.', taskEn: 'Build the polite request.' }),
    checklist('w-check', ['Ich verstehe ein einfaches Vorstellungsgespräch.', 'Ich kann bei Bank und Amt sagen, was ich brauche.', 'Ich kann mit könnte höflich bitten.', 'Ich kenne die Adjektivendungen nach der, das, die.', 'Ich kann ein paar Sehenswürdigkeiten in Wien nennen.']),
  ]);

export const a2k5: Chapter = {
  id: 'a2-k5', number: 5, title: 'Leben in der Stadt', theme: 'Vorstellungsgespräch, Bank, Behörde, höfliche Bitten, Wien',
  grammar: 'Adjektive nach dem bestimmten Artikel. ohne + Akkusativ, mit + Dativ. Konjunktiv II: könnte.',
  sections: [einstieg, teil1, teil2, teil3, wg, grammatik, uebungen, wortschatz],
  games: ['a2k5-sprint', 'a2k5-memory', 'a2k5-satzbau', 'a2k5-artikel'],
  exam: [
    x(1, mcq('x1', 'Der ___ Kollege ist sehr nett.', ['neue', 'neuen', 'neuer'], 0)),
    x(1, mcq('x2', 'Ich spreche mit der ___ Chefin.', ['neue', 'neuen', 'neuer'], 1)),
    x(1, mcq('x3', '___ du mir bitte helfen?', ['Konntest', 'Könntest', 'Kannst du'], 1)),
    x(4, gap('x4', ['Ich nehme den {{roten}} Pullover. (rot)', 'Das {{kleine}} Café ist gemütlich. (klein)', 'Wir wohnen in dem {{alten}} Haus. (alt)', 'Die {{neuen}} Schuhe sind bequem. (neu)'], { task: 'Adjektivendungen.' })),
    x(2, gap('x5', ['Ich trinke Tee ohne {{den}} Zucker. (der Zucker)', 'Er kommt mit {{seiner}} Frau. (seine Frau)'], { task: 'ohne und mit.' })),
    x(1, mcq('x6', 'Was möchte der Mann?', ['Geld abheben', 'einen Termin beim Bürgeramt', 'ein Paket abholen'], 1),
      audio('x-st1', 'Hören: Am Telefon', [
        ['priya', 'Bürgeramt Leipzig, guten Tag.'],
        ['tomasz', 'Guten Tag, ich bin umgezogen und muss mich anmelden. Könnte ich einen Termin bekommen?'],
        ['priya', 'Termine gibt es nur online. Aber ich schaue mal. Am Donnerstag um zehn Uhr ist noch etwas frei.'],
        ['tomasz', 'Donnerstag um zehn, sehr gut. Was muss ich mitbringen?'],
        ['priya', 'Ihren Ausweis und die Bestätigung von Ihrem Vermieter.'],
      ])),
    x(1, mcq('x7', 'Wann ist der Termin? (Hörtext oben)', ['Dienstag um 10 Uhr', 'Donnerstag um 10 Uhr', 'Donnerstag um 12 Uhr'], 1)),
    x(1, mcq('x8', 'Was sucht das Café?', ['einen Koch', 'eine Aushilfe für das Wochenende', 'einen Lehrling'], 1),
      text('x-st2', '**Café Mohnblume sucht Aushilfe (m/w/d)**\nfür Samstag und Sonntag, je 6 Stunden. Sie sind freundlich und sprechen gut Deutsch? Erfahrung ist nicht nötig. 14 € pro Stunde. Bewerbung bitte per E-Mail an: job@mohnblume-cafe.de', { kicker: 'Lesen' })),
    x(1, mcq('x9', 'Braucht man Erfahrung? (Text oben)', ['Ja, mindestens ein Jahr.', 'Nein.', 'Ja, als Koch.'], 1)),
    x(2, order('x10', ['Könnten', 'Sie', 'mir bitte', 'den Weg', 'zeigen?'], { task: 'Bau die Frage.' })),
    x(1, mcq('x11', 'Wo eröffnet man ein Konto?', ['bei der Bank', 'beim Bürgeramt', 'bei der Post'], 0)),
    x(1, mcq('x12', 'Was ist eine Melange in Wien?', ['ein Kuchen', 'ein Kaffee mit Milchschaum', 'eine Straße'], 1)),
  ],
};

export const gamesA2k5: GameDef[] = [
  {
    id: 'a2k5-sprint', engine: 'sprint', title: 'Endungs-Sprint', blurb: '-e oder -en? 60 Sekunden!', skill: 'Adjektivendungen', tone: 'mint', chapter: 5, emoji: '⚡',
    rules: 'Du siehst einen Artikel, ein Adjektiv und ein Nomen. Tippe auf die richtige Form.', label: 'Welche Endung?',
    items: [
      { q: 'der ___ Job (neu)', a: 'neue', wrong: ['neuen', 'neuer'] }, { q: 'den ___ Job (neu)', a: 'neuen', wrong: ['neue', 'neuer'] },
      { q: 'die ___ Stadt (schön)', a: 'schöne', wrong: ['schönen', 'schöner'] }, { q: 'mit der ___ Stadt (schön)', a: 'schönen', wrong: ['schöne', 'schöner'] },
      { q: 'das ___ Haus (alt)', a: 'alte', wrong: ['alten', 'altes'] }, { q: 'in dem ___ Haus (alt)', a: 'alten', wrong: ['alte', 'altem'] },
      { q: 'die ___ Kollegen (nett)', a: 'netten', wrong: ['nette', 'netter'] }, { q: 'das ___ Schnitzel (berühmt)', a: 'berühmte', wrong: ['berühmten', 'berühmtes'] },
      { q: 'dem ___ Chef (freundlich)', a: 'freundlichen', wrong: ['freundliche', 'freundlichem'] }, { q: 'die ___ Küche (klassisch)', a: 'klassische', wrong: ['klassischen', 'klassischer'] },
      { q: 'den ___ Kaffee (heiß)', a: 'heißen', wrong: ['heiße', 'heißer'] }, { q: 'die ___ Gebäude (schön)', a: 'schönen', wrong: ['schöne', 'schöner'] },
    ],
  },
  {
    id: 'a2k5-memory', engine: 'memory', title: 'Höflich-Memory', blurb: 'Direkt und höflich: Finde die Paare.', skill: 'Höfliche Bitten', tone: 'lilac', chapter: 5, emoji: '🃏',
    rules: 'Dreh zwei Karten um. Ein Paar ist eine direkte Bitte und die höfliche Version.', kinds: ['direkt', 'höflich'],
    pairs: [['Hilf mir!', 'Könntest du mir helfen?'], ['Warten Sie!', 'Könnten Sie bitte warten?'], ['Sag es noch mal!', 'Könntest du das wiederholen?'], ['Mach das Fenster zu!', 'Könntest du das Fenster schließen?'], ['Zeigen Sie mir den Weg!', 'Könnten Sie mir den Weg zeigen?'], ['Sprich langsamer!', 'Könntest du langsamer sprechen?'], ['Gib mir das Salz!', 'Könntest du mir das Salz geben?'], ['Rufen Sie mich an!', 'Könnten Sie mich anrufen?']],
  },
  {
    id: 'a2k5-satzbau', engine: 'satzbau', title: 'Amt-Baukasten', blurb: 'Bau höfliche Sätze für Bank und Amt.', skill: 'Satzbau', tone: 'sky', chapter: 5, emoji: '🧱',
    rules: 'Tippe die Wörter in der richtigen Reihenfolge an.',
    sentences: [
      { parts: ['Könnten', 'Sie', 'mir bitte', 'helfen?'], hint: 'höfliche Bitte' },
      { parts: ['Ich', 'möchte', 'ein Konto', 'eröffnen.'], hint: 'möchten + Infinitiv' },
      { parts: ['Ich', 'muss', 'mich', 'beim Bürgeramt', 'anmelden.'], hint: 'reflexiv + Modalverb' },
      { parts: ['Der neue', 'Koch', 'kommt', 'aus Japan.'], hint: 'Nominativ: -e' },
      { parts: ['Kenji', 'kocht', 'das berühmte', 'Schnitzel.'], hint: 'Akkusativ neutral: -e' },
      { parts: ['Ich', 'trinke', 'Kaffee', 'ohne Zucker.'], hint: 'ohne + Akkusativ' },
      { parts: ['Wir', 'sprechen', 'mit dem', 'netten Chef.'], hint: 'Dativ: -en' },
      { parts: ['Könntest', 'du', 'das', 'wiederholen?'], hint: 'du-Form: könntest' },
    ],
  },
  {
    id: 'a2k5-artikel', engine: 'regen', title: 'Artikel-Regen', blurb: 'der, die oder das? Stadt und Amt.', skill: 'Artikel', tone: 'rose', chapter: 5, emoji: '☔',
    rules: 'Ein Nomen fällt herunter. Tippe auf den richtigen Artikel.', buckets: ['der', 'die', 'das'],
    words: artikel('der Ausweis, das Konto, die Bank, der Termin, das Formular, die Behörde, der Pass, das Amt, die Anmeldung, der Vermieter, das Gehalt, die Bewerbung, der Lebenslauf, das Rathaus, die Stelle, der Kaiser, das Kaffeehaus, die Oper'),
  },
];
