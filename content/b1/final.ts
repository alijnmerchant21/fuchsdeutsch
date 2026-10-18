import type { FinalExam } from '../types';
import { audio, gap, mcq, order, text, x } from '../helpers';

// B1 course final ("Abschlusstest B1"). This is a course test, not a Goethe mock exam:
// it checks what the twelve chapters of Season 3 taught. The four parts are course modules:
// lesen = Lesen, hoeren = Hören, schreiben = Grammatik und Schreiben, sprechen = Redemittel.
// The story is set in September and October 2027, right after the finale of K12.
// All ids start with "b1f-" so they are unique across the site. Everything is auto-checked.

const lesen = [
  // Text 1: the cooperative's second newsletter
  x(2, mcq('b1f-l1', 'Was ist am 1. Oktober passiert?', ['Die Mieten sind gestiegen.', 'Das Haus gehört jetzt der Genossenschaft.', 'Die Arbeiten am Dach haben begonnen.'], 1, { task: 'Lies den Rundbrief. Welche Antwort passt?', taskEn: 'Read the newsletter. Which answer is correct?' }),
    text('b1f-l-st1', `**Rundbrief Nr. 2 der Fuchsbau eG**

Leipzig, 4. Oktober 2027

Liebe Mitglieder,

seit dem 1. Oktober ist es offiziell: Das Haus in der Karl-Heine-Straße gehört uns allen. Nach dem Sommerfest haben wir lange gefeiert, aber jetzt beginnt die Arbeit.

Ab Montag, dem 18. Oktober, wird das kaputte Dach repariert. Die Arbeiten dauern etwa drei Wochen. Während dieser Zeit steht ein Gerüst vor dem Haus, deshalb können die Fahrräder nicht mehr im Hof stehen. Bitte stellt sie in den Keller.

Wer mitarbeiten möchte, kann sich in eine der drei Arbeitsgruppen eintragen: Garten, Finanzen oder Feste. Die Listen hängen im Treppenhaus. Ihr braucht keine Erfahrung mitzubringen, nur ein bisschen Zeit.

Am Samstag, dem 16. Oktober, machen wir einen Herbstputz im Hof. Bitte bringt Handschuhe mit. Kenji kocht danach eine Suppe für alle.

Für den Vorstand
Nele`, { kicker: 'Lesen 1', title: 'Post von der Genossenschaft' })),
  x(2, mcq('b1f-l2', 'Warum sollen die Bewohner ihre Fahrräder in den Keller stellen? (Lesen 1)', ['Weil im Hof ein Garten entsteht.', 'Weil ein Gerüst vor dem Haus steht.', 'Weil die Fahrräder im Hof oft gestohlen werden.'], 1, { task: 'Lies noch einmal den Rundbrief.', taskEn: 'Read the newsletter again.' })),
  x(2, mcq('b1f-l3', 'Was muss man mitbringen, wenn man in einer Arbeitsgruppe mitmachen will? (Lesen 1)', ['Erfahrung in Garten oder Finanzen', 'Handschuhe und eine Suppe', 'nur etwas Zeit'], 2, { task: 'Lies noch einmal den Rundbrief.', taskEn: 'Read the newsletter again.' })),

  // Text 2: Herr Vogt's last notice in the stairwell
  x(2, mcq('b1f-l4', 'Wohin überweisen die Mieter die Miete für Oktober?', ['auf das Konto der Genossenschaft', 'auf das Konto der Elbstein Immobilien GmbH', 'direkt an Herrn Vogt'], 0, { task: 'Lies den Aushang. Welche Antwort passt?', taskEn: 'Read the notice. Which answer is correct?' }),
    text('b1f-l-st2', `**Aushang: Übergabe des Hauses**

Sehr geehrte Mieterinnen und Mieter,

wie Sie wissen, wurde das Haus Karl-Heine-Straße an die Wohnungsgenossenschaft Fuchsbau eG verkauft. Ab dem 1. Oktober 2027 ist die Genossenschaft Ihre Vermieterin. Die Miete für Oktober überweisen Sie bitte schon auf das Konto der Genossenschaft. Die Kontodaten bekommen Sie vom Vorstand.

Am Donnerstag, dem 23. September, bin ich von 15 bis 18 Uhr im Erdgeschoss im ehemaligen Waschraum. Dort übergebe ich dem Vorstand die Schlüssel für Keller und Dachboden. Wenn Sie Fragen haben, können Sie gern vorbeikommen.

Schäden in Ihrer Wohnung melden Sie bitte bis zum 30. September schriftlich, damit sie im Übergabeprotokoll stehen. Später kann die Elbstein Immobilien GmbH sie nicht mehr bearbeiten.

Ich bedanke mich für die Zusammenarbeit und wünsche Ihnen alles Gute.

Mit freundlichen Grüßen
i. A. Vogt`, { kicker: 'Lesen 2', title: 'Im Treppenhaus' })),
  x(2, mcq('b1f-l5', 'Was macht Herr Vogt am 23. September? (Lesen 2)', ['Er repariert den Waschraum.', 'Er gibt dem Vorstand die Schlüssel und beantwortet Fragen.', 'Er holt die Miete für Oktober ab.'], 1, { task: 'Lies noch einmal den Aushang.', taskEn: 'Read the notice again.' })),
  x(2, mcq('b1f-l6', 'Ein Mieter hat einen Wasserschaden in der Küche. Was soll er machen? (Lesen 2)', ['Er ruft Herrn Vogt nach dem 1. Oktober an.', 'Er wartet, bis die Genossenschaft das Dach repariert.', 'Er meldet den Schaden bis zum 30. September schriftlich.'], 2, { task: 'Lies noch einmal den Aushang.', taskEn: 'Read the notice again.' })),

  // Text 3: Sofia's blog
  x(2, mcq('b1f-l7', 'Was war für Sofia am Anfang schwierig?', ['Sie verstand Herrn Lehmann kaum.', 'Sie fand keine Arbeit.', 'Sie durfte keine Pflanzen mitbringen.'], 0, { task: 'Lies Sofias Blog. Welche Antwort passt?', taskEn: 'Read Sofia’s blog. Which answer is correct?' }),
    text('b1f-l-st3', `**Sofias Blog: Ein Jahr im Fuchsbau**

Vor genau einem Jahr stand ich mit zwei Koffern und dreiundzwanzig Pflanzen vor dieser Haustür. Wenn Herr Lehmann Sächsisch sprach, verstand ich fast nichts. Und ich wusste nicht, dass die Läden in Deutschland am Sonntag geschlossen sind.

Was hat sich verändert? Mein Deutsch ist viel besser geworden, obwohl ich immer noch Fehler mache. Am meisten habe ich aber nicht im Büro gelernt, sondern in der Mietergruppe. Je öfter ich zu den Treffen ging, desto mutiger wurde ich. Am Ende habe ich sogar Briefe an die Stadt und an die Presse geschrieben.

Ich hätte nie gedacht, dass ich mich so für ein Haus engagieren würde. Aber hier habe ich nicht nur eine Wohnung gefunden, sondern auch eine Familie.

In drei Wochen fliege ich zum ersten Mal zurück nach São Paulo, denn meine Schwester heiratet. Ich freue mich riesig. Aber ich weiß jetzt schon: Ich werde den Fuchsbau vermissen.`, { kicker: 'Lesen 3', title: 'Sofias Blog' })),
  x(2, mcq('b1f-l8', 'Wo hat Sofia am meisten gelernt? (Lesen 3)', ['bei der Arbeit im Büro', 'in der Mietergruppe', 'in einem Deutschkurs'], 1, { task: 'Lies noch einmal Sofias Blog.', taskEn: 'Read Sofia’s blog again.' })),
  x(2, mcq('b1f-l9', 'Warum fliegt Sofia nach São Paulo? (Lesen 3)', ['Sie zieht zurück nach Brasilien.', 'Sie hat dort ein Vorstellungsgespräch.', 'Ihre Schwester heiratet.'], 2, { task: 'Lies noch einmal Sofias Blog.', taskEn: 'Read Sofia’s blog again.' })),
];

const hoeren = [
  // Audio 1: local radio news
  x(2, mcq('b1f-h1', 'Warum haben die Mieter eine Genossenschaft gegründet?', ['Sie wollten im Haus ein Restaurant eröffnen.', 'Sie hatten Angst, dass sie die Miete nach der Modernisierung nicht mehr bezahlen können.', 'Die Stadt hat ihnen das Haus geschenkt.'], 1, { task: 'Hör die Nachricht. Welche Antwort passt?', taskEn: 'Listen to the news report. Which answer is correct?' }),
    audio('b1f-h-st1', 'Hören 1: Nachrichten aus Leipzig', [
      ['moderatorin', 'Und nun Nachrichten aus Leipzig. In Plagwitz haben Mieterinnen und Mieter ihr Haus selbst gekauft. Das Haus in der Karl-Heine-Straße wurde 1904 gebaut und sollte teuer modernisiert werden. Viele Bewohner hatten Angst, dass sie die Miete danach nicht mehr bezahlen können. Deshalb gründeten sie eine Genossenschaft. 812 Menschen aus 14 Ländern haben Anteile gekauft, den Rest finanziert eine Bank mit einem Kredit. Bekannt wurde das Projekt durch das Lied „Unser Haus“ der Band Die Fuchsbande. Das Video wurde mehr als vierhunderttausend Mal angeklickt. Ab dem 1. Oktober gehört das Haus der Genossenschaft. Die Mieten sollen stabil bleiben.'],
    ])),
  x(2, mcq('b1f-h2', 'Wie wurde das Projekt bekannt? (Hören 1)', ['durch einen Artikel in der Zeitung', 'durch eine Demonstration vor dem Rathaus', 'durch ein Lied und ein Video'], 2, { task: 'Hör noch einmal die Nachricht.', taskEn: 'Listen to the news report again.' })),
  x(2, mcq('b1f-h3', 'Wer hat Anteile gekauft? (Hören 1)', ['812 Menschen aus 14 Ländern', 'nur die Bewohner des Hauses', 'die Bank und die Stadt Leipzig'], 0, { task: 'Hör noch einmal die Nachricht.', taskEn: 'Listen to the news report again.' })),

  // Audio 2: Kenji and Amara in October
  x(2, mcq('b1f-h4', 'Wie geht es Amara mit der Weiterbildung?', ['Sie ist anstrengend, aber Amara ist froh, dass sie geblieben ist.', 'Sie möchte sie abbrechen.', 'Sie hat noch nicht angefangen.'], 0, { task: 'Hör das Gespräch. Welche Antwort passt?', taskEn: 'Listen to the conversation. Which answer is correct?' }),
    audio('b1f-h-st2', 'Hören 2: Im Fuchs & Yuzu', [
      ['kenji', 'Amara! Du siehst müde aus. Wie läuft die Weiterbildung?'],
      ['amara', 'Ehrlich gesagt: anstrengend. Montags und dienstags bin ich im Kurs, den Rest der Woche auf der Station. Aber ich bin froh, dass ich geblieben bin.'],
      ['kenji', 'Wir auch! Ohne dich wäre es hier nur halb so schön.'],
      ['amara', 'Und du? Arbeitest du immer noch vierzehn Stunden am Tag?'],
      ['kenji', 'Nein, zum Glück nicht mehr. Seit Malte da ist, mache ich jeden Nachmittag eine Pause. Und montags bleibt das Restaurant geschlossen.'],
      ['amara', 'Sehr gut. Als deine Krankenschwester bin ich stolz auf dich.'],
      ['kenji', 'Dann darfst du heute auch die neue Suppe probieren. Sie ist für den Herbstputz am Samstag.'],
    ])),
  x(2, mcq('b1f-h5', 'Was hat sich bei Kenji verändert? (Hören 2)', ['Er hat das Restaurant verkauft.', 'Er macht jeden Nachmittag eine Pause.', 'Er arbeitet nur noch montags.'], 1, { task: 'Hör noch einmal das Gespräch.', taskEn: 'Listen to the conversation again.' })),
  x(2, mcq('b1f-h6', 'Für wen ist die neue Suppe? (Hören 2)', ['für die Patienten im Krankenhaus', 'für Amaras Kurs', 'für die Leute beim Herbstputz'], 2, { task: 'Hör noch einmal das Gespräch.', taskEn: 'Listen to the conversation again.' })),

  // Audio 3: planning an open day for the members
  x(2, mcq('b1f-h7', 'Warum soll die Band erst am Abend spielen?', ['Weil Felix am Nachmittag arbeiten muss.', 'Weil die Leute vorher reden und das Haus ansehen wollen.', 'Weil die Nachbarn am Nachmittag schlafen.'], 1, { task: 'Hör das Gespräch. Welche Antwort passt?', taskEn: 'Listen to the conversation. Which answer is correct?' }),
    audio('b1f-h-st3', 'Hören 3: Tag der offenen Tür', [
      ['herrLehmann', 'Also, am 30. Oktober kommen die Mitglieder, die das Haus nur aus dem Video kennen. Wie machen wir das mit der Musik, Felix?'],
      ['felix', 'Die Fuchsbande spielt um sieben, nach dem Essen. Vorher wollen die Leute ja reden und das Haus ansehen.'],
      ['lina', 'Und um vier kommen meine Schüler. Sie spielen noch einmal ihr Theaterstück über das Viertel. Das dauert eine halbe Stunde.'],
      ['herrLehmann', 'Schön. Und ich mache eine Führung durchs Haus. Ich erzähle, wie es 1968 aussah, als ich eingezogen bin.'],
      ['felix', 'Brauchen wir eigentlich Stühle?'],
      ['herrLehmann', 'Die leihe ich vom Repair-Café. Aber ihr müsst mir beim Tragen helfen.'],
      ['lina', 'Klar, das machen wir am Freitagabend.'],
    ])),
  x(2, mcq('b1f-h8', 'Was macht Herr Lehmann am Tag der offenen Tür? (Hören 3)', ['Er spielt in der Band.', 'Er kocht für die Gäste.', 'Er führt die Gäste durchs Haus.'], 2, { task: 'Hör noch einmal das Gespräch.', taskEn: 'Listen to the conversation again.' })),
  x(2, mcq('b1f-h9', 'Was machen Felix und Lina am Freitagabend? (Hören 3)', ['Sie tragen Stühle.', 'Sie proben das Theaterstück.', 'Sie reparieren Stühle im Repair-Café.'], 0, { task: 'Hör noch einmal das Gespräch.', taskEn: 'Listen to the conversation again.' })),
];

// Shown as "Grammatik und Schreiben": the B1 grammar of all twelve chapters.
const schreiben = [
  // K1: zu + Infinitiv, obwohl. K2: lassen
  x(2, gap('b1f-s1', [
    'Sofia hat vergessen, die Pflanzen {{zu gießen}}.',
    '{{Obwohl}} es regnete, sind wir in den Schwarzwald gefahren.',
    'Kenji {{lässt}} seinen Ofen reparieren.',
  ], { bank: ['zu gießen', 'Obwohl', 'lässt'], task: 'Ergänze die Sätze mit den Wörtern aus dem Kasten.', taskEn: 'Complete the sentences with the words from the box.' })),
  // K2: deshalb, sodass, trotz + Genitiv, Genitiv with n-Deklination
  x(2, gap('b1f-s2', [
    'Der Ofen war kaputt, {{deshalb}} rief Kenji den Kundendienst an.',
    'Es war sehr laut, {{sodass}} niemand schlafen konnte.',
    '{{Trotz}} des Regens kamen viele Leute ins Repair-Café.',
    'Das ist das Fahrrad {{des}} Nachbarn.',
  ], { bank: ['deshalb', 'sodass', 'trotz', 'des'], task: 'Ergänze die Sätze mit den Wörtern aus dem Kasten.', taskEn: 'Complete the sentences with the words from the box.' })),
  // K3: Präteritum. K7: Plusquamperfekt, nachdem
  x(2, gap('b1f-s3', [
    'Herr Lehmann {{zog}} 1968 in das Haus. (ziehen, Präteritum)',
    'Damals {{musste}} er jeden Morgen um fünf Uhr aufstehen. (müssen, Präteritum)',
    'Nachdem Felix zwei Treffen verpasst {{hatte}}, war Nele sauer.',
    'Als der Krankenwagen kam, {{war}} Kenji schon in der Küche zusammengebrochen.',
  ], { task: 'Ergänze das Verb im Präteritum oder hatte/war.', taskEn: 'Fill in the verb in the simple past, or hatte/war for the past perfect.' })),
  // K4: Konjunktiv II, irrealer Bedingungssatz
  x(2, order('b1f-s4', ['Wenn', 'ich mehr Zeit', 'hätte,', 'würde', 'ich', 'öfter im Garten', 'helfen.'], { task: 'Bau einen Wunsch-Satz mit Konjunktiv II.', taskEn: 'Build an unreal condition (a wish) with the Konjunktiv II.', hint: 'Im wenn-Satz steht das Verb am Ende.' })),
  // K4: Pronominaladverbien. K5: um … zu, damit
  x(2, gap('b1f-s5', [
    '„Freust du dich auf das Fest?“ „Ja, ich freue mich sehr {{darauf}}.“',
    '„{{Worüber}} ärgert sich Nele?“ „Über Felix.“',
    'Sofia spart Geld, {{um}} nach Brasilien zu fliegen.',
    'Kenji hat einen Souschef eingestellt, {{damit}} er mehr Pausen machen kann.',
  ], { bank: ['darauf', 'Worüber', 'um', 'damit'], task: 'Ergänze die Sätze mit den Wörtern aus dem Kasten.', taskEn: 'Complete the sentences with the words from the box.' })),
  // K6: Futur I, n-Deklination, Relativsätze mit Präposition
  x(2, gap('b1f-s6', [
    'Nächsten Sommer {{wird}} die Fuchsbande auf einem Festival spielen.',
    'Nele hat dem {{Kollegen}} eine E-Mail geschrieben. (der Kollege)',
    'Das ist das Haus, in {{dem}} wir seit Jahren wohnen.',
    'Das sind die Nachbarn, mit {{denen}} wir die Genossenschaft gegründet haben.',
  ], { task: 'Ergänze das fehlende Wort.', taskEn: 'Fill in the missing word.' })),
  // K8: brauchen … zu, zweiteilige Konnektoren
  x(2, gap('b1f-s7', [
    'Du brauchst heute nicht {{zu}} kochen. Kenji bringt Suppe mit.',
    'Kenji hatte {{weder}} Zeit noch Lust auf Sport.',
    'Amara spricht {{sowohl}} Englisch als auch Deutsch.',
    'Felix spielt nicht nur Gitarre, {{sondern}} auch Klavier.',
  ], { task: 'Ergänze das fehlende Wort.', taskEn: 'Fill in the missing word.' })),
  // K9: Stellung von nicht
  x(2, order('b1f-s8', ['Leider', 'hat', 'Felix', 'die E-Mail', 'nicht', 'gelesen.'], { task: 'Bau den Satz. Wohin gehört nicht?', taskEn: 'Build the sentence. Where does nicht go?', hint: 'Der ganze Satz ist verneint: nicht steht vor dem Partizip.' })),
  // K10: Passiv
  x(2, gap('b1f-s9', [
    'Das Dach {{wird}} im Oktober repariert. (Passiv Präsens)',
    'Das Haus {{wurde}} 1904 gebaut. (Passiv Präteritum)',
    'Der Kaufvertrag ist im August unterschrieben {{worden}}. (Passiv Perfekt)',
    'Die Miete muss pünktlich {{überwiesen}} werden. (überweisen)',
  ], { task: 'Ergänze die Passivform.', taskEn: 'Fill in the passive form.' })),
  // K11: was und wo. K12: je … desto, Partizip als Adjektiv
  x(2, gap('b1f-s10', [
    'Das ist alles, {{was}} ich über das Haus weiß.',
    'Plagwitz ist das Viertel, {{wo|in dem}} ich mich zu Hause fühle.',
    'Je länger Sofia in Leipzig wohnt, {{desto|umso}} besser gefällt es ihr.',
    'Alle sprechen über die {{steigenden}} Mieten. (steigen)',
    'Das {{renovierte}} Treppenhaus sieht toll aus. (renovieren)',
  ], { task: 'Ergänze das fehlende Wort.', taskEn: 'Fill in the missing word.' })),
];

// Shown as "Redemittel": which phrase fits the situation?
const sprechen = [
  x(2, mcq('b1f-sp1', 'Du hast das Treffen der Mietergruppe vergessen. Du entschuldigst dich bei Nele.', ['Das ist doch nicht so schlimm, oder?', 'Du hättest mich ja erinnern können.', 'Es tut mir wirklich leid, dass ich nicht da war. Das kommt nicht wieder vor.'], 2, { task: 'Was sagst du? Wähle die passende Antwort.', taskEn: 'What do you say? Choose the phrase that fits the situation.' })),
  x(2, mcq('b1f-sp2', 'Dein neuer Wasserkocher ist nach einer Woche kaputt. Du reklamierst im Geschäft.', ['Ich möchte diesen Wasserkocher reklamieren. Er funktioniert schon nach einer Woche nicht mehr.', 'Ich hätte gern einen Wasserkocher, bitte.', 'Können Sie mir sagen, wo hier die Kasse ist?'], 0, { task: 'Was sagst du? Wähle die passende Antwort.', taskEn: 'What do you say? Choose the phrase that fits the situation.' })),
  x(2, mcq('b1f-sp3', 'Seit drei Tagen funktioniert die Heizung nicht. Du rufst die Hausverwaltung an und beschwerst dich höflich.', ['Hallo, die Heizung ist kaputt. Machen Sie das mal schnell!', 'Guten Tag, ich rufe an, weil die Heizung seit drei Tagen nicht funktioniert. Könnten Sie bitte bald jemanden schicken?', 'Guten Tag, ich wollte nur sagen, dass die Heizung schön warm ist.'], 1, { task: 'Was sagst du? Wähle die passende Antwort.', taskEn: 'What do you say? Choose the phrase that fits the situation.' })),
  x(2, mcq('b1f-sp4', 'Die Genossenschaft diskutiert über den Hof. Du sagst deine Meinung.', ['Meiner Meinung nach sollte der Hof ein Garten bleiben, weil die Kinder dort spielen können.', 'Meiner Meinung nach der Hof sollte ein Garten bleiben, weil die Kinder dort spielen können.', 'Meiner Meinung nach sollte der Hof ein Garten bleiben, weil die Kinder können dort spielen.'], 0, { task: 'Welcher Satz ist richtig?', taskEn: 'Which sentence is correct? Watch the word order.' })),
  x(2, mcq('b1f-sp5', 'Ein Nachbar sagt: „Parkplätze sind wichtiger als ein Garten.“ Du bist anderer Meinung und widersprichst höflich.', ['So ein Quatsch!', 'Genau, da hast du völlig recht.', 'Das sehe ich anders. Ich finde, ein Garten ist für alle im Haus wichtiger.'], 2, { task: 'Was sagst du? Wähle die passende Antwort.', taskEn: 'What do you say? Choose the phrase that fits the situation.' })),
  x(2, mcq('b1f-sp6', 'Nele und Felix streiten. Du möchtest vermitteln.', ['Nele hat recht, Felix ist an allem schuld.', 'Ich glaube, ihr habt beide ein bisschen recht. Wie wäre es, wenn jeder kurz sagt, was ihn stört?', 'Streitet doch bitte woanders!'], 1, { task: 'Was sagst du? Wähle die passende Antwort.', taskEn: 'What do you say? Choose the phrase that fits the situation.' })),
  x(2, mcq('b1f-sp7', 'Ihr plant den Tag der offenen Tür. Du machst einen Vorschlag.', ['Wie wäre es, wenn wir die Stühle schon am Freitag holen?', 'Wir haben gestern die Stühle geholt.', 'Stühle sind eigentlich nicht so wichtig.'], 0, { task: 'Was sagst du? Wähle die passende Antwort.', taskEn: 'What do you say? Choose the phrase that fits the situation.' })),
  x(2, mcq('b1f-sp8', 'Lina schlägt vor: „Felix kommt jedes zweite Mal zum Treffen und liest sonst das Protokoll.“ Du bist einverstanden.', ['Das kommt nicht in Frage.', 'Einverstanden, so machen wir es.', 'Ich weiß nicht, was ein Protokoll ist.'], 1, { task: 'Was sagst du? Wähle die passende Antwort.', taskEn: 'What do you say? Choose the phrase that fits the situation.' })),
];

export const finalB1: FinalExam = { lesen, hoeren, schreiben, sprechen };
