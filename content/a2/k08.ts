import type { Chapter, GameDef, GlossaryEntry } from '../types';
import { artikel, audio, cards, checklist, compose, gap, grammar, match, mcq, order, overview, phrases, section, sort, text, tip, x } from '../helpers';

// A2 Kapitel 8: Lernen, Lernprobleme, Ratschläge, Prüfungen, Präsentationen.
// Grammar: Konjunktiv II von sollen (Ratschläge), Fragewort was für ein(e). Aussprache: b, d, g am Wortende.

export const glossaryA2k8: Record<string, GlossaryEntry> = {
  Lerntyp: { de: 'Die Art, wie jemand am besten lernt: mit Hören, Sehen oder Bewegung.', en: 'learning type' },
  Ratschlag: { de: 'Ein Tipp, was jemand machen soll.', en: 'piece of advice' },
  Prüfungsangst: { de: 'Angst vor einer Prüfung.', en: 'exam anxiety' },
  Präsentation: { de: 'Man stellt ein Thema vor einer Gruppe vor, oft mit Folien.', en: 'presentation' },
  Folie: { de: 'Eine Seite in einer Präsentation am Computer.', en: 'slide' },
  Tandem: { de: 'Zwei Personen lernen voneinander ihre Sprachen.', en: 'language exchange partner' },
  Vokabeln: { de: 'Wörter, die man in einer Fremdsprache lernt.', en: 'vocabulary' },
  wiederholen: { de: 'Etwas noch einmal machen oder lernen.', en: 'to repeat, to review' },
  sichKonzentrieren: { de: 'Nur an eine Sache denken.', en: 'to concentrate' },
  Sprachcafé: { de: 'Ein Treffen im Café, bei dem Menschen in verschiedenen Sprachen sprechen.', en: 'language café' },
};

const einstieg = section('einstieg', 'einstieg', 'Einstieg', 'Wie lernst du?', 'butter', 8,
  ['das Kapitel kennenlernen', 'über das Lernen sprechen'], [
    overview('e-over', 'Kapitel 8: Gelernt ist gelernt!',
      'Wie lernst du am besten? Mit Karteikarten, mit Musik, beim Spazierengehen? In Kapitel 8 geht es ums Lernen. Du beschreibst Lernprobleme, gibst und verstehst [[Ratschlag|Ratschläge]] mit **sollte**, sprichst über Prüfungen und [[Prüfungsangst]] und bereitest eine kurze [[Präsentation]] vor.\n\nAmara muss für ihre neue Stelle eine Präsentation halten. Und Felix lernt heimlich eine neue Sprache.',
      'This chapter is about learning: learning problems and tips, exams, and giving a short presentation. Grammar: giving advice with sollte (you should), and the question was für ein (what kind of). Pronunciation: b, d and g at the end of a word.',
      ['Lernprobleme beschreiben', 'Ratschläge geben und verstehen', 'über Prüfungen sprechen', 'eine kurze Präsentation halten']),
    match('e-match', [['Karteikarten schreiben', '🗂️'], ['Podcasts hören', '🎧'], ['in einer Gruppe lernen', '👥'], ['mit einer App üben', '📱'], ['Notizen machen', '📝'], ['laut lesen', '🗣️']], { task: 'Wie kann man lernen?', taskEn: 'Match the learning method to the picture.' }),
    sort('e-sort', ['hilft beim Lernen', 'stört beim Lernen'], [['Pausen machen', 0], ['das Handy neben dem Buch', 1], ['genug schlafen', 0], ['laute Musik mit Text', 1], ['Wörter wiederholen', 0], ['alles am letzten Abend lernen', 1]], { task: 'Was hilft, was stört?', taskEn: 'What helps and what gets in the way of learning?' }),
  ]);

const teil1 = section('teil-1', 'modul', 'Teil 1', 'Du solltest …', 'mint', 15,
  ['Lernprobleme beschreiben', 'Ratschläge verstehen und geben', 'Konjunktiv II: sollte'], [
    text('t1-text', `**Forum „Deutsch lernen“: Ich brauche Hilfe!**

**Marco_92:** Ich lerne seit einem Jahr Deutsch, aber ich vergesse die neuen Wörter so schnell! Ich lerne jeden Sonntag drei Stunden Vokabeln. Am Mittwoch weiß ich nichts mehr. Was mache ich falsch?

**sprachfuchs:** Du solltest nicht einmal pro Woche lernen, sondern jeden Tag ein bisschen. Zehn Minuten am Tag sind besser als drei Stunden am Sonntag.

**lena_lernt:** Ihr solltet die Wörter nicht allein lernen, sondern in ganzen Sätzen. Und schreib die Wörter auf Zettel und kleb sie in der Wohnung auf. „Der Kühlschrank“ auf den Kühlschrank!

**Frau Klein (Lehrerin):** Sie sollten auch mit allen Sinnen lernen: hören, sprechen, schreiben. Und am wichtigsten: Sprechen Sie mit Menschen! In einem Sprachcafé oder mit einem Tandempartner lernen Sie am meisten.`,
      { kicker: 'Lesen', title: 'Ein Lernproblem', task: 'Lies das Forum.', taskEn: 'Read the forum thread about forgetting new words.' }),
    mcq('t1-q1', 'Was ist Marcos Problem?', ['Er hat keine Zeit.', 'Er vergisst die Wörter schnell.', 'Er versteht die Grammatik nicht.'], 1),
    match('t1-match', [['sprachfuchs', 'jeden Tag ein bisschen lernen'], ['lena_lernt', 'Wörter in Sätzen lernen und Zettel aufkleben'], ['Frau Klein', 'mit allen Sinnen lernen und mit Menschen sprechen']], { task: 'Wer gibt welchen Ratschlag?', taskEn: 'Who gives which piece of advice?' }),
    grammar('t1-gram', 'Ratschläge mit sollte', {
      intro: 'Mit **sollte** (Konjunktiv II von sollen) gibt man **Ratschläge**. Es ist freundlicher als ein Imperativ.',
      head: ['', 'sollen (Konjunktiv II)', 'Beispiel'],
      rows: [['ich', 'sollte', 'Ich **sollte** mehr schlafen.'], ['du', 'solltest', 'Du **solltest** jeden Tag lernen.'], ['er/sie/es', 'sollte', 'Er **sollte** Pausen machen.'], ['wir', 'sollten', 'Wir **sollten** zusammen üben.'], ['ihr', 'solltet', 'Ihr **solltet** laut lesen.'], ['sie/Sie', 'sollten', 'Sie **sollten** mit Menschen sprechen.']],
      notes: ['Die Form sieht aus wie das Präteritum (*sollte*). Die Bedeutung zeigt der Kontext: *Gestern sollte ich …* (Vergangenheit) / *Du solltest …* (Ratschlag).', 'Satzklammer: *Du **solltest** mehr **schlafen**.*', 'Nicht ..., sondern ...: *Du solltest **nicht** einmal pro Woche lernen, **sondern** jeden Tag.*'],
      en: 'sollte = should. Use it to give advice: Du solltest mehr schlafen. The main verb goes to the end. nicht …, sondern … = not …, but rather …',
    }),
    gap('t1-gap', ['Du {{solltest}} mehr Pausen machen. (du)', 'Ihr {{solltet}} zusammen lernen. (ihr)', 'Sie {{sollten}} früher ins Bett gehen. (Sie)', 'Ich {{sollte}} weniger Kaffee trinken. (ich)'],
      { task: 'Ergänze sollte.', taskEn: 'Fill in the right form of sollte.' }),
    compose('t1-comp', 'Dein Freund hat Prüfungsangst. Gib ihm drei Ratschläge.', [
      ['früh anfangen', 'start early', ['Du', 'solltest', 'früh', 'anfangen.']],
      ['genug schlafen', 'sleep enough', ['Du', 'solltest', 'vor der Prüfung', 'gut schlafen.']],
      ['tief atmen', 'breathe deeply', ['In der Prüfung', 'solltest', 'du', 'tief atmen.']],
    ], { task: 'Bau die Ratschläge.', taskEn: 'Build the pieces of advice.' }),
  ]);

const teil2 = section('teil-2', 'modul', 'Teil 2', 'Was für ein Kurs?', 'sky', 15,
  ['Informationen erfragen', 'Was für ein(e)?', 'über Prüfungen sprechen'], [
    audio('t2-audio', 'Hören: In der Volkshochschule', [
      ['priya', 'Volkshochschule Leipzig, Anmeldung. Guten Tag!'],
      ['felix', 'Grüß Gott. Ich möchte einen Sprachkurs machen.'],
      ['priya', 'Was für einen Kurs suchen Sie denn? Welche Sprache?'],
      ['felix', 'Japanisch. Für Anfänger.'],
      ['priya', 'Da haben wir zwei Kurse: einen Intensivkurs am Vormittag und einen Abendkurs, zweimal pro Woche.'],
      ['felix', 'Was für ein Abendkurs ist das genau?'],
      ['priya', 'Der Kurs ist dienstags und donnerstags von 18 bis 19:30 Uhr. Zwölf Wochen, 189 Euro. Mit einer kleinen Prüfung am Ende.'],
      ['felix', 'Eine Prüfung? Oje. Muss ich die machen?'],
      ['priya', 'Nein, die Prüfung ist freiwillig. Sie bekommen auch ohne Prüfung eine Teilnahmebestätigung.'],
      ['felix', 'Gut. Dann melde ich mich für den Abendkurs an.'],
    ], { task: 'Hör zu. Welchen Kurs nimmt Felix?', taskEn: 'Listen. Which course does Felix choose? freiwillig = optional.' }),
    mcq('t2-q1', 'Welche Sprache möchte Felix lernen?', ['Englisch', 'Japanisch', 'Spanisch'], 1),
    mcq('t2-q2', 'Wann ist der Abendkurs?', ['montags und mittwochs', 'dienstags und donnerstags', 'jeden Tag'], 1),
    mcq('t2-q3', 'Muss Felix die Prüfung machen?', ['Ja.', 'Nein, sie ist freiwillig.', 'Nur für das Zertifikat.'], 1),
    grammar('t2-gram', 'Was für ein(e)?', {
      intro: 'Mit **Was für ein(e) …?** fragt man nach der **Art** oder den **Eigenschaften** einer Sache. Die Endung ist wie bei **ein**.',
      head: ['', 'maskulin', 'neutral', 'feminin', 'Plural'],
      rows: [['Nominativ', 'Was für **ein** Kurs ist das?', 'Was für **ein** Buch?', 'Was für **eine** Prüfung?', 'Was für Bücher?'], ['Akkusativ', 'Was für **einen** Kurs suchen Sie?', 'Was für **ein** Buch?', 'Was für **eine** Prüfung?', 'Was für Bücher?'], ['Dativ', 'Mit was für **einem** Lehrer?', 'Mit was für **einem** Buch?', 'Mit was für **einer** App?', 'Mit was für Büchern?']],
      notes: ['Antwort mit Adjektiv: *Was für einen Kurs suchen Sie? **Einen** kurz**en** Kurs am Abend.*', '**welch-** fragt nach einer Sache aus einer bekannten Auswahl: *Welchen Kurs nehmen Sie, A oder B?*'],
      en: 'Was für ein …? = what kind of …? The ending of ein follows the case of the noun: Was für einen Kurs suchen Sie? Compare welcher (which one from a known set).',
    }),
    gap('t2-gap', ['Was für {{einen}} Job suchst du? (der Job, Akkusativ)', 'Was für {{eine}} App benutzt du? (die App)', 'Was für {{ein}} Buch liest du? (das Buch)', 'Mit was für {{einem}} Lehrer lernst du? (der Lehrer, Dativ)'],
      { task: 'Ergänze ein in der richtigen Form.', taskEn: 'Fill in ein in the right form.' }),
    phrases('t2-phr', 'Über Prüfungen sprechen', {
      'vorher': ['Ich habe Angst vor der Prüfung.', 'Ich bin total nervös.', 'Drück mir die Daumen!'],
      'nachher': ['Ich habe bestanden!', 'Ich bin leider durchgefallen.', 'Die Prüfung war leichter als gedacht.'],
    }),
    tip('t2-tip', 'Daumen drücken', 'Wenn jemand eine Prüfung hat, sagt man auf Deutsch: **Ich drücke dir die Daumen!** Das bedeutet: Ich wünsche dir Glück. Auf Englisch kreuzt man die Finger, auf Deutsch drückt man die Daumen.'),
  ]);

const teil3 = section('teil-3', 'modul', 'Teil 3', 'Die Präsentation', 'lilac', 15,
  ['eine kurze Präsentation vorbereiten', 'Redemittel für Präsentationen', 'ein Interview verstehen'], [
    text('t3-text', `**Fünf Tipps für eine gute Präsentation**

1. **Struktur:** Beginnen Sie mit einer Einleitung. Sagen Sie, worüber Sie sprechen. Dann kommt der Hauptteil, am Ende der Schluss.
2. **Folien:** Schreiben Sie nicht zu viel. Auf eine Folie gehören höchstens fünf Stichpunkte. Bilder sind besser als lange Texte.
3. **Üben:** Halten Sie die Präsentation zu Hause laut, am besten vor Freunden oder vor dem Spiegel.
4. **Sprache:** Sprechen Sie langsam und machen Sie Pausen. Lernen Sie die ersten Sätze auswendig.
5. **Zeit:** Planen Sie genug Zeit für Fragen ein.`,
      { kicker: 'Lesen', title: 'Tipps für Präsentationen', task: 'Lies die Tipps.', taskEn: 'Read the presentation tips. Stichpunkt = bullet point, auswendig = by heart.' }),
    mcq('t3-q1', 'Wie viele Stichpunkte sollten höchstens auf einer Folie stehen?', ['drei', 'fünf', 'zehn'], 1),
    mcq('t3-q2', 'Was soll man auswendig lernen?', ['die ganze Präsentation', 'die ersten Sätze', 'die Fragen'], 1),
    order('t3-order', ['die Einleitung', 'der Hauptteil', 'der Schluss', 'die Fragen'], { task: 'Bring die Teile einer Präsentation in die richtige Reihenfolge.', taskEn: 'Put the parts of a presentation in order.' }),
    phrases('t3-phr', 'Redemittel für eine Präsentation', {
      'Einleitung': ['Ich möchte heute über … sprechen.', 'Mein Thema ist …', 'Zuerst erzähle ich …, dann …'],
      'Hauptteil': ['Auf dieser Folie sehen Sie …', 'Ein wichtiger Punkt ist …', 'Ein Beispiel: …'],
      'Schluss': ['Zum Schluss möchte ich sagen …', 'Vielen Dank für Ihre Aufmerksamkeit.', 'Haben Sie Fragen?'],
    }),
    sort('t3-sort', ['Einleitung', 'Hauptteil', 'Schluss'], [['Mein Thema ist …', 0], ['Auf dieser Folie sehen Sie …', 1], ['Vielen Dank für Ihre Aufmerksamkeit.', 2], ['Ich möchte heute über … sprechen.', 0], ['Ein Beispiel: …', 1], ['Haben Sie Fragen?', 2]], { task: 'Wo passt der Satz?', taskEn: 'Where does the phrase belong in a presentation?' }),
    compose('t3-comp', 'Beginne eine Präsentation über deine Heimatstadt.', [
      ['Begrüßung und Thema', 'Greeting and topic', ['Guten Tag!', 'Mein Thema', 'ist', 'meine Heimatstadt.']],
      ['Was erzählst du zuerst?', 'What will you talk about first?', ['Zuerst', 'erzähle ich', 'etwas', 'über die Geschichte.']],
      ['Was erzählst du dann?', 'And then?', ['Dann', 'zeige ich', 'Ihnen', 'die schönsten Orte.']],
    ], { task: 'Bau die Einleitung.', taskEn: 'Build the introduction.' }),
  ]);

const wg = section('wg', 'kommunikation', 'Die Fuchsbau-WG', 'Folge 8: Generalprobe', 'rose', 10,
  ['eine Geschichte hören', 'Ratschläge im Kontext'], [
    text('wg-intro', 'Morgen hält Amara eine Präsentation vor der Klinikleitung. Es geht um ihre neue Stelle als Stationsleiterin. Heute Abend übt sie vor Nele und Felix. Kenji ist per Video aus Wien dabei.', { kicker: 'Die Geschichte', en: 'Tomorrow Amara gives a presentation to the hospital management. Tonight she practices in front of Nele and Felix. Kenji joins by video call from Vienna.' }),
    audio('wg-audio', 'Folge 8: Generalprobe', [
      ['amara', 'Guten Tag. Mein Thema ist … äh … Moment. Ich habe es vergessen.'],
      ['nele', 'Ganz ruhig. Du solltest die ersten Sätze auswendig lernen. Dann ist der Anfang leicht.'],
      ['amara', 'Okay. Noch mal. Guten Tag. Ich möchte heute über bessere Schichtpläne für unsere Station sprechen.'],
      ['kenji', 'Sehr gut! Aber du sprichst zu schnell. Du solltest mehr Pausen machen.'],
      ['amara', 'Auf dieser Folie sehen Sie … oh, das ist ja eine ganze Seite Text.'],
      ['felix', 'Ehrlich gesagt: Das kann niemand lesen. Du solltest lieber ein Bild nehmen.'],
      ['amara', 'Ihr habt recht. Ich mache eine neue Folie. Felix, was ist das für ein Buch auf dem Tisch?'],
      ['felix', 'Äh … nichts. Ein Kochbuch.'],
      ['nele', 'Ein Kochbuch auf Japanisch? Felix, lernst du etwa Japanisch?'],
      ['felix', 'Psst! Das ist eine Überraschung für Kenji!'],
      ['kenji', 'Ich habe alles gehört. Arigatō, Felix!'],
    ], { task: 'Hör die Geschichte.', taskEn: 'Listen to the story. Generalprobe = dress rehearsal.' }),
    mcq('wg-q1', 'Worüber spricht Amara in der Präsentation?', ['über bessere Schichtpläne', 'über ihre Familie', 'über Ghana'], 0),
    mcq('wg-q2', 'Welchen Ratschlag gibt Kenji?', ['Sie sollte mehr Pausen machen.', 'Sie sollte lauter sprechen.', 'Sie sollte Bilder nehmen.'], 0),
    mcq('wg-q3', 'Was ist das Problem mit der Folie?', ['Zu viel Text.', 'Zu viele Bilder.', 'Sie ist leer.'], 0),
    mcq('wg-q4', 'Was ist Felix’ Geheimnis?', ['Er lernt Japanisch.', 'Er kocht heimlich.', 'Er zieht nach Wien.'], 0),
  ]);

const grammatik = section('grammatik', 'grammatik', 'Grammatik', 'Alles auf einen Blick', 'peach', 10,
  ['sollte', 'was für ein'], [
    grammar('g-1', 'Ratschläge geben: drei Möglichkeiten', {
      head: ['', 'Beispiel', 'Wirkung'],
      rows: [['Imperativ', '**Lern** jeden Tag!', 'direkt'], ['sollte', 'Du **solltest** jeden Tag **lernen**.', 'freundlich'], ['An deiner Stelle …', '**An deiner Stelle würde** ich jeden Tag lernen.', 'sehr freundlich (mehr in Kapitel 11)']],
      en: 'Three ways to give advice, from direct to very polite.',
    }),
    mcq('g-q1', 'Du hast Kopfschmerzen? Du ___ zum Arzt gehen.', ['solltest', 'sollst', 'sollen'], 0),
    mcq('g-q2', 'Was für ___ Wohnung suchst du?', ['ein', 'eine', 'einen'], 1),
    mcq('g-q3', 'Was für ___ Film hast du gesehen?', ['ein', 'eine', 'einen'], 2),
  ]);

const uebungen = section('uebungen', 'uebung', 'Übungen', 'Training', 'butter', 15,
  ['Ratschläge geben', 'Aussprache: b, d, g am Wortende'], [
    order('u-order', ['Du', 'solltest', 'nicht so viel', 'arbeiten.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence.' }),
    audio('u-aus', 'Aussprache: b, d, g am Wortende', [
      ['frauKlein', 'Am Wortende klingt b wie p: gelb, halb, Urlaub.'],
      ['frauKlein', 'd klingt wie t: Hand, Freund, Abend, Geld.'],
      ['frauKlein', 'g klingt wie k: Tag, Zug, Weg, genug.'],
      ['frauKlein', 'Aber im Plural hört man wieder b, d, g: die Freunde, die Tage, die Züge.'],
    ], { task: 'Hör zu und sprich nach.', taskEn: 'Listen and repeat. At the end of a word, b, d, g sound like p, t, k. In the plural they are soft again.' }),
    sort('u-sort', ['hart (p, t, k)', 'weich (b, d, g)'], [['der Tag', 0], ['die Tage', 1], ['der Freund', 0], ['die Freunde', 1], ['halb', 0], ['halbe', 1]], { task: 'Hart oder weich?', taskEn: 'Hard or soft sound?' }),
    gap('u-gap', ['Ich habe Angst {{vor}} der Prüfung.', 'Ich drücke dir die {{Daumen}}!', 'Sie hat die Prüfung {{bestanden}}.'], { bank: ['vor', 'Daumen', 'bestanden'], task: 'Ergänze.', taskEn: 'Fill in the gaps.' }),
  ]);

const wortschatz = section('wortschatz', 'wortschatz', 'Wortschatz und Check', 'Das kann ich jetzt', 'mint', 8,
  ['Wörter wiederholen', 'den Stand einschätzen'], [
    cards('w-cards', [
      ['der Ratschlag', 'ein Tipp', 'advice'], ['die Vokabeln (Pl.)', 'neue Wörter', 'vocabulary'], ['wiederholen', 'noch einmal lernen', 'to review'],
      ['vergessen', 'nicht mehr wissen', 'to forget'], ['die Prüfung', 'ein Test', 'exam'], ['bestehen', 'die Prüfung schaffen', 'to pass'],
      ['durchfallen', 'die Prüfung nicht schaffen', 'to fail'], ['die Präsentation', 'ein Vortrag mit Folien', 'presentation'], ['die Folie', 'eine Seite in der Präsentation', 'slide'],
      ['auswendig', 'ohne Text, aus dem Kopf', 'by heart'], ['freiwillig', 'man muss nicht', 'optional'], ['Daumen drücken', 'Glück wünschen', 'to keep one’s fingers crossed'],
    ]),
    phrases('w-x-phr', 'Meinung sagen', {
      'dafür': ['Ich bin für …, weil …', 'Ich meine, dass … wichtig ist.', 'Ich denke, das ist richtig.'],
      'dagegen': ['Ich bin gegen …, weil …', 'Ich finde … keine gute Idee.', 'Für mich ist … nicht sinnvoll.'],
      'Ratschläge': ['Du solltest jeden Tag ein bisschen üben.', 'Sie sollten früher anfangen.'],
    }),
    match('w-x-match', [['faul', 'fleißig'], ['nervös', 'ruhig'], ['schlecht', 'gut'], ['wenig', 'viel'], ['spät', 'früh'], ['neugierig', 'uninteressiert']],
      { task: 'Gegenteile', taskEn: 'Opposites.' }),
    gap('w-x-gap', ['Du {{solltest}} mehr schlafen. (sollen)', 'Ihr {{solltet}} die Wörter jeden Tag wiederholen. (sollen)', 'Was für {{ein}} Kurs ist das?', 'Hanna lernt segeln, {{weil}} sie das Wasser liebt.'],
      { bank: ['solltest', 'solltet', 'ein', 'weil'], task: 'Ergänze.', taskEn: 'Fill in: advice with sollte, and „Was für ein …?“' }),
    mcq('w-x-q1', '„Was für ___ Buch liest du?“', ['ein', 'einen', 'eine'], 0, { task: 'Was für ein …?', taskEn: 'Pick the right article.' }),
    mcq('w-x-q2', 'Felix hat Angst vor der Prüfung. Was sagst du?', ['Du solltest dich gut vorbereiten.', 'Du sollst nicht lernen.', 'Du solltest nervös sein.'], 0),
    order('w-x-order', ['Du', 'solltest', 'die Aussprache', 'mehr', 'üben.'], { task: 'Bau den Ratschlag.', taskEn: 'Build the piece of advice.' }),
    checklist('w-check', ['Ich kann Lernprobleme beschreiben.', 'Ich kann mit sollte Ratschläge geben.', 'Ich kann mit „Was für ein …?“ fragen.', 'Ich kann über Prüfungen sprechen.', 'Ich kann eine kurze Präsentation beginnen und beenden.']),
  ]);

export const a2k8: Chapter = {
  id: 'a2-k8', number: 8, title: 'Gelernt ist gelernt!', theme: 'Lernen, Ratschläge, Prüfungen, Präsentationen',
  grammar: 'Konjunktiv II: sollte (Ratschläge). Was für ein(e)?',
  sections: [einstieg, teil1, teil2, teil3, wg, grammatik, uebungen, wortschatz],
  games: ['a2k8-sprint', 'a2k8-memory', 'a2k8-satzbau', 'a2k8-artikel'],
  exam: [
    x(1, mcq('x1', 'Du bist müde. Du ___ früher ins Bett gehen.', ['solltest', 'sollst', 'solltet'], 0)),
    x(1, mcq('x2', 'Was für ___ Auto hast du?', ['ein', 'einen', 'eine'], 0)),
    x(1, mcq('x3', 'Was für ___ Kurs möchten Sie besuchen?', ['ein', 'einen', 'eine'], 1)),
    x(3, gap('x4', ['Ihr {{solltet}} mehr Wasser trinken. (ihr)', 'Sie {{sollten}} einen Termin machen. (Sie)', 'Ich {{sollte}} mehr Sport machen. (ich)'], { task: 'sollte.' })),
    x(3, gap('x5', ['Was für {{eine}} Prüfung ist das?', 'Mit was für {{einem}} Buch lernst du?', 'Was für {{ein}} Kurs ist das?'], { task: 'Was für ein(e)?' })),
    x(1, mcq('x6', 'Was empfiehlt die Lehrerin?', ['jeden Tag zehn Minuten lernen', 'am Wochenende viel lernen', 'nur Grammatik lernen'], 0),
      audio('x-st1', 'Hören: Nach dem Kurs', [
        ['elif', 'Frau Klein, ich vergesse immer die neuen Wörter. Was soll ich machen?'],
        ['frauKlein', 'Sie sollten jeden Tag zehn Minuten wiederholen. Das ist besser als zwei Stunden am Wochenende. Und Sie sollten die Wörter laut sprechen.'],
        ['elif', 'Laut sprechen? Auch im Bus?'],
        ['frauKlein', 'Im Bus vielleicht leise. Aber zu Hause gern laut!'],
      ])),
    x(1, mcq('x7', 'Wie soll Elif die Wörter lernen? (Hörtext oben)', ['laut sprechen', 'nur schreiben', 'nur hören'], 0)),
    x(1, mcq('x8', 'Wann ist das Sprachcafé?', ['jeden Montag', 'jeden Mittwoch', 'jeden Freitag'], 1),
      text('x-st2', '**Sprachcafé im Café Kranich**\nJeden Mittwoch, 19 bis 21 Uhr. Deutsch, Englisch, Spanisch, Arabisch und mehr! An jedem Tisch spricht man eine andere Sprache. Für alle Niveaus. Der Eintritt ist frei, Getränke bitte selbst bezahlen.', { kicker: 'Lesen' })),
    x(1, mcq('x9', 'Was muss man bezahlen? (Text oben)', ['den Eintritt', 'die Getränke', 'nichts'], 1)),
    x(2, order('x10', ['Du', 'solltest', 'mehr', 'Pausen', 'machen.'], { task: 'Bau den Satz.' })),
    x(1, mcq('x11', 'Deine Freundin hat morgen eine Prüfung. Was sagst du?', ['Ich drücke dir die Daumen!', 'Gute Besserung!', 'Herzliches Beileid!'], 0)),
    x(1, mcq('x12', 'Wie beendet man eine Präsentation?', ['Mein Thema ist …', 'Vielen Dank für Ihre Aufmerksamkeit.', 'Zuerst erzähle ich …'], 1)),
  ],
};

export const gamesA2k8: GameDef[] = [
  {
    id: 'a2k8-sprint', engine: 'sprint', title: 'Ratschlag-Sprint', blurb: 'sollte, solltest, solltet? Schnell!', skill: 'sollte', tone: 'mint', chapter: 8, emoji: '⚡',
    rules: 'Du siehst eine Person. Tippe auf die richtige Form von sollte.', label: 'Welche Form?',
    items: [
      { q: 'ich ___', a: 'sollte', wrong: ['solltest', 'sollten'] }, { q: 'du ___', a: 'solltest', wrong: ['sollte', 'solltet'] },
      { q: 'er ___', a: 'sollte', wrong: ['solltet', 'solltest'] }, { q: 'wir ___', a: 'sollten', wrong: ['solltet', 'sollte'] },
      { q: 'ihr ___', a: 'solltet', wrong: ['sollten', 'solltest'] }, { q: 'Sie ___', a: 'sollten', wrong: ['solltet', 'sollte'] },
      { q: 'Du ___ mehr schlafen.', a: 'solltest', wrong: ['sollst', 'sollte'] }, { q: 'Ihr ___ leiser sein.', a: 'solltet', wrong: ['sollt', 'sollten'] },
      { q: 'Amara ___ langsamer sprechen.', a: 'sollte', wrong: ['solltet', 'sollten'] }, { q: 'Wir ___ zusammen üben.', a: 'sollten', wrong: ['solltest', 'solltet'] },
      { q: 'Felix ___ den Kurs machen.', a: 'sollte', wrong: ['solltest', 'sollen'] }, { q: 'Sie (Plural) ___ mehr lernen.', a: 'sollten', wrong: ['solltet', 'sollte'] },
    ],
  },
  {
    id: 'a2k8-memory', engine: 'memory', title: 'Lern-Memory', blurb: 'Problem und Ratschlag: Finde die Paare.', skill: 'Ratschläge', tone: 'lilac', chapter: 8, emoji: '🃏',
    rules: 'Dreh zwei Karten um. Ein Paar ist ein Problem und der passende Ratschlag.', kinds: ['Problem', 'Ratschlag'],
    pairs: [['Ich vergesse Wörter.', 'Du solltest jeden Tag wiederholen.'], ['Ich bin immer müde.', 'Du solltest früher schlafen.'], ['Ich habe Prüfungsangst.', 'Du solltest tief atmen.'], ['Ich kann mich nicht konzentrieren.', 'Du solltest das Handy weglegen.'], ['Ich spreche zu wenig.', 'Du solltest ins Sprachcafé gehen.'], ['Ich verstehe Filme nicht.', 'Du solltest Untertitel benutzen.'], ['Meine Folien sind zu voll.', 'Du solltest Bilder nehmen.'], ['Ich spreche zu schnell.', 'Du solltest Pausen machen.']],
  },
  {
    id: 'a2k8-satzbau', engine: 'satzbau', title: 'Tipp-Baukasten', blurb: 'Bau Ratschläge und Fragen.', skill: 'Satzbau', tone: 'sky', chapter: 8, emoji: '🧱',
    rules: 'Tippe die Wörter in der richtigen Reihenfolge an.',
    sentences: [
      { parts: ['Du', 'solltest', 'jeden Tag', 'lernen.'], hint: 'sollte + Infinitiv am Ende' },
      { parts: ['Ihr', 'solltet', 'mehr', 'Pausen machen.'], hint: 'Satzklammer' },
      { parts: ['Was für', 'einen Kurs', 'suchen', 'Sie?'], hint: 'was für + Akkusativ' },
      { parts: ['Was für', 'ein Buch', 'ist', 'das?'], hint: 'was für + Nominativ' },
      { parts: ['Ich', 'habe', 'Angst', 'vor der Prüfung.'], hint: 'Angst vor + Dativ' },
      { parts: ['Ich', 'drücke', 'dir', 'die Daumen!'], hint: 'Glück wünschen' },
      { parts: ['Mein Thema', 'ist', 'das Lernen', 'mit Apps.'], hint: 'Präsentation: Einleitung' },
      { parts: ['Lerne', 'nicht am Sonntag,', 'sondern', 'jeden Tag!'], hint: 'nicht …, sondern …' },
    ],
  },
  {
    id: 'a2k8-artikel', engine: 'regen', title: 'Artikel-Regen', blurb: 'der, die oder das? Lernen.', skill: 'Artikel', tone: 'rose', chapter: 8, emoji: '☔',
    rules: 'Ein Nomen fällt herunter. Tippe auf den richtigen Artikel.', buckets: ['der', 'die', 'das'],
    words: artikel('der Ratschlag, das Zertifikat, die Prüfung, der Kurs, das Wörterbuch, die Präsentation, der Tipp, das Thema, die Folie, der Anfänger, das Niveau, die Volkshochschule, der Schluss, das Tandem, die Einleitung, der Hauptteil, das Lernziel, die Aufmerksamkeit'),
  },
];
