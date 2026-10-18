import type { Chapter, GameDef, GlossaryEntry } from '../types';
import { artikel, audio, cards, checklist, compose, gap, grammar, match, mcq, order, overview, phrases, section, sort, text, tip, x } from '../helpers';

// A2 Kapitel 1: sich vorstellen, Freizeit, über Vergangenes berichten, sich verabreden, im Restaurant.
// Grammar: Genitiv bei Namen (Kenjis), Wiederholung Perfekt, Nebensatz mit weil. Aussprache: ch.

export const glossaryA2k1: Record<string, GlossaryEntry> = {
  Freizeitbeschäftigung: { de: 'Etwas, das man in der freien Zeit macht, zum Beispiel lesen oder klettern.', en: 'leisure activity' },
  verabreden: { de: '„sich verabreden“: mit jemandem eine Zeit für ein Treffen ausmachen.', en: 'to arrange to meet' },
  Verabredung: { de: 'Ein geplantes Treffen mit Freunden.', en: 'appointment, date (to meet)' },
  begründen: { de: 'Sagen, warum etwas so ist.', en: 'to give a reason' },
  Speisekarte: { de: 'Eine Liste mit allen Gerichten und Preisen im Restaurant.', en: 'menu' },
  Gericht: { de: 'Ein Essen, das man kocht, zum Beispiel Suppe oder Pasta.', en: 'dish' },
  Vorspeise: { de: 'Das kleine Essen vor dem Hauptgericht.', en: 'starter, appetizer' },
  Nachtisch: { de: 'Das Süße nach dem Essen, zum Beispiel Eis.', en: 'dessert' },
  reservieren: { de: 'Einen Tisch oder ein Zimmer für sich festmachen lassen.', en: 'to reserve, to book' },
  'Pop-up-Restaurant': { de: 'Ein Restaurant, das es nur für kurze Zeit gibt, zum Beispiel ein Wochenende lang.', en: 'pop-up restaurant' },
  Homepage: { de: 'Die Startseite von einer Webseite.', en: 'homepage, website' },
};

const einstieg = section('einstieg', 'einstieg', 'Einstieg', 'Ein Jahr später', 'butter', 8,
  ['das Kapitel kennenlernen', 'Freizeitaktivitäten wiederholen'], [
    overview('e-over', 'Kapitel 1: Und was machst du?',
      'Willkommen zurück im Fuchsbau! Ein Jahr ist vorbei. Nele, Kenji, Amara und Felix wohnen immer noch zusammen in Leipzig. Und sie haben große Pläne.\n\nIn Kapitel 1 sprichst du über deine [[Freizeitbeschäftigung|Freizeit]] und darüber, was du früher gemacht hast. Du [[verabreden|verabredest]] dich mit Freunden, [[begründen|begründest]] etwas mit **weil** und liest die [[Homepage]] von einem Restaurant. Kenji plant nämlich ein [[Pop-up-Restaurant]]!',
      'Welcome to A2. The Fuchsbau flat share is back, one year later. In this chapter you talk about free time and the past, make plans with friends, give reasons with weil and read a restaurant website. Grammar: the genitive with names (Kenjis Restaurant), a review of the Perfekt, and subordinate clauses with weil, where the verb goes to the end.',
      ['über Freizeit sprechen', 'über Vergangenes berichten', 'sich verabreden', 'etwas begründen: weil …', 'im Restaurant bestellen']),
    match('e-match', [['klettern', '🧗'], ['joggen', '🏃'], ['Yoga machen', '🧘'], ['ins Konzert gehen', '🎤'], ['Brettspiele spielen', '🎲'], ['gärtnern', '🌱'], ['backen', '🧁'], ['Serien schauen', '📺']],
      { task: 'Was machen die Leute in ihrer Freizeit?', taskEn: 'Match the free-time activity to the picture.' }),
    sort('e-sort', ['allein', 'mit anderen'], [['lesen', 0], ['Fußball spielen', 1], ['meditieren', 0], ['im Chor singen', 1], ['Tagebuch schreiben', 0], ['Brettspiele spielen', 1]],
      { task: 'Macht man das meistens allein oder mit anderen?', taskEn: 'Do people usually do this alone or with others?' }),
  ]);

const teil1 = section('teil-1', 'modul', 'Teil 1', 'Das sind wir', 'mint', 15,
  ['sich ausführlich vorstellen', 'Genitiv bei Namen'], [
    text('t1-text', `**Neu im Sportverein? Stell dich vor!**

**Amara (32):** Ich komme aus Ghana und lebe seit drei Jahren in Leipzig. Ich bin Pflegerin. Weil ich oft Schichtdienst habe, brauche ich einen Sport mit flexiblen Zeiten. Deshalb bin ich hier: Klettern kann man fast immer!

**Felix (26):** Servus! Ich bin Musiker, aber ich sitze zu viel. Meine Freundin Lina klettert schon lange und sagt, das ist super für den Rücken. Also probiere ich es aus.

**Kenji (29):** Ich bin Koch. Früher habe ich in Osaka viel Baseball gespielt. Jetzt suche ich etwas Neues. Amaras Begeisterung fürs Klettern hat mich überzeugt.`,
      { kicker: 'Lesen', title: 'Die Kletterhalle „Fuchswand“', task: 'Lies die Vorstellungen.', taskEn: 'Read the three introductions on the climbing gym’s website.' }),
    mcq('t1-q1', 'Warum klettert Amara?', ['Es ist billig.', 'Sie hat Schichtdienst und braucht flexible Zeiten.', 'Ihre Freundin klettert.'], 1),
    mcq('t1-q2', 'Wer hat Felix den Tipp gegeben?', ['Kenji', 'seine Freundin Lina', 'Amara'], 1),
    mcq('t1-q3', 'Was hat Kenji früher gemacht?', ['Er hat Baseball gespielt.', 'Er ist geklettert.', 'Er hat in Leipzig gekocht.'], 0),
    grammar('t1-gram', 'Genitiv bei Namen', {
      intro: 'Wem gehört etwas? Bei Namen hängt man ein **-s** an. Ohne Apostroph!',
      head: ['Name', 'Genitiv', 'Beispiel'],
      rows: [['Kenji', 'Kenji**s**', '**Kenjis** Restaurant'], ['Amara', 'Amara**s**', '**Amaras** Begeisterung'], ['Felix', 'Felix**’**', '**Felix’** Gitarre'], ['Lina', 'Lina**s**', '**Linas** Kletterschuhe']],
      notes: ['Endet der Name auf **-s, -ß, -x, -z**, schreibt man nur einen Apostroph: *Felix’ Gitarre, Hans’ Auto*.', 'Im Gespräch sagt man oft: *die Gitarre **von** Felix*.'],
      en: 'To show possession with names, add -s (no apostrophe): Kenjis Restaurant. Names ending in s, ß, x, z only get an apostrophe: Felix’ Gitarre. In speech, "von + Dativ" is common: die Gitarre von Felix.',
    }),
    gap('t1-gap', ['Das ist {{Neles}} Laptop. (Nele)', '{{Kenjis}} Messer sind sehr scharf. (Kenji)', 'Wo ist {{Felix’|Felix\'}} Gitarre? (Felix)', '{{Amaras}} Schicht beginnt um sechs. (Amara)'],
      { task: 'Ergänze den Genitiv.', taskEn: 'Fill in the genitive form of the name.' }),
    match('t1-match', [['Neles Laptop', 'der Laptop von Nele'], ['Kenjis Messer', 'die Messer von Kenji'], ['Felix’ Gitarre', 'die Gitarre von Felix'], ['Linas Schuhe', 'die Schuhe von Lina']], { task: 'Was bedeutet dasselbe?', taskEn: 'Match the phrases that mean the same.' }),
  ]);

const teil2 = section('teil-2', 'modul', 'Teil 2', 'Was hast du am Wochenende gemacht?', 'sky', 15,
  ['über Vergangenes berichten', 'Wiederholung: Perfekt', 'sich verabreden'], [
    audio('t2-audio', 'Hören: Montagmorgen in der Küche', [
      ['nele', 'Morgen! Na, Felix, wie war das Klettern am Samstag?'],
      ['felix', 'Anstrengend! Ich bin nur bis zur Hälfte gekommen. Heute tun mir die Arme weh.'],
      ['amara', 'Aber du hast nicht aufgegeben. Das finde ich super.'],
      ['nele', 'Und was hast du gemacht, Kenji?'],
      ['kenji', 'Ich habe den ganzen Sonntag gekocht. Ich habe neue Rezepte ausprobiert, japanisch und sächsisch zusammen.'],
      ['nele', 'Japanisch und sächsisch? Was ist das denn?'],
      ['kenji', 'Zum Beispiel Kartoffelsuppe mit Miso. Ich habe eine Idee: ein Pop-up-Restaurant hier in Leipzig!'],
      ['amara', 'Wow! Wann machst du das?'],
      ['kenji', 'Vielleicht im nächsten Monat. Habt ihr am Freitag Zeit? Dann koche ich für euch und ihr testet alles.'],
      ['felix', 'Freitag geht bei mir nicht, da habe ich ein Konzert. Wie wäre es mit Samstag?'],
      ['kenji', 'Samstag um sieben? Okay, abgemacht!'],
    ], { task: 'Hör zu. Was haben die vier am Wochenende gemacht?', taskEn: 'Listen. What did the roommates do last weekend, and what are they planning?' }),
    mcq('t2-q1', 'Warum tun Felix die Arme weh?', ['Er hat Gitarre gespielt.', 'Er ist geklettert.', 'Er hat gekocht.'], 1),
    mcq('t2-q2', 'Was ist Kenjis Idee?', ['eine Kochschule', 'ein Pop-up-Restaurant', 'ein Kochbuch'], 1),
    mcq('t2-q3', 'Wann treffen sie sich zum Testessen?', ['Freitag um sieben', 'Samstag um sieben', 'Sonntag um sieben'], 1),
    grammar('t2-gram', 'Wiederholung: das Perfekt', {
      intro: 'Über Vergangenes spricht man meistens im **Perfekt**: **haben/sein** auf Position 2, das **Partizip II** am Ende.',
      head: ['', 'Infinitiv', 'Perfekt'],
      rows: [['regelmäßig', 'kochen', 'Ich **habe** gekocht.'], ['unregelmäßig', 'kommen', 'Ich **bin** bis zur Hälfte gekommen.'], ['trennbar', 'ausprobieren', 'Er **hat** Rezepte ausprobiert.'], ['trennbar', 'aufgeben', 'Du **hast** nicht aufgegeben.'], ['untrennbar', 'besuchen', 'Wir **haben** Oma besucht.']],
      notes: ['**sein**: Bewegung von A nach B (gehen, fahren, kommen) und Veränderung (aufstehen, einschlafen). Außerdem: sein, bleiben, passieren.', 'Bei **sein** und **haben** benutzt man meistens das Präteritum: *Es **war** toll. Ich **hatte** keine Zeit.*'],
      en: 'Review of the Perfekt: haben or sein + past participle. Verbs ending in -ieren have no ge- (ausprobiert). For sein and haben, people usually use the simple past: war, hatte.',
    }),
    gap('t2-gap', ['Am Samstag {{bin}} ich ins Kino gegangen.', 'Wir {{haben}} lange gefrühstückt.', 'Kenji hat neue Rezepte {{ausprobiert}}. (ausprobieren)', 'Felix ist früh {{eingeschlafen}}. (einschlafen)', 'Was {{ist}} passiert?'],
      { task: 'Ergänze.', taskEn: 'Fill in haben, sein or the participle.' }),
    phrases('t2-phr', 'Sich verabreden', {
      'Vorschlagen': ['Hast du am Freitag Zeit?', 'Wollen wir zusammen …?', 'Wie wäre es mit Samstag?'],
      'Zusagen': ['Gern! / Gute Idee!', 'Ja, das passt mir gut.', 'Okay, abgemacht!'],
      'Absagen': ['Tut mir leid, da kann ich nicht.', 'Freitag geht bei mir nicht.', 'Vielleicht ein anderes Mal?'],
    }),
    compose('t2-comp', 'Lade eine Freundin zum Klettern ein.', [
      ['Frag, ob sie Samstag Zeit hat.', 'Ask if she has time on Saturday.', ['Hast', 'du', 'am Samstag', 'Zeit?']],
      ['Schlag Klettern vor.', 'Suggest climbing.', ['Wollen', 'wir', 'zusammen', 'klettern gehen?']],
      ['Schlag eine Zeit vor.', 'Suggest a time.', ['Wie wäre', 'es', 'mit', 'zehn Uhr?']],
    ], { task: 'Bau die Nachricht.', taskEn: 'Build the message.' }),
  ]);

const teil3 = section('teil-3', 'modul', 'Teil 3', 'Weil es Spaß macht', 'lilac', 15,
  ['etwas begründen', 'Nebensatz mit weil', 'Restaurant-Homepage verstehen'], [
    grammar('t3-gram', 'Der Nebensatz mit weil', {
      intro: '**weil** gibt einen Grund an. Im weil-Satz steht das konjugierte Verb **am Ende**. Vor **weil** steht immer ein Komma.',
      head: ['Hauptsatz', '', 'Nebensatz mit weil'],
      rows: [['Ich klettere,', '**weil**', 'es Spaß **macht**.'], ['Felix ist müde,', '**weil**', 'er ein Konzert gehabt **hat**.'], ['Amara kann nicht kommen,', '**weil**', 'sie arbeiten **muss**.'], ['Kenji ist glücklich,', '**weil**', 'die Gäste **wiederkommen**.']],
      notes: ['Modalverb: steht ganz am Ende: *…, weil sie arbeiten **muss**.*', 'Perfekt: haben/sein steht ganz am Ende: *…, weil er geklettert **ist**.*', 'Trennbare Verben bleiben zusammen: *…, weil er früh **aufsteht**.*', 'Frage: *Warum …? Weil …*'],
      en: 'weil (because) sends the conjugated verb to the end of the clause. Always use a comma before weil. Separable verbs stay together: weil er früh aufsteht.',
    }),
    order('t3-order', ['Ich', 'lerne', 'Deutsch,', 'weil', 'ich', 'in Leipzig', 'arbeite.'], { task: 'Bau den Satz mit weil.', taskEn: 'Build the sentence with weil. The verb goes to the end.' }),
    gap('t3-gap', ['Ich gehe früh ins Bett, weil ich müde {{bin}}. (sein)', 'Nele lernt viel, weil sie bald eine Prüfung {{hat}}. (haben)', 'Felix übt jeden Tag, weil er besser werden {{will}}. (wollen)', 'Kenji kocht gern, weil er Menschen glücklich {{macht}}. (machen)'],
      { task: 'Ergänze das Verb am Ende.', taskEn: 'Fill in the verb at the end of the weil clause.' }),
    text('t3-text', `**Fuchs & Yuzu: Ein Abend, zwei Küchen**

Am 14. und 15. November öffnet Kenji Tanaka für zwei Abende sein Pop-up-Restaurant im Café „Kranich“ in Leipzig-Plagwitz. Es gibt keine Speisekarte. Alle Gäste bekommen ein Menü mit vier Gängen: eine Vorspeise, eine Suppe, ein Hauptgericht und einen Nachtisch. Kenji verbindet japanische und sächsische Küche. Vegetarische Gerichte gibt es auf Wunsch.

**Preis:** 39 € pro Person, Getränke extra
**Beginn:** 19 Uhr
**Reservierung:** nur online, nur 30 Plätze pro Abend!`, { kicker: 'Lesen', title: 'Die Homepage', task: 'Lies die Homepage.', taskEn: 'Read the website of Kenji’s pop-up restaurant. Gang = course (of a meal).' }),
    mcq('t3-q1', 'Wie viele Gänge gibt es?', ['zwei', 'drei', 'vier'], 2),
    mcq('t3-q2', 'Wie kann man reservieren?', ['per Telefon', 'nur online', 'vor Ort'], 1),
    mcq('t3-q3', 'Was ist im Preis nicht dabei?', ['der Nachtisch', 'die Getränke', 'die Suppe'], 1),
    phrases('t3-phr', 'Im Restaurant', {
      'Reservieren': ['Ich möchte einen Tisch für vier Personen reservieren.', 'Für Samstag um 19 Uhr, bitte.'],
      'Bestellen': ['Als Vorspeise nehme ich …', 'Was können Sie empfehlen?', 'Ich bin Vegetarierin. Haben Sie etwas ohne Fleisch?'],
      'Reklamieren': ['Entschuldigung, die Suppe ist kalt.', 'Ich habe etwas anderes bestellt.'],
    }),
  ]);

const wg = section('wg', 'kommunikation', 'Die Fuchsbau-WG', 'Folge 1: Das Testessen', 'rose', 10,
  ['eine Geschichte hören', 'Meinungen über Essen'], [
    text('wg-intro', 'Samstag, sieben Uhr. Kenji hat den ganzen Tag gekocht. Heute testet die WG das Menü für das Pop-up-Restaurant. Auch Felix’ Freundin Lina ist da.', { kicker: 'Die Geschichte', en: 'Saturday, seven o’clock. Kenji has cooked all day. Today the flat share tests the menu. Felix’s girlfriend Lina is there too.' }),
    audio('wg-audio', 'Folge 1: Das Testessen', [
      ['kenji', 'So, die Vorspeise: Gurkensalat mit Wasabi und Leipziger Senf.'],
      ['nele', 'Mmh! Scharf, aber lecker!'],
      ['jule', 'Hallo zusammen, ich bin Lina. Danke für die Einladung! Was ist das für eine Suppe?'],
      ['kenji', 'Kartoffelsuppe mit Miso. Und jetzt das Hauptgericht: Leipziger Allerlei mit Teriyaki-Tofu.'],
      ['felix', 'Ehrlich gesagt: Die Suppe ist mein Favorit. Der Tofu ist ein bisschen zu salzig.'],
      ['kenji', 'Zu salzig? Gut, dass du das sagst. Ich ändere das.'],
      ['amara', 'Und der Nachtisch?'],
      ['kenji', 'Matcha-Eierschecke. Eierschecke ist ein Kuchen aus Sachsen.'],
      ['jule', 'Das ist der beste Kuchen meines Lebens! Kenji, du musst das Restaurant machen!'],
    ], { task: 'Hör die Geschichte.', taskEn: 'Listen to the story. Eierschecke is a cake from Saxony.' }),
    mcq('wg-q1', 'Wie findet Felix den Tofu?', ['perfekt', 'zu salzig', 'zu scharf'], 1),
    mcq('wg-q2', 'Was ist Felix’ Lieblingsgericht?', ['die Suppe', 'der Salat', 'der Kuchen'], 0),
    mcq('wg-q3', 'Was ist eine Eierschecke?', ['ein Salat aus Japan', 'ein Kuchen aus Sachsen', 'eine Suppe'], 1),
    mcq('wg-q4', 'Wie reagiert Kenji auf die Kritik?', ['Er ist sauer.', 'Er ändert das Rezept.', 'Er hört auf zu kochen.'], 1),
  ]);

const grammatik = section('grammatik', 'grammatik', 'Grammatik', 'Alles auf einen Blick', 'peach', 10,
  ['Genitiv bei Namen', 'Perfekt', 'weil'], [
    grammar('g-1', 'Hauptsatz und Nebensatz', {
      head: ['', 'Position 1', 'Position 2', '…', 'Ende'],
      rows: [['Hauptsatz', 'Ich', '**gehe**', 'heute nicht ins Kino.', ''], ['Hauptsatz + weil', '…, weil', 'ich', 'keine Zeit', '**habe**.'], ['weil + Modalverb', '…, weil', 'ich', 'arbeiten', '**muss**.'], ['weil + Perfekt', '…, weil', 'ich', 'zu viel gearbeitet', '**habe**.']],
      en: 'Main clause: verb in position 2. weil clause: conjugated verb at the very end.',
    }),
    mcq('g-q1', 'Welcher Satz ist richtig?', ['Ich bleibe zu Hause, weil ich bin krank.', 'Ich bleibe zu Hause, weil ich krank bin.', 'Ich bleibe zu Hause, weil krank ich bin.'], 1),
    mcq('g-q2', 'Das ist ___ Fahrrad. (Nele)', ['Nele’s', 'Neles', 'von Neles'], 1),
    mcq('g-q3', 'Gestern ___ ich lange geschlafen.', ['bin', 'habe', 'hatte'], 1),
    mcq('g-q4', '…, weil er jeden Tag früh ___.', ['steht auf', 'aufsteht', 'auf steht'], 1),
  ]);

const uebungen = section('uebungen', 'uebung', 'Übungen', 'Training', 'butter', 15,
  ['Gründe nennen', 'Aussprache: ch'], [
    compose('u-comp', 'Warum lernst du Deutsch? Gib drei Gründe.', [
      ['Grund 1: Arbeit', 'Reason 1: work', ['Ich lerne Deutsch,', 'weil', 'ich in Deutschland', 'arbeiten möchte.']],
      ['Grund 2: Freunde', 'Reason 2: friends', ['Ich lerne Deutsch,', 'weil', 'meine Freunde', 'Deutsch sprechen.']],
      ['Grund 3: Spaß', 'Reason 3: fun', ['Ich lerne Deutsch,', 'weil', 'es mir', 'Spaß macht.']],
    ], { task: 'Bau die Sätze.', taskEn: 'Build the sentences with weil.' }),
    audio('u-aus', 'Aussprache: ch', [
      ['frauKlein', 'Nach a, o, u und au klingt ch hinten im Hals: machen, kochen, Buch, auch.'],
      ['frauKlein', 'Nach e, i, ä, ö, ü, ei, eu und nach Konsonanten klingt ch vorne, wie ein leises Zischen: ich, Küche, möchte, leicht, Milch.'],
      ['frauKlein', 'Am Wortanfang klingt ch oft wie k: Chor, Charakter. Oder wie sch: Chef.'],
    ], { task: 'Hör zu und sprich nach.', taskEn: 'Listen and repeat. After a, o, u, au the ch is in the back of the throat. After other vowels it is soft, at the front.' }),
    sort('u-sort', ['ch hinten (wie in „Buch“)', 'ch vorne (wie in „ich“)'], [['machen', 0], ['Küche', 1], ['kochen', 0], ['möchte', 1], ['auch', 0], ['leicht', 1], ['Nacht', 0], ['Milch', 1]], { task: 'Wie klingt das ch?', taskEn: 'Sort by the ch sound.' }),
    order('u-order', ['Warum', 'kommst', 'du', 'nicht', 'mit?'], { task: 'Bau die Frage.', taskEn: 'Build the question.' }),
  ]);

const wortschatz = section('wortschatz', 'wortschatz', 'Wortschatz und Check', 'Das kann ich jetzt', 'mint', 8,
  ['Wörter wiederholen', 'den Stand einschätzen'], [
    cards('w-cards', [
      ['die Freizeit', 'Zeit ohne Arbeit', 'free time'], ['klettern', 'an einer Wand nach oben gehen', 'to climb'], ['ausprobieren', 'etwas zum ersten Mal testen', 'to try out'],
      ['aufgeben', 'nicht weitermachen', 'to give up'], ['sich verabreden', 'ein Treffen ausmachen', 'to arrange to meet'], ['abgemacht!', 'Okay, so machen wir es.', 'deal!'],
      ['der Grund', 'warum etwas passiert', 'reason'], ['die Speisekarte', 'Liste im Restaurant', 'menu'], ['die Vorspeise', 'vor dem Hauptgericht', 'starter'],
      ['das Hauptgericht', 'das große Essen', 'main course'], ['der Nachtisch', 'süß, am Ende', 'dessert'], ['reservieren', 'einen Platz festmachen', 'to book'],
    ]),
    phrases('w-x-phr', 'Sich verabreden', {
      'etwas vorschlagen': ['Gehen wir am Sonntag zusammen brunchen?', 'Hast du am Samstag Zeit?', 'Ich möchte klettern gehen. Hast du auch Lust?'],
      'zusagen': ['Das ist eine gute Idee.', 'Oh ja, gern!', 'Abgemacht!'],
      'absagen': ['Schade, da geht es leider nicht.', 'Am Samstag kann ich leider nicht.'],
      'nachfragen': ['Wann möchtest du los?', 'Geht es auch ein bisschen später?'],
    }),
    sort('w-x-sort', ['zusagen', 'absagen'], [['Oh ja, gern!', 0], ['Da geht es leider nicht.', 1], ['Abgemacht!', 0], ['Schade, ich habe keine Zeit.', 1], ['Das ist eine gute Idee.', 0], ['Am Sonntag kann ich leider nicht.', 1]],
      { task: 'Ja oder nein?', taskEn: 'Is it a yes or a no to an invitation?' }),
    match('w-x-match', [['umziehen', 'ist umgezogen'], ['kennenlernen', 'hat kennengelernt'], ['besuchen', 'hat besucht'], ['bekommen', 'hat bekommen'], ['anfangen', 'hat angefangen'], ['renovieren', 'hat renoviert']],
      { task: 'Infinitiv und Perfekt', taskEn: 'Match the verb to its perfect tense form.' }),
    gap('w-x-gap', ['Felix kommt nicht, {{weil}} er heute Abend spielt.', 'Amara ist müde, weil sie lange gearbeitet {{hat}}.', 'Kenji lädt alle ein, weil er ein neues Rezept testen {{will}}.', 'Nele bleibt zu Hause, weil ihr Vater krank {{ist}}.'],
      { bank: ['weil', 'hat', 'will', 'ist'], task: 'Ergänze.', taskEn: 'Fill in. In a weil clause the verb goes to the end.' }),
    mcq('w-x-q1', 'Welches Perfekt ist richtig?', ['Ich habe nach Wien umgezogen.', 'Ich bin nach Wien umgezogen.', 'Ich bin nach Wien umgezieht.'], 1, { task: 'Perfekt mit haben oder sein', taskEn: 'Perfect tense with haben or sein.', why: 'umziehen = Ortswechsel, also mit sein.' }),
    mcq('w-x-q2', 'Wie heißt das Perfekt von „verstehen“?', ['hat geversteht', 'hat verstanden', 'ist verstanden'], 1, { why: 'Verben mit ver-, be-, er- bekommen kein ge-.' }),
    order('w-x-order', ['Gehen', 'wir', 'am Sonntag', 'zusammen', 'brunchen?'], { task: 'Bau den Vorschlag.', taskEn: 'Build the suggestion.' }),
    checklist('w-check', ['Ich kann mich und andere ausführlich vorstellen.', 'Ich kann sagen, was ich am Wochenende gemacht habe.', 'Ich kann mich verabreden.', 'Ich kann mit weil einen Grund nennen.', 'Ich kann im Restaurant reservieren und bestellen.']),
  ]);

export const a2k1: Chapter = {
  id: 'a2-k1', number: 1, title: 'Und was machst du?', theme: 'Freizeit, Vergangenes, Verabredungen, Restaurant',
  grammar: 'Genitiv bei Namen. Wiederholung Perfekt. Nebensatz mit weil.',
  sections: [einstieg, teil1, teil2, teil3, wg, grammatik, uebungen, wortschatz],
  games: ['a2k1-sprint', 'a2k1-memory', 'a2k1-satzbau', 'a2k1-artikel'],
  exam: [
    x(1, mcq('x1', 'Das ist ___ Handy. (Amara)', ['Amaras', 'Amara’s', 'Amarases'], 0)),
    x(1, mcq('x2', 'Gestern ___ wir ins Kino gegangen.', ['haben', 'sind', 'waren'], 1)),
    x(1, mcq('x3', 'Ich komme nicht, weil ich keine Zeit ___.', ['habe', 'hat', 'haben'], 0)),
    x(3, gap('x4', ['Sie lernt, weil sie eine Prüfung {{hat}}. (haben)', 'Er bleibt zu Hause, weil er krank {{ist}}. (sein)', 'Wir gehen früh, weil wir morgen arbeiten {{müssen}}. (müssen)'], { task: 'Ergänze das Verb.' })),
    x(3, gap('x5', ['Ich habe einen Kuchen {{gebacken}}. (backen)', 'Wir sind nach Berlin {{gefahren}}. (fahren)', 'Hast du das Rezept {{ausprobiert}}? (ausprobieren)'], { task: 'Partizip II.' })),
    x(1, mcq('x6', 'Warum kann Sven am Samstag nicht?', ['Er muss arbeiten.', 'Er besucht seine Eltern.', 'Er ist krank.'], 1),
      audio('x-st1', 'Hören: Eine Verabredung', [
        ['elif', 'Hey Sven, wollen wir am Samstag zusammen joggen?'],
        ['ben', 'Samstag geht leider nicht. Ich besuche meine Eltern in Halle.'],
        ['elif', 'Schade. Und am Sonntag?'],
        ['ben', 'Sonntag passt. Aber nicht so früh, bitte. Wie wäre es mit elf Uhr?'],
        ['elif', 'Okay, abgemacht. Wir treffen uns am Park.'],
      ])),
    x(1, mcq('x7', 'Wann joggen die beiden? (Hörtext oben)', ['Samstag um elf', 'Sonntag um elf', 'Sonntag um acht'], 1)),
    x(1, mcq('x8', 'Was gibt es am Montag im Restaurant „Zur Linde“?', ['Mittagsmenü für 9,90 €', 'Ruhetag', 'Live-Musik'], 1),
      text('x-st2', '**Restaurant „Zur Linde“**\nÖffnungszeiten: Dienstag bis Sonntag 11:30 bis 22 Uhr, Montag Ruhetag.\nMittagsmenü (Dienstag bis Freitag): Suppe und Hauptgericht für 9,90 €.\nJeden Freitag ab 20 Uhr: Live-Musik.\nTischreservierung bitte telefonisch.', { kicker: 'Lesen' })),
    x(1, mcq('x9', 'Wann kann man Live-Musik hören? (Text oben)', ['dienstags', 'freitags', 'sonntags'], 1)),
    x(2, order('x10', ['Ich', 'bleibe', 'zu Hause,', 'weil', 'es', 'regnet.'], { task: 'Bau den Satz.' })),
    x(1, mcq('x11', 'Du möchtest einen Tisch im Restaurant. Was sagst du?', ['Ich möchte einen Tisch reservieren.', 'Ich möchte einen Tisch kaufen.', 'Ich möchte einen Tisch bestellen essen.'], 0)),
    x(1, mcq('x12', 'Was isst man nach dem Hauptgericht?', ['die Vorspeise', 'den Nachtisch', 'die Speisekarte'], 1)),
  ],
};

export const gamesA2k1: GameDef[] = [
  {
    id: 'a2k1-sprint', engine: 'sprint', title: 'Perfekt-Sprint', blurb: 'haben oder sein? 60 Sekunden!', skill: 'Perfekt', tone: 'mint', chapter: 1, emoji: '⚡',
    rules: 'Du siehst einen Satz im Perfekt. Tippe auf das richtige Hilfsverb.', label: 'haben oder sein?',
    items: [
      { q: 'Ich ___ geklettert.', a: 'bin', wrong: ['habe', 'hat'] }, { q: 'Wir ___ gekocht.', a: 'haben', wrong: ['sind', 'hat'] },
      { q: 'Er ___ früh aufgestanden.', a: 'ist', wrong: ['hat', 'sind'] }, { q: 'Du ___ nicht aufgegeben.', a: 'hast', wrong: ['bist', 'hat'] },
      { q: 'Sie ___ nach Wien gefahren.', a: 'ist', wrong: ['hat', 'haben'] }, { q: 'Ihr ___ viel gelacht.', a: 'habt', wrong: ['seid', 'hat'] },
      { q: 'Was ___ passiert?', a: 'ist', wrong: ['hat', 'sind'] }, { q: 'Ich ___ zu Hause geblieben.', a: 'bin', wrong: ['habe', 'ist'] },
      { q: 'Kenji ___ Rezepte ausprobiert.', a: 'hat', wrong: ['ist', 'haben'] }, { q: 'Wir ___ eingeschlafen.', a: 'sind', wrong: ['haben', 'seid'] },
      { q: 'Nele ___ einen Kuchen gebacken.', a: 'hat', wrong: ['ist', 'hast'] }, { q: 'Die Gäste ___ gekommen.', a: 'sind', wrong: ['haben', 'ist'] },
    ],
  },
  {
    id: 'a2k1-memory', engine: 'memory', title: 'Freizeit-Memory', blurb: 'Aktivität und Bild: Finde die Paare.', skill: 'Freizeit', tone: 'lilac', chapter: 1, emoji: '🃏',
    rules: 'Dreh zwei Karten um. Ein Paar ist eine Aktivität und das passende Bild.', kinds: ['Wort', 'Bild'],
    pairs: [['klettern', '🧗'], ['joggen', '🏃'], ['Yoga machen', '🧘'], ['backen', '🧁'], ['gärtnern', '🌱'], ['angeln', '🎣'], ['Ski fahren', '⛷️'], ['zeichnen', '✏️'], ['Brettspiele spielen', '🎲'], ['im Chor singen', '🎶']],
  },
  {
    id: 'a2k1-satzbau', engine: 'satzbau', title: 'weil-Baukasten', blurb: 'Das Verb muss ans Ende!', skill: 'Nebensatz mit weil', tone: 'sky', chapter: 1, emoji: '🧱',
    rules: 'Tippe die Wörter in der richtigen Reihenfolge an. Im weil-Satz steht das Verb am Ende.',
    sentences: [
      { parts: ['Ich bleibe zu Hause,', 'weil', 'ich', 'müde', 'bin.'], hint: 'Verb ans Ende' },
      { parts: ['Felix übt viel,', 'weil', 'er', 'ein Konzert', 'hat.'], hint: 'Verb ans Ende' },
      { parts: ['Amara kommt nicht,', 'weil', 'sie', 'arbeiten', 'muss.'], hint: 'Modalverb ganz am Ende' },
      { parts: ['Kenji ist froh,', 'weil', 'die Gäste', 'wiederkommen.'], hint: 'trennbar: zusammen am Ende' },
      { parts: ['Ich bin müde,', 'weil', 'ich', 'geklettert', 'bin.'], hint: 'Perfekt: Hilfsverb am Ende' },
      { parts: ['Das ist', 'Kenjis', 'neues', 'Restaurant.'], hint: 'Genitiv: Kenjis' },
      { parts: ['Wir', 'haben', 'am Sonntag', 'gekocht.'], hint: 'Perfekt' },
      { parts: ['Hast', 'du', 'am Samstag', 'Zeit?'], hint: 'Ja/Nein-Frage' },
    ],
  },
  {
    id: 'a2k1-artikel', engine: 'regen', title: 'Artikel-Regen', blurb: 'der, die oder das? Freizeit und Restaurant.', skill: 'Artikel', tone: 'rose', chapter: 1, emoji: '☔',
    rules: 'Ein Nomen fällt herunter. Tippe auf den richtigen Artikel.', buckets: ['der', 'die', 'das'],
    words: artikel('der Nachtisch, das Gericht, die Speisekarte, der Gang, das Menü, die Vorspeise, der Verein, das Hobby, die Freizeit, der Grund, das Rezept, die Reservierung, der Gast, das Hauptgericht, die Verabredung, der Koch, das Konzert, die Kletterhalle'),
  },
];
