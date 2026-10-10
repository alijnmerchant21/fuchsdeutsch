import type { Chapter, GameDef, GlossaryEntry } from './types';
import { artikel, audio, cards, checklist, compose, gap, grammar, match, mcq, order, overview, phrases, poll, section, sort, text, tip, x } from './helpers';

// Kapitel 6: theme Körper und Gesundheit. Grammar: Finalsätze (damit, um … zu, zum + Infinitiv),
// Verben mit Präpositionen, da(r)- und wo(r)-.

export const glossary6: Record<string, GlossaryEntry> = {
  Ernährung: { de: 'Alles, was ein Mensch isst und trinkt.', en: 'nutrition, diet' },
  ausgewogen: { de: 'Von allem etwas, in einem guten Verhältnis.', en: 'balanced', ex: 'Eine ausgewogene Ernährung ist wichtig.' },
  Fertiggericht: { de: 'Essen, das man fertig kauft und nur noch warm macht.', en: 'ready meal' },
  vorkochen: { de: 'Essen für die nächsten Tage auf einmal kochen.', en: 'to cook in advance, to meal-prep' },
  naschen: { de: 'Zwischendurch Süßes essen.', en: 'to snack on sweets' },
  Vollkorn: { de: 'Brot oder Nudeln aus dem ganzen Korn, mit vielen Ballaststoffen.', en: 'whole grain' },
  Heißhunger: { de: 'Plötzlicher, sehr starker Hunger.', en: 'craving, ravenous hunger' },
  Kreislauf: { de: 'Das System, das Blut durch den Körper bewegt.', en: 'circulation' },
  Abwehrkräfte: { de: 'Die Kräfte des Körpers gegen Krankheiten.', en: 'immune defenses' },
  verspannt: { de: 'Die Muskeln sind hart und tun weh, oft im Nacken oder Rücken.', en: 'tense (muscles)' },
  dehnen: { de: 'Muskeln langsam lang ziehen.', en: 'to stretch' },
  Ausdauer: { de: 'Die Kraft, sich lange zu bewegen, ohne müde zu werden.', en: 'stamina, endurance' },
  überwinden: { de: 'Etwas Schweres schaffen, obwohl man Angst oder keine Lust hat.', en: 'to overcome', ex: 'Ich musste mich überwinden.' },
  Gipfel: { de: 'Der höchste Punkt eines Berges.', en: 'summit' },
  sichGewöhnen: { de: 'Etwas wird normal, weil man es oft macht. Mit „an“ + Akkusativ.', en: 'to get used to' },
  Apotheke: { de: 'Das Geschäft, in dem man Medikamente bekommt.', en: 'pharmacy' },
  rezeptfrei: { de: 'Man kann das Medikament ohne Rezept vom Arzt kaufen.', en: 'over the counter' },
  Rezept: { de: 'Hier: das Papier vom Arzt, mit dem man ein Medikament bekommt.', en: 'prescription' },
  Nebenwirkung: { de: 'Eine Wirkung eines Medikaments, die man nicht haben möchte.', en: 'side effect' },
  Beschwerden: { de: 'Schmerzen oder Probleme mit der Gesundheit.', en: 'symptoms, complaints' },
  Hausmittel: { de: 'Ein einfaches Mittel gegen Krankheit, das man zu Hause hat, zum Beispiel Tee mit Honig.', en: 'home remedy' },
  Lutschtablette: { de: 'Eine Tablette, die man langsam im Mund zergehen lässt.', en: 'lozenge' },
  einnehmen: { de: 'Ein Medikament schlucken.', en: 'to take (medicine)', ex: 'Nehmen Sie die Tabletten nach dem Essen ein.' },
  Krankschreibung: { de: 'Das Papier vom Arzt für den Arbeitgeber, dass man krank ist.', en: 'sick note' },
};

const einstieg = section('einstieg', 'einstieg', 'Einstieg', 'Fit und gesund?', 'butter', 10,
  ['das Kapitel kennenlernen', 'über Gesundheit im Alltag sprechen'], [
    overview('e-over', 'Kapitel 6: Gut in Form',
      'In diesem Kapitel geht es um **Körper und Gesundheit**. Welcher Esstyp bist du? Was sagt die Forschung über Schlaf, Bewegung und kaltes Duschen? Du hörst eine Radiosendung über zwei Menschen mit ungewöhnlichen sportlichen Leistungen und übst Gespräche in der Apotheke und unter Kollegen, wenn es jemandem nicht gut geht.\n\nIn der Grammatik lernst du, **Ziele und Absichten** auszudrücken: mit *damit*, *um … zu* und *zum*. Außerdem lernst du Verben mit festen Präpositionen (*sich freuen auf*) und die praktischen Wörter *darauf* und *worauf*.',
      'This chapter is about body and health: eating habits, short science reports, unusual athletes, and conversations at the pharmacy. Grammar: expressing purpose (damit, um … zu, zum + noun), verbs with fixed prepositions, and da(r)-/wo(r)- words such as darauf and worauf.',
      ['über Ernährung und Gewohnheiten sprechen', 'Ziele und Absichten ausdrücken', 'eine kurze Präsentation aufbauen', 'in der Apotheke Beschwerden beschreiben und Rat verstehen']),
    text('e-intro', 'Zehntausend Schritte, zwei Liter Wasser, acht Stunden Schlaf, fünf Portionen Obst und Gemüse: Die Regeln für ein gesundes Leben kennt fast jeder. Sich daran zu halten ist eine andere Sache. Wie ist es bei dir?', { kicker: 'Zum Einstieg' }),
    poll('e-poll', [['Treppe', 'Aufzug'], ['selbst kochen', 'bestellen'], ['früh ins Bett', 'spät ins Bett'], ['Sport im Verein', 'Sport allein'], ['Tee', 'Kaffee']],
      { task: 'Was machst du eher?', taskEn: 'Which do you do more? There is no wrong answer.' }),
    sort('e-sort', ['Kopf', 'Oberkörper', 'Beine und Füße'], [['die Stirn', 0], ['die Schulter', 1], ['das Knie', 2], ['der Nacken', 0], ['der Rücken', 1], ['der Knöchel', 2], ['das Kinn', 0], ['die Brust', 1], ['die Zehe', 2]],
      { task: 'Wo ist das am Körper?', taskEn: 'Where on the body is it?' }),
    match('e-match', [['Kopfschmerzen', 'viel Wasser trinken und frische Luft'], ['Husten', 'Tee mit Honig'], ['ein verspannter Nacken', 'dehnen und bewegen'], ['müde Augen', 'eine Pause vom Bildschirm'], ['Schlafprobleme', 'abends kein Handy im Bett']],
      { task: 'Was hilft? Verbinde.', taskEn: 'What helps? Match.' }),
  ]);

const modul1 = section('modul-1', 'modul', 'Modul 1', 'Essen, aber wie?', 'mint', 25,
  ['Typbeschreibungen verstehen', 'über Ernährung sprechen', 'Grammatik: Ziele ausdrücken mit damit, um … zu und zum'], [
    text('m1-text', `**Die Planerin.** Sonntagabend steht Hatice zwei Stunden in der Küche. Sie [[vorkochen|kocht vor]], damit sie unter der Woche nicht jeden Tag überlegen muss, was es gibt. In ihrem Kühlschrank stehen fünf Dosen mit Reis, Gemüse und Linsen. „Ich mache das, um Geld zu sparen und um mittags etwas Richtiges zu essen“, sagt sie.

**Der Snacker.** Lennart isst nie richtig, aber immer ein bisschen. Ein Brötchen im Bus, Kekse am Schreibtisch, abends Chips vor dem Fernseher. Zum Kochen hat er keine Lust. Am Nachmittag bekommt er oft [[Heißhunger]] und geht zum Automaten, um sich einen Schokoriegel zu holen.

**Die Genießerin.** Für Odile ist Essen kein Problem, das man lösen muss. Sie kauft auf dem Markt ein, damit das Gemüse frisch ist, und nimmt sich Zeit zum Essen. Das Handy bleibt in der Tasche. „Ich esse langsam, um zu merken, wann ich satt bin.“

**Der Vernünftige.** Tobias liest jedes Etikett. Er isst [[Vollkorn]]brot, zählt Eiweiß und trinkt drei Liter Wasser am Tag, um fit zu bleiben. Seine [[Ernährung]] ist sehr [[ausgewogen]]. Nur seine Freunde laden ihn nicht mehr so gern zum Grillen ein.`,
      { kicker: 'Lesen', title: 'Vier Esstypen', task: 'Lies die Beschreibungen. Welcher Typ bist du?', taskEn: 'Read the descriptions. Which type are you? Notice damit, um … zu and zum.' }),
    match('m1-match', [['Hatice', 'kocht am Sonntag für die ganze Woche'], ['Lennart', 'isst den ganzen Tag kleine Sachen'], ['Odile', 'isst langsam und mit Genuss'], ['Tobias', 'achtet genau auf gesunde Ernährung']],
      { task: 'Wer isst wie?', taskEn: 'Who eats how?' }),
    mcq('m1-q1', 'Warum kocht Hatice vor?', ['Weil sie gern am Sonntag kocht.', 'Um Geld zu sparen und mittags gut zu essen.', 'Weil ihr Kühlschrank zu klein ist.'], 1),
    mcq('m1-q2', 'Warum isst Odile langsam?', ['Um zu merken, wann sie satt ist.', 'Damit das Gemüse frisch bleibt.', 'Weil sie wenig Zeit hat.'], 0),
    grammar('m1-gram', 'Ziele und Absichten ausdrücken: Wozu?', {
      intro: 'Finalsätze antworten auf die Frage **Wozu?** oder **Mit welchem Ziel?**',
      head: ['Form', 'Wann?', 'Beispiel'],
      rows: [
        ['**um … zu** + Infinitiv', 'Das Subjekt ist in beiden Satzteilen **gleich**.', '**Ich** esse langsam, **um** satt **zu werden**. (ich esse, ich werde satt)'],
        ['**damit** + Nebensatz', 'Die Subjekte sind **verschieden**. (Bei gleichem Subjekt auch möglich.)', '**Sie** kauft auf dem Markt ein, **damit das Gemüse** frisch **ist**.'],
        ['**zum** + Infinitiv als Nomen', 'kurz, oft im Alltag', '**Zum Kochen** hat er keine Lust. Ich brauche Ruhe **zum Schlafen**.'],
      ],
      notes: [
        'Trennbare Verben: **um** früh **aufzustehen**.',
        '„wollen“ und „möchten“ fallen im Finalsatz weg. Nicht: *um fit bleiben zu wollen*. Richtig: **um fit zu bleiben**.',
        'Nach **zum** schreibt man das Verb groß: zum **E**ssen, zum **L**ernen.',
      ],
      en: 'To express purpose: um … zu + infinitive when the subject is the same in both parts; damit + clause when the subjects differ; zum + capitalized infinitive as a short everyday form.',
    }),
    mcq('m1-q3', '„Ich gehe früh ins Bett, ___ ich morgen fit bin.“', ['um', 'damit', 'zum'], 1, { task: 'Was passt?', taskEn: 'Which fits?' }),
    mcq('m1-q4', '„Ich gehe früh ins Bett, ___ morgen fit zu sein.“', ['um', 'damit', 'zum'], 0),
    gap('m1-gap', ['Ich mache Sport, {{um}} gesund zu bleiben.', 'Ich koche heute mehr, {{damit}} wir morgen auch etwas haben.', 'Er nimmt das Fahrrad, {{um}} Geld zu sparen.', 'Sprich bitte lauter, {{damit}} dich alle verstehen.', 'Ich brauche eine Brille {{zum}} Lesen.', 'Sie stellt den Wecker, {{um}} nicht zu verschlafen.'],
      { task: 'um, damit oder zum?', taskEn: 'um, damit or zum? Check whether the subject is the same.' }),
    gap('m1-gap2', ['Ich gehe in die Apotheke. Ich will Hustensaft kaufen. → Ich gehe in die Apotheke, um Hustensaft {{zu kaufen}}.', 'Sie trinkt Tee. Sie will besser schlafen. → Sie trinkt Tee, um besser {{zu schlafen}}.', 'Er steht früh auf. Er will joggen gehen. → Er steht früh auf, um joggen {{zu gehen}}.', 'Wir kaufen frisch ein. Wir wollen heute Abend kochen. → Wir kaufen frisch ein, um heute Abend {{zu kochen}}.'],
      { task: 'Verbinde die Sätze mit um … zu.', taskEn: 'Join the sentences with um … zu. Type "zu" + infinitive.' }),
    order('m1-order', ['Sie kocht', 'am Sonntag vor,', 'damit', 'sie', 'unter der Woche', 'Zeit hat.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence.', hint: 'damit + Verb am Ende' }),
    compose('m1-comp', 'Was tust du für deine Gesundheit, und wozu? Bau vier Sätze.', [
      ['Bewegung, mit „um … zu“.', 'Exercise, with "um … zu".', ['Ich gehe', 'jeden Tag', 'zu Fuß zur Arbeit,', 'um mich mehr', 'zu bewegen.']],
      ['Essen, mit „damit“.', 'Food, with "damit".', ['Ich koche', 'am Wochenende vor,', 'damit', 'das Essen', 'für drei Tage', 'reicht.']],
      ['Schlaf, mit „um … zu“.', 'Sleep, with "um … zu".', ['Abends', 'lege ich', 'das Handy weg,', 'um besser', 'zu schlafen.']],
      ['Entspannung, mit „zum“.', 'Relaxing, with "zum".', ['Zum Entspannen', 'höre ich', 'gern', 'ruhige Musik.']],
    ], { task: 'Erzähl von deinen Gewohnheiten.', taskEn: 'Talk about your habits.' }),
  ]);

const modul2 = section('modul-2', 'modul', 'Modul 2', 'Gesund und munter', 'sky', 20,
  ['kurze Magazintexte verstehen', 'Informationen einfach weitergeben', 'eine kurze Präsentation aufbauen'], [
    text('m2-text', `**Kalt duschen macht wach, aber nicht gesünder.** Viele Menschen duschen morgens kalt, um ihre [[Abwehrkräfte]] zu stärken. Bewiesen ist das nicht eindeutig. Sicher ist: Kaltes Wasser bringt den [[Kreislauf]] in Schwung. Wer es probieren will, beginnt mit dreißig Sekunden am Ende der warmen Dusche. Menschen mit Herzproblemen sollten vorher mit ihrer Ärztin sprechen.

**Sitzen ist das neue Rauchen?** Der Satz ist übertrieben, hat aber einen wahren Kern. Wer acht Stunden täglich sitzt, bekommt häufiger Rückenschmerzen und einen [[verspannt|verspannten]] Nacken. Schon kleine Pausen helfen: alle dreißig Minuten aufstehen, sich [[dehnen]], beim Telefonieren herumgehen. Zwei Minuten Bewegung pro halbe Stunde machen einen messbaren Unterschied.

**Wer lacht, lernt besser.** Beim Lachen atmen wir tiefer, die Muskeln im Gesicht und im Bauch arbeiten, und danach sind wir entspannter. In einem Versuch sahen Studierende vor einer Prüfung zehn Minuten lang lustige Videos. Sie erinnerten sich danach besser an den Lernstoff als die Vergleichsgruppe. Die Forschenden vermuten, dass Lachen Stress abbaut und Stress das Erinnern blockiert.`,
      { kicker: 'Lesen', title: 'Kurz und gesund: drei Meldungen', task: 'Lies die drei kurzen Texte.', taskEn: 'Read the three short magazine pieces.' }),
    mcq('m2-q1', 'Was ist beim kalten Duschen sicher?', ['Es stärkt die Abwehrkräfte.', 'Es bringt den Kreislauf in Schwung.', 'Es ist für alle Menschen ungefährlich.'], 1, { task: 'Hast du die Texte verstanden?', taskEn: 'Check your understanding.' }),
    mcq('m2-q2', 'Was hilft gegen die Folgen von langem Sitzen?', ['abends eine Stunde joggen', 'ein teurer Bürostuhl', 'alle dreißig Minuten kurz aufstehen und sich bewegen'], 2),
    mcq('m2-q3', 'Warum erinnerten sich die Studierenden besser?', ['Wahrscheinlich, weil Lachen Stress abbaut.', 'Weil die Videos den Lernstoff erklärten.', 'Weil sie länger gelernt hatten.'], 0),
    tip('m2-tip', 'Strategie: Informationen vereinfacht weitergeben', 'Wenn du einen Text für andere zusammenfasst: **1.** Sag zuerst das Thema in einem Satz. **2.** Nenne höchstens zwei wichtige Informationen. **3.** Benutze einfache Wörter statt Fachwörtern: *Abwehrkräfte* → *der Schutz des Körpers gegen Krankheiten*.'),
    phrases('m2-phr', 'Redemittel: eine kurze Präsentation halten', {
      'Einleitung': ['Ich möchte euch heute etwas über … erzählen.', 'In meiner Präsentation geht es um …', 'Zuerst spreche ich über …, danach über …'],
      'Hauptteil': ['Ein wichtiger Punkt ist, dass …', 'Ein Beispiel dafür ist …', 'Das bedeutet, dass …', 'Damit komme ich zum nächsten Punkt.'],
      'Schluss': ['Zusammenfassend kann man sagen, dass …', 'Mein Tipp für euch: …', 'Vielen Dank fürs Zuhören. Habt ihr Fragen?'],
    }),
    sort('m2-sort', ['Einleitung', 'Hauptteil', 'Schluss'], [['In meiner Präsentation geht es um Schlaf.', 0], ['Ein wichtiger Punkt ist die Schlafdauer.', 1], ['Vielen Dank fürs Zuhören.', 2], ['Zuerst spreche ich über die Forschung.', 0], ['Ein Beispiel dafür ist ein Versuch mit Studierenden.', 1], ['Zusammenfassend kann man sagen, dass Pausen wichtig sind.', 2]],
      { task: 'Zu welchem Teil der Präsentation gehört der Satz?', taskEn: 'Which part of a presentation does the sentence belong to?' }),
    gap('m2-gap', ['In meiner Präsentation {{geht}} es um Bewegung im Büro.', 'Ein wichtiger {{Punkt}} ist, dass wir zu viel sitzen.', 'Ein {{Beispiel}} dafür sind Rückenschmerzen.', '{{Zusammenfassend}} kann man sagen, dass kleine Pausen helfen.', 'Vielen Dank fürs {{Zuhören}}.'],
      { bank: ['Zuhören', 'Punkt', 'geht', 'Beispiel', 'Zusammenfassend'], task: 'Ergänze die Redemittel.', taskEn: 'Complete the phrases.' }),
    compose('m2-comp', 'Du stellst im Kurs die Meldung **„Sitzen ist das neue Rauchen?“** vor. Bau deine Mini-Präsentation.', [
      ['Einleitung: Nenne das Thema.', 'Introduction: name the topic.', ['Ich möchte euch', 'heute', 'etwas über', 'langes Sitzen', 'erzählen.']],
      ['Hauptteil: Nenne das Problem.', 'Main part: name the problem.', ['Wer', 'acht Stunden täglich sitzt,', 'bekommt', 'häufiger', 'Rückenschmerzen.']],
      ['Hauptteil: Nenne die Lösung.', 'Main part: name the solution.', ['Deshalb', 'sollte man', 'alle dreißig Minuten', 'kurz aufstehen.']],
      ['Schluss: Gib einen Tipp.', 'Conclusion: give a tip.', ['Mein Tipp für euch:', 'Geht', 'beim Telefonieren', 'einfach herum.']],
    ], { task: 'Bau eine kurze Präsentation.', taskEn: 'Build a short presentation.' }),
  ]);

const modul3 = section('modul-3', 'modul', 'Modul 3', 'Mach mit!', 'lilac', 25,
  ['eine Radiosendung über sportliche Leistungen verstehen', 'über Sport sprechen', 'Grammatik: Verben mit Präpositionen, da(r)- und wo(r)-'], [
    audio('m3-audio', 'Hören: Radiosendung „Menschen in Bewegung“', [
      ['moderatorin', 'In unserer Sendung geht es heute um Menschen, die sich für eine besondere sportliche Leistung entschieden haben. Mein erster Gast ist 78 Jahre alt und schwimmt jeden Morgen in der Nordsee. Herr Hansen, auch im Januar?'],
      ['opaFiete', 'Auch im Januar. Bei vier Grad Wassertemperatur. Man gewöhnt sich daran.'],
      ['moderatorin', 'Woran denken Sie, wenn Sie ins Wasser gehen?'],
      ['opaFiete', 'An nichts. Das ist ja das Schöne. Die ersten zehn Sekunden muss ich mich überwinden. Danach freue ich mich nur noch auf den heißen Tee.'],
      ['moderatorin', 'Wie lange bleiben Sie drin?'],
      ['opaFiete', 'Zwei Minuten, nicht länger. Und nie allein. Darauf achten wir in unserer Gruppe sehr.'],
      ['moderatorin', 'Mein zweiter Gast kommt aus Innsbruck und läuft Berge hinauf. Resi, du nimmst im Sommer an einem Berglauf teil. Worum geht es dabei?'],
      ['resi', 'Es geht um zwölf Kilometer und tausendvierhundert Höhenmeter. Man läuft vom Tal bis zum Gipfel.'],
      ['moderatorin', 'Wie bereitest du dich darauf vor?'],
      ['resi', 'I trainier viermal in der Woche. Am meisten ärgere ich mich über das Wetter, weil ich bei Gewitter nicht laufen kann. Aber ich träume schon lange von diesem Lauf.'],
      ['moderatorin', 'Und worüber freust du dich am meisten, wenn du oben ankommst?'],
      ['resi', 'Über die Aussicht. Und über die Knödel in der Hütte.'],
    ], { task: 'Welche Sportarten machen die beiden Gäste?', taskEn: 'What sports do the two guests do? Listen for woran, darauf, worum, worüber.', note: 'Tirolerisch: **I trainier** = Ich trainiere. Norddeutsch: Opa Fiete spricht langsam und trocken.' }),
    mcq('m3-q1', 'Wie lange bleibt Herr Hansen im Wasser?', ['zwei Minuten', 'zehn Sekunden', 'zehn Minuten'], 0, { task: 'Fragen zur Sendung', taskEn: 'Questions about the program.' }),
    mcq('m3-q2', 'Worauf achtet seine Gruppe?', ['dass das Wasser warm ist', 'dass niemand allein schwimmt', 'dass alle schnell schwimmen'], 1),
    mcq('m3-q3', 'Worüber ärgert sich Resi?', ['über das Wetter', 'über die anderen Läufer', 'über ihre Schuhe'], 0),
    grammar('m3-gram', 'Verben mit Präpositionen', {
      intro: 'Viele Verben haben eine feste Präposition. Die Präposition bestimmt den Kasus. Lern Verb, Präposition und Kasus immer zusammen.',
      head: ['Verb + Präposition', 'Kasus', 'Beispiel'],
      rows: [
        ['sich freuen **auf** (Zukunft)', 'Akkusativ', 'Ich freue mich **auf den** Tee.'],
        ['sich freuen **über** (jetzt oder Vergangenheit)', 'Akkusativ', 'Ich freue mich **über die** Aussicht.'],
        ['sich ärgern **über**, sich gewöhnen **an**, denken **an**, achten **auf**, sich vorbereiten **auf**, sich entscheiden **für**, sich interessieren **für**', 'Akkusativ', 'Ich denke **an den** Urlaub.'],
        ['teilnehmen **an**, träumen **von**, es geht **um** (Akk.!), Angst haben **vor**, sich beschäftigen **mit**, sprechen **mit**', 'Dativ (außer um)', 'Sie nimmt **an einem** Berglauf teil.'],
      ],
      en: 'Many verbs take a fixed preposition which decides the case. Learn them as a unit: sich freuen auf + accusative (looking forward), sich freuen über + accusative (being glad about), teilnehmen an + dative, träumen von + dative.',
    }),
    grammar('m3-gram2', 'da(r)- und wo(r)-', {
      intro: 'Bei **Sachen** benutzt man statt Präposition + Pronomen ein Wort mit **da-** (Antwort, Verweis) oder **wo-** (Frage). Vor einem Vokal steht ein **r**: da**r**auf, wo**r**über.',
      head: ['', 'Sache', 'Person'],
      rows: [
        ['Frage', '**Worauf** freust du dich? **Woran** denkst du?', '**Auf wen** wartest du? **An wen** denkst du?'],
        ['Antwort', 'Ich freue mich **darauf**. Ich denke **daran**.', 'Ich warte **auf ihn**. Ich denke **an sie**.'],
      ],
      notes: ['da(r)- kann auch auf einen ganzen Satz zeigen: *Ich freue mich **darauf**, dich zu sehen.*'],
      en: 'For things, use da(r)- + preposition instead of preposition + pronoun (darauf, daran, darüber) and wo(r)- for questions (worauf, woran). For people, keep the preposition + pronoun: auf ihn, an wen.',
    }),
    match('m3-match', [['sich freuen', 'auf / über'], ['teilnehmen', 'an'], ['träumen', 'von'], ['sich interessieren', 'für'], ['Angst haben', 'vor'], ['sich beschäftigen', 'mit'], ['es geht', 'um']],
      { task: 'Welche Präposition gehört zum Verb?', taskEn: 'Which preposition goes with the verb?' }),
    gap('m3-gap', ['Ich freue mich {{auf}} das Wochenende. (Es ist erst Mittwoch.)', 'Sie ärgert sich {{über}} das schlechte Wetter.', 'Er nimmt {{an}} einem Marathon teil.', 'Wir interessieren uns {{für}} gesunde Ernährung.', 'Ich habe Angst {{vor}} dem Zahnarzt.', 'Sie träumt {{von}} einer Reise nach Island.'],
      { task: 'Ergänze die Präposition.', taskEn: 'Fill in the preposition.' }),
    gap('m3-gap2', ['{{Worauf}} freust du dich? Auf den Urlaub.', 'Kennst du den Berglauf? Ja, ich habe schon {{davon}} gehört.', '{{Woran}} denkst du gerade? An das Abendessen.', 'Morgen ist die Prüfung. Ich habe mich gut {{darauf}} vorbereitet.', '{{Worüber}} ärgerst du dich? Über die Verspätung.'],
      { bank: ['Worauf', 'Woran', 'Worüber', 'davon', 'darauf'], task: 'da(r)- oder wo(r)-?', taskEn: 'da(r)- or wo(r)-?' }),
    mcq('m3-q4', '„Ich warte auf meine Schwester.“ Welche Frage passt?', ['Worauf wartest du?', 'Auf wen wartest du?', 'Wo wartest du?'], 1, { why: 'Bei Personen: Präposition + wen/wem. Bei Sachen: wo(r)- + Präposition.' }),
    order('m3-order', ['Ich habe', 'mich', 'lange', 'auf diesen Lauf', 'vorbereitet.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence.' }),
  ]);

const kommunikation = section('kommunikation', 'kommunikation', 'Alltag und Beruf', 'Was fehlt Ihnen denn?', 'rose', 20,
  ['Gespräche in der Apotheke führen', 'über gesundheitliche Probleme sprechen', 'Ratschläge geben und verstehen'], [
    text('k-intro', 'Mit leichten [[Beschwerden]] geht man im deutschsprachigen Raum oft zuerst in die [[Apotheke]]. Dort bekommt man [[rezeptfrei|rezeptfreie]] Medikamente und eine kurze Beratung. Für stärkere Mittel braucht man ein [[Rezept]] vom Arzt.', { kicker: 'Zum Einstieg' }),
    audio('k-a1', 'Gespräch 1: In der Apotheke (Bern)', [
      ['urs', 'Grüessech. Was kann ich für Sie tun?'],
      ['priya', 'Guten Tag. Ich habe seit drei Tagen Halsschmerzen und einen trockenen Husten. Haben Sie etwas dagegen?'],
      ['urs', 'Haben Sie auch Fieber?'],
      ['priya', 'Nein, Fieber habe ich nicht. Nur abends bin ich sehr müde.'],
      ['urs', 'Gut. Dann empfehle ich Ihnen diese Lutschtabletten gegen die Halsschmerzen und einen Hustensaft. Beides ist rezeptfrei.'],
      ['priya', 'Wie oft muss ich den Saft einnehmen?'],
      ['urs', 'Dreimal täglich einen Löffel, am besten nach dem Essen. Und trinken Sie viel, mindestens zwei Liter am Tag.'],
      ['priya', 'Gibt es Nebenwirkungen?'],
      ['urs', 'Der Saft kann ein wenig müde machen. Fahren Sie danach lieber nicht Auto. Und wenn es in drei, vier Tagen nicht besser ist, gehen Sie bitte zum Arzt.'],
      ['priya', 'Das mache ich. Was bekommen Sie?'],
      ['urs', 'Das macht zusammen achtzehn Franken fünfzig.'],
    ], { task: 'Welche Beschwerden hat Priya?', taskEn: 'What symptoms does Priya have? Urs speaks Swiss Standard German and the price is in francs.', note: 'Schweizerisch: **Grüessech** = Guten Tag. In der Schweiz bezahlt man mit **Franken**.' }),
    mcq('k-q1', 'Welche Beschwerden hat Priya?', ['Fieber und Kopfschmerzen', 'Halsschmerzen und Husten', 'Bauchschmerzen'], 1),
    mcq('k-q2', 'Wie soll sie den Hustensaft einnehmen?', ['dreimal täglich nach dem Essen', 'einmal täglich vor dem Schlafen', 'zweimal täglich vor dem Essen'], 0),
    mcq('k-q3', 'Wann soll sie zum Arzt gehen?', ['sofort', 'wenn es nach drei bis vier Tagen nicht besser ist', 'nächsten Monat'], 1),
    audio('k-a2', 'Gespräch 2: Unter Kollegen (München)', [
      ['elif', 'Sepp, du siehst nicht gut aus. Ist alles in Ordnung?'],
      ['seppi', 'Ach, mei Kreuz. I hab mi gestern beim Umzug von meiner Tochter verhoben. Seitdem kann i mi kaum bücken.'],
      ['elif', 'Oje. Warst du schon beim Arzt?'],
      ['seppi', 'Na, des wird scho wieder.'],
      ['elif', 'An deiner Stelle würde ich trotzdem hingehen. Mit dem Rücken ist nicht zu spaßen. Mein Bruder hat zu lange gewartet und war dann sechs Wochen krankgeschrieben.'],
      ['seppi', 'Sechs Wochen? Des mog i ned.'],
      ['elif', 'Eben. Und bis dahin: Wärme hilft. Hast du eine Wärmflasche?'],
      ['seppi', 'Dahoam scho.'],
      ['elif', 'Dann geh heute früher nach Hause. Ich sage dem Chef Bescheid. Und du solltest auf keinen Fall die Kisten da tragen.'],
      ['seppi', 'Du bist a Guade, Elif. Dank dir.'],
    ], { task: 'Was rät Elif ihrem Kollegen?', taskEn: 'What does Elif advise her colleague? Sepp speaks Bavarian.',
      note: 'Bairisch: **mei Kreuz** = mein Rücken. **I hab mi verhoben** = Ich habe mich beim Heben verletzt. **Des wird scho wieder** = Das wird schon wieder gut. **Des mog i ned** = Das möchte ich nicht. **dahoam** = zu Hause. **a Guade** = eine Gute.' }),
    mcq('k-q4', 'Was ist mit Sepp passiert?', ['Er hat sich beim Umzug am Rücken verletzt.', 'Er hat Fieber.', 'Er ist beim Sport gestürzt.'], 0),
    mcq('k-q5', 'Welchen Rat gibt Elif **nicht**?', ['zum Arzt gehen', 'Wärme benutzen', 'kalt duschen'], 2),
    phrases('k-phr', 'Redemittel: Beschwerden und Ratschläge', {
      'Beschwerden beschreiben': ['Ich habe seit drei Tagen Halsschmerzen.', 'Mir tut der Rücken weh.', 'Mir ist schwindelig / übel.', 'Haben Sie etwas gegen Husten?'],
      'in der Apotheke nachfragen': ['Wie oft muss ich das einnehmen?', 'Gibt es Nebenwirkungen?', 'Ist das rezeptfrei?', 'Vor oder nach dem Essen?'],
      'einen Rat geben': ['An deiner Stelle würde ich zum Arzt gehen.', 'Du solltest dich ausruhen.', 'Am besten trinkst du viel Tee.', 'Gute Besserung!'],
    }),
    gap('k-gap', ['Ich habe {{seit}} drei Tagen Kopfschmerzen.', 'Haben Sie etwas {{gegen}} Husten?', 'Mir {{tut}} der Hals weh.', 'An deiner {{Stelle}} würde ich zum Arzt gehen.', 'Du {{solltest}} dich ausruhen.', 'Gute {{Besserung}}!'],
      { bank: ['Besserung', 'Stelle', 'seit', 'solltest', 'tut', 'gegen'], task: 'Ergänze.', taskEn: 'Complete the sentences.' }),
    sort('k-sort', ['Das sagt die Kundin', 'Das sagt der Apotheker'], [['Haben Sie etwas gegen Halsschmerzen?', 0], ['Haben Sie auch Fieber?', 1], ['Gibt es Nebenwirkungen?', 0], ['Dreimal täglich nach dem Essen.', 1], ['Ist das rezeptfrei?', 0], ['Das kann müde machen.', 1]],
      { task: 'Wer sagt das?', taskEn: 'Who says it?' }),
    compose('k-comp', 'Du bist krank und schreibst deiner Chefin eine kurze Nachricht.', [
      ['Sag, dass du krank bist.', 'Say that you are ill.', ['Guten Morgen Frau Albers,', 'leider', 'bin ich', 'heute krank.']],
      ['Beschreib die Beschwerden.', 'Describe the symptoms.', ['Ich habe', 'seit gestern Abend', 'Fieber', 'und starke Halsschmerzen.']],
      ['Sag, was du tust.', 'Say what you are doing.', ['Ich gehe', 'gleich', 'zum Arzt', 'und schicke Ihnen', 'die Krankschreibung.']],
      ['Sag, wann du dich wieder meldest.', 'Say when you will be in touch.', ['Morgen', 'melde ich mich', 'wieder', 'bei Ihnen.']],
    ], { task: 'Bau eine Krankmeldung.', taskEn: 'Build a sick-day message.' }),
  ]);

const grammatik = section('grammatik', 'grammatik', 'Grammatik im Blick', 'Alles auf einen Blick', 'peach', 12,
  ['Finalsätze wiederholen', 'Verben mit Präpositionen wiederholen'], [
    grammar('g-1', 'Finalsätze: Wozu?', {
      head: ['Form', 'Subjekt', 'Beispiel'],
      rows: [['um … zu + Infinitiv', 'gleich', 'Ich jogge, **um** fit **zu bleiben**.'], ['damit + Verb am Ende', 'verschieden (oder gleich)', 'Ich koche, **damit** die Kinder etwas Warmes **haben**.'], ['zum + Nomen aus Infinitiv', '', 'Ich brauche Zeit **zum Entspannen**.']],
    }),
    grammar('g-2', 'Wichtige Verben mit Präpositionen', {
      head: ['+ Akkusativ', '+ Dativ'],
      rows: [
        ['achten auf, sich freuen auf/über, sich ärgern über, denken an, sich gewöhnen an, sich interessieren für, sich entscheiden für, sich kümmern um, warten auf, sich vorbereiten auf', 'teilnehmen an, träumen von, Angst haben vor, sich beschäftigen mit, sprechen mit/von, sich erholen von, leiden an/unter, abhängen von'],
      ],
    }),
    grammar('g-3', 'da(r)- und wo(r)-', {
      head: ['Präposition', 'Frage (Sache)', 'Verweis (Sache)'],
      rows: [['auf', 'worauf', 'darauf'], ['an', 'woran', 'daran'], ['über', 'worüber', 'darüber'], ['für', 'wofür', 'dafür'], ['von', 'wovon', 'davon'], ['mit', 'womit', 'damit'], ['um', 'worum', 'darum'], ['vor', 'wovor', 'davor']],
      notes: ['Achtung: **damit** kann auch „mit dieser Sache“ bedeuten: *Hier ist ein Messer. Schneid das Brot **damit**.*'],
    }),
    gap('g-gap', ['Ich lerne Deutsch, {{um}} in Wien zu studieren.', 'Ich erkläre es noch einmal, {{damit}} es alle verstehen.', '{{Wofür}} interessierst du dich? Für Musik.', 'Der Urlaub war toll. Ich denke oft {{daran}}.', 'Sie nimmt {{an}} einem Kochkurs teil.'],
      { task: 'Ergänze.', taskEn: 'Fill in.' }),
    mcq('g-q1', 'Welcher Satz ist richtig?', ['Ich gehe zum Arzt, um er mir hilft.', 'Ich gehe zum Arzt, damit er mir hilft.', 'Ich gehe zum Arzt, damit mir zu helfen.'], 1, { task: 'Wähle den richtigen Satz.', taskEn: 'Choose the correct sentence.' }),
    mcq('g-q2', '„Ich träume von einem Haus am Meer.“ Die Frage dazu:', ['Wovon träumst du?', 'Von wem träumst du?', 'Worauf träumst du?'], 0),
  ]);

const uebungen = section('uebungen', 'uebung', 'Übungen', 'Training: Körper und Gesundheit', 'butter', 20,
  ['Wortschatz zum Thema Körper und Gesundheit festigen', 'richtig schreiben: s, ss oder ß', 'Aussprache: s-Laute'], [
    gap('u-gap1', ['Ich bin erkältet und muss ständig {{husten}}.', 'Nach dem Sport sollte man sich {{dehnen}}.', 'Bitte {{nehmen}} Sie die Tabletten nach dem Essen ein.', 'Der Arzt hat mich für drei Tage {{krankgeschrieben}}.', 'Bei Fieber muss man sich {{ausruhen}}.', 'Ich habe mir beim Fußball das Knie {{verletzt}}.'],
      { bank: ['husten', 'dehnen', 'nehmen', 'krankgeschrieben', 'ausruhen', 'verletzt'], task: 'Welches Wort passt?', taskEn: 'Which word fits?' }),
    match('u-match', [['das Fieber', 'messen'], ['ein Rezept', 'ausstellen'], ['eine Tablette', 'einnehmen'], ['einen Termin', 'vereinbaren'], ['den Blutdruck', 'kontrollieren'], ['eine Salbe', 'auftragen']],
      { task: 'Welches Verb passt?', taskEn: 'Which verb fits?' }),
    sort('u-sort', ['Das tut dem Körper gut', 'Das schadet dem Körper'], [['genug Schlaf', 0], ['Rauchen', 1], ['regelmäßige Bewegung', 0], ['zu viel Zucker', 1], ['frisches Gemüse', 0], ['Dauerstress', 1], ['Pausen an der frischen Luft', 0]],
      { task: 'Gut oder schlecht für den Körper?', taskEn: 'Good or bad for the body?' }),
    grammar('u-gram', 'Richtig schreiben: s, ss oder ß?', {
      head: ['Schreibung', 'Regel', 'Beispiele'],
      rows: [
        ['**ss**', 'nach einem **kurzen** Vokal', 'e**ss**en, der Flu**ss**, mü**ss**en, das Wa**ss**er, sie i**ss**t'],
        ['**ß**', 'nach einem **langen** Vokal oder nach au, ei, eu, äu, ie', 'der Fu**ß**, die Stra**ß**e, hei**ß**, drau**ß**en, gro**ß**, sie a**ß**'],
        ['**s**', 'am Wortanfang vor Vokal (stimmhaft) und wenn die Wortfamilie nur ein s hat', '**S**onne, **s**ieben, rei**s**en, das Hau**s** (die Häuser)'],
      ],
      notes: ['In der Schweiz gibt es kein ß. Dort schreibt man immer ss: Strasse, heiss, Fuss.'],
      en: 'ss after a short vowel (essen, Wasser), ß after a long vowel or diphthong (Fuß, heiß, Straße). Switzerland uses ss everywhere.',
    }),
    sort('u-sort2', ['ss', 'ß'], [['hei_ (sehr warm)', 1], ['e_en (zu Mittag)', 0], ['der Fu_', 1], ['das Wa_er', 0], ['du mu_t', 0], ['die Stra_e', 1], ['drau_en', 1], ['der Flu_', 0], ['gro_', 1], ['der Schlü_el', 0]],
      { task: 'ss oder ß? Ordne die Wörter zu.', taskEn: 'ss or ß? Short vowel → ss, long vowel or diphthong → ß.' }),
    audio('u-aus', 'Aussprache: s-Laute', [
      ['erzaehler', 'Am Wortanfang vor einem Vokal ist das S stimmhaft. Es summt wie eine Biene: Sonne. Suppe. sieben. sehr gesund.'],
      ['erzaehler', 'Doppel-S und Eszett sind immer stimmlos. Sie zischen: Wasser. essen. heiß. Fuß.'],
      ['jonas', 'S P und S T am Wortanfang spricht man wie „schp“ und „scht“: Sport. Spaß. Stress. stehen.'],
      ['jonas', 'Alles zusammen: Susi isst heiße Suppe und stellt sich später zum Sport an.'],
    ], { task: 'Hör zu und sprich nach.', taskEn: 'Listen and repeat. Initial s before a vowel is voiced like English "z". ss and ß are voiceless. sp- and st- at the start of a word sound like "shp" and "sht".' }),
    mcq('u-q1', 'Wie spricht man das S in „Sport“ und „Stress“?', ['wie „s“', 'wie „sch“', 'gar nicht'], 1),
    mcq('u-q2', 'In welchem Wort ist das S stimmhaft (summend)?', ['Wasser', 'Fuß', 'Sonne'], 2),
  ]);

const wortschatz = section('wortschatz', 'wortschatz', 'Wortschatz und Check', 'Das kann ich jetzt', 'mint', 10,
  ['die wichtigsten Wörter wiederholen', 'den eigenen Stand einschätzen'], [
    cards('w-cards', [
      ['die Ernährung', 'alles, was man isst und trinkt', 'nutrition'], ['ausgewogen', 'von allem etwas', 'balanced'], ['der Heißhunger', 'plötzlicher starker Hunger', 'craving'],
      ['die Abwehrkräfte', 'Schutz des Körpers gegen Krankheiten', 'immune defenses'], ['sich dehnen', 'die Muskeln lang ziehen', 'to stretch'], ['sich überwinden', 'etwas trotz Unlust tun', 'to force oneself'],
      ['die Beschwerden', 'Schmerzen oder Gesundheitsprobleme', 'symptoms'], ['rezeptfrei', 'ohne Rezept erhältlich', 'over the counter'], ['die Nebenwirkung', 'unerwünschte Wirkung eines Medikaments', 'side effect'],
      ['ein Medikament einnehmen', 'ein Medikament schlucken', 'to take medicine'], ['die Krankschreibung', 'Papier vom Arzt für den Arbeitgeber', 'sick note'], ['Gute Besserung!', 'Wunsch für eine kranke Person', 'Get well soon!'],
    ]),
    checklist('w-check', ['Ich kann Beschreibungen von Essgewohnheiten verstehen.', 'Ich kann mit um … zu, damit und zum Ziele ausdrücken.', 'Ich kann kurze Texte über Gesundheit einfach wiedergeben.', 'Ich kann eine kurze Präsentation aufbauen.', 'Ich kenne wichtige Verben mit Präpositionen.', 'Ich kann mit wo(r)- fragen und mit da(r)- antworten.', 'Ich kann in der Apotheke meine Beschwerden beschreiben und nachfragen.']),
    mcq('w-q1', '„Ich gehe spazieren, ___ den Kopf frei zu bekommen.“', ['damit', 'um', 'zum'], 1, { task: 'Letzter Check vor der Prüfung', taskEn: 'Last check before the exam.' }),
    mcq('w-q2', '„___ freust du dich am meisten?“ „Auf die Ferien.“', ['Worauf', 'Worüber', 'Auf wen'], 0),
  ]);

export const kapitel6: Chapter = {
  id: 'kapitel-6', number: 6, title: 'Gut in Form', theme: 'Körper, Gesundheit, Ernährung',
  grammar: 'Finalsätze mit damit, um … zu und zum. Verben mit Präpositionen, da(r)- und wo(r)-.',
  sections: [einstieg, modul1, modul2, modul3, kommunikation, grammatik, uebungen, wortschatz],
  games: ['k6-sprint', 'k6-memory', 'k6-satzbau', 'k6-artikel'],
  exam: [
    x(1, mcq('x1', '„Ich lerne jeden Tag, ___ die Prüfung zu bestehen.“', ['damit', 'um', 'weil'], 1)),
    x(1, mcq('x2', '„Ich schreibe dir die Adresse auf, ___ du sie nicht vergisst.“', ['damit', 'um', 'zum'], 0)),
    x(1, mcq('x3', '„Ich brauche einen ruhigen Ort ___ Arbeiten.“', ['um', 'zum', 'damit'], 1)),
    x(4, gap('x4', ['Sie interessiert sich {{für}} Medizin.', 'Wir warten {{auf}} den Bus.', 'Er hat Angst {{vor}} Spritzen.', 'Ich denke oft {{an}} meine Familie.'], { task: 'Ergänze die Präposition.' })),
    x(3, gap('x5', ['{{Wovon}} träumst du? Von einem eigenen Garten.', 'Die Prüfung ist morgen. Ich habe keine Angst {{davor}}.', '{{Worüber}} freust du dich? Über das Geschenk.'], { bank: ['davor', 'Wovon', 'Worüber'], task: 'da(r)- oder wo(r)-?' })),
    x(1, mcq('x6', 'Was hat Dragana an ihrem Alltag geändert?', ['Sie fährt mit dem Rad und macht Pausen.', 'Sie arbeitet nur noch halbtags.', 'Sie geht jeden Abend ins Fitnessstudio.'], 0),
      text('x-st1', 'Dragana Ilić arbeitet als Buchhalterin und saß früher zehn Stunden am Tag: im Auto, im Büro, abends auf dem Sofa. Mit Mitte dreißig bekam sie starke Rückenschmerzen. Ihre Ärztin verschrieb ihr keine Tabletten, sondern Bewegung. Seitdem fährt Dragana mit dem Fahrrad zur Arbeit, um schon morgens zwanzig Minuten in Bewegung zu sein. Im Büro hat sie sich einen Wecker gestellt, damit sie jede Stunde aufsteht. In der Mittagspause geht sie einmal um den Block. „Am Anfang musste ich mich überwinden“, sagt sie. „Inzwischen habe ich mich so daran gewöhnt, dass mir etwas fehlt, wenn es regnet.“ Die Schmerzen sind nach vier Monaten verschwunden.', { kicker: 'Lesen' })),
    x(1, mcq('x7', 'Wozu hat sie sich im Büro einen Wecker gestellt? (Text oben)', ['um pünktlich nach Hause zu gehen', 'damit sie jede Stunde aufsteht', 'um die Mittagspause nicht zu vergessen'], 1)),
    x(1, mcq('x8', 'Welche Beschwerden hat der Kunde?', ['Kopfschmerzen', 'Schnupfen und Husten', 'Bauchschmerzen'], 0),
      audio('x-st2', 'Hören: In der Apotheke', [
        ['frauHuber', 'Grüß Gott, bitte schön?'],
        ['jonas', 'Guten Tag. Ich habe seit heute Morgen starke Kopfschmerzen. Haben Sie etwas dagegen?'],
        ['frauHuber', 'Ja, diese Tabletten sind rezeptfrei. Nehmen Sie eine Tablette mit viel Wasser.'],
        ['jonas', 'Wie viele darf ich pro Tag nehmen?'],
        ['frauHuber', 'Höchstens drei, und nicht länger als drei Tage hintereinander.'],
        ['jonas', 'Gut. Und gibt es Nebenwirkungen?'],
        ['frauHuber', 'Bei manchen Menschen reagiert der Magen empfindlich. Nehmen Sie die Tablette deshalb nicht auf leeren Magen.'],
      ])),
    x(1, mcq('x9', 'Wie viele Tabletten darf er pro Tag höchstens nehmen? (Hörtext oben)', ['eine', 'drei', 'sechs'], 1)),
    x(2, order('x10', ['Ich gehe', 'in die Apotheke,', 'um', 'Hustensaft', 'zu kaufen.'], { task: 'Bau den Satz.' })),
    x(2, order('x11', ['An deiner Stelle', 'würde ich', 'zum Arzt', 'gehen.'], { task: 'Bau den Ratschlag.' })),
    x(3, gap('x12', ['Haben Sie etwas {{gegen}} Halsschmerzen?', 'Gibt es {{Nebenwirkungen}}?', 'Gute {{Besserung}}!'], { bank: ['Besserung', 'gegen', 'Nebenwirkungen'], task: 'Ergänze.' })),
    x(1, mcq('x13', 'Was ist richtig geschrieben?', ['Die Suppe ist heiss und ich esse sie drausen.', 'Die Suppe ist heiß und ich esse sie draußen.', 'Die Suppe ist heiß und ich eße sie draußen.'], 1)),
    x(1, mcq('x14', '„Sie nimmt ___ einem Yogakurs teil.“', ['an', 'auf', 'für'], 0)),
  ],
};

export const games6: GameDef[] = [
  {
    id: 'k6-sprint', engine: 'sprint', title: 'Präpositionen-Sprint', blurb: '60 Sekunden: Welche Präposition gehört zum Verb?', skill: 'Verben mit Präpositionen', tone: 'mint', chapter: 6, emoji: '⚡',
    rules: 'Du siehst ein Verb. Tippe auf die Präposition, die dazu gehört. Du hast 60 Sekunden.', label: 'Welche Präposition?',
    items: [
      { q: 'warten ___', sub: 'den Bus', a: 'auf', wrong: ['für', 'an'] }, { q: 'sich interessieren ___', sub: 'Sport', a: 'für', wrong: ['an', 'über'] },
      { q: 'teilnehmen ___', sub: 'einem Kurs', a: 'an', wrong: ['in', 'auf'] }, { q: 'träumen ___', sub: 'einer Reise', a: 'von', wrong: ['über', 'an'] },
      { q: 'denken ___', sub: 'den Urlaub', a: 'an', wrong: ['auf', 'über'] }, { q: 'sich ärgern ___', sub: 'das Wetter', a: 'über', wrong: ['auf', 'an'] },
      { q: 'Angst haben ___', sub: 'der Prüfung', a: 'vor', wrong: ['von', 'für'] }, { q: 'sich gewöhnen ___', sub: 'das Klima', a: 'an', wrong: ['auf', 'mit'] },
      { q: 'sich kümmern ___', sub: 'die Kinder', a: 'um', wrong: ['für', 'an'] }, { q: 'sich beschäftigen ___', sub: 'einem Thema', a: 'mit', wrong: ['an', 'über'] },
      { q: 'achten ___', sub: 'die Gesundheit', a: 'auf', wrong: ['an', 'für'] }, { q: 'sich entscheiden ___', sub: 'eine Wohnung', a: 'für', wrong: ['auf', 'über'] },
      { q: 'sich vorbereiten ___', sub: 'die Prüfung', a: 'auf', wrong: ['für', 'an'] }, { q: 'sich erholen ___', sub: 'der Arbeit', a: 'von', wrong: ['aus', 'über'] },
      { q: 'sprechen ___', sub: 'das Problem', a: 'über', wrong: ['an', 'auf'] }, { q: 'abhängen ___', sub: 'dem Wetter', a: 'von', wrong: ['an', 'mit'] },
      { q: 'sich bewerben ___', sub: 'eine Stelle', a: 'um', wrong: ['an', 'über'] }, { q: 'sich erinnern ___', sub: 'den Sommer', a: 'an', wrong: ['auf', 'von'] },
    ],
  },
  {
    id: 'k6-memory', engine: 'memory', title: 'Wo-da-Memory', blurb: 'Finde die Paare: worauf und darauf.', skill: 'da(r)- und wo(r)-', tone: 'lilac', chapter: 6, emoji: '🃏',
    rules: 'Dreh zwei Karten um. Ein Paar ist eine Frage mit der passenden kurzen Antwort.', kinds: ['Frage', 'Antwort'],
    pairs: [['Worauf wartest du?', 'Darauf.'], ['Woran denkst du?', 'Daran.'], ['Worüber lachst du?', 'Darüber.'], ['Wofür ist das?', 'Dafür.'], ['Wovon träumst du?', 'Davon.'], ['Womit schreibst du?', 'Damit.'], ['Worum geht es?', 'Darum.'], ['Wovor hast du Angst?', 'Davor.'], ['Auf wen wartest du?', 'Auf ihn.'], ['An wen denkst du?', 'An sie.']],
  },
  {
    id: 'k6-satzbau', engine: 'satzbau', title: 'Wozu das alles?', blurb: 'Bau Sätze mit um … zu und damit.', skill: 'Finalsätze', tone: 'sky', chapter: 6, emoji: '🧱',
    rules: 'Tippe die Satzteile in der richtigen Reihenfolge an.',
    sentences: [
      { parts: ['Ich mache Sport,', 'um', 'fit', 'zu bleiben.'], hint: 'um … zu + Infinitiv am Ende' },
      { parts: ['Sprich lauter,', 'damit', 'ich dich', 'verstehe.'], hint: 'damit + Verb am Ende' },
      { parts: ['Er steht früh auf,', 'um', 'den Zug', 'nicht zu verpassen.'], hint: 'nicht vor zu + Infinitiv' },
      { parts: ['Zum Einschlafen', 'lese ich', 'ein paar Seiten.'], hint: 'zum + Nomen, dann Verb' },
      { parts: ['Ich habe seit', 'drei Tagen', 'starke', 'Halsschmerzen.'], hint: 'seit + Dativ' },
      { parts: ['Wie oft', 'muss ich', 'die Tabletten', 'einnehmen?'], hint: 'Infinitiv am Ende' },
      { parts: ['Ich freue mich', 'schon sehr', 'auf', 'das Wochenende.'], hint: 'sich freuen auf' },
      { parts: ['Sie nimmt', 'im Sommer', 'an einem Berglauf', 'teil.'], hint: 'trennbar: teilnehmen an' },
      { parts: ['Du solltest', 'dich', 'ein paar Tage', 'ausruhen.'], hint: 'Infinitiv am Ende' },
    ],
  },
  {
    id: 'k6-artikel', engine: 'regen', title: 'Artikelregen: Körper', blurb: 'der, die oder das? Fang die Nomen aus Kapitel 6.', skill: 'Artikel', tone: 'rose', chapter: 6, emoji: '☔',
    rules: 'Ein Nomen fällt herunter. Tippe auf den richtigen Artikel, bevor es unten ankommt. Du hast drei Leben.', buckets: ['der', 'die', 'das'],
    words: artikel('der Rücken, die Schulter, das Knie, der Nacken, die Brust, das Herz, der Magen, die Haut, das Fieber, der Husten, die Tablette, das Rezept, der Arzt, die Apotheke, das Medikament, der Kreislauf, die Ernährung, das Gemüse, der Sport, die Bewegung, das Wasser, der Schlaf, die Pause, das Bein, der Fuß, die Hand'),
  },
];
