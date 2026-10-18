import type { Chapter, GameDef, GlossaryEntry } from '../types';
import { artikel, audio, cards, checklist, compose, gap, grammar, match, mcq, order, overview, phrases, section, sort, text, tip, x } from '../helpers';

// A2 Kapitel 3: Medien, Vor- und Nachteile, Vergleiche, Filme.
// Grammar: Komparativ und Superlativ, Vergleiche mit als und wie, Nebensatz mit dass. Aussprache: b oder w.

export const glossaryA2k3: Record<string, GlossaryEntry> = {
  Medien: { de: 'Handy, Internet, Fernsehen, Zeitung, Radio: Damit bekommt man Informationen.', en: 'media' },
  Vorteil: { de: 'Etwas Gutes an einer Sache.', en: 'advantage' },
  Nachteil: { de: 'Etwas Schlechtes an einer Sache.', en: 'disadvantage' },
  Bildschirmzeit: { de: 'Die Zeit, die man vor Handy, Computer oder Fernseher verbringt.', en: 'screen time' },
  süchtig: { de: 'Man kann nicht ohne etwas leben, zum Beispiel ohne Handy.', en: 'addicted' },
  erreichbar: { de: 'Andere können dich anrufen oder dir schreiben.', en: 'reachable' },
  Komparativ: { de: 'Die Form zum Vergleichen: schnell → schneller.', en: 'comparative' },
  Superlativ: { de: 'Die höchste Form: schnell → am schnellsten.', en: 'superlative' },
  Handyfasten: { de: 'Eine Zeit lang kein Handy benutzen.', en: 'phone fast, digital detox' },
  Drehbuch: { de: 'Der Text für einen Film mit allen Dialogen.', en: 'screenplay' },
  Hauptrolle: { de: 'Die wichtigste Person in einem Film.', en: 'leading role' },
};

const einstieg = section('einstieg', 'einstieg', 'Einstieg', 'Wie lange bist du online?', 'butter', 8,
  ['das Kapitel kennenlernen', 'Medien benennen'], [
    overview('e-over', 'Kapitel 3: Immer online?',
      'Wie viele Stunden am Tag schaust du auf dein Handy? In Kapitel 3 geht es um [[Medien]]. Du sprichst über [[Vorteil|Vorteile]] und [[Nachteil|Nachteile]], vergleichst Dinge und sagst deine Meinung mit **dass**. Außerdem sprichst du über Filme.\n\nIn der WG gibt es eine Wette: Wer schafft eine Woche [[Handyfasten]]?',
      'This chapter is about media: phones, the internet, TV and films. You compare things, talk about pros and cons and give opinions. Grammar: comparatives and superlatives (schneller, am schnellsten), comparisons with als and wie, and dass clauses (Ich finde, dass …), where the verb goes to the end.',
      ['über Medien sprechen', 'Vor- und Nachteile nennen', 'Dinge vergleichen', 'über Filme sprechen']),
    match('e-match', [['chatten', '💬'], ['streamen', '📺'], ['Musik hören', '🎧'], ['Fotos posten', '📸'], ['telefonieren', '📞'], ['Videospiele spielen', '🎮'], ['Podcasts hören', '🎙️'], ['im Internet surfen', '🌐']],
      { task: 'Was macht man mit Medien?', taskEn: 'Match the media activity to the picture.' }),
    sort('e-sort', ['Vorteil', 'Nachteil'], [['Man ist immer erreichbar.', 0], ['Man schläft schlechter.', 1], ['Man findet schnell Informationen.', 0], ['Man hat weniger Zeit für Freunde.', 1], ['Man kann mit der Familie im Ausland sprechen.', 0], ['Man ist oft abgelenkt.', 1]],
      { task: 'Handy und Internet: Vorteil oder Nachteil?', taskEn: 'Phones and the internet: advantage or disadvantage?' }),
  ]);

const teil1 = section('teil-1', 'modul', 'Teil 1', 'Schneller, besser, am besten', 'mint', 15,
  ['Vergleiche formulieren', 'Komparativ und Superlativ'], [
    audio('t1-audio', 'Hören: Welches Handy?', [
      ['amara', 'Felix, mein Handy ist kaputt. Ich brauche ein neues. Was meinst du, das Modell A oder das Modell B?'],
      ['felix', 'Das Modell A ist billiger als das Modell B. Es kostet nur zweihundert Euro.'],
      ['amara', 'Aber die Kamera von B ist besser. Ich mache viele Fotos für meine Familie in Ghana.'],
      ['felix', 'Stimmt. Und der Akku von B hält länger. Aber B ist auch größer und schwerer.'],
      ['amara', 'Und das Modell C? Das ist am kleinsten.'],
      ['felix', 'C ist am teuersten! Achthundert Euro. Für ein Handy!'],
      ['amara', 'Dann nehme ich B. Eine gute Kamera ist mir am wichtigsten.'],
    ], { task: 'Hör zu. Welches Handy kauft Amara?', taskEn: 'Listen. Which phone does Amara choose and why? Akku = battery.' }),
    mcq('t1-q1', 'Welches Handy ist am billigsten?', ['A', 'B', 'C'], 0),
    mcq('t1-q2', 'Welches Handy kauft Amara?', ['A', 'B', 'C'], 1),
    mcq('t1-q3', 'Warum?', ['Es ist am kleinsten.', 'Die Kamera ist besser.', 'Es ist am billigsten.'], 1),
    grammar('t1-gram', 'Komparativ und Superlativ', {
      intro: 'Komparativ: Adjektiv + **-er**. Superlativ: **am** + Adjektiv + **-(e)sten**.',
      head: ['Grundform', 'Komparativ', 'Superlativ'],
      rows: [['billig', 'billig**er**', 'am billig**sten**'], ['klein', 'klein**er**', 'am klein**sten**'], ['groß', 'gr**ö**ß**er**', 'am gr**ö**ß**ten**'], ['alt', '**ä**lt**er**', 'am **ä**lt**esten**'], ['teuer', 'teu**rer**', 'am teuer**sten**'], ['gut', '**besser**', 'am **besten**'], ['viel', '**mehr**', 'am **meisten**'], ['gern', '**lieber**', 'am **liebsten**']],
      notes: ['Kurze Adjektive mit a, o, u bekommen oft einen Umlaut: alt → älter, jung → jünger, kurz → kürzer.', 'Nach -t, -d, -z, -s, -ß: Superlativ mit **-esten**: am ältesten, am kürzesten.'],
      en: 'Comparative: add -er (billiger). Superlative: am + -sten (am billigsten). Short adjectives often add an umlaut: alt, älter, am ältesten. Irregular: gut, besser, am besten; viel, mehr, am meisten; gern, lieber, am liebsten.',
    }),
    gap('t1-gap', ['Ein Fahrrad ist {{billiger}} als ein Auto. (billig)', 'Mein Bruder ist {{älter}} als ich. (alt)', 'Kenji kocht {{besser}} als Felix. (gut)', 'Am Wochenende schlafe ich am {{längsten}}. (lang)', 'Ich trinke {{lieber}} Tee als Kaffee. (gern)'],
      { task: 'Ergänze den Komparativ oder Superlativ.', taskEn: 'Fill in the comparative or superlative.' }),
    grammar('t1-alswie', 'Vergleiche mit als und wie', {
      head: ['', 'Beispiel'],
      rows: [['ungleich: Komparativ + **als**', 'Das Modell B ist teurer **als** das Modell A.'], ['gleich: **so** + Adjektiv + **wie**', 'Mein Handy ist **so** alt **wie** deins.'], ['nicht gleich: **nicht so** + Adjektiv + **wie**', 'Mein Laptop ist **nicht so** schnell **wie** deiner.']],
      en: 'Different: comparative + als (bigger than). Equal: so … wie (as … as). Not equal: nicht so … wie (not as … as).',
    }),
    sort('t1-sort', ['als', 'wie'], [['Er ist größer ___ ich.', 0], ['Sie ist so alt ___ ich.', 1], ['Tee ist billiger ___ Kaffee.', 0], ['Das ist nicht so teuer ___ gedacht.', 1], ['Heute ist es kälter ___ gestern.', 0], ['Er kocht so gut ___ seine Mutter.', 1]],
      { task: 'als oder wie?', taskEn: 'Sort: does the gap need als or wie?' }),
  ]);

const teil2 = section('teil-2', 'modul', 'Teil 2', 'Ich finde, dass …', 'sky', 15,
  ['ein Interview verstehen', 'Meinungen in Texten verstehen', 'Nebensatz mit dass'], [
    text('t2-text', `**Umfrage der Woche: Brauchen wir eine Handypause?**

**Jonas, 19, Student:** Ich finde, dass das Handy das Leben einfacher macht. Ich lerne, ich höre Musik, ich chatte mit Freunden. Ohne Handy bin ich nicht erreichbar. Das geht nicht!

**Herr Lehmann, 67, Rentner:** Ich glaube, dass junge Leute zu viel Zeit am Handy verbringen. Im Bus schaut niemand mehr aus dem Fenster. Früher haben wir miteinander geredet.

**Priya, 34, Lehrerin:** Ich denke, dass Medien nicht schlecht sind. Aber man muss lernen, wie man sie benutzt. In meiner Klasse gibt es eine Regel: Handys bleiben in der Tasche. Die Schüler sagen, dass sie sich jetzt besser konzentrieren können.`,
      { kicker: 'Lesen', title: 'Meinungen über das Handy', task: 'Lies die Meinungen.', taskEn: 'Read the three opinions about phones.' }),
    match('t2-match', [['Jonas', 'Das Handy macht das Leben einfacher.'], ['Herr Lehmann', 'Junge Leute verbringen zu viel Zeit am Handy.'], ['Priya', 'Man muss lernen, wie man Medien benutzt.']], { task: 'Wer meint was?', taskEn: 'Who thinks what?' }),
    mcq('t2-q1', 'Was ist die Regel in Priyas Klasse?', ['Handys bleiben in der Tasche.', 'Handys sind verboten.', 'Jeder hat ein Tablet.'], 0),
    grammar('t2-gram', 'Der Nebensatz mit dass', {
      intro: 'Nach Verben wie **finden, glauben, denken, sagen, wissen, hoffen** kommt oft ein **dass**-Satz. Das konjugierte Verb steht **am Ende**. Vor **dass** steht ein Komma.',
      head: ['Hauptsatz', '', 'Nebensatz'],
      rows: [['Ich finde,', '**dass**', 'das Handy das Leben einfacher **macht**.'], ['Ich glaube,', '**dass**', 'junge Leute zu viel Zeit am Handy **verbringen**.'], ['Die Schüler sagen,', '**dass**', 'sie sich besser konzentrieren **können**.'], ['Ich hoffe,', '**dass**', 'du bald **anrufst**.']],
      notes: ['Wie bei **weil**: Verb ans Ende, Modalverb ganz ans Ende, trennbare Verben bleiben zusammen.'],
      en: 'dass (that) introduces what someone thinks or says. Like weil, it sends the conjugated verb to the end. Always put a comma before dass.',
    }),
    order('t2-order', ['Ich', 'glaube,', 'dass', 'Medien', 'wichtig', 'sind.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence with dass.' }),
    gap('t2-gap', ['Ich finde, dass Kinder kein Handy {{brauchen}}. (brauchen)', 'Nele glaubt, dass sie ohne Handy nicht leben {{kann}}. (können)', 'Wir wissen, dass Bildschirmzeit nicht gesund {{ist}}. (sein)', 'Er sagt, dass er morgen {{anruft}}. (anrufen)'],
      { task: 'Ergänze das Verb am Ende.', taskEn: 'Fill in the verb at the end of the dass clause.' }),
    compose('t2-comp', 'Sag deine Meinung zum Thema „Handy in der Schule“.', [
      ['Deine Meinung', 'Your opinion', ['Ich finde,', 'dass', 'Handys', 'in der Schule stören.']],
      ['Ein Grund', 'A reason', ['Die Schüler', 'können', 'sich', 'nicht konzentrieren.']],
      ['Ein Vorschlag', 'A suggestion', ['Die Handys', 'sollten', 'in der Tasche', 'bleiben.']],
    ], { task: 'Bau deine Meinung.', taskEn: 'Build your opinion.' }),
  ]);

const teil3 = section('teil-3', 'modul', 'Teil 3', 'Kino! Kino!', 'lilac', 15,
  ['über Filme sprechen', 'Filmbeschreibungen verstehen', 'einen Film beschreiben'], [
    match('t3-match', [['die Komödie', '😂'], ['der Krimi', '🕵️'], ['der Horrorfilm', '👻'], ['der Liebesfilm', '❤️'], ['der Science-Fiction-Film', '🚀'], ['der Zeichentrickfilm', '🖍️']], { task: 'Welches Filmgenre ist das?', taskEn: 'Match the film genre.' }),
    text('t3-text', `**Kinotipp der Woche: „Der Duft von Yuzu“**

Ein junger Koch aus Japan kommt nach Leipzig. Er spricht kaum Deutsch und kennt niemanden. In einer alten Bäckerei findet er Arbeit. Die Bäckerin, Frau Wendt, ist streng und am Anfang sehr unfreundlich. Aber dann backen die beiden zusammen einen Kuchen für einen Wettbewerb …

Die Geschichte ist einfach, aber sehr warm. Die Schauspieler sind fantastisch, vor allem die Hauptdarstellerin. Die Bilder von Leipzig im Winter sind wunderschön. Der Film ist lustiger als die meisten deutschen Komödien. Der einzige Nachteil: Man hat danach riesigen Hunger!

**Genre:** Komödie / Drama · **Länge:** 104 Minuten · **Ab 6 Jahren**`, { kicker: 'Lesen', title: 'Eine Filmkritik', task: 'Lies die Filmkritik.', taskEn: 'Read the film review.' }),
    mcq('t3-q1', 'Wo spielt der Film?', ['in Japan', 'in Leipzig', 'in Wien'], 1),
    mcq('t3-q2', 'Wie ist Frau Wendt am Anfang?', ['sehr freundlich', 'streng und unfreundlich', 'lustig'], 1),
    mcq('t3-q3', 'Was ist laut Kritik der „Nachteil“?', ['Der Film ist zu lang.', 'Man hat danach Hunger.', 'Die Schauspieler sind schlecht.'], 1),
    phrases('t3-phr', 'Über Filme sprechen', {
      'Inhalt': ['Der Film handelt von …', 'Es geht um …', 'Der Film spielt in …'],
      'Bewertung': ['Die Schauspieler sind super.', 'Die Geschichte ist spannend / langweilig.', 'Ich finde den Film besser als das Buch.'],
      'Empfehlung': ['Den Film muss man sehen!', 'Ich empfehle den Film nicht.'],
    }),
    compose('t3-comp', 'Beschreib deinen Lieblingsfilm.', [
      ['Titel und Genre', 'Title and genre', ['Mein Lieblingsfilm', 'ist', 'eine Komödie.']],
      ['Worum geht es?', 'What is it about?', ['Der Film', 'handelt', 'von einer', 'großen Familie.']],
      ['Bewertung', 'Your rating', ['Ich finde,', 'dass', 'die Schauspieler', 'super sind.']],
    ], { task: 'Bau die Beschreibung.', taskEn: 'Build the description.' }),
  ]);

const wg = section('wg', 'kommunikation', 'Die Fuchsbau-WG', 'Folge 3: Die Handy-Wette', 'rose', 10,
  ['eine Geschichte hören', 'Vergleiche im Kontext'], [
    text('wg-intro', 'Beim Frühstück schauen alle auf ihr Handy. Niemand spricht. Da hat Amara eine Idee.', { kicker: 'Die Geschichte', en: 'At breakfast everyone is looking at their phone. Nobody talks. Then Amara has an idea.' }),
    audio('wg-audio', 'Folge 3: Die Handy-Wette', [
      ['amara', 'Leute! Wir sitzen zusammen und reden nicht. Ich schlage eine Wette vor: eine Woche ohne Handy. Wer es am längsten schafft, gewinnt.'],
      ['felix', 'Was gewinnt man denn?'],
      ['amara', 'Die anderen putzen eine Woche lang das Bad für ihn.'],
      ['nele', 'Ich bin dabei. Aber für die Arbeit brauche ich den Laptop.'],
      ['amara', 'Laptop für die Arbeit ist okay. Aber kein Instagram, kein Chat!'],
      ['erzaehler', 'Drei Tage später.'],
      ['kenji', 'Felix, du hast dein Handy in der Hand!'],
      ['felix', 'Nur ganz kurz! Ich wollte nur sehen, wie spät es ist.'],
      ['kenji', 'Wir haben eine Uhr in der Küche. Du hast verloren!'],
      ['erzaehler', 'Am Ende der Woche.'],
      ['nele', 'Ich muss zugeben: Ohne Handy war die Woche ruhiger. Ich habe mehr gelesen als im ganzen letzten Monat.'],
      ['amara', 'Und wir haben mehr miteinander geredet. Aber wer hat gewonnen? Nele und ich haben es beide geschafft!'],
      ['felix', 'Okay, okay. Dann putze ich das Bad. Zwei Wochen lang.'],
    ], { task: 'Hör die Geschichte.', taskEn: 'Listen to the story. die Wette = bet, zugeben = to admit.' }),
    mcq('wg-q1', 'Was gewinnt man bei der Wette?', ['Geld', 'Die anderen putzen das Bad.', 'ein neues Handy'], 1),
    mcq('wg-q2', 'Warum hat Felix verloren?', ['Er hat sein Handy benutzt.', 'Er hat den Laptop benutzt.', 'Er hat nicht geputzt.'], 0),
    mcq('wg-q3', 'Was sagt Nele über die Woche?', ['Sie war langweiliger.', 'Sie war ruhiger und sie hat mehr gelesen.', 'Sie konnte nicht arbeiten.'], 1),
    mcq('wg-q4', 'Wer hat gewonnen?', ['nur Amara', 'Nele und Amara', 'Kenji'], 1),
  ]);

const grammatik = section('grammatik', 'grammatik', 'Grammatik', 'Alles auf einen Blick', 'peach', 10,
  ['Komparativ und Superlativ', 'als und wie', 'dass'], [
    grammar('g-1', 'Nebensätze mit weil und dass', {
      head: ['Hauptsatz', 'Konjunktion', 'Mitte', 'Verb am Ende'],
      rows: [['Ich bleibe zu Hause,', '**weil**', 'ich müde', '**bin**.'], ['Ich glaube,', '**dass**', 'er morgen', '**kommt**.'], ['Sie sagt,', '**dass**', 'sie nicht', '**mitkommen kann**.']],
      en: 'weil and dass both send the conjugated verb to the end.',
    }),
    mcq('g-q1', 'Berlin ist ___ als Leipzig.', ['groß', 'größer', 'am größten'], 1),
    mcq('g-q2', 'Welcher Berg ist ___?', ['am höchsten', 'der höchste', 'höchster'], 1, { why: 'Vor einem Nomen oder als Antwort auf „welcher“ benutzt man der/die/das + -ste: der höchste (Berg). Mit „am“: Der Berg ist am höchsten.' }),
    mcq('g-q3', 'Mein Handy ist so alt ___ deins.', ['als', 'wie', 'dass'], 1),
    mcq('g-q4', 'Ich hoffe, dass du bald ___.', ['kommst', 'kommen', 'du kommst'], 0),
  ]);

const uebungen = section('uebungen', 'uebung', 'Übungen', 'Training', 'butter', 15,
  ['vergleichen', 'Aussprache: b oder w'], [
    order('u-order', ['Ich', 'sehe', 'lieber', 'Filme', 'als', 'Serien.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence.' }),
    audio('u-aus', 'Aussprache: b oder w?', [
      ['frauKlein', 'Bei b sind die Lippen zuerst geschlossen: Bild, besser, Bus, Bahn.'],
      ['frauKlein', 'Bei w berühren die oberen Zähne die Unterlippe: Wette, wichtig, Woche, Wort.'],
      ['frauKlein', 'Hör den Unterschied: Bein, Wein. Bier, wir. Bald, Wald.'],
    ], { task: 'Hör zu und sprich nach.', taskEn: 'Listen and repeat. For b the lips close, for w the top teeth touch the lower lip.' }),
    sort('u-sort', ['b', 'w'], [['besser', 0], ['Wette', 1], ['Bild', 0], ['wichtig', 1], ['Bahn', 0], ['Woche', 1]], { task: 'b oder w?', taskEn: 'Sort the words by their first sound.' }),
    gap('u-gap', ['gut, besser, am {{besten}}', 'viel, mehr, am {{meisten}}', 'gern, {{lieber}}, am liebsten', 'hoch, {{höher}}, am höchsten'], { task: 'Ergänze die unregelmäßigen Formen.', taskEn: 'Fill in the irregular forms.' }),
  ]);

const wortschatz = section('wortschatz', 'wortschatz', 'Wortschatz und Check', 'Das kann ich jetzt', 'mint', 8,
  ['Wörter wiederholen', 'den Stand einschätzen'], [
    cards('w-cards', [
      ['die Medien (Pl.)', 'Handy, Internet, TV …', 'media'], ['der Vorteil', 'etwas Gutes', 'advantage'], ['der Nachteil', 'etwas Schlechtes', 'disadvantage'],
      ['erreichbar', 'man kann dich anrufen', 'reachable'], ['streamen', 'Filme online sehen', 'to stream'], ['posten', 'online veröffentlichen', 'to post'],
      ['vergleichen', 'zwei Dinge nebeneinander sehen', 'to compare'], ['besser', 'Komparativ von gut', 'better'], ['am liebsten', 'Superlativ von gern', 'most of all'],
      ['der Krimi', 'Film über ein Verbrechen', 'crime film'], ['die Komödie', 'lustiger Film', 'comedy'], ['handeln von', 'das Thema sein', 'to be about'],
    ]),
    phrases('w-x-phr', 'Meinungen mit dass', {
      'positiv': ['Ich finde es gut, dass man immer Kontakt hat.', 'Mir gefällt, dass ich Fotos sofort teilen kann.'],
      'negativ': ['Ich mag es nicht, dass manche Leute alles posten.', 'Ich finde es schlecht, dass man ohne Erlaubnis Fotos postet.'],
      'Wünsche': ['Ich möchte, dass meine Freunde mich anrufen.'],
    }),
    match('w-x-match', [['posten', 'etwas ins Internet stellen'], ['teilen', 'anderen zeigen'], ['das Like', 'ein „Gefällt mir“'], ['die Erlaubnis', 'ja sagen dürfen'], ['die Nachricht', 'ein kurzer Text auf dem Handy'], ['offline', 'ohne Internet']],
      { task: 'Wörter und Erklärungen', taskEn: 'Match the word to its meaning.' }),
    gap('w-x-gap', ['Kenji findet, {{dass}} Felix zu viel am Handy ist.', 'Nele sagt, dass ein Kollege seinen Job verloren {{hat}}.', 'Amara möchte, dass niemand Fotos von ihr {{postet}}.', 'Das Tablet ist {{teurer}} als das Handy. (teuer)'],
      { bank: ['dass', 'hat', 'postet', 'teurer'], task: 'Ergänze.', taskEn: 'Fill in. After dass the verb goes to the end.' }),
    mcq('w-x-q1', 'Mein Handy ist ___ alt wie deins.', ['so', 'als', 'wie'], 0, { task: 'als oder wie?', taskEn: 'Comparisons with als and wie.', why: 'gleich: so … wie. Unterschied: Komparativ + als.' }),
    mcq('w-x-q2', 'Das ist das ___ Video von allen!', ['lustigste', 'lustiger', 'lustig'], 0),
    order('w-x-order', ['Ich finde es gut,', 'dass', 'man', 'Fotos', 'teilen', 'kann.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence. The verbs go to the end.' }),
    text('w-story-tip', 'Optional lesen: die Geschichte **Ein Tag offline**. Du findest sie unter Geschichten.', { kicker: 'Extra', en: 'Optional reading: “Ein Tag offline” (A Day Offline), under Stories.' }),
    checklist('w-check', ['Ich kann Vor- und Nachteile von Medien nennen.', 'Ich kann Dinge mit als und wie vergleichen.', 'Ich kenne Komparativ und Superlativ.', 'Ich kann meine Meinung mit dass sagen.', 'Ich kann einen Film kurz beschreiben.']),
  ]);

export const a2k3: Chapter = {
  id: 'a2-k3', number: 3, title: 'Immer online?', theme: 'Medien, Vor- und Nachteile, Vergleiche, Filme',
  grammar: 'Komparativ und Superlativ. Vergleiche mit als und wie. Nebensatz mit dass.',
  sections: [einstieg, teil1, teil2, teil3, wg, grammatik, uebungen, wortschatz],
  games: ['a2k3-sprint', 'a2k3-memory', 'a2k3-satzbau', 'a2k3-artikel'],
  exam: [
    x(1, mcq('x1', 'Ein Auto ist schneller ___ ein Fahrrad.', ['wie', 'als', 'dass'], 1)),
    x(1, mcq('x2', 'Was machst du am ___? Ich lese.', ['liebsten', 'gernsten', 'lieber'], 0)),
    x(1, mcq('x3', 'Ich glaube, dass sie heute nicht ___.', ['kommt', 'kommen', 'kommst'], 0)),
    x(4, gap('x4', ['alt, {{älter}}, am ältesten', 'gut, besser, am {{besten}}', 'teuer, {{teurer}}, am teuersten', 'viel, {{mehr}}, am meisten'], { task: 'Komparativ und Superlativ.' })),
    x(2, gap('x5', ['Er sagt, dass er keine Zeit {{hat}}. (haben)', 'Ich finde, dass man das Handy nachts ausmachen {{soll}}. (sollen)'], { task: 'Verb am Ende.' })),
    x(1, mcq('x6', 'Wie viele Stunden ist Tom am Tag online?', ['zwei', 'vier', 'sechs'], 1),
      audio('x-st1', 'Hören: Eine Umfrage', [
        ['moderatorin', 'Wie lange sind Sie am Tag online?'],
        ['jonas', 'Ich? Ungefähr vier Stunden. Meistens schaue ich Videos oder chatte.'],
        ['moderatorin', 'Ist das zu viel?'],
        ['jonas', 'Ich glaube schon. Abends lege ich das Handy jetzt in die Küche. Dann schlafe ich besser.'],
      ])),
    x(1, mcq('x7', 'Was macht Tom jetzt abends? (Hörtext oben)', ['Er legt das Handy in die Küche.', 'Er schaut Videos.', 'Er macht das Handy kaputt.'], 0)),
    x(1, mcq('x8', 'Für wen ist der Film?', ['nur für Erwachsene', 'für Kinder ab 6', 'für alle ab 12'], 2),
      text('x-st2', '**Kino im Park: Sommerprogramm**\nFreitag, 21:30 Uhr: „Die Wolkenreiter“, Abenteuerfilm, ab 12 Jahren\nBei Regen im Saal der Volkshochschule.\nEintritt: 7 €, Studierende 5 €. Decken mitbringen!', { kicker: 'Lesen' })),
    x(1, mcq('x9', 'Was passiert bei Regen? (Text oben)', ['Der Film fällt aus.', 'Der Film läuft in einem Saal.', 'Man bekommt das Geld zurück.'], 1)),
    x(2, order('x10', ['Mein Bruder', 'ist', 'zwei Jahre', 'älter', 'als ich.'], { task: 'Bau den Satz.' })),
    x(1, mcq('x11', 'Was ist ein Nachteil vom Handy?', ['Man ist immer erreichbar.', 'Man findet schnell Informationen.', 'Man kann Fotos machen.'], 0, { why: '„Immer erreichbar“ kann auch ein Vorteil sein, aber von den drei Antworten ist es die einzige, die man oft als Problem sieht.' })),
    x(1, mcq('x12', 'Ein Film, in dem man viel lacht, ist …', ['ein Krimi', 'eine Komödie', 'ein Horrorfilm'], 1)),
  ],
};

export const gamesA2k3: GameDef[] = [
  {
    id: 'a2k3-sprint', engine: 'sprint', title: 'Vergleichs-Sprint', blurb: 'Komparativ in 60 Sekunden!', skill: 'Komparativ', tone: 'mint', chapter: 3, emoji: '⚡',
    rules: 'Du siehst ein Adjektiv. Tippe auf den richtigen Komparativ.', label: 'Komparativ?',
    items: [
      { q: 'billig', a: 'billiger', wrong: ['billigerer', 'mehr billig'] }, { q: 'alt', a: 'älter', wrong: ['alter', 'älterer'] },
      { q: 'gut', a: 'besser', wrong: ['guter', 'güter'] }, { q: 'groß', a: 'größer', wrong: ['großer', 'größter'] },
      { q: 'viel', a: 'mehr', wrong: ['vieler', 'meister'] }, { q: 'gern', a: 'lieber', wrong: ['gerner', 'liebster'] },
      { q: 'teuer', a: 'teurer', wrong: ['teuerer', 'teuerster'] }, { q: 'jung', a: 'jünger', wrong: ['junger', 'jungster'] },
      { q: 'hoch', a: 'höher', wrong: ['hocher', 'höcher'] }, { q: 'kurz', a: 'kürzer', wrong: ['kurzer', 'kurzster'] },
      { q: 'schnell', a: 'schneller', wrong: ['schnellerer', 'schnellster'] }, { q: 'warm', a: 'wärmer', wrong: ['warmer', 'wärmster'] },
    ],
  },
  {
    id: 'a2k3-memory', engine: 'memory', title: 'Medien-Memory', blurb: 'Medien und Bild: Finde die Paare.', skill: 'Medien', tone: 'lilac', chapter: 3, emoji: '🃏',
    rules: 'Dreh zwei Karten um. Ein Paar ist ein Wort und das passende Bild.', kinds: ['Wort', 'Bild'],
    pairs: [['das Handy', '📱'], ['der Laptop', '💻'], ['der Fernseher', '📺'], ['die Zeitung', '📰'], ['das Radio', '📻'], ['die Kamera', '📷'], ['die Kopfhörer', '🎧'], ['das Mikrofon', '🎙️'], ['die Spielkonsole', '🎮'], ['der Film', '🎬']],
  },
  {
    id: 'a2k3-satzbau', engine: 'satzbau', title: 'dass-Baukasten', blurb: 'Meinungen bauen: Verb ans Ende!', skill: 'Nebensatz mit dass', tone: 'sky', chapter: 3, emoji: '🧱',
    rules: 'Tippe die Wörter in der richtigen Reihenfolge an.',
    sentences: [
      { parts: ['Ich finde,', 'dass', 'das Handy', 'nützlich', 'ist.'], hint: 'dass: Verb am Ende' },
      { parts: ['Er glaubt,', 'dass', 'er', 'gewinnen', 'kann.'], hint: 'Modalverb ganz am Ende' },
      { parts: ['Ein Auto', 'ist', 'teurer', 'als ein Fahrrad.'], hint: 'Komparativ + als' },
      { parts: ['Mein Handy', 'ist', 'so alt', 'wie deins.'], hint: 'so … wie' },
      { parts: ['Kenji', 'kocht', 'am besten.'], hint: 'Superlativ' },
      { parts: ['Sie sagt,', 'dass', 'sie', 'morgen', 'anruft.'], hint: 'trennbar: zusammen am Ende' },
      { parts: ['Der Film', 'handelt', 'von', 'einem Koch.'], hint: 'handeln von + Dativ' },
      { parts: ['Ich', 'trinke', 'lieber', 'Tee', 'als Kaffee.'], hint: 'lieber … als' },
    ],
  },
  {
    id: 'a2k3-artikel', engine: 'regen', title: 'Artikel-Regen', blurb: 'der, die oder das? Medien und Film.', skill: 'Artikel', tone: 'rose', chapter: 3, emoji: '☔',
    rules: 'Ein Nomen fällt herunter. Tippe auf den richtigen Artikel.', buckets: ['der', 'die', 'das'],
    words: artikel('der Film, das Handy, die Serie, der Krimi, das Internet, die Komödie, der Vorteil, das Programm, die Zeitung, der Nachteil, das Drehbuch, die Werbung, der Bildschirm, das Kino, die Umfrage, der Schauspieler, das Genre, die Hauptrolle'),
  },
];
