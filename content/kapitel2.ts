import type { Chapter, GameDef, GlossaryEntry } from './types';
import { artikel, audio, cards, checklist, compose, gap, grammar, match, mcq, order, overview, phrases, poll, section, sort, text, tip, x } from './helpers';

// Kapitel 2: theme Lernen. Grammar: Infinitiv mit und ohne zu, Modalverben und ihre Alternativen.

export const glossary2: Record<string, GlossaryEntry> = {
  Gedächtnis: { de: 'Die Fähigkeit, sich Dinge zu merken und sich später daran zu erinnern.', en: 'memory', ex: 'Ich habe ein schlechtes Gedächtnis für Namen.' },
  sichMerken: { de: 'Etwas im Kopf behalten, damit man es nicht vergisst.', en: 'to memorize, to remember', ex: 'Ich kann mir Zahlen schlecht merken.' },
  auswendig: { de: 'Ohne nachzusehen, nur aus dem Kopf.', en: 'by heart', ex: 'Sie kann das Gedicht auswendig.' },
  Eselsbrücke: { de: 'Ein kleiner Trick, mit dem man sich etwas leichter merkt.', en: 'mnemonic, memory aid' },
  wiederholen: { de: 'Etwas noch einmal machen oder lernen.', en: 'to repeat, to review' },
  Fortschritt: { de: 'Wenn man besser wird. Meistens im Plural: Fortschritte machen.', en: 'progress', ex: 'Du machst große Fortschritte.' },
  begreifen: { de: 'Etwas wirklich verstehen.', en: 'to grasp, to understand' },
  Weiterbildung: { de: 'Ein Kurs, den man als Erwachsener für den Beruf macht.', en: 'further training' },
  nachschlagen: { de: 'In einem Buch oder im Internet nach einer Information suchen.', en: 'to look something up', ex: 'Ich schlage das Wort im Wörterbuch nach.' },
  Allgemeinwissen: { de: 'Was die meisten Menschen wissen, zum Beispiel Hauptstädte.', en: 'general knowledge' },
  Zusammenhang: { de: 'Die Verbindung zwischen zwei oder mehr Dingen.', en: 'connection, context', ex: 'Ich verstehe den Zusammenhang nicht.' },
  beurteilen: { de: 'Sagen, ob etwas gut oder schlecht, richtig oder falsch ist.', en: 'to judge, to assess' },
  Quelle: { de: 'Der Ort, von dem eine Information kommt.', en: 'source' },
  überflüssig: { de: 'Nicht nötig.', en: 'unnecessary, superfluous' },
  Ausdauer: { de: 'Die Kraft, lange weiterzumachen, auch wenn es schwer ist.', en: 'stamina, perseverance' },
  aufgeben: { de: 'Mit etwas aufhören, weil es zu schwer ist.', en: 'to give up' },
  Talent: { de: 'Etwas, das man von Natur aus gut kann.', en: 'talent' },
  Rückschlag: { de: 'Ein Moment, in dem etwas plötzlich wieder schlechter läuft.', en: 'setback' },
  Volkshochschule: { de: 'Eine öffentliche Schule mit günstigen Kursen für Erwachsene. Kurz: VHS.', en: 'adult education center' },
  Einstufungstest: { de: 'Ein Test, der zeigt, welcher Kurs zu deinem Niveau passt.', en: 'placement test' },
  Anmeldung: { de: 'Wenn man seinen Namen für einen Kurs einträgt.', en: 'registration, enrollment' },
  Ermäßigung: { de: 'Ein niedrigerer Preis, zum Beispiel für Studierende.', en: 'discount, reduced price' },
  Auskunft: { de: 'Eine Information, die man von einer Person bekommt.', en: 'information (given on request)', ex: 'Können Sie mir eine Auskunft geben?' },
};

const einstieg = section('einstieg', 'einstieg', 'Einstieg', 'Wie lernst du?', 'butter', 10,
  ['das Kapitel kennenlernen', 'über das eigene Lernen sprechen', 'sich Neues merken'], [
    overview('e-over', 'Kapitel 2: Kopfsache',
      'In diesem Kapitel geht es um das **Lernen**. Warum fangen Menschen mit 40 oder 70 Jahren noch etwas Neues an? Muss man heute überhaupt noch Dinge wissen, wenn man alles googeln kann? Und stimmt es, dass Talent wichtiger ist als Übung? Du hörst eine Straßenumfrage, liest einen Kommentar und Beiträge aus einem Forum und lernst, wie man höflich um Informationen bittet, zum Beispiel bei einer Sprachschule.\n\nIn der Grammatik lernst du, wann vor dem Infinitiv ein **zu** steht und wie man Modalverben durch andere Ausdrücke ersetzt.',
      'This chapter is about learning: why adults start new things, whether knowledge still matters when you can search everything, and talent versus practice. You also learn to ask for information politely. Grammar: infinitive with and without "zu", and alternatives to modal verbs.',
      ['über Lernerfahrungen sprechen', 'eine Meinung in einem Kommentar erkennen und selbst formulieren', 'höflich um Informationen bitten (indirekte Fragen)', 'Infinitivsätze mit und ohne zu bilden']),
    text('e-intro', 'Unser [[Gedächtnis]] ist kein Schrank, in den man Dinge legt. Es arbeitet eher wie ein Netz: Neues bleibt nur hängen, wenn es sich mit etwas Bekanntem verbindet. Deshalb helfen Bilder, Geschichten und eine gute [[Eselsbrücke]]. Bevor wir starten: Wie lernst du am liebsten?', { kicker: 'Zum Einstieg' }),
    poll('e-poll', [['allein', 'in der Gruppe'], ['morgens', 'abends'], ['mit Musik', 'in völliger Ruhe'], ['mit Karteikarten', 'mit einer App'], ['jeden Tag ein bisschen', 'einmal pro Woche lange']],
      { task: 'Was passt besser zu dir?', taskEn: 'Which fits you better? There is no wrong answer.' }),
    text('e-test', 'Lies die acht Wörter einmal langsam. Dann geh zur nächsten Aufgabe, ohne zurückzuschauen.\n\n**Kerze, Fahrrad, Zitrone, Brief, Regen, Schlüssel, Gitarre, Bäcker**', { kicker: 'Gedächtnistest', task: 'Kleiner Test für dein Gedächtnis', taskEn: 'A small memory test. Read the eight words once, then move on.' }),
    mcq('e-q1', 'Welches Wort war **nicht** in der Liste?', ['Schlüssel', 'Zitrone', 'Fenster', 'Gitarre'], 2, { task: 'Ohne nachzusehen!', taskEn: 'No peeking!', why: 'Tipp: Verbinde die Wörter zu einer kleinen Geschichte. Der Bäcker fährt mit dem Fahrrad durch den Regen …' }),
    match('e-match', [['sich etwas merken', 'etwas im Kopf behalten'], ['etwas vergessen', 'sich nicht mehr erinnern'], ['etwas wiederholen', 'noch einmal lernen'], ['etwas auswendig können', 'aus dem Kopf wissen'], ['etwas begreifen', 'wirklich verstehen']],
      { task: 'Was bedeutet das? Verbinde.', taskEn: 'What does it mean? Match.' }),
  ]);

const modul1 = section('modul-1', 'modul', 'Modul 1', 'Man lernt nie aus', 'mint', 25,
  ['eine Straßenumfrage zum Thema Lernen verstehen', 'über das eigene Lernen sprechen', 'Grammatik: Infinitiv mit und ohne zu'], [
    audio('m1-audio', 'Hören: Straßenumfrage „Was lernen Sie gerade?“', [
      ['moderatorin', 'Wir stehen heute in der Fußgängerzone und fragen: Was lernen Sie gerade? Hallo, darf ich Sie kurz stören?'],
      ['jule', 'Moin! Klar. Ich hab vor drei Monaten angefangen, Gebärdensprache zu lernen. Meine neue Kollegin ist gehörlos, und ich hatte keine Lust mehr, ihr immer nur Zettel zu schreiben.'],
      ['moderatorin', 'Und, ist es schwer?'],
      ['jule', 'Am Anfang schon. Aber es macht mir total Spaß, mit den Händen zu sprechen. Inzwischen können wir uns in der Pause richtig unterhalten.'],
      ['moderatorin', 'Und Sie? Lernen Sie auch etwas Neues?'],
      ['seppi', 'Ja mei, i bin jetzt 68 und lern Akkordeon. Mei Frau hat gsagt, i soll endlich was Gscheits mit meiner Zeit machen. I versuch, jeden Tag a halbe Stund zu üben.'],
      ['moderatorin', 'Klappt das?'],
      ['seppi', 'Die Nachbarn lassen mich no spielen, also ja.'],
      ['elif', 'Ich mache gerade eine Weiterbildung, abends nach der Arbeit. Programmieren. Ehrlich gesagt fällt es mir schwer, mich nach acht Stunden Büro noch zu konzentrieren. Aber ich habe vor, nächstes Jahr die Abteilung zu wechseln. Da muss ich das können.'],
      ['herrLehmann', 'Nu, ich lerne Spanisch. Unsere Tochter ist nach Valencia gezogen, und ich möchte mit den Enkeln reden können. Ich habe mir vorgenommen, jeden Morgen zehn neue Wörter zu lernen. Mittags sind fünf wieder weg, aber fünf bleiben.'],
    ], { task: 'Vier Personen, vier Gründe. Hör zu.', taskEn: 'Four people, four reasons. Listen. You will hear Hamburg, Bavarian, Cologne and Saxon accents.',
      note: 'Bairisch: **i** = ich. **a** = ein(e). **mei** = mein(e). **was Gscheits** = etwas Vernünftiges. **no** = noch. Sächsisch: **Nu** = Ja, also.' }),
    mcq('m1-q1', 'Warum lernt Jule Gebärdensprache?', ['Sie braucht sie für eine Prüfung.', 'Sie möchte mit einer gehörlosen Kollegin sprechen.', 'Sie will Lehrerin werden.'], 1, { task: 'Fragen zum Hörtext', taskEn: 'Questions about the audio.' }),
    mcq('m1-q2', 'Was ist für Elif schwierig?', ['Der Kurs ist zu teuer.', 'Sie versteht die Lehrerin nicht.', 'Nach der Arbeit kann sie sich schlecht konzentrieren.'], 2),
    mcq('m1-q3', 'Was hat sich Herr Lehmann vorgenommen?', ['jeden Morgen zehn neue Wörter zu lernen', 'nach Valencia zu ziehen', 'jeden Tag eine halbe Stunde zu üben'], 0),
    grammar('m1-gram', 'Infinitiv mit zu', {
      intro: 'Nach vielen Verben, Adjektiven und Nomen steht ein zweites Verb im Infinitiv mit **zu**. Das Verb steht am Satzende.',
      head: ['Nach …', 'Beispiel'],
      rows: [
        ['bestimmten Verben: anfangen, aufhören, versuchen, vorhaben, vergessen, sich vornehmen, hoffen', 'Ich habe angefangen, Gebärdensprache **zu lernen**.'],
        ['Adjektiv + sein/finden: Es ist schwer, leicht, wichtig, möglich …', 'Es fällt mir schwer, mich **zu konzentrieren**.'],
        ['Nomen + haben/machen: Lust, Zeit, Angst haben. Es macht Spaß …', 'Ich hatte keine Lust, Zettel **zu schreiben**.'],
      ],
      notes: ['Trennbare Verben: **zu** steht in der Mitte. *Ich habe vor, morgen **anzufangen**.*', 'Vor dem Infinitivsatz kann ein Komma stehen. Es macht den Satz leichter lesbar.'],
      en: 'After many verbs (anfangen, versuchen, vorhaben), adjectives (es ist schwer) and nouns (Lust haben), the second verb is an infinitive with "zu" at the end of the clause. With separable verbs, "zu" goes in the middle: anzufangen.',
    }),
    grammar('m1-gram2', 'Infinitiv ohne zu', {
      head: ['Nach …', 'Beispiel'],
      rows: [
        ['Modalverben: können, müssen, wollen, dürfen, sollen, möchten', 'Ich möchte mit den Enkeln **reden**.'],
        ['lassen', 'Die Nachbarn lassen mich **spielen**.'],
        ['hören, sehen', 'Ich höre ihn jeden Abend **üben**.'],
        ['gehen, bleiben', 'Wir gehen heute **schwimmen**. Bleib ruhig **sitzen**.'],
        ['werden (Futur)', 'Ich werde nächstes Jahr die Abteilung **wechseln**.'],
      ],
      notes: ['Nach **lernen** und **helfen** geht beides: *Er lernt schwimmen. Er lernt, besser zu schwimmen.*'],
      en: 'No "zu" after modal verbs, lassen, hören, sehen, gehen, bleiben and werden.',
    }),
    sort('m1-sort', ['Infinitiv mit zu', 'Infinitiv ohne zu'], [['versuchen', 0], ['müssen', 1], ['vorhaben', 0], ['lassen', 1], ['Lust haben', 0], ['sehen', 1], ['aufhören', 0], ['werden', 1], ['es ist wichtig', 0], ['dürfen', 1]],
      { task: 'Mit zu oder ohne zu?', taskEn: 'With or without "zu"? Tap a card, then its group.' }),
    gap('m1-gap', [
      'Ich habe keine Zeit, jeden Tag {{zu lernen}}. (lernen)',
      'Wir müssen morgen früh {{aufstehen}}. (aufstehen)',
      'Vergiss nicht, dich für den Kurs {{anzumelden}}. (anmelden)',
      'Meine Chefin lässt mich die Weiterbildung {{machen}}. (machen)',
      'Es ist nicht leicht, eine neue Sprache {{zu sprechen}}. (sprechen)',
      'Er hat vor, im Sommer mit dem Kurs {{aufzuhören}}. (aufhören)',
    ], { task: 'Ergänze den Infinitiv, mit oder ohne zu.', taskEn: 'Fill in the infinitive, with or without "zu". Watch the separable verbs.' }),
    order('m1-order', ['Ich habe', 'mir vorgenommen,', 'jeden Tag', 'zehn Wörter', 'zu lernen.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence.', hint: 'Der Infinitiv mit zu steht am Ende.' }),
    compose('m1-comp', 'Was lernst du gerade? So kannst du davon erzählen.', [
      ['Sag, was du lernst und seit wann.', 'Say what you are learning and since when.', ['Ich habe', 'vor einem Jahr', 'angefangen,', 'Deutsch', 'zu lernen.']],
      ['Sag, was dir schwerfällt.', 'Say what is hard for you.', ['Es fällt mir schwer,', 'lange Wörter', 'richtig', 'auszusprechen.']],
      ['Sag, was dir Spaß macht.', 'Say what you enjoy.', ['Aber es macht mir Spaß,', 'mit anderen', 'Deutsch', 'zu sprechen.']],
      ['Sag, was du vorhast.', 'Say what you plan to do.', ['Ich habe vor,', 'nächstes Jahr', 'die B2-Prüfung', 'zu machen.']],
    ], { task: 'Erzähl von deinem Lernen.', taskEn: 'Talk about your own learning. Build four sentences.' }),
  ]);

const modul2 = section('modul-2', 'modul', 'Modul 2', 'Wissen oder googeln?', 'sky', 20,
  ['Meinungen in einem Kommentar verstehen', 'die eigene Meinung äußern', 'einen Kommentar bauen'], [
    text('m2-text', `Neulich beim Abendessen fragte meine Nichte: „Warum soll ich die Hauptstädte Europas [[auswendig]] lernen? Ich kann das doch in drei Sekunden [[nachschlagen]].“ Ich wollte sofort widersprechen. Dann merkte ich, dass mir kein gutes Argument einfiel. Ich musste selbst erst darüber nachdenken.

Natürlich hat sie recht: Kein Mensch muss heute noch Telefonnummern oder Zugverbindungen im Kopf haben. Solches Wissen ist [[überflüssig]] geworden. Das Smartphone weiß es besser und schneller.

Trotzdem bin ich überzeugt, dass wir weiterhin Dinge wissen müssen. Wer nichts weiß, kann nämlich auch nicht gut suchen. Man braucht [[Allgemeinwissen]], um die richtige Frage zu stellen. Und man braucht es noch mehr, um die Antwort zu [[beurteilen]]: Ist diese [[Quelle]] seriös? Kann das überhaupt stimmen? Wer keine Ahnung von Geschichte hat, glaubt im Internet jeden Unsinn.

Dazu kommt: Ideen entstehen im Kopf, nicht in der Suchmaschine. Nur was ich weiß, kann ich miteinander verbinden. Erst so erkenne ich einen [[Zusammenhang]], den vorher niemand gesehen hat.

Meiner Nichte habe ich deshalb geantwortet: Lern die Hauptstädte ruhig nicht alle. Aber lern, wo die Länder liegen und warum ihre Geschichte so ist, wie sie ist. Das kann dir keine Maschine abnehmen.`,
      { kicker: 'Lesen', title: 'Kommentar: Mein Kopf ist keine Festplatte', task: 'Lies den Kommentar. Welche Meinung hat die Autorin?', taskEn: 'Read the comment piece. What is the author’s opinion?' }),
    mcq('m2-q1', 'Was ist die Hauptaussage des Kommentars?', ['Auswendiglernen ist immer sinnlos.', 'Wissen bleibt wichtig, um gut zu suchen und Informationen zu beurteilen.', 'Kinder sollten kein Smartphone haben.'], 1, { task: 'Hast du den Text verstanden?', taskEn: 'Check your understanding.' }),
    mcq('m2-q2', 'Welches Wissen findet die Autorin überflüssig?', ['Geschichte', 'Telefonnummern und Zugverbindungen', 'die Lage der Länder'], 1),
    mcq('m2-q3', 'Warum braucht man Allgemeinwissen beim Suchen im Internet?', ['Weil das Internet oft langsam ist.', 'Weil man sonst kein Smartphone bedienen kann.', 'Weil man sonst nicht erkennt, ob eine Antwort stimmen kann.'], 2),
    mcq('m2-q4', '„Das kann dir keine Maschine abnehmen“ bedeutet:', ['Das musst du selbst tun.', 'Die Maschine ist kaputt.', 'Das ist zu teuer.'], 0),
    tip('m2-tip', 'Strategie: einen Kommentar schreiben', 'Ein Kommentar hat vier Teile: **1.** das Thema nennen, **2.** die eigene Meinung sagen, **3.** Argumente und ein Beispiel bringen, **4.** mit einem Fazit schließen.'),
    phrases('m2-phr', 'Die eigene Meinung äußern', {
      'Meinung sagen': ['Meiner Meinung nach …', 'Ich bin überzeugt, dass …', 'Ich finde es wichtig, … zu …', 'Ich bin der Ansicht, dass …'],
      'zustimmen und widersprechen': ['Da hat sie recht.', 'Das sehe ich genauso.', 'Trotzdem bin ich der Meinung, dass …', 'Dem kann ich nicht zustimmen.'],
      'Argumente verbinden': ['Dazu kommt, dass …', 'Ein Beispiel dafür ist …', 'Deshalb …'],
    }),
    gap('m2-gap', ['{{Meiner}} Meinung nach muss man nicht alles auswendig wissen.', 'Ich bin {{überzeugt}}, dass Wissen wichtig bleibt.', 'Da hat die Autorin {{recht}}.', 'Dazu {{kommt}}, dass Ideen im Kopf entstehen.', 'Dem kann ich nicht {{zustimmen}}.'],
      { bank: ['überzeugt', 'recht', 'Meiner', 'zustimmen', 'kommt'], task: 'Ergänze die Redemittel.', taskEn: 'Complete the phrases.' }),
    sort('m2-sort', ['Die Autorin stimmt zu', 'Die Autorin stimmt nicht zu'], [['Telefonnummern muss man nicht mehr wissen.', 0], ['Mit einer Suchmaschine braucht man kein Wissen mehr.', 1], ['Man braucht Wissen, um Quellen zu beurteilen.', 0], ['Ideen entstehen in der Suchmaschine.', 1], ['Man muss alle Hauptstädte auswendig lernen.', 1]],
      { task: 'Was denkt die Autorin?', taskEn: 'What does the author think?' }),
    compose('m2-comp', 'Thema: **„Muss man heute noch Vokabeln lernen, wenn es Übersetzungs-Apps gibt?“**', [
      ['Nenne das Thema.', 'Name the topic.', ['Viele Leute fragen sich,', 'ob man heute', 'noch Vokabeln', 'lernen muss.']],
      ['Sag deine Meinung.', 'Give your opinion.', ['Ich bin überzeugt,', 'dass', 'Vokabeln', 'wichtig bleiben.']],
      ['Bring ein Argument.', 'Give an argument.', ['In einem echten Gespräch', 'hat man', 'keine Zeit,', 'jedes Wort', 'nachzuschlagen.']],
      ['Schließ mit einem Fazit.', 'End with a conclusion.', ['Deshalb', 'lerne ich', 'jeden Tag', 'ein paar Wörter.']],
    ], { task: 'Bau einen kurzen Kommentar.', taskEn: 'Build a short comment: topic, opinion, argument, conclusion.' }),
  ]);

const modul3 = section('modul-3', 'modul', 'Modul 3', 'Übung macht den Meister', 'lilac', 25,
  ['Forumsbeiträge verstehen', 'über eigene Erfahrungen berichten', 'Grammatik: Modalverben und Alternativen'], [
    text('m3-text', `**Thema: Talent oder Übung?**

**KlavierKai:** Ich habe mit 35 angefangen, Klavier zu spielen. Meine Lehrerin sagt, ich habe kein besonderes [[Talent]]. Aber ich bin fähig, jeden Tag zwanzig Minuten zu üben, und nach zwei Jahren kann ich einfache Stücke von Bach spielen. Es ist nicht notwendig, ein Genie zu sein. Man braucht [[Ausdauer]].

**Nordlicht_Svea:** Schön für dich, aber ich sehe das anders. Ich habe drei Jahre lang Tennis trainiert und war nie in der Lage, ein einziges Turnier zu gewinnen. Andere haben nach sechs Monaten besser gespielt als ich. Irgendwann habe ich [[aufgeben|aufgegeben]]. Ohne Talent hat man keine Chance, wirklich gut zu werden.

**Lehrerin_Mo:** Ich unterrichte seit zwanzig Jahren Mathematik und erlebe beides. Talent hilft am Anfang. Aber es ist verboten, sich darauf auszuruhen! Nach jedem [[Rückschlag]] haben meine besten Schüler die Absicht weiterzumachen. Sie sind nicht klüger als die anderen. Sie hören nur nicht auf.

**KlavierKai:** @Nordlicht_Svea Muss man denn Turniere gewinnen? Es ist doch erlaubt, etwas einfach gern zu tun.`,
      { kicker: 'Lesen', title: 'Aus einem Forum', task: 'Lies die Beiträge. Wer hat welche Meinung?', taskEn: 'Read the forum posts. Who thinks what?' }),
    match('m3-match', [['KlavierKai', 'Mit Ausdauer kommt man weit, auch ohne Talent.'], ['Nordlicht_Svea', 'Ohne Talent wird man nie richtig gut.'], ['Lehrerin_Mo', 'Talent hilft am Anfang, aber Weitermachen ist wichtiger.']],
      { task: 'Wer sagt was?', taskEn: 'Who says what?' }),
    mcq('m3-q1', 'Warum hat Svea mit Tennis aufgehört?', ['Sie hatte keine Zeit mehr.', 'Sie hat trotz Training nie ein Turnier gewonnen.', 'Sie hat sich verletzt.'], 1),
    mcq('m3-q2', 'Was machen die besten Schüler von Lehrerin_Mo?', ['Sie machen nach einem Rückschlag weiter.', 'Sie lernen weniger als die anderen.', 'Sie haben immer die besten Noten.'], 0),
    grammar('m3-gram', 'Modalverben und ihre Alternativen', {
      intro: 'Modalverben kann man durch andere Ausdrücke ersetzen. Das klingt oft formeller und kommt in geschriebenen Texten häufig vor. Achtung: Nach den Alternativen steht der Infinitiv **mit zu**.',
      head: ['Modalverb', 'Alternativen', 'Beispiel'],
      rows: [
        ['können', 'fähig sein, in der Lage sein, imstande sein, es ist möglich', 'Ich **bin in der Lage**, jeden Tag zu üben.'],
        ['müssen', 'es ist notwendig, es ist erforderlich, gezwungen sein, haben … zu', 'Es **ist notwendig**, viel zu üben.'],
        ['dürfen', 'es ist erlaubt, die Erlaubnis haben, das Recht haben', 'Es **ist erlaubt**, Fehler zu machen.'],
        ['nicht dürfen', 'es ist verboten, es ist nicht erlaubt', 'Es **ist verboten**, sich auszuruhen.'],
        ['wollen', 'die Absicht haben, vorhaben, planen, beabsichtigen', 'Sie **haben die Absicht** weiterzumachen.'],
        ['sollen', 'den Auftrag haben, es ist ratsam, es wird empfohlen', 'Es **ist ratsam**, regelmäßig zu wiederholen.'],
      ],
      en: 'Each modal verb has more formal alternatives. After the alternative you need an infinitive with "zu": Ich kann üben → Ich bin in der Lage zu üben.',
    }),
    tip('m3-tip', 'Tipp: es oder man?', 'Viele Alternativen beginnen mit **es**: *Es ist verboten, hier zu rauchen.* Mit Modalverb sagt man dafür oft **man**: *Man darf hier nicht rauchen.*'),
    match('m3-match2', [['können', 'in der Lage sein'], ['müssen', 'es ist notwendig'], ['dürfen', 'es ist erlaubt'], ['nicht dürfen', 'es ist verboten'], ['wollen', 'die Absicht haben'], ['sollen', 'es wird empfohlen']],
      { task: 'Welche Alternative passt zu welchem Modalverb?', taskEn: 'Which alternative matches which modal verb?' }),
    gap('m3-gap', [
      'Man darf im Kurs kein Handy benutzen. → Es ist {{verboten}}, im Kurs ein Handy zu benutzen.',
      'Ich kann die Prüfung im Mai machen. → Ich bin in der {{Lage}}, die Prüfung im Mai zu machen.',
      'Wir wollen einen Sprachkurs besuchen. → Wir haben die {{Absicht}}, einen Sprachkurs zu besuchen.',
      'Man muss sich vorher anmelden. → Es ist {{notwendig|erforderlich}}, sich vorher anzumelden.',
      'Man darf ein Wörterbuch benutzen. → Es ist {{erlaubt}}, ein Wörterbuch zu benutzen.',
    ], { task: 'Sag es ohne Modalverb.', taskEn: 'Say it without the modal verb. Fill in one word.' }),
    gap('m3-gap2', [
      'Es ist nicht möglich, den Kurs online zu machen. → Man {{kann}} den Kurs nicht online machen.',
      'Es ist erforderlich, einen Ausweis mitzubringen. → Man {{muss}} einen Ausweis mitbringen.',
      'Sie hat vor, Spanisch zu lernen. → Sie {{will|möchte}} Spanisch lernen.',
      'Es ist nicht erlaubt, hier zu parken. → Man {{darf}} hier nicht parken.',
    ], { task: 'Und jetzt zurück: Sag es mit Modalverb.', taskEn: 'Now the other way: say it with a modal verb.' }),
    order('m3-order', ['Ich war', 'nie', 'in der Lage,', 'ein Turnier', 'zu gewinnen.'], { task: 'Bau den Satz.', taskEn: 'Build the sentence.', hint: 'Nach „in der Lage sein“ steht der Infinitiv mit zu am Ende.' }),
  ]);

const kommunikation = section('kommunikation', 'kommunikation', 'Alltag und Beruf', 'Könnten Sie mir sagen, …?', 'rose', 20,
  ['höflich um Informationen bitten', 'indirekte Fragen bilden', 'Auskunft geben'], [
    text('k-intro', 'Wer direkt fragt („Was kostet der Kurs?“), bekommt eine Antwort. Wer höflich fragt („Könnten Sie mir sagen, was der Kurs kostet?“), bekommt eine freundliche Antwort. In beiden Gesprächen geht es um eine [[Auskunft]]: einmal an einer [[Volkshochschule]] in Stuttgart, einmal in einer Bibliothek in Bern.', { kicker: 'Zum Einstieg' }),
    audio('k-a1', 'Gespräch 1: An der Volkshochschule (Stuttgart)', [
      ['frauHaeberle', 'Volkshochschule Stuttgart, Häberle, grüß Gott.'],
      ['priya', 'Guten Tag, Nair mein Name. Ich interessiere mich für einen Italienischkurs. Könnten Sie mir sagen, wann der nächste Kurs für Anfänger beginnt?'],
      ['frauHaeberle', 'Ha, da muss i gschwind gucken. Also, der nächschte fängt am vierten März an, immer dienstags von sechs bis halb acht.'],
      ['priya', 'Das passt gut. Und ich wüsste gern, ob man vorher einen Einstufungstest machen muss.'],
      ['frauHaeberle', 'Noi, für Anfänger net. Den brauchet Sie bloß, wenn Sie scho a bissle Italienisch könnet.'],
      ['priya', 'Verstehe. Darf ich noch fragen, wie viel der Kurs kostet?'],
      ['frauHaeberle', 'Hundertvierzig Euro für zwölf Abende. Für Studierende gibt es eine Ermäßigung.'],
      ['priya', 'Wunderbar. Wissen Sie vielleicht auch, bis wann ich mich anmelden kann?'],
      ['frauHaeberle', 'Bis zum achtundzwanzigsten Februar, am beschte online. Aber warten Sie net zu lang, der Kurs isch schnell voll.'],
      ['priya', 'Dann melde ich mich heute noch an. Vielen Dank für die Auskunft!'],
    ], { task: 'Welche Informationen bekommt Priya?', taskEn: 'What information does Priya get? Frau Häberle speaks Swabian.',
      note: 'Schwäbisch: **gschwind** = schnell. **i** = ich. **noi** = nein. **net** = nicht. **a bissle** = ein bisschen. **isch** = ist. **nächschte, beschte** = nächste, beste.' }),
    mcq('k-q1', 'Wann findet der Kurs statt?', ['dienstags von 18:00 bis 19:30 Uhr', 'donnerstags von 18:00 bis 19:30 Uhr', 'dienstags von 16:00 bis 17:30 Uhr'], 0),
    mcq('k-q2', 'Wer braucht einen Einstufungstest?', ['alle Teilnehmenden', 'nur Studierende', 'nur Personen, die schon etwas Italienisch können'], 2),
    audio('k-a2', 'Gespräch 2: In der Bibliothek (Bern)', [
      ['tomasz', 'Entschuldigung, darf ich Sie etwas fragen?'],
      ['urs', 'Grüessech. Ja, gern.'],
      ['tomasz', 'Ich bin neu hier. Können Sie mir erklären, wie ich einen Bibliotheksausweis bekomme?'],
      ['urs', 'Das ist ganz einfach. Sie füllen dieses Formular aus und zeigen mir einen Ausweis mit Foto.'],
      ['tomasz', 'Und ich würde gern wissen, wie lange man die Bücher behalten darf.'],
      ['urs', 'Vier Wochen. Danach können Sie zweimal verlängern, wenn niemand das Buch reserviert hat.'],
      ['tomasz', 'Gut. Eine letzte Frage: Wissen Sie, ob es hier auch Lernplätze mit Steckdose gibt?'],
      ['urs', 'Ja, im zweiten Stock. Die sind aber meistens schon am Morgen besetzt.'],
      ['tomasz', 'Dann komme ich früh. Merci vielmal.'],
    ], { task: 'Was möchte Tomasz wissen?', taskEn: 'What does Tomasz want to know? Urs speaks Swiss Standard German.', note: 'Schweizerisch: **Grüessech** = Guten Tag (Bern). **Merci vielmal** = Vielen Dank.' }),
    mcq('k-q3', 'Wie lange darf man ein Buch höchstens behalten, wenn niemand es reserviert?', ['vier Wochen', 'acht Wochen', 'zwölf Wochen'], 2, { why: 'Vier Wochen, dann zweimal verlängern: 4 + 4 + 4 = 12 Wochen.' }),
    grammar('k-gram', 'Indirekte Fragen', {
      intro: 'Eine höfliche Frage beginnt mit einer Einleitung. Danach folgt ein Nebensatz: Das Verb steht **am Ende**.',
      head: ['Direkte Frage', 'Indirekte Frage'],
      rows: [
        ['Wann **beginnt** der Kurs?', 'Könnten Sie mir sagen, **wann** der Kurs **beginnt**?'],
        ['Was **kostet** der Kurs?', 'Ich wüsste gern, **was** der Kurs **kostet**.'],
        ['**Gibt** es eine Ermäßigung? (Ja/Nein-Frage)', 'Wissen Sie, **ob** es eine Ermäßigung **gibt**?'],
      ],
      notes: ['Bei Ja/Nein-Fragen benutzt man **ob**.', 'Nach „Ich wüsste gern“ und „Ich würde gern wissen“ steht ein Punkt, kein Fragezeichen.'],
      en: 'A polite question starts with an opener (Könnten Sie mir sagen, …). The question itself becomes a subordinate clause with the verb at the end. Yes/no questions use "ob" (whether).',
    }),
    phrases('k-phr', 'Redemittel: um Informationen bitten', {
      'höflich fragen': ['Könnten Sie mir sagen, wann …?', 'Ich wüsste gern, ob …', 'Darf ich fragen, wie viel …?', 'Wissen Sie vielleicht, wo …?', 'Ich würde gern wissen, wie lange …'],
      'nachfragen und danken': ['Eine letzte Frage: …', 'Habe ich das richtig verstanden?', 'Vielen Dank für die Auskunft.'],
    }),
    gap('k-gap', ['Könnten Sie mir sagen, {{wann}} der Kurs beginnt?', 'Ich wüsste gern, {{ob}} man einen Test machen muss.', 'Darf ich fragen, {{wie}} viel der Kurs kostet?', 'Wissen Sie, {{wo}} die Anmeldung ist?', 'Ich würde gern wissen, {{ob}} es eine Ermäßigung gibt.'],
      { task: 'Fragewort oder ob?', taskEn: 'Question word or "ob"?' }),
    order('k-order1', ['Könnten Sie', 'mir sagen,', 'bis wann', 'ich mich', 'anmelden kann?'], { task: 'Bau die höfliche Frage.', taskEn: 'Build the polite question.', hint: 'Das Verb steht am Ende.' }),
    order('k-order2', ['Ich wüsste gern,', 'ob', 'der Kurs', 'auch online', 'stattfindet.'], { hint: 'Nach „ob“ steht das Verb am Ende.' }),
    compose('k-comp', 'Du möchtest einen Deutschkurs an einer Sprachschule machen. Schreib eine kurze, höfliche Anfrage.', [
      ['Sag, wofür du dich interessierst.', 'Say what you are interested in.', ['Guten Tag,', 'ich interessiere mich', 'für einen', 'B2-Kurs.']],
      ['Frag nach dem Beginn.', 'Ask when it starts.', ['Könnten Sie', 'mir sagen,', 'wann', 'der nächste Kurs', 'beginnt?']],
      ['Frag nach dem Preis.', 'Ask about the price.', ['Außerdem', 'wüsste ich gern,', 'wie viel', 'er kostet.']],
      ['Bedanke dich.', 'Say thank you.', ['Vielen Dank', 'im Voraus', 'für', 'Ihre Auskunft.']],
    ], { task: 'Bau eine Anfrage per E-Mail.', taskEn: 'Build an inquiry email.' }),
  ]);

const grammatik = section('grammatik', 'grammatik', 'Grammatik im Blick', 'Alles auf einen Blick', 'peach', 12,
  ['Infinitiv mit und ohne zu wiederholen', 'Modalverben und Alternativen wiederholen'], [
    grammar('g-1', 'Infinitiv mit und ohne zu', {
      head: ['', 'mit zu', 'ohne zu'],
      rows: [
        ['Nach', 'anfangen, aufhören, versuchen, vorhaben, vergessen, Lust/Zeit haben, es ist schwer/wichtig', 'Modalverben, lassen, hören, sehen, gehen, bleiben, werden'],
        ['Beispiel', 'Ich versuche, jeden Tag **zu üben**.', 'Ich muss jeden Tag **üben**.'],
        ['trennbar', 'Vergiss nicht **anzurufen**.', 'Ich will morgen **anrufen**.'],
      ],
      en: 'With "zu": after verbs like anfangen/versuchen, after "es ist + adjective" and nouns like Lust/Zeit. Without "zu": after modal verbs, lassen, hören, sehen, gehen, bleiben, werden.',
    }),
    grammar('g-2', 'Modalverben und Alternativen', {
      head: ['Modalverb', 'Alternative + Infinitiv mit zu'],
      rows: [['können', 'in der Lage sein, fähig sein, es ist möglich'], ['müssen', 'es ist notwendig, es ist erforderlich'], ['dürfen', 'es ist erlaubt'], ['nicht dürfen', 'es ist verboten'], ['wollen', 'die Absicht haben, vorhaben'], ['sollen', 'es ist ratsam, es wird empfohlen']],
    }),
    grammar('g-3', 'Indirekte Fragen', {
      head: ['Typ', 'Beispiel'],
      rows: [['W-Frage', 'Wissen Sie, **wo** die Bibliothek **ist**?'], ['Ja/Nein-Frage', 'Wissen Sie, **ob** die Bibliothek heute geöffnet **hat**?']],
    }),
    gap('g-gap', ['Hast du Lust, heute Abend ins Kino {{zu gehen}}? (gehen)', 'Ich kann dich leider nicht {{abholen}}. (abholen)', 'Sie hat aufgehört, Klavier {{zu spielen}}. (spielen)', 'Wir hören die Kinder im Garten {{lachen}}. (lachen)', 'Es ist wichtig, pünktlich {{anzukommen}}. (ankommen)'],
      { task: 'Mit oder ohne zu?', taskEn: 'With or without "zu"?' }),
    mcq('g-q1', 'Welcher Satz ist richtig?', ['Ich bin in der Lage, dir helfen.', 'Ich bin in der Lage, dir zu helfen.', 'Ich bin in der Lage, zu dir helfen.'], 1, { task: 'Wähle den richtigen Satz.', taskEn: 'Choose the correct sentence.' }),
    mcq('g-q2', '„Kommt Frau Nair heute?“ Höflich und indirekt:', ['Wissen Sie, ob Frau Nair heute kommt?', 'Wissen Sie, ob kommt Frau Nair heute?', 'Wissen Sie, wenn Frau Nair heute kommt?'], 0),
  ]);

const uebungen = section('uebungen', 'uebung', 'Übungen', 'Training: Wörter rund ums Lernen', 'butter', 20,
  ['Wortschatz zum Thema Lernen festigen', 'Groß- und Kleinschreibung üben', 'Aussprache: -e, -er und -en am Wortende'], [
    gap('u-gap1', ['Ich kann mir Namen einfach nicht {{merken}}.', 'Vor der Prüfung muss ich alles noch einmal {{wiederholen}}.', 'Das Gedicht kann sie {{auswendig}}.', 'Du machst wirklich große {{Fortschritte}}.', 'Dieses Wort kenne ich nicht, das muss ich {{nachschlagen}}.', 'Mit einer {{Eselsbrücke}} lernt man leichter.'],
      { bank: ['merken', 'wiederholen', 'auswendig', 'Fortschritte', 'nachschlagen', 'Eselsbrücke'], task: 'Welches Wort passt?', taskEn: 'Which word fits?' }),
    match('u-match', [['eine Prüfung', 'bestehen'], ['Notizen', 'machen'], ['einen Kurs', 'belegen'], ['sich Mühe', 'geben'], ['eine Frage', 'stellen'], ['einen Fehler', 'korrigieren']],
      { task: 'Welches Verb passt zum Nomen?', taskEn: 'Which verb goes with the noun?' }),
    sort('u-sort', ['Das hilft beim Lernen', 'Das stört beim Lernen'], [['regelmäßige Pausen', 0], ['genug Schlaf', 0], ['das Handy auf dem Tisch', 1], ['eine Eselsbrücke', 0], ['Lärm aus der Nachbarwohnung', 1], ['Wiederholung nach einem Tag', 0], ['fünf Stunden ohne Pause', 1]],
      { task: 'Hilft das oder stört das?', taskEn: 'Does it help or get in the way?' }),
    grammar('u-gram', 'Richtig schreiben: groß oder klein?', {
      head: ['Groß schreibt man', 'Beispiel'],
      rows: [['Nomen', 'das **Gedächtnis**, die **Ausdauer**'], ['Verben und Adjektive, die als Nomen benutzt werden', 'das **Lernen**, beim **Üben**, etwas **Neues**, nichts **Besonderes**'], ['das erste Wort im Satz und die Anrede Sie/Ihnen', '**Könnten** **Sie** mir helfen?']],
      notes: ['Signale für ein Nomen: Artikel (das Lernen), Präposition + Artikel (beim Lesen, zum Üben), Wörter wie etwas, nichts, viel, wenig (etwas Wichtiges).'],
      en: 'Nouns are capitalized, and so are verbs and adjectives used as nouns: das Lernen, beim Üben, etwas Neues.',
    }),
    mcq('u-q1', 'Was ist richtig geschrieben?', ['Beim lernen höre ich gern Musik.', 'Beim Lernen höre ich gern Musik.', 'Beim Lernen höre ich gern musik.'], 1),
    mcq('u-q2', 'Was ist richtig geschrieben?', ['Ich habe heute etwas neues gelernt.', 'Ich habe heute Etwas neues gelernt.', 'Ich habe heute etwas Neues gelernt.'], 2),
    audio('u-aus', 'Aussprache: -e, -er, -en am Wortende', [
      ['erzaehler', 'Am Wortende klingt das E schwach. Hör zu: ich lerne. die Frage. die Schule.'],
      ['erzaehler', 'Die Endung E R klingt fast wie ein kurzes A: der Lehrer. die Schüler. besser. immer.'],
      ['jonas', 'Bei E N hört man das E oft kaum: wir lernen. die Fragen. sprechen. wiederholen.'],
      ['jonas', 'Und jetzt alles zusammen: Die Lehrer wiederholen die Fragen immer wieder.'],
    ], { task: 'Hör zu und sprich nach.', taskEn: 'Listen and repeat. Final -e is weak, -er sounds almost like a short "a", and in -en the "e" nearly disappears.' }),
    mcq('u-q3', 'Wie klingt die Endung in „Lehrer“ und „besser“?', ['wie ein deutliches „er“ mit gerolltem R', 'fast wie ein kurzes, schwaches „a“', 'wie „eh“'], 1),
  ]);

const wortschatz = section('wortschatz', 'wortschatz', 'Wortschatz und Check', 'Das kann ich jetzt', 'mint', 10,
  ['die wichtigsten Wörter wiederholen', 'den eigenen Stand einschätzen'], [
    cards('w-cards', [
      ['das Gedächtnis', 'die Fähigkeit, sich etwas zu merken', 'memory'], ['sich etwas merken', 'etwas im Kopf behalten', 'to memorize'], ['auswendig lernen', 'so lernen, dass man es ohne Buch weiß', 'to learn by heart'],
      ['die Eselsbrücke', 'ein Trick zum Merken', 'mnemonic'], ['Fortschritte machen', 'besser werden', 'to make progress'], ['etwas nachschlagen', 'eine Information suchen', 'to look something up'],
      ['die Ausdauer', 'die Kraft, lange weiterzumachen', 'perseverance'], ['aufgeben', 'aufhören, weil es zu schwer ist', 'to give up'], ['der Rückschlag', 'ein Moment, in dem es schlechter läuft', 'setback'],
      ['die Auskunft', 'eine Information von einer Person', 'information'], ['die Ermäßigung', 'ein niedrigerer Preis', 'discount'], ['sich anmelden', 'seinen Namen für einen Kurs eintragen', 'to register'],
    ]),
    checklist('w-check', ['Ich kann eine Umfrage zum Thema Lernen verstehen.', 'Ich kann von meinem eigenen Lernen erzählen.', 'Ich kann die Meinung in einem Kommentar erkennen.', 'Ich kann meine Meinung mit Argumenten sagen.', 'Ich weiß, wann der Infinitiv mit zu steht.', 'Ich kann Modalverben durch andere Ausdrücke ersetzen.', 'Ich kann höflich und indirekt nach Informationen fragen.']),
    mcq('w-q1', '„Ich habe ___, im Herbst einen Kurs zu machen.“', ['vor', 'an', 'auf'], 0, { task: 'Letzter Check vor der Prüfung', taskEn: 'Last check before the exam.' }),
    mcq('w-q2', 'Welche Frage ist am höflichsten?', ['Was kostet das?', 'Sagen Sie mir den Preis!', 'Könnten Sie mir sagen, was das kostet?'], 2),
  ]);

export const kapitel2: Chapter = {
  id: 'kapitel-2', number: 2, title: 'Kopfsache', theme: 'Lernen, Gedächtnis, Wissen',
  grammar: 'Infinitiv mit und ohne zu. Modalverben und Alternativen. Indirekte Fragen.',
  sections: [einstieg, modul1, modul2, modul3, kommunikation, grammatik, uebungen, wortschatz],
  games: ['k2-sprint', 'k2-memory', 'k2-satzbau', 'k2-artikel'],
  exam: [
    x(1, mcq('x1', '„Ich habe keine Lust, heute ___.“', ['zu kochen', 'kochen', 'zu gekocht'], 0)),
    x(1, mcq('x2', '„Meine Eltern lassen mich allein in den Urlaub ___.“', ['zu fahren', 'fahren', 'gefahren'], 1)),
    x(1, mcq('x3', '„Vergiss nicht, das Fenster ___.“', ['zu zumachen', 'zumachen', 'zuzumachen'], 2)),
    x(4, gap('x4', ['Wir haben vor, im Sommer nach Wien {{zu fahren}}. (fahren)', 'Ich sehe ihn jeden Morgen zur Arbeit {{gehen}}. (gehen)', 'Es ist schwer, früh {{aufzustehen}}. (aufstehen)', 'Du solltest mehr {{schlafen}}. (schlafen)'], { task: 'Ergänze den Infinitiv mit oder ohne zu.' })),
    x(1, mcq('x5', '„Es ist verboten, hier zu parken“ bedeutet:', ['Man muss hier parken.', 'Man darf hier nicht parken.', 'Man kann hier nicht parken.'], 1)),
    x(1, mcq('x6', '„Sie will Ärztin werden.“ Ohne Modalverb:', ['Sie ist fähig, Ärztin zu werden.', 'Sie hat die Erlaubnis, Ärztin zu werden.', 'Sie hat die Absicht, Ärztin zu werden.'], 2)),
    x(3, gap('x7', ['Man muss das Formular ausfüllen. → Es ist {{notwendig|erforderlich}}, das Formular auszufüllen.', 'Man kann online bezahlen. → Es ist {{möglich}}, online zu bezahlen.', 'Man darf Hunde mitbringen. → Es ist {{erlaubt}}, Hunde mitzubringen.'], { task: 'Sag es ohne Modalverb.' })),
    x(1, mcq('x8', 'Wie verbindet sich laut Lesetext neues Wissen am besten mit dem Gedächtnis?', ['wenn es sich mit Bekanntem verbindet', 'wenn man es nur einmal liest', 'wenn man dabei Musik hört'], 0),
      text('x-st1', 'Viele Menschen glauben, sie hätten ein schlechtes Gedächtnis. Meistens stimmt das nicht. Sie lernen nur auf eine Art, die dem Gehirn nicht hilft: Sie lesen eine Seite dreimal hintereinander und hoffen, dass etwas hängen bleibt. Besser ist es, das Buch zu schließen und zu versuchen, den Inhalt mit eigenen Worten zu wiederholen. Das ist anstrengender, aber genau diese Anstrengung macht das Wissen stabil. Hilfreich ist auch, Neues mit etwas Bekanntem zu verbinden, zum Beispiel mit einem Bild oder einer kleinen Geschichte. Und wer nach einem Tag, nach einer Woche und nach einem Monat wiederholt, vergisst am wenigsten.', { kicker: 'Lesen' })),
    x(1, mcq('x9', 'Welche Lernmethode empfiehlt der Text oben?', ['eine Seite dreimal lesen', 'das Buch schließen und den Inhalt selbst wiederholen', 'nur kurz vor der Prüfung lernen'], 1)),
    x(1, mcq('x10', 'Wann beginnt der Kurs?', ['am 5. Mai', 'am 15. Mai', 'am 5. März'], 0),
      audio('x-st2', 'Hören: Anruf bei einer Sprachschule', [
        ['frauBaumann', 'Sprachschule Lindenhof, Baumann, grüezi.'],
        ['jonas', 'Guten Tag. Ich wüsste gern, ob Sie auch Abendkurse für Französisch anbieten.'],
        ['frauBaumann', 'Ja, montags und mittwochs von sieben bis halb neun.'],
        ['jonas', 'Könnten Sie mir sagen, wann der nächste Kurs beginnt?'],
        ['frauBaumann', 'Am fünften Mai. Die Anmeldung ist bis Ende April möglich.'],
        ['jonas', 'Und darf ich fragen, ob es eine Ermäßigung für Studierende gibt?'],
        ['frauBaumann', 'Ja, Studierende zahlen zwanzig Prozent weniger.'],
      ])),
    x(1, mcq('x11', 'Was bekommen Studierende? (Hörtext oben)', ['einen kostenlosen Kurs', '20 Prozent Ermäßigung', 'ein Buch gratis'], 1)),
    x(2, order('x12', ['Könnten Sie', 'mir sagen,', 'wo', 'die Anmeldung', 'ist?'], { task: 'Bau die höfliche Frage.' })),
    x(2, order('x13', ['Ich wüsste gern,', 'ob', 'man', 'einen Test', 'machen muss.'], { task: 'Bau die indirekte Frage.' })),
    x(3, gap('x14', ['Ich kann mir Zahlen schlecht {{merken}}.', 'Sie macht große {{Fortschritte}}.', 'Vielen Dank für die {{Auskunft}}.'], { bank: ['Auskunft', 'merken', 'Fortschritte'], task: 'Ergänze.' })),
    x(1, mcq('x15', 'Was ist richtig geschrieben?', ['Zum üben brauche ich Ruhe.', 'Zum Üben brauche ich Ruhe.', 'Zum Üben brauche ich ruhe.'], 1)),
  ],
};

export const games2: GameDef[] = [
  {
    id: 'k2-sprint', engine: 'sprint', title: 'Zu oder nicht zu?', blurb: '60 Sekunden: Braucht der Satz ein „zu“?', skill: 'Infinitiv mit und ohne zu', tone: 'mint', chapter: 2, emoji: '⚡',
    rules: 'Du siehst einen Satz mit einer Lücke. Tippe auf die richtige Form. Du hast 60 Sekunden.', label: 'Was passt?',
    items: [
      { q: 'Ich versuche, mehr ___.', a: 'zu lesen', wrong: ['lesen'] }, { q: 'Wir müssen jetzt ___.', a: 'gehen', wrong: ['zu gehen'] },
      { q: 'Hast du Zeit, mir ___?', a: 'zu helfen', wrong: ['helfen'] }, { q: 'Er lässt sein Auto ___.', a: 'reparieren', wrong: ['zu reparieren'] },
      { q: 'Es ist schön, dich ___.', a: 'zu sehen', wrong: ['sehen'] }, { q: 'Ich höre sie ___.', a: 'singen', wrong: ['zu singen'] },
      { q: 'Sie hat vergessen, ___.', a: 'anzurufen', wrong: ['anrufen', 'zu anrufen'] }, { q: 'Darf ich hier ___?', a: 'sitzen', wrong: ['zu sitzen'] },
      { q: 'Ich habe vor, früh ___.', a: 'aufzustehen', wrong: ['aufstehen', 'zu aufstehen'] }, { q: 'Wir gehen morgen ___.', a: 'einkaufen', wrong: ['einzukaufen'] },
      { q: 'Hör bitte auf ___!', a: 'zu rauchen', wrong: ['rauchen'] }, { q: 'Du solltest mehr ___.', a: 'schlafen', wrong: ['zu schlafen'] },
      { q: 'Es macht Spaß, zusammen ___.', a: 'zu kochen', wrong: ['kochen'] }, { q: 'Ich werde dich ___.', a: 'besuchen', wrong: ['zu besuchen'] },
      { q: 'Sie hat Angst, allein ___.', a: 'zu reisen', wrong: ['reisen'] }, { q: 'Bleib ruhig ___.', a: 'sitzen', wrong: ['zu sitzen'] },
      { q: 'Er fängt an, Deutsch ___.', a: 'zu lernen', wrong: ['lernen'] }, { q: 'Ich möchte einen Kaffee ___.', a: 'trinken', wrong: ['zu trinken'] },
    ],
  },
  {
    id: 'k2-memory', engine: 'memory', title: 'Modal-Memory', blurb: 'Finde die Paare: Modalverb und Alternative.', skill: 'Modalverben und Alternativen', tone: 'lilac', chapter: 2, emoji: '🃏',
    rules: 'Dreh zwei Karten um. Ein Paar ist ein Satz mit Modalverb und der Satz mit derselben Bedeutung ohne Modalverb.', kinds: ['Modalverb', 'Alternative'],
    pairs: [['Ich kann.', 'Ich bin in der Lage.'], ['Man muss.', 'Es ist notwendig.'], ['Man darf.', 'Es ist erlaubt.'], ['Man darf nicht.', 'Es ist verboten.'], ['Ich will.', 'Ich habe die Absicht.'], ['Man soll.', 'Es wird empfohlen.'], ['Man kann.', 'Es ist möglich.'], ['Ich muss.', 'Ich bin gezwungen.'], ['Ich darf.', 'Ich habe die Erlaubnis.'], ['Wir wollen.', 'Wir haben vor.']],
  },
  {
    id: 'k2-satzbau', engine: 'satzbau', title: 'Höflich gefragt', blurb: 'Bau indirekte Fragen und Infinitivsätze.', skill: 'Indirekte Fragen', tone: 'sky', chapter: 2, emoji: '🧱',
    rules: 'Tippe die Satzteile in der richtigen Reihenfolge an. In der indirekten Frage steht das Verb am Ende.',
    sentences: [
      { parts: ['Könnten Sie', 'mir sagen,', 'wann', 'der Kurs', 'beginnt?'], hint: 'Verb am Ende' },
      { parts: ['Wissen Sie,', 'ob', 'die Bibliothek', 'heute', 'geöffnet hat?'], hint: 'Ja/Nein-Frage mit ob' },
      { parts: ['Ich wüsste gern,', 'wie viel', 'der Kurs', 'kostet.'], hint: 'Verb am Ende' },
      { parts: ['Darf ich fragen,', 'wo', 'ich mich', 'anmelden kann?'], hint: 'Modalverb ganz am Ende' },
      { parts: ['Ich habe vor,', 'nächstes Jahr', 'eine Prüfung', 'zu machen.'], hint: 'Infinitiv mit zu am Ende' },
      { parts: ['Es fällt mir schwer,', 'mich abends', 'zu konzentrieren.'], hint: 'Infinitiv mit zu am Ende' },
      { parts: ['Vergiss nicht,', 'dich', 'für den Kurs', 'anzumelden.'], hint: 'trennbar: an-zu-melden' },
      { parts: ['Ich würde gern wissen,', 'ob', 'es', 'eine Ermäßigung', 'gibt.'], hint: 'ob + Verb am Ende' },
      { parts: ['Sie ist', 'in der Lage,', 'drei Sprachen', 'zu sprechen.'], hint: 'in der Lage sein + zu' },
    ],
  },
  {
    id: 'k2-artikel', engine: 'regen', title: 'Artikelregen: Lernen', blurb: 'der, die oder das? Fang die Nomen aus Kapitel 2.', skill: 'Artikel', tone: 'rose', chapter: 2, emoji: '☔',
    rules: 'Ein Nomen fällt herunter. Tippe auf den richtigen Artikel, bevor es unten ankommt. Du hast drei Leben.', buckets: ['der', 'die', 'das'],
    words: artikel('das Gedächtnis, die Ausdauer, der Fortschritt, die Quelle, das Talent, der Rückschlag, die Auskunft, die Ermäßigung, die Anmeldung, der Kurs, die Prüfung, das Wissen, der Zusammenhang, die Weiterbildung, das Wörterbuch, der Fehler, die Frage, das Formular, der Ausweis, die Bibliothek, das Argument, der Kommentar, die Meinung, das Beispiel'),
  },
];
