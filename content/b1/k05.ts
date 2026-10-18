import type { Chapter, GameDef, GlossaryEntry } from '../types';
import { artikel, audio, cards, checklist, compose, gap, grammar, match, mcq, order, overview, phrases, section, sort, text, tip, x } from '../helpers';

// B1 Kapitel 5: Umweltfreundlich? Umwelt und Umweltschutz, Start-ups, Ziele, Umwelttipps, Wetter.
// Grammar: Komparativ und Superlativ vor Nomen, Nebensatz mit damit und Infinitiv mit um … zu.
// Aussprache: lange Sätze sprechen. Strategie: Wörter in Wortfamilien lernen. Landeskunde: Wetter in D-A-CH, Foodsharing.

export const glossaryB1k5: Record<string, GlossaryEntry> = {
  Umweltschutz: { de: 'Alles, was man tut, damit die Natur, die Luft und das Wasser sauber und gesund bleiben.', en: 'environmental protection' },
  umweltfreundlich: { de: 'Gut für die Umwelt oder nicht schlecht für die Umwelt, zum Beispiel ein Fahrrad statt ein Auto.', en: 'environmentally friendly' },
  'Start-up': { de: 'Eine junge, neue Firma mit einer neuen Idee.', en: 'start-up (company)' },
  Lastenrad: { de: 'Ein Fahrrad mit einer großen Kiste. Damit kann man Einkäufe, Waren oder Kinder transportieren.', en: 'cargo bike' },
  Kaffeesatz: { de: 'Das, was vom Kaffeepulver übrig bleibt, wenn man Kaffee gekocht hat.', en: 'coffee grounds' },
  Foodsharing: { de: 'Menschen teilen Lebensmittel, die sonst im Müll landen würden.', en: 'food sharing' },
  Fairteiler: { de: 'Ein öffentliches Regal oder ein Kühlschrank. Jeder darf Lebensmittel hineinstellen und kostenlos mitnehmen.', en: 'public food-sharing shelf or fridge' },
  Hochbeet: { de: 'Ein Beet in einer hohen Kiste aus Holz. Man muss sich bei der Gartenarbeit nicht bücken.', en: 'raised garden bed' },
  Kompost: { de: 'Ein Platz, an dem Gemüsereste und Laub langsam zu Erde werden.', en: 'compost' },
  Komparativ: { de: 'Die Form eines Adjektivs für einen Vergleich: schnell, schneller.', en: 'comparative' },
  Superlativ: { de: 'Die höchste Form eines Adjektivs: am schnellsten, der schnellste.', en: 'superlative' },
  Wortfamilie: { de: 'Wörter mit dem gleichen Wortstamm, zum Beispiel Umwelt, umweltfreundlich, Umweltschutz.', en: 'word family' },
  Föhn: { de: 'Ein warmer, trockener Wind aus dem Süden, den es in den Alpen gibt.', en: 'foehn (warm, dry Alpine wind)' },
  Stellplatz: { de: 'Ein fester Platz, an dem man ein Auto oder ein Fahrrad parken darf.', en: 'parking space' },
  Aushang: { de: 'Ein Zettel mit einer Information, den man an eine Wand oder ein Brett hängt, zum Beispiel im Treppenhaus.', en: 'posted notice' },
  Engagement: { de: 'Wenn man sich freiwillig und mit viel Energie für etwas einsetzt.', en: 'commitment, volunteering' },
  Klimawandel: { de: 'Das Klima auf der Erde verändert sich, es wird zum Beispiel wärmer.', en: 'climate change' },
};

const einstieg = section('einstieg', 'einstieg', 'Einstieg', 'Grün im grauen Januar', 'butter', 8,
  ['das Kapitel kennenlernen', 'Wörter zu Wetter und Umwelt sammeln'], [
    overview('e-over', 'Kapitel 5: Umweltfreundlich?',
      'Januar in Leipzig: Schnee, Nebel und Frost. Im Fuchsbau denkt Sofia aber schon an den Frühling. Sie möchte im Hof einen Garten mit [[Hochbeet|Hochbeeten]] und einem [[Kompost]] bauen. Und sie hat noch eine Idee: einen [[Fairteiler]] für die Reste aus Kenjis Restaurant.\n\nIn Kapitel 5 geht es um [[Umweltschutz]]. Du liest über ein Leipziger [[Start-up]], das aus [[Kaffeesatz]] Pilze macht und mit dem [[Lastenrad]] liefert. Du vergleichst Dinge mit dem [[Komparativ]] und dem [[Superlativ]] vor Nomen: *der bessere Weg, das [[umweltfreundlich|umweltfreundlichste]] Verkehrsmittel*. Du sagst, welche Ziele du hast: mit **um … zu** und **damit**. Außerdem hörst du einen Wetterbericht, lernst etwas über das Wetter in D-A-CH und über [[Foodsharing]]. Und im Treppenhaus hängt ein [[Aushang]] von Herrn Vogt, der niemandem gefällt.',
      'In this chapter you talk about the environment and the weather. You read about a Leipzig start-up that grows mushrooms on coffee grounds and delivers by cargo bike, compare things using comparative and superlative adjectives before nouns (der bessere Weg, das umweltfreundlichste Verkehrsmittel), and express goals with um … zu (same subject) and damit (different subject). You also give environmental tips, discuss ideas, listen to a weather report and learn about weather in Germany, Austria and Switzerland and about food sharing. In the story, Sofia plans a courtyard garden and a food-sharing shelf, but a notice from Herr Vogt says the courtyard will become parking spaces.',
      ['etwas vergleichen', 'Texte über Start-ups verstehen', 'Ziele ausdrücken: um … zu, damit', 'Umwelttipps geben', 'über das Wetter sprechen', 'eine Umweltaktion vorstellen']),
    match('e-match', [['die Sonne', '☀️'], ['der Regen', '🌧️'], ['der Schnee', '❄️'], ['das Gewitter', '⛈️'], ['der Nebel', '🌫️'], ['der Wind', '💨'], ['die Wolke', '☁️'], ['der Regenbogen', '🌈']],
      { task: 'Welches Wetterwort passt zum Bild?', taskEn: 'Match each weather word to the picture.' }),
    sort('e-sort', ['umweltfreundlich', 'nicht umweltfreundlich'], [['mit dem Rad zur Arbeit fahren', 0], ['eine Stofftasche mitnehmen', 0], ['Reste teilen statt wegwerfen', 0], ['jeden Tag kurz mit dem Auto zum Bäcker fahren', 1], ['im Winter das Fenster den ganzen Tag offen lassen', 1], ['Erdbeeren im Januar kaufen', 1]],
      { task: 'Umweltfreundlich oder nicht? Sortiere.', taskEn: 'Is it environmentally friendly or not? Sort.' }),
  ]);

const teil1 = section('teil-1', 'modul', 'Teil 1', 'Pilze aus dem Kaffee', 'mint', 15,
  ['einen Text über ein Start-up verstehen', 'Komparativ und Superlativ vor Nomen', 'über Ideen sprechen'], [
    text('t1-text', `**Kaffeesatz wird zu Pilzen: Ein Leipziger Start-up zeigt, wie es geht**

Jeden Tag landen in Leipzig Tonnen von Kaffeesatz im Müll. „Das muss doch nicht sein“, dachten sich Mia Hoffmann und Tarek Saleh. 2024 gründeten die beiden das Start-up „Pilzwerk“ in einer alten Fabrikhalle in Lindenau. Die Idee ist einfach: Mit Lastenrädern holen sie den Kaffeesatz aus 40 Cafés ab. Im Keller wachsen darauf Austernpilze, die sie an Restaurants und auf dem Wochenmarkt verkaufen.

„Kaffeesatz ist ein besserer Boden für Pilze, als viele denken“, erklärt Mia. „Er ist voller Nährstoffe, und wir brauchen keine Chemie.“ Für den Transport haben die Gründer bewusst das umweltfreundlichste Verkehrsmittel gewählt: das Lastenrad. „In der Innenstadt ist es oft sogar das schnellere Fahrzeug, weil wir nie im Stau stehen“, sagt Tarek und lacht.

Am Anfang war es nicht leicht. Die Bank wollte keinen Kredit geben. Erst eine Crowdfunding-Kampagne brachte den Erfolg: 600 Menschen unterstützten das Projekt. Heute hat „Pilzwerk“ sechs Mitarbeiterinnen und Mitarbeiter. Und was passiert mit den Resten? Nach der Ernte wird der alte Kaffeesatz zu Kompost für Kleingärten.

Das nächste Ziel ist ein größerer Keller. „Wir wollen mehr Pilze produzieren, damit auch Supermärkte bei uns einkaufen können“, sagt Mia. Und sie hat noch einen Wunsch: „Wir möchten die kürzesten Wege der Stadt haben: vom Café zum Pilz und vom Pilz auf den Teller.“`,
      { kicker: 'Lesen', title: 'Aus der Leipziger Stadtzeitung', task: 'Lies den Artikel. Was ist die Idee von „Pilzwerk“?', taskEn: 'Read the newspaper article about a Leipzig start-up. What is its idea? Austernpilze = oyster mushrooms. Notice the forms der bessere, das umweltfreundlichste, ein größerer.' }),
    mcq('t1-q1', 'Woher bekommt „Pilzwerk“ den Kaffeesatz?', ['aus Supermärkten', 'aus 40 Cafés', 'aus Kleingärten'], 1),
    mcq('t1-q2', 'Warum benutzen die Gründer Lastenräder?', ['Sie sind umweltfreundlich und in der Stadt oft schneller.', 'Autos sind in Lindenau verboten.', 'Die Bank wollte das so.'], 0),
    mcq('t1-q3', 'Wie hat das Start-up am Anfang Geld bekommen?', ['von einer Bank', 'durch Crowdfunding', 'von einem Supermarkt'], 1),
    mcq('t1-q4', 'Was ist das nächste Ziel?', ['ein größerer Keller', 'ein eigenes Café', 'mehr Lastenräder'], 0),
    grammar('t1-gram', 'Komparativ und Superlativ vor Nomen', {
      intro: 'Steht der Komparativ oder der Superlativ **vor einem Nomen**, bekommt er die normale **Adjektivendung**: zuerst *-er* oder *-st*, dann die Endung. Das kennst du schon: *der gut**e** Weg* → *der bess**er**e Weg* → *der be**st**e Weg*.',
      head: ['', 'Grundform', 'Komparativ', 'Superlativ'],
      rows: [
        ['der (Nominativ)', 'der günstig**e** Weg', 'der günstig**ere** Weg / ein günstig**erer** Weg', 'der günstig**ste** Weg'],
        ['das', 'das schnell**e** Rad', 'das schnell**ere** Rad / ein schnell**eres** Rad', 'das schnell**ste** Rad'],
        ['die', 'die gut**e** Lösung', 'die bess**ere** Lösung / eine bess**ere** Lösung', 'die be**ste** Lösung'],
        ['Plural', 'die gut**en** Ideen', 'die bess**eren** Ideen / bess**ere** Ideen', 'die be**sten** Ideen'],
        ['der (Akkusativ)', 'den groß**en** Keller', 'den größ**eren** Keller / einen größ**eren** Keller', 'den größ**ten** Keller'],
      ],
      notes: [
        'Einsilbige Adjektive mit a, o, u bekommen oft einen **Umlaut**: *warm → die w**ä**rmere Jacke, kalt → der k**ä**lteste Winter, groß → ein gr**ö**ßerer Keller*.',
        'Endet das Adjektiv auf **-t, -d, -s, -ß, -z, -sch**, kommt im Superlativ ein **-e-** dazu: *der kält**e**ste Tag, das heiß**e**ste Jahr, die kürz**e**sten Wege, die frisch**e**sten Pilze*. Ausnahme: *groß → der grö**ß**te*.',
        'Superlativ vor Nomen: **der/das/die** + **-ste**. Ohne Nomen sagt man: *Das Lastenrad ist **am** umweltfreundlich**sten***.',
        'Achtung: **mehr** und **weniger** haben nie eine Endung: *Wir brauchen **mehr** Pilze und **weniger** Müll.*',
      ],
      en: 'When a comparative or superlative stands before a noun, it takes the normal adjective ending on top of -er or -(e)st: der günstigere Weg, ein schnelleres Rad, die besten Ideen. Short adjectives with a, o, u often add an umlaut (wärmer, größer, kälteste). Adjectives ending in -t, -d, -s, -ß, -z or -sch add -e- in the superlative (der kälteste Tag), except groß (der größte). Without a noun, use am …sten. mehr and weniger never take an ending.',
    }),
    gap('t1-gap', [
      'Das Lastenrad ist das {{umweltfreundlichste}} Verkehrsmittel. (umweltfreundlich, Superlativ)',
      'Pilzwerk sucht einen {{größeren}} Keller. (groß, Komparativ)',
      'Kaffeesatz ist ein {{besserer}} Boden, als viele denken. (gut, Komparativ)',
      'Das ist der {{kürzeste}} Weg zum Markt. (kurz, Superlativ)',
      'Im Januar braucht man {{wärmere}} Kleidung. (warm, Komparativ)',
      'Sie verkaufen die {{frischesten}} Pilze der Stadt. (frisch, Superlativ)',
    ], { task: 'Ergänze den Komparativ oder Superlativ mit der richtigen Endung.', taskEn: 'Fill in the comparative or superlative with the correct ending.' }),
    match('t1-match', [['gut', 'der beste Weg'], ['viel', 'das meiste Geld'], ['hoch', 'der höchste Berg'], ['nah', 'die nächste Haltestelle'], ['gern', 'das liebste Hobby'], ['warm', 'der wärmste Tag'], ['kalt', 'der kälteste Winter']],
      { task: 'Welche Superlativ-Form gehört zu welchem Adjektiv?', taskEn: 'Match each adjective to its superlative form before a noun. Some are irregular.' }),
    phrases('t1-phr', 'Über Ideen sprechen', {
      'Eine Idee bewerten': ['Die Idee finde ich genial / ziemlich gut / nicht so überzeugend.', 'Das ist eine der besten Ideen, die ich kenne.', 'Ich frage mich, ob das wirklich funktioniert.'],
      'Ideen vergleichen': ['Die Idee mit den Pilzen finde ich besser als …', 'Für mich ist das die interessantere Lösung.', 'Am meisten überzeugt mich …'],
      'Nachfragen': ['Wie genau funktioniert das?', 'Wer bezahlt das eigentlich?', 'Und was passiert mit den Resten?'],
    }),
  ]);

const teil2 = section('teil-2', 'modul', 'Teil 2', 'Teilen statt wegwerfen', 'sky', 15,
  ['Ziele ausdrücken: um … zu und damit', 'Umwelttipps geben', 'Foodsharing kennenlernen'], [
    audio('t2-audio', 'Hören: Die Idee mit dem Fairteiler', [
      ['sofia', 'Kenji, darf ich dich mal was fragen? Was passiert eigentlich mit dem Essen, das abends übrig bleibt?'],
      ['kenji', 'Ehrlich gesagt: Vieles landet im Müll. Reis, Gemüse, manchmal ein ganzer Topf Suppe. Das tut mir jedes Mal weh.'],
      ['nele', 'Das ist ja schrecklich! Und beim Bäcker nebenan ist es bestimmt genauso.'],
      ['sofia', 'Genau deshalb habe ich eine Idee. In São Paulo gab es in meinem Viertel einen Kühlschrank auf der Straße. Jeder konnte Essen reinstellen und rausnehmen.'],
      ['nele', 'Ah, so etwas wie ein Fairteiler! Die gibt es in Leipzig auch, vom Foodsharing.'],
      ['sofia', 'Ja! Ich möchte so einen Fairteiler hier bei uns aufstellen, um weniger Essen wegzuwerfen. Im Durchgang zum Hof ist doch Platz.'],
      ['kenji', 'Hm. Ich spende gern, damit die Reste nicht in der Tonne landen. Aber für Lebensmittel gibt es Regeln. Hygiene ist halt wichtig.'],
      ['nele', 'Klar. Rohes Fleisch darf man zum Beispiel nicht reinstellen. Ich kenne eine Frau von foodsharing, die erklärt uns das bestimmt.'],
      ['sofia', 'Super. Und im Frühling bauen wir im Hof ein paar Hochbeete, damit du frische Kräuter für die Küche hast, Kenji.'],
      ['kenji', 'Frische Kräuter direkt vor der Tür? Das wäre der kürzeste Weg vom Beet auf den Teller!'],
      ['nele', 'Und wir brauchen einen Kompost, um aus den Gemüseresten Erde zu machen.'],
      ['sofia', 'Siehst du? Alles hängt zusammen. Ich mache am Wochenende einen Plan.'],
    ], { task: 'Hör zu. Welche Ideen hat Sofia?', taskEn: 'Listen to Sofia, Nele and Kenji in the restaurant after closing time. What ideas does Sofia have? Listen for um … zu and damit. Tonne = garbage can.' }),
    mcq('t2-q1', 'Was passiert oft mit den Resten in Kenjis Restaurant?', ['Sie landen im Müll.', 'Kenji isst sie selbst.', 'Er verkauft sie billiger.'], 0),
    mcq('t2-q2', 'Wo soll der Fairteiler stehen?', ['vor dem Restaurant auf der Straße', 'im Durchgang zum Hof', 'in der WG-Küche'], 1),
    mcq('t2-q3', 'Wozu will Sofia Hochbeete bauen?', ['damit Kenji frische Kräuter hat', 'um Geld zu verdienen', 'damit der Hof schöner aussieht'], 0),
    grammar('t2-gram', 'Ziele ausdrücken: um … zu und damit', {
      intro: 'Mit **um … zu** und **damit** sagst du, welches **Ziel** du hast. Die Frage ist: **Wozu?** Bei **gleichem Subjekt** benutzt man meistens **um … zu** + Infinitiv. Bei **verschiedenen Subjekten** muss man **damit** benutzen. Im damit-Satz steht das konjugierte Verb **am Ende**.',
      head: ['', 'Hauptsatz', 'Ziel'],
      rows: [
        ['um … zu (gleiches Subjekt)', '**Sofia** stellt einen Fairteiler auf,', '**um** weniger Essen weg**zu**werfen.'],
        ['um … zu (gleiches Subjekt)', '**Wir** brauchen einen Kompost,', '**um** Erde **zu** machen.'],
        ['damit (anderes Subjekt)', '**Kenji** spendet die Reste,', '**damit** **sie** nicht im Müll **landen**.'],
        ['damit (anderes Subjekt)', '**Sofia** baut Hochbeete,', '**damit** **Kenji** frische Kräuter **hat**.'],
        ['damit + Modalverb', '**Pilzwerk** braucht mehr Pilze,', '**damit** **Supermärkte** dort einkaufen **können**.'],
      ],
      notes: [
        'Im um-zu-Satz gibt es **kein Subjekt** und **kein konjugiertes Verb**: *Ich fahre Rad, um fit zu bleiben.* (nicht: *um ich fit bleibe*)',
        'Trennbare Verben: **zu** steht in der Mitte: *um Müll **zu** vermeiden, um Essen weg**zu**werfen, um Kaffeesatz ab**zu**holen*.',
        'Bei gleichem Subjekt ist **damit** auch möglich: *Ich fahre Rad, damit ich fit bleibe.* Aber **um … zu** klingt besser.',
        'Der Ziel-Satz kann auch vorne stehen: ***Um** Strom **zu** sparen, **schalte** ich das Licht aus.* Dann kommt sofort das Verb.',
      ],
      en: 'um … zu and damit both express a goal (answering Wozu? = what for?). If the subject is the same in both parts, use um … zu + infinitive at the end, with no subject and no conjugated verb. If the subjects are different, you must use damit, a subordinating conjunction that sends the conjugated verb to the end. With separable verbs, zu goes between the prefix and the verb: wegzuwerfen.',
    }),
    gap('t2-gap', [
      'Ich trenne den Müll, {{um}} die Umwelt zu schützen.',
      'Kenji spendet Essen, {{damit}} andere Menschen satt werden.',
      'Nele ruft bei foodsharing an, um Informationen {{zu}} bekommen.',
      'Wir machen einen Plan, {{damit}} alle Nachbarn mithelfen können.',
      'Sofia fährt mit dem Rad, {{um}} Geld zu sparen.',
      'Herr Lehmann gibt Tipps, damit der Garten gut {{wächst}}.',
    ], { bank: ['um', 'damit', 'zu', 'wächst'], task: 'um, zu, damit oder das Verb? Ergänze.', taskEn: 'Fill in um, zu, damit or the verb.' }),
    sort('t2-sort', ['ein Subjekt → um … zu', 'zwei Subjekte → damit'], [
      ['Nele fährt Rad. Nele will fit bleiben.', 0],
      ['Kenji kocht weniger. Er möchte weniger wegwerfen.', 0],
      ['Felix nimmt eine Tasche mit. Er möchte keine Plastiktüte kaufen.', 0],
      ['Sofia gießt die Pflanzen. Die Pflanzen sollen wachsen.', 1],
      ['Wir hängen einen Zettel auf. Die Nachbarn sollen Bescheid wissen.', 1],
      ['Amara erklärt die Regeln. Alle sollen sie verstehen.', 1],
    ], { task: 'Gleiches Subjekt oder nicht? Wie verbindet man die Sätze?', taskEn: 'Same subject or not? Decide whether you would join the two sentences with um … zu or with damit.' }),
    order('t2-order', ['Wir', 'bauen', 'Hochbeete,', 'damit', 'Kenji', 'frische Kräuter', 'hat.'], { task: 'Bau den Satz mit damit.', taskEn: 'Build the sentence with damit. The verb goes to the end.' }),
    text('t2-info', `**Foodsharing: Essen teilen statt wegwerfen**

In Deutschland landen jedes Jahr Millionen Tonnen Lebensmittel im Müll, oft Brot, Obst und Gemüse, die noch völlig in Ordnung sind. Dagegen engagiert sich seit 2012 die Initiative foodsharing. Freiwillige, die sogenannten Foodsaver, holen Lebensmittel ab, die Bäckereien, Supermärkte oder Restaurants nicht mehr verkaufen können. Sie verteilen sie an Freunde und Nachbarn oder bringen sie zu einem Fairteiler.

Ein Fairteiler ist ein öffentliches Regal oder ein Kühlschrank, zum Beispiel in einem Hinterhof, an einer Uni oder vor einem Café. Der Name ist ein Wortspiel aus „fair“ und „verteilen“. Jeder darf etwas hineinstellen und mitnehmen, ganz kostenlos. Damit niemand krank wird, gibt es klare Regeln: kein rohes Fleisch, kein roher Fisch, nichts Abgelaufenes. Außerdem kontrolliert eine Person das Regal regelmäßig.

Auch in Österreich und in der Schweiz gibt es viele Foodsaver. Für viele ist das Engagement mehr als Umweltschutz: Man lernt Nachbarn kennen, und Menschen mit wenig Geld bekommen gute Lebensmittel.`,
      { kicker: 'Landeskunde', title: 'Engagement für Mensch und Natur', task: 'Lies den Text. Was ist ein Fairteiler?', taskEn: 'Read the text about food sharing in Germany, Austria and Switzerland. What is a Fairteiler? abgelaufen = past its expiration date.' }),
    mcq('t2-q4', 'Was machen Foodsaver?', ['Sie verkaufen Lebensmittel billiger.', 'Sie holen Lebensmittel ab, die sonst weggeworfen werden.', 'Sie kochen für Restaurants.'], 1),
    mcq('t2-q5', 'Was darf man nicht in einen Fairteiler stellen?', ['Brot vom Vortag', 'rohes Fleisch', 'Äpfel'], 1),
    phrases('t2-phr', 'Ziele nennen und Umwelttipps geben', {
      'Ziele nennen': ['Mein Ziel ist es, weniger Müll zu produzieren.', 'Ich möchte etwas tun, damit …', 'Wir wollen erreichen, dass …'],
      'Tipps geben': ['Versuch doch mal, … zu …', 'Es ist besser, wenn man …', 'Am umweltfreundlichsten ist es, …', 'Ein guter Tipp: Nimm immer eine Stofftasche mit.'],
      'Auf Tipps reagieren': ['Gute Idee, das probiere ich aus.', 'Das mache ich schon lange.', 'Das ist leichter gesagt als getan.'],
    }),
    compose('t2-comp', 'Gib einer Freundin drei Umwelttipps.', [
      ['Tipp 1: Einkaufen', 'Tip 1: shopping', ['Nimm eine Stofftasche mit,', 'um', 'keine Plastiktüte', 'zu kaufen.']],
      ['Tipp 2: Heizen', 'Tip 2: heating', ['Lüfte kurz und kräftig,', 'damit', 'die Wohnung nicht', 'auskühlt.']],
      ['Tipp 3: Unterwegs', 'Tip 3: getting around', ['Fahr mit dem Rad,', 'um', 'Benzin', 'zu sparen.']],
    ], { task: 'Bau die Tipps.', taskEn: 'Build three environmental tips with um … zu or damit. auskühlen = to get cold.' }),
  ]);

const teil3 = section('teil-3', 'modul', 'Teil 3', 'Schmuddelwetter und Föhn', 'lilac', 15,
  ['über das Wetter sprechen', 'einen Wetterbericht verstehen', 'Prüfungstraining: Hören Teil 4'], [
    text('t3-text', `**Typisch Wetter? D-A-CH im Winter**

Über das Wetter reden Deutsche, Österreicherinnen und Schweizer gern, besonders im Winter. Und es gibt viel zu erzählen, denn das Wetter ist überall ein bisschen anders.

Im Norden, an der Nord- und Ostsee, ist der Winter meistens mild, aber windig und nass. Schnee bleibt hier selten lange liegen. Die Menschen sprechen dann von „Schmuddelwetter“: grau, kalt und regnerisch.

In der Mitte Deutschlands, zum Beispiel in Leipzig, gibt es im Januar oft Nebel und Frost. Die Temperaturen liegen meistens um null Grad.

In den Alpen, in Österreich und in der Schweiz, sind die Winter am kältesten. Dort fallen manchmal in einer Nacht fünfzig Zentimeter Schnee. Aber es gibt auch ein besonderes Wetter: den Föhn. Das ist ein warmer, trockener Wind aus dem Süden. Bei Föhn ist der Himmel ganz klar, und man sieht die Berge sehr weit. Manche Menschen bekommen davon Kopfschmerzen.

Und der Klimawandel? Die Winter werden wärmer. Viele kleinere Skigebiete in niedrigen Lagen haben nicht mehr genug Schnee. Deshalb brauchen sie Schneekanonen. Die verbrauchen viel Wasser und Energie, und das ist alles andere als umweltfreundlich.`,
      { kicker: 'Landeskunde', title: 'Das Wetter in D-A-CH', task: 'Lies den Text über das Wetter.', taskEn: 'Read the text about winter weather in Germany, Austria and Switzerland. Skigebiet = ski area.' }),
    mcq('t3-q1', 'Was ist „Schmuddelwetter“?', ['grau, kalt und regnerisch', 'sonnig und kalt', 'heiß und trocken'], 0),
    mcq('t3-q2', 'Was ist der Föhn?', ['ein kalter Wind aus dem Norden', 'ein warmer, trockener Wind aus dem Süden', 'viel Schnee in einer Nacht'], 1),
    mcq('t3-q3', 'Warum brauchen manche Skigebiete Schneekanonen?', ['Die Gäste wollen mehr Schnee.', 'Es gibt nicht mehr genug Schnee.', 'Die Kanonen sparen Energie.'], 1),
    audio('t3-audio', 'Hören: Das Wetter für Mitteldeutschland', [
      ['moderatorin', 'Und jetzt das Wetter für Sachsen, Sachsen-Anhalt und Thüringen. Heute Nacht wird es frostig: Die Temperaturen sinken auf minus acht Grad, im Erzgebirge sogar auf minus fünfzehn Grad.'],
      ['moderatorin', 'Am Samstag scheint zunächst die Sonne, es bleibt aber eisig kalt, bei Höchstwerten um minus zwei Grad. Am Nachmittag ziehen von Westen Wolken auf.'],
      ['moderatorin', 'In der Nacht zum Sonntag beginnt es zu schneien. In Leipzig und Dresden erwarten wir bis zu zehn Zentimeter Neuschnee. Vorsicht auf den Straßen und Gehwegen: Es kann sehr glatt werden!'],
      ['moderatorin', 'Am Montag wird es deutlich milder. Der Schnee geht in Regen über, und die Temperaturen steigen auf plus vier Grad. Dazu weht ein kräftiger Wind aus Südwest. Also: Regenschirm nicht vergessen!'],
    ], { task: 'Hör den Wetterbericht. Wie wird das Wetter am Wochenende?', taskEn: 'Listen to the radio weather report for central Germany. What will the weather be like over the weekend? glatt = slippery, icy.' }),
    mcq('t3-q4', 'Wie kalt wird es heute Nacht in der Region?', ['minus zwei Grad', 'minus acht Grad', 'plus vier Grad'], 1),
    mcq('t3-q5', 'Wann beginnt es zu schneien?', ['am Samstagmorgen', 'in der Nacht zum Sonntag', 'am Montag'], 1),
    mcq('t3-q6', 'Wie wird das Wetter am Montag?', ['milder, mit Regen und Wind', 'sonnig und eisig kalt', 'mit viel Neuschnee'], 0),
    phrases('t3-phr', 'Über das Wetter sprechen', {
      'Wie ist das Wetter?': ['Es ist sonnig / bewölkt / neblig.', 'Es regnet / schneit / stürmt.', 'Es sind minus fünf Grad.', 'Vorsicht, es ist glatt!'],
      'Das Wetter bewerten': ['Was für ein Schmuddelwetter!', 'So ein herrliches Wetter heute!', 'Heute ist bestimmt der kälteste Tag des Jahres.'],
      'Small Talk': ['Kalt heute, oder?', 'Hoffentlich wird es bald wärmer.', 'Morgen soll es schneien.'],
    }),
    tip('t3-pt-tip', 'Prüfungstraining: Hören Teil 4', 'In **Hören Teil 4** hörst du eine **Diskussion im Radio**: eine Moderatorin oder ein Moderator und zwei Gäste. Du hörst den Text **zweimal**. Bei acht Aussagen entscheidest du: **Wer sagt das?**\n\n1. Lies vor dem Hören alle Aussagen und unterstreiche die wichtigen Wörter.\n2. Am Anfang stellt die Moderatorin die Gäste vor. Merk dir gut: **Wer ist wer?** Was macht die Person beruflich?\n3. Die Personen sagen es fast nie mit den gleichen Wörtern wie in der Aussage. Achte auf die **Bedeutung**.\n4. Vergiss die Moderatorin nicht! Sie stellt nicht nur Fragen, manchmal erzählt sie auch etwas von sich oder fasst zusammen.'),
    audio('t3-pt-audio', 'Prüfungstraining: Thema am Abend', [
      ['moderatorin', 'Guten Abend und willkommen bei „Thema am Abend“. Heute fragen wir: Was kann jeder Einzelne für die Umwelt tun? Bei mir im Studio sind Lena Krämer von der Leipziger Umweltgruppe „Grüner Westen“ und der Bäcker Sepp Brunner. Frau Krämer, reicht es, wenn ich meinen Müll trenne?'],
      ['lena', 'Müll trennen ist gut, aber das ist nur ein kleiner Schritt. Viel wichtiger ist, wie wir uns bewegen und was wir essen. Wer das Auto öfter stehen lässt und weniger Fleisch isst, spart wirklich viel CO₂.'],
      ['moderatorin', 'Herr Brunner, Sie haben eine Bäckerei mit drei Filialen. Was tun Sie?'],
      ['seppi', 'Wir backen abends weniger als früher, damit nicht so viel übrig bleibt. Und was trotzdem übrig ist, holen Foodsaver ab. Früher haben wir jeden Abend zwei Kisten Brot weggeworfen. Das war mir immer peinlich.'],
      ['moderatorin', 'Das klingt nach einer einfachen Lösung. Warum machen das nicht alle Bäckereien?'],
      ['seppi', 'Weil die Kunden um sechs Uhr abends noch volle Regale sehen wollen. Ehrlich gesagt: Nicht nur die Betriebe, auch die Kunden müssen umdenken.'],
      ['lena', 'Da stimme ich Ihnen zu. Aber man kann nicht alles den Bürgern überlassen. Die Politik muss bessere Angebote machen: billigere Bahntickets, sichere Radwege, mehr Busse auf dem Land.'],
      ['moderatorin', 'Also brauchen wir beides: Menschen, die sich engagieren, und gute Regeln. Ich persönlich habe übrigens im letzten Jahr mein Auto verkauft und vermisse es kein bisschen.'],
      ['seppi', 'Respekt! Ich fahre jeden Morgen um drei Uhr in die Backstube. Da fährt leider noch kein Bus.'],
      ['lena', 'Genau das meine ich. Auf dem Land ist der umweltfreundlichste Weg oft gar nicht möglich.'],
      ['moderatorin', 'Vielen Dank Ihnen beiden. Nach der Musik sprechen wir mit unseren Hörerinnen und Hörern.'],
    ], { task: 'Hör die Diskussion. Wer sagt das: die Moderatorin, Lena Krämer oder Sepp Brunner?', taskEn: 'Listen to the radio discussion. For each statement, decide who says it: the host, Lena Krämer or Sepp Brunner. Backstube = bakery kitchen. umdenken = to rethink.' }),
    mcq('t3-pt-q1', 'Mülltrennung allein reicht nicht.', ['Moderatorin', 'Lena Krämer', 'Sepp Brunner'], 1, { why: 'Lena: „Müll trennen ist gut, aber das ist nur ein kleiner Schritt.“' }),
    mcq('t3-pt-q2', 'Es war mir unangenehm, so viel Brot wegzuwerfen.', ['Moderatorin', 'Lena Krämer', 'Sepp Brunner'], 2, { why: 'Herr Brunner: „Das war mir immer peinlich.“' }),
    mcq('t3-pt-q3', 'Auch die Kunden müssen ihr Verhalten ändern.', ['Moderatorin', 'Lena Krämer', 'Sepp Brunner'], 2, { why: 'Herr Brunner: „Auch die Kunden müssen umdenken.“' }),
    mcq('t3-pt-q4', 'Ich brauche kein eigenes Auto mehr.', ['Moderatorin', 'Lena Krämer', 'Sepp Brunner'], 0, { why: 'Die Moderatorin hat ihr Auto verkauft und vermisst es nicht.' }),
  ]);

const wg = section('wg', 'kommunikation', 'Die Fuchsbau-WG', 'Folge 5: Ein Garten im Hof', 'rose', 12,
  ['eine Geschichte hören', 'einen Aushang verstehen', 'über Pläne diskutieren'], [
    text('wg-intro', 'Ein kalter Samstag im Januar. Im Hof liegt Schnee. Sofia hat ihren Plan fertig: drei Hochbeete, ein Kompost, eine Bank und im Durchgang ein Regal als Fairteiler. Mit Mütze und Tee stehen alle im Hof: Sofia, Nele, Kenji, Amara, Felix und Herr Lehmann.',
      { kicker: 'Die Geschichte', en: 'A cold Saturday in January. There is snow in the courtyard. Sofia has finished her plan: three raised beds, a compost bin, a bench and a shelf in the passageway as a food-sharing point. Everyone is standing in the courtyard with hats and tea: Sofia, Nele, Kenji, Amara, Felix and Herr Lehmann.' }),
    audio('wg-audio', 'Folge 5: Ein Garten im Hof', [
      ['sofia', 'So, hier ist mein Plan. Da hinten, wo es im Sommer am sonnigsten ist, kommen drei Hochbeete hin. Daneben der Kompost.'],
      ['herrLehmann', 'Nu, das ist ja eine schöne Idee. Früher hatten wir hier auch Gemüse. Meine Erika hat jedes Jahr Bohnen gepflanzt.'],
      ['kenji', 'Und ich bekomme die frischesten Kräuter von ganz Plagwitz. Die Gemüsereste aus der Küche bringe ich für den Kompost.'],
      ['nele', 'Und der Fairteiler? Hat die Frau von foodsharing geantwortet?'],
      ['sofia', 'Ja! Sie kommt nächste Woche vorbei, um uns die Hygieneregeln zu erklären. Und das Regal baut Felix.'],
      ['felix', 'Moment mal, wer hat das denn entschieden? … Na gut. Ich baue es aus alten Obstkisten. Das ist sowieso die günstigere Lösung.'],
      ['amara', 'Und ich male ein Schild, damit alle wissen, was rein darf und was nicht. Oh, da kommt jemand. Ist das nicht Herr Vogt?'],
      ['herrVogt', 'Guten Tag zusammen. Vogt, Hausverwaltung Elbstein. Ich hänge nur kurz eine Information im Treppenhaus auf.'],
      ['sofia', 'Guten Tag, Herr Vogt. Wir planen gerade einen Garten für den Hof. Für alle Mieter.'],
      ['herrVogt', 'Hm. Das tut mir leid, aber nach der Modernisierung wird der Hof umgebaut. Hier entstehen Stellplätze für Autos. Das steht alles im Aushang.'],
      ['nele', 'Parkplätze? Statt Beeten und Bäumen? Das ist doch nicht Ihr Ernst!'],
      ['herrVogt', 'Ich verstehe Ihren Ärger. Aber die Entscheidung kommt nicht von mir. Bis zum Baubeginn können Sie den Hof natürlich nutzen. Auf Wiedersehen.'],
      ['herrLehmann', 'Bis die Bagger kommen, wächst hier Gemüse. Und vielleicht kommen sie ja gar nicht.'],
      ['nele', 'Genau. Wir müssen uns organisieren, damit dieser Hof grün bleibt.'],
    ], { task: 'Hör die Geschichte. Was plant die WG, und was sagt Herr Vogt?', taskEn: 'Listen to the story. What is the flat share planning, and what does Herr Vogt say? Bagger = excavator.' }),
    text('wg-aushang', `**Elbstein Immobilien GmbH · Hausverwaltung**

**Information für alle Mieterinnen und Mieter der Karl-Heine-Straße**

Leipzig, 16. Januar 2027

Sehr geehrte Mieterinnen und Mieter,

im Rahmen der geplanten Modernisierung wird auch der Innenhof neu gestaltet. Nach dem Ende der Bauarbeiten entstehen dort acht Pkw-Stellplätze sowie ein überdachter Fahrradabstellplatz. Die Mülltonnen bekommen einen neuen Platz an der Hofeinfahrt.

Bis zum Baubeginn steht Ihnen der Hof wie bisher zur Verfügung. Wir bitten Sie jedoch, keine festen Bauten (z. B. Gartenhäuser oder gemauerte Beete) zu errichten. Bewegliche Pflanzkübel und Hochbeete müssen vor dem Baubeginn entfernt werden. Den genauen Termin teilen wir Ihnen rechtzeitig mit.

Mit freundlichen Grüßen
i. A. Vogt
Hausverwaltung`,
      { kicker: 'Im Treppenhaus', title: 'Der Aushang', task: 'Lies den Aushang von Herrn Vogt.', taskEn: 'Read the notice Herr Vogt posted in the stairwell.', en: 'The notice says: as part of the planned modernization, the courtyard will be redesigned. After construction there will be eight parking spaces for cars and a covered bike rack. The garbage cans will move to the courtyard entrance. Until construction starts, tenants can use the courtyard as before, but they must not build anything permanent such as garden sheds or brick beds. Movable planters and raised beds must be removed before construction begins. The exact date will be announced in time.' }),
    mcq('wg-q1', 'Wer baut das Regal für den Fairteiler?', ['Kenji', 'Felix', 'Herr Lehmann'], 1),
    mcq('wg-q2', 'Warum kommt die Frau von foodsharing vorbei?', ['um die Hygieneregeln zu erklären', 'um Essen abzuholen', 'um den Garten zu planen'], 0),
    mcq('wg-q3', 'Was soll nach der Modernisierung im Hof entstehen?', ['ein Spielplatz', 'Stellplätze für Autos', 'ein Gemüsegarten'], 1),
    mcq('wg-q4', 'Was dürfen die Mieter bis zum Baubeginn nicht bauen?', ['Hochbeete aus Holz', 'feste Bauten wie gemauerte Beete', 'einen Fahrradabstellplatz'], 1),
    mcq('wg-q5', 'Was möchte Nele am Ende?', ['umziehen', 'sich mit den anderen organisieren', 'mit Elbstein einen Vertrag machen'], 1),
  ]);

const grammatik = section('grammatik', 'grammatik', 'Grammatik', 'Alles auf einen Blick', 'peach', 10,
  ['Komparativ und Superlativ: besondere Formen', 'um … zu oder damit?'], [
    grammar('g-1', 'Besondere Formen: Komparativ und Superlativ', {
      intro: 'Einige wichtige Adjektive sind **unregelmäßig**. Vor dem Nomen bekommen auch sie die normale Endung.',
      head: ['Grundform', 'Komparativ', 'Superlativ', 'vor dem Nomen'],
      rows: [
        ['gut', 'besser', 'am besten', 'die **beste** Idee'],
        ['viel', 'mehr', 'am meisten', 'das **meiste** Geld'],
        ['gern', 'lieber', 'am liebsten', 'mein **liebstes** Hobby'],
        ['hoch', 'höher', 'am höchsten', 'ein **höherer** Berg'],
        ['nah', 'näher', 'am nächsten', 'die **nächste** Haltestelle'],
        ['groß', 'größer', 'am größten', 'der **größte** Keller'],
        ['teuer', 'teurer', 'am teuersten', 'das **teurere** Ticket'],
      ],
      notes: ['**hoch** verliert das **c** vor einer Endung: *der Berg ist hoch*, aber *ein **hoher** Berg, ein **höherer** Berg*.', 'Adjektive auf **-er** und **-el** verlieren oft das **e**: *teuer → teurer, dunkel → dunkler*.', 'Vergleich: *Das Rad ist schneller **als** das Auto.* Gleich: *Das Rad ist **so** schnell **wie** der Bus.*'],
      en: 'Some common adjectives are irregular: gut, besser, am besten; viel, mehr, am meisten; gern, lieber, am liebsten; hoch, höher, am höchsten; nah, näher, am nächsten. Before a noun they take normal adjective endings. hoch drops the c before an ending (ein hoher Berg). Adjectives ending in -er or -el often drop the e (teurer, dunkler). Compare with als (faster than) and so … wie (as fast as).',
    }),
    grammar('g-2', 'Wozu? um … zu oder damit?', {
      head: ['Frage', 'Subjekte', 'Konnektor', 'Beispiel'],
      rows: [
        ['Wozu fährt Sofia Rad?', 'gleich (Sofia, Sofia)', 'um … zu', 'Sie fährt Rad, **um** fit **zu** bleiben.'],
        ['Wozu übt Nele mit Sofia?', 'verschieden (Nele, Sofia)', 'damit', 'Nele übt mit Sofia, **damit** Sofia schneller Deutsch **lernt**.'],
        ['Wozu schreibt Herr Vogt einen Aushang?', 'verschieden (Herr Vogt, die Mieter)', 'damit', 'Er schreibt einen Aushang, **damit** die Mieter Bescheid **wissen**.'],
        ['Wozu spart Kenji Energie?', 'gleich (Kenji, Kenji)', 'um … zu', '**Um** Geld **zu** sparen, **schaltet** er die Öfen früher aus.'],
      ],
      notes: ['Test: Kannst du das Subjekt aus dem Hauptsatz wiederholen? Dann geht **um … zu**.', 'Vor **um** und **damit** steht immer ein **Komma**.'],
      en: 'Ask: is the subject of both parts the same? Then use um … zu + infinitive. If the subjects are different, use damit with the verb at the end. Always put a comma before um and damit.',
    }),
    mcq('g-q1', 'Das ist ___ Idee von allen!', ['die beste', 'die besten', 'die gute'], 0),
    mcq('g-q2', 'Wir suchen eine ___ Wohnung.', ['günstigere', 'günstigerer', 'günstiger'], 0, { why: 'eine + feminin + Nominativ/Akkusativ: -e. Also: eine günstigere Wohnung.' }),
    mcq('g-q3', 'Ich stehe früh auf, ___ den ersten Zug zu nehmen.', ['damit', 'um', 'weil'], 1, { why: 'Gleiches Subjekt und zu + Infinitiv am Ende: um … zu.' }),
    mcq('g-q4', 'Nele erklärt es noch einmal, damit Sofia alles ___.', ['versteht', 'verstehen', 'zu verstehen'], 0, { why: 'damit-Satz: anderes Subjekt (Sofia), das konjugierte Verb steht am Ende.' }),
  ]);

const uebungen = section('uebungen', 'uebung', 'Übungen', 'Training', 'butter', 15,
  ['Strategie: Wörter in Wortfamilien lernen', 'Aussprache: lange Sätze sprechen', 'eine Umweltaktion vorstellen'], [
    tip('u-tip', 'Strategie: Wörter in Wortfamilien lernen', 'Viele deutsche Wörter gehören zu einer **Wortfamilie**. Wenn du ein Wort kennst, verstehst du oft auch die anderen.\n\n**Umwelt** → umwelt**freundlich**, der Umwelt**schutz**, die Umwelt**aktion**, umwelt**bewusst**\n**Wetter** → der Wetter**bericht**, das Un**wetter**, wetter**fest**\n**schützen** → der **Schutz**, der Umwelt**schutz**, der Natur**schützer**\n\n1. Schreib ein Grundwort in die Mitte eines Blattes.\n2. Sammle alle Wörter mit diesem Wortstamm darum herum.\n3. Markiere die Wortart: Nomen mit Artikel, Verben, Adjektive.'),
    sort('u-sort', ['Wortfamilie „Umwelt“', 'Wortfamilie „Wetter“', 'Wortfamilie „Müll“'], [
      ['umweltfreundlich', 0], ['der Umweltschutz', 0], ['die Umweltaktion', 0],
      ['der Wetterbericht', 1], ['das Unwetter', 1], ['wetterfest', 1],
      ['die Mülltonne', 2], ['die Mülltrennung', 2], ['die Müllabfuhr', 2],
    ], { task: 'Zu welcher Wortfamilie gehört das Wort?', taskEn: 'Sort the words into their word families.' }),
    gap('u-gap', [
      'Das Lastenrad ist sehr {{umweltfreundlich}}.',
      'Am Samstag gibt es eine {{Umweltaktion}} im Park.',
      'Laut {{Wetterbericht}} schneit es morgen.',
      'Wegen des {{Unwetters}} fallen viele Züge aus.',
      'Der {{Umweltschutz}} ist Sofia sehr wichtig.',
    ], { bank: ['umweltfreundlich', 'Umweltaktion', 'Wetterbericht', 'Unwetters', 'Umweltschutz'], task: 'Ergänze ein Wort aus der Wortfamilie.', taskEn: 'Fill in a word from the word families.' }),
    audio('u-aus', 'Aussprache: lange Sätze sprechen', [
      ['frauKlein', 'Lange Sätze sind am Anfang schwer. Der Trick: Teil den Satz in kleine Stücke und mach zwischen den Stücken eine kurze Pause.'],
      ['frauKlein', 'Hör mal: Im Frühling … bauen wir im Hof … drei Hochbeete. Und jetzt ohne Pausen: Im Frühling bauen wir im Hof drei Hochbeete.'],
      ['frauKlein', 'Vor um und damit machst du eine kleine Pause. Die Stimme bleibt dabei oben: Sofia baut Hochbeete, … damit Kenji frische Kräuter hat.'],
      ['frauKlein', 'Jetzt ein sehr langer Satz: Sofia möchte im Durchgang zum Hof … einen Fairteiler aufstellen, … um weniger Essen … wegzuwerfen.'],
      ['frauKlein', 'Am Ende des Satzes geht die Stimme nach unten. Und atme vor dem Satz ruhig ein. Noch einmal, ganz entspannt.'],
    ], { task: 'Hör zu und sprich nach. Mach Pausen zwischen den Teilen.', taskEn: 'Listen and repeat. Split long sentences into chunks with short pauses. Before um and damit, pause briefly and keep your voice up. At the end of the sentence, your voice goes down.' }),
    order('u-order', ['Um', 'Strom', 'zu sparen,', 'schalten', 'wir', 'das Licht', 'aus.'], { task: 'Bau den Satz. Das Ziel steht vorne.', taskEn: 'Build the sentence. The goal comes first, then the verb.' }),
    compose('u-comp', 'Stell eine Umweltaktion in deinem Viertel vor.', [
      ['Was und wann?', 'What and when?', ['Am Samstag', 'machen', 'wir', 'eine Aufräumaktion im Park.']],
      ['Warum?', 'Why?', ['Wir sammeln Müll,', 'damit', 'der Park', 'wieder sauber ist.']],
      ['Lade alle ein.', 'Invite everyone.', ['Kommt alle mit,', 'um', 'etwas für die Umwelt', 'zu tun!']],
    ], { task: 'Bau die Ankündigung.', taskEn: 'Build an announcement for a neighborhood environmental cleanup.' }),
    mcq('u-q1', 'Welches Wort gehört zur Wortfamilie „schützen“?', ['der Naturschützer', 'die Schüssel', 'der Schuh'], 0, { task: 'Wortfamilien', taskEn: 'Word families' }),
  ]);

const wortschatz = section('wortschatz', 'wortschatz', 'Wortschatz und Check', 'Das kann ich jetzt', 'mint', 10,
  ['Wörter wiederholen', 'über Ideen zum Umweltschutz diskutieren', 'den Stand einschätzen'], [
    cards('w-cards', [
      ['die Umwelt', 'die Natur, die Luft, das Wasser um uns herum', 'environment'], ['umweltfreundlich', 'gut für die Natur', 'eco-friendly'], ['der Müll', 'Sachen, die man wegwirft', 'trash, garbage'],
      ['wegwerfen', 'in den Müll tun', 'to throw away'], ['spenden', 'etwas kostenlos geben', 'to donate'], ['das Verkehrsmittel', 'Bus, Bahn, Rad oder Auto', 'means of transport'],
      ['der Wetterbericht', 'Information, wie das Wetter wird', 'weather report'], ['der Nebel', 'Wolken direkt am Boden', 'fog'], ['glatt', 'Vorsicht, Eis auf der Straße!', 'slippery, icy'],
      ['das Ziel', 'was man erreichen möchte', 'goal'], ['sich engagieren', 'freiwillig für etwas arbeiten', 'to get involved'], ['das Beet', 'ein Stück Garten mit Pflanzen', 'garden bed'],
    ]),
    phrases('w-phr', 'Über Ideen zum Umweltschutz diskutieren', {
      'Einen Vorschlag machen': ['Wie wäre es, wenn wir …?', 'Ich schlage vor, dass …', 'Wir könnten doch …'],
      'Zustimmen': ['Da hast du völlig recht.', 'Das sehe ich genauso.', 'Gute Idee, so machen wir es.'],
      'Widersprechen': ['Da bin ich anderer Meinung.', 'Das finde ich nicht so realistisch, weil …', 'Ja, schon, aber …'],
    }),
    match('w-match', [
      ['das Lastenrad', 'Damit transportiert man schwere Sachen ohne Auto.'],
      ['das Hochbeet', 'Hier wachsen Kräuter und Gemüse in einer Holzkiste.'],
      ['der Kompost', 'Hier werden Gemüsereste zu Erde.'],
      ['die Mülltonne', 'Hier hinein kommt der Müll.'],
      ['die Stofftasche', 'Die nimmt man zum Einkaufen mit, statt eine Plastiktüte zu kaufen.'],
      ['die Pfandflasche', 'Die bringt man zurück in den Supermarkt und bekommt Geld.'],
      ['die Solaranlage', 'Sie macht auf dem Dach Strom aus Sonnenlicht.'],
      ['der Regenschirm', 'Den braucht man bei Regen.'],
      ['die Gießkanne', 'Damit gibt man den Pflanzen Wasser.'],
    ], { task: 'Was ist was?', taskEn: 'Match each object to its description.' }),
    gap('w-gap', [
      'Das Fahrrad ist das {{umweltfreundlichste}} Verkehrsmittel. (umweltfreundlich, Superlativ)',
      'Felix baut das Regal aus Obstkisten, {{um}} Geld zu sparen.',
      'Amara malt ein Schild, {{damit}} alle die Regeln kennen.',
      'Nach der Modernisierung sollen im Hof {{Stellplätze}} entstehen.',
    ], { bank: ['umweltfreundlichste', 'um', 'damit', 'Stellplätze'], task: 'Ergänze.', taskEn: 'Fill in the gaps.' }),
    mcq('w-q1', 'Du möchtest einem Nachbarn einen Umwelttipp geben. Was sagst du?', ['Versuchen Sie doch mal, das Licht auszuschalten, wenn Sie den Raum verlassen.', 'Sie müssen sofort Ihr Auto verkaufen!', 'Das Wetter ist heute schön.'], 0, { task: 'Was passt?', taskEn: 'Which one fits?' }),
    mcq('w-q2', 'Morgen soll es schneien. Wir brauchen ___ Kleidung.', ['wärmere', 'wärmer', 'warmere'], 0, { why: 'Komparativ von warm mit Umlaut, feminin ohne Artikel: wärmere.' }),
    order('w-order', ['Wir', 'treffen', 'uns,', 'um', 'den Garten', 'zu planen.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence.' }),
    checklist('w-check', ['Ich kann Dinge mit dem Komparativ und dem Superlativ vor Nomen vergleichen.', 'Ich kann einen Text über ein Start-up verstehen.', 'Ich kann mit um … zu und damit Ziele ausdrücken.', 'Ich kann Umwelttipps geben.', 'Ich kann über das Wetter sprechen und einen Wetterbericht verstehen.', 'Ich kann eine Umweltaktion vorstellen.']),
  ]);

export const b1k5: Chapter = {
  id: 'b1-k5', number: 5, title: 'Umweltfreundlich?', theme: 'Umwelt und Umweltschutz, Start-ups, Ziele, Wetter',
  grammar: 'Komparativ und Superlativ vor Nomen. Nebensatz mit damit und Infinitiv mit um … zu.',
  sections: [einstieg, teil1, teil2, teil3, wg, grammatik, uebungen, wortschatz],
  games: ['b1k5-sprint', 'b1k5-memory', 'b1k5-satzbau', 'b1k5-artikel'],
  exam: [
    x(1, mcq('x1', 'Wir suchen eine ___ Lösung.', ['günstigere', 'günstiger', 'günstigeren'], 0)),
    x(1, mcq('x2', 'Heute ist der ___ Tag des Jahres.', ['kälteste', 'kältesten', 'kälter'], 0)),
    x(1, mcq('x3', 'Ich fahre Rad, ___ fit zu bleiben.', ['um', 'damit', 'weil'], 0)),
    x(3, gap('x4', ['Kenji spendet Essen, {{damit}} nichts im Müll landet.', 'Sie stehen früh auf, {{um}} den ersten Zug zu erreichen.', 'Ich erkläre es dir noch einmal, damit du es {{verstehst}}. (verstehen)'], { task: 'Ergänze um, damit oder das Verb.', taskEn: 'Fill in um, damit or the verb.' })),
    x(3, gap('x5', ['Wir brauchen einen {{größeren}} Keller. (groß, Komparativ)', 'Das ist das {{schnellste}} Rad im Laden. (schnell, Superlativ)', 'Sie hat {{bessere}} Ideen als ich. (gut, Komparativ)'], { task: 'Ergänze die Form mit Endung.', taskEn: 'Fill in the form with the correct ending.' })),
    x(1, mcq('x6', 'Warum findet die Aufräumaktion nicht am Samstag statt?', ['Am Samstag soll es stürmen und regnen.', 'Ben hat am Samstag keine Zeit.', 'Es gibt nicht genug Müllsäcke.'], 0),
      audio('x-st1', 'Hören: Die Aufräumaktion', [
        ['elif', 'Hey Ben, kommst du am Samstag zur Aufräumaktion an der Weißen Elster?'],
        ['ben', 'Eigentlich schon. Aber hast du den Wetterbericht gehört? Am Samstag soll es den ganzen Tag stürmen und regnen.'],
        ['elif', 'Ja, deshalb haben wir die Aktion verschoben. Sie ist jetzt am Sonntag um zehn. Da soll sogar die Sonne scheinen.'],
        ['ben', 'Perfekt. Soll ich etwas mitbringen?'],
        ['elif', 'Bring bitte Handschuhe mit, damit du dich nicht verletzt. Müllsäcke haben wir genug.'],
        ['ben', 'Alles klar. Ich frage auch meine Schwester. Je mehr Leute, desto besser!'],
      ])),
    x(1, mcq('x7', 'Was soll Ben mitbringen? (Hörtext oben)', ['Müllsäcke', 'Handschuhe', 'etwas zu essen'], 1)),
    x(1, mcq('x8', 'Was passiert mit der Kleidung, die am Ende übrig bleibt?', ['Sie geht an die Kleiderkammer.', 'Sie kommt in den Müll.', 'Man kann sie billig kaufen.'], 0),
      text('x-st2', '**Tauschen statt kaufen! Kleidertausch im Stadtteilzentrum Lindenau**\nWann: Samstag, 6. Februar, 14 bis 17 Uhr\nBringt bis zu zehn saubere Kleidungsstücke mit und nehmt mit, was euch gefällt. Was am Ende übrig bleibt, geht an die Kleiderkammer der Diakonie.\nBitte keine Schuhe und keine Unterwäsche!\nDer Eintritt ist frei. Kaffee und Kuchen gegen eine kleine Spende.', { kicker: 'Lesen' })),
    x(1, mcq('x9', 'Was darf man nicht mitbringen? (Text oben)', ['Jacken', 'Schuhe', 'Pullover'], 1)),
    x(2, order('x10', ['Wir', 'trennen', 'den Müll,', 'um', 'die Umwelt', 'zu schützen.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence.' })),
    x(1, mcq('x11', 'Eine Nachbarin sagt: „Kalt heute, oder?“ Was antwortest du?', ['Ja, total! Hoffentlich wird es bald wärmer.', 'Ja, das ist der wärmste Tag des Jahres.', 'Nein, ich habe keinen Hunger.'], 0)),
    x(1, mcq('x12', 'Welches Wort gehört nicht zur Wortfamilie „Umwelt“?', ['umweltfreundlich', 'der Umweltschutz', 'das Unwetter'], 2)),
  ],
};

export const gamesB1k5: GameDef[] = [
  {
    id: 'b1k5-sprint', engine: 'sprint', title: 'Vergleichs-Sprint', blurb: 'Komparativ und Superlativ mit Endung. 60 Sekunden!', skill: 'Komparativ und Superlativ', tone: 'mint', chapter: 5, emoji: '⚡',
    rules: 'Du siehst ein Nomen mit Lücke. Tippe auf die richtige Form mit Endung.', label: 'Welche Form passt?',
    items: [
      { q: 'der ___ Weg (kurz, Superlativ)', a: 'kürzeste', wrong: ['kürzesten', 'kurzeste'] }, { q: 'ein ___ Rad (schnell, Komparativ)', a: 'schnelleres', wrong: ['schnellere', 'schneller'] },
      { q: 'die ___ Lösung (gut, Komparativ)', a: 'bessere', wrong: ['gutere', 'besseren'] }, { q: 'die ___ Ideen (gut, Superlativ)', a: 'besten', wrong: ['beste', 'gutesten'] },
      { q: 'einen ___ Keller (groß, Komparativ)', a: 'größeren', wrong: ['größerer', 'großeren'] }, { q: 'der ___ Winter (kalt, Superlativ)', a: 'kälteste', wrong: ['kaltste', 'kältesten'] },
      { q: 'das ___ Verkehrsmittel (umweltfreundlich, Superlativ)', a: 'umweltfreundlichste', wrong: ['umweltfreundlichsten', 'umweltfreundlicher'] }, { q: 'ein ___ Angebot (gut, Komparativ)', a: 'besseres', wrong: ['bessere', 'guteres'] },
      { q: '___ Kleidung (warm, Komparativ)', a: 'wärmere', wrong: ['warmere', 'wärmerer'] }, { q: 'die ___ Haltestelle (nah, Superlativ)', a: 'nächste', wrong: ['nahste', 'näheste'] },
      { q: 'der ___ Berg (hoch, Superlativ)', a: 'höchste', wrong: ['hochste', 'höheste'] }, { q: 'ein ___ Weg (günstig, Komparativ)', a: 'günstigerer', wrong: ['günstigere', 'günstigeren'] },
    ],
  },
  {
    id: 'b1k5-memory', engine: 'memory', title: 'Wetter-Memory', blurb: 'Wetterwort und Bild: Finde die Paare.', skill: 'Wetter', tone: 'lilac', chapter: 5, emoji: '🃏',
    rules: 'Dreh zwei Karten um. Ein Paar ist ein Wetterwort und das passende Bild.', kinds: ['Wort', 'Bild'],
    pairs: [['die Sonne', '☀️'], ['der Regen', '🌧️'], ['der Schnee', '❄️'], ['das Gewitter', '⛈️'], ['der Nebel', '🌫️'], ['der Wind', '💨'], ['die Wolke', '☁️'], ['der Regenbogen', '🌈'], ['der Blitz', '⚡'], ['das Eis', '🧊']],
  },
  {
    id: 'b1k5-satzbau', engine: 'satzbau', title: 'Ziel-Baukasten', blurb: 'um … zu oder damit: Wohin gehört das Verb?', skill: 'um … zu und damit', tone: 'sky', chapter: 5, emoji: '🧱',
    rules: 'Tippe die Wörter in der richtigen Reihenfolge an. Bei um … zu steht zu + Infinitiv am Ende, im damit-Satz das konjugierte Verb.',
    sentences: [
      { parts: ['Sofia fährt Rad,', 'um', 'Geld', 'zu sparen.'], hint: 'gleiches Subjekt: um … zu' },
      { parts: ['Kenji spendet Reste,', 'damit', 'sie', 'nicht im Müll', 'landen.'], hint: 'anderes Subjekt: damit' },
      { parts: ['Wir bauen Hochbeete,', 'damit', 'Kenji', 'frische Kräuter', 'hat.'], hint: 'Verb ans Ende' },
      { parts: ['Nele ruft an,', 'um', 'Informationen', 'zu bekommen.'], hint: 'zu + Infinitiv am Ende' },
      { parts: ['Sofia stellt ein Regal auf,', 'um', 'weniger Essen', 'wegzuwerfen.'], hint: 'trennbar: zu in der Mitte' },
      { parts: ['Amara malt ein Schild,', 'damit', 'alle', 'die Regeln', 'kennen.'], hint: 'damit + Verb am Ende' },
      { parts: ['Um', 'Strom', 'zu sparen,', 'schalten', 'wir', 'das Licht aus.'], hint: 'Ziel vorne, dann das Verb' },
      { parts: ['Das Lastenrad', 'ist', 'das umweltfreundlichste', 'Verkehrsmittel.'], hint: 'Superlativ vor Nomen' },
    ],
  },
  {
    id: 'b1k5-artikel', engine: 'regen', title: 'Artikel-Regen', blurb: 'der, die oder das? Umwelt und Wetter.', skill: 'Artikel', tone: 'rose', chapter: 5, emoji: '☔',
    rules: 'Ein Nomen fällt herunter. Tippe auf den richtigen Artikel.', buckets: ['der', 'die', 'das'],
    words: artikel('die Umwelt, der Müll, das Lastenrad, der Kompost, das Hochbeet, die Mülltonne, der Nebel, das Gewitter, die Wolke, der Schnee, das Klima, die Energie, der Kaffeesatz, das Verkehrsmittel, die Lösung, der Wetterbericht, das Ziel, die Stofftasche'),
  },
];
