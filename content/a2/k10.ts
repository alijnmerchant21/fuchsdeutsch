import type { Chapter, GameDef, GlossaryEntry } from '../types';
import { artikel, audio, cards, checklist, compose, gap, grammar, match, mcq, order, overview, phrases, section, sort, text, tip, x } from '../helpers';

// A2 Kapitel 10: Wohnen, Nachbarn, um einen Gefallen bitten, sich beschweren und entschuldigen, Umzug, Haustiere.
// Grammar: Wechselpräpositionen mit Positions- und Richtungsverben, Nebensatz mit als und wenn. Aussprache: Satzakzent.

export const glossaryA2k10: Record<string, GlossaryEntry> = {
  Nachbar: { de: 'Eine Person, die neben dir oder in deinem Haus wohnt.', en: 'neighbor' },
  Gefallen: { de: '„jemandem einen Gefallen tun“: jemandem helfen.', en: 'favor' },
  beschweren: { de: '„sich beschweren“: sagen, dass man mit etwas nicht zufrieden ist.', en: 'to complain' },
  Ruhezeit: { de: 'Eine Zeit, in der man im Haus leise sein muss, zum Beispiel nachts.', en: 'quiet hours' },
  Hausordnung: { de: 'Die Regeln für alle Bewohner in einem Haus.', en: 'house rules' },
  Umzug: { de: 'Wenn man in eine neue Wohnung zieht.', en: 'move (house)' },
  Haustier: { de: 'Ein Tier, das bei Menschen in der Wohnung lebt, zum Beispiel eine Katze.', en: 'pet' },
  Treppenhaus: { de: 'Der Raum mit den Treppen in einem Haus.', en: 'stairwell' },
  Aufzug: { de: 'Eine kleine Kabine, die Menschen nach oben und unten fährt.', en: 'elevator' },
  Briefkasten: { de: 'Hier kommt die Post für die Wohnung an.', en: 'mailbox' },
};

const einstieg = section('einstieg', 'einstieg', 'Einstieg', 'Mein Haus, meine Nachbarn', 'butter', 8,
  ['das Kapitel kennenlernen', 'über Nachbarn sprechen'], [
    overview('e-over', 'Kapitel 10: Zusammen leben',
      'Wie gut kennst du deine [[Nachbar|Nachbarn]]? In Kapitel 10 geht es ums Zusammenleben. Du bittest um einen [[Gefallen]], [[beschweren|beschwerst]] dich höflich und entschuldigst dich. Du verstehst eine [[Hausordnung]], sprichst über einen [[Umzug]] und über [[Haustier|Haustiere]]. Du sagst genau, wo etwas steht und wohin du es stellst.\n\nKenji kommt für ein Wochenende aus Wien zurück. Die WG feiert eine Party. Aber nicht alle im Haus freuen sich darüber.',
      'This chapter is about living together: asking neighbors for a favor, complaining politely and apologizing, house rules, moving and pets. Grammar: two-way prepositions with position verbs (stehen, liegen, hängen) and direction verbs (stellen, legen, hängen), and clauses with als and wenn for the past.',
      ['um einen Gefallen bitten', 'sich beschweren und entschuldigen', 'Ortsangaben machen', 'über Vergangenes mit als und wenn berichten']),
    match('e-match', [['das Treppenhaus', '🪜'], ['der Aufzug', '🛗'], ['der Briefkasten', '📫'], ['die Klingel', '🔔'], ['der Keller', '📦'], ['der Hof', '🌳']], { task: 'Was gibt es in einem Haus?', taskEn: 'Match the parts of a building.' }),
    sort('e-sort', ['ein guter Nachbar', 'ein schlechter Nachbar'], [['nimmt Pakete an', 0], ['macht nachts laut Musik', 1], ['gießt die Blumen im Urlaub', 0], ['parkt vor der Garage', 1], ['grüßt im Treppenhaus', 0], ['lässt den Müll im Flur stehen', 1]], { task: 'Gut oder schlecht?', taskEn: 'Good or bad neighbor?' }),
  ]);

const teil1 = section('teil-1', 'modul', 'Teil 1', 'Könnten Sie mir einen Gefallen tun?', 'mint', 15,
  ['um einen Gefallen bitten', 'sich beschweren', 'sich entschuldigen'], [
    audio('t1-audio', 'Hören: Im Treppenhaus', [
      ['nele', 'Guten Tag, Herr Lehmann. Könnten Sie mir einen Gefallen tun?'],
      ['herrLehmann', 'Na klar, Frau Wagner. Worum geht es denn?'],
      ['nele', 'Ich bekomme morgen ein Paket, aber ich bin den ganzen Tag im Büro. Würden Sie es für mich annehmen?'],
      ['herrLehmann', 'Kein Problem. Ich bin ja Rentner, ich bin immer zu Hause. Aber darf ich Ihnen auch etwas sagen?'],
      ['nele', 'Natürlich.'],
      ['herrLehmann', 'Letzte Woche war es sehr laut bei Ihnen. Um Mitternacht hat jemand Schlagzeug gespielt. Das geht so nicht. Ab zweiundzwanzig Uhr ist Ruhezeit.'],
      ['nele', 'Oh, das tut mir wirklich leid. Das war Felix. Er hat für ein Konzert geübt. Ich sage es ihm. Es kommt nicht wieder vor.'],
      ['herrLehmann', 'Na gut. Danke. Und das Paket hole ich für Sie.'],
    ], { task: 'Hör zu. Was möchten Nele und Herr Lehmann?', taskEn: 'Listen. What does Nele ask, and what does Mr. Lehmann complain about?' }),
    mcq('t1-q1', 'Um welchen Gefallen bittet Nele?', ['Blumen gießen', 'ein Paket annehmen', 'den Müll rausbringen'], 1),
    mcq('t1-q2', 'Worüber beschwert sich Herr Lehmann?', ['über laute Musik in der Nacht', 'über Müll im Treppenhaus', 'über das Fahrrad im Flur'], 0),
    mcq('t1-q3', 'Ab wann ist Ruhezeit?', ['ab 20 Uhr', 'ab 22 Uhr', 'ab Mitternacht'], 1),
    phrases('t1-phr', 'Bitten, beschweren, entschuldigen', {
      'Um einen Gefallen bitten': ['Könnten Sie mir einen Gefallen tun?', 'Würden Sie bitte …?', 'Hättest du kurz Zeit?'],
      'Sich beschweren': ['Entschuldigung, aber …', 'Es war leider sehr laut.', 'Das geht so nicht.', 'Könnten Sie bitte darauf achten, dass …?'],
      'Sich entschuldigen': ['Das tut mir wirklich leid.', 'Entschuldigen Sie bitte.', 'Es kommt nicht wieder vor.'],
    }),
    text('t1-text', `**Hausordnung Fuchsstraße 12 (Auszug)**

1. Ruhezeiten: Von 22 bis 6 Uhr und sonntags den ganzen Tag bitte keinen Lärm machen.
2. Das Treppenhaus wird jede Woche von einer anderen Wohnung geputzt (Plan am Eingang).
3. Fahrräder und Kinderwagen gehören in den Keller, nicht ins Treppenhaus.
4. Den Müll bitte trennen: Papier, Plastik, Bio und Restmüll.
5. Grillen ist im Hof erlaubt, aber nur mit Elektrogrill.`, { kicker: 'Lesen', title: 'Die Hausordnung', task: 'Lies die Hausordnung.', taskEn: 'Read the house rules. Lärm = noise, Müll trennen = to sort the trash.' }),
    mcq('t1-q4', 'Wohin gehören Fahrräder?', ['ins Treppenhaus', 'in den Keller', 'in den Hof'], 1),
    mcq('t1-q5', 'Darf man im Hof grillen?', ['Nein, nie.', 'Ja, aber nur mit Elektrogrill.', 'Ja, mit jedem Grill.'], 1),
  ]);

const teil2 = section('teil-2', 'modul', 'Teil 2', 'Stellen oder stehen?', 'sky', 15,
  ['Ortsangaben machen', 'Positions- und Richtungsverben', 'Wechselpräpositionen'], [
    grammar('t2-gram', 'Positions- und Richtungsverben', {
      intro: 'Es gibt Paare: Ein Verb sagt, **wo** etwas ist (Position, **Dativ**). Das andere sagt, **wohin** man etwas bringt (Bewegung, **Akkusativ**).',
      head: ['Wohin? + Akkusativ (Bewegung)', 'Wo? + Dativ (Position)'],
      rows: [['Ich **stelle** die Vase auf **den** Tisch.', 'Die Vase **steht** auf **dem** Tisch.'], ['Ich **lege** das Buch auf **das** Regal.', 'Das Buch **liegt** auf **dem** Regal.'], ['Ich **hänge** das Bild an **die** Wand.', 'Das Bild **hängt** an **der** Wand.'], ['Ich **setze** mich auf **das** Sofa.', 'Ich **sitze** auf **dem** Sofa.']],
      notes: ['Richtungsverben sind **regelmäßig**: stellen, stellte, hat gestellt.', 'Positionsverben sind **unregelmäßig**: stehen, hat gestanden. liegen, hat gelegen. sitzen, hat gesessen.', 'Wechselpräpositionen: **in, an, auf, unter, über, vor, hinter, neben, zwischen**.'],
      en: 'Direction verbs (stellen, legen, hängen, setzen) + accusative: where to. Position verbs (stehen, liegen, hängen, sitzen) + dative: where. The prepositions in, an, auf, unter, über, vor, hinter, neben, zwischen work both ways.',
    }),
    sort('t2-sort', ['Wohin? (Akkusativ)', 'Wo? (Dativ)'], [['Ich stelle die Lampe neben das Bett.', 0], ['Die Lampe steht neben dem Bett.', 1], ['Er legt die Jacke auf den Stuhl.', 0], ['Die Jacke liegt auf dem Stuhl.', 1], ['Sie hängt das Foto an die Tür.', 0], ['Das Foto hängt an der Tür.', 1]], { task: 'Wo oder wohin?', taskEn: 'Sort: direction (wohin) or position (wo)?' }),
    gap('t2-gap', ['Ich {{stelle}} die Flaschen in den Kühlschrank.', 'Die Flaschen {{stehen}} im Kühlschrank.', 'Felix {{legt}} seine Gitarre auf das Bett.', 'Die Gitarre {{liegt}} auf dem Bett.'], { bank: ['stelle', 'stehen', 'legt', 'liegt'], task: 'Ergänze das Verb.', taskEn: 'Fill in the right verb.' }),
    gap('t2-gap2', ['Ich hänge die Lampe über {{den}} Tisch. (der Tisch)', 'Die Lampe hängt über {{dem}} Tisch.', 'Wir stellen das Sofa vor {{das}} Fenster. (das Fenster)', 'Das Sofa steht vor {{dem}} Fenster.'], { task: 'Akkusativ oder Dativ?', taskEn: 'Fill in the article: accusative for direction, dative for position.' }),
    audio('t2-audio', 'Hören: Party-Vorbereitung', [
      ['amara', 'Felix, stell die Getränke bitte auf den Balkon. Da ist es kühler.'],
      ['felix', 'Okay. Und wo sollen die Gläser stehen?'],
      ['amara', 'Die Gläser stehen schon auf dem Küchentisch. Kannst du die Lichterkette an das Fenster hängen?'],
      ['felix', 'Klar. Und meine Gitarre? Darf ich sie ins Wohnzimmer stellen?'],
      ['nele', 'Gitarre ja, Schlagzeug nein! Denk an Herrn Lehmann.'],
    ], { task: 'Hör zu. Wohin kommen die Sachen?', taskEn: 'Listen. Where do things go for the party? Lichterkette = string lights.' }),
    match('t2-match', [['die Getränke', 'auf den Balkon'], ['die Gläser', 'auf dem Küchentisch'], ['die Lichterkette', 'an das Fenster'], ['die Gitarre', 'ins Wohnzimmer']], { task: 'Was kommt wohin?', taskEn: 'What goes where?' }),
  ]);

const teil3 = section('teil-3', 'modul', 'Teil 3', 'Als ich klein war …', 'lilac', 15,
  ['über Vergangenes berichten', 'Nebensatz mit als und wenn', 'über Haustiere sprechen'], [
    grammar('t3-gram', 'als oder wenn?', {
      intro: '**als** und **wenn** leiten Nebensätze über Zeit ein. Das Verb steht am Ende.',
      head: ['', 'Vergangenheit', 'Gegenwart / Zukunft'],
      rows: [['**einmal**', '**als**: *Als ich nach Leipzig gezogen bin, kannte ich niemanden.*', '**wenn**: *Wenn ich morgen umziehe, hilft mir Felix.*'], ['**mehrmals / immer**', '**wenn**: *(Immer) wenn wir Oma besucht haben, gab es Kuchen.*', '**wenn**: *Wenn es regnet, bleibe ich zu Hause.*']],
      notes: ['Merke: **als** nur für **ein Ereignis** oder **einen Zeitraum** in der **Vergangenheit**: *Als ich ein Kind war, …*', 'Sonst immer **wenn**.'],
      en: 'als = when, for a single event or period in the past (Als ich ein Kind war). wenn = when/whenever for repeated events in the past, and for the present and future.',
    }),
    sort('t3-sort', ['als', 'wenn'], [['___ ich zehn war, hatte ich einen Hund.', 0], ['___ ich Zeit habe, gehe ich spazieren.', 1], ['___ wir 2019 umgezogen sind, war es Winter.', 0], ['Immer ___ es geklingelt hat, hat der Hund gebellt.', 1], ['___ Kenji in Wien angekommen ist, war er nervös.', 0], ['___ du morgen kommst, koche ich.', 1]], { task: 'als oder wenn?', taskEn: 'Sort: als or wenn?' }),
    text('t3-text', `**Unsere Haustiere: Leser erzählen**

**Ute, 58:** Als ich ein Kind war, hatten wir eine Katze namens Mimi. Immer wenn ich aus der Schule gekommen bin, hat sie vor der Tür gewartet. Heute habe ich zwei Katzen.

**Jonas, 24:** Ich wohne in einer kleinen Wohnung, deshalb habe ich keinen Hund. Aber ich habe ein Aquarium mit zehn Fischen. Die sind leise, und die Nachbarn beschweren sich nie.

**Familie Okafor:** Als wir letztes Jahr ins Haus mit Garten umgezogen sind, haben wir einen Hund aus dem Tierheim geholt. Er heißt Bruno. Wenn die Kinder spielen, ist er immer dabei.

**Info:** In Deutschland leben über 30 Millionen Haustiere. Am beliebtesten sind Katzen, dann kommen Hunde, Kleintiere wie Kaninchen und Vögel.`, { kicker: 'Lesen', title: 'Haustiere', task: 'Lies die Texte.', taskEn: 'Read about readers’ pets. Tierheim = animal shelter.' }),
    mcq('t3-q1', 'Was hat Mimi immer gemacht?', ['Sie hat vor der Tür gewartet.', 'Sie hat geschlafen.', 'Sie ist weggelaufen.'], 0),
    mcq('t3-q2', 'Warum hat Jonas keinen Hund?', ['Er mag keine Hunde.', 'Seine Wohnung ist klein.', 'Die Nachbarn wollen das nicht.'], 1),
    mcq('t3-q3', 'Welche Haustiere sind in Deutschland am beliebtesten?', ['Hunde', 'Katzen', 'Fische'], 1),
    gap('t3-gap', ['{{Als}} ich klein war, wohnten wir auf dem Land.', '{{Wenn}} ich nach Hause komme, mache ich Tee.', 'Immer {{wenn}} wir am Meer waren, war das Wetter schlecht.', '{{Als}} Kenji nach Wien gefahren ist, waren alle traurig.'], { bank: ['Als', 'Wenn', 'wenn'], task: 'als oder wenn?', taskEn: 'Fill in als or wenn.' }),
    compose('t3-comp', 'Erzähl von deiner Kindheit.', [
      ['Wo hast du gewohnt?', 'Where did you live?', ['Als', 'ich ein Kind war,', 'habe ich', 'in Lima gewohnt.']],
      ['Was hast du immer gemacht?', 'What did you always do?', ['Immer wenn', 'es warm war,', 'sind wir', 'ans Meer gefahren.']],
      ['Ein besonderes Ereignis', 'A special event', ['Als', 'ich zwölf war,', 'habe ich', 'einen Hund bekommen.']],
    ], { task: 'Bau die Sätze.', taskEn: 'Build the sentences.' }),
  ]);

const wg = section('wg', 'kommunikation', 'Die Fuchsbau-WG', 'Folge 10: Nach der Party', 'rose', 10,
  ['eine Geschichte hören', 'sich entschuldigen'], [
    text('wg-intro', 'Kenji ist für ein Wochenende aus Wien zurück. Die Party war toll. Aber jetzt ist es Sonntagmorgen. Es klingelt.', { kicker: 'Die Geschichte', en: 'Kenji is back from Vienna for the weekend. The party was great. Now it is Sunday morning. The doorbell rings.' }),
    audio('wg-audio', 'Folge 10: Nach der Party', [
      ['herrLehmann', 'Guten Morgen. Ich möchte mich beschweren. Es war bis drei Uhr laut! Und im Treppenhaus liegen Flaschen.'],
      ['nele', 'Herr Lehmann, das tut uns wirklich leid. Wir räumen sofort auf.'],
      ['kenji', 'Guten Morgen, Herr Lehmann. Ich bin Kenji. Ich war in Wien und bin nur dieses Wochenende hier. Die Party war für mich. Es ist meine Schuld.'],
      ['herrLehmann', 'Ach, Sie sind der Koch? Der mit dem Pop-up-Restaurant? Meine Frau hat in der Zeitung über Sie gelesen.'],
      ['kenji', 'Ja, das bin ich. Darf ich Ihnen als Entschuldigung etwas mitgeben? Ich habe gestern einen Kuchen gebacken. Matcha-Eierschecke.'],
      ['herrLehmann', 'Eierschecke? Mit Matcha? Na, das muss ich probieren. Als ich jung war, hat meine Mutter jeden Sonntag Eierschecke gebacken.'],
      ['kenji', 'Dann hoffe ich, dass sie Ihnen schmeckt.'],
      ['herrLehmann', 'Na gut. Entschuldigung angenommen. Aber nächstes Mal laden Sie mich ein. Dann ist es auch nicht zu laut!'],
    ], { task: 'Hör die Geschichte.', taskEn: 'Listen to the story. Schuld = fault, blame.' }),
    mcq('wg-q1', 'Worüber beschwert sich Herr Lehmann?', ['Lärm und Flaschen im Treppenhaus', 'das Fahrrad im Flur', 'den Müll im Hof'], 0),
    mcq('wg-q2', 'Was gibt Kenji Herrn Lehmann?', ['Blumen', 'einen Kuchen', 'Wein'], 1),
    mcq('wg-q3', 'Was hat Herrn Lehmanns Mutter früher gemacht?', ['jeden Sonntag Eierschecke gebacken', 'in einem Restaurant gekocht', 'Schlagzeug gespielt'], 0),
    mcq('wg-q4', 'Was möchte Herr Lehmann beim nächsten Mal?', ['dass es keine Party gibt', 'eingeladen werden', 'die Polizei rufen'], 1),
  ]);

const grammatik = section('grammatik', 'grammatik', 'Grammatik', 'Alles auf einen Blick', 'peach', 10,
  ['stellen/stehen', 'als/wenn'], [
    grammar('g-1', 'Verbpaare', {
      head: ['Wohin? (regelmäßig)', 'Perfekt', 'Wo? (unregelmäßig)', 'Perfekt'],
      rows: [['stellen', 'hat gestellt', 'stehen', 'hat gestanden'], ['legen', 'hat gelegt', 'liegen', 'hat gelegen'], ['setzen', 'hat gesetzt', 'sitzen', 'hat gesessen'], ['hängen', 'hat gehängt', 'hängen', 'hat gehangen']],
      en: 'Direction verbs are regular, position verbs are irregular. hängen has both meanings with different participles.',
    }),
    mcq('g-q1', 'Wo ist das Buch? Es ___ auf dem Tisch.', ['legt', 'liegt', 'stellt'], 1),
    mcq('g-q2', 'Ich stelle die Blumen auf ___ Balkon.', ['dem', 'den', 'der'], 1),
    mcq('g-q3', '___ ich klein war, hatte ich Angst vor Hunden.', ['Wenn', 'Als', 'Ob'], 1),
    mcq('g-q4', 'Immer ___ ich Oma besucht habe, hat sie gekocht.', ['als', 'wenn', 'dass'], 1),
  ]);

const uebungen = section('uebungen', 'uebung', 'Übungen', 'Training', 'butter', 15,
  ['sich beschweren', 'Aussprache: Satzakzent'], [
    compose('u-comp', 'Dein Nachbar macht oft nachts laute Musik. Sprich höflich mit ihm.', [
      ['Begrüß ihn und sag das Problem.', 'Greet him and say the problem.', ['Entschuldigung,', 'aber gestern', 'war es', 'sehr laut.']],
      ['Sag, warum das ein Problem ist.', 'Say why this is a problem.', ['Ich', 'muss', 'um sechs', 'aufstehen.']],
      ['Bitte ihn höflich.', 'Ask him politely.', ['Könnten', 'Sie', 'nachts bitte', 'leiser sein?']],
    ], { task: 'Bau das Gespräch.', taskEn: 'Build the conversation.' }),
    audio('u-aus', 'Aussprache: Satzakzent', [
      ['frauKlein', 'Das wichtigste Wort im Satz ist am lautesten. Hör zu: Die Party war LAUT.'],
      ['frauKlein', 'Und jetzt eine Korrektur: Nicht die Musik war laut. Die GÄSTE waren laut.'],
      ['frauKlein', 'Das Buch liegt nicht UNTER dem Tisch, es liegt AUF dem Tisch.'],
      ['frauKlein', 'Wenn du etwas korrigierst, betonst du das neue Wort.'],
    ], { task: 'Hör zu und sprich nach.', taskEn: 'Listen and repeat. The most important word in a sentence is stressed, especially when you correct something.' }),
    mcq('u-q1', '„Das Buch liegt nicht UNTER dem Tisch, sondern AUF dem Tisch.“ Welche Wörter sind betont?', ['Buch, Tisch', 'unter, auf', 'liegt, nicht'], 1),
    order('u-order', ['Ich', 'hänge', 'das Bild', 'an', 'die Wand.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence.' }),
  ]);

const wortschatz = section('wortschatz', 'wortschatz', 'Wortschatz und Check', 'Das kann ich jetzt', 'mint', 8,
  ['Wörter wiederholen', 'den Stand einschätzen'], [
    cards('w-cards', [
      ['der Nachbar / die Nachbarin', 'wohnt nebenan', 'neighbor'], ['der Gefallen', 'eine kleine Hilfe', 'favor'], ['sich beschweren', 'sagen, dass etwas nicht gut ist', 'to complain'],
      ['die Ruhezeit', 'Zeit für Ruhe im Haus', 'quiet hours'], ['die Hausordnung', 'Regeln im Haus', 'house rules'], ['das Treppenhaus', 'die Treppen im Haus', 'stairwell'],
      ['umziehen', 'in eine neue Wohnung gehen', 'to move'], ['das Haustier', 'Tier in der Wohnung', 'pet'], ['stellen / stehen', 'wohin / wo', 'to put / to stand'],
      ['legen / liegen', 'wohin / wo', 'to lay / to lie'], ['als', 'einmal in der Vergangenheit', 'when (past, once)'], ['Das kommt nicht wieder vor.', 'Ich mache das nicht noch einmal.', 'It won’t happen again.'],
    ]),
    checklist('w-check', ['Ich kann um einen Gefallen bitten.', 'Ich kann mich höflich beschweren und entschuldigen.', 'Ich kenne stellen/stehen, legen/liegen, hängen.', 'Ich kann als und wenn richtig benutzen.', 'Ich kann über Haustiere sprechen.']),
  ]);

export const a2k10: Chapter = {
  id: 'a2-k10', number: 10, title: 'Zusammen leben', theme: 'Nachbarn, Hausordnung, Umzug, Haustiere',
  grammar: 'Wechselpräpositionen mit Positions- und Richtungsverben. Nebensatz mit als und wenn.',
  sections: [einstieg, teil1, teil2, teil3, wg, grammatik, uebungen, wortschatz],
  games: ['a2k10-sprint', 'a2k10-memory', 'a2k10-satzbau', 'a2k10-artikel'],
  exam: [
    x(1, mcq('x1', 'Ich ___ die Tasse auf den Tisch.', ['stelle', 'stehe', 'liege'], 0)),
    x(1, mcq('x2', 'Das Bild hängt an ___ Wand.', ['die', 'der', 'den'], 1)),
    x(1, mcq('x3', '___ ich 2020 nach Berlin gezogen bin, war alles neu.', ['Wenn', 'Als', 'Ob'], 1)),
    x(4, gap('x4', ['Die Katze {{liegt}} auf dem Sofa. (liegen/legen)', 'Ich {{lege}} die Zeitung auf den Tisch. (liegen/legen)', 'Er {{stellt}} das Rad in den Keller. (stehen/stellen)', 'Das Rad {{steht}} im Keller. (stehen/stellen)'], { task: 'Positions- oder Richtungsverb.' })),
    x(2, gap('x5', ['{{Als}} ich jung war, habe ich viel getanzt.', 'Immer {{wenn}} es schneit, fahren wir Schlitten.'], { task: 'als oder wenn.' })),
    x(1, mcq('x6', 'Was bittet die Nachbarin?', ['ein Paket annehmen', 'die Katze füttern', 'die Blumen gießen'], 1),
      audio('x-st1', 'Hören: Eine Bitte', [
        ['frauHaeberle', 'Hallo, Frau Okafor! Könnten Sie mir einen Gefallen tun? Ich fahre am Freitag für eine Woche zu meiner Schwester.'],
        ['amara', 'Natürlich, gerne. Was soll ich machen?'],
        ['frauHaeberle', 'Würden Sie meine Katze füttern? Einmal am Tag reicht. Ich gebe Ihnen meinen Schlüssel.'],
        ['amara', 'Kein Problem. Ich mag Katzen.'],
      ])),
    x(1, mcq('x7', 'Wie lange ist die Nachbarin weg? (Hörtext oben)', ['ein Wochenende', 'eine Woche', 'einen Monat'], 1)),
    x(1, mcq('x8', 'Wann muss man leise sein?', ['von 20 bis 7 Uhr', 'von 22 bis 6 Uhr', 'nur am Sonntag'], 1),
      text('x-st2', '**Liebe Hausbewohner,**\nbitte denken Sie an die Ruhezeit von 22 bis 6 Uhr. Am Samstag, 10. Mai, ist von 9 bis 12 Uhr das Wasser abgestellt, weil im Keller gearbeitet wird. Vielen Dank für Ihr Verständnis!\nIhre Hausverwaltung', { kicker: 'Lesen' })),
    x(1, mcq('x9', 'Was gibt es am 10. Mai von 9 bis 12 Uhr nicht? (Text oben)', ['Strom', 'Wasser', 'Internet'], 1)),
    x(2, order('x10', ['Könnten', 'Sie', 'mir', 'einen Gefallen', 'tun?'], { task: 'Bau die Frage.' })),
    x(1, mcq('x11', 'Du hast etwas falsch gemacht. Was sagst du?', ['Das tut mir leid. Es kommt nicht wieder vor.', 'Das geht so nicht!', 'Kein Problem!'], 0)),
    x(1, mcq('x12', 'Wohin gehören Fahrräder nach vielen Hausordnungen?', ['ins Treppenhaus', 'in den Keller', 'in die Küche'], 1)),
  ],
};

export const gamesA2k10: GameDef[] = [
  {
    id: 'a2k10-sprint', engine: 'sprint', title: 'Wo-Wohin-Sprint', blurb: 'stellen oder stehen? Schnell!', skill: 'Positions- und Richtungsverben', tone: 'mint', chapter: 10, emoji: '⚡',
    rules: 'Du siehst einen Satz. Tippe auf das richtige Verb.', label: 'Welches Verb?',
    items: [
      { q: 'Ich ___ die Vase auf den Tisch.', a: 'stelle', wrong: ['stehe', 'liege'] }, { q: 'Die Vase ___ auf dem Tisch.', a: 'steht', wrong: ['stellt', 'legt'] },
      { q: 'Ich ___ das Buch ins Regal.', a: 'stelle', wrong: ['stehe', 'sitze'] }, { q: 'Er ___ die Jacke aufs Bett.', a: 'legt', wrong: ['liegt', 'steht'] },
      { q: 'Die Jacke ___ auf dem Bett.', a: 'liegt', wrong: ['legt', 'stellt'] }, { q: 'Sie ___ das Bild an die Wand.', a: 'hängt', wrong: ['hangt', 'stellt'] },
      { q: 'Ich ___ mich aufs Sofa.', a: 'setze', wrong: ['sitze', 'stelle'] }, { q: 'Ich ___ auf dem Sofa.', a: 'sitze', wrong: ['setze', 'lege'] },
      { q: 'Die Katze ___ unter dem Tisch.', a: 'liegt', wrong: ['legt', 'stellt'] }, { q: 'Wir ___ das Sofa vor das Fenster.', a: 'stellen', wrong: ['stehen', 'liegen'] },
      { q: 'Die Schuhe ___ im Flur.', a: 'stehen', wrong: ['stellen', 'legen'] }, { q: 'Er hat das Handy auf den Tisch ___.', a: 'gelegt', wrong: ['gelegen', 'gestanden'] },
    ],
  },
  {
    id: 'a2k10-memory', engine: 'memory', title: 'Haustier-Memory', blurb: 'Tier und Bild: Finde die Paare.', skill: 'Haustiere', tone: 'lilac', chapter: 10, emoji: '🃏',
    rules: 'Dreh zwei Karten um. Ein Paar ist ein Tier und das passende Bild.', kinds: ['Wort', 'Bild'],
    pairs: [['die Katze', '🐈'], ['der Hund', '🐕'], ['das Kaninchen', '🐇'], ['der Vogel', '🐦'], ['der Fisch', '🐠'], ['die Schildkröte', '🐢'], ['das Meerschweinchen', '🐹'], ['das Pferd', '🐎'], ['die Maus', '🐁'], ['die Schlange', '🐍']],
  },
  {
    id: 'a2k10-satzbau', engine: 'satzbau', title: 'Nachbar-Baukasten', blurb: 'Bau Sätze für das Zusammenleben.', skill: 'Satzbau', tone: 'sky', chapter: 10, emoji: '🧱',
    rules: 'Tippe die Wörter in der richtigen Reihenfolge an.',
    sentences: [
      { parts: ['Ich', 'stelle', 'die Getränke', 'auf den Balkon.'], hint: 'wohin: Akkusativ' },
      { parts: ['Die Gläser', 'stehen', 'auf dem', 'Tisch.'], hint: 'wo: Dativ' },
      { parts: ['Als', 'ich', 'ein Kind', 'war,', 'hatte ich eine Katze.'], hint: 'als: einmal in der Vergangenheit' },
      { parts: ['Wenn', 'es', 'laut', 'ist,', 'kann ich nicht schlafen.'], hint: 'wenn: Verb, Komma, Verb' },
      { parts: ['Könnten', 'Sie', 'das Paket', 'annehmen?'], hint: 'höfliche Bitte' },
      { parts: ['Das', 'tut', 'mir', 'wirklich leid.'], hint: 'sich entschuldigen' },
      { parts: ['Es', 'kommt', 'nicht', 'wieder vor.'], hint: 'Versprechen' },
      { parts: ['Er', 'hängt', 'das Bild', 'an die Wand.'], hint: 'hängen + Akkusativ' },
    ],
  },
  {
    id: 'a2k10-artikel', engine: 'regen', title: 'Artikel-Regen', blurb: 'der, die oder das? Haus und Nachbarn.', skill: 'Artikel', tone: 'rose', chapter: 10, emoji: '☔',
    rules: 'Ein Nomen fällt herunter. Tippe auf den richtigen Artikel.', buckets: ['der', 'die', 'das'],
    words: artikel('der Nachbar, das Treppenhaus, die Hausordnung, der Keller, das Haustier, die Klingel, der Aufzug, das Paket, die Ruhezeit, der Umzug, das Tierheim, die Lichterkette, der Briefkasten, das Regal, die Schuld, der Lärm, das Kaninchen, die Entschuldigung'),
  },
];
