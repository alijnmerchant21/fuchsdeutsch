import type { Chapter, GameDef, GlossaryEntry } from '../types';
import { artikel, audio, cards, checklist, compose, gap, grammar, match, mcq, order, overview, phrases, poll, section, sort, text, tip, x } from '../helpers';

// A2 Kapitel 2: Schulzeit, Schulfächer, Schulsystem, Erfahrungen, eigene Meinung.
// Grammar: Modalverben im Präteritum, Possessivartikel im Dativ, Wiederholung Artikel. Aussprache: das e.

export const glossaryA2k2: Record<string, GlossaryEntry> = {
  Schulfach: { de: 'Ein Thema in der Schule, zum Beispiel Mathe oder Kunst.', en: 'school subject' },
  Zeugnis: { de: 'Ein Papier mit allen Noten am Ende vom Schuljahr.', en: 'report card' },
  Note: { de: 'Die Bewertung in der Schule. In Deutschland ist 1 sehr gut und 6 ungenügend.', en: 'grade, mark' },
  Grundschule: { de: 'Die erste Schule für Kinder von 6 bis etwa 10 Jahren.', en: 'elementary school' },
  Gymnasium: { de: 'Eine Schule nach der Grundschule. Sie endet mit dem Abitur.', en: 'academic high school' },
  Abitur: { de: 'Der Abschluss vom Gymnasium. Damit kann man studieren.', en: 'high school diploma (university entrance)' },
  Klassentreffen: { de: 'Ein Treffen von früheren Mitschülern nach vielen Jahren.', en: 'class reunion' },
  Mitschüler: { de: 'Ein Kind oder Jugendlicher aus derselben Klasse.', en: 'classmate' },
  Ausbildung: { de: 'Man lernt einen Beruf in einem Betrieb und in der Berufsschule.', en: 'vocational training' },
  streng: { de: 'Mit vielen Regeln, nicht locker.', en: 'strict' },
  Pausenhof: { de: 'Der Platz draußen vor der Schule, wo Kinder in der Pause spielen.', en: 'schoolyard' },
};

const einstieg = section('einstieg', 'einstieg', 'Einstieg', 'Erinnerst du dich?', 'butter', 8,
  ['das Kapitel kennenlernen', 'Schulfächer benennen'], [
    overview('e-over', 'Kapitel 2: Nach der Schulzeit',
      'Wie war deine Schulzeit? Hattest du ein Lieblingsfach? Musstest du viele Hausaufgaben machen? In Kapitel 2 sprichst du über deine Erinnerungen an die Schule. Du lernst die [[Schulfach|Schulfächer]] und das deutsche Schulsystem kennen: [[Grundschule]], [[Gymnasium]], [[Abitur]] und [[Ausbildung]].\n\nNele geht zu einem [[Klassentreffen]]. Zehn Jahre nach der Schule trifft sie ihre alten [[Mitschüler]] wieder.',
      'This chapter is about school memories, school subjects and the school system in Germany. You will give your opinion and talk about experiences. Grammar: modal verbs in the simple past (musste, konnte, wollte, durfte, sollte) and possessive articles in the dative (mit meinem Lehrer, mit meiner Freundin).',
      ['über die Schulzeit sprechen', 'Schulfächer nennen', 'das Schulsystem verstehen', 'die eigene Meinung sagen']),
    match('e-match', [['Mathe', '➗'], ['Biologie', '🧬'], ['Musik', '🎼'], ['Sport', '🏀'], ['Kunst', '🎨'], ['Erdkunde', '🌍'], ['Chemie', '⚗️'], ['Geschichte', '🏰']],
      { task: 'Welches Schulfach ist das?', taskEn: 'Match the school subject to the picture. Erdkunde = geography.' }),
    poll('e-poll', [['Mathe', 'Deutsch'], ['Sport', 'Kunst'], ['Hausaufgaben am Nachmittag', 'Hausaufgaben am Abend'], ['strenge Lehrer', 'lockere Lehrer']], { task: 'Was war dir lieber?', taskEn: 'Which did you prefer at school? There are no wrong answers.' }),
  ]);

const teil1 = section('teil-1', 'modul', 'Teil 1', 'Meine Schulzeit', 'mint', 15,
  ['Berichte über die Schulzeit verstehen', 'Modalverben im Präteritum'], [
    text('t1-text', `**Forum: Was war dein Lieblingsfach und warum?**

**amara_acc:** In Ghana habe ich eine Schule mit Schuluniform besucht. Wir durften keinen Schmuck tragen. Mein Lieblingsfach war Biologie, weil unsere Lehrerin so spannend erzählen konnte. Schon damals wollte ich in einem Krankenhaus arbeiten.

**felix_wien:** Ich war ein schlechter Schüler. In Mathe musste ich oft Nachhilfe nehmen. Aber Musik! Im Schulorchester konnte ich jeden Tag Gitarre spielen. Das war meine Rettung.

**kenji_kocht:** In Japan putzen die Schüler ihre Schule selbst. Jeden Tag mussten wir zwanzig Minuten den Boden wischen. Damals fand ich das blöd, heute finde ich es gut. In der Kantine durften wir nicht sprechen. Das war streng!`,
      { kicker: 'Lesen', title: 'Erinnerungen an die Schule', task: 'Lies die Forumsbeiträge.', taskEn: 'Read the forum posts about school memories. Nachhilfe = tutoring.' }),
    match('t1-match', [['Amara', 'Lieblingsfach Biologie'], ['Felix', 'Nachhilfe in Mathe'], ['Kenji', 'die Schule putzen']], { task: 'Wer schreibt was?', taskEn: 'Who wrote what?' }),
    mcq('t1-q1', 'Was durften die Schüler in Amaras Schule nicht?', ['Schmuck tragen', 'Biologie lernen', 'sprechen'], 0),
    mcq('t1-q2', 'Was war Felix’ „Rettung“?', ['die Nachhilfe', 'das Schulorchester', 'der Sportunterricht'], 1),
    mcq('t1-q3', 'Wie findet Kenji das Putzen heute?', ['blöd', 'gut', 'langweilig'], 1),
    grammar('t1-gram', 'Modalverben im Präteritum', {
      intro: 'Über die Vergangenheit spricht man bei Modalverben fast immer im **Präteritum**. Die Endungen sind wie bei **hatte**. Die Umlaute fallen weg!',
      head: ['', 'müssen', 'können', 'wollen', 'dürfen', 'sollen'],
      rows: [['ich', 'musste', 'konnte', 'wollte', 'durfte', 'sollte'], ['du', 'musstest', 'konntest', 'wolltest', 'durftest', 'solltest'], ['er/sie/es', 'musste', 'konnte', 'wollte', 'durfte', 'sollte'], ['wir', 'mussten', 'konnten', 'wollten', 'durften', 'sollten'], ['ihr', 'musstet', 'konntet', 'wolltet', 'durftet', 'solltet'], ['sie/Sie', 'mussten', 'konnten', 'wollten', 'durften', 'sollten']],
      notes: ['*Ich **musste** jeden Tag Hausaufgaben **machen**.* Satzklammer wie im Präsens.', 'ich und er/sie/es: gleiche Form, ohne Endung -t.', '**möchten** hat kein Präteritum. Man benutzt **wollte**: *Ich wollte Ärztin werden.*'],
      en: 'Modal verbs in the past: drop the umlaut, add -te: musste, konnte, durfte. Same endings as hatte. möchten has no past form, use wollte.',
    }),
    gap('t1-gap', ['Früher {{musste}} ich um sieben aufstehen. (müssen)', 'Wir {{durften}} in der Pause kein Handy benutzen. (dürfen)', 'Als Kind {{wollte}} Amara Ärztin werden. (wollen)', '{{Konntest}} du schon mit fünf lesen? (können)', 'Ihr {{solltet}} leise sein! (sollen)'],
      { task: 'Ergänze das Modalverb im Präteritum.', taskEn: 'Fill in the modal verb in the simple past.' }),
    sort('t1-sort', ['Präsens', 'Präteritum'], [['muss', 0], ['musste', 1], ['kann', 0], ['konnte', 1], ['darf', 0], ['durfte', 1], ['will', 0], ['wollte', 1]], { task: 'Jetzt oder früher?', taskEn: 'Present or past?' }),
  ]);

const teil2 = section('teil-2', 'modul', 'Teil 2', 'Erfahrungen und Meinungen', 'sky', 15,
  ['eine Radiosendung verstehen', 'über Erfahrungen sprechen', 'die eigene Meinung sagen', 'Possessivartikel im Dativ'], [
    audio('t2-audio', 'Hören: Radio Leipzig, „Mein bester Lehrer“', [
      ['moderatorin', 'Willkommen bei „Leipzig am Abend“. Unser Thema heute: der beste Lehrer, die beste Lehrerin. Am Telefon ist Herr Lehmann.'],
      ['herrLehmann', 'Guten Abend! Also, meine beste Lehrerin war Frau Sommer. Mit meiner Klasse ist sie jedes Jahr zum Zelten gefahren. Da haben wir mehr gelernt als in der Schule!'],
      ['moderatorin', 'Schön! Und unsere nächste Anruferin ist Elif aus Köln.'],
      ['elif', 'Hallo! Bei mir war es mein Mathelehrer. Ich hatte immer Angst vor Mathe. Aber er hat nach der Stunde mit meinen Freundinnen und mir extra geübt. Am Ende hatte ich eine Zwei im Abitur!'],
      ['moderatorin', 'Eine Zwei, toll! Was denken Sie: Was macht einen guten Lehrer aus?'],
      ['elif', 'Ich finde, ein guter Lehrer hat Geduld und glaubt an seine Schüler.'],
    ], { task: 'Hör die Radiosendung.', taskEn: 'Listen to the radio call-in show about the best teacher. Zelten = camping.' }),
    mcq('t2-q1', 'Was hat Frau Sommer jedes Jahr gemacht?', ['Sie ist mit der Klasse zelten gefahren.', 'Sie hat Nachhilfe gegeben.', 'Sie hat ein Konzert organisiert.'], 0),
    mcq('t2-q2', 'Welche Note hatte Elif im Abitur in Mathe?', ['eine Eins', 'eine Zwei', 'eine Vier'], 1),
    mcq('t2-q3', 'Was macht für Elif einen guten Lehrer aus?', ['Er ist streng.', 'Er hat Geduld und glaubt an seine Schüler.', 'Er gibt wenig Hausaufgaben.'], 1),
    grammar('t2-gram', 'Possessivartikel im Dativ', {
      intro: 'Nach **mit, bei, von, zu, aus, nach** steht der Dativ. Possessivartikel haben dann die Endungen von **einem/einer**.',
      head: ['', 'maskulin', 'neutral', 'feminin', 'Plural'],
      rows: [['Dativ', 'mein**em** Lehrer', 'mein**em** Kind', 'mein**er** Klasse', 'mein**en** Freundin**nen**'], ['', 'dein**em**, sein**em**, ihr**em** …', 'unser**em**, eur**em** …', 'unser**er**, eur**er** …', 'ihr**en**, Ihr**en** …']],
      notes: ['*Ich wohne bei **meiner** Tante. Ich spreche mit **unserem** Lehrer.*', '**euer** verliert das e: *mit eur**em** Hund, mit eur**er** Klasse*.', 'Dativ Plural: Das Nomen bekommt ein -n: mit meinen Freunde**n**.'],
      en: 'Possessive articles in the dative: meinem (der/das), meiner (die), meinen + noun-n (plural). Same pattern for dein, sein, ihr, unser, euer, Ihr.',
    }),
    gap('t2-gap', ['Ich fahre mit {{meinem}} Bruder in den Urlaub. (mein, der Bruder)', 'Nele wohnt bei {{ihrer}} Oma. (ihr, die Oma)', 'Kenji spricht mit {{seinen}} Eltern. (sein, die Eltern)', 'Wir gehen zu {{unserem}} Lehrer. (unser, der Lehrer)', 'Was macht ihr mit {{eurem}} Geld? (euer, das Geld)'],
      { task: 'Ergänze den Possessivartikel im Dativ.', taskEn: 'Fill in the possessive article in the dative.' }),
    phrases('t2-phr', 'Die eigene Meinung sagen', {
      'Meinung': ['Ich finde, dass …', 'Ich glaube, …', 'Meiner Meinung nach …'],
      'Zustimmen': ['Da hast du recht.', 'Das finde ich auch.', 'Genau!'],
      'Widersprechen': ['Das sehe ich anders.', 'Ich bin nicht sicher.', 'Ich finde das nicht so gut.'],
    }),
  ]);

const teil3 = section('teil-3', 'modul', 'Teil 3', 'Das Schulsystem in Deutschland', 'lilac', 15,
  ['Informationen über ein Schulsystem verstehen', 'über Schultypen sprechen'], [
    text('t3-text', `**Schule in Deutschland: ein Überblick**

Mit sechs Jahren kommen alle Kinder in die **Grundschule**. Sie dauert meistens vier Jahre, in Berlin und Brandenburg sechs Jahre.

Danach gibt es verschiedene Schultypen. Das **Gymnasium** dauert acht oder neun Jahre und endet mit dem **Abitur**. Mit dem Abitur kann man an einer Universität studieren. An der **Realschule** oder **Oberschule** macht man nach der 10. Klasse einen mittleren Abschluss. Viele machen danach eine **Ausbildung**: Sie lernen einen Beruf, zum Beispiel Mechatroniker oder Bankkauffrau, in einem Betrieb und in der Berufsschule.

In der **Gesamtschule** lernen alle Schüler zusammen. Jedes Bundesland hat eigene Regeln. Deshalb ist das System nicht überall gleich.

Die Noten gehen von **1 (sehr gut)** bis **6 (ungenügend)**. In Österreich gibt es nur fünf Noten. Und in der Schweiz ist es umgekehrt: Dort ist die **6** die beste Note!`,
      { kicker: 'Lesen', title: 'Schule in D-A-CH', task: 'Lies den Text.', taskEn: 'Read about the school system. Bundesland = federal state.' }),
    mcq('t3-q1', 'Wie lange dauert die Grundschule in Berlin?', ['vier Jahre', 'sechs Jahre', 'zehn Jahre'], 1),
    mcq('t3-q2', 'Was braucht man, um an einer Universität zu studieren?', ['einen mittleren Abschluss', 'das Abitur', 'eine Ausbildung'], 1),
    mcq('t3-q3', 'Wo ist die 6 die beste Note?', ['in Deutschland', 'in Österreich', 'in der Schweiz'], 2),
    match('t3-match', [['Grundschule', 'für alle Kinder ab sechs'], ['Gymnasium', 'endet mit dem Abitur'], ['Realschule', 'Abschluss nach der 10. Klasse'], ['Ausbildung', 'einen Beruf im Betrieb lernen'], ['Gesamtschule', 'alle Schüler lernen zusammen']], { task: 'Was passt zusammen?', taskEn: 'Match the school type to its description.' }),
    tip('t3-tip', 'Die duale Ausbildung', 'Die **duale Ausbildung** ist typisch für Deutschland, Österreich und die Schweiz. „Dual“ heißt: zwei Orte. Man arbeitet drei oder vier Tage im Betrieb und geht ein oder zwei Tage in die Berufsschule. Man bekommt schon während der Ausbildung Geld.'),
    compose('t3-comp', 'Erzähl über deine Schulzeit.', [
      ['Wie lange warst du in der Schule?', 'How long were you at school?', ['Ich', 'war', 'zwölf Jahre', 'in der Schule.']],
      ['Was war dein Lieblingsfach?', 'What was your favorite subject?', ['Mein Lieblingsfach', 'war', 'Geschichte.']],
      ['Was musstest du machen?', 'What did you have to do?', ['Wir', 'mussten', 'eine Uniform', 'tragen.']],
      ['Was durftest du nicht?', 'What were you not allowed to do?', ['Wir', 'durften', 'kein Handy', 'benutzen.']],
    ], { task: 'Bau die Sätze.', taskEn: 'Build the sentences.' }),
  ]);

const wg = section('wg', 'kommunikation', 'Die Fuchsbau-WG', 'Folge 2: Das Klassentreffen', 'rose', 10,
  ['eine Geschichte hören', 'Modalverben im Präteritum im Kontext'], [
    text('wg-intro', 'Nele kommt spät in der Nacht nach Hause. Sie war auf ihrem Klassentreffen, zehn Jahre nach dem Abitur. Amara ist noch wach.', { kicker: 'Die Geschichte', en: 'Nele comes home late at night from her ten-year class reunion. Amara is still awake.' }),
    audio('wg-audio', 'Folge 2: Das Klassentreffen', [
      ['amara', 'Na, wie war es? Hast du alle wiedererkannt?'],
      ['nele', 'Fast alle! Weißt du, wer da war? Tim Becker. In der Schule war er so schüchtern. Er konnte vor der Klasse kein Wort sagen.'],
      ['amara', 'Und jetzt?'],
      ['nele', 'Jetzt ist er Schauspieler am Theater! Unglaublich, oder?'],
      ['amara', 'Ha! Und du? Was wolltest du damals werden?'],
      ['nele', 'Ich wollte Astronautin werden. Aber in Physik hatte ich eine Vier. Da musste ich meinen Traum aufgeben.'],
      ['amara', 'Jetzt programmierst du Apps. Das ist auch fast wie im Weltraum.'],
      ['nele', 'Haha. Und rate mal, wer auch da war: Herr Kowalski, unser Mathelehrer. Er hat sich an meine Hausaufgaben erinnert. Ich habe nämlich immer bei meiner Nachbarin abgeschrieben!'],
    ], { task: 'Hör die Geschichte.', taskEn: 'Listen to the story. abschreiben = to copy (someone’s homework).' }),
    mcq('wg-q1', 'Wie war Tim in der Schule?', ['laut und frech', 'sehr schüchtern', 'ein guter Sportler'], 1),
    mcq('wg-q2', 'Was ist Tim heute von Beruf?', ['Lehrer', 'Schauspieler', 'Astronaut'], 1),
    mcq('wg-q3', 'Warum hat Nele ihren Traum aufgegeben?', ['Sie hatte eine Vier in Physik.', 'Sie wollte lieber Apps programmieren.', 'Ihre Eltern wollten das nicht.'], 0),
    mcq('wg-q4', 'Was hat Nele früher gemacht?', ['Sie hat bei ihrer Nachbarin abgeschrieben.', 'Sie hat Nachhilfe gegeben.', 'Sie hat im Orchester gespielt.'], 0),
  ]);

const grammatik = section('grammatik', 'grammatik', 'Grammatik', 'Alles auf einen Blick', 'peach', 10,
  ['Modalverben im Präteritum', 'Artikel im Überblick'], [
    grammar('g-1', 'Wiederholung: Artikel in drei Fällen', {
      head: ['', 'maskulin', 'neutral', 'feminin', 'Plural'],
      rows: [['Nominativ', 'der / ein / mein', 'das / ein / mein', 'die / eine / meine', 'die / – / meine'], ['Akkusativ', 'den / einen / meinen', 'das / ein / mein', 'die / eine / meine', 'die / – / meine'], ['Dativ', 'dem / einem / meinem', 'dem / einem / meinem', 'der / einer / meiner', 'den / – / meinen (+n)']],
      en: 'Definite, indefinite and possessive articles in nominative, accusative and dative.',
    }),
    mcq('g-q1', 'Als Kind ___ ich nicht schwimmen.', ['kann', 'konnte', 'könnte'], 1),
    mcq('g-q2', 'Ich spiele oft mit ___ Schwester. (mein)', ['meine', 'meiner', 'meinem'], 1),
    mcq('g-q3', 'Gestern ___ wir lange arbeiten.', ['mussten', 'müssten', 'musste'], 0),
    mcq('g-q4', 'Er wohnt bei ___ Eltern. (sein)', ['seine', 'seinem', 'seinen'], 2),
  ]);

const uebungen = section('uebungen', 'uebung', 'Übungen', 'Training', 'butter', 15,
  ['Erinnerungen formulieren', 'Aussprache: das e'], [
    order('u-order', ['Früher', 'musste', 'ich', 'eine Uniform', 'tragen.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence.' }),
    audio('u-aus', 'Aussprache: das e', [
      ['frauKlein', 'Betontes langes e: Lehrer, Leben, sehr, schwer.'],
      ['frauKlein', 'Betontes kurzes e: Heft, Test, lernen, Geschichte.'],
      ['frauKlein', 'Unbetontes e, ganz kurz und schwach: Schule, Klasse, Note, Tafel.'],
      ['frauKlein', 'Die Endung -en hört man fast nicht: lernen, schreiben, wollten, mussten.'],
    ], { task: 'Hör zu und sprich nach.', taskEn: 'Listen and repeat: long e, short e, and the weak unstressed e.' }),
    sort('u-sort', ['langes e', 'kurzes e', 'schwaches e (am Ende)'], [['Lehrer', 0], ['Heft', 1], ['Schule', 2], ['sehr', 0], ['Test', 1], ['Note', 2], ['Leben', 0], ['lernen', 1], ['Klasse', 2]], { task: 'Welches e hörst du?', taskEn: 'Which e do you hear in the stressed or final syllable?' }),
    gap('u-gap', ['In der Schweiz ist die {{6}} die beste Note.', 'Nach dem {{Abitur}} kann man studieren.', 'Bei der {{Ausbildung}} lernt man einen Beruf im Betrieb.'], { bank: ['6', 'Abitur', 'Ausbildung'], task: 'Ergänze.', taskEn: 'Fill in the gaps.' }),
  ]);

const wortschatz = section('wortschatz', 'wortschatz', 'Wortschatz und Check', 'Das kann ich jetzt', 'mint', 8,
  ['Wörter wiederholen', 'den Stand einschätzen'], [
    cards('w-cards', [
      ['das Schulfach', 'Mathe, Kunst, Sport …', 'school subject'], ['die Note', '1 bis 6', 'grade'], ['das Zeugnis', 'alle Noten auf einem Papier', 'report card'],
      ['die Hausaufgabe', 'Aufgabe für zu Hause', 'homework'], ['die Grundschule', 'die erste Schule', 'elementary school'], ['das Gymnasium', 'endet mit dem Abitur', 'academic high school'],
      ['das Abitur', 'Abschluss für die Uni', 'high school diploma'], ['die Ausbildung', 'einen Beruf lernen', 'vocational training'], ['streng', 'mit vielen Regeln', 'strict'],
      ['die Nachhilfe', 'extra Unterricht', 'tutoring'], ['sich erinnern an', 'an früher denken', 'to remember'], ['der Mitschüler', 'aus derselben Klasse', 'classmate'],
    ]),
    checklist('w-check', ['Ich kann über meine Schulzeit sprechen.', 'Ich kenne die Modalverben im Präteritum.', 'Ich kann das deutsche Schulsystem kurz erklären.', 'Ich kann meine Meinung sagen und widersprechen.', 'Ich kenne die Possessivartikel im Dativ.']),
  ]);

export const a2k2: Chapter = {
  id: 'a2-k2', number: 2, title: 'Nach der Schulzeit', theme: 'Schulzeit, Schulfächer, Schulsystem, Meinungen',
  grammar: 'Modalverben im Präteritum. Possessivartikel im Dativ. Wiederholung Artikel.',
  sections: [einstieg, teil1, teil2, teil3, wg, grammatik, uebungen, wortschatz],
  games: ['a2k2-sprint', 'a2k2-memory', 'a2k2-satzbau', 'a2k2-artikel'],
  exam: [
    x(1, mcq('x1', 'Als Kind ___ ich Pilot werden.', ['will', 'wollte', 'möchte'], 1)),
    x(1, mcq('x2', 'In der Schule ___ wir keine Handys benutzen.', ['durften', 'dürfen', 'durfte'], 0)),
    x(1, mcq('x3', 'Ich telefoniere mit ___ Mutter.', ['meine', 'meiner', 'meinem'], 1)),
    x(4, gap('x4', ['Früher {{musste}} ich viel lernen. (müssen)', '{{Konntest}} du gut zeichnen? (können)', 'Wir {{sollten}} pünktlich sein. (sollen)', 'Er {{durfte}} lange fernsehen. (dürfen)'], { task: 'Modalverben im Präteritum.' })),
    x(2, gap('x5', ['Ich wohne bei {{meinen}} Eltern. (mein)', 'Sie spricht mit {{ihrem}} Chef. (ihr)'], { task: 'Possessivartikel im Dativ.' })),
    x(1, mcq('x6', 'Was macht Jana nach der Schule?', ['Sie studiert Medizin.', 'Sie macht eine Ausbildung.', 'Sie reist um die Welt.'], 1),
      text('x-st1', 'Hallo Oma, ich habe es geschafft: Ich habe meinen Realschulabschluss! Meine beste Note war in Chemie, eine Eins. Ab September mache ich eine Ausbildung als Gärtnerin in Dresden. Ich freue mich so! Am Wochenende feiern wir. Kommst du auch? Deine Jana', { kicker: 'Lesen' })),
    x(1, mcq('x7', 'In welchem Fach hatte Jana die beste Note? (Text oben)', ['Mathe', 'Chemie', 'Biologie'], 1)),
    x(1, mcq('x8', 'Was war Herrn Okafors Lieblingsfach?', ['Sport', 'Erdkunde', 'Musik'], 1),
      audio('x-st2', 'Hören: Ein Interview', [
        ['moderatorin', 'Herr Okafor, was war in der Schule Ihr Lieblingsfach?'],
        ['herrYilmaz', 'Erdkunde! Ich wollte immer reisen und andere Länder sehen.'],
        ['moderatorin', 'Und welches Fach mochten Sie gar nicht?'],
        ['herrYilmaz', 'Sport. Ich war sehr langsam. Beim Laufen war ich immer der Letzte.'],
      ])),
    x(1, mcq('x9', 'Warum mochte er Sport nicht? (Hörtext oben)', ['Er war zu langsam.', 'Der Lehrer war streng.', 'Er hatte keine Zeit.'], 0)),
    x(2, order('x10', ['Ich', 'konnte', 'gestern', 'nicht', 'kommen.'], { task: 'Bau den Satz.' })),
    x(1, mcq('x11', 'Was sagst du, wenn du nicht einverstanden bist?', ['Da hast du recht.', 'Das sehe ich anders.', 'Genau!'], 1)),
    x(1, mcq('x12', 'Mit dem Abitur kann man …', ['studieren', 'in die Grundschule gehen', 'nicht arbeiten'], 0)),
  ],
};

export const gamesA2k2: GameDef[] = [
  {
    id: 'a2k2-sprint', engine: 'sprint', title: 'Präteritum-Sprint', blurb: 'musste, konnte, durfte? Schnell!', skill: 'Modalverben im Präteritum', tone: 'mint', chapter: 2, emoji: '⚡',
    rules: 'Du siehst ein Modalverb im Präsens. Tippe auf die Form im Präteritum.', label: 'Präteritum?',
    items: [
      { q: 'ich muss', a: 'ich musste', wrong: ['ich müsste', 'ich mussen'] }, { q: 'du kannst', a: 'du konntest', wrong: ['du könntest', 'du kanntest'] },
      { q: 'er darf', a: 'er durfte', wrong: ['er dürfte', 'er darfte'] }, { q: 'wir wollen', a: 'wir wollten', wrong: ['wir wolten', 'wir wollen'] },
      { q: 'sie soll', a: 'sie sollte', wrong: ['sie sollt', 'sie söllte'] }, { q: 'ihr müsst', a: 'ihr musstet', wrong: ['ihr müsstet', 'ihr musstest'] },
      { q: 'ich kann', a: 'ich konnte', wrong: ['ich könnte', 'ich kannte'] }, { q: 'du willst', a: 'du wolltest', wrong: ['du willtest', 'du wollst'] },
      { q: 'wir dürfen', a: 'wir durften', wrong: ['wir dürften', 'wir darften'] }, { q: 'Sie können', a: 'Sie konnten', wrong: ['Sie könnten', 'Sie kannten'] },
      { q: 'ich will', a: 'ich wollte', wrong: ['ich willte', 'ich wolle'] }, { q: 'er muss', a: 'er musste', wrong: ['er musst', 'er müsste'] },
    ],
  },
  {
    id: 'a2k2-memory', engine: 'memory', title: 'Schul-Memory', blurb: 'Schulfach und Bild: Finde die Paare.', skill: 'Schulfächer', tone: 'lilac', chapter: 2, emoji: '🃏',
    rules: 'Dreh zwei Karten um. Ein Paar ist ein Schulfach und das passende Bild.', kinds: ['Fach', 'Bild'],
    pairs: [['Mathe', '➗'], ['Biologie', '🧬'], ['Musik', '🎼'], ['Sport', '🏀'], ['Kunst', '🎨'], ['Erdkunde', '🌍'], ['Chemie', '⚗️'], ['Geschichte', '🏰'], ['Informatik', '💻'], ['Physik', '🧲']],
  },
  {
    id: 'a2k2-satzbau', engine: 'satzbau', title: 'Erinnerungs-Baukasten', blurb: 'Bau Sätze über früher.', skill: 'Satzbau', tone: 'sky', chapter: 2, emoji: '🧱',
    rules: 'Tippe die Wörter in der richtigen Reihenfolge an.',
    sentences: [
      { parts: ['Früher', 'musste', 'ich', 'um sieben', 'aufstehen.'], hint: 'Modalverb auf Position 2' },
      { parts: ['Als Kind', 'wollte', 'Amara', 'Ärztin werden.'], hint: 'wollte + Infinitiv' },
      { parts: ['Wir', 'durften', 'in der Pause', 'kein Handy benutzen.'], hint: 'Satzklammer' },
      { parts: ['Ich', 'wohne', 'bei', 'meiner Tante.'], hint: 'bei + Dativ' },
      { parts: ['Nele', 'spricht', 'mit', 'ihrem Lehrer.'], hint: 'mit + Dativ' },
      { parts: ['Konntest', 'du', 'schon mit fünf', 'lesen?'], hint: 'Ja/Nein-Frage' },
      { parts: ['Meiner Meinung nach', 'ist', 'die Schule', 'zu lang.'], hint: 'Meinung: Verb auf Position 2' },
      { parts: ['Ich', 'finde,', 'dass', 'Lehrer', 'Geduld brauchen.'], hint: 'dass: Verb am Ende' },
    ],
  },
  {
    id: 'a2k2-artikel', engine: 'regen', title: 'Artikel-Regen', blurb: 'der, die oder das? Schule.', skill: 'Artikel', tone: 'rose', chapter: 2, emoji: '☔',
    rules: 'Ein Nomen fällt herunter. Tippe auf den richtigen Artikel.', buckets: ['der', 'die', 'das'],
    words: artikel('der Unterricht, das Zeugnis, die Note, der Lehrer, das Fach, die Klasse, der Abschluss, das Gymnasium, die Hausaufgabe, der Pausenhof, das Abitur, die Ausbildung, der Schüler, das Heft, die Tafel, der Stundenplan, das Klassentreffen, die Prüfung'),
  },
];
