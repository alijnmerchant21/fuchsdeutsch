import type { Chapter, GameDef, GlossaryEntry } from '../types';
import { artikel, audio, cards, checklist, compose, gap, grammar, match, mcq, order, overview, phrases, section, sort, text, tip, x } from '../helpers';

// A2 Kapitel 7: Verkehr, Weg zur Arbeit, Wegbeschreibungen, Grafiken, Geschichten.
// Grammar: indirekte Fragesätze mit W-Wort und ob, Ortsangaben mit Präpositionen. Aussprache: schwierige Wörter.

export const glossaryA2k7: Record<string, GlossaryEntry> = {
  Verkehr: { de: 'Alle Autos, Busse, Fahrräder und Menschen auf der Straße.', en: 'traffic' },
  'öffentliche Verkehrsmittel': { de: 'Bus, Straßenbahn, U-Bahn, S-Bahn und Zug.', en: 'public transport' },
  pendeln: { de: 'Jeden Tag zwischen Wohnort und Arbeitsort hin- und herfahren.', en: 'to commute' },
  Stau: { de: 'Viele Autos stehen auf der Straße und kommen nicht weiter.', en: 'traffic jam' },
  Leihrad: { de: 'Ein Fahrrad, das man für kurze Zeit mieten kann.', en: 'rental bike, shared bike' },
  Umfrage: { de: 'Man fragt viele Menschen nach ihrer Meinung.', en: 'survey' },
  Grafik: { de: 'Ein Bild mit Zahlen, zum Beispiel ein Diagramm.', en: 'chart, graphic' },
  Prozent: { de: 'Ein Teil von hundert: 50 Prozent ist die Hälfte.', en: 'percent' },
  Hälfte: { de: 'Einer von zwei gleichen Teilen.', en: 'half' },
  Fahrplan: { de: 'Eine Liste mit allen Zeiten von Bus oder Bahn.', en: 'timetable' },
};

const einstieg = section('einstieg', 'einstieg', 'Einstieg', 'Wie kommst du zur Arbeit?', 'butter', 8,
  ['das Kapitel kennenlernen', 'Verkehrsmittel wiederholen'], [
    overview('e-over', 'Kapitel 7: Ganz schön mobil',
      'Auto, Bus, Fahrrad oder zu Fuß? In Kapitel 7 geht es um [[Verkehr]] und Mobilität. Du sprichst über den Weg zur Arbeit, verstehst Wegbeschreibungen und beschreibst eine [[Grafik]] mit [[Prozent]]. Du fragst höflich nach Informationen: *Wissen Sie, **wann** der Bus kommt?*\n\nKenji ist in Wien. In Leipzig probieren Nele und Felix die neuen [[Leihrad|Leihräder]] aus. Was kann da schon schiefgehen?',
      'This chapter is about getting around: public transport, commuting, giving directions and describing a chart. Grammar: indirect questions (Wissen Sie, wann der Bus kommt? Ich weiß nicht, ob …) with the verb at the end, and prepositions of place and movement (durch, über, entlang, an … vorbei).',
      ['Informationen erfragen', 'Wege beschreiben', 'Vor- und Nachteile von Verkehrsmitteln nennen', 'eine Grafik beschreiben']),
    match('e-match', [['die U-Bahn', '🚇'], ['der E-Roller', '🛴'], ['das Leihrad', '🚲'], ['das Taxi', '🚕'], ['die Fähre', '⛴️'], ['das Flugzeug', '✈️'], ['der Bus', '🚌'], ['das Motorrad', '🏍️']],
      { task: 'Welches Verkehrsmittel ist das?', taskEn: 'Match the means of transport.' }),
    sort('e-sort', ['Vorteil', 'Nachteil'], [['Mit dem Rad bleibt man fit.', 0], ['Im Auto steht man oft im Stau.', 1], ['Im Zug kann man lesen.', 0], ['Der Bus ist manchmal zu voll.', 1], ['Zu Fuß kostet nichts.', 0], ['Im Winter ist Radfahren kalt.', 1]], { task: 'Vorteil oder Nachteil?', taskEn: 'Advantage or disadvantage?' }),
  ]);

const teil1 = section('teil-1', 'modul', 'Teil 1', 'Wissen Sie, wann …?', 'mint', 15,
  ['Informationen höflich erfragen', 'indirekte Fragesätze'], [
    audio('t1-audio', 'Hören: An der Haltestelle', [
      ['amara', 'Entschuldigung, wissen Sie, wann die nächste Straßenbahn zum Krankenhaus fährt?'],
      ['herrLehmann', 'Die Siebzehn? Ich glaube, in fünf Minuten. Aber heute gibt es eine Baustelle.'],
      ['amara', 'Oh nein. Können Sie mir sagen, ob die Bahn trotzdem bis zum Krankenhaus fährt?'],
      ['herrLehmann', 'Nee, nur bis zum Markt. Dann müssen Sie in den Ersatzbus umsteigen.'],
      ['amara', 'Und wissen Sie, wo der Ersatzbus abfährt?'],
      ['herrLehmann', 'Direkt gegenüber vom Rathaus. Das ist aber alles schlecht ausgeschildert. Fragen Sie den Fahrer.'],
      ['amara', 'Vielen Dank! Ich hoffe, dass ich nicht zu spät komme.'],
    ], { task: 'Hör zu. Was ist das Problem?', taskEn: 'Listen. What is the problem? Baustelle = construction site, Ersatzbus = replacement bus.' }),
    mcq('t1-q1', 'Warum fährt die Bahn nicht bis zum Krankenhaus?', ['Es gibt eine Baustelle.', 'Es gibt einen Unfall.', 'Es ist Sonntag.'], 0),
    mcq('t1-q2', 'Wo fährt der Ersatzbus ab?', ['am Markt', 'gegenüber vom Rathaus', 'am Krankenhaus'], 1),
    grammar('t1-gram', 'Indirekte Fragesätze', {
      intro: 'Indirekte Fragen sind **höflicher** als direkte Fragen. Sie beginnen mit *Wissen Sie, …? Können Sie mir sagen, …? Ich weiß nicht, …* Das Verb steht **am Ende**.',
      head: ['direkte Frage', 'indirekte Frage'],
      rows: [['**Wann fährt** die Bahn?', 'Wissen Sie, **wann** die Bahn **fährt**?'], ['**Wo fährt** der Bus **ab**?', 'Können Sie mir sagen, **wo** der Bus **abfährt**?'], ['**Fährt** die Bahn bis zum Markt?', 'Wissen Sie, **ob** die Bahn bis zum Markt **fährt**?'], ['**Muss** ich umsteigen?', 'Ich weiß nicht, **ob** ich umsteigen **muss**.']],
      notes: ['**W-Frage** → indirekt mit dem **W-Wort**.', '**Ja/Nein-Frage** → indirekt mit **ob**.', 'Das Fragezeichen kommt nur, wenn der ganze Satz eine Frage ist.'],
      en: 'Indirect questions are more polite. A W-question keeps its question word, a yes/no question uses ob (whether). In both, the verb goes to the end.',
    }),
    gap('t1-gap', ['Wissen Sie, {{wann}} der Zug kommt? (Wann kommt der Zug?)', 'Ich weiß nicht, {{ob}} es heute regnet. (Regnet es heute?)', 'Können Sie mir sagen, {{wo}} die Post ist? (Wo ist die Post?)', 'Weißt du, {{wie}} lange die Fahrt dauert? (Wie lange dauert die Fahrt?)'],
      { bank: ['wann', 'ob', 'wo', 'wie'], task: 'Ergänze das Fragewort oder ob.', taskEn: 'Fill in the question word or ob.' }),
    order('t1-order', ['Wissen Sie,', 'ob', 'der Bus', 'heute', 'fährt?'], { task: 'Bau die indirekte Frage.', taskEn: 'Build the indirect question.' }),
    sort('t1-sort', ['mit W-Wort', 'mit ob'], [['Wohin fährt der Bus?', 0], ['Fährt der Bus zum Bahnhof?', 1], ['Wie viel kostet die Fahrkarte?', 0], ['Gibt es eine Ermäßigung?', 1], ['Wann kommt die Bahn?', 0], ['Hat der Zug Verspätung?', 1]], { task: 'Wie wird die Frage indirekt?', taskEn: 'Sort: does the indirect question use a question word or ob?' }),
  ]);

const teil2 = section('teil-2', 'modul', 'Teil 2', 'Durch den Park, über die Brücke', 'sky', 15,
  ['eine Wegbeschreibung verstehen und geben', 'Ortsangaben mit Präpositionen'], [
    grammar('t2-gram', 'Ortsangaben: Wege beschreiben', {
      head: ['Präposition', 'Fall', 'Beispiel'],
      rows: [['**durch**', 'Akk.', 'Gehen Sie **durch den** Park.'], ['**über**', 'Akk.', 'Fahren Sie **über die** Brücke.'], ['**um … herum**', 'Akk.', 'Gehen Sie **um den** Platz **herum**.'], ['**entlang**', 'Akk. (nachgestellt)', 'Gehen Sie **den** Fluss **entlang**.'], ['**an … vorbei**', 'Dat.', 'Gehen Sie **an der** Kirche **vorbei**.'], ['**gegenüber (von)**', 'Dat.', 'Der Bus hält **gegenüber vom** Rathaus.'], ['**bis zu**', 'Dat.', 'Fahren Sie **bis zur** Ampel.']],
      en: 'Prepositions for directions: durch (through), über (over, across), um … herum (around), entlang (along, after the noun), an … vorbei (past), gegenüber (opposite), bis zu (as far as).',
    }),
    match('t2-match', [['🌳➡️🌳', 'durch den Park'], ['🌉', 'über die Brücke'], ['⛪↪️', 'an der Kirche vorbei'], ['〰️🚶', 'den Fluss entlang'], ['⭕🚶', 'um den Platz herum']], { task: 'Was passt?', taskEn: 'Match the picture to the direction.' }),
    audio('t2-audio', 'Hören: Der Weg zum Café', [
      ['nele', 'Felix, du kennst das neue Café „Kranich“ noch nicht, oder? Pass auf, ich erkläre dir den Weg.'],
      ['nele', 'Du fährst mit dem Rad bis zur Sachsenbrücke. Dann über die Brücke und danach rechts, immer den Kanal entlang.'],
      ['nele', 'Nach etwa fünf Minuten fährst du an einer alten Fabrik vorbei. Dann links durch den kleinen Park.'],
      ['nele', 'Das Café ist direkt gegenüber vom Spielplatz. Du kannst es nicht verpassen!'],
    ], { task: 'Hör zu. Wie kommt Felix zum Café?', taskEn: 'Listen. How does Felix get to the café? Kanal = canal.' }),
    order('t2-order', ['bis zur Brücke', 'über die Brücke', 'den Kanal entlang', 'an der Fabrik vorbei', 'durch den Park'], { task: 'Bring den Weg in die richtige Reihenfolge.', taskEn: 'Put the directions in order.' }),
    mcq('t2-q1', 'Wo ist das Café?', ['neben der Fabrik', 'gegenüber vom Spielplatz', 'an der Brücke'], 1),
    gap('t2-gap', ['Gehen Sie {{durch}} den Park.', 'Fahren Sie {{über}} die Kreuzung.', 'Gehen Sie an der Post {{vorbei}}.', 'Die Apotheke ist {{gegenüber}} vom Bahnhof.'], { bank: ['durch', 'über', 'vorbei', 'gegenüber'], task: 'Ergänze.', taskEn: 'Fill in the gaps.' }),
    compose('t2-comp', 'Beschreib einem Touristen den Weg zum Museum.', [
      ['geradeaus bis zur Ampel', 'straight ahead to the traffic light', ['Gehen Sie', 'geradeaus', 'bis zur', 'Ampel.']],
      ['über die Straße', 'across the street', ['Dann', 'gehen Sie', 'über die', 'Straße.']],
      ['an der Kirche vorbei', 'past the church', ['Gehen Sie', 'an der Kirche', 'vorbei.']],
      ['Das Museum ist gegenüber vom Park.', 'The museum is opposite the park.', ['Das Museum', 'ist', 'gegenüber', 'vom Park.']],
    ], { task: 'Bau die Wegbeschreibung.', taskEn: 'Build the directions.' }),
  ]);

const teil3 = section('teil-3', 'modul', 'Teil 3', 'Der Weg zur Arbeit in D-A-CH', 'lilac', 15,
  ['eine Grafik beschreiben', 'über den Weg zur Arbeit sprechen', 'die eigene Meinung sagen'], [
    text('t3-text', `**Umfrage: Wie kommen Sie zur Arbeit? (Leipzig, 1000 Befragte)**

🚗 Auto: 38 %
🚋 Bus und Bahn: 27 %
🚲 Fahrrad: 21 %
🚶 zu Fuß: 11 %
🛴 anderes: 3 %

Die meisten Leipziger fahren mit dem Auto zur Arbeit, fast 40 Prozent. Mehr als ein Viertel benutzt Bus und Bahn. Etwa jeder Fünfte fährt mit dem Fahrrad. Nur wenige gehen zu Fuß. Im Vergleich zu vor zehn Jahren fahren heute doppelt so viele Menschen mit dem Rad.`,
      { kicker: 'Lesen', title: 'Eine Grafik', task: 'Lies die Grafik und den Text.', taskEn: 'Read the chart and the text. ein Viertel = a quarter, doppelt so viele = twice as many.' }),
    mcq('t3-q1', 'Wie kommen die meisten zur Arbeit?', ['mit dem Auto', 'mit Bus und Bahn', 'mit dem Fahrrad'], 0),
    mcq('t3-q2', 'Wie viel Prozent fahren mit dem Fahrrad?', ['11 %', '21 %', '27 %'], 1),
    mcq('t3-q3', 'Was hat sich in zehn Jahren verändert?', ['Mehr Menschen fahren Auto.', 'Doppelt so viele fahren Rad.', 'Weniger gehen zu Fuß.'], 1),
    phrases('t3-phr', 'Eine Grafik beschreiben', {
      'Thema': ['Die Grafik zeigt, wie …', 'Das Thema der Grafik ist …'],
      'Zahlen': ['Die meisten …', 'Mehr als die Hälfte / ein Drittel / ein Viertel …', 'Nur wenige …', '38 Prozent fahren …'],
      'Vergleich': ['Im Vergleich zu …', 'mehr / weniger als …', 'doppelt so viele wie …'],
    }),
    audio('t3-audio', 'Hören: Pendeln in D-A-CH', [
      ['moderatorin', 'Wie kommen Sie zur Arbeit? Wir haben in drei Ländern gefragt.'],
      ['urs', 'Ich wohne in Bern und arbeite in Zürich. Ich pendle jeden Tag mit dem Zug, eine Stunde. In der Schweiz sind die Züge sehr pünktlich. Ich lese oder arbeite unterwegs.'],
      ['resi', 'In Innsbruck fahre ich mit dem Rad. Im Winter nehme ich den Bus, weil es zu viel Schnee gibt. Ein Auto brauche ich nicht.'],
      ['jonas', 'Ich wohne auf dem Land bei Köln. Hier fährt der Bus nur zweimal pro Stunde. Ohne Auto geht es leider nicht. Jeden Morgen stehe ich im Stau.'],
    ], { task: 'Hör zu.', taskEn: 'Listen to three commuters in Switzerland, Austria and Germany.' }),
    match('t3-match', [['Urs', 'pendelt mit dem Zug'], ['Resi', 'fährt Rad oder Bus'], ['Jonas', 'fährt Auto und steht im Stau']], { task: 'Wer fährt wie?', taskEn: 'Who commutes how?' }),
  ]);

const wg = section('wg', 'kommunikation', 'Die Fuchsbau-WG', 'Folge 7: Die Leihräder', 'rose', 10,
  ['eine Geschichte hören', 'Wege im Kontext'], [
    text('wg-intro', 'In Leipzig gibt es neue Leihräder. Nele und Felix wollen sie testen. Sie verabreden sich am Café „Kranich“. Nele ist schon da. Felix nicht.', { kicker: 'Die Geschichte', en: 'Leipzig has new rental bikes. Nele and Felix want to try them and meet at the café. Nele is already there. Felix is not.' }),
    audio('wg-audio', 'Folge 7: Die Leihräder', [
      ['nele', 'Felix, wo bist du? Ich warte seit zwanzig Minuten!'],
      ['felix', 'Ich weiß nicht genau, wo ich bin. Ich bin über eine Brücke gefahren und dann den Kanal entlang.'],
      ['nele', 'Gut! Und bist du an der alten Fabrik vorbeigefahren?'],
      ['felix', 'Ich glaube, ich bin an drei Fabriken vorbeigefahren. Hier sieht alles gleich aus! Und mein Handy-Akku ist fast leer.'],
      ['nele', 'Was siehst du jetzt?'],
      ['felix', 'Einen Zoo. Und ein großes Stadion.'],
      ['nele', 'Felix! Du bist in die falsche Richtung gefahren. Das ist auf der anderen Seite der Stadt!'],
      ['felix', 'Oh. Weißt du, ob es hier eine Leihrad-Station gibt? Dann gebe ich das Rad zurück und nehme die Straßenbahn.'],
      ['nele', 'Ja, direkt am Zoo. Ich komme zu dir. Aber diesmal erkläre ich dir den Weg nicht. Ich hole dich ab!'],
      ['erzaehler', 'Später ruft Kenji aus Wien an.'],
      ['kenji', 'Und, wie waren die Leihräder?'],
      ['nele', 'Frag nicht. Felix hat eine Stadtrundfahrt gemacht.'],
    ], { task: 'Hör die Geschichte.', taskEn: 'Listen to the story.' }),
    mcq('wg-q1', 'Warum findet Felix das Café nicht?', ['Er ist in die falsche Richtung gefahren.', 'Das Rad ist kaputt.', 'Das Café ist geschlossen.'], 0),
    mcq('wg-q2', 'Was sieht Felix?', ['einen Park und eine Kirche', 'einen Zoo und ein Stadion', 'einen Bahnhof'], 1),
    mcq('wg-q3', 'Was macht Nele am Ende?', ['Sie erklärt den Weg noch einmal.', 'Sie holt Felix ab.', 'Sie fährt nach Hause.'], 1),
  ]);

const grammatik = section('grammatik', 'grammatik', 'Grammatik', 'Alles auf einen Blick', 'peach', 10,
  ['indirekte Fragen', 'Ortsangaben'], [
    grammar('g-1', 'Nebensätze: Verb am Ende', {
      head: ['Einleitung', 'Konjunktion / W-Wort', 'Mitte', 'Verb'],
      rows: [['Ich gehe zu Fuß,', '**weil**', 'es nicht weit', '**ist**.'], ['Ich glaube,', '**dass**', 'der Bus gleich', '**kommt**.'], ['Wissen Sie,', '**wann**', 'der Bus', '**kommt**?'], ['Ich weiß nicht,', '**ob**', 'der Bus heute', '**fährt**.']],
      en: 'weil, dass, ob and question words in indirect questions all send the verb to the end.',
    }),
    mcq('g-q1', 'Wissen Sie, wo ___?', ['ist der Bahnhof', 'der Bahnhof ist', 'der Bahnhof'], 1),
    mcq('g-q2', 'Ich weiß nicht, ___ er heute kommt.', ['dass', 'ob', 'wenn'], 1),
    mcq('g-q3', 'Gehen Sie ___ den Park.', ['durch', 'vorbei', 'gegenüber'], 0),
    mcq('g-q4', 'Fahren Sie an ___ Kirche vorbei.', ['die', 'der', 'den'], 1),
  ]);

const uebungen = section('uebungen', 'uebung', 'Übungen', 'Training', 'butter', 15,
  ['höflich fragen', 'Aussprache: schwierige Wörter'], [
    compose('u-comp', 'Du bist am Bahnhof und brauchst Informationen.', [
      ['Frag, wann der Zug fährt.', 'Ask when the train leaves.', ['Können', 'Sie mir sagen,', 'wann der Zug', 'fährt?']],
      ['Frag, ob du umsteigen musst.', 'Ask if you have to change trains.', ['Wissen', 'Sie,', 'ob ich', 'umsteigen muss?']],
      ['Frag, wo das Gleis ist.', 'Ask where the platform is.', ['Wissen', 'Sie auch,', 'wo Gleis 5', 'ist?']],
    ], { task: 'Bau die Fragen.', taskEn: 'Build the polite questions.' }),
    audio('u-aus', 'Aussprache: lange Wörter', [
      ['frauKlein', 'Lange Wörter sprichst du am besten von hinten nach vorne. Hör zu: Haltestelle. Stelle. Haltestelle.'],
      ['frauKlein', 'Verkehr. Mittel. Verkehrsmittel. Öffentliche Verkehrsmittel.'],
      ['frauKlein', 'Karte. Fahrkarte. Fahrkartenschalter.'],
      ['frauKlein', 'Der Akzent ist meistens auf dem ersten Wort: FAHRkartenschalter, HALTestelle.'],
    ], { task: 'Hör zu und sprich nach.', taskEn: 'Listen and repeat. Practice long words from the back to the front. The stress is usually on the first part.' }),
    match('u-match', [['die Haltestelle', 'halten + die Stelle'], ['der Fahrplan', 'fahren + der Plan'], ['das Leihrad', 'leihen + das Rad'], ['der Arbeitsweg', 'die Arbeit + der Weg']], { task: 'Aus welchen Wörtern besteht das Wort?', taskEn: 'Which words make up the compound?' }),
    order('u-order', ['Ich', 'weiß nicht,', 'ob', 'ich', 'umsteigen muss.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence.' }),
  ]);

const wortschatz = section('wortschatz', 'wortschatz', 'Wortschatz und Check', 'Das kann ich jetzt', 'mint', 8,
  ['Wörter wiederholen', 'den Stand einschätzen'], [
    cards('w-cards', [
      ['der Verkehr', 'Autos, Busse, Räder …', 'traffic'], ['pendeln', 'jeden Tag zur Arbeit fahren', 'to commute'], ['der Stau', 'Autos stehen still', 'traffic jam'],
      ['die Baustelle', 'hier wird gebaut', 'construction site'], ['der Fahrplan', 'Zeiten von Bus und Bahn', 'timetable'], ['durch', 'von einer Seite zur anderen', 'through'],
      ['über', 'auf die andere Seite', 'over, across'], ['entlang', 'neben etwas, immer weiter', 'along'], ['vorbei', 'neben etwas weiter', 'past'],
      ['gegenüber', 'auf der anderen Seite', 'opposite'], ['die Hälfte', '50 Prozent', 'half'], ['ob', 'Ja oder nein?', 'whether, if'],
    ]),
    phrases('w-x-phr', 'Höflich fragen', {
      'indirekte Fragen': ['Wissen Sie, wann der Zug aus Hamburg ankommt?', 'Können Sie mir sagen, wie lange wir nach München brauchen?', 'Ich möchte wissen, ob ich hier umsteigen muss.'],
      'den Weg beschreiben': ['Gehen Sie durch den Park.', 'Dann am Bahnhof vorbei.', 'Das Café ist gegenüber vom Kino.'],
    }),
    sort('w-x-sort', ['Vorteil', 'Nachteil'], [['Mit dem Rad ist man schnell.', 0], ['Im Auto steht man oft im Stau.', 1], ['Die S-Bahn ist praktisch.', 0], ['Bei Regen ist das Rad nicht schön.', 1], ['Im Zug kann man lesen.', 0], ['In der S-Bahn gibt es oft keinen Sitzplatz.', 1]],
      { task: 'Vorteil oder Nachteil?', taskEn: 'Advantage or disadvantage?' }),
    match('w-x-match', [['die Tankstelle', 'hier kauft man Benzin'], ['das Kennzeichen', 'die Nummer am Auto'], ['die Monatskarte', 'ein Ticket für 30 Tage'], ['umsteigen', 'in einen anderen Zug gehen'], ['landen', 'das Flugzeug kommt an'], ['bremsen', 'langsamer werden']],
      { task: 'Unterwegs', taskEn: 'On the road. Match.' }),
    gap('w-x-gap', ['Weißt du, {{ob}} der Bus heute fährt?', 'Ich frage, {{wann}} der Zug kommt.', 'Die Apotheke ist {{gegenüber}} vom Supermarkt.', 'Fahren Sie {{bis}} zur Ampel.'],
      { bank: ['ob', 'wann', 'gegenüber', 'bis'], task: 'Ergänze.', taskEn: 'Fill in: ob or a question word, and place words.' }),
    mcq('w-x-q1', 'Können Sie mir sagen, wo ___?', ['ist der Bahnhof', 'der Bahnhof ist', 'der Bahnhof'], 1, { task: 'Indirekte Frage', taskEn: 'Indirect question: the verb goes to the end.' }),
    order('w-x-order', ['Ich weiß nicht,', 'ob', 'man', 'hier', 'parken', 'darf.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence.' }),
    text('w-story-tip', 'Optional lesen: die Geschichte **Der falsche Zug**. Du findest sie unter Geschichten.', { kicker: 'Extra', en: 'Optional reading: “Der falsche Zug” (The Wrong Train), under Stories.' }),
    checklist('w-check', ['Ich kann mit indirekten Fragen höflich fragen.', 'Ich kann einen Weg beschreiben.', 'Ich kann Vor- und Nachteile von Verkehrsmitteln nennen.', 'Ich kann eine einfache Grafik beschreiben.']),
  ]);

export const a2k7: Chapter = {
  id: 'a2-k7', number: 7, title: 'Ganz schön mobil', theme: 'Verkehr, Weg zur Arbeit, Wegbeschreibungen, Grafiken',
  grammar: 'Indirekte Fragesätze mit W-Wort und ob. Ortsangaben mit Präpositionen.',
  sections: [einstieg, teil1, teil2, teil3, wg, grammatik, uebungen, wortschatz],
  games: ['a2k7-sprint', 'a2k7-memory', 'a2k7-satzbau', 'a2k7-artikel'],
  exam: [
    x(1, mcq('x1', 'Wissen Sie, wann der Zug ___?', ['kommt', 'kommt er', 'kommen'], 0)),
    x(1, mcq('x2', 'Ich weiß nicht, ___ der Laden heute offen ist.', ['ob', 'dass', 'wann ob'], 0)),
    x(1, mcq('x3', 'Gehen Sie ___ die Brücke.', ['über', 'vorbei', 'entlang'], 0)),
    x(3, gap('x4', ['Können Sie mir sagen, {{wo}} die Post ist?', 'Weißt du, {{ob}} es hier ein Café gibt?', 'Ich frage mich, {{wie}} viel das kostet.'], { task: 'Fragewort oder ob.' })),
    x(3, gap('x5', ['Gehen Sie {{durch}} den Park.', 'Fahren Sie die Straße {{entlang}}.', 'Gehen Sie am Rathaus {{vorbei}}.'], { task: 'Ortsangaben.' })),
    x(1, mcq('x6', 'Was ist das Problem auf der A9?', ['ein Unfall', 'eine Baustelle', 'Schnee'], 0),
      audio('x-st1', 'Hören: Verkehrsmeldung', [
        ['moderatorin', 'Und jetzt der Verkehr. Auf der A9 zwischen Leipzig und Halle gibt es nach einem Unfall acht Kilometer Stau. Bitte fahren Sie über die Landstraße. In der Innenstadt ist die Karl-Liebknecht-Straße wegen einer Baustelle bis Freitag gesperrt.'],
      ])),
    x(1, mcq('x7', 'Wie lange ist der Stau? (Hörtext oben)', ['acht Kilometer', 'achtzehn Kilometer', 'drei Kilometer'], 0)),
    x(1, mcq('x8', 'Was kostet ein Leihrad für eine Stunde?', ['1 Euro', '2 Euro', 'nichts'], 0),
      text('x-st2', '**FuchsRad: Leihräder in ganz Leipzig**\nSo geht’s: App laden, Rad entsperren, losfahren!\nPreis: die ersten 30 Minuten 50 Cent, jede weitere halbe Stunde 50 Cent.\nAbo: 10 € im Monat, die ersten 30 Minuten jeder Fahrt gratis.\nBitte das Rad nur an einer FuchsRad-Station zurückgeben.', { kicker: 'Lesen' })),
    x(1, mcq('x9', 'Wo darf man das Rad zurückgeben? (Text oben)', ['überall', 'nur an einer Station', 'nur am Bahnhof'], 1)),
    x(2, order('x10', ['Wissen Sie,', 'wo', 'die Haltestelle', 'ist?'], { task: 'Bau die Frage.' })),
    x(1, mcq('x11', 'Jeden Tag mit dem Zug zur Arbeit in eine andere Stadt fahren heißt …', ['pendeln', 'wandern', 'umziehen'], 0)),
    x(1, mcq('x12', '50 Prozent sind …', ['ein Viertel', 'die Hälfte', 'ein Drittel'], 1)),
  ],
};

export const gamesA2k7: GameDef[] = [
  {
    id: 'a2k7-sprint', engine: 'sprint', title: 'ob-oder-W-Sprint', blurb: 'Indirekte Fragen in 60 Sekunden!', skill: 'Indirekte Fragen', tone: 'mint', chapter: 7, emoji: '⚡',
    rules: 'Du siehst eine direkte Frage. Wie beginnt die indirekte Frage nach „Wissen Sie, …“?', label: 'Wissen Sie, …',
    items: [
      { q: 'Wann kommt der Bus?', a: 'wann', wrong: ['ob', 'dass'] }, { q: 'Fährt der Bus zum Zoo?', a: 'ob', wrong: ['wann', 'dass'] },
      { q: 'Wo ist die Post?', a: 'wo', wrong: ['ob', 'wohin'] }, { q: 'Muss ich umsteigen?', a: 'ob', wrong: ['wo', 'dass'] },
      { q: 'Wie lange dauert die Fahrt?', a: 'wie lange', wrong: ['ob', 'wann'] }, { q: 'Gibt es hier ein Café?', a: 'ob', wrong: ['wo', 'dass'] },
      { q: 'Wohin fährt die Bahn?', a: 'wohin', wrong: ['wo', 'ob'] }, { q: 'Ist das Museum heute offen?', a: 'ob', wrong: ['wann', 'dass'] },
      { q: 'Wie viel kostet das Ticket?', a: 'wie viel', wrong: ['ob', 'wie'] }, { q: 'Hat der Zug Verspätung?', a: 'ob', wrong: ['dass', 'wann'] },
      { q: 'Warum ist die Straße gesperrt?', a: 'warum', wrong: ['ob', 'weil'] }, { q: 'Kommt die Bahn pünktlich?', a: 'ob', wrong: ['wann', 'dass'] },
    ],
  },
  {
    id: 'a2k7-memory', engine: 'memory', title: 'Verkehrs-Memory', blurb: 'Verkehrsmittel und Bild: Finde die Paare.', skill: 'Verkehr', tone: 'lilac', chapter: 7, emoji: '🃏',
    rules: 'Dreh zwei Karten um. Ein Paar ist ein Wort und das passende Bild.', kinds: ['Wort', 'Bild'],
    pairs: [['die U-Bahn', '🚇'], ['der E-Roller', '🛴'], ['das Fahrrad', '🚲'], ['das Taxi', '🚕'], ['die Fähre', '⛴️'], ['das Flugzeug', '✈️'], ['der Stau', '🚗🚗🚗'], ['die Ampel', '🚦'], ['die Baustelle', '🚧'], ['die Brücke', '🌉']],
  },
  {
    id: 'a2k7-satzbau', engine: 'satzbau', title: 'Frage-Baukasten', blurb: 'Höfliche Fragen: Verb ans Ende!', skill: 'Indirekte Fragen', tone: 'sky', chapter: 7, emoji: '🧱',
    rules: 'Tippe die Wörter in der richtigen Reihenfolge an.',
    sentences: [
      { parts: ['Wissen Sie,', 'wann', 'der Bus', 'kommt?'], hint: 'W-Wort, Verb am Ende' },
      { parts: ['Ich weiß nicht,', 'ob', 'die Bahn', 'fährt.'], hint: 'ob, Verb am Ende' },
      { parts: ['Können Sie mir sagen,', 'wo', 'der Bus', 'abfährt?'], hint: 'trennbar: zusammen am Ende' },
      { parts: ['Gehen Sie', 'durch', 'den', 'Park.'], hint: 'durch + Akkusativ' },
      { parts: ['Fahren Sie', 'an der Kirche', 'vorbei.'], hint: 'an … vorbei' },
      { parts: ['Gehen Sie', 'den Fluss', 'entlang.'], hint: 'entlang steht hinten' },
      { parts: ['Die meisten', 'fahren', 'mit dem Auto', 'zur Arbeit.'], hint: 'Verb auf Position 2' },
      { parts: ['Weißt du,', 'ob', 'es', 'hier', 'Leihräder gibt?'], hint: 'ob, Verb am Ende' },
    ],
  },
  {
    id: 'a2k7-artikel', engine: 'regen', title: 'Artikel-Regen', blurb: 'der, die oder das? Verkehr.', skill: 'Artikel', tone: 'rose', chapter: 7, emoji: '☔',
    rules: 'Ein Nomen fällt herunter. Tippe auf den richtigen Artikel.', buckets: ['der', 'die', 'das'],
    words: artikel('der Verkehr, das Leihrad, die Brücke, der Stau, das Verkehrsmittel, die Baustelle, der Fahrplan, das Stadion, die Haltestelle, der Kanal, das Motorrad, die Richtung, der Unfall, das Prozent, die Grafik, der Weg, das Ticket, die Kreuzung'),
  },
];
