import type { Chapter, GameDef, GlossaryEntry } from './types';
import { artikel, audio, cards, checklist, compose, gap, grammar, match, mcq, order, overview, phrases, poll, section, sort, text, tip, x } from './helpers';

// Kapitel 3: theme Wohnen. Grammar: Wechselpräpositionen, lokale Präpositionen, Adjektivdeklination.

export const glossary3: Record<string, GlossaryEntry> = {
  Umzug: { de: 'Wenn man von einer Wohnung in eine andere zieht.', en: 'a move (to a new home)' },
  Mietvertrag: { de: 'Das Dokument, das Mieter und Vermieter unterschreiben.', en: 'rental contract, lease' },
  Kaution: { de: 'Geld, das der Mieter als Sicherheit zahlt und beim Auszug zurückbekommt.', en: 'security deposit' },
  Nebenkosten: { de: 'Kosten zusätzlich zur Miete: Wasser, Heizung, Müll.', en: 'utilities, additional costs' },
  Vermieter: { de: 'Die Person, der die Wohnung gehört und die sie vermietet.', en: 'landlord' },
  Wohngemeinschaft: { de: 'Mehrere Personen teilen sich eine Wohnung. Kurz: WG.', en: 'shared flat' },
  Krimskrams: { de: 'Viele kleine Dinge, die man eigentlich nicht braucht.', en: 'odds and ends, clutter' },
  aufräumen: { de: 'Dinge an ihren Platz legen, damit es ordentlich ist.', en: 'to tidy up' },
  ausmisten: { de: 'Dinge wegwerfen oder weggeben, die man nicht mehr braucht.', en: 'to declutter, to clear out' },
  Schublade: { de: 'Ein Kasten in einem Schrank oder Tisch, den man herausziehen kann.', en: 'drawer' },
  Regal: { de: 'Ein Möbelstück mit Brettern für Bücher oder andere Dinge.', en: 'shelf, shelving unit' },
  Gastgeber: { de: 'Die Person, die Gäste einlädt.', en: 'host' },
  üblich: { de: 'So, wie es die meisten Leute normalerweise machen.', en: 'customary, usual', ex: 'Bei uns ist es üblich, die Schuhe auszuziehen.' },
  Hausordnung: { de: 'Die Regeln für alle Bewohner eines Hauses.', en: 'house rules' },
  Ruhezeit: { de: 'Die Zeit, in der man im Haus keinen Lärm machen darf.', en: 'quiet hours' },
  lüften: { de: 'Das Fenster aufmachen, damit frische Luft hereinkommt.', en: 'to air out a room' },
  Hausschuhe: { de: 'Bequeme Schuhe, die man nur in der Wohnung trägt.', en: 'slippers' },
  winzig: { de: 'Sehr, sehr klein.', en: 'tiny' },
  Stauraum: { de: 'Platz, an dem man Dinge aufbewahren kann.', en: 'storage space' },
  gemütlich: { de: 'Angenehm und bequem, man fühlt sich wohl.', en: 'cozy' },
  verzichten: { de: 'Etwas freiwillig nicht haben oder nicht tun. Mit „auf“ + Akkusativ.', en: 'to do without', ex: 'Sie verzichtet auf ein Auto.' },
  Besichtigung: { de: 'Ein Termin, bei dem man eine Wohnung ansieht.', en: 'viewing (of a flat)' },
  Mangel: { de: 'Etwas, das in der Wohnung kaputt ist oder fehlt. Plural: Mängel.', en: 'defect' },
  Handwerker: { de: 'Eine Person, die mit den Händen arbeitet und Dinge repariert.', en: 'tradesperson, repairman' },
  renovieren: { de: 'Eine Wohnung wieder schön machen: streichen, reparieren.', en: 'to renovate' },
};

const einstieg = section('einstieg', 'einstieg', 'Einstieg', 'Neue Wohnung, neues Glück', 'butter', 10,
  ['das Kapitel kennenlernen', 'Wortschatz zum Thema Wohnen wiederholen'], [
    overview('e-over', 'Kapitel 3: Vier Wände',
      'In diesem Kapitel geht es ums **Wohnen**. Wie hält man Ordnung, wenn man zu viele Sachen hat? Was ist in deutschen, österreichischen und Schweizer Wohnungen üblich, wenn man zu Besuch kommt? Und wie lebt es sich auf 28 Quadratmetern? Du hörst einen Podcast über das Aufräumen, liest einen Magazintext über ein winziges Haus und übst zwei wichtige Gespräche: die Wohnungsbesichtigung und den Anruf beim Vermieter, wenn etwas kaputt ist.\n\nIn der Grammatik lernst du, wie man genau sagt, **wo** etwas ist und **wohin** man es stellt, und du wiederholst die Endungen der Adjektive.',
      'This chapter is about housing: keeping order, what is customary when visiting someone’s home, and living small. You practice a flat viewing and a call to the landlord. Grammar: two-way prepositions (wo? + dative, wohin? + accusative), other prepositions of place, and adjective endings.',
      ['sagen, wo etwas ist und wohin es kommt', 'über Regeln und Gewohnheiten beim Wohnen sprechen', 'bei einer Besichtigung Fragen stellen und einen Mangel melden', 'Adjektive vor Nomen richtig benutzen']),
    text('e-intro', 'Dana hat endlich eine Wohnung gefunden. Sie hat den [[Mietvertrag]] unterschrieben, die [[Kaution]] überwiesen und zwanzig Kartons gepackt. Am Samstag ist der [[Umzug]]. Kennst du die wichtigsten Wörter rund ums Wohnen?', { kicker: 'Zum Einstieg' }),
    match('e-match', [['der Mietvertrag', 'das Dokument zwischen Mieter und Vermieter'], ['die Kaution', 'Geld als Sicherheit für den Vermieter'], ['die Nebenkosten', 'Kosten für Wasser, Heizung und Müll'], ['die WG', 'mehrere Personen teilen eine Wohnung'], ['der Umzug', 'der Wechsel in eine neue Wohnung']],
      { task: 'Was bedeutet das? Verbinde.', taskEn: 'What does it mean? Match.' }),
    poll('e-poll', [['Stadt', 'Land'], ['WG', 'allein wohnen'], ['Altbau mit hohen Decken', 'Neubau mit Aufzug'], ['alles ordentlich', 'kreatives Chaos'], ['Balkon', 'Badewanne']],
      { task: 'Wie wohnst du am liebsten?', taskEn: 'How do you like to live? There is no wrong answer.' }),
    sort('e-sort', ['Küche', 'Bad', 'Wohnzimmer'], [['der Herd', 0], ['das Waschbecken', 1], ['das Sofa', 2], ['der Kühlschrank', 0], ['die Dusche', 1], ['das Bücherregal', 2], ['die Spülmaschine', 0], ['der Spiegel', 1], ['der Teppich', 2]],
      { task: 'In welches Zimmer gehört das?', taskEn: 'Which room does it belong in?' }),
  ]);

const modul1 = section('modul-1', 'modul', 'Modul 1', 'Ordnung ist das halbe Leben', 'mint', 25,
  ['einen Podcast verstehen', 'über Ordnungstipps sprechen', 'Grammatik: Wechselpräpositionen und lokale Präpositionen'], [
    audio('m1-audio', 'Hören: Podcast „Alltagsfragen“, Folge: Nie wieder Chaos', [
      ['ben', 'Hallo und willkommen bei „Alltagsfragen“. Bei mir liegt die Post auf dem Küchentisch, die Jacke hängt über dem Stuhl und die Schlüssel suche ich jeden Morgen. Deshalb ist heute Resi bei mir, sie ist Aufräumcoach in Innsbruck. Servus, Resi!'],
      ['resi', 'Griaß di, Ben! Des kenn i guat. Das Problem ist fast nie zu wenig Platz. Das Problem ist: Die Sachen haben kein Zuhause.'],
      ['ben', 'Kein Zuhause?'],
      ['resi', 'Genau. Jedes Ding braucht einen festen Platz. Die Schlüssel kommen in eine Schale neben der Tür. Die Post legst du in ein Fach im Regal und nicht auf den Tisch. Wenn du heimkommst, hängst du die Jacke sofort an den Haken.'],
      ['ben', 'Das klingt einfach. Aber ich habe viel zu viel Krimskrams.'],
      ['resi', 'Dann musst du ausmisten. Nimm dir jeden Tag nur eine Schublade vor, nicht die ganze Wohnung. Stell drei Kisten vor den Schrank: behalten, verschenken, wegwerfen.'],
      ['ben', 'Und wenn ich mich nicht entscheiden kann?'],
      ['resi', 'Dann kommt das Ding in eine vierte Kiste, und die stellst du in den Keller. Wenn du nach sechs Monaten nichts aus der Kiste gebraucht hast, gibst du sie weg, ohne hineinzuschauen.'],
      ['ben', 'Ohne hineinzuschauen. Das ist hart.'],
      ['resi', 'Aber es funktioniert. Und noch ein Tipp: zehn Minuten am Abend. Alles, was auf dem Boden oder auf dem Sofa liegt, geht zurück an seinen Platz.'],
    ], { task: 'Welche Tipps gibt Resi?', taskEn: 'What tips does Resi give? She speaks with a Tyrolean accent.',
      note: 'Tirolerisch: **Griaß di** = Hallo (Grüß dich). **Des kenn i guat** = Das kenne ich gut. **Servus** = Hallo oder Tschüss.' }),
    mcq('m1-q1', 'Was ist laut Resi meistens das Problem?', ['Die Wohnung ist zu klein.', 'Die Sachen haben keinen festen Platz.', 'Man hat zu wenig Zeit.'], 1, { task: 'Fragen zum Podcast', taskEn: 'Questions about the podcast.' }),
    mcq('m1-q2', 'Wie soll man ausmisten?', ['die ganze Wohnung an einem Tag', 'jeden Tag eine Schublade', 'einmal im Jahr im Frühling'], 1),
    mcq('m1-q3', 'Was passiert mit der vierten Kiste nach sechs Monaten?', ['Man sortiert sie noch einmal.', 'Man stellt sie ins Wohnzimmer.', 'Man gibt sie weg, ohne hineinzuschauen.'], 2),
    grammar('m1-gram', 'Wechselpräpositionen: Wo oder wohin?', {
      intro: 'Neun Präpositionen wechseln den Kasus: **an, auf, hinter, in, neben, über, unter, vor, zwischen**.',
      head: ['Frage', 'Kasus', 'Beispiel'],
      rows: [
        ['**Wohin?** Bewegung zu einem Ziel', 'Akkusativ', 'Du hängst die Jacke **an den** Haken. Stell die Kiste **in den** Keller.'],
        ['**Wo?** Position, keine Bewegung zum Ziel', 'Dativ', 'Die Jacke hängt **an dem (am)** Haken. Die Kiste steht **im** Keller.'],
      ],
      notes: ['Kurzformen: in dem = **im**, an dem = **am**, in das = **ins**, an das = **ans**.'],
      en: 'Nine prepositions take accusative for movement toward a place (wohin?) and dative for position (wo?). Ich lege das Buch auf den Tisch (accusative), das Buch liegt auf dem Tisch (dative).',
    }),
    grammar('m1-gram2', 'Verbenpaare: Bewegung und Position', {
      head: ['Wohin? + Akkusativ (regelmäßig)', 'Wo? + Dativ (unregelmäßig)'],
      rows: [
        ['**stellen**: Ich stelle die Vase auf den Tisch.', '**stehen**: Die Vase steht auf dem Tisch.'],
        ['**legen**: Ich lege die Post ins Regal.', '**liegen**: Die Post liegt im Regal.'],
        ['**setzen**: Ich setze das Kind auf den Stuhl.', '**sitzen**: Das Kind sitzt auf dem Stuhl.'],
        ['**hängen**: Ich hänge das Bild an die Wand.', '**hängen**: Das Bild hängt an der Wand.'],
        ['**stecken**: Ich stecke den Schlüssel in die Tasche.', '**stecken**: Der Schlüssel steckt in der Tasche.'],
      ],
      notes: ['Perfekt: hat gestellt, hat gelegt, hat gesetzt, hat gehängt. Aber: hat gestanden, hat gelegen, hat gesessen, hat gehangen.'],
      en: 'stellen/legen/setzen describe putting something somewhere (accusative). stehen/liegen/sitzen describe where it is (dative).',
    }),
    grammar('m1-gram3', 'Lokale Präpositionen mit festem Kasus', {
      head: ['Kasus', 'Präpositionen', 'Beispiel'],
      rows: [
        ['immer Dativ', 'aus, bei, zu, von, nach, gegenüber', 'Ich komme **aus der** Küche. Die Bank ist **gegenüber dem** Bahnhof.'],
        ['immer Akkusativ', 'durch, um, entlang, gegen', 'Wir gehen **durch den** Park. Die Stühle stehen **um den** Tisch.'],
      ],
    }),
    sort('m1-sort', ['Wohin? (Akkusativ)', 'Wo? (Dativ)'], [['Ich lege das Buch auf den Tisch.', 0], ['Das Buch liegt auf dem Tisch.', 1], ['Die Lampe hängt über dem Sofa.', 1], ['Stell die Schuhe vor die Tür.', 0], ['Der Schlüssel steckt im Schloss.', 1], ['Wir setzen uns auf den Balkon.', 0]],
      { task: 'Wohin oder wo?', taskEn: 'Movement toward a place or position?' }),
    gap('m1-gap', ['Die Schlüssel liegen in {{der}} Schale neben {{der}} Tür.', 'Häng die Jacke bitte an {{den}} Haken.', 'Ich stelle die Kiste in {{den}} Keller.', 'Die Kiste steht jetzt in {{dem|im}} Keller.', 'Leg die Post nicht auf {{den}} Tisch!', 'Der Teppich liegt unter {{dem}} Sofa.'],
      { task: 'Ergänze den Artikel.', taskEn: 'Fill in the article. Wohin? → accusative. Wo? → dative.' }),
    gap('m1-gap2', ['Ich {{stelle}} die Blumen auf den Balkon. (stellen/stehen)', 'Die Blumen {{stehen}} auf dem Balkon. (stellen/stehen)', 'Die Zeitung {{liegt}} auf dem Sofa. (legen/liegen)', 'Wohin hast du mein Handy {{gelegt}}? (legen/liegen)', 'Das Bild {{hängt}} über dem Bett. (hängen)'],
      { task: 'Welches Verb passt? Achte auf die Form.', taskEn: 'Which verb fits? Mind the form.' }),
    order('m1-order', ['Wenn du heimkommst,', 'hängst du', 'die Jacke', 'sofort', 'an den Haken.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence.', hint: 'Nach dem Nebensatz kommt zuerst das Verb.' }),
  ]);

const modul2 = section('modul-2', 'modul', 'Modul 2', 'Hereinspaziert!', 'sky', 20,
  ['über kulturelle Unterschiede beim Wohnen sprechen', 'Unsicherheiten ansprechen und klären'], [
    text('m2-text', `**Die Schuhfrage.** Karim ist zum ersten Mal bei seiner Kollegin Wiebke eingeladen. An der Tür bleibt er stehen: Im Flur stehen sechs Paar Schuhe in einer Reihe. Wiebke trägt dicke Socken. Soll er die Schuhe ausziehen? In vielen Wohnungen in Deutschland, Österreich und der Schweiz ist das [[üblich]], aber nicht in allen. Manche [[Gastgeber]] bieten sogar [[Hausschuhe]] für Gäste an.

**Die Uhrzeit.** Auf der Einladung steht „19 Uhr“. Karim klingelt um 19:02 Uhr und ist der Letzte. Bei privaten Einladungen zum Essen kommen die meisten Gäste pünktlich, höchstens fünf oder zehn Minuten später. Früher zu kommen ist dagegen unhöflich: Vielleicht steht die Gastgeberin noch unter der Dusche.

**Das Fenster.** Mitten im Winter macht Wiebke plötzlich alle Fenster weit auf. „Nur kurz [[lüften]]“, sagt sie. Nach fünf Minuten macht sie die Fenster wieder zu. Karim friert, aber er hat etwas gelernt: Frische Luft ist hier fast heilig.

**Die Stille.** Um 22 Uhr dreht Wiebke die Musik leiser. In der [[Hausordnung]] steht, dass ab dann [[Ruhezeit]] ist. Auch sonntags und in der Mittagszeit soll man in vielen Häusern nicht bohren oder Staub saugen. Nicht alle halten sich daran, aber die meisten Nachbarn wissen genau, was erlaubt ist.`,
      { kicker: 'Lesen', title: 'Zu Besuch: vier kleine Überraschungen', task: 'Lies die vier Situationen. Was ist anders als bei dir?', taskEn: 'Read the four situations. What is different from where you live?' }),
    mcq('m2-q1', 'Was sollte Karim tun, wenn er unsicher ist, ob er die Schuhe ausziehen soll?', ['einfach hereingehen', 'nachfragen', 'wieder nach Hause gehen'], 1, { task: 'Hast du den Text verstanden?', taskEn: 'Check your understanding.' }),
    mcq('m2-q2', 'Was gilt bei einer privaten Einladung zum Essen als unhöflich?', ['fünf Minuten zu spät kommen', 'pünktlich kommen', 'zu früh kommen'], 2),
    mcq('m2-q3', 'Was bedeutet „Ruhezeit“?', ['In dieser Zeit soll man keinen Lärm machen.', 'In dieser Zeit sind alle Geschäfte geschlossen.', 'In dieser Zeit muss man schlafen.'], 0),
    tip('m2-tip', 'Strategie: über Unterschiede sprechen', 'Wenn dir etwas fremd ist, frag freundlich nach und beschreib, was du kennst. Vermeide Bewertungen wie „komisch“ oder „falsch“. Sag lieber: **„Das ist neu für mich“** oder **„Bei uns macht man das anders“**.'),
    phrases('m2-phr', 'Unsicherheiten ansprechen und klären', {
      'nachfragen': ['Soll ich die Schuhe ausziehen?', 'Ist es in Ordnung, wenn ich …?', 'Ich bin nicht sicher, ob man hier …', 'Wie ist das bei euch: …?'],
      'erklären': ['Bei uns ist es üblich, … zu …', 'Das ist neu für mich.', 'In meiner Familie macht man das so: …'],
      'reagieren': ['Kein Problem, mach es dir bequem.', 'Wie du möchtest.', 'Das ist bei uns ganz normal.'],
    }),
    gap('m2-gap', ['{{Soll}} ich die Schuhe ausziehen?', 'Ist es in {{Ordnung}}, wenn ich das Fenster zumache?', 'Bei uns ist es {{üblich}}, etwas später zu kommen.', 'Ich bin nicht {{sicher}}, ob man hier klingeln muss.', 'Das ist {{neu}} für mich.'],
      { bank: ['üblich', 'Ordnung', 'sicher', 'Soll', 'neu'], task: 'Ergänze die Redemittel.', taskEn: 'Complete the phrases.' }),
    sort('m2-sort', ['Das ist höflich', 'Das ist eher unhöflich'], [['pünktlich zum Essen kommen', 0], ['eine halbe Stunde zu früh klingeln', 1], ['nach den Schuhen fragen', 0], ['nach 22 Uhr laut Musik hören', 1], ['ein kleines Geschenk mitbringen', 0], ['am Sonntagmittag bohren', 1]],
      { task: 'Höflich oder nicht?', taskEn: 'Polite or not?' }),
    compose('m2-comp', 'Du bist bei neuen Bekannten eingeladen und erzählst, wie Besuche in deinem Land sind.', [
      ['Frag nach den Schuhen.', 'Ask about your shoes.', ['Soll ich', 'die Schuhe', 'ausziehen?']],
      ['Erklär, wie es bei euch ist.', 'Explain how it is where you come from.', ['Bei uns', 'ist es üblich,', 'die Schuhe', 'im Haus', 'auszuziehen.']],
      ['Sprich über die Uhrzeit.', 'Talk about timing.', ['Zu einer Einladung', 'kommen die Gäste', 'bei uns', 'oft etwas später.']],
      ['Sag, was neu für dich ist.', 'Say what is new to you.', ['Dass man', 'im Winter', 'die Fenster öffnet,', 'ist neu', 'für mich.']],
    ], { task: 'Bau einen kleinen Dialogbeitrag.', taskEn: 'Build what you would say.' }),
  ]);

const modul3 = section('modul-3', 'modul', 'Modul 3', 'Großes Glück auf kleinem Raum', 'lilac', 25,
  ['einen Magazintext verstehen', 'Informationen zusammenfassen', 'Grammatik: Adjektivdeklination'], [
    text('m3-text', `Von außen sieht es aus wie ein hübsches Gartenhaus aus hellem Holz. Innen ist es eine komplette Wohnung: Auf 28 Quadratmetern gibt es eine kleine Küche, ein [[winzig|winziges]] Bad, einen Wohnraum mit großem Fenster und, über eine schmale Treppe erreichbar, ein Bett direkt unter dem Dach. Hier wohnt Malte Brinkmann, 41, mit seiner neunjährigen Tochter.

Vor drei Jahren lebten die beiden noch in einer teuren Vierzimmerwohnung am Stadtrand von Hannover. „Ich habe gearbeitet, um die hohe Miete zu bezahlen, und hatte keine Zeit für die Wohnung, für die ich gearbeitet habe“, sagt er. Dann las er einen kurzen Artikel über Minihäuser und begann zu rechnen.

Heute zahlt er nur noch ein Drittel der früheren Kosten. Dafür mussten beide auf vieles [[verzichten]]. Aus einer riesigen Bibliothek wurden vierzig Lieblingsbücher. Der alte Esstisch blieb bei Freunden. Jedes Möbelstück hat jetzt zwei Aufgaben: Unter der Treppe ist [[Stauraum]], das Sofa wird nachts zum Gästebett, und der Tisch lässt sich an die Wand klappen.

Fehlt ihnen nichts? „An regnerischen Sonntagen wird es eng“, gibt Malte zu. „Aber meine Tochter sagt, es ist das [[gemütlich|gemütlichste]] Zuhause, das wir je hatten.“ Und er selbst arbeitet inzwischen nur noch vier Tage pro Woche.`,
      { kicker: 'Lesen', title: 'Magazin: 28 Quadratmeter Freiheit', task: 'Lies den Text. Warum lebt Malte so?', taskEn: 'Read the article. Why does Malte live this way? Notice the adjectives before nouns.' }),
    mcq('m3-q1', 'Warum ist Malte in das kleine Haus gezogen?', ['Er wollte näher an der Stadt wohnen.', 'Er arbeitete nur noch für die hohe Miete.', 'Seine Tochter wollte einen Garten.'], 1, { task: 'Welche Antwort passt?', taskEn: 'Choose the correct answer.' }),
    mcq('m3-q2', 'Was bedeutet „Jedes Möbelstück hat zwei Aufgaben“?', ['Jedes Möbelstück wird doppelt gekauft.', 'Die Möbel sind sehr teuer.', 'Man kann jedes Möbelstück für zwei Dinge benutzen.'], 2),
    mcq('m3-q3', 'Was ist ein Nachteil des kleinen Hauses?', ['An Regentagen ist wenig Platz.', 'Die Kosten sind höher.', 'Es gibt keine Küche.'], 0),
    mcq('m3-q4', 'Was hat sich für Malte bei der Arbeit geändert?', ['Er arbeitet jetzt nachts.', 'Er arbeitet einen Tag weniger pro Woche.', 'Er hat den Beruf gewechselt.'], 1),
    grammar('m3-gram', 'Adjektivdeklination', {
      intro: 'Vor einem Nomen bekommt das Adjektiv eine Endung. Sie hängt vom Artikelwort, vom Genus und vom Kasus ab. Die gute Nachricht: Meistens ist es **-en**.',
      head: ['', 'maskulin', 'feminin', 'neutral', 'Plural'],
      rows: [
        ['**Nom.** der/ein', 'der klein**e** Tisch · ein klein**er** Tisch', 'die klein**e** Küche · eine klein**e** Küche', 'das klein**e** Bad · ein klein**es** Bad', 'die klein**en** Räume · klein**e** Räume'],
        ['**Akk.**', 'den klein**en** · einen klein**en**', 'die klein**e** · eine klein**e**', 'das klein**e** · ein klein**es**', 'die klein**en** · klein**e**'],
        ['**Dat.**', 'dem klein**en** · einem klein**en**', 'der klein**en** · einer klein**en**', 'dem klein**en** · einem klein**en**', 'den klein**en** · klein**en** (Räumen)'],
      ],
      notes: [
        'Wie **ein**: kein, mein, dein, sein, ihr, unser. Im Plural aber immer -en: **meine kleinen Räume**.',
        'Ohne Artikel zeigt das Adjektiv den Kasus: **großer** Raum, mit **großem** Fenster, aus **hellem** Holz.',
      ],
      en: 'Adjectives before a noun take an ending. After der/die/das: -e in the nominative singular (and feminine/neuter accusative), otherwise -en. After ein/kein/mein the adjective shows the gender: ein kleiner Tisch, ein kleines Bad. Dative is always -en with an article.',
    }),
    gap('m3-gap', ['Das ist ein schön{{es}} Haus.', 'Wir wohnen in einer klein{{en}} Wohnung.', 'Ich suche einen neu{{en}} Schreibtisch.', 'Der alt{{e}} Esstisch steht jetzt bei Freunden.', 'Das Haus hat ein Fenster mit groß{{em}} Balkon.', 'Meine neu{{en}} Nachbarn sind sehr nett.'],
      { task: 'Ergänze die Endung.', taskEn: 'Fill in the adjective ending.' }),
    gap('m3-gap2', ['Sie leben in einem winzig{{en}} Haus aus hell{{em}} Holz.', 'Die hoh{{e}} Miete war das größt{{e}} Problem.', 'Über eine schmal{{e}} Treppe kommt man zum Bett.', 'An regnerisch{{en}} Sonntagen wird es eng.'],
      { task: 'Noch einmal, jetzt mit zwei Lücken.', taskEn: 'Once more, now with two gaps in some lines.' }),
    order('m3-order', ['Malte wohnt', 'mit seiner', 'neunjährigen Tochter', 'in einem', 'kleinen Haus.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence.' }),
    compose('m3-comp', 'Fass den Magazintext für eine Freundin zusammen, die ihn nicht gelesen hat.', [
      ['Nenne Thema und Person.', 'Name the topic and the person.', ['In dem Text', 'geht es um einen Mann,', 'der in einem', 'winzigen Haus', 'lebt.']],
      ['Nenne den Grund.', 'Give the reason.', ['Früher', 'musste er', 'für eine', 'teure Wohnung', 'viel arbeiten.']],
      ['Nenne den Vorteil.', 'Name the advantage.', ['Jetzt', 'zahlt er', 'nur noch', 'ein Drittel', 'der Kosten.']],
      ['Nenne den Nachteil.', 'Name the downside.', ['Allerdings', 'haben die beiden', 'an Regentagen', 'wenig Platz.']],
    ], { task: 'Bau eine kurze Zusammenfassung.', taskEn: 'Build a short summary.' }),
  ]);

const kommunikation = section('kommunikation', 'kommunikation', 'Alltag und Beruf', 'Ist die Wohnung noch frei?', 'rose', 20,
  ['bei einer Wohnungsbesichtigung Informationen erfragen', 'mit dem Vermieter sprechen', 'einen Mangel melden'], [
    text('k-intro', 'Zwei Gespräche mit einem [[Vermieter]]: Bei der [[Besichtigung]] willst du möglichst viel erfahren. Und wenn später etwas kaputtgeht, musst du den [[Mangel]] melden, damit ein [[Handwerker]] kommt.', { kicker: 'Zum Einstieg' }),
    audio('k-a1', 'Gespräch 1: Die Besichtigung (Dresden)', [
      ['herrLehmann', 'Guten Tag, Lehmann. Sie kommen wegen der Wohnung, nu? Kommen Sie rein.'],
      ['priya', 'Guten Tag, Nair. Vielen Dank, dass ich die Wohnung ansehen darf.'],
      ['herrLehmann', 'Also, das ist das Wohnzimmer, schön hell, Fenster nach Süden. Daneben ist die Küche, die Einbauküche bleibt drin.'],
      ['priya', 'Sehr schön. Darf ich fragen, wie hoch die Nebenkosten sind?'],
      ['herrLehmann', 'Hundertachtzig Euro im Monat, da ist die Heizung schon dabei. Die Kaltmiete beträgt sechshundertzwanzig.'],
      ['priya', 'Also achthundert warm. Und wie hoch ist die Kaution?'],
      ['herrLehmann', 'Zwei Kaltmieten. Die kriegen Sie natürlich zurück, wenn Sie ausziehen und alles in Ordnung ist.'],
      ['priya', 'Verstehe. Ich würde gern wissen, ob Haustiere erlaubt sind. Ich habe eine Katze.'],
      ['herrLehmann', 'Eine Katze ist keen Problem. Nur Hunde möchte ich nicht im Haus.'],
      ['priya', 'Wunderbar. Ab wann wäre die Wohnung denn frei?'],
      ['herrLehmann', 'Ab dem ersten Juni. Wenn Sie Interesse haben, schicken Sie mir bis Freitag Ihre Unterlagen.'],
    ], { task: 'Was erfährt Priya über die Wohnung?', taskEn: 'What does Priya find out about the flat? Herr Lehmann speaks with a Saxon accent.',
      note: 'Sächsisch: **nu** = ja, nicht wahr. **keen** = kein. **Kaltmiete** = Miete ohne Nebenkosten. **Warmmiete** = Miete mit Nebenkosten.' }),
    mcq('k-q1', 'Wie viel kostet die Wohnung pro Monat mit Nebenkosten?', ['620 Euro', '800 Euro', '980 Euro'], 1, { why: '620 Euro Kaltmiete + 180 Euro Nebenkosten = 800 Euro warm.' }),
    mcq('k-q2', 'Wie hoch ist die Kaution?', ['620 Euro', '1 240 Euro', '1 600 Euro'], 1, { why: 'Zwei Kaltmieten: 2 × 620 Euro.' }),
    mcq('k-q3', 'Welche Tiere sind erlaubt?', ['Katzen, aber keine Hunde', 'gar keine Tiere', 'Hunde, aber keine Katzen'], 0),
    audio('k-a2', 'Gespräch 2: Die Heizung ist kalt (Köln und Berlin)', [
      ['atze', 'Hausverwaltung Krawczyk, wat jibt’s?'],
      ['elif', 'Guten Morgen, hier ist Elif Demir aus der Lindenstraße 14, dritter Stock. Ich rufe an, weil meine Heizung seit gestern Abend nicht mehr funktioniert.'],
      ['atze', 'Oh. Janz kalt oder nur lauwarm?'],
      ['elif', 'Ganz kalt, in allen Zimmern. Und das warme Wasser geht auch nicht.'],
      ['atze', 'Dit is natürlich nich jut bei dem Wetter. Ick schick Ihnen ’n Handwerker vorbei. Sind Sie heute Nachmittag zu Hause?'],
      ['elif', 'Ab fünfzehn Uhr, ja. Könnte er vielleicht anrufen, bevor er kommt?'],
      ['atze', 'Mach ick. Jeben Sie mir mal Ihre Nummer.'],
      ['elif', 'Null eins sieben eins, fünf fünf fünf, null eins vier zwei.'],
      ['atze', 'Allet klar. Der Kollege meldet sich zwischen drei und fünf.'],
      ['elif', 'Vielen Dank, dass das so schnell geht. Tschö!'],
    ], { task: 'Welches Problem hat Elif?', taskEn: 'What is Elif’s problem? Atze speaks Berlin dialect, Elif says goodbye the Cologne way.',
      note: 'Berlinerisch: **wat jibt’s** = was gibt es. **janz** = ganz. **jut** = gut. **ick** = ich. **dit** = das. Rheinisch: **Tschö** = Tschüss.' }),
    mcq('k-q4', 'Was funktioniert bei Elif nicht?', ['nur die Heizung im Bad', 'die Heizung und das warme Wasser', 'das Licht im Flur'], 1),
    mcq('k-q5', 'Wann kommt der Handwerker?', ['morgen Vormittag', 'heute zwischen 15 und 17 Uhr', 'heute um 12 Uhr'], 1),
    phrases('k-phr', 'Redemittel: mit dem Vermieter sprechen', {
      'bei der Besichtigung': ['Darf ich fragen, wie hoch die Nebenkosten sind?', 'Wie hoch ist die Kaution?', 'Ab wann wäre die Wohnung frei?', 'Ich würde gern wissen, ob Haustiere erlaubt sind.', 'Bleibt die Küche in der Wohnung?'],
      'einen Mangel melden': ['Ich rufe an, weil … nicht mehr funktioniert.', 'Seit gestern ist … kaputt.', 'Könnten Sie bitte einen Handwerker schicken?', 'Wann könnte jemand vorbeikommen?'],
    }),
    gap('k-gap', ['Ich rufe an, {{weil}} meine Heizung nicht funktioniert.', 'Darf ich fragen, wie {{hoch}} die Kaution ist?', 'Ab {{wann}} wäre die Wohnung frei?', 'Könnten Sie bitte einen Handwerker {{schicken}}?', 'Sind Haustiere {{erlaubt}}?'],
      { bank: ['schicken', 'weil', 'erlaubt', 'hoch', 'wann'], task: 'Ergänze.', taskEn: 'Complete the sentences.' }),
    sort('k-sort', ['Das sagt die Mieterin', 'Das sagt der Vermieter'], [['Ich würde die Wohnung gern ansehen.', 0], ['Die Kaution beträgt zwei Kaltmieten.', 1], ['Seit gestern tropft der Wasserhahn.', 0], ['Schicken Sie mir bitte Ihre Unterlagen.', 1], ['Ab wann könnte ich einziehen?', 0], ['Ich schicke Ihnen einen Handwerker.', 1]],
      { task: 'Wer sagt das?', taskEn: 'Who says it?' }),
    compose('k-comp', 'In deiner Wohnung ist seit drei Tagen das Licht im Bad kaputt. Schreib eine Nachricht an die Hausverwaltung.', [
      ['Stell dich vor.', 'Introduce yourself.', ['Guten Tag,', 'ich wohne', 'in der Lindenstraße 14', 'im dritten Stock.']],
      ['Beschreib das Problem.', 'Describe the problem.', ['Seit drei Tagen', 'funktioniert', 'das Licht', 'im Bad', 'nicht mehr.']],
      ['Bitte um Hilfe.', 'Ask for help.', ['Könnten Sie', 'bitte', 'einen Handwerker', 'schicken?']],
      ['Sag, wann du erreichbar bist.', 'Say when you are available.', ['Ich bin', 'jeden Tag', 'ab 16 Uhr', 'zu Hause.']],
    ], { task: 'Bau eine Mängelmeldung.', taskEn: 'Build a message reporting a defect.' }),
  ]);

const grammatik = section('grammatik', 'grammatik', 'Grammatik im Blick', 'Alles auf einen Blick', 'peach', 12,
  ['Wechselpräpositionen wiederholen', 'Adjektivdeklination wiederholen'], [
    grammar('g-1', 'Ortsangaben: Wechselpräpositionen', {
      head: ['an, auf, hinter, in, neben, über, unter, vor, zwischen', 'Beispiel'],
      rows: [['Wohin? + Akkusativ', 'Ich stelle das Fahrrad **in den** Keller.'], ['Wo? + Dativ', 'Das Fahrrad steht **im** Keller.']],
      notes: ['Immer Dativ: aus, bei, zu, von, nach, gegenüber. Immer Akkusativ: durch, um, entlang, gegen.'],
    }),
    grammar('g-2', 'Adjektivendungen: die Kurzregel', {
      head: ['Situation', 'Endung', 'Beispiel'],
      rows: [
        ['nach der/die/das im Nominativ Singular', '-e', 'der neu**e** Schrank, die neu**e** Lampe, das neu**e** Sofa'],
        ['nach ein/kein/mein im Nominativ', '-er, -e, -es', 'ein neu**er** Schrank, eine neu**e** Lampe, ein neu**es** Sofa'],
        ['Akkusativ maskulin', '-en', 'den neu**en** Schrank, einen neu**en** Schrank'],
        ['Dativ und Plural mit Artikel', '-en', 'mit dem neu**en** Schrank, die neu**en** Möbel'],
        ['ohne Artikel', 'wie der Artikel', 'kalt**es** Wasser, mit kalt**em** Wasser, neu**e** Möbel'],
      ],
      en: 'Short rule: -e after der/die/das in the nominative singular. After ein, the adjective carries the gender ending. Masculine accusative, all datives and all plurals with an article: -en.',
    }),
    gap('g-gap', ['Wir sitzen auf {{dem}} Balkon.', 'Komm, wir setzen uns auf {{den}} Balkon.', 'Das Bild hängt an {{der}} Wand.', 'Ich hänge das Bild an {{die}} Wand.', 'Er kommt gerade aus {{der}} Küche.'],
      { task: 'Akkusativ oder Dativ? Ergänze den Artikel.', taskEn: 'Accusative or dative? Fill in the article.' }),
    mcq('g-q1', 'Welcher Satz ist richtig?', ['Ich habe einen neuen Tisch gekauft.', 'Ich habe einen neuer Tisch gekauft.', 'Ich habe einen neue Tisch gekauft.'], 0, { task: 'Wähle den richtigen Satz.', taskEn: 'Choose the correct sentence.' }),
    mcq('g-q2', '„Wohin hast du die Schlüssel ___?“ „Sie ___ auf dem Tisch.“', ['gelegen … legen', 'gelegt … liegen', 'gelegt … legen'], 1),
  ]);

const uebungen = section('uebungen', 'uebung', 'Übungen', 'Training: Umziehen und Einrichten', 'butter', 20,
  ['Wortschatz zum Thema Umziehen und Wohnen festigen', 'Kommas setzen', 'Aussprache: Sprechpausen'], [
    gap('u-gap1', ['Vor dem Umzug müssen wir zwanzig Kartons {{packen}}.', 'Die Wände sind grau, wir müssen sie neu {{streichen}}.', 'Ich möchte das Wohnzimmer ganz modern {{einrichten}}.', 'Im Keller ist zu viel Krimskrams, ich muss endlich {{ausmisten}}.', 'Kannst du mir helfen, das Sofa nach oben zu {{tragen}}?', 'Vergiss nicht, den Mietvertrag zu {{unterschreiben}}.'],
      { bank: ['packen', 'streichen', 'einrichten', 'ausmisten', 'tragen', 'unterschreiben'], task: 'Welches Verb passt?', taskEn: 'Which verb fits?' }),
    match('u-match', [['hell', 'dunkel'], ['ordentlich', 'chaotisch'], ['ruhig', 'laut'], ['geräumig', 'eng'], ['möbliert', 'leer'], ['günstig', 'teuer']],
      { task: 'Finde das Gegenteil.', taskEn: 'Find the opposite.' }),
    text('u-anzeige', '**3-Zi.-Whg., 78 m², 2. OG, Altbau, EBK, Blk., KM 890 € + NK 210 €, KT 2 MM, frei ab 1.9.**', { kicker: 'Lesen', title: 'Eine Wohnungsanzeige', task: 'Kannst du die Abkürzungen lesen?', taskEn: 'Can you read the abbreviations in this flat ad?' }),
    match('u-match2', [['Zi.', 'Zimmer'], ['EBK', 'Einbauküche'], ['Blk.', 'Balkon'], ['KM', 'Kaltmiete'], ['NK', 'Nebenkosten'], ['KT 2 MM', 'Kaution: zwei Monatsmieten'], ['2. OG', 'zweites Obergeschoss']],
      { task: 'Was bedeuten die Abkürzungen?', taskEn: 'What do the abbreviations mean?' }),
    mcq('u-q0', 'Wie hoch ist die Warmmiete der Wohnung aus der Anzeige?', ['890 Euro', '1 100 Euro', '1 780 Euro'], 1, { why: '890 Euro Kaltmiete + 210 Euro Nebenkosten.' }),
    grammar('u-gram', 'Richtig schreiben: das Komma', {
      head: ['Ein Komma steht …', 'Beispiel'],
      rows: [
        ['vor Nebensätzen (weil, dass, wenn, ob, obwohl …)', 'Ich rufe an**,** weil die Heizung kalt ist.'],
        ['vor und nach einem Relativsatz', 'Die Wohnung**,** die wir gesehen haben**,** ist sehr hell.'],
        ['bei Aufzählungen ohne „und“', 'Wir brauchen ein Bett**,** einen Schrank und zwei Stühle.'],
        ['vor aber, sondern, doch', 'Die Wohnung ist klein**,** aber gemütlich.'],
      ],
      notes: ['Vor **und** und **oder** steht in einer Aufzählung kein Komma.'],
      en: 'Commas go before subordinate clauses (weil, dass, wenn …), around relative clauses, between list items without "und", and before aber/sondern.',
    }),
    mcq('u-q1', 'Wo ist das Komma richtig?', ['Ich nehme die Wohnung weil, sie hell ist.', 'Ich nehme die Wohnung, weil sie hell ist.', 'Ich nehme, die Wohnung weil sie hell ist.'], 1),
    mcq('u-q2', 'Wo ist das Komma richtig?', ['Wir kaufen einen Tisch, vier Stühle und eine Lampe.', 'Wir kaufen einen Tisch, vier Stühle, und eine Lampe.', 'Wir kaufen, einen Tisch vier Stühle und eine Lampe.'], 0),
    audio('u-aus', 'Aussprache: Sprechpausen', [
      ['erzaehler', 'Lange Sätze spricht man in Gruppen. Zwischen den Gruppen macht man eine kleine Pause. Hör zu.'],
      ['erzaehler', 'Die Wohnung ist klein. Aber sie ist hell. Und sie hat einen Balkon.'],
      ['jule', 'Wenn du heimkommst, hängst du die Jacke an den Haken, und die Schlüssel legst du in die Schale.'],
      ['jule', 'Ich rufe an, weil meine Heizung seit gestern Abend nicht mehr funktioniert.'],
    ], { task: 'Hör zu und sprich nach. Wo sind die Pausen?', taskEn: 'Listen and repeat. Where are the pauses? Usually where the commas are.' }),
    mcq('u-q3', 'Wo macht man beim Sprechen meistens eine kleine Pause?', ['nach jedem Wort', 'dort, wo ein Komma oder ein Punkt steht', 'nur am Ende des Textes'], 1),
  ]);

const wortschatz = section('wortschatz', 'wortschatz', 'Wortschatz und Check', 'Das kann ich jetzt', 'mint', 10,
  ['die wichtigsten Wörter wiederholen', 'den eigenen Stand einschätzen'], [
    cards('w-cards', [
      ['der Mietvertrag', 'das Dokument zwischen Mieter und Vermieter', 'lease'], ['die Kaution', 'Geld als Sicherheit', 'deposit'], ['die Nebenkosten', 'Kosten für Wasser, Heizung, Müll', 'utilities'],
      ['die Besichtigung', 'ein Termin, um eine Wohnung anzusehen', 'viewing'], ['der Mangel', 'etwas ist kaputt oder fehlt', 'defect'], ['aufräumen', 'Dinge an ihren Platz legen', 'to tidy up'],
      ['ausmisten', 'Unnötiges weggeben', 'to declutter'], ['einrichten', 'Möbel in eine Wohnung stellen', 'to furnish'], ['lüften', 'das Fenster öffnen für frische Luft', 'to air out'],
      ['die Ruhezeit', 'Zeit ohne Lärm im Haus', 'quiet hours'], ['gemütlich', 'angenehm, man fühlt sich wohl', 'cozy'], ['auf etwas verzichten', 'etwas freiwillig nicht haben', 'to do without'],
    ]),
    checklist('w-check', ['Ich kann einen Podcast mit Alltagstipps verstehen.', 'Ich kann sagen, wo etwas ist und wohin ich es stelle oder lege.', 'Ich kann nachfragen, wenn ich bei einem Besuch unsicher bin.', 'Ich kann einen Magazintext zusammenfassen.', 'Ich kann Adjektive vor Nomen mit der richtigen Endung benutzen.', 'Ich kann bei einer Besichtigung nach Miete, Kaution und Nebenkosten fragen.', 'Ich kann dem Vermieter einen Mangel melden.']),
    mcq('w-q1', '„Die Miete ohne Nebenkosten heißt ___.“', ['Warmmiete', 'Kaltmiete', 'Kaution'], 1, { task: 'Letzter Check vor der Prüfung', taskEn: 'Last check before the exam.' }),
    mcq('w-q2', '„Ich stelle die Vase auf ___ Tisch. Jetzt steht sie auf ___ Tisch.“', ['den … dem', 'dem … den', 'den … den'], 0),
  ]);

export const kapitel3: Chapter = {
  id: 'kapitel-3', number: 3, title: 'Vier Wände', theme: 'Wohnen, Umziehen, Nachbarn',
  grammar: 'Wechselpräpositionen und lokale Präpositionen. Adjektivdeklination.',
  sections: [einstieg, modul1, modul2, modul3, kommunikation, grammatik, uebungen, wortschatz],
  games: ['k3-sprint', 'k3-memory', 'k3-satzbau', 'k3-artikel'],
  exam: [
    x(1, mcq('x1', '„Ich hänge den Mantel an ___ Haken.“', ['dem', 'den', 'der'], 1)),
    x(1, mcq('x2', '„Die Kinder spielen in ___ Garten.“', ['den', 'der', 'dem'], 2)),
    x(1, mcq('x3', '„Die Katze ___ auf dem Sofa.“', ['liegt', 'legt', 'stellt'], 0)),
    x(4, gap('x4', ['Stell die Flaschen bitte in {{den}} Kühlschrank.', 'Die Flaschen stehen schon in {{dem|im}} Kühlschrank.', 'Wir gehen durch {{den}} Park.', 'Die Apotheke ist gegenüber {{dem}} Bahnhof.'], { task: 'Ergänze den Artikel.' })),
    x(4, gap('x5', ['Wir haben eine hell{{e}} Wohnung gefunden.', 'Sie hat einen groß{{en}} Balkon.', 'Das alt{{e}} Sofa bleibt hier.', 'Ich wohne mit zwei nett{{en}} Leuten zusammen.'], { task: 'Ergänze die Adjektivendung.' })),
    x(1, mcq('x6', 'Was vermisst Johanna am meisten?', ['ihren Garten', 'die Ruhe', 'ihre alte Küche'], 1),
      text('x-st1', 'Johanna ist vor einem halben Jahr vom Dorf in die Großstadt gezogen. Ihre neue Wohnung liegt im vierten Stock eines alten Hauses, direkt über einer Bäckerei. „Morgens riecht es im ganzen Treppenhaus nach frischem Brot, das liebe ich“, erzählt sie. Auch dass sie alles zu Fuß erreichen kann, gefällt ihr. Nur an eines hat sie sich noch nicht gewöhnt: „Auf dem Dorf war es nachts völlig still. Hier fährt bis ein Uhr die Straßenbahn unter meinem Fenster vorbei. Die Ruhe fehlt mir wirklich.“ Zurückziehen möchte sie trotzdem nicht. Sie hat sich dicke Vorhänge gekauft und schläft jetzt mit Ohrstöpseln.', { kicker: 'Lesen' })),
    x(1, mcq('x7', 'Wie hat Johanna das Problem gelöst? (Text oben)', ['Sie ist zurück aufs Dorf gezogen.', 'Sie hat Vorhänge gekauft und benutzt Ohrstöpsel.', 'Sie hat sich beim Vermieter beschwert.'], 1)),
    x(1, mcq('x8', 'Wie hoch ist die Warmmiete?', ['540 Euro', '690 Euro', '710 Euro'], 1),
      audio('x-st2', 'Hören: Anruf wegen einer Wohnung', [
        ['frauHuber', 'Huber, grüß Gott.'],
        ['jonas', 'Guten Tag, Brandt hier. Ich rufe wegen der Zweizimmerwohnung an. Ist sie noch frei?'],
        ['frauHuber', 'Ja, die ist noch zu haben.'],
        ['jonas', 'Darf ich fragen, wie hoch die Miete ist?'],
        ['frauHuber', 'Fünfhundertvierzig Euro kalt, dazu kommen hundertfünfzig Euro Nebenkosten.'],
        ['jonas', 'Und wann könnte ich die Wohnung besichtigen?'],
        ['frauHuber', 'Am Samstag um elf wäre es möglich.'],
        ['jonas', 'Das passt mir gut. Dann bis Samstag!'],
      ])),
    x(1, mcq('x9', 'Wann ist die Besichtigung? (Hörtext oben)', ['am Samstag um 11 Uhr', 'am Sonntag um 11 Uhr', 'am Samstag um 1 Uhr'], 0)),
    x(2, order('x10', ['Ich rufe an,', 'weil', 'meine Heizung', 'nicht mehr', 'funktioniert.'], { task: 'Bau den Satz.' })),
    x(2, order('x11', ['Darf ich fragen,', 'wie hoch', 'die Nebenkosten', 'sind?'], { task: 'Bau die Frage.' })),
    x(3, gap('x12', ['Geld als Sicherheit für den Vermieter: die {{Kaution}}', 'Regeln für alle Bewohner: die {{Hausordnung}}', 'das Fenster öffnen: {{lüften}}'], { bank: ['lüften', 'Kaution', 'Hausordnung'], task: 'Welches Wort ist gemeint?' })),
    x(1, mcq('x13', 'Wo ist das Komma richtig?', ['Die Wohnung ist teuer aber, sehr schön.', 'Die Wohnung ist teuer, aber sehr schön.', 'Die Wohnung, ist teuer aber sehr schön.'], 1)),
    x(1, mcq('x14', 'Du bist eingeladen und unsicher. Was sagst du?', ['Soll ich die Schuhe ausziehen?', 'Warum stehen hier so viele Schuhe?', 'Bei uns ist das falsch.'], 0)),
  ],
};

export const games3: GameDef[] = [
  {
    id: 'k3-sprint', engine: 'sprint', title: 'Wo oder wohin?', blurb: '60 Sekunden: Akkusativ oder Dativ?', skill: 'Wechselpräpositionen', tone: 'mint', chapter: 3, emoji: '⚡',
    rules: 'Du siehst einen Satz mit einer Lücke. Tippe auf den richtigen Artikel. Du hast 60 Sekunden.', label: 'Welcher Artikel?',
    items: [
      { q: 'Ich lege das Buch auf ___ Tisch.', a: 'den', wrong: ['dem'] }, { q: 'Das Buch liegt auf ___ Tisch.', a: 'dem', wrong: ['den'] },
      { q: 'Wir gehen in ___ Küche.', a: 'die', wrong: ['der'] }, { q: 'Wir kochen in ___ Küche.', a: 'der', wrong: ['die'] },
      { q: 'Häng das Bild an ___ Wand.', a: 'die', wrong: ['der'] }, { q: 'Das Bild hängt an ___ Wand.', a: 'der', wrong: ['die'] },
      { q: 'Stell die Schuhe unter ___ Bett.', a: 'das', wrong: ['dem'] }, { q: 'Die Schuhe stehen unter ___ Bett.', a: 'dem', wrong: ['das'] },
      { q: 'Die Lampe hängt über ___ Sofa.', a: 'dem', wrong: ['das'] }, { q: 'Setz dich neben ___ Fenster.', a: 'das', wrong: ['dem'] },
      { q: 'Der Hund schläft hinter ___ Tür.', a: 'der', wrong: ['die'] }, { q: 'Ich stelle das Rad vor ___ Haus.', a: 'das', wrong: ['dem'] },
      { q: 'Das Auto steht vor ___ Garage.', a: 'der', wrong: ['die'] }, { q: 'Er steckt den Brief in ___ Tasche.', a: 'die', wrong: ['der'] },
      { q: 'Der Schlüssel steckt in ___ Schloss.', a: 'dem', wrong: ['das'] }, { q: 'Sie setzt sich auf ___ Stuhl.', a: 'den', wrong: ['dem'] },
      { q: 'Sie sitzt auf ___ Stuhl.', a: 'dem', wrong: ['den'] }, { q: 'Leg die Jacke zwischen ___ Kissen.', a: 'die', wrong: ['den'] },
    ],
  },
  {
    id: 'k3-memory', engine: 'memory', title: 'Wohn-Memory', blurb: 'Finde die Paare: Wort und Erklärung.', skill: 'Wortschatz Wohnen', tone: 'lilac', chapter: 3, emoji: '🃏',
    rules: 'Dreh zwei Karten um. Ein Paar ist ein Wort mit seiner Erklärung.', kinds: ['Wort', 'Erklärung'],
    pairs: [['die Kaution', 'Geld als Sicherheit'], ['die Nebenkosten', 'Wasser, Heizung, Müll'], ['der Vermieter', 'ihm gehört die Wohnung'], ['die WG', 'Wohnung teilen'], ['lüften', 'Fenster auf'], ['ausmisten', 'Unnötiges weggeben'], ['der Umzug', 'neue Adresse'], ['die Kaltmiete', 'Miete ohne Nebenkosten'], ['der Handwerker', 'er repariert'], ['die Ruhezeit', 'kein Lärm']],
  },
  {
    id: 'k3-satzbau', engine: 'satzbau', title: 'Möbel rücken', blurb: 'Bau Sätze mit Ortsangaben und Adjektiven.', skill: 'Ortsangaben', tone: 'sky', chapter: 3, emoji: '🧱',
    rules: 'Tippe die Satzteile in der richtigen Reihenfolge an.',
    sentences: [
      { parts: ['Ich stelle', 'die Lampe', 'neben', 'das Sofa.'], hint: 'Wohin? Akkusativ' },
      { parts: ['Die Lampe', 'steht', 'neben', 'dem Sofa.'], hint: 'Wo? Dativ' },
      { parts: ['Wir wohnen', 'in einer', 'kleinen Wohnung', 'mit Balkon.'], hint: 'Dativ: -en' },
      { parts: ['Hast du', 'die Schlüssel', 'auf den Tisch', 'gelegt?'], hint: 'Partizip am Ende' },
      { parts: ['Ich rufe an,', 'weil', 'der Wasserhahn', 'tropft.'], hint: 'weil + Verb am Ende' },
      { parts: ['Ab wann', 'wäre', 'die Wohnung', 'frei?'], hint: 'Fragewort, dann Verb' },
      { parts: ['Sie hat', 'einen großen Schrank', 'ins Schlafzimmer', 'gestellt.'], hint: 'Akkusativ maskulin: -en' },
      { parts: ['Könnten Sie', 'bitte', 'einen Handwerker', 'schicken?'], hint: 'Infinitiv am Ende' },
      { parts: ['Bei uns', 'ist es üblich,', 'die Schuhe', 'auszuziehen.'], hint: 'Infinitiv mit zu am Ende' },
    ],
  },
  {
    id: 'k3-artikel', engine: 'regen', title: 'Artikelregen: Wohnen', blurb: 'der, die oder das? Fang die Nomen aus Kapitel 3.', skill: 'Artikel', tone: 'rose', chapter: 3, emoji: '☔',
    rules: 'Ein Nomen fällt herunter. Tippe auf den richtigen Artikel, bevor es unten ankommt. Du hast drei Leben.', buckets: ['der', 'die', 'das'],
    words: artikel('der Mietvertrag, die Kaution, der Umzug, die Miete, das Regal, die Schublade, der Schrank, das Sofa, der Teppich, die Lampe, das Fenster, der Balkon, die Heizung, der Keller, das Bad, die Küche, der Flur, das Dach, die Treppe, der Nachbar, die Hausordnung, das Schloss, der Schlüssel, die Wand, das Zimmer'),
  },
];
