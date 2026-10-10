import type { Chapter, GameDef, GlossaryEntry } from './types';
import { artikel, audio, cards, checklist, compose, gap, grammar, match, mcq, order, overview, phrases, poll, section, sort, text, tip, x } from './helpers';

// Kapitel 8: theme Umwelt und Natur. Grammar: Relativsätze mit wo, was und wo(r)- + Präposition, Konjunktiv II.

export const glossary8: Record<string, GlossaryEntry> = {
  Umwelt: { de: 'Die Natur um uns herum: Luft, Wasser, Boden, Pflanzen, Tiere.', en: 'environment' },
  umweltfreundlich: { de: 'Gut für die Umwelt oder wenig schädlich.', en: 'environmentally friendly' },
  Verpackung: { de: 'Das Material um ein Produkt herum, zum Beispiel Plastik oder Karton.', en: 'packaging' },
  Mehrweg: { de: 'Eine Flasche oder ein Becher, der viele Male benutzt wird.', en: 'reusable (deposit system)' },
  Klimawandel: { de: 'Die langsame Veränderung des Klimas auf der Erde.', en: 'climate change' },
  Treibhausgas: { de: 'Ein Gas, das die Wärme in der Atmosphäre festhält, zum Beispiel CO₂.', en: 'greenhouse gas' },
  Atmosphäre: { de: 'Die Schicht aus Luft um die Erde.', en: 'atmosphere' },
  Gletscher: { de: 'Eine große Masse aus Eis in den Bergen.', en: 'glacier' },
  Dürre: { de: 'Eine lange Zeit ohne Regen.', en: 'drought' },
  Überschwemmung: { de: 'Wasser bedeckt Land, das normalerweise trocken ist.', en: 'flood' },
  erneuerbar: { de: 'Energie aus Sonne, Wind oder Wasser, die nicht zu Ende geht.', en: 'renewable' },
  Ausstoß: { de: 'Die Menge an Gasen, die in die Luft kommt.', en: 'emissions' },
  Baumwolle: { de: 'Eine Pflanze, aus der man Stoff für Kleidung macht.', en: 'cotton' },
  färben: { de: 'Einem Stoff eine Farbe geben.', en: 'to dye' },
  Näherin: { de: 'Eine Frau, die Kleidung näht.', en: 'seamstress' },
  Lieferkette: { de: 'Alle Schritte von den Rohstoffen bis zum fertigen Produkt im Geschäft.', en: 'supply chain' },
  Lichtverschmutzung: { de: 'Zu viel künstliches Licht in der Nacht.', en: 'light pollution' },
  Zugvogel: { de: 'Ein Vogel, der im Herbst in den Süden fliegt und im Frühling zurückkommt.', en: 'migratory bird' },
  Insekt: { de: 'Ein kleines Tier mit sechs Beinen, zum Beispiel eine Biene.', en: 'insect' },
  Straßenlaterne: { de: 'Eine Lampe an der Straße.', en: 'street lamp' },
  Bewegungsmelder: { de: 'Ein Gerät, das das Licht einschaltet, wenn sich jemand bewegt.', en: 'motion sensor' },
  Mülltrennung: { de: 'Müll wird nach Material sortiert: Papier, Glas, Plastik, Bio.', en: 'waste separation' },
  Kehrwoche: { de: 'In Schwaben: Die Bewohner putzen abwechselnd Treppenhaus und Gehweg.', en: 'Swabian cleaning rota for shared areas' },
  Pfand: { de: 'Geld, das man für eine Flasche zahlt und zurückbekommt, wenn man sie zurückbringt.', en: 'bottle deposit' },
};

const einstieg = section('einstieg', 'einstieg', 'Einstieg', 'Was ist umweltfreundlicher?', 'butter', 10,
  ['das Kapitel kennenlernen', 'über die Umweltverträglichkeit von Produkten sprechen'], [
    overview('e-over', 'Kapitel 8: Grüner wird es nicht',
      'Im letzten Kapitel geht es um **Umwelt und Natur**. Was genau ist der Klimawandel, und was kann ein einzelner Mensch tun? Welchen Weg hat dein T-Shirt hinter sich, bevor du es kaufst? Und warum ist es ein Problem, wenn es nachts nicht mehr dunkel wird? Du liest einen Erklärtext und einen Flyer, hörst ein Gespräch von einem Infoabend und lernst, Informationen klar und geordnet an andere weiterzugeben.\n\nIn der Grammatik lernst du Relativsätze mit **wo** und **was** und den **Konjunktiv II**, mit dem man über Irreales, Wünsche, Vermutungen und höfliche Bitten spricht: *Wenn ich mehr Zeit hätte, würde ich …*',
      'The last chapter is about the environment: climate change, the journey of a T-shirt, and light pollution. You learn to pass on information in a clear structure. Grammar: relative clauses with wo and was, and Konjunktiv II for unreal situations, wishes, guesses and polite requests.',
      ['Ursachen und Folgen des Klimawandels einfach erklären', 'einen Prozess Schritt für Schritt beschreiben', 'über Irreales und Wünsche sprechen', 'Informationen strukturiert zusammenfassen und weitergeben']),
    text('e-intro', 'Stoffbeutel oder Papiertüte? Glasflasche oder Plastikflasche? Was [[umweltfreundlich]] ist, hängt oft davon ab, wie oft man etwas benutzt. Ein Stoffbeutel ist erst dann besser als eine Plastiktüte, wenn man ihn sehr oft verwendet. Eine [[Mehrweg]]flasche aus Glas ist gut, wenn sie nicht weit transportiert wird.', { kicker: 'Zum Einstieg' }),
    mcq('e-q1', 'Wann ist ein Stoffbeutel umweltfreundlicher als eine Plastiktüte?', ['immer', 'wenn man ihn sehr oft benutzt', 'wenn er bunt ist'], 1, { task: 'Was sagt der Text?', taskEn: 'What does the text say?' }),
    poll('e-poll', [['Fahrrad', 'Auto'], ['Leitungswasser', 'Wasser in Flaschen'], ['reparieren', 'neu kaufen'], ['Zug', 'Flugzeug'], ['regional', 'egal woher']],
      { task: 'Was machst du meistens?', taskEn: 'What do you usually do? There is no wrong answer.' }),
    sort('e-sort', ['Papier', 'Glas', 'Biomüll', 'Restmüll'], [['die Zeitung', 0], ['das Marmeladenglas', 1], ['die Bananenschale', 2], ['der Staubsaugerbeutel', 3], ['der Karton', 0], ['die Weinflasche', 1], ['der Kaffeesatz', 2], ['die Zahnbürste', 3]],
      { task: 'Mülltrennung: Was gehört wohin?', taskEn: 'Waste separation: what goes where?' }),
    match('e-match', [['Energie', 'sparen'], ['Müll', 'trennen'], ['Wasser', 'verschwenden'], ['die Umwelt', 'schützen'], ['Plastik', 'vermeiden'], ['Pfandflaschen', 'zurückbringen']],
      { task: 'Welches Verb passt?', taskEn: 'Which verb fits?' }),
  ]);

const modul1 = section('modul-1', 'modul', 'Modul 1', 'Klimawandel', 'mint', 25,
  ['Erklärungen zum Klimawandel verstehen', 'über den Klimawandel sprechen', 'Grammatik: Relativsätze mit wo, was und wo(r)-'], [
    text('m1-text', `Die Erde ist von einer Schicht aus Gasen umgeben, der [[Atmosphäre]]. Einige dieser Gase halten einen Teil der Sonnenwärme fest. Das ist zunächst etwas, was das Leben überhaupt erst möglich macht: Ohne diesen natürlichen Effekt wäre es auf der Erde eiskalt.

Das Problem ist die Menge. Überall dort, wo Kohle, Öl und Gas verbrannt werden, entstehen zusätzliche [[Treibhausgas|Treibhausgase]]: in Kraftwerken, Fabriken, Autos und Heizungen. Je mehr davon in der Atmosphäre sind, desto mehr Wärme bleibt. Seit Beginn der Industrialisierung ist die Durchschnittstemperatur deshalb deutlich gestiegen.

Die Folgen sieht man schon heute. In den Alpen, wo viele Flüsse Europas entspringen, schmelzen die [[Gletscher]]. In manchen Regionen gibt es häufiger [[Dürre]], in anderen mehr [[Überschwemmung|Überschwemmungen]]. Das Meer steigt, was besonders für flache Küsten gefährlich ist.

Was kann man tun? Das Wichtigste, was die Wissenschaft empfiehlt, ist ein schneller Wechsel zu [[erneuerbar|erneuerbaren]] Energien. Dazu kommt alles, was den eigenen [[Ausstoß]] senkt: weniger fliegen, weniger Fleisch essen, Wohnungen besser dämmen. Vieles, worüber heute gestritten wird, ist dabei keine Frage der Technik mehr, sondern eine Frage der Entscheidung.`,
      { kicker: 'Lesen', title: 'Kurz erklärt: der Klimawandel', task: 'Lies die Erklärung.', taskEn: 'Read the explanation. Notice the relative clauses with wo, was and worüber.' }),
    mcq('m1-q1', 'Warum ist der natürliche Treibhauseffekt wichtig?', ['Ohne ihn wäre es auf der Erde zu kalt für Leben.', 'Er macht die Luft sauber.', 'Er bringt Regen.'], 0, { task: 'Hast du den Text verstanden?', taskEn: 'Check your understanding.' }),
    mcq('m1-q2', 'Wodurch entstehen zusätzliche Treibhausgase?', ['durch Windräder', 'durch das Verbrennen von Kohle, Öl und Gas', 'durch Gletscher'], 1),
    mcq('m1-q3', 'Was empfiehlt die Wissenschaft vor allem?', ['mehr Straßen zu bauen', 'auf das Meer zu ziehen', 'schnell auf erneuerbare Energien umzusteigen'], 2),
    sort('m1-sort', ['Ursache', 'Folge', 'Lösung'], [['Kohle und Öl verbrennen', 0], ['Gletscher schmelzen', 1], ['erneuerbare Energien nutzen', 2], ['viele Flüge', 0], ['häufigere Dürren', 1], ['Häuser besser dämmen', 2], ['das Meer steigt', 1]],
      { task: 'Ursache, Folge oder Lösung?', taskEn: 'Cause, effect or solution?' }),
    grammar('m1-gram', 'Relativsätze mit wo, was und wo(r)-', {
      head: ['Relativwort', 'Wann?', 'Beispiel'],
      rows: [
        ['**wo**', 'nach Ortsangaben (statt in dem, an der …)', 'In den Alpen, **wo** viele Flüsse entspringen, schmelzen die Gletscher.'],
        ['**was**', 'nach **alles, etwas, nichts, vieles, das**', 'Das ist etwas, **was** das Leben möglich macht. Alles, **was** den Ausstoß senkt, hilft.'],
        ['**was**', 'nach einem Superlativ als Nomen', 'Das Wichtigste, **was** man tun kann, ist …'],
        ['**was**', 'wenn es sich auf den ganzen Satz bezieht', 'Das Meer steigt, **was** für Küsten gefährlich ist.'],
        ['**wo(r)-** + Präposition', 'wie *was*, aber das Verb braucht eine Präposition', 'Vieles, **worüber** gestritten wird, … (streiten über)'],
      ],
      notes: ['Nach Städten und Ländern steht immer **wo**: *in Wien, **wo** ich studiert habe*.', 'Nach einem normalen Nomen steht **das**, nicht was: *das Problem, **das** wir haben*.'],
      en: 'Use wo after places. Use was after alles, etwas, nichts, vieles, das, after superlatives used as nouns (das Beste, was …), and when referring to a whole sentence. If the verb needs a preposition, use wo(r)- + preposition: worüber, wofür.',
    }),
    gap('m1-gap', ['Das ist alles, {{was}} ich weiß.', 'Die Stadt, {{wo}} ich geboren bin, liegt am Meer.', 'Das Beste, {{was}} du tun kannst, ist Rad fahren.', 'Er kommt immer zu spät, {{was}} mich sehr ärgert.', 'Es gibt nichts, {{was}} man nicht reparieren kann.', 'Hamburg, {{wo}} meine Schwester lebt, hat einen großen Hafen.'],
      { task: 'wo oder was?', taskEn: 'wo or was?' }),
    gap('m1-gap2', ['Das ist etwas, {{worüber}} wir sprechen müssen. (sprechen über)', 'Es gibt vieles, {{wofür}} ich dankbar bin. (dankbar sein für)', 'Das ist das Problem, {{das}} uns alle betrifft.', 'Das ist nichts, {{wovor}} du Angst haben musst. (Angst haben vor)'],
      { bank: ['worüber', 'wofür', 'wovor', 'das'], task: 'Welches Relativwort passt?', taskEn: 'Which relative word fits?' }),
    order('m1-order', ['Alles,', 'was', 'den Ausstoß', 'senkt,', 'hilft dem Klima.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence.', hint: 'Relativsatz zwischen zwei Kommas' }),
    compose('m1-comp', 'Erklär einem Kind in vier einfachen Sätzen den Klimawandel.', [
      ['Sag, was die Atmosphäre macht.', 'Say what the atmosphere does.', ['Um die Erde', 'gibt es', 'eine Schicht aus Gasen,', 'die die Wärme', 'festhält.']],
      ['Nenne die Ursache.', 'Name the cause.', ['Überall,', 'wo Kohle und Öl', 'verbrannt werden,', 'entstehen', 'mehr Gase.']],
      ['Nenne eine Folge.', 'Name an effect.', ['Deshalb', 'wird es wärmer,', 'was', 'für viele Tiere', 'gefährlich ist.']],
      ['Sag, was hilft.', 'Say what helps.', ['Das Beste,', 'was wir tun können,', 'ist', 'Energie', 'zu sparen.']],
    ], { task: 'Bau eine einfache Erklärung.', taskEn: 'Build a simple explanation.' }),
  ]);

const modul2 = section('modul-2', 'modul', 'Modul 2', 'Was ziehe ich an?', 'sky', 20,
  ['einen Prozess verstehen und beschreiben', 'Forumsbeiträge verstehen', 'kritisch bewerten'], [
    tip('m2-tip', 'Strategie: Vorwissen aktivieren', 'Bevor du einen Text liest, frag dich kurz: **Was weiß ich schon über das Thema?** Woraus ist ein T-Shirt? Wo wird Kleidung genäht? Mit diesen Fragen im Kopf verstehst du den Text schneller, weil dein Gehirn schon weiß, wonach es sucht.'),
    text('m2-text', `Ein einfaches weißes T-Shirt hat oft eine längere Reise hinter sich als sein Besitzer in seinem ganzen Leben.

**Zuerst** wird die [[Baumwolle]] angebaut, zum Beispiel in Indien, in den USA oder in Usbekistan. Für ein einziges T-Shirt werden dabei mehrere tausend Liter Wasser gebraucht. **Nach der Ernte** wird die Baumwolle zu Garn gesponnen, häufig in einem anderen Land. **Anschließend** wird aus dem Garn Stoff gewebt, und der Stoff wird gebleicht und [[färben|gefärbt]]. Dabei kommen viele Chemikalien zum Einsatz.

**Im nächsten Schritt** wird der Stoff zugeschnitten und genäht, meistens in Bangladesch, Vietnam oder der Türkei. Eine [[Näherin]] schafft mehrere hundert Shirts am Tag und bekommt dafür nur einen winzigen Teil des späteren Ladenpreises. **Danach** werden die fertigen T-Shirts verpackt und per Schiff nach Europa transportiert. **Schließlich** landen sie im Geschäft, wo sie manchmal weniger kosten als ein Mittagessen.

Die ganze [[Lieferkette]] kann mehr als zwanzigtausend Kilometer lang sein. Getragen wird das Shirt im Durchschnitt nur wenige Male.`,
      { kicker: 'Lesen', title: 'Die Weltreise eines T-Shirts', task: 'Lies den Text. Achte auf die Reihenfolge.', taskEn: 'Read the text. Pay attention to the order of the steps.' }),
    mcq('m2-q1', 'Was passiert direkt nach der Ernte?', ['Die Baumwolle wird zu Garn gesponnen.', 'Die T-Shirts werden verpackt.', 'Der Stoff wird genäht.'], 0, { task: 'Hast du den Text verstanden?', taskEn: 'Check your understanding.' }),
    mcq('m2-q2', 'Was sagt der Text über die Näherinnen?', ['Sie verdienen sehr gut.', 'Sie bekommen nur einen winzigen Teil des Ladenpreises.', 'Sie arbeiten in Europa.'], 1),
    sort('m2-sort', ['Anfang', 'Mitte', 'Ende'], [['Baumwolle anbauen', 0], ['Stoff färben', 1], ['im Geschäft verkaufen', 2], ['Baumwolle ernten', 0], ['T-Shirt nähen', 1], ['per Schiff transportieren', 2]],
      { task: 'Wann passiert das im Prozess?', taskEn: 'When in the process does it happen?' }),
    text('m2-forum', `**Nachtschicht_Nele:** Seit ich weiß, wie ein T-Shirt entsteht, kaufe ich nur noch gebraucht. Wenn alle das täten, würde viel weniger produziert.

**Papa_von_drei:** Das klingt schön, aber mit drei Kindern, die ständig wachsen, wäre mir das zu teuer und zu aufwendig. Faire Kleidung kostet oft das Dreifache.

**Schneiderin_Olga:** Man müsste gar nicht alles neu oder gebraucht kaufen. Das meiste, was bei mir abgegeben wird, hat nur ein kleines Loch. Reparieren könnte jeder lernen.`, { kicker: 'Lesen', title: 'Aus einem Forum: Faire Mode?' }),
    match('m2-match', [['Nachtschicht_Nele', 'kauft nur noch gebraucht'], ['Papa_von_drei', 'findet faire Kleidung zu teuer'], ['Schneiderin_Olga', 'schlägt vor, mehr zu reparieren']],
      { task: 'Wer meint was?', taskEn: 'Who thinks what?' }),
    phrases('m2-phr', 'Redemittel: einen Prozess beschreiben', {
      'Reihenfolge': ['Zuerst wird …', 'Anschließend / Danach / Dann wird …', 'Im nächsten Schritt wird …', 'Schließlich / Zum Schluss wird …'],
      'erklären': ['Dabei werden … gebraucht.', 'Das bedeutet, dass …', 'Auf dem Schaubild sieht man, dass …'],
      'bewerten': ['Ich finde es problematisch, dass …', 'Positiv ist, dass …', 'Man sollte darauf achten, dass …'],
    }),
    gap('m2-gap', ['{{Zuerst}} wird die Baumwolle angebaut.', '{{Anschließend}} wird der Stoff gefärbt.', 'Im nächsten {{Schritt}} werden die T-Shirts genäht.', '{{Schließlich}} werden sie im Geschäft verkauft.', 'Ich finde es {{problematisch}}, dass so viel Wasser gebraucht wird.'],
      { bank: ['Schritt', 'Schließlich', 'Zuerst', 'problematisch', 'Anschließend'], task: 'Ergänze.', taskEn: 'Complete the sentences.' }),
    compose('m2-comp', 'Beschreib den Weg einer **Pfandflasche** aus Glas. Benutze das Passiv.', [
      ['Schritt 1: Rückgabe.', 'Step 1: return.', ['Zuerst', 'wird die leere Flasche', 'im Supermarkt', 'zurückgegeben.']],
      ['Schritt 2: Transport und Reinigung.', 'Step 2: transport and cleaning.', ['Anschließend', 'wird sie', 'zur Fabrik gebracht', 'und gereinigt.']],
      ['Schritt 3: neu füllen.', 'Step 3: refilling.', ['Danach', 'wird sie', 'neu gefüllt.']],
      ['Schritt 4: zurück ins Geschäft.', 'Step 4: back to the shop.', ['Schließlich', 'steht sie', 'wieder', 'im Regal.']],
    ], { task: 'Bau eine Prozessbeschreibung.', taskEn: 'Build a process description.' }),
  ]);

const modul3 = section('modul-3', 'modul', 'Modul 3', 'Gute Nacht!', 'lilac', 25,
  ['einen Flyer und ein Gespräch zu einem Umweltthema verstehen', 'über Lösungen sprechen', 'Grammatik: Konjunktiv II'], [
    text('m3-flyer', `**Wann haben Sie zuletzt die Milchstraße gesehen?**

In unseren Städten wird es nachts nicht mehr dunkel. [[Straßenlaterne|Straßenlaternen]], Schaufenster und Werbetafeln leuchten bis zum Morgen. Diese [[Lichtverschmutzung]] hat Folgen:

• [[Insekt|Insekten]] fliegen um Lampen, bis sie erschöpft sterben.
• [[Zugvogel|Zugvögel]] verlieren die Orientierung.
• Menschen schlafen schlechter.
• Viel Energie wird verschwendet.

**Was wäre, wenn …?** Wenn jede zweite Laterne nach Mitternacht ausgeschaltet würde, könnte unsere Stadt viel Strom sparen. Wenn Lampen nur nach unten leuchten würden, hätten wir wieder einen Sternenhimmel.

**Infoabend: Donnerstag, 19 Uhr, Stadtbibliothek. Der Eintritt ist frei.**`, { kicker: 'Lesen', title: 'Flyer: Es werde dunkel!', task: 'Lies den Flyer.', taskEn: 'Read the flyer.' }),
    mcq('m3-q1', 'Wofür wirbt der Flyer?', ['für mehr Licht in der Stadt', 'für einen Infoabend über zu viel Licht in der Nacht', 'für ein Konzert in der Bibliothek'], 1),
    audio('m3-audio', 'Hören: Auf dem Infoabend', [
      ['moderatorin', 'Herzlich willkommen. Unser Gast ist Urs Brönnimann, Hobbyastronom aus Bern. Herr Brönnimann, warum stört Sie das Licht?'],
      ['urs', 'Als Kind konnte ich von unserem Balkon aus tausende Sterne sehen. Heute sind es vielleicht zwanzig. Ich würde meinen Enkeln gern den Himmel zeigen, den ich gekannt habe.'],
      ['moderatorin', 'Aber wäre es ohne Laternen nicht gefährlich?'],
      ['urs', 'Niemand will die Stadt ganz dunkel machen. Es wäre schon viel gewonnen, wenn die Lampen nur dorthin leuchten würden, wo man das Licht braucht: auf den Weg, nicht in den Himmel.'],
      ['moderatorin', 'Was könnte eine Stadt konkret tun?'],
      ['urs', 'Sie könnte Bewegungsmelder einsetzen. Dann wäre das Licht nur an, wenn wirklich jemand vorbeigeht. Und Werbetafeln müssten um elf Uhr abgeschaltet werden.'],
      ['moderatorin', 'Und was kann ich zu Hause tun?'],
      ['urs', 'Wenn ich Sie wäre, würde ich die Gartenbeleuchtung nachts ausschalten. Das dürfte auch Ihre Nachbarn freuen.'],
      ['moderatorin', 'Hätten Sie einen Wunsch an die Politik?'],
      ['urs', 'Ja. Ich wünschte, es gäbe ein Gesetz gegen unnötiges Licht, so wie es eines gegen Lärm gibt.'],
    ], { task: 'Welche Vorschläge macht Herr Brönnimann?', taskEn: 'What suggestions does Mr. Brönnimann make? Listen for würde, wäre, hätte, könnte, müsste.' }),
    mcq('m3-q2', 'Was möchte Herr Brönnimann **nicht**?', ['dass Lampen nur nach unten leuchten', 'dass die Stadt völlig dunkel ist', 'dass Werbetafeln nachts abgeschaltet werden'], 1, { task: 'Fragen zum Gespräch', taskEn: 'Questions about the talk.' }),
    mcq('m3-q3', 'Was rät er der Moderatorin für zu Hause?', ['die Gartenbeleuchtung nachts auszuschalten', 'mehr Lampen zu kaufen', 'die Fenster zu schließen'], 0),
    mcq('m3-q4', 'Was wünscht er sich von der Politik?', ['mehr Geld für Astronomie', 'ein Gesetz gegen unnötiges Licht', 'ein Verbot von Laternen'], 1),
    grammar('m3-gram', 'Konjunktiv II: Was wäre, wenn …?', {
      intro: 'Mit dem Konjunktiv II spricht man über Dinge, die **nicht real** sind, und klingt höflicher.',
      head: ['Bildung', 'Formen', 'Beispiel'],
      rows: [
        ['**würde** + Infinitiv (die meisten Verben)', 'ich würde, du würdest, er würde, wir würden, ihr würdet, sie würden', 'Ich **würde** das Licht **ausschalten**.'],
        ['eigene Formen: sein, haben', 'ich **wäre**, du wärst, er wäre · ich **hätte**, du hättest, er hätte', 'Dann **wäre** es dunkel. Wir **hätten** einen Sternenhimmel.'],
        ['eigene Formen: Modalverben', 'könnte, müsste, dürfte, sollte, wollte', 'Die Stadt **könnte** Strom sparen.'],
        ['weitere häufige Formen', 'es gäbe, ich käme, ich wüsste, ich ginge', 'Ich wünschte, es **gäbe** ein Gesetz.'],
      ],
      en: 'Konjunktiv II is for unreal situations and politeness. Most verbs: würde + infinitive. sein → wäre, haben → hätte, modals → könnte, müsste, dürfte, sollte. A few common verbs have their own form: es gäbe, ich wüsste, ich käme.',
    }),
    grammar('m3-gram2', 'Wozu braucht man den Konjunktiv II?', {
      head: ['Funktion', 'Beispiel'],
      rows: [
        ['**Irreales** (Bedingung)', '**Wenn** ich mehr Zeit **hätte**, **würde** ich öfter Rad fahren. (Ich habe aber keine Zeit.)'],
        ['**Wünsche**', 'Ich **hätte** gern einen Garten. **Wenn** es doch endlich **regnen würde**! Ich **wünschte**, es **wäre** Sommer.'],
        ['**Vermutungen**', 'Das **könnte** stimmen. Das **dürfte** die Nachbarn freuen.'],
        ['**höfliche Bitten und Ratschläge**', '**Könnten** Sie das Licht ausmachen? **Würden** Sie mir helfen? An deiner Stelle **würde** ich …'],
      ],
      notes: ['Im irrealen wenn-Satz steht der Konjunktiv II in **beiden** Satzteilen.', '**Wünsche als Ausrufe:** Wenn ich doch nur Zeit hätte! · Hätte ich doch nur Zeit! (mit *doch* oder *nur*)'],
    }),
    gap('m3-gap', ['Wenn ich reich {{wäre}}, würde ich ein Haus am See kaufen. (sein)', 'Wenn wir mehr Zeit {{hätten}}, könnten wir zu Fuß gehen. (haben)', 'Ich {{würde}} gern mehr für die Umwelt tun. (werden)', '{{Könnten}} Sie bitte das Fenster schließen? (können)', 'An deiner Stelle {{würde}} ich den Zug nehmen. (werden)', 'Das {{könnte}} eine gute Lösung sein. (können)'],
      { task: 'Ergänze die Form im Konjunktiv II.', taskEn: 'Fill in the Konjunktiv II form.' }),
    sort('m3-sort', ['irreale Bedingung', 'Wunsch', 'höfliche Bitte'], [['Wenn ich ein Auto hätte, würde ich dich abholen.', 0], ['Wenn doch endlich Ferien wären!', 1], ['Könnten Sie mir bitte helfen?', 2], ['Ich hätte gern mehr Freizeit.', 1], ['Würden Sie bitte die Tür schließen?', 2], ['Wenn es nicht regnen würde, gingen wir spazieren.', 0]],
      { task: 'Wozu dient der Konjunktiv II hier?', taskEn: 'What is Konjunktiv II doing here?' }),
    mcq('m3-q5', '„Ich habe kein Fahrrad. Ich fahre mit dem Bus.“ Irreal:', ['Wenn ich ein Fahrrad habe, fahre ich nicht mit dem Bus.', 'Wenn ich ein Fahrrad hätte, würde ich nicht mit dem Bus fahren.', 'Wenn ich ein Fahrrad hatte, fuhr ich nicht mit dem Bus.'], 1),
    order('m3-order', ['Wenn', 'die Lampen', 'nur nach unten', 'leuchten würden,', 'hätten wir', 'einen Sternenhimmel.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence.', hint: 'wenn-Satz zuerst, dann sofort das Verb' }),
    compose('m3-comp', 'Was würdest du tun, wenn du Bürgermeisterin oder Bürgermeister deiner Stadt wärst?', [
      ['Beginn mit der Bedingung.', 'Start with the condition.', ['Wenn ich', 'Bürgermeisterin wäre,', 'würde ich', 'mehr Radwege', 'bauen.']],
      ['Nenne eine zweite Idee.', 'Add a second idea.', ['Außerdem', 'müssten', 'Busse und Bahnen', 'billiger werden.']],
      ['Sag, was dann möglich wäre.', 'Say what would then be possible.', ['Dann', 'könnten', 'mehr Leute', 'das Auto', 'stehen lassen.']],
      ['Schließ mit einem Wunsch.', 'End with a wish.', ['Ich wünschte,', 'es gäbe', 'in jeder Straße', 'mehr Bäume.']],
    ], { task: 'Bau deine Ideen im Konjunktiv II.', taskEn: 'Build your ideas in Konjunktiv II.' }),
  ]);

const kommunikation = section('kommunikation', 'kommunikation', 'Alltag und Beruf', 'Also, kurz gesagt …', 'rose', 20,
  ['Informationen zusammenfassen', 'Informationen strukturiert weitergeben', 'das Wichtigste vom Unwichtigen trennen'], [
    text('k-intro', 'Eine Kollegin war nicht in der Besprechung. Ein Nachbar hat den Aushang im Treppenhaus nicht gelesen. Du sollst die Informationen weitergeben. Gut ist eine Zusammenfassung, wenn sie drei Dinge hat: einen Satz zum Thema, die wichtigsten Punkte in einer klaren Reihenfolge und am Ende das, was die andere Person jetzt tun muss.', { kicker: 'Zum Einstieg' }),
    audio('k-a1', 'Gespräch 1: Was habe ich verpasst? (Köln)', [
      ['tomasz', 'Elif, ich war gestern beim Kunden. Was habe ich in der Besprechung verpasst?'],
      ['elif', 'Es ging um die neue Mülltrennung im Büro. Ich fasse es kurz zusammen, es gibt drei wichtige Punkte.'],
      ['tomasz', 'Schieß los.'],
      ['elif', 'Erstens: Ab dem ersten des Monats gibt es keine Papierkörbe mehr an den Schreibtischen. Stattdessen stehen in jeder Etage vier Tonnen neben der Kaffeeküche.'],
      ['tomasz', 'Keine Papierkörbe mehr? Na gut.'],
      ['elif', 'Zweitens: Kaffeebecher zum Wegwerfen werden abgeschafft. Jeder bekommt eine Tasse mit seinem Namen.'],
      ['tomasz', 'Das finde ich gut.'],
      ['elif', 'Und drittens: Die Firma sucht pro Abteilung eine Person, die Fragen beantwortet. Wer das machen will, soll sich bis Freitag bei Frau Albers melden.'],
      ['tomasz', 'Also kurz gesagt: Tonnen in der Küche, eigene Tasse, und bis Freitag melden, wenn man helfen will.'],
      ['elif', 'Genau. Du hättest gar nicht kommen müssen.'],
    ], { task: 'Welche drei Punkte nennt Elif?', taskEn: 'Which three points does Elif name? Listen for erstens, zweitens, drittens.' }),
    mcq('k-q1', 'Worum ging es in der Besprechung?', ['um neue Arbeitszeiten', 'um die neue Mülltrennung im Büro', 'um einen neuen Kunden'], 1),
    mcq('k-q2', 'Was muss man bis Freitag tun, wenn man helfen will?', ['eine Tasse kaufen', 'den Papierkorb abgeben', 'sich bei Frau Albers melden'], 2),
    audio('k-a2', 'Gespräch 2: Im Treppenhaus (Stuttgart)', [
      ['frauHaeberle', 'Ah, Herr Nowak, gut, dass i Sie treff. Hend Sie den Aushang gelesen?'],
      ['tomasz', 'Nein, leider noch nicht. Worum geht es denn?'],
      ['frauHaeberle', 'Um zwei Sacha. Zum einen: Die Kehrwoche wird neu eingeteilt. Sie sind in der Woche vom zwölften dran, also Treppenhaus und Gehweg.'],
      ['tomasz', 'In Ordnung, die Woche vom zwölften. Und zum anderen?'],
      ['frauHaeberle', 'Zum andere: Die gelben Säcke werdet ab jetzt donnerstags abgeholt, nimmer dienstags. Die müsset also am Mittwochabend raus.'],
      ['tomasz', 'Mittwochabend, verstanden. Habe ich das richtig zusammengefasst: Kehrwoche ab dem zwölften und gelber Sack am Mittwochabend?'],
      ['frauHaeberle', 'Genau so isch es. Sie sind ja schneller als mei Mann.'],
    ], { task: 'Welche zwei Informationen gibt Frau Häberle weiter?', taskEn: 'Which two pieces of information does Frau Häberle pass on? She speaks Swabian.',
      note: 'Schwäbisch: **i treff** = ich treffe. **Hend Sie** = Haben Sie. **zwei Sacha** = zwei Sachen. **nimmer** = nicht mehr. **müsset** = müssen. **isch** = ist. Der **gelbe Sack** ist für Verpackungen aus Plastik und Metall.' }),
    mcq('k-q3', 'Wann muss der gelbe Sack jetzt vor die Tür?', ['am Dienstagabend', 'am Mittwochabend', 'am Donnerstagabend'], 1, { why: 'Er wird donnerstags abgeholt, muss also am Mittwochabend hinaus.' }),
    mcq('k-q4', 'Wie prüft Tomasz, ob er alles verstanden hat?', ['Er wiederholt die Informationen mit eigenen Worten.', 'Er liest den Aushang.', 'Er fragt einen anderen Nachbarn.'], 0),
    phrases('k-phr', 'Redemittel: zusammenfassen und weitergeben', {
      'einleiten': ['Es ging um …', 'Ich fasse es kurz zusammen.', 'Es gibt drei wichtige Punkte.'],
      'ordnen': ['Erstens … Zweitens … Drittens …', 'Zum einen … Zum anderen …', 'Außerdem …', 'Zum Schluss …'],
      'abschließen und prüfen': ['Kurz gesagt: …', 'Das Wichtigste ist, dass …', 'Habe ich das richtig zusammengefasst?', 'Du musst also nur …'],
    }),
    sort('k-sort', ['Einleiten', 'Ordnen', 'Abschließen'], [['Es ging um die neue Hausordnung.', 0], ['Zweitens: Die Fahrräder kommen in den Keller.', 1], ['Kurz gesagt: Ab Montag gilt der neue Plan.', 2], ['Ich fasse es kurz zusammen.', 0], ['Außerdem wird der Hof neu gemacht.', 1], ['Das Wichtigste ist, dass du dich bis Freitag meldest.', 2]],
      { task: 'Welche Funktion hat der Satz?', taskEn: 'What job does the sentence do?' }),
    gap('k-gap', ['Ich {{fasse}} es kurz zusammen.', 'Es gibt drei wichtige {{Punkte}}.', 'Zum {{einen}} ändert sich der Termin, zum anderen der Ort.', '{{Kurz}} gesagt: Wir treffen uns am Montag um neun.', 'Habe ich das {{richtig}} zusammengefasst?'],
      { bank: ['Punkte', 'richtig', 'fasse', 'Kurz', 'einen'], task: 'Ergänze die Redemittel.', taskEn: 'Complete the phrases.' }),
    compose('k-comp', 'Im Haus gab es eine Versammlung. Fass für deine Mitbewohnerin zusammen: **Der Müll wird ab Mai montags abgeholt. Fahrräder dürfen nicht mehr im Flur stehen.**', [
      ['Leite ein.', 'Introduce it.', ['Es gab', 'gestern', 'eine Versammlung,', 'ich fasse es', 'kurz zusammen.']],
      ['Punkt 1.', 'Point 1.', ['Erstens', 'wird der Müll', 'ab Mai', 'montags', 'abgeholt.']],
      ['Punkt 2.', 'Point 2.', ['Zweitens', 'dürfen Fahrräder', 'nicht mehr', 'im Flur', 'stehen.']],
      ['Sag, was sie tun muss.', 'Say what she needs to do.', ['Du müsstest', 'dein Rad', 'also', 'in den Keller', 'stellen.']],
    ], { task: 'Bau eine strukturierte Zusammenfassung.', taskEn: 'Build a structured summary.' }),
  ]);

const grammatik = section('grammatik', 'grammatik', 'Grammatik im Blick', 'Alles auf einen Blick', 'peach', 12,
  ['Relativsätze mit wo und was wiederholen', 'Konjunktiv II wiederholen'], [
    grammar('g-1', 'Relativsätze mit wo, was, wo(r)-', {
      head: ['Bezug', 'Relativwort', 'Beispiel'],
      rows: [['Ort', 'wo', 'das Dorf, **wo** ich aufgewachsen bin'], ['alles, etwas, nichts, vieles, das', 'was', 'alles, **was** ich brauche'], ['Superlativ als Nomen', 'was', 'das Schönste, **was** ich je gesehen habe'], ['ganzer Satz', 'was', 'Sie hat abgesagt, **was** ich schade finde.'], ['wie oben + Verb mit Präposition', 'wo(r)- + Präp.', 'etwas, **worauf** ich mich freue']],
    }),
    grammar('g-2', 'Konjunktiv II: Formen', {
      head: ['', 'sein', 'haben', 'werden', 'können'],
      rows: [['ich', 'wäre', 'hätte', 'würde', 'könnte'], ['du', 'wärst', 'hättest', 'würdest', 'könntest'], ['er/sie/es', 'wäre', 'hätte', 'würde', 'könnte'], ['wir', 'wären', 'hätten', 'würden', 'könnten'], ['ihr', 'wärt', 'hättet', 'würdet', 'könntet'], ['sie/Sie', 'wären', 'hätten', 'würden', 'könnten']],
      notes: ['Auch: müsste, dürfte, sollte, wollte, wüsste, gäbe, käme, ginge.', 'Vergangenheit: **hätte** / **wäre** + Partizip II. *Du **hättest** nicht kommen **müssen**. Ich **wäre** gern **geblieben**.*'],
      en: 'Learn wäre, hätte, würde and könnte by heart. Past unreal: hätte/wäre + past participle.',
    }),
    gap('g-gap', ['Wenn ich du {{wäre}}, würde ich das nicht tun.', 'Ich {{hätte}} gern einen Kaffee, bitte.', 'Es gibt nichts, {{was}} mich mehr freut.', 'In Leipzig, {{wo}} ich studiert habe, gibt es viele Parks.', '{{Würden}} Sie mir bitte den Weg zeigen?'],
      { task: 'Ergänze.', taskEn: 'Fill in.' }),
    mcq('g-q1', 'Welcher Satz ist richtig?', ['Wenn ich Zeit hätte, würde ich dir helfen.', 'Wenn ich Zeit hätte, helfe ich dir.', 'Wenn ich Zeit würde haben, helfe ich dir.'], 0, { task: 'Wähle den richtigen Satz.', taskEn: 'Choose the correct sentence.' }),
    mcq('g-q2', '„Das ist das Beste, ___ mir passieren konnte.“', ['das', 'was', 'wo'], 1),
    mcq('g-q3', 'Welcher Satz drückt eine Vermutung aus?', ['Könnten Sie mir helfen?', 'Das dürfte schwierig werden.', 'Ich hätte gern ein Wasser.'], 1),
  ]);

const uebungen = section('uebungen', 'uebung', 'Übungen', 'Training: Umwelt und Natur', 'butter', 20,
  ['Wortschatz zum Thema Umwelt festigen', 'Aussprache: Umlaute ö und ü'], [
    gap('u-gap1', ['Bitte {{trennen}} Sie Ihren Müll.', 'Wir sollten weniger Wasser {{verschwenden}}.', 'Wind und Sonne sind {{erneuerbare}} Energien.', 'Viele Produkte haben zu viel {{Verpackung}}.', 'Für die Flasche bekommt man 25 Cent {{Pfand}} zurück.', 'In den Alpen schmelzen die {{Gletscher}}.'],
      { bank: ['trennen', 'verschwenden', 'erneuerbare', 'Verpackung', 'Pfand', 'Gletscher'], task: 'Welches Wort passt?', taskEn: 'Which word fits?' }),
    match('u-match', [['die Dürre', 'lange Zeit ohne Regen'], ['die Überschwemmung', 'zu viel Wasser auf dem Land'], ['der Sturm', 'sehr starker Wind'], ['das Gewitter', 'Blitz und Donner'], ['die Hitzewelle', 'viele sehr heiße Tage'], ['der Frost', 'Temperaturen unter null Grad']],
      { task: 'Wetter und Klima: Was ist was?', taskEn: 'Weather and climate: which is which?' }),
    sort('u-sort', ['Das schützt die Umwelt', 'Das schadet der Umwelt'], [['mit dem Rad zur Arbeit fahren', 0], ['das Licht brennen lassen', 1], ['Pfandflaschen zurückbringen', 0], ['für kurze Strecken fliegen', 1], ['Kleidung reparieren', 0], ['Essen wegwerfen', 1], ['regional einkaufen', 0]],
      { task: 'Gut oder schlecht für die Umwelt?', taskEn: 'Good or bad for the environment?' }),
    gap('u-gap2', ['Ich habe kein Auto. → Wenn ich ein Auto {{hätte}}, …', 'Es ist nicht Sommer. → Wenn es Sommer {{wäre}}, …', 'Ich kann nicht kommen. → Wenn ich kommen {{könnte}}, …', 'Er weiß die Antwort nicht. → Wenn er die Antwort {{wüsste}}, …', 'Es gibt keinen Bus. → Wenn es einen Bus {{gäbe}}, …'],
      { task: 'Bilde die Form im Konjunktiv II.', taskEn: 'Form the Konjunktiv II.' }),
    match('u-match2', [['Ich habe keine Zeit.', 'Wenn ich doch Zeit hätte!'], ['Es regnet seit Tagen.', 'Wenn doch die Sonne scheinen würde!'], ['Ich kann nicht schwimmen.', 'Wenn ich nur schwimmen könnte!'], ['Wir sind nicht am Meer.', 'Wären wir doch am Meer!'], ['Er ruft nie an.', 'Wenn er doch anrufen würde!']],
      { task: 'Wünsche als Ausrufe: Was passt?', taskEn: 'Wishes as exclamations: which fits?' }),
    audio('u-aus', 'Aussprache: die Umlaute ö und ü', [
      ['erzaehler', 'Für das Ü sagst du ein I und machst die Lippen rund. I, Ü. Tier, Tür. vier, für.'],
      ['erzaehler', 'Für das Ö sagst du ein E und machst die Lippen rund. E, Ö. lesen, lösen. kennen, können.'],
      ['jule', 'Jetzt in Wörtern: der Müll. die Mühe. grün. natürlich. umweltfreundlich.'],
      ['jule', 'Und mit Ö: schön. möglich. das Öl. hören. die Lösung.'],
      ['jonas', 'Ein Satz zum Üben: Fünf grüne Mülltonnen stehen vor der schönen Tür.'],
    ], { task: 'Hör zu und sprich nach.', taskEn: 'Listen and repeat. For ü, say "ee" with rounded lips. For ö, say "eh" with rounded lips.' }),
    mcq('u-q1', 'Wie bildet man das Ü?', ['Man sagt U und lächelt.', 'Man sagt I und macht die Lippen rund.', 'Man sagt O und öffnet den Mund weit.'], 1),
    mcq('u-q2', 'Welches Wortpaar unterscheidet sich nur durch den Umlaut?', ['kennen und können', 'Tier und Tür', 'schon und schön'], 2, { why: 'schon/schön: o und ö. Bei „Tier/Tür“ wechselt i zu ü, bei „kennen/können“ e zu ö.' }),
  ]);

const wortschatz = section('wortschatz', 'wortschatz', 'Wortschatz und Check', 'Das kann ich jetzt', 'mint', 10,
  ['die wichtigsten Wörter wiederholen', 'den eigenen Stand einschätzen'], [
    cards('w-cards', [
      ['die Umwelt', 'die Natur um uns herum', 'environment'], ['der Klimawandel', 'die Veränderung des Klimas', 'climate change'], ['erneuerbare Energien', 'Energie aus Sonne, Wind, Wasser', 'renewable energy'],
      ['der Ausstoß', 'Gase, die in die Luft kommen', 'emissions'], ['die Dürre', 'lange Zeit ohne Regen', 'drought'], ['die Überschwemmung', 'zu viel Wasser auf dem Land', 'flood'],
      ['die Verpackung', 'Material um ein Produkt', 'packaging'], ['Müll trennen', 'Müll nach Material sortieren', 'to separate waste'], ['das Pfand', 'Geld für die Flasche zurück', 'deposit'],
      ['die Lieferkette', 'alle Schritte bis zum Produkt im Laden', 'supply chain'], ['die Lichtverschmutzung', 'zu viel Licht in der Nacht', 'light pollution'], ['etwas verschwenden', 'zu viel von etwas verbrauchen', 'to waste'],
    ]),
    checklist('w-check', ['Ich kann eine einfache Erklärung zum Klimawandel verstehen und wiedergeben.', 'Ich kann Relativsätze mit wo und was bilden.', 'Ich kann einen Prozess Schritt für Schritt beschreiben.', 'Ich kann mit dem Konjunktiv II über Irreales und Wünsche sprechen.', 'Ich kann höflich bitten und Vermutungen äußern.', 'Ich kann Informationen strukturiert zusammenfassen und weitergeben.']),
    mcq('w-q1', '„Wenn ich mehr Geld ___, ___ ich faire Kleidung kaufen.“', ['habe … werde', 'hätte … würde', 'hatte … wurde'], 1, { task: 'Letzter Check vor der Prüfung', taskEn: 'Last check before the exam.' }),
    mcq('w-q2', '„Es gibt vieles, ___ wir ändern könnten.“', ['das', 'wo', 'was'], 2),
  ]);

export const kapitel8: Chapter = {
  id: 'kapitel-8', number: 8, title: 'Grüner wird es nicht', theme: 'Umwelt, Klima, Natur',
  grammar: 'Relativsätze mit wo, was und wo(r)-. Konjunktiv II.',
  sections: [einstieg, modul1, modul2, modul3, kommunikation, grammatik, uebungen, wortschatz],
  games: ['k8-sprint', 'k8-memory', 'k8-satzbau', 'k8-artikel'],
  exam: [
    x(1, mcq('x1', '„Das ist alles, ___ ich dir sagen kann.“', ['das', 'was', 'wo'], 1)),
    x(1, mcq('x2', '„Salzburg, ___ Mozart geboren wurde, liegt in Österreich.“', ['wo', 'was', 'das'], 0)),
    x(1, mcq('x3', '„Wenn ich ein Vogel ___, würde ich nach Süden fliegen.“', ['bin', 'war', 'wäre'], 2)),
    x(4, gap('x4', ['Wenn ich Zeit {{hätte}}, würde ich dich besuchen. (haben)', 'Das {{wäre}} eine gute Idee. (sein)', '{{Könnten}} Sie das bitte wiederholen? (können)', 'Ich {{würde}} gern in den Bergen wohnen. (werden)'], { task: 'Ergänze die Form im Konjunktiv II.' })),
    x(3, gap('x5', ['Das ist etwas, {{was}} mich interessiert.', 'Das Dorf, {{wo}} meine Großeltern leben, hat 200 Einwohner.', 'Sie hat zugesagt, {{was}} mich sehr freut.'], { task: 'wo oder was?' })),
    x(1, mcq('x6', 'Warum hat die Stadt die Beleuchtung geändert?', ['um Strom zu sparen und Insekten zu schützen', 'weil die Laternen kaputt waren', 'weil die Bewohner mehr Licht wollten'], 0),
      text('x-st1', 'Die Kleinstadt Tannfeld hat vor zwei Jahren ihre Straßenbeleuchtung umgestellt. Zwischen ein und fünf Uhr morgens leuchtet seitdem nur noch jede dritte Laterne, und an den Wegen im Stadtpark wurden Bewegungsmelder eingebaut. Die Stadt wollte damit Strom sparen und Insekten schützen. Am Anfang gab es Kritik: Manche Bewohner hatten Angst, dass es nachts unsicher würde. Die Polizei stellte jedoch fest, dass die Zahl der Einbrüche nicht gestiegen ist. Die Stromkosten sind um etwa ein Drittel gesunken. „Wenn wir das früher gewusst hätten, hätten wir es schon vor zehn Jahren gemacht“, sagt der Bürgermeister. Inzwischen kommen sogar Besucher aus der Großstadt, um den Sternenhimmel zu sehen.', { kicker: 'Lesen' })),
    x(1, mcq('x7', 'Was hat sich seit der Umstellung nicht verändert? (Text oben)', ['die Stromkosten', 'die Zahl der Einbrüche', 'die Zahl der Besucher'], 1)),
    x(1, mcq('x8', 'Worum geht es in der Nachricht?', ['um eine neue Hausordnung', 'um Änderungen bei der Müllabfuhr', 'um eine Reparatur im Haus'], 1),
      audio('x-st2', 'Hören: Eine Sprachnachricht', [
        ['jule', 'Moin Tomasz, hier ist Jule. Du warst ja gestern nicht bei der Hausversammlung, deshalb fasse ich kurz zusammen. Es gab zwei wichtige Punkte.'],
        ['jule', 'Erstens: Der Papiermüll wird ab nächstem Monat nicht mehr mittwochs, sondern freitags abgeholt.'],
        ['jule', 'Zweitens: Im Hof wird eine neue Biotonne aufgestellt. Bitte wirf kein Plastik hinein, auch keine Tüten.'],
        ['jule', 'Kurz gesagt: Papier am Freitag, und Bio ohne Plastik. Bis später!'],
      ])),
    x(1, mcq('x9', 'An welchem Tag wird das Papier jetzt abgeholt? (Hörtext oben)', ['mittwochs', 'donnerstags', 'freitags'], 2)),
    x(2, order('x10', ['Wenn ich', 'mehr Zeit hätte,', 'würde ich', 'öfter', 'Rad fahren.'], { task: 'Bau den Satz.' })),
    x(2, order('x11', ['Zuerst', 'wird', 'die Baumwolle', 'geerntet.'], { task: 'Bau den Satz im Passiv.' })),
    x(3, gap('x12', ['Ich {{fasse}} es kurz zusammen.', '{{Erstens}} ändert sich der Termin.', '{{Kurz}} gesagt: Wir treffen uns am Freitag.'], { bank: ['Kurz', 'fasse', 'Erstens'], task: 'Ergänze.' })),
    x(1, mcq('x13', 'Welcher Satz ist ein Wunsch?', ['Könnten Sie mir helfen?', 'Wenn es doch endlich schneien würde!', 'Das dürfte teuer sein.'], 1)),
    x(1, mcq('x14', 'In welche Tonne gehört eine Bananenschale?', ['Papier', 'Biomüll', 'Glas'], 1)),
  ],
};

export const games8: GameDef[] = [
  {
    id: 'k8-sprint', engine: 'sprint', title: 'Konjunktiv-Sprint', blurb: '60 Sekunden: Finde die Form im Konjunktiv II.', skill: 'Konjunktiv II', tone: 'mint', chapter: 8, emoji: '⚡',
    rules: 'Du siehst eine Form im Indikativ. Tippe auf die passende Form im Konjunktiv II. Du hast 60 Sekunden.', label: 'Konjunktiv II von …',
    items: [
      { q: 'ich bin', a: 'ich wäre', wrong: ['ich war', 'ich würde'] }, { q: 'ich habe', a: 'ich hätte', wrong: ['ich hatte', 'ich habe gehabt'] },
      { q: 'er kann', a: 'er könnte', wrong: ['er konnte', 'er kannte'] }, { q: 'wir müssen', a: 'wir müssten', wrong: ['wir mussten', 'wir müssen'] },
      { q: 'du bist', a: 'du wärst', wrong: ['du warst', 'du würdest'] }, { q: 'sie hat', a: 'sie hätte', wrong: ['sie hatte', 'sie hat gehabt'] },
      { q: 'ich darf', a: 'ich dürfte', wrong: ['ich durfte', 'ich darfte'] }, { q: 'es gibt', a: 'es gäbe', wrong: ['es gab', 'es gibte'] },
      { q: 'ich weiß', a: 'ich wüsste', wrong: ['ich wusste', 'ich weißte'] }, { q: 'er kommt', a: 'er käme', wrong: ['er kam', 'er kommte'] },
      { q: 'wir sind', a: 'wir wären', wrong: ['wir waren', 'wir würden'] }, { q: 'ihr habt', a: 'ihr hättet', wrong: ['ihr hattet', 'ihr habt'] },
      { q: 'ich kaufe', a: 'ich würde kaufen', wrong: ['ich kaufte ein', 'ich wäre kaufen'] }, { q: 'sie können', a: 'sie könnten', wrong: ['sie konnten', 'sie kannten'] },
      { q: 'du hast', a: 'du hättest', wrong: ['du hattest', 'du hast'] }, { q: 'er soll', a: 'er sollte', wrong: ['er söllte', 'er solle'] },
      { q: 'ich gehe', a: 'ich würde gehen', wrong: ['ich wäre gehen', 'ich gehte'] }, { q: 'wir haben', a: 'wir hätten', wrong: ['wir hatten', 'wir haben'] },
    ],
  },
  {
    id: 'k8-memory', engine: 'memory', title: 'Wunsch-Memory', blurb: 'Finde die Paare: Wirklichkeit und Wunsch.', skill: 'Konjunktiv II', tone: 'lilac', chapter: 8, emoji: '🃏',
    rules: 'Dreh zwei Karten um. Ein Paar ist eine wirkliche Situation mit dem passenden Wunsch.', kinds: ['Wirklichkeit', 'Wunsch'],
    pairs: [['Ich bin müde.', 'Wäre ich doch wach!'], ['Ich habe kein Rad.', 'Hätte ich doch ein Rad!'], ['Es regnet.', 'Wenn es doch trocken wäre!'], ['Ich kann nicht kommen.', 'Könnte ich doch kommen!'], ['Wir haben keine Zeit.', 'Hätten wir doch Zeit!'], ['Er weiß es nicht.', 'Wüsste er es doch!'], ['Es ist laut.', 'Wenn es doch leise wäre!'], ['Sie ist nicht hier.', 'Wäre sie doch hier!'], ['Ich muss arbeiten.', 'Müsste ich doch nicht arbeiten!'], ['Es gibt keinen Bus.', 'Gäbe es doch einen Bus!']],
  },
  {
    id: 'k8-satzbau', engine: 'satzbau', title: 'Was wäre, wenn?', blurb: 'Bau irreale Sätze und Relativsätze.', skill: 'Konjunktiv II', tone: 'sky', chapter: 8, emoji: '🧱',
    rules: 'Tippe die Satzteile in der richtigen Reihenfolge an.',
    sentences: [
      { parts: ['Wenn ich', 'Zeit hätte,', 'würde ich', 'dir helfen.'], hint: 'Konjunktiv II in beiden Teilen' },
      { parts: ['Wenn es', 'nicht regnen würde,', 'könnten wir', 'grillen.'], hint: 'wenn-Satz zuerst, dann Verb' },
      { parts: ['An deiner Stelle', 'würde ich', 'den Zug', 'nehmen.'], hint: 'Ratschlag mit würde' },
      { parts: ['Könnten Sie', 'mir bitte', 'den Weg', 'zeigen?'], hint: 'höfliche Bitte' },
      { parts: ['Das ist alles,', 'was', 'ich', 'weiß.'], hint: 'alles, was' },
      { parts: ['Die Stadt,', 'wo ich', 'geboren bin,', 'liegt am Meer.'], hint: 'Ort: wo' },
      { parts: ['Zuerst', 'wird', 'der Stoff', 'gefärbt.'], hint: 'Passiv: Partizip am Ende' },
      { parts: ['Ich wünschte,', 'es gäbe', 'mehr', 'Radwege.'], hint: 'Wunsch mit gäbe' },
      { parts: ['Kurz gesagt:', 'Wir treffen uns', 'am Freitag', 'um neun.'], hint: 'Zusammenfassung' },
    ],
  },
  {
    id: 'k8-artikel', engine: 'regen', title: 'Artikelregen: Umwelt', blurb: 'der, die oder das? Fang die Nomen aus Kapitel 8.', skill: 'Artikel', tone: 'rose', chapter: 8, emoji: '☔',
    rules: 'Ein Nomen fällt herunter. Tippe auf den richtigen Artikel, bevor es unten ankommt. Du hast drei Leben.', buckets: ['der', 'die', 'das'],
    words: artikel('die Umwelt, der Klimawandel, das Klima, der Müll, die Verpackung, das Pfand, der Gletscher, die Dürre, das Meer, der Wind, die Sonne, das Gas, der Ausstoß, die Energie, das Öl, der Strom, die Baumwolle, das Insekt, der Stern, die Laterne, das Licht, der Regen, die Luft, das Wetter, der Wald'),
  },
];
