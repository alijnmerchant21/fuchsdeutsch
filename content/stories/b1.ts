import type { Story } from './types';

/**
 * Optional B1 reading: side stories to Season 3 of the Fuchsbau flat share.
 * Longer texts with Präteritum, Konjunktiv II, relative clauses, passive and two-part connectors.
 * Not required to unlock chapters.
 */
export const storiesB1: Story[] = [
  {
    id: 'b1-mahlzeit',
    level: 'B1',
    title: 'Mahlzeit!',
    minutes: 4,
    afterChapter: 'b1-k2',
    why: 'Passt zu Kapitel 2: Sofias erste Wochen in Leipzig, Alltag und kleine Missverständnisse.',
    whyEn: 'Fits chapter 2: Sofia’s first weeks in Leipzig, everyday life and small misunderstandings.',
    body: `Als Sofia im September bei ihrer neuen Firma anfing, verstand sie fast alles. Sie hatte in São Paulo lange Deutsch gelernt, und ihre Kolleginnen und Kollegen sprachen deutlich und geduldig mit ihr. Nur ein Wort war ihr ein Rätsel.

Jeden Tag um zwölf ging es los. Wenn sie sich in der Küche einen Kaffee holte, sagte jemand „Mahlzeit!“. Wenn sie im Flur an Thomas aus der Buchhaltung vorbeiging, sagte er auch „Mahlzeit!“. Sogar der Chef, der eigentlich immer im Stress war, nickte ihr im Aufzug zu: „Mahlzeit!“

Sofia war verwirrt. War das eine Frage? Oder eine Einladung? Am dritten Tag antwortete sie höflich: „Danke, aber ich habe schon gegessen.“ Thomas lachte so laut, dass zwei Kollegen aus ihren Büros kamen.

Am Abend erzählte sie die Geschichte in der WG-Küche. Felix, der gerade Nudeln kochte, musste sich vor Lachen am Herd festhalten. „‚Mahlzeit‘ ist einfach ein Gruß“, erklärte Nele. „Man sagt es zur Mittagszeit, ungefähr zwischen elf und zwei. Es bedeutet so viel wie ‚Hallo‘ und ‚Guten Appetit‘ zusammen.“

„Und warum sagt man dann nicht einfach ‚Hallo‘?“, fragte Sofia.

„Gute Frage“, meinte Amara. „Ich wohne schon so lange in Deutschland und weiß es immer noch nicht.“

Sofia schrieb das Wort in ihr kleines Heft, in dem sie alle neuen Ausdrücke sammelte. Darunter notierte sie: nicht antworten, nur zurückgrüßen!

Am nächsten Tag wartete sie um Viertel nach zwölf vor dem Aufzug. Als die Tür aufging, stand der Chef darin, mit einem Teller Suppe in der Hand. Bevor er etwas sagen konnte, lächelte Sofia und sagte laut: „Mahlzeit!“

„Mahlzeit“, antwortete er überrascht. Dann fügte er hinzu: „Dein Deutsch wird ja jeden Tag besser.“

Sofia hätte ihm am liebsten von ihrem Heft erzählt. Aber da ging die Tür schon wieder zu.`,
    en: 'In her first weeks at work, Sofia keeps hearing colleagues say “Mahlzeit!” at lunchtime and once answers that she has already eaten. Her flatmates explain that it is simply a midday greeting. The next day she greets her boss with “Mahlzeit!” and he praises her German.',
    quiz: [
      { q: 'Was antwortete Sofia am dritten Tag auf „Mahlzeit!“?', options: ['„Guten Appetit!“', '„Danke, aber ich habe schon gegessen.“', '„Mahlzeit!“', '„Was bedeutet das?“'], answer: 1 },
      { q: 'Was ist „Mahlzeit!“ laut Nele?', options: ['eine Einladung zum Essen', 'eine Frage nach dem Hunger', 'ein Gruß zur Mittagszeit', 'ein Wort nur für Chefs'], answer: 2 },
      { q: 'Was schreibt Sofia in ihr Heft?', options: ['nicht antworten, nur zurückgrüßen', 'nie vor zwölf Uhr essen', 'den Chef immer siezen', 'Thomas fragen'], answer: 0 },
      { q: 'Was sagt der Chef am Ende?', options: ['Er lädt Sofia zum Essen ein.', 'Er findet, dass ihr Deutsch besser wird.', 'Er fragt nach ihrem Heft.', 'Er ärgert sich über den Aufzug.'], answer: 1 },
    ],
  },
  {
    id: 'b1-der-erste-winter',
    level: 'B1',
    title: 'Der erste Winter',
    minutes: 5,
    afterChapter: 'b1-k4',
    why: 'Passt zu Kapitel 4: Dezember im Fuchsbau. Herr Lehmann erinnert sich an seine erste Arbeitsstelle und an Erika.',
    whyEn: 'Fits chapter 4: December in the Fuchsbau. Herr Lehmann remembers his first job and Erika.',
    body: `Anfang Dezember fror Sofia zum ersten Mal richtig. In São Paulo war es im Winter fast nie kälter als zehn Grad, aber in Leipzig zeigte das Thermometer am Morgen minus sechs. Mit Mütze, Schal und zwei Pullovern stand sie im Treppenhaus, als Herr Lehmann mit seiner Einkaufstasche nach oben kam.

„Nu, Sofia, du siehst ja aus wie ein Eisbär“, sagte er und lachte.

„Mir ist so kalt“, antwortete Sofia. „Wie haben Sie das nur all die Jahre ausgehalten?“

Herr Lehmann stellte die Tasche ab. „Kalt? Das ist doch nichts. Du hättest mal meinen ersten Winter hier erleben sollen.“

Dann erzählte er. Im Herbst 1968 war er aus Dresden nach Leipzig gekommen, weil er in der Maschinenfabrik eine Stelle bekommen hatte. Damals gab es im Haus noch keine Zentralheizung, sondern in jedem Zimmer einen Kachelofen. Die Kohlen, die im Keller lagen, musste jeder selbst in Eimern nach oben tragen. „Morgens war das Wasser in der Waschschüssel manchmal gefroren“, erzählte er. „Und bevor ich zur Arbeit ging, musste ich erst den Ofen anmachen. Das dauerte ewig.“

Im Januar wurde es besonders schlimm. Eines Abends kam er müde von der Schicht und merkte, dass er keine Kohlen mehr hatte. Wegen des Schnees hatte der Kohlenhändler nicht liefern können. Während er im dunklen Treppenhaus stand und überlegte, ging oben eine Tür auf. Eine junge Frau aus dem dritten Stock schaute herunter. „Sie können zwei Eimer von mir haben“, sagte sie. „Aber nur, wenn Sie sie selbst hochtragen.“

„Das war Erika?“, fragte Sofia.

„Das war Erika“, sagte Herr Lehmann leise. „Den ganzen Winter habe ich ihr danach die Kohlen hochgetragen. Und im Frühling sind wir zum ersten Mal zusammen tanzen gegangen.“

Sofia sagte eine Weile nichts. Plötzlich war ihr gar nicht mehr so kalt.

„Wenn ich Kohlen hätte, würde ich Ihnen welche schenken“, sagte sie schließlich.

„Lass mal“, meinte Herr Lehmann und zwinkerte. „Heute habe ich ja eine Heizung. Aber zu einer Tasse Tee würde ich nicht Nein sagen.“`,
    en: 'On a freezing December day, Sofia meets Herr Lehmann in the stairwell. He tells her about his first winter in the house in 1968, when everyone heated with coal and he once ran out of it. A young woman from the third floor, Erika, gave him two buckets, and that was how they got to know each other.',
    quiz: [
      { q: 'Warum kam Herr Lehmann 1968 nach Leipzig?', options: ['Er wollte studieren.', 'Er hatte eine Stelle in der Maschinenfabrik bekommen.', 'Seine Familie wohnte schon im Haus.', 'Er wollte Erika heiraten.'], answer: 1 },
      { q: 'Wie heizte man damals im Haus?', options: ['mit einer Zentralheizung', 'mit Kachelöfen und Kohlen', 'mit Strom', 'gar nicht'], answer: 1 },
      { q: 'Warum hatte Herr Lehmann eines Abends keine Kohlen mehr?', options: ['Er hatte kein Geld.', 'Jemand hatte sie gestohlen.', 'Der Kohlenhändler konnte wegen des Schnees nicht liefern.', 'Der Keller war abgeschlossen.'], answer: 2 },
      { q: 'Was wünscht sich Herr Lehmann am Ende?', options: ['eine Tasse Tee', 'neue Kohlen', 'einen Pullover', 'eine neue Heizung'], answer: 0 },
    ],
  },
  {
    id: 'b1-die-lange-nacht',
    level: 'B1',
    title: 'Die lange Nacht',
    minutes: 5,
    afterChapter: 'b1-k6',
    why: 'Passt zu Kapitel 6: Pläne und Erwartungen. Amara weiß noch nicht, ob sie nach Hamburg geht.',
    whyEn: 'Fits chapter 6: plans and expectations. Amara still does not know whether she will go to Hamburg.',
    body: `Eigentlich arbeitete Amara als Stationsleiterin nur noch tagsüber. Aber an diesem Donnerstag im Februar war ein Kollege krank geworden, und so saß sie um neun Uhr abends wieder einmal im Dienstzimmer und trank ihren ersten Tee.

Die Nacht begann ruhig. Die meisten Patienten schliefen schon, nur auf dem Flur summte der alte Getränkeautomat. Amara kontrollierte die Medikamente, las die Akten und dachte an Hamburg, obwohl sie gerade nicht daran denken wollte. Bis Ende März musste sie sich entscheiden. Ihre Liste mit allen Gründen dafür und dagegen kannte sie inzwischen auswendig.

Gegen zwei Uhr klingelte es in Zimmer 12. Dort lag Frau Winkler, eine Dame von 84 Jahren, die am Tag zuvor an der Hüfte operiert worden war. Sie hatte keine Schmerzen, sie konnte nur nicht schlafen. „Setzen Sie sich doch einen Moment zu mir“, bat sie. Amara setzte sich auf den Stuhl neben dem Bett.

Frau Winkler erzählte, dass sie in Rostock geboren war und mit dreißig nach Leipzig gezogen war, weil ihr Mann hier Arbeit gefunden hatte. „Am Anfang habe ich jeden Tag das Meer vermisst“, sagte sie. „Aber nach ein paar Jahren habe ich gemerkt, dass ich hier zu Hause war. Nicht wegen der Stadt, sondern wegen der Menschen.“

„Würden Sie heute etwas anders machen?“, fragte Amara.

Frau Winkler dachte lange nach. „Nein. Aber ich hätte mir weniger Sorgen machen sollen. Ob eine Entscheidung richtig ist, weiß man vorher nie. Das merkt man erst später.“

Um vier war Frau Winkler endlich eingeschlafen. Amara ging leise hinaus. Am Fenster im Flur blieb sie stehen und sah, wie die ersten Straßenbahnen durch die dunkle Stadt fuhren.

Um sechs wurde sie vom Frühdienst abgelöst. Auf dem Heimweg kaufte sie beim Bäcker Brötchen für die ganze WG. Hatte sie sich jetzt entschieden? Nein, noch nicht. Aber zum ersten Mal seit Wochen hatte sie keine Angst mehr vor der Entscheidung.`,
    en: 'Amara covers a night shift for a sick colleague and keeps thinking about the Hamburg offer. An elderly patient who cannot sleep tells her how she moved from Rostock to Leipzig and came to feel at home because of the people. Amara still has not decided, but she is no longer afraid of the decision.',
    quiz: [
      { q: 'Warum arbeitet Amara in dieser Nacht?', options: ['Sie arbeitet immer nachts.', 'Ein Kollege ist krank geworden.', 'Sie braucht mehr Geld.', 'Sie hat in Hamburg angefangen.'], answer: 1 },
      { q: 'Warum klingelt Frau Winkler?', options: ['Sie hat starke Schmerzen.', 'Sie möchte etwas essen.', 'Sie kann nicht schlafen.', 'Sie will nach Hause.'], answer: 2 },
      { q: 'Warum fühlte sich Frau Winkler in Leipzig nach ein paar Jahren zu Hause?', options: ['wegen der Menschen', 'wegen des Meeres', 'wegen ihrer Arbeit', 'wegen der schönen Stadt'], answer: 0 },
      { q: 'Was stimmt am Ende?', options: ['Amara sagt Hamburg ab.', 'Amara nimmt die Stelle in Hamburg an.', 'Amara hat sich noch nicht entschieden, aber sie hat keine Angst mehr.', 'Amara möchte nur noch nachts arbeiten.'], answer: 2 },
    ],
  },
  {
    id: 'b1-die-erste-woche',
    level: 'B1',
    title: 'Die erste Woche',
    minutes: 5,
    afterChapter: 'b1-k8',
    why: 'Passt zu Kapitel 8: Kenji lernt, Pausen zu machen. Sein neuer Souschef Malte erzählt von der ersten Woche.',
    whyEn: 'Fits chapter 8: Kenji learns to take breaks. His new sous-chef Malte has his first week.',
    body: `Am Montagmorgen stand Malte um neun Uhr vor dem „Fuchs & Yuzu“, obwohl das Restaurant montags geschlossen war. Er war mit dem ersten Zug aus Halle gekommen und so nervös gewesen, dass er unterwegs keine einzige Seite in seinem Buch gelesen hatte.

Kenji öffnete ihm die Tür. Er sah noch ein bisschen blass aus, aber er lächelte. „Willkommen! Heute kochen wir nicht für Gäste, sondern nur für uns. Ich zeige dir alles in Ruhe.“

Und das tat er. Er erklärte ihm den Kombidämpfer, der im Herbst zweimal kaputt gewesen war, die Kühlräume und die Bestellungen. Danach kochten sie zusammen Ramen. Malte probierte die Brühe und hätte am liebsten sofort nach dem Rezept gefragt. Aber er traute sich nicht.

Am Dienstag wurde es ernst. Mittags war das Restaurant voll, und Malte stand am Herd, während Kenji jeden Teller kontrollierte. Einmal war der Reis zu weich, einmal fehlte das Yuzu-Öl auf dem Fisch. Kenji schimpfte nicht, sondern zeigte es ihm einfach noch einmal.

Am Mittwoch passierte etwas Seltsames. Um Punkt vier zog Kenji seine Schürze aus. „Ich bin jetzt eine halbe Stunde im Hof“, sagte er. „Ohne Handy. Wenn etwas passiert, entscheidest du.“

„Ich?“, fragte Malte erschrocken.

„Du“, antwortete Kenji. „Sonst hätte ich ja keinen Souschef gebraucht.“

Natürlich passierte etwas. Statt zehn Kilo Lachs wurden zwanzig geliefert. Malte wurde zuerst rot, dann rief er selbst bei der Firma an und klärte alles. Als Kenji zurückkam, war das Problem schon gelöst.

Am Freitagabend, nachdem der letzte Gast gegangen war, saßen die beiden müde in der Küche. Kenji schob ihm einen Zettel über den Tisch. Darauf stand das Rezept für die Brühe.

„Woher wusstest du, dass ich danach fragen wollte?“, fragte Malte.

„Ich habe dein Gesicht gesehen“, sagte Kenji. „Genau so habe ich früher meinen Chef in Osaka angeschaut.“`,
    en: 'Malte, Kenji’s new sous-chef from Halle, starts on a Monday when the restaurant is closed. During the week he learns the kitchen, and when Kenji takes his daily break in the courtyard, Malte solves a delivery problem on his own. On Friday Kenji gives him the broth recipe he had wanted to ask for.',
    quiz: [
      { q: 'Warum kochen Kenji und Malte am Montag nicht für Gäste?', options: ['Der Ofen ist kaputt.', 'Das Restaurant ist montags geschlossen.', 'Kenji ist im Krankenhaus.', 'Es gibt keine Reservierungen.'], answer: 1 },
      { q: 'Was macht Kenji am Mittwoch um vier Uhr?', options: ['Er fährt nach Halle.', 'Er telefoniert mit dem Lieferanten.', 'Er macht eine halbe Stunde Pause im Hof.', 'Er kocht Ramen.'], answer: 2 },
      { q: 'Welches Problem gibt es während Kenjis Pause?', options: ['Es wurde zu viel Lachs geliefert.', 'Der Reis ist zu weich.', 'Ein Gast beschwert sich.', 'Der Kombidämpfer ist kaputt.'], answer: 0 },
      { q: 'Was bekommt Malte am Freitag?', options: ['mehr Geld', 'einen freien Tag', 'das Rezept für die Brühe', 'eine neue Schürze'], answer: 2 },
    ],
  },
  {
    id: 'b1-die-fuchsbande-auf-tour',
    level: 'B1',
    title: 'Die Fuchsbande auf Tour',
    minutes: 5,
    afterChapter: 'b1-k10',
    why: 'Passt zu Kapitel 10: Die Mieter sammeln Unterschriften, und Felix sammelt nach jedem Konzert mit.',
    whyEn: 'Fits chapter 10: the tenants collect signatures, and Felix collects them after every concert.',
    body: `„Tour“ ist vielleicht ein großes Wort für drei Konzerte an einem Wochenende. Aber für die Fuchsbande war es die erste Reise, seit das Video zu „Unser Haus“ im Mai so oft geklickt worden war. Am Freitag spielten sie in Chemnitz, am Samstag in Dresden und am Sonntag in einem kleinen Club in Görlitz.

Sie fuhren mit einem alten Transporter, den der Schlagzeuger von seinem Onkel geliehen hatte. Hinten wurden die Instrumente eingeladen, vorne saß die Band dicht nebeneinander. Die Klimaanlage funktionierte nicht, dafür war das Radio umso lauter.

In Chemnitz kamen mehr Leute, als sie erwartet hatten. Nach dem Konzert stellte Felix einen Tisch an den Ausgang. Darauf lagen T-Shirts und die Unterschriftenliste von „Fuchsbau bleibt!“. Er hatte Nele versprochen, nach jedem Konzert Unterschriften zu sammeln, und dieses Versprechen wollte er auf keinen Fall vergessen.

Auf dem Weg nach Dresden platzte auf der Autobahn ein Reifen. Zwei Stunden warteten sie auf einem Parkplatz in der Sonne, bis endlich der Pannendienst kam. Irgendwann nahm Felix die Gitarre und spielte „Unser Haus“ für einen Lkw-Fahrer und eine Familie mit zwei Kindern, die dort ebenfalls warteten. Am Ende sangen alle den Refrain mit, und der Lkw-Fahrer unterschrieb als Erster auf der Liste.

Sie kamen zwar eine Stunde zu spät nach Dresden, aber das Publikum hatte geduldig gewartet. Der Club war so voll, dass die letzten Gäste draußen vor der Tür zuhören mussten.

Am Sonntagabend fuhren sie müde und glücklich zurück nach Leipzig. Felix zählte die Unterschriften: 412. Er schickte Nele ein Foto von der Liste. Ihre Antwort kam sofort: „Wenn du so weitermachst, brauchen wir bald eine zweite Liste!“

Felix lächelte. Vor einem Jahr hätte er nie gedacht, dass ein einziges Lied so viel bewegen kann.`,
    en: 'After the viral video, Die Fuchsbande plays three concerts in one weekend. Felix keeps his promise to Nele and collects signatures for the tenant group after every show, even during a two-hour wait after a flat tire. He comes home with 412 signatures.',
    quiz: [
      { q: 'Wo spielte die Band am Samstag?', options: ['in Chemnitz', 'in Dresden', 'in Görlitz', 'in Leipzig'], answer: 1 },
      { q: 'Was hatte Felix Nele versprochen?', options: ['nach jedem Konzert Unterschriften zu sammeln', 'am Sonntag pünktlich zu Hause zu sein', 'ein neues Lied zu schreiben', 'keine T-Shirts zu verkaufen'], answer: 0 },
      { q: 'Was passierte auf dem Weg nach Dresden?', options: ['Der Transporter hatte kein Benzin mehr.', 'Ein Reifen platzte.', 'Die Gitarre ging kaputt.', 'Sie fuhren in die falsche Richtung.'], answer: 1 },
      { q: 'Wie viele Unterschriften hatte Felix am Ende?', options: ['214', '241', '412', '421'], answer: 2 },
    ],
  },
  {
    id: 'b1-herr-vogt-hat-frei',
    level: 'B1',
    title: 'Herr Vogt hat frei',
    minutes: 5,
    afterChapter: 'b1-k12',
    why: 'Passt zu Kapitel 12: Das Haus wurde an die Genossenschaft verkauft. Wie sieht Herr Vogt das, wenn er nicht im Büro ist?',
    whyEn: 'Fits chapter 12: the house has been sold to the cooperative. How does Herr Vogt see it when he is off duty?',
    body: `Am Samstag nach dem Termin beim Notar trug Herr Vogt keinen Anzug, sondern eine kurze Hose, ein altes Hemd und Sandalen. Niemand aus seinem Büro in München hätte ihn so erkannt. Er war noch in Leipzig geblieben, weil seine Schwester hier wohnte. Seine Nichte Lotte, die nach den Sommerferien aufs Gymnasium kommen würde, hatte sich nämlich einen ganzen Tag mit ihrem Onkel gewünscht.

Sie liehen sich Fahrräder und fuhren am Kanal entlang. Lotte redete ohne Pause: über ihre neue Schule, über ihre beste Freundin und über das Theaterstück, das ihre Klasse im Mai gespielt hatte. Dann hielt sie plötzlich an.

„Onkel, bist du eigentlich traurig, dass ihr das Haus verkauft habt?“

Herr Vogt dachte nach. So eine Frage hatte ihm im Büro noch nie jemand gestellt. „Ich habe es nicht verkauft“, sagte er. „Die Firma hat es verkauft. Ich habe nur die Verträge vorbereitet.“

„Das ist keine Antwort“, sagte Lotte streng. Genau so hätte es auch ihre Mutter gesagt.

Sie setzten sich auf eine Bank am Wasser, und Herr Vogt erzählte etwas, was er nur selten erzählte. Als er zwölf Jahre alt war, wurde das Haus in München verkauft, in dem seine Familie zur Miete wohnte. Nach der Renovierung konnten seine Eltern die Miete nicht mehr bezahlen. Sie mussten an den Stadtrand ziehen, und er verlor sowohl seine Schule als auch seine Freunde.

„Und trotzdem arbeitest du für so eine Firma?“, fragte Lotte.

„Vielleicht gerade deshalb“, antwortete er. „Ich habe immer gedacht: Wenn schon jemand diese Arbeit macht, dann sollte es wenigstens jemand sein, der die Mieter fair behandelt.“

Auf dem Rückweg fuhren sie durch die Karl-Heine-Straße. Im Hof des Fuchsbaus wuchsen Tomaten in den Hochbeeten, und aus einem offenen Fenster hörte man eine Gitarre. Herr Vogt stieg vom Rad, holte eine Karte aus seiner Tasche und schrieb ein paar Zeilen an Herrn Lehmann: „Alles Gute für die Fuchsbau eG. Ganz privat: Ich freue mich für Sie.“

Dann warf er die Karte in den Briefkasten und fuhr weiter.`,
    en: 'On a day off after the sale, Herr Vogt goes cycling with his niece Lotte in Leipzig. When she asks if he is sad about the sale, he tells her that his own family lost their rented flat in Munich when he was twelve, and that he has always tried to treat tenants fairly. On the way back he leaves a friendly private card for Herr Lehmann.',
    quiz: [
      { q: 'Warum ist Herr Vogt am Samstag noch in Leipzig?', options: ['Er hat noch einen Termin beim Notar.', 'Er verbringt den Tag mit seiner Nichte.', 'Er will in den Fuchsbau ziehen.', 'Er muss eine Wohnung besichtigen.'], answer: 1 },
      { q: 'Was passierte, als Herr Vogt zwölf Jahre alt war?', options: ['Seine Familie zog nach Leipzig.', 'Seine Eltern kauften ein Haus.', 'Das Haus, in dem seine Familie wohnte, wurde verkauft.', 'Er spielte in einem Theaterstück.'], answer: 2 },
      { q: 'Warum macht Herr Vogt diese Arbeit, sagt er?', options: ['weil er viel Geld verdient', 'damit wenigstens jemand die Mieter fair behandelt', 'weil seine Schwester es wollte', 'weil er gern in Leipzig ist'], answer: 1 },
      { q: 'Was schreibt Herr Vogt Herrn Lehmann?', options: ['dass die Miete steigt', 'dass er sich privat für ihn freut', 'dass der Vertrag falsch ist', 'dass er bald wiederkommt'], answer: 1 },
    ],
  },
];
