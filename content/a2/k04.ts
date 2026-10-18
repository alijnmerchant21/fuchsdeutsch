import type { Chapter, GameDef, GlossaryEntry } from '../types';
import { artikel, audio, cards, checklist, compose, gap, grammar, match, mcq, order, overview, phrases, section, sort, text, tip, x } from '../helpers';

// A2 Kapitel 4: Gefühle, Feste, Glückwünsche, Dank, Blogs.
// Grammar: Nebensatz mit wenn, reflexive Verben. Aussprache: emotionales Sprechen.

export const glossaryA2k4: Record<string, GlossaryEntry> = {
  Gefühl: { de: 'Was man innen spürt: Freude, Angst, Wut, Liebe.', en: 'feeling, emotion' },
  Laune: { de: 'Wie man sich gerade fühlt. „Ich habe gute Laune.“', en: 'mood' },
  sichFreuen: { de: 'Froh sein. „sich freuen auf“ = auf etwas in der Zukunft; „sich freuen über“ = über etwas jetzt.', en: 'to be happy, to look forward to' },
  sichÄrgern: { de: 'Wütend sein, weil etwas nicht gut ist.', en: 'to be annoyed' },
  enttäuscht: { de: 'Traurig, weil etwas nicht so gut war wie erhofft.', en: 'disappointed' },
  gratulieren: { de: 'Jemandem zu einem Erfolg oder Fest „Herzlichen Glückwunsch“ sagen.', en: 'to congratulate' },
  Hochzeit: { de: 'Das Fest, wenn zwei Menschen heiraten.', en: 'wedding' },
  Brauch: { de: 'Etwas, das man an einem Fest traditionell macht.', en: 'custom, tradition' },
  Veranstaltung: { de: 'Ein organisiertes Ereignis: Konzert, Fest, Vortrag.', en: 'event' },
  Blog: { de: 'Eine Webseite, auf der jemand regelmäßig Texte über sein Leben oder ein Thema schreibt.', en: 'blog' },
  Bedauern: { de: 'Das Gefühl: Schade, dass es so ist.', en: 'regret' },
};

const einstieg = section('einstieg', 'einstieg', 'Einstieg', 'Wie fühlst du dich?', 'butter', 8,
  ['das Kapitel kennenlernen', 'Gefühle benennen'], [
    overview('e-over', 'Kapitel 4: Große und kleine Gefühle',
      'Freude, Angst, Ärger, Liebe: In Kapitel 4 geht es um [[Gefühl|Gefühle]]. Du sagst, wie du dich fühlst, [[gratulieren|gratulierst]] zu Festen und bedankst dich. Du lernst Feste und ihre [[Brauch|Bräuche]] kennen und liest einen [[Blog]] über eine [[Veranstaltung]].\n\nIn der WG ist die Stimmung schlecht: Felix hat schlechte [[Laune]]. Und dann kommt eine Nachricht, die alles verändert.',
      'This chapter is about feelings, celebrations and congratulations. You will express joy and regret, thank people and read a blog about an event. Grammar: wenn clauses (when, if), with the verb at the end, and reflexive verbs like sich freuen and sich ärgern.',
      ['über Gefühle sprechen', 'gratulieren und sich bedanken', 'Freude und Bedauern ausdrücken', 'über ein Fest berichten']),
    match('e-match', [['glücklich', '😊'], ['traurig', '😢'], ['wütend', '😠'], ['überrascht', '😲'], ['nervös', '😬'], ['verliebt', '😍'], ['müde', '😴'], ['ängstlich', '😨']],
      { task: 'Welches Gefühl ist das?', taskEn: 'Match the feeling to the face.' }),
    sort('e-sort', ['positiv', 'negativ'], [['die Freude', 0], ['die Angst', 1], ['die Liebe', 0], ['der Ärger', 1], ['der Stolz', 0], ['die Enttäuschung', 1]], { task: 'Positiv oder negativ?', taskEn: 'Positive or negative feeling?' }),
  ]);

const teil1 = section('teil-1', 'modul', 'Teil 1', 'Wenn ich glücklich bin …', 'mint', 15,
  ['über Gefühle sprechen', 'Nebensatz mit wenn'], [
    audio('t1-audio', 'Hören: Podcast „Gefühlssache“', [
      ['ben', 'Willkommen bei „Gefühlssache“! Heute fragen wir: Was macht ihr, wenn ihr schlechte Laune habt?'],
      ['resi', 'Wenn ich schlechte Laune habe, gehe ich in die Berge. Oben auf dem Berg ist der Ärger weg. Immer!'],
      ['tomasz', 'Ich koche. Wenn ich koche, denke ich an nichts anderes. Und danach esse ich etwas Leckeres.'],
      ['jule', 'Bei mir ist es Musik. Wenn ich traurig bin, höre ich ganz laut traurige Lieder. Dann weine ich ein bisschen und dann geht es mir besser.'],
      ['ben', 'Und wenn ihr glücklich seid?'],
      ['resi', 'Dann rufe ich meine Schwester an. Ich muss meine Freude teilen!'],
    ], { task: 'Hör den Podcast.', taskEn: 'Listen to the podcast. What do people do when they are in a bad mood?' }),
    match('t1-match', [['Resi', 'geht in die Berge'], ['Tomasz', 'kocht'], ['Jule', 'hört laute Musik']], { task: 'Was machen sie bei schlechter Laune?', taskEn: 'What do they do when they are in a bad mood?' }),
    mcq('t1-q1', 'Was macht Resi, wenn sie glücklich ist?', ['Sie geht in die Berge.', 'Sie ruft ihre Schwester an.', 'Sie kocht.'], 1),
    grammar('t1-gram', 'Der Nebensatz mit wenn', {
      intro: '**wenn** nennt eine Bedingung oder eine Situation, die oft passiert. Das Verb steht **am Ende**.',
      head: ['', 'Beispiel'],
      rows: [['Hauptsatz + wenn', 'Ich gehe in die Berge, **wenn** ich schlechte Laune **habe**.'], ['wenn + Hauptsatz', '**Wenn** ich schlechte Laune **habe**, **gehe** ich in die Berge.'], ['mit Modalverb', '**Wenn** du Zeit **hast**, **kannst** du mitkommen.']],
      notes: ['Beginnt der Satz mit dem wenn-Satz, steht das Verb vom Hauptsatz **direkt nach dem Komma**: *Wenn ich traurig bin, **höre** ich Musik.* Verb, Komma, Verb!', 'Oft beginnt der Hauptsatz mit **dann**: *Wenn ich koche, **dann** denke ich an nichts.*'],
      en: 'wenn = when (repeated situations) or if (condition). The verb goes to the end. If the sentence starts with the wenn clause, the main clause starts with its verb: Wenn ich traurig bin, höre ich Musik (verb, comma, verb).',
    }),
    order('t1-order', ['Wenn', 'ich müde bin,', 'trinke', 'ich', 'Kaffee.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence: verb, comma, verb.' }),
    gap('t1-gap', ['Wenn ich Zeit {{habe}}, lese ich. (haben)', 'Wenn es regnet, {{bleibe}} ich zu Hause. (bleiben)', 'Ich bin froh, wenn die Sonne {{scheint}}. (scheinen)', 'Wenn du willst, {{kannst}} du mitkommen. (können)'],
      { task: 'Ergänze das Verb.', taskEn: 'Fill in the verb in the right place.' }),
    compose('t1-comp', 'Was machst du in diesen Situationen?', [
      ['Du bist traurig.', 'You are sad.', ['Wenn', 'ich traurig bin,', 'rufe ich', 'meine Freundin an.']],
      ['Du hast Stress.', 'You are stressed.', ['Wenn', 'ich Stress habe,', 'gehe ich', 'spazieren.']],
      ['Du bist glücklich.', 'You are happy.', ['Wenn', 'ich glücklich bin,', 'singe ich', 'laut.']],
    ], { task: 'Bau die Sätze mit wenn.', taskEn: 'Build the sentences with wenn.' }),
  ]);

const teil2 = section('teil-2', 'modul', 'Teil 2', 'Ich freue mich!', 'sky', 15,
  ['reflexive Verben', 'gratulieren und sich bedanken'], [
    grammar('t2-gram', 'Reflexive Verben', {
      intro: 'Reflexive Verben haben ein **Reflexivpronomen**: Die Handlung geht zurück zur Person.',
      head: ['', 'sich freuen', 'Reflexivpronomen'],
      rows: [['ich', 'freue **mich**', 'mich'], ['du', 'freust **dich**', 'dich'], ['er/sie/es', 'freut **sich**', 'sich'], ['wir', 'freuen **uns**', 'uns'], ['ihr', 'freut **euch**', 'euch'], ['sie/Sie', 'freuen **sich**', 'sich']],
      notes: ['Wichtige reflexive Verben: sich freuen, sich ärgern, sich fühlen, sich verlieben, sich entschuldigen, sich bedanken, sich treffen, sich beeilen, sich erinnern.', '**sich freuen auf** + Akk.: auf etwas in der Zukunft. *Ich freue mich **auf** den Urlaub.*', '**sich freuen über** + Akk.: über etwas jetzt oder vorbei. *Ich freue mich **über** das Geschenk.*', '**sich ärgern über** + Akk.: *Er ärgert sich **über** den Regen.*'],
      en: 'Reflexive verbs take a pronoun that refers back to the subject: ich freue mich, du freust dich, er freut sich. sich freuen auf = look forward to, sich freuen über = be happy about.',
    }),
    gap('t2-gap', ['Ich freue {{mich}} auf das Wochenende.', 'Ärgerst du {{dich}} über den Chef?', 'Felix hat {{sich}} verliebt.', 'Wir treffen {{uns}} um acht.', 'Habt ihr {{euch}} schon entschuldigt?'],
      { bank: ['mich', 'dich', 'sich', 'uns', 'euch'], task: 'Ergänze das Reflexivpronomen.', taskEn: 'Fill in the reflexive pronoun.' }),
    sort('t2-sort', ['sich freuen auf (Zukunft)', 'sich freuen über (jetzt, vorbei)'], [['den Urlaub nächste Woche', 0], ['das schöne Geschenk', 1], ['die Party am Samstag', 0], ['die gute Note', 1], ['das Konzert morgen', 0], ['den Anruf von gestern', 1]],
      { task: 'auf oder über?', taskEn: 'Sort: looking forward to something (auf) or happy about something now (über)?' }),
    text('t2-text', `**Glückwunschkarten**

1. *Liebe Mira, lieber Jan, herzlichen Glückwunsch zur Hochzeit! Wir wünschen euch alles Liebe für die gemeinsame Zukunft. Eure Nachbarn*

2. *Lieber Paul, alles Gute zum 40. Geburtstag! Bleib so, wie du bist. Deine Kolleginnen*

3. *Liebe Familie Weber, wir gratulieren herzlich zur Geburt von Emma! Wir freuen uns mit euch. Viel Glück und wenig schlaflose Nächte! Familie Okafor*

4. *Liebe Frau Kraus, vielen Dank für die tolle Zeit im Team. Zum Ruhestand wünschen wir Ihnen viel Gesundheit und viel Zeit für Ihren Garten!*`, { kicker: 'Lesen', task: 'Lies die Karten.', taskEn: 'Read the greeting cards. Ruhestand = retirement.' }),
    match('t2-match', [['Karte 1', 'Hochzeit'], ['Karte 2', 'Geburtstag'], ['Karte 3', 'Geburt'], ['Karte 4', 'Ruhestand']], { task: 'Welcher Anlass?', taskEn: 'Match the card to the occasion.' }),
    phrases('t2-phr', 'Glückwünsche und Dank', {
      'Gratulieren': ['Herzlichen Glückwunsch zum Geburtstag / zur Hochzeit!', 'Alles Gute!', 'Ich gratuliere dir!'],
      'Wünschen': ['Viel Glück!', 'Alles Liebe!', 'Gute Besserung!'],
      'Danken': ['Vielen Dank für …', 'Ich danke dir / Ihnen.', 'Das ist sehr nett von dir!'],
    }),
  ]);

const teil3 = section('teil-3', 'modul', 'Teil 3', 'Ein Fest im Norden', 'lilac', 15,
  ['einen Blog über eine Veranstaltung verstehen', 'Freude und Bedauern ausdrücken', 'Texte strukturieren'], [
    text('t3-text', `**Amaras Blog: Neu in Deutschland**
**Feuer gegen den Winter**

Letztes Wochenende war ich mit Kollegen an der Nordsee, in Nordfriesland. Am 21. Februar feiert man dort das **Biikebrennen**. Ich hatte noch nie davon gehört!

**Zuerst** sind wir am Abend an den Strand gegangen. Dort war ein riesiger Haufen aus Holz. **Dann** haben Kinder mit Fackeln das Feuer angezündet. Das Feuer war mehrere Meter hoch! Früher hat man so die Seeleute verabschiedet. Heute verabschiedet man symbolisch den Winter.

**Danach** haben wir im Gasthaus Grünkohl gegessen. Das ist ein typisches Essen im Norden. Ehrlich gesagt: Er hat mir nicht so gut geschmeckt. **Zum Schluss** haben alle zusammen gesungen.

Ich habe mich wirklich wohl gefühlt. Wenn man ein neues Land kennenlernen will, muss man seine Feste feiern! Schade nur, dass es so kalt war: minus zwei Grad und viel Wind.`,
      { kicker: 'Lesen', title: 'Ein Blogbeitrag', task: 'Lies Amaras Blog.', taskEn: 'Read Amara’s blog post about a festival in northern Germany. Fackel = torch.' }),
    mcq('t3-q1', 'Was verabschiedet man heute beim Biikebrennen?', ['die Seeleute', 'den Winter', 'den Sommer'], 1),
    mcq('t3-q2', 'Wie fand Amara den Grünkohl?', ['sehr lecker', 'nicht so gut', 'zu scharf'], 1),
    mcq('t3-q3', 'Was war schade?', ['Das Feuer war zu klein.', 'Es war kalt und windig.', 'Niemand hat gesungen.'], 1),
    order('t3-order', ['Zuerst', 'Dann', 'Danach', 'Zum Schluss'], { task: 'In welcher Reihenfolge benutzt man diese Wörter in einem Text?', taskEn: 'Put the sequencing words in order. They help structure a text.' }),
    phrases('t3-phr', 'Freude und Bedauern ausdrücken', {
      'Freude': ['Wie schön!', 'Das freut mich sehr!', 'Toll, dass du kommst!'],
      'Bedauern': ['Schade, dass …', 'Das tut mir leid.', 'Wie schade!'],
    }),
    tip('t3-tip', 'Texte strukturieren', 'Mit **zuerst, dann, danach, später** und **zum Schluss** wird ein Text klarer. Achtung: Nach diesen Wörtern kommt das **Verb auf Position 2**: *Zuerst **sind** wir zum Strand gegangen. Dann **haben** Kinder das Feuer angezündet.*'),
    compose('t3-comp', 'Schreib über ein Fest, das du besucht hast.', [
      ['Was war zuerst?', 'What happened first?', ['Zuerst', 'haben', 'wir', 'zusammen gegessen.']],
      ['Was war dann?', 'What happened next?', ['Dann', 'haben', 'alle', 'getanzt.']],
      ['Was war zum Schluss?', 'What happened at the end?', ['Zum Schluss', 'gab es', 'ein', 'Feuerwerk.']],
      ['Wie war es?', 'How was it?', ['Ich', 'habe mich', 'sehr wohl', 'gefühlt.']],
    ], { task: 'Bau den Text.', taskEn: 'Build the text.' }),
  ]);

const wg = section('wg', 'kommunikation', 'Die Fuchsbau-WG', 'Folge 4: Schlechte Laune, gute Nachricht', 'rose', 10,
  ['eine Geschichte hören', 'Gefühle im Kontext'], [
    text('wg-intro', 'Felix sitzt seit zwei Tagen in seinem Zimmer. Er spricht mit niemandem. Nele klopft an seine Tür.', { kicker: 'Die Geschichte', en: 'Felix has been sitting in his room for two days. He is not talking to anyone. Nele knocks on his door.' }),
    audio('wg-audio', 'Folge 4: Schlechte Laune, gute Nachricht', [
      ['nele', 'Felix? Darf ich reinkommen? Was ist los?'],
      ['felix', 'Ach, nichts. Doch. Das Festival hat unsere Band abgesagt. Wir dürfen nicht spielen. Ich ärgere mich so!'],
      ['nele', 'Oh nein, das tut mir leid. Ihr habt euch so darauf gefreut.'],
      ['felix', 'Ein halbes Jahr haben wir geübt. Für nichts.'],
      ['amara', 'Leute, kommt mal in die Küche! Kenji hat eine Nachricht bekommen!'],
      ['kenji', 'Hört mal: Ein Restaurant in Wien hat von meinem Pop-up gelesen. Sie laden mich zum Probearbeiten ein!'],
      ['nele', 'Wahnsinn! Herzlichen Glückwunsch!'],
      ['felix', 'Wien? Meine Heimat! Kenji, das ist ja großartig! Ich komme mit und zeige dir die Stadt.'],
      ['amara', 'Na, Felix, das ist ja schnell gegangen mit der guten Laune.'],
      ['felix', 'Wenn ein Freund so eine Chance bekommt, kann ich mich doch nicht ärgern!'],
    ], { task: 'Hör die Geschichte.', taskEn: 'Listen to the story. Probearbeiten = a trial work day.' }),
    mcq('wg-q1', 'Warum hat Felix schlechte Laune?', ['Er ist krank.', 'Das Festival hat seine Band abgesagt.', 'Lina hat ihn verlassen.'], 1),
    mcq('wg-q2', 'Was hat Kenji bekommen?', ['eine Einladung zum Probearbeiten', 'einen Preis', 'ein Kochbuch'], 0),
    mcq('wg-q3', 'Warum freut sich Felix besonders?', ['Wien ist seine Heimat.', 'Er bekommt auch einen Job.', 'Er mag Restaurants.'], 0),
  ]);

const grammatik = section('grammatik', 'grammatik', 'Grammatik', 'Alles auf einen Blick', 'peach', 10,
  ['wenn', 'reflexive Verben'], [
    grammar('g-1', 'Nebensatz zuerst: Verb, Komma, Verb', {
      head: ['Nebensatz', '', 'Hauptsatz'],
      rows: [['Wenn ich Zeit **habe**,', '→', '**gehe** ich ins Kino.'], ['Weil es **regnet**,', '→', '**bleiben** wir zu Hause.'], ['Wenn du **willst**,', '→', '**kannst** du mitkommen.']],
      en: 'When a sentence starts with a subordinate clause, the main clause starts with its verb.',
    }),
    grammar('g-2', 'Reflexivpronomen', {
      head: ['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie'],
      rows: [['mich', 'dich', 'sich', 'uns', 'euch', 'sich']],
      en: 'Reflexive pronouns in the accusative.',
    }),
    mcq('g-q1', 'Wenn das Wetter schön ist, ___ wir an den See.', ['fahren', 'wir fahren', 'fahren wir nicht'], 0),
    mcq('g-q2', 'Nele freut ___ auf den Urlaub.', ['sie', 'sich', 'ihr'], 1),
    mcq('g-q3', 'Ich ärgere mich ___ den Regen.', ['auf', 'über', 'für'], 1),
  ]);

const uebungen = section('uebungen', 'uebung', 'Übungen', 'Training', 'butter', 15,
  ['gratulieren', 'Aussprache: emotional sprechen'], [
    compose('u-comp', 'Deine Kollegin hat ein Baby bekommen. Schreib eine Karte.', [
      ['Anrede und Glückwunsch', 'Greeting and congratulations', ['Liebe Sara,', 'herzlichen Glückwunsch', 'zur Geburt!']],
      ['Sag, dass du dich freust.', 'Say you are happy for her.', ['Wir', 'freuen uns', 'sehr', 'mit dir.']],
      ['Wünsch ihr etwas.', 'Wish her something.', ['Alles Liebe', 'für euch', 'drei!']],
    ], { task: 'Bau die Karte.', taskEn: 'Build the card.' }),
    audio('u-aus', 'Aussprache: emotional sprechen', [
      ['frauKlein', 'Hör zu. Neutral: Das ist schön.'],
      ['frauKlein', 'Begeistert: Das ist ja toll! Wie schön!'],
      ['frauKlein', 'Enttäuscht: Ach, schade. Das ist nicht so gut.'],
      ['frauKlein', 'Überrascht: Was? Wirklich? Das gibt’s ja nicht!'],
      ['frauKlein', 'Bei starken Gefühlen spricht man das wichtige Wort lauter und die Melodie geht weiter hoch oder runter.'],
    ], { task: 'Hör zu und sprich nach.', taskEn: 'Listen and repeat with feeling. Strong emotions make the key word louder and the melody bigger.' }),
    match('u-match', [['Das gibt’s ja nicht!', 'überrascht'], ['Wie schön!', 'begeistert'], ['Ach, schade.', 'enttäuscht'], ['Das nervt!', 'genervt']], { task: 'Welches Gefühl?', taskEn: 'Which feeling does the phrase show?' }),
    order('u-order', ['Ich', 'freue mich', 'auf', 'die Party.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence.' }),
  ]);

const wortschatz = section('wortschatz', 'wortschatz', 'Wortschatz und Check', 'Das kann ich jetzt', 'mint', 8,
  ['Wörter wiederholen', 'den Stand einschätzen'], [
    cards('w-cards', [
      ['das Gefühl', 'Freude, Angst, Wut …', 'feeling'], ['die Laune', 'gute oder schlechte Stimmung', 'mood'], ['sich freuen auf', 'an etwas Schönes in der Zukunft denken', 'to look forward to'],
      ['sich ärgern über', 'wütend sein wegen etwas', 'to be annoyed about'], ['enttäuscht', 'traurig, weil es nicht gut war', 'disappointed'], ['überrascht', 'Das habe ich nicht erwartet!', 'surprised'],
      ['gratulieren', 'Glückwünsche sagen', 'to congratulate'], ['die Hochzeit', 'Fest beim Heiraten', 'wedding'], ['die Geburt', 'ein Baby kommt', 'birth'],
      ['der Brauch', 'Tradition an einem Fest', 'custom'], ['Schade!', 'Das ist nicht gut.', 'What a pity!'], ['sich wohlfühlen', 'sich gut und sicher fühlen', 'to feel at ease'],
    ]),
    phrases('w-x-phr', 'Sich entschuldigen und reagieren', {
      'sich entschuldigen': ['Das tut mir wirklich leid.', 'Entschuldige bitte, das wollte ich nicht.'],
      'reagieren': ['Das macht nichts.', 'Keine Sorge, es geht schon wieder.', 'Es ist alles okay.'],
      'gratulieren': ['Herzlichen Glückwunsch!', 'Ich freue mich für dich!'],
    }),
    match('w-x-match', [['die Hochzeit', 'zwei Menschen heiraten'], ['die Geburt', 'ein Baby kommt'], ['der erste Schultag', 'ein Kind kommt in die Schule'], ['die Führerscheinprüfung', 'man lernt Auto fahren'], ['der erste Platz', 'man gewinnt'], ['neu in der Firma', 'der erste Arbeitstag']],
      { task: 'Große Momente', taskEn: 'Big moments in life. Match.' }),
    gap('w-x-gap', ['Wenn ich müde {{bin}}, schlafe ich eine halbe Stunde.', 'Wenn Amara Kopfschmerzen hat, {{trinkt}} sie viel Wasser.', 'Felix ärgert {{sich}}, wenn der Bus zu spät kommt.', 'Wir freuen {{uns}} auf das Wochenende.'],
      { bank: ['bin', 'trinkt', 'sich', 'uns'], task: 'Ergänze.', taskEn: 'Fill in: wenn clauses and reflexive pronouns.' }),
    mcq('w-x-q1', '___ ich mein Handy nicht finde, werde ich nervös.', ['Wenn', 'Weil', 'Dass'], 0, { task: 'Welches Wort passt?', taskEn: 'Which word fits?', why: 'Bedingung oder Situation: wenn.' }),
    mcq('w-x-q2', 'Kenji freut ___ über das Geschenk.', ['sich', 'ihn', 'ihm'], 0),
    order('w-x-order', ['Wenn', 'Kenji', 'Zeit', 'hat,', 'kocht', 'er', 'gern.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence. After the wenn clause the main verb comes first.' }),
    checklist('w-check', ['Ich kann über Gefühle sprechen.', 'Ich kann Sätze mit wenn bilden.', 'Ich kenne reflexive Verben.', 'Ich kann gratulieren und mich bedanken.', 'Ich kann einen Text mit zuerst, dann, danach strukturieren.']),
  ]);

export const a2k4: Chapter = {
  id: 'a2-k4', number: 4, title: 'Große und kleine Gefühle', theme: 'Gefühle, Feste, Glückwünsche, Blogs',
  grammar: 'Nebensatz mit wenn. Reflexive Verben.',
  sections: [einstieg, teil1, teil2, teil3, wg, grammatik, uebungen, wortschatz],
  games: ['a2k4-sprint', 'a2k4-memory', 'a2k4-satzbau', 'a2k4-artikel'],
  exam: [
    x(1, mcq('x1', 'Wenn ich Hunger habe, ___ ich einen Apfel.', ['esse', 'ich esse', 'essen'], 0)),
    x(1, mcq('x2', 'Wir freuen ___ auf die Ferien.', ['sich', 'uns', 'euch'], 1)),
    x(1, mcq('x3', 'Er freut sich ___ das Geschenk. (Er hat es gerade bekommen.)', ['auf', 'über', 'an'], 1)),
    x(4, gap('x4', ['Ich beeile {{mich}}.', 'Du fühlst {{dich}} nicht gut.', 'Sie treffen {{sich}} im Café.', 'Wir erinnern {{uns}} an den Urlaub.'], { task: 'Reflexivpronomen.' })),
    x(2, gap('x5', ['Wenn es kalt {{ist}}, trage ich eine Mütze. (sein)', 'Wenn du müde bist, {{musst}} du schlafen. (müssen)'], { task: 'wenn-Sätze.' })),
    x(1, mcq('x6', 'Warum ruft Mia an?', ['Sie hat Geburtstag.', 'Sie hat die Prüfung bestanden.', 'Sie heiratet.'], 2),
      audio('x-st1', 'Hören: Eine gute Nachricht', [
        ['elif', 'Hallo Oma! Ich habe eine Überraschung: Tobias und ich heiraten im Juni!'],
        ['frauHuber', 'Na, so was! Mia, das ist ja wunderbar! Herzlichen Glückwunsch, mein Schatz!'],
        ['elif', 'Danke, Oma! Und natürlich musst du kommen. Die Feier ist in Wien.'],
        ['frauHuber', 'In Wien? Da komme ich sicher. Ich freue mich so!'],
      ])),
    x(1, mcq('x7', 'Wo ist die Feier? (Hörtext oben)', ['in Graz', 'in Wien', 'in Berlin'], 1)),
    x(1, mcq('x8', 'Was bekommt man beim Stadtfest kostenlos?', ['Essen', 'Eintritt', 'Getränke'], 1),
      text('x-st2', '**Stadtfest Leipzig, 6. bis 8. Juni**\nLive-Musik auf drei Bühnen, Essen aus 20 Ländern, Kinderprogramm.\nDer Eintritt ist frei!\nSamstag, 22 Uhr: großes Feuerwerk am See.\nBitte kommen Sie mit Bus und Bahn, es gibt keine Parkplätze.', { kicker: 'Lesen' })),
    x(1, mcq('x9', 'Wie soll man zum Fest kommen? (Text oben)', ['mit dem Auto', 'mit Bus und Bahn', 'mit dem Taxi'], 1)),
    x(2, order('x10', ['Wenn', 'ich traurig bin,', 'höre', 'ich', 'Musik.'], { task: 'Bau den Satz.' })),
    x(1, mcq('x11', 'Deine Freundin ist krank. Was wünschst du ihr?', ['Gute Besserung!', 'Herzlichen Glückwunsch!', 'Guten Appetit!'], 0)),
    x(1, mcq('x12', 'Was sagt man, wenn man etwas bedauert?', ['Wie schön!', 'Schade, dass du nicht kommst.', 'Toll!'], 1)),
  ],
};

export const gamesA2k4: GameDef[] = [
  {
    id: 'a2k4-sprint', engine: 'sprint', title: 'Reflexiv-Sprint', blurb: 'mich, dich oder sich? Schnell!', skill: 'Reflexive Verben', tone: 'mint', chapter: 4, emoji: '⚡',
    rules: 'Du siehst einen Satz. Tippe auf das richtige Reflexivpronomen.', label: 'Welches Pronomen?',
    items: [
      { q: 'Ich freue ___.', a: 'mich', wrong: ['mir', 'sich'] }, { q: 'Du ärgerst ___.', a: 'dich', wrong: ['dir', 'sich'] },
      { q: 'Er fühlt ___ gut.', a: 'sich', wrong: ['ihn', 'ihm'] }, { q: 'Wir treffen ___ um acht.', a: 'uns', wrong: ['sich', 'wir'] },
      { q: 'Ihr beeilt ___.', a: 'euch', wrong: ['sich', 'ihr'] }, { q: 'Sie verlieben ___. (Plural)', a: 'sich', wrong: ['ihnen', 'sie'] },
      { q: 'Ich erinnere ___ an dich.', a: 'mich', wrong: ['mir', 'mein'] }, { q: 'Freust du ___ auf morgen?', a: 'dich', wrong: ['dir', 'du'] },
      { q: 'Nele entschuldigt ___.', a: 'sich', wrong: ['ihr', 'sie'] }, { q: 'Wir freuen ___ über das Geschenk.', a: 'uns', wrong: ['euch', 'sich'] },
      { q: 'Habt ihr ___ verliebt?', a: 'euch', wrong: ['uns', 'sich'] }, { q: 'Sie bedankt ___. (Singular)', a: 'sich', wrong: ['ihr', 'ihn'] },
    ],
  },
  {
    id: 'a2k4-memory', engine: 'memory', title: 'Gefühle-Memory', blurb: 'Gefühl und Gesicht: Finde die Paare.', skill: 'Gefühle', tone: 'lilac', chapter: 4, emoji: '🃏',
    rules: 'Dreh zwei Karten um. Ein Paar ist ein Gefühl und das passende Gesicht.', kinds: ['Wort', 'Bild'],
    pairs: [['glücklich', '😊'], ['traurig', '😢'], ['wütend', '😠'], ['überrascht', '😲'], ['nervös', '😬'], ['verliebt', '😍'], ['müde', '😴'], ['ängstlich', '😨'], ['gelangweilt', '😑'], ['stolz', '😌']],
  },
  {
    id: 'a2k4-satzbau', engine: 'satzbau', title: 'wenn-Baukasten', blurb: 'Verb, Komma, Verb!', skill: 'Nebensatz mit wenn', tone: 'sky', chapter: 4, emoji: '🧱',
    rules: 'Tippe die Wörter in der richtigen Reihenfolge an.',
    sentences: [
      { parts: ['Wenn', 'ich', 'Zeit', 'habe,', 'lese ich.'], hint: 'wenn: Verb am Ende' },
      { parts: ['Wenn es regnet,', 'bleiben', 'wir', 'zu Hause.'], hint: 'Verb, Komma, Verb' },
      { parts: ['Ich', 'freue mich', 'auf', 'den Urlaub.'], hint: 'sich freuen auf' },
      { parts: ['Felix', 'ärgert sich', 'über', 'die Absage.'], hint: 'sich ärgern über' },
      { parts: ['Zuerst', 'sind', 'wir', 'zum Strand', 'gegangen.'], hint: 'Verb auf Position 2' },
      { parts: ['Ich', 'gratuliere', 'dir', 'zum Geburtstag!'], hint: 'gratulieren + Dativ' },
      { parts: ['Wir', 'treffen uns', 'um acht', 'am Bahnhof.'], hint: 'sich treffen' },
      { parts: ['Schade,', 'dass', 'du', 'nicht', 'kommst.'], hint: 'dass: Verb am Ende' },
    ],
  },
  {
    id: 'a2k4-artikel', engine: 'regen', title: 'Artikel-Regen', blurb: 'der, die oder das? Gefühle und Feste.', skill: 'Artikel', tone: 'rose', chapter: 4, emoji: '☔',
    rules: 'Ein Nomen fällt herunter. Tippe auf den richtigen Artikel.', buckets: ['der', 'die', 'das'],
    words: artikel('der Ärger, das Gefühl, die Freude, der Brauch, das Fest, die Hochzeit, der Glückwunsch, das Geschenk, die Angst, der Stolz, das Feuerwerk, die Laune, der Blog, das Ereignis, die Veranstaltung, der Dank, das Lied, die Überraschung'),
  },
];
