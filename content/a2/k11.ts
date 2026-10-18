import type { Chapter, GameDef, GlossaryEntry } from '../types';
import { artikel, audio, cards, checklist, compose, gap, grammar, match, mcq, order, overview, phrases, section, sort, text, tip, x } from '../helpers';

// A2 Kapitel 11: Zeit, Zeitprobleme, Wünsche und Träume, Ratschläge, gemeinsam planen, Sprichwörter.
// Grammar: Konjunktiv II (würde, hätte, wäre), Verben mit Präposition, W-Fragen mit Präposition. Aussprache: Satzakzent.

export const glossaryA2k11: Record<string, GlossaryEntry> = {
  Zeitdruck: { de: 'Man hat zu wenig Zeit für zu viele Aufgaben.', en: 'time pressure' },
  Wunsch: { de: 'Etwas, das man gern haben oder machen möchte.', en: 'wish' },
  Traum: { de: 'Ein großer Wunsch für die Zukunft. Auch: Bilder im Schlaf.', en: 'dream' },
  Konjunktiv: { de: 'Die Form für Wünsche, Träume und höfliche Sätze: Ich hätte gern … Ich wäre gern …', en: 'subjunctive' },
  Sprichwort: { de: 'Ein alter, bekannter Satz mit einer Weisheit, zum Beispiel „Zeit ist Geld“.', en: 'proverb, saying' },
  Lebensqualität: { de: 'Wie gut es einem Menschen im Leben geht.', en: 'quality of life' },
  Entschleunigung: { de: 'Wenn man langsamer lebt und weniger Stress hat.', en: 'slowing down' },
  gemeinsam: { de: 'Zusammen mit anderen.', en: 'together' },
  vorhaben: { de: 'Etwas planen. „Was hast du am Wochenende vor?“', en: 'to plan, to intend' },
  Eröffnung: { de: 'Der erste Tag, an dem etwas offen ist, zum Beispiel ein Restaurant.', en: 'opening' },
};

const einstieg = section('einstieg', 'einstieg', 'Einstieg', 'Keine Zeit!', 'butter', 8,
  ['das Kapitel kennenlernen', 'über Zeit sprechen'], [
    overview('e-over', 'Kapitel 11: Wie die Zeit vergeht!',
      'Hast du immer genug Zeit? Oder hast du oft [[Zeitdruck]]? In Kapitel 11 sprichst du über Zeit, [[Wunsch|Wünsche]] und [[Traum|Träume]]. Du sagst, was du gern machen **würdest**, was du gern **hättest** und wo du gern **wärst**. Du gibst Ratschläge, planst etwas [[gemeinsam]] und lernst ein paar deutsche [[Sprichwort|Sprichwörter]].\n\nKenji ruft aus Wien an. Er hat einen großen Traum. Und er braucht die Hilfe der WG.',
      'This chapter is about time, wishes and dreams: what you would do, what you would like to have, where you would like to be. You will give advice, plan something together and learn some German proverbs. Grammar: the subjunctive (würde, hätte, wäre), verbs with fixed prepositions (warten auf, denken an), and questions with prepositions (Worauf? Auf wen?).',
      ['über Zeitprobleme sprechen', 'Wünsche äußern', 'Ratschläge geben', 'gemeinsam etwas planen']),
    sort('e-sort', ['Zeit sparen', 'Zeit verlieren'], [['online einkaufen', 0], ['im Stau stehen', 1], ['eine To-do-Liste schreiben', 0], ['lange auf den Bus warten', 1], ['Essen für drei Tage kochen', 0], ['stundenlang am Handy scrollen', 1]], { task: 'Spart man Zeit oder verliert man Zeit?', taskEn: 'Does this save time or waste time?' }),
    match('e-match', [['Zeit ist Geld.', 'Zeit ist wertvoll, man sollte sie nicht verschwenden.'], ['Kommt Zeit, kommt Rat.', 'Mit der Zeit findet man eine Lösung.'], ['Morgenstund hat Gold im Mund.', 'Am Morgen arbeitet man gut.'], ['Was du heute kannst besorgen, das verschiebe nicht auf morgen.', 'Mach Aufgaben sofort.']], { task: 'Was bedeutet das Sprichwort?', taskEn: 'Match the German proverb to its meaning.' }),
  ]);

const teil1 = section('teil-1', 'modul', 'Teil 1', 'Wenn ich mehr Zeit hätte …', 'mint', 15,
  ['Aussagen über Zeitprobleme verstehen', 'Wünsche äußern', 'Konjunktiv II'], [
    text('t1-text', `**Umfrage: Was würden Sie mit einer Stunde mehr am Tag machen?**

**Amara (Pflegerin):** Ich hätte gern mehr Zeit für meine Familie in Ghana. Mit einer Stunde mehr würde ich jeden Tag mit meiner Mutter telefonieren. Und ich würde endlich wieder lesen.

**Herr Lehmann (Rentner):** Ich bin Rentner, ich habe Zeit genug! Aber wenn ich jünger wäre, würde ich noch einmal studieren. Geschichte vielleicht.

**Nele (Programmiererin):** Ich würde schlafen! Ehrlich. Eine Stunde mehr Schlaf wäre ein Traum. Ich arbeite zu viel und ich gehe zu spät ins Bett.

**Lina (Lehrerin):** Ich würde Klavier lernen. Das wollte ich schon als Kind. Aber ich habe immer gedacht: Dafür habe ich keine Zeit.`,
      { kicker: 'Lesen', title: 'Eine Stunde mehr', task: 'Lies die Umfrage.', taskEn: 'Read the answers to the question: What would you do with one more hour a day?' }),
    match('t1-match', [['Amara', 'mit der Mutter telefonieren und lesen'], ['Herr Lehmann', 'noch einmal studieren'], ['Nele', 'schlafen'], ['Lina', 'Klavier lernen']], { task: 'Wer würde was machen?', taskEn: 'Who would do what?' }),
    mcq('t1-q1', 'Warum hat Herr Lehmann kein Zeitproblem?', ['Er ist Rentner.', 'Er schläft wenig.', 'Er arbeitet im Homeoffice.'], 0),
    grammar('t1-gram', 'Der Konjunktiv II: würde, hätte, wäre', {
      intro: 'Mit dem **Konjunktiv II** spricht man über **Wünsche, Träume und irreale Situationen**.',
      head: ['', 'würde + Infinitiv', 'haben → hätte', 'sein → wäre'],
      rows: [['ich', 'würde … machen', 'hätte', 'wäre'], ['du', 'würdest … machen', 'hättest', 'wär(e)st'], ['er/sie/es', 'würde … machen', 'hätte', 'wäre'], ['wir', 'würden … machen', 'hätten', 'wären'], ['ihr', 'würdet … machen', 'hättet', 'wär(e)t'], ['sie/Sie', 'würden … machen', 'hätten', 'wären']],
      notes: ['Bei den meisten Verben: **würde + Infinitiv** am Ende. *Ich **würde** gern Klavier **lernen**.*', 'Bei **haben, sein** und den Modalverben benutzt man die eigene Form: **hätte, wäre, könnte, müsste, sollte**.', 'Wunsch mit **gern**: *Ich **wäre** gern am Meer. Ich **hätte** gern mehr Zeit.*', 'Irreale Bedingung: ***Wenn** ich mehr Zeit **hätte**, **würde** ich mehr lesen.*'],
      en: 'Subjunctive II for wishes and unreal situations: würde + infinitive for most verbs (Ich würde reisen), hätte (would have), wäre (would be). Wenn ich mehr Zeit hätte, würde ich mehr lesen = If I had more time, I would read more.',
    }),
    gap('t1-gap', ['Ich {{hätte}} gern ein großes Haus. (haben)', 'Wir {{wären}} jetzt gern am Strand. (sein)', 'Was {{würdest}} du mit einer Million machen? (werden)', 'Wenn ich Zeit hätte, {{würde}} ich mehr reisen. (werden)', 'Er {{wäre}} gern Pilot. (sein)'],
      { task: 'Ergänze den Konjunktiv II.', taskEn: 'Fill in the subjunctive form.' }),
    compose('t1-comp', 'Was würdest du mit einer Stunde mehr am Tag machen?', [
      ['Dein Wunsch', 'Your wish', ['Ich', 'würde', 'jeden Tag', 'Sport machen.']],
      ['Was hättest du gern?', 'What would you like to have?', ['Ich', 'hätte', 'gern', 'mehr Ruhe.']],
      ['Eine Bedingung', 'A condition', ['Wenn', 'ich mehr Zeit hätte,', 'würde ich', 'Gitarre lernen.']],
    ], { task: 'Bau deine Wünsche.', taskEn: 'Build your wishes.' }),
  ]);

const teil2 = section('teil-2', 'modul', 'Teil 2', 'An deiner Stelle würde ich …', 'sky', 15,
  ['Ratschläge geben', 'Verben mit Präposition', 'W-Fragen mit Präposition'], [
    audio('t2-audio', 'Hören: Zu viel Stress', [
      ['nele', 'Amara, ich bin so gestresst. Ich arbeite jeden Tag zehn Stunden. Ich denke nur noch an die Arbeit.'],
      ['amara', 'Das klingt nicht gut. An deiner Stelle würde ich mit deiner Chefin sprechen.'],
      ['nele', 'Worüber denn?'],
      ['amara', 'Über deine Arbeitszeit natürlich! Und du solltest am Wochenende das Laptop zumachen.'],
      ['nele', 'Du hast recht. Ich warte schon so lange auf einen freien Tag.'],
      ['amara', 'Worauf wartest du dann noch? Nimm dir nächsten Freitag frei! Wir könnten zusammen an den See fahren.'],
      ['nele', 'Gute Idee. Ich freue mich jetzt schon darauf.'],
    ], { task: 'Hör zu. Welchen Rat gibt Amara?', taskEn: 'Listen. What advice does Amara give Nele?' }),
    mcq('t2-q1', 'Wie viele Stunden arbeitet Nele am Tag?', ['acht', 'zehn', 'zwölf'], 1),
    mcq('t2-q2', 'Was soll Nele zuerst machen?', ['mit ihrer Chefin sprechen', 'kündigen', 'Urlaub in Ghana machen'], 0),
    grammar('t2-gram', 'Verben mit Präposition', {
      intro: 'Viele Verben haben eine **feste Präposition**. Man lernt sie zusammen.',
      head: ['Verb + Präposition', 'Fall', 'Beispiel'],
      rows: [['warten **auf**', 'Akk.', 'Ich warte **auf den** Bus.'], ['sich freuen **auf** / **über**', 'Akk.', 'Ich freue mich **auf das** Wochenende.'], ['denken **an**', 'Akk.', 'Sie denkt **an ihre** Familie.'], ['sprechen **über** / **mit**', 'Akk. / Dat.', 'Wir sprechen **über das** Problem. Ich spreche **mit der** Chefin.'], ['sich interessieren **für**', 'Akk.', 'Er interessiert sich **für** Musik.'], ['träumen **von**', 'Dat.', 'Kenji träumt **von einem** eigenen Restaurant.'], ['Angst haben **vor**', 'Dat.', 'Ich habe Angst **vor der** Prüfung.']],
      en: 'Many verbs come with a fixed preposition: warten auf (wait for), denken an (think of), sprechen über (talk about), sich interessieren für (be interested in), träumen von (dream of). Learn them as a unit.',
    }),
    gap('t2-gap', ['Ich warte {{auf}} den Zug.', 'Kenji träumt {{von}} einem Restaurant.', 'Sie interessiert sich {{für}} Kunst.', 'Denkst du oft {{an}} deine Familie?', 'Wir sprechen {{über}} den Urlaub.'], { bank: ['auf', 'von', 'für', 'an', 'über'], task: 'Ergänze die Präposition.', taskEn: 'Fill in the preposition.' }),
    grammar('t2-frage', 'W-Fragen mit Präposition', {
      head: ['', 'Frage', 'Antwort'],
      rows: [['Sache', '**Wo(r)** + Präposition: **Worauf** wartest du?', 'Auf den Bus.'], ['Sache', '**Wovon** träumt Kenji?', 'Von einem Restaurant.'], ['Sache', '**Worüber** sprecht ihr?', 'Über die Arbeit.'], ['Person', 'Präposition + **wen / wem**: **Auf wen** wartest du?', 'Auf Felix.'], ['Person', '**Mit wem** sprichst du?', 'Mit der Chefin.']],
      notes: ['Beginnt die Präposition mit einem Vokal, kommt ein **r** dazu: wo**r**auf, wo**r**an, wo**r**über.', 'Bei Personen: Präposition + wen (Akk.) oder wem (Dat.).'],
      en: 'For things: wo + preposition (womit, wovon), with an r before vowels (worauf, woran, worüber). For people: preposition + wen/wem (auf wen, mit wem).',
    }),
    sort('t2-sort', ['Wo(r) + Präposition (Sache)', 'Präposition + wen/wem (Person)'], [['___ wartest du? Auf den Bus.', 0], ['___ wartest du? Auf meine Schwester.', 1], ['___ denkst du? An den Urlaub.', 0], ['___ sprichst du? Mit meinem Chef.', 1], ['___ freust du dich? Auf die Party.', 0], ['___ träumst du? Von Felix.', 1]], { task: 'Sache oder Person?', taskEn: 'Is the answer a thing or a person?' }),
  ]);

const teil3 = section('teil-3', 'modul', 'Teil 3', 'Leben wie früher?', 'lilac', 15,
  ['einen Text erschließen', 'Informationen austauschen', 'gemeinsam etwas planen'], [
    text('t3-text', `**Eine Woche ohne Strom: das Experiment von Familie Bergmann**

Die Familie Bergmann aus Thüringen hat ein Experiment gemacht: Eine Woche lang hat sie gelebt wie im Jahr 1900. Kein Strom, kein Handy, kein Kühlschrank, kein Auto.

„Am Anfang war es sehr schwer“, sagt Mutter Julia. „Wir mussten das Wasser auf dem Holzofen warm machen. Das hat ewig gedauert.“ Der Sohn Max (14) hat am meisten gelitten: „Ohne Handy war es am ersten Tag furchtbar langweilig. Aber dann habe ich mit meinem Vater ein Vogelhaus gebaut.“

Nach der Woche sagen alle: Die Zeit ist langsamer vergangen. „Wir haben mehr miteinander geredet und mehr gelacht“, sagt Vater Thomas. „Ich würde das nicht für immer machen. Aber jedes Jahr eine Woche? Warum nicht!“`,
      { kicker: 'Lesen', title: 'Ein Experiment', task: 'Lies den Text. Rate unbekannte Wörter aus dem Kontext.', taskEn: 'Read the text. Guess unknown words from context. ewig = forever, leiden = to suffer.' }),
    tip('t3-tip', 'Wörter erschließen', 'Du kennst ein Wort nicht? Dann: 1. Schau auf die **Teile**: *Holz + Ofen = Holzofen*, *Vogel + Haus = Vogelhaus*. 2. Schau auf den **Kontext**: Was passt in den Satz? 3. Gibt es ein **ähnliches Wort** in deiner Sprache? *Experiment*.'),
    mcq('t3-q1', 'Wie lange hat das Experiment gedauert?', ['einen Tag', 'eine Woche', 'ein Jahr'], 1),
    mcq('t3-q2', 'Was hat Max am ersten Tag gefühlt?', ['Es war langweilig.', 'Es war spannend.', 'Er war glücklich.'], 0),
    mcq('t3-q3', 'Was sagt der Vater am Ende?', ['Er würde jedes Jahr eine Woche so leben.', 'Er würde nie wieder ohne Strom leben.', 'Er würde für immer so leben.'], 0),
    match('t3-match', [['der Holzofen', 'ein Ofen für Holz'], ['das Vogelhaus', 'ein kleines Haus für Vögel'], ['furchtbar', 'sehr schlimm'], ['ewig', 'sehr, sehr lange']], { task: 'Was bedeuten die Wörter?', taskEn: 'Match the words to their meanings.' }),
    phrases('t3-phr', 'Gemeinsam etwas planen', {
      'Vorschlag': ['Wir könnten …', 'Was hältst du davon, wenn wir …?', 'Ich hätte eine Idee: …'],
      'Zustimmen': ['Das wäre super!', 'Einverstanden.', 'Gute Idee, so machen wir es.'],
      'Gegenvorschlag': ['Ich würde lieber …', 'Wäre es nicht besser, wenn …?', 'Und was ist mit …?'],
    }),
    compose('t3-comp', 'Plan mit einer Freundin ein Wochenende ohne Handy.', [
      ['Mach einen Vorschlag.', 'Make a suggestion.', ['Wir', 'könnten', 'ein Wochenende', 'ohne Handy machen.']],
      ['Sag, was ihr machen würdet.', 'Say what you would do.', ['Wir', 'würden', 'wandern', 'und kochen.']],
      ['Sag, wie das wäre.', 'Say how it would be.', ['Das', 'wäre', 'bestimmt', 'entspannend.']],
    ], { task: 'Bau den Plan.', taskEn: 'Build the plan.' }),
  ]);

const wg = section('wg', 'kommunikation', 'Die Fuchsbau-WG', 'Folge 11: Kenjis Traum', 'rose', 10,
  ['eine Geschichte hören', 'Konjunktiv II im Kontext'], [
    text('wg-intro', 'Ein Videoanruf aus Wien. Kenji sieht müde aus, aber seine Augen leuchten.', { kicker: 'Die Geschichte', en: 'A video call from Vienna. Kenji looks tired, but his eyes are shining.' }),
    audio('wg-audio', 'Folge 11: Kenjis Traum', [
      ['kenji', 'Leute, ich muss euch etwas erzählen. Wien ist toll. Ich habe viel gelernt. Aber ich denke die ganze Zeit an Leipzig.'],
      ['amara', 'Wir denken auch an dich! Wann kommst du zurück?'],
      ['kenji', 'In drei Wochen. Und ich habe einen Traum: Ich würde gern ein eigenes Restaurant in Leipzig eröffnen. „Fuchs & Yuzu“, aber für immer, nicht nur ein Pop-up.'],
      ['nele', 'Wow! Das wäre fantastisch!'],
      ['kenji', 'Aber ich hätte so viele Fragen. Wo finde ich einen Raum? Wie bekomme ich einen Kredit? Ich weiß nicht, wo ich anfangen soll.'],
      ['nele', 'Ich könnte dir eine Homepage und eine App programmieren. Kostenlos natürlich.'],
      ['amara', 'Und ich kenne eine Frau von der Bank. Mit ihr könntest du über den Kredit sprechen.'],
      ['felix', 'Und Herr Lehmann hat gesagt, das alte Café im Erdgeschoss ist frei. Wäre das nicht perfekt?'],
      ['kenji', 'Ihr seid die beste WG der Welt. Kommt Zeit, kommt Rat, sagt man doch, oder?'],
      ['felix', 'Genau. Und bei uns kommt der Rat sogar schneller!'],
    ], { task: 'Hör die Geschichte.', taskEn: 'Listen to the story.' }),
    mcq('wg-q1', 'Wovon träumt Kenji?', ['von einem eigenen Restaurant in Leipzig', 'von einem Leben in Wien', 'von einer Reise nach Japan'], 0),
    match('wg-match', [['Nele', 'programmiert eine Homepage'], ['Amara', 'kennt eine Frau von der Bank'], ['Felix', 'weiß von einem freien Café']], { task: 'Wer hilft wie?', taskEn: 'Who helps how?' }),
    mcq('wg-q2', 'Wann kommt Kenji zurück?', ['in drei Tagen', 'in drei Wochen', 'in drei Monaten'], 1),
  ]);

const grammatik = section('grammatik', 'grammatik', 'Grammatik', 'Alles auf einen Blick', 'peach', 10,
  ['Konjunktiv II', 'Verben mit Präposition'], [
    grammar('g-1', 'Konjunktiv II: Überblick', {
      head: ['Funktion', 'Beispiel'],
      rows: [['Wunsch', 'Ich **hätte** gern mehr Zeit. Ich **wäre** gern am Meer.'], ['Traum / irreal', 'Wenn ich reich **wäre**, **würde** ich um die Welt reisen.'], ['Ratschlag', 'An deiner Stelle **würde** ich … / Du **solltest** …'], ['höfliche Bitte', '**Könnten** Sie …? **Würden** Sie …? Ich **hätte** gern …']],
      en: 'Four uses of Konjunktiv II: wishes, unreal situations, advice and polite requests.',
    }),
    mcq('g-q1', 'Wenn ich Zeit ___, würde ich kommen.', ['habe', 'hätte', 'hatte'], 1),
    mcq('g-q2', 'An deiner Stelle ___ ich zum Arzt gehen.', ['würde', 'wäre', 'werde'], 0),
    mcq('g-q3', '___ wartest du? Auf den Bus.', ['Worauf', 'Auf wen', 'Wofür'], 0),
    mcq('g-q4', 'Ich interessiere mich ___ Fotografie.', ['an', 'für', 'auf'], 1),
  ]);

const uebungen = section('uebungen', 'uebung', 'Übungen', 'Training', 'butter', 15,
  ['Wünsche ausdrücken', 'Aussprache: Satzakzent im Konjunktiv'], [
    order('u-order', ['Wenn', 'ich reich wäre,', 'würde', 'ich', 'ein Schiff kaufen.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence.' }),
    audio('u-aus', 'Aussprache: Wünsche betonen', [
      ['frauKlein', 'Bei Wünschen betont man oft das Verb im Konjunktiv und das Wort gern: Ich WÄRE so GERN am Meer.'],
      ['frauKlein', 'Ich HÄTTE so GERN mehr Zeit.'],
      ['frauKlein', 'Wenn ich nur mehr ZEIT hätte!'],
    ], { task: 'Hör zu und sprich nach.', taskEn: 'Listen and repeat. In wishes, the subjunctive verb and gern are often stressed.' }),
    gap('u-gap', ['Ich {{wäre}} jetzt so gern im Urlaub!', 'Wir {{hätten}} gern einen Hund.', '{{Würdest}} du mir helfen?'], { bank: ['wäre', 'hätten', 'Würdest'], task: 'Ergänze.', taskEn: 'Fill in the gaps.' }),
    match('u-match', [['Worauf wartest du?', 'Auf den Bus.'], ['Mit wem sprichst du?', 'Mit meiner Mutter.'], ['Wovon träumst du?', 'Von einer Weltreise.'], ['Wofür interessierst du dich?', 'Für Kunst.']], { task: 'Frage und Antwort', taskEn: 'Match the question to the answer.' }),
  ]);

const wortschatz = section('wortschatz', 'wortschatz', 'Wortschatz und Check', 'Das kann ich jetzt', 'mint', 8,
  ['Wörter wiederholen', 'den Stand einschätzen'], [
    cards('w-cards', [
      ['der Zeitdruck', 'zu wenig Zeit', 'time pressure'], ['der Wunsch', 'was man gern möchte', 'wish'], ['der Traum', 'großer Wunsch', 'dream'],
      ['ich hätte gern', 'Wunsch, höflich', 'I would like'], ['ich wäre gern', 'Wunsch, wo/was ich sein möchte', 'I would like to be'], ['ich würde', '+ Infinitiv', 'I would'],
      ['warten auf', 'bis jemand kommt', 'to wait for'], ['denken an', 'im Kopf haben', 'to think of'], ['träumen von', 'sich etwas wünschen', 'to dream of'],
      ['sich interessieren für', 'etwas spannend finden', 'to be interested in'], ['das Sprichwort', 'alter, weiser Satz', 'proverb'], ['gemeinsam', 'zusammen', 'together'],
    ]),
    phrases('w-x-phr', 'Wünsche und Ratschläge', {
      'Wünsche': ['Ich hätte gern mehr Zeit.', 'Ich würde gern öfter Sport machen.', 'Wir wären gern am Meer.'],
      'Ratschläge': ['An deiner Stelle würde ich weniger arbeiten.', 'Du solltest dein Handy aufladen.'],
      'Fragen': ['Worauf wartest du?', 'Mit wem hast du gesprochen?', 'Woran denkst du?'],
    }),
    match('w-x-match', [['warten', 'auf'], ['sich erinnern', 'an'], ['Angst haben', 'vor'], ['sprechen', 'mit'], ['sich kümmern', 'um'], ['sich ärgern', 'über']],
      { task: 'Verben mit Präposition', taskEn: 'Verbs with a preposition. Match.' }),
    gap('w-x-gap', ['Jan {{hätte}} gern mehr Geld. (haben)', 'Theresa {{würde}} gern mehr lesen.', 'Eva und Jana {{wären}} gern berühmt. (sein)', 'Ich freue mich {{auf}} den Urlaub.'],
      { bank: ['hätte', 'würde', 'wären', 'auf'], task: 'Ergänze.', taskEn: 'Fill in: Konjunktiv II and verbs with a preposition.' }),
    mcq('w-x-q1', '„Ich warte auf meine Prüfungsergebnisse.“ – Frage:', ['Wo wartest du?', 'Worauf wartest du?', 'Auf was wartest du nicht?'], 1, { task: 'Frag nach der Sache.', taskEn: 'Ask about the thing.' }),
    mcq('w-x-q2', '„Ich denke an Felix.“ – Frage:', ['An wen denkst du?', 'Woran denkst du?', 'Wem denkst du?'], 0, { why: 'Person: An wen? Sache: Woran?' }),
    order('w-x-order', ['An deiner Stelle', 'würde', 'ich', 'weniger', 'arbeiten.'], { task: 'Bau den Ratschlag.', taskEn: 'Build the piece of advice.' }),
    checklist('w-check', ['Ich kann über Zeitprobleme sprechen.', 'Ich kann mit würde, hätte, wäre Wünsche äußern.', 'Ich kann Ratschläge geben: An deiner Stelle würde ich …', 'Ich kenne wichtige Verben mit Präposition.', 'Ich kann mit Worauf? und Auf wen? fragen.']),
  ]);

export const a2k11: Chapter = {
  id: 'a2-k11', number: 11, title: 'Wie die Zeit vergeht!', theme: 'Zeit, Wünsche, Träume, Pläne',
  grammar: 'Konjunktiv II. Verben mit Präposition. W-Fragen mit Präposition.',
  sections: [einstieg, teil1, teil2, teil3, wg, grammatik, uebungen, wortschatz],
  games: ['a2k11-sprint', 'a2k11-memory', 'a2k11-satzbau', 'a2k11-artikel'],
  exam: [
    x(1, mcq('x1', 'Ich ___ gern ein Auto.', ['hätte', 'wäre', 'würde'], 0)),
    x(1, mcq('x2', 'Wenn ich Zeit hätte, ___ ich mehr lesen.', ['werde', 'würde', 'wurde'], 1)),
    x(1, mcq('x3', 'Er wartet ___ seine Freundin.', ['an', 'auf', 'für'], 1)),
    x(3, gap('x4', ['Wir {{wären}} gern in Italien. (sein)', 'Ich {{würde}} gern Spanisch lernen. (werden)', 'Sie {{hätte}} gern mehr Freizeit. (haben)'], { task: 'Konjunktiv II.' })),
    x(3, gap('x5', ['Ich denke oft {{an}} dich.', 'Sie träumt {{von}} einer Weltreise.', 'Interessierst du dich {{für}} Politik?'], { task: 'Präpositionen.' })),
    x(1, mcq('x6', 'Was würde Paul mit einer Million machen?', ['ein Haus kaufen', 'um die Welt reisen', 'eine Firma gründen'], 1),
      audio('x-st1', 'Hören: Ein Gespräch', [
        ['elif', 'Paul, was würdest du mit einer Million Euro machen?'],
        ['jonas', 'Ich würde sofort aufhören zu arbeiten und um die Welt reisen. Zuerst nach Südamerika.'],
        ['elif', 'Und dann?'],
        ['jonas', 'Dann würde ich ein kleines Haus am Meer kaufen. Und du?'],
        ['elif', 'Ich würde eine Bäckerei eröffnen. Das ist schon lange mein Traum.'],
      ])),
    x(1, mcq('x7', 'Wovon träumt die Frau? (Hörtext oben)', ['von einer Bäckerei', 'von einem Haus am Meer', 'von einer Reise'], 0)),
    x(1, mcq('x8', 'Was ist das Ziel des Kurses?', ['schneller arbeiten', 'weniger Stress und mehr Zeit', 'eine neue Sprache'], 1),
      text('x-st2', '**Volkshochschule: Kurs „Endlich Zeit!“**\nSie haben immer zu viel zu tun? In diesem Kurs lernen Sie, Ihre Zeit besser zu planen. Weniger Stress, mehr Zeit für das, was Ihnen wichtig ist.\n4 Abende, donnerstags 18 bis 20 Uhr, 48 €.', { kicker: 'Lesen' })),
    x(1, mcq('x9', 'Wie oft trifft sich der Kurs? (Text oben)', ['einmal', 'viermal', 'jeden Tag'], 1)),
    x(2, order('x10', ['An deiner Stelle', 'würde', 'ich', 'mehr', 'schlafen.'], { task: 'Bau den Satz.' })),
    x(1, mcq('x11', '___ sprichst du? Mit meinem Lehrer.', ['Worüber', 'Mit wem', 'Womit'], 1)),
    x(1, mcq('x12', '„Kommt Zeit, kommt Rat“ bedeutet:', ['Man soll immer schnell sein.', 'Mit der Zeit findet man eine Lösung.', 'Zeit ist Geld.'], 1)),
  ],
};

export const gamesA2k11: GameDef[] = [
  {
    id: 'a2k11-sprint', engine: 'sprint', title: 'Präpositions-Sprint', blurb: 'auf, an, für, von? Schnell!', skill: 'Verben mit Präposition', tone: 'mint', chapter: 11, emoji: '⚡',
    rules: 'Du siehst ein Verb. Tippe auf die richtige Präposition.', label: 'Welche Präposition?',
    items: [
      { q: 'warten ___', a: 'auf', wrong: ['an', 'für'] }, { q: 'denken ___', a: 'an', wrong: ['auf', 'von'] },
      { q: 'träumen ___', a: 'von', wrong: ['über', 'an'] }, { q: 'sich interessieren ___', a: 'für', wrong: ['an', 'über'] },
      { q: 'Angst haben ___', a: 'vor', wrong: ['für', 'auf'] }, { q: 'sich freuen ___ (Zukunft)', a: 'auf', wrong: ['über', 'an'] },
      { q: 'sprechen ___ (Thema)', a: 'über', wrong: ['von', 'auf'] }, { q: 'sich ärgern ___', a: 'über', wrong: ['auf', 'für'] },
      { q: 'sich erinnern ___', a: 'an', wrong: ['auf', 'über'] }, { q: 'telefonieren ___', a: 'mit', wrong: ['an', 'zu'] },
      { q: 'sich bedanken ___ (etwas)', a: 'für', wrong: ['über', 'auf'] }, { q: 'Lust haben ___', a: 'auf', wrong: ['an', 'für'] },
    ],
  },
  {
    id: 'a2k11-memory', engine: 'memory', title: 'Sprichwort-Memory', blurb: 'Anfang und Ende: Finde die Paare.', skill: 'Sprichwörter', tone: 'lilac', chapter: 11, emoji: '🃏',
    rules: 'Dreh zwei Karten um. Ein Paar ist der Anfang und das Ende von einem Sprichwort.', kinds: ['Anfang', 'Ende'],
    pairs: [['Zeit ist …', '… Geld.'], ['Kommt Zeit, …', '… kommt Rat.'], ['Morgenstund hat …', '… Gold im Mund.'], ['Übung macht …', '… den Meister.'], ['Aller Anfang …', '… ist schwer.'], ['Ende gut, …', '… alles gut.'], ['Wer A sagt, …', '… muss auch B sagen.'], ['Ohne Fleiß …', '… kein Preis.']],
  },
  {
    id: 'a2k11-satzbau', engine: 'satzbau', title: 'Wunsch-Baukasten', blurb: 'Bau Wünsche und Träume.', skill: 'Konjunktiv II', tone: 'sky', chapter: 11, emoji: '🧱',
    rules: 'Tippe die Wörter in der richtigen Reihenfolge an.',
    sentences: [
      { parts: ['Ich', 'hätte', 'gern', 'mehr Zeit.'], hint: 'Wunsch mit hätte' },
      { parts: ['Wir', 'wären', 'jetzt gern', 'am Meer.'], hint: 'Wunsch mit wäre' },
      { parts: ['Ich', 'würde', 'gern', 'Klavier lernen.'], hint: 'würde + Infinitiv am Ende' },
      { parts: ['Wenn', 'ich Zeit hätte,', 'würde', 'ich', 'reisen.'], hint: 'Verb, Komma, Verb' },
      { parts: ['An deiner Stelle', 'würde', 'ich', 'mit der Chefin sprechen.'], hint: 'Ratschlag' },
      { parts: ['Worauf', 'wartest', 'du', 'noch?'], hint: 'wo(r) + Präposition' },
      { parts: ['Kenji', 'träumt', 'von', 'einem Restaurant.'], hint: 'träumen von + Dativ' },
      { parts: ['Mit wem', 'sprichst', 'du', 'gerade?'], hint: 'Person: Präposition + wem' },
    ],
  },
  {
    id: 'a2k11-artikel', engine: 'regen', title: 'Artikel-Regen', blurb: 'der, die oder das? Zeit und Träume.', skill: 'Artikel', tone: 'rose', chapter: 11, emoji: '☔',
    rules: 'Ein Nomen fällt herunter. Tippe auf den richtigen Artikel.', buckets: ['der', 'die', 'das'],
    words: artikel('der Traum, das Sprichwort, die Zeit, der Wunsch, das Experiment, die Freizeit, der Plan, das Leben, die Eröffnung, der Stress, das Ziel, die Lösung, der Kredit, das Restaurant, die Idee, der Rat, das Klavier, die Weltreise'),
  },
];
