import type { Story } from './types';

/**
 * Optional B2 reading: stories from the Fuchsbau a few years later. The house now belongs to the
 * housing cooperative "Fuchsbau eG". Longer texts with Konjunktiv I in reported speech,
 * Nominalisierung, Passiversatz, two-part connectors, participle attributes and modal particles.
 * Not required to unlock chapters.
 */
export const storiesB2: Story[] = [
  {
    id: 'b2-sieben-minuten',
    level: 'B2',
    title: 'Sieben Minuten',
    minutes: 6,
    afterChapter: 'kapitel-1',
    why: 'Passt zu Kapitel 1: Zeit ist relativ. Eine Uhr, die absichtlich falsch geht, und eine Erinnerung an Erika.',
    whyEn: 'Fits chapter 1: time is relative. A clock that is wrong on purpose, and a memory of Erika.',
    body: `Im Wohnzimmer von Herrn Lehmann steht eine Standuhr, die älter ist als das ganze Viertel, jedenfalls behauptet er das gern. Sie tickt laut, sie schlägt jede Viertelstunde, und sie geht genau sieben Minuten vor. Wer den Fuchsbau kennt, weiß das. Wer ihn nicht kennt, rennt irgendwann umsonst.

So ging es auch Jonas, dem Informatikstudenten, der im Frühjahr in die kleine Wohnung unter dem Dach gezogen war. Er hatte Herrn Lehmann beim Ausfüllen eines Formulars der Genossenschaft geholfen, warf einen erschrockenen Blick auf die Standuhr und stürzte aus der Wohnung, um seinen Bus zu erwischen. An der Haltestelle stellte er fest, dass er sieben Minuten zu früh war. Es regnete in Strömen.

„Die Uhr ist kaputt“, sagte er am Abend in der Gemeinschaftsküche. „Man müsste sie mal reparieren lassen.“

Sofia, die seit Jahren das Reparaturcafé im Keller mitorganisiert, hob die Augenbrauen. „Versuch es ruhig. Wir haben es ihm schon dreimal angeboten.“

Jonas ließ nicht locker. Am Samstag stand er mit einem Werkzeugkasten vor Herrn Lehmanns Tür und erklärte, das Uhrwerk sei vermutlich nur verschmutzt, die Reparatur dauere höchstens eine Stunde, und danach gehe die Uhr wieder auf die Sekunde genau.

Herr Lehmann hörte sich das geduldig an. Dann bat er ihn herein, schenkte zwei Tassen Kaffee ein und setzte sich in seinen Sessel.

„Die Uhr ist nicht kaputt“, sagte er. „Die geht seit dem Herbst 1971 so.“

Jonas sah ihn ungläubig an.

„Meine Frau, die Erika, war der pünktlichste Mensch, den ich je kennengelernt habe“, erzählte Herr Lehmann. „Ich dagegen kam immer zu spät. Zum ersten Treffen, zum Kino, zur eigenen Hochzeit beinahe auch. Irgendwann hat sie gesagt, sie habe keine Lust mehr, jeden Abend vor dem Kino zu frieren. Entweder ich werde pünktlich, oder sie gehe in Zukunft allein.“

„Und dann haben Sie die Uhr vorgestellt?“

„Eben nicht. Sie hat sie vorgestellt. Sieben Minuten, heimlich, an einem Sonntagmorgen. Von da an war ich plötzlich überall pünktlich und ein halbes Jahr lang mächtig stolz auf mich.“ Er lachte leise. „Bis ich die Sache mit der Uhr gemerkt habe.“

„Und warum haben Sie sie nie zurückgestellt?“

Herr Lehmann sah zu dem Pendel hinüber, das gleichmäßig hin- und herschwang. „Erst aus Gewohnheit. Und seit Erika nicht mehr da ist, aus einem anderen Grund. Jedes Mal, wenn ich draufschaue, muss ich rechnen. Und jedes Mal, wenn ich rechne, denke ich an sie. Sieben Minuten Vorsprung am Tag, das ist doch nicht zu viel verlangt.“

Jonas trank seinen Kaffee aus und klappte den Werkzeugkasten wieder zu, ohne ihn geöffnet zu haben.

Als er in die Küche zurückkam, fragte Sofia, ob die Reparatur erfolgreich gewesen sei.

„Die Uhr geht richtig“, sagte Jonas. „Nur eben nicht nach unserer Zeit.“`,
    en: 'Jonas, a new student in the house, thinks Herr Lehmann’s grandfather clock is broken because it runs seven minutes fast, and he offers to repair it. Herr Lehmann explains that his late wife Erika secretly set it ahead in 1971 to cure him of always being late. He keeps it that way because every time he does the math, he thinks of her.',
    quiz: [
      { q: 'Was passierte Jonas, nachdem er auf die Standuhr geschaut hatte?', options: ['Er verpasste seinen Bus.', 'Er kam viel zu früh an der Haltestelle an.', 'Er vergaß das Formular.', 'Er kam zu spät zur Uni.'], answer: 1 },
      { q: 'Was bietet Jonas Herrn Lehmann an?', options: ['eine neue Uhr zu kaufen', 'die Uhr im Reparaturcafé zu verkaufen', 'das verschmutzte Uhrwerk zu reparieren', 'ihm eine App für Termine zu zeigen'], answer: 2 },
      { q: 'Wer hat die Uhr ursprünglich vorgestellt?', options: ['Herr Lehmann selbst', 'Sofia', 'ein Uhrmacher', 'Erika'], answer: 3 },
      { q: 'Warum lässt Herr Lehmann die Uhr so, wie sie ist?', options: ['Weil das Rechnen ihn jedes Mal an Erika erinnert.', 'Weil eine Reparatur zu teuer wäre.', 'Weil er gern zu früh kommt.', 'Weil die Genossenschaft es verbietet.'], answer: 0 },
    ],
  },
  {
    id: 'b2-muito-prazer',
    level: 'B2',
    title: 'Muito prazer',
    minutes: 6,
    afterChapter: 'kapitel-2',
    why: 'Passt zu Kapitel 2: Kopfsache. Herr Lehmann lernt mit achtzig Jahren eine neue Sprache, und er ist nicht der Einzige.',
    whyEn: 'Fits chapter 2: learning. Herr Lehmann takes up a new language at eighty, and he is not the only one.',
    body: `Dass Herr Lehmann mit achtzig Jahren noch eine Sprache lernen wollte, hielten anfangs alle für einen Scherz. Doch seit Januar lag auf seinem Küchentisch ein Lehrbuch mit dem Titel „Português para principiantes“, daneben ein Stapel selbst geschriebener Karteikarten, und wer ihm im Treppenhaus begegnete, wurde neuerdings mit „Bom dia!“ begrüßt.

Angefangen hatte alles mit einer Ankündigung. Sofias Großmutter, Dona Lourdes, wollte im Sommer zum ersten Mal nach Leipzig kommen, um zu sehen, wo ihre Enkelin seit vier Jahren lebte. „Sie spricht kein Wort Deutsch“, hatte Sofia erzählt, „und Englisch leider auch nicht.“ Herr Lehmann hatte nur genickt. Am nächsten Tag hatte er sich in der Stadtbibliothek das Lehrbuch ausgeliehen.

Leicht fiel ihm das Lernen nicht. Die Nasallaute klangen bei ihm, wie Felix fand, nach einer verstopften Trompete, und die unregelmäßigen Verben schienen sich jede Nacht heimlich zu vermehren. Aber Herr Lehmann hatte eine Methode, die er noch aus seiner Lehrzeit als Schlosser kannte: jeden Tag ein bisschen, nie länger als eine halbe Stunde und immer zur selben Zeit. „Ein Werkstück wird auch nicht an einem Tag fertig“, pflegte er zu sagen.

Sofia half ihm, sooft sie konnte. Einmal pro Woche übten sie in der Gemeinschaftsküche kleine Gespräche: sich vorstellen, nach dem Weg fragen, über das Wetter klagen. „Sie brauchen keine Grammatik zu lernen, die Sie nie benutzen werden“, sagte Sofia. „Meine Oma will sowieso nur wissen, ob Sie verheiratet sind und ob Sie gut essen.“

Ende Juli war es dann so weit. Die halbe Hausgemeinschaft wartete im Hof, als das Taxi vorfuhr. Eine kleine Frau mit weißem Haar und einer riesigen Handtasche stieg aus. Herr Lehmann trat vor, räusperte sich und sagte langsam, Wort für Wort, den Satz, den er seit Wochen geübt hatte: „Muito prazer, Dona Lourdes. Bem-vinda a Leipzig.“

Dona Lourdes sah ihn lange an. Dann lächelte sie und antwortete in einem Deutsch, das unverkennbar nach Sachsen klang: „Nu, das ist aber nett. Ich freue mich ooch.“

Für einen Moment war es im Hof völlig still. Dann fing Sofia an zu lachen, bis ihr die Tränen kamen. Wie sich herausstellte, hatte ihre Großmutter ein ganzes Jahr lang online Deutsch gelernt, und zwar ausgerechnet bei einem pensionierten Lehrer aus Chemnitz. Sie habe ihre Enkelin überraschen wollen, erklärte sie später, deshalb habe sie niemandem ein Wort gesagt.

Den ganzen Abend saßen die beiden auf der Bank unter der Kastanie. Er sprach Portugiesisch, sie sprach Sächsisch, und beide machten so viele Fehler, dass sie sich ständig gegenseitig verbesserten. Verstanden haben sie sich trotzdem hervorragend.

„Warum lernt man eigentlich mit achtzig noch eine Sprache?“, fragte Jonas am nächsten Morgen.

Herr Lehmann überlegte nicht lange. „Nicht, um perfekt zu sein. Sondern um jemandem ein Stück entgegenzugehen.“ Er goss sich Kaffee nach. „Und manchmal merkt man dann, dass der andere einem längst entgegenkommt.“`,
    en: 'Herr Lehmann starts learning Portuguese at eighty so he can talk to Sofia’s grandmother when she visits from Brazil. When she arrives, he greets her in careful Portuguese, and she answers in German with a Saxon accent, because she secretly studied German for a year with a teacher from Chemnitz. He concludes that you learn a language to meet someone halfway.',
    quiz: [
      { q: 'Warum beginnt Herr Lehmann, Portugiesisch zu lernen?', options: ['Er plant eine Reise nach Brasilien.', 'Er will mit Sofias Großmutter sprechen können.', 'Sofia hat ihn darum gebeten.', 'Er braucht es für die Genossenschaft.'], answer: 1 },
      { q: 'Wie lernt Herr Lehmann?', options: ['jeden Tag kurz und immer zur selben Zeit', 'am Wochenende mehrere Stunden', 'nur mit einer App', 'in einem Kurs an der Volkshochschule'], answer: 0 },
      { q: 'Was ist die Überraschung bei der Ankunft?', options: ['Dona Lourdes spricht fließend Englisch.', 'Dona Lourdes versteht kein Wort.', 'Dona Lourdes antwortet auf Deutsch mit sächsischem Akzent.', 'Dona Lourdes kommt einen Tag zu spät.'], answer: 2 },
      { q: 'Was bedeutet Sprachenlernen für Herrn Lehmann?', options: ['eine Prüfung zu bestehen', 'perfekt zu sprechen', 'das Gedächtnis zu trainieren', 'einem anderen Menschen ein Stück entgegenzugehen'], answer: 3 },
    ],
  },
  {
    id: 'b2-wohnung-2c',
    level: 'B2',
    title: 'Wohnung 2c',
    minutes: 7,
    afterChapter: 'kapitel-3',
    why: 'Passt zu Kapitel 3: Vier Wände. Eine Wohnungsbesichtigung im Fuchsbau mit einem Bewerber, den alle schon kennen.',
    whyEn: 'Fits chapter 3: housing. A flat viewing in the Fuchsbau with an applicant everyone already knows.',
    body: `Seit der Fuchsbau der Genossenschaft gehört, wird keine Wohnung mehr über ein Immobilienportal vermietet. Wird eine frei, entscheidet eine Kommission aus drei Mitgliedern, wer einziehen darf. Nele sitzt seit zwei Jahren darin, zusammen mit Amara und Herrn Lehmann, und sie hat schnell gelernt, dass diese Aufgabe schwieriger ist, als sie klingt.

Für die frei gewordene Zweizimmerwohnung im zweiten Stock gab es diesmal einundvierzig Bewerbungen. Eingeladen wurden fünf. Die ersten vier Besichtigungen verliefen, wie Besichtigungen eben verlaufen: freundliche Menschen, die das helle Licht lobten und fragten, ob man im Hof Fahrräder abstellen dürfe.

Der fünfte Bewerber kam auf die Minute pünktlich. Er war etwa Mitte fünfzig, trug einen grauen Mantel und hatte eine Mappe mit sorgfältig sortierten Unterlagen dabei. Anders als die anderen sah er sich nicht zuerst die Aussicht an, sondern ging direkt ins Bad, klopfte gegen die Fliesen hinter der Wanne und betrachtete dann lange das Küchenfenster.

„Das Fenster schließt unten links nicht ganz dicht“, sagte er. „Das war schon vor ein paar Jahren so. Ich würde es vor dem Winter abdichten lassen, sonst bildet sich hinter dem Schrank Schimmel.“

Nele sah auf die Bewerbung. Martin Vogt, stand dort. Den Namen kannte sie. Er hatte unter einem Brief gestanden, der damals monatelang an ihrem Kühlschrank gehangen hatte, als Beweisstück und Warnung zugleich: „Sehr geehrte Mieterinnen und Mieter, hiermit teilen wir Ihnen mit …“ Unterschrieben: i. A. Vogt.

„Sie waren das“, sagte sie. „Von Elbstein Immobilien.“

Herr Vogt nickte, weder verlegen noch überrascht. Er habe damals die Verwaltung des Hauses übernommen, erklärte er ruhig, und getan, was man von ihm erwartet habe. Inzwischen arbeite er nicht mehr für Elbstein. Nach seiner Scheidung wohne er in einem Neubau am Stadtrand, in dem er nach drei Jahren noch immer keinen einzigen Nachbarn mit Namen kenne.

„Ich habe damals mitbekommen, wie Sie sich organisiert haben“, sagte er. „Die Versammlungen im Hof, die Petition, das Lied von diesem Musiker. Ehrlich gesagt hielt ich das alles für aussichtslos. Ich habe mich geirrt. Und seitdem frage ich mich, wie es wohl wäre, in so einem Haus zu wohnen.“

Herr Lehmann, der die ganze Zeit an der Tür gestanden hatte, räusperte sich. „Die Heizung im Keller macht im Winter manchmal Geräusche.“

„Das Ventil am Rücklauf“, antwortete Herr Vogt sofort. „Das hätte schon vor Jahren getauscht werden müssen.“

Herr Lehmann zog die Augenbrauen hoch. Ob das Anerkennung war oder Misstrauen, konnte Nele nicht sagen.

Am Abend saß die Kommission lange in der Gemeinschaftsküche. Amara meinte, man dürfe niemanden für seinen früheren Job bestrafen. Nele bezweifelte, dass Vertrauen so schnell wachsen könne. Herr Lehmann sagte zunächst gar nichts. Schließlich holte er den alten Brief aus dem Archivordner und legte ihn auf den Tisch.

„Wer so genau weiß, was in diesem Haus kaputt ist“, sagte er, „der hat vielleicht schon damals mehr hingeschaut, als er zugeben wollte.“

Wohnung 2c ging an Herrn Vogt. Das Küchenfenster ließ er gleich in der ersten Woche abdichten, auf eigene Kosten.`,
    en: 'The cooperative’s housing committee holds viewings for a free flat, and the last applicant spots every defect at once. He turns out to be Herr Vogt, the former property manager who once signed the letter announcing the sale of the house, and who now lives alone without knowing any neighbors. After a long discussion, the committee gives him the flat.',
    quiz: [
      { q: 'Wer entscheidet heute, wer in eine frei gewordene Wohnung einzieht?', options: ['ein Immobilienportal', 'die Stadt Leipzig', 'eine Kommission der Genossenschaft', 'Elbstein Immobilien'], answer: 2 },
      { q: 'Was fällt am fünften Bewerber sofort auf?', options: ['Er interessiert sich vor allem für die Aussicht.', 'Er kennt die Mängel der Wohnung genau.', 'Er kommt viel zu spät.', 'Er fragt nach einem Fahrradstellplatz.'], answer: 1 },
      { q: 'Warum möchte Herr Vogt im Fuchsbau wohnen?', options: ['Er sucht eine Hausgemeinschaft, weil er in seinem Neubau niemanden kennt.', 'Die Wohnung ist günstiger als seine jetzige.', 'Er will das Haus wieder verwalten.', 'Seine neue Arbeit ist in der Nähe.'], answer: 0 },
      { q: 'Wie endet die Geschichte?', options: ['Die Kommission lehnt Herrn Vogt ab.', 'Nele zieht selbst in die Wohnung.', 'Herr Lehmann lässt das Fenster reparieren.', 'Herr Vogt bekommt die Wohnung und lässt das Fenster selbst abdichten.'], answer: 3 },
    ],
  },
  {
    id: 'b2-was-der-keller-verraet',
    level: 'B2',
    title: 'Was der Keller verrät',
    minutes: 7,
    afterChapter: 'kapitel-5',
    why: 'Passt zu Kapitel 5: Meins, deins, unsers. Teilen statt Besitzen, eine Grafik und viel Passiv.',
    whyEn: 'Fits chapter 5: sharing instead of owning, a chart, and lots of passive voice.',
    body: `Als im Keller des Fuchsbaus der „Leihkeller“ eröffnet wurde, war die Begeisterung groß. Die Idee war einfach: Statt dass jeder Haushalt eine eigene Bohrmaschine, eine Leiter und ein Raclettegerät besitzt, werden solche Dinge einmal angeschafft und von allen gemeinsam genutzt. Gespendet wurde reichlich. Innerhalb von zwei Wochen standen über hundertzwanzig Gegenstände in den Regalen, ordentlich beschriftet und in einer Tabelle erfasst, die Jonas eigens dafür programmiert hatte.

Jede Ausleihe musste eingetragen werden: was, von wem, wie lange. Nach einem Jahr setzte sich Jonas hin, um die Daten auszuwerten. Er rechnete mit einer klaren Siegerin, der Schlagbohrmaschine. Schließlich liest man in jedem Ratgeber zum Thema Teilen, eine durchschnittliche Bohrmaschine werde in ihrem ganzen Leben nur wenige Minuten benutzt. Wenn sie irgendwo gebraucht würde, dann doch hier.

Das Ergebnis war ernüchternd. Die Bohrmaschine war im ganzen Jahr genau zweimal ausgeliehen worden, beide Male von Herrn Lehmann, der selbst eine besitzt, aber, wie er zugab, „nur mal sehen wollte, was die neuen Dinger so taugen“. Auch die Nähmaschine, der Beamer und das Vierpersonenzelt hatten den Keller kaum verlassen.

Ganz oben auf der Liste stand stattdessen etwas, woran niemand gedacht hatte: ein riesiger Kochtopf mit fünfundzwanzig Litern Fassungsvermögen, den Kenji aus seiner Restaurantküche gespendet hatte. Er war dreiundvierzigmal ausgeliehen worden. Auf Platz zwei folgten die zwölf Klappstühle, auf Platz drei eine Bierzeltgarnitur und auf Platz vier ein Waffeleisen.

„Das verstehe ich nicht“, sagte Jonas bei der nächsten Mitgliederversammlung, nachdem er die Grafik an die Wand projiziert hatte. „Mit einem Topf kann man doch nichts reparieren.“

„Eben“, sagte Amara. „Bohrmaschinen hat hier fast jeder. Aber wer hat schon Stühle für zwanzig Leute?“

Allmählich wurde allen klar, was die Zahlen eigentlich zeigten. Ausgeliehen wurde nicht das, womit man allein etwas erledigt, sondern das, was man braucht, wenn viele zusammenkommen. Der große Topf war bei Kindergeburtstagen gewesen, bei einer Hochzeit im Hof, bei der Trauerfeier für eine alte Nachbarin von gegenüber und bei jedem einzelnen Sommerfest. Die Klappstühle waren fast immer mitgegangen.

„Wir dachten, wir bauen eine Werkstatt“, sagte Nele leise. „Dabei haben wir eine Küche für das ganze Viertel gebaut.“ Herr Lehmann nickte zufrieden, als hätte er das schon immer gewusst.

Beschlossen wurde an diesem Abend zweierlei. Erstens sollten ein zweiter großer Topf und zwanzig weitere Stühle angeschafft werden. Zweitens wurde die kaum genutzte Bohrmaschine an das Reparaturcafé weitergegeben, wo sie seitdem jeden Samstag im Einsatz ist.

Und Jonas änderte die Überschrift seiner Tabelle. Statt „Inventar Leihkeller“ steht dort jetzt: „Was wir zusammen brauchen“.`,
    en: 'The cooperative opens a lending cellar, and after a year Jonas analyzes which items were borrowed most. He expects the power drill to win, but it was borrowed only twice, while a huge cooking pot, folding chairs and a beer tent set top the list. The residents realize that people mostly share the things they need when many come together, so they buy more chairs and a second pot.',
    quiz: [
      { q: 'Was ist die Idee des Leihkellers?', options: ['Dinge billig zu verkaufen', 'Dinge einmal anzuschaffen und gemeinsam zu nutzen', 'alte Dinge zu reparieren', 'Sachen für den Umzug zu lagern'], answer: 1 },
      { q: 'Welcher Gegenstand wurde am häufigsten ausgeliehen?', options: ['die Schlagbohrmaschine', 'das Waffeleisen', 'die Nähmaschine', 'ein großer Kochtopf'], answer: 3 },
      { q: 'Was zeigen die Zahlen laut der Versammlung eigentlich?', options: ['Ausgeliehen wird vor allem, was man braucht, wenn viele zusammenkommen.', 'Werkzeug ist im Haus völlig überflüssig.', 'Die Tabelle von Jonas enthält Fehler.', 'Niemand nutzt den Leihkeller.'], answer: 0 },
      { q: 'Was passiert mit der Bohrmaschine?', options: ['Sie wird verkauft.', 'Herr Lehmann behält sie.', 'Sie geht an das Reparaturcafé.', 'Sie bleibt im Regal.'], answer: 2 },
    ],
  },
  {
    id: 'b2-die-alte-hausordnung',
    level: 'B2',
    title: 'Die alte Hausordnung',
    minutes: 7,
    afterChapter: 'kapitel-7',
    why: 'Passt zu Kapitel 7: Miteinander. Regeln, Werte und eine Hausordnung von 1968, in indirekter Rede vorgelesen.',
    whyEn: 'Fits chapter 7: living together. Rules, values and a set of house rules from 1968, read out in reported speech.',
    body: `Die Generalversammlung der Fuchsbau eG dauerte bereits zwei Stunden, als Punkt sieben der Tagesordnung aufgerufen wurde: „Neue Hausordnung“. Ein Seufzen ging durch den Hof. Über Mülltrennung, Kinderwagen im Treppenhaus und Ruhezeiten war in den Wochen zuvor in der Chatgruppe des Hauses so heftig gestritten worden, dass zwei Mitglieder die Gruppe verlassen hatten.

Der von einer Arbeitsgruppe vorbereitete Entwurf umfasste elf Seiten. Kaum war er verteilt, meldeten sich die Ersten zu Wort. Die Familie aus dem Erdgeschoss fand die Ruhezeit ab 22 Uhr zu streng, das Paar unter dem Dach fand sie zu locker. Kenji wollte wissen, ob im Hof gegrillt werden dürfe, und wenn ja, ob auch Fisch. Mit dem Entwurf war offenbar weder die eine noch die andere Seite zufrieden.

Da hob Herr Lehmann die Hand. Er habe etwas mitgebracht, sagte er, und zog ein vergilbtes Blatt aus seiner Mappe. Es war die Hausordnung, die 1968, im Jahr seines Einzugs, im Treppenhaus gehangen hatte.

Er setzte die Brille auf und las vor. Das Treppenhaus sei jeden Samstag von der jeweils zuständigen Partei zu bohnern. Das Klopfen von Teppichen sei ausschließlich dienstags und freitags zwischen acht und zehn Uhr gestattet. Musizieren sei nur bei geschlossenem Fenster erlaubt, und zwar höchstens eine Stunde täglich. Besucher hätten das Haus bis 21 Uhr zu verlassen. Kinder hätten im Hof nicht zu toben, sondern sich ruhig und anständig zu verhalten.

Mit jedem Satz wurde das Gelächter im Hof lauter. Felix, dessen Band inzwischen im Keller probt, rief, nach diesen Regeln wäre er schon nach einer Woche rausgeflogen.

„Lacht nur“, sagte Herr Lehmann. „Aber das Komische ist: Gehalten hat sich kaum einer daran. Und trotzdem war das ein gutes Haus.“ Er machte eine Pause. „Frau Krause aus dem dritten Stock hat jeden Sonntag Kuchen für den ganzen Aufgang gebacken. Davon stand nichts auf dem Zettel. Als meine Erika krank war, hat der Nachbar von gegenüber monatelang unsere Kohlen hochgetragen. Das stand da auch nicht drin.“

Für einen Moment war es still. Dann sprach Lina, die die Sitzung leitete, aus, was viele dachten. Man könne ohnehin nicht alles regeln, worüber man sich ärgern könne. Vielleicht solle man lieber aufschreiben, worauf man sich verlassen wolle.

Es wurde noch eine Stunde diskutiert, allerdings ganz anders als vorher. Am Ende wurde eine Hausordnung beschlossen, die nicht elf Seiten umfasste, sondern eine einzige. Ruhezeiten, Mülltrennung und Grillen ließen sich in wenigen Zeilen regeln. Ganz oben aber steht seitdem ein Satz, den Herr Lehmann vorgeschlagen hatte: „Wer ein Problem mit seinen Nachbarn hat, klingelt zuerst bei ihnen und schreibt erst danach in die Gruppe.“

Die alte Hausordnung von 1968 hängt heute gerahmt neben den Briefkästen. Darunter hat ein Kind mit Buntstift einen Fuchs gemalt, der im Hof Fußball spielt. Abgenommen hat das Bild bisher niemand.`,
    en: 'At the cooperative’s general meeting, residents argue over an eleven-page draft of new house rules. Herr Lehmann reads out the strict house rules from 1968 and points out that hardly anyone followed them, yet neighbors helped each other in ways no rule required. The members adopt a one-page version that begins with a single principle: talk to your neighbors before complaining in the group chat.',
    quiz: [
      { q: 'Wie lang war der Entwurf der neuen Hausordnung?', options: ['eine Seite', 'drei Seiten', 'sieben Seiten', 'elf Seiten'], answer: 3 },
      { q: 'Was stand in der Hausordnung von 1968?', options: ['Kinder durften im Hof frei spielen.', 'Besucher mussten das Haus bis 21 Uhr verlassen.', 'Grillen war im Hof erlaubt.', 'Musik war den ganzen Tag gestattet.'], answer: 1 },
      { q: 'Was will Herr Lehmann mit seinen Beispielen zeigen?', options: ['Dass strenge Regeln notwendig sind.', 'Dass früher alles schlechter war.', 'Dass eine gute Hausgemeinschaft nicht durch Regeln entsteht.', 'Dass die alte Hausordnung wieder gelten soll.'], answer: 2 },
      { q: 'Was steht ganz oben in der neuen Hausordnung?', options: ['Bei Problemen zuerst bei den Nachbarn klingeln, dann in die Gruppe schreiben.', 'Ab 22 Uhr ist absolute Ruhe.', 'Grillen ist im Hof verboten.', 'Kinderwagen gehören in den Keller.'], answer: 0 },
    ],
  },
  {
    id: 'b2-licht-aus',
    level: 'B2',
    title: 'Licht aus',
    minutes: 7,
    afterChapter: 'kapitel-8',
    why: 'Passt zu Kapitel 8: Grüner wird es nicht. Lichtverschmutzung, ein Versuch im Hof und ein Wunsch im Konjunktiv II.',
    whyEn: 'Fits chapter 8: the environment. Light pollution, an experiment in the courtyard and a wish in Konjunktiv II.',
    body: `Jahrelang hatte die Lampe über dem Hof jede Nacht gebrannt, von der Dämmerung bis zum Morgen. Niemand hatte sich daran gestört, im Gegenteil: Sie war hell, sie war praktisch, und sie war, wie Herr Lehmann gern betonte, „die beste Versicherung gegen Fahrraddiebe“.

Das änderte sich, als Lina mit ihrer vierten Klasse ein Projekt über Lichtverschmutzung durchführte. Die Kinder erfuhren, dass an künstlichen Lichtquellen jede Nacht unzählige Insekten sterben, dass Zugvögel über hell erleuchteten Städten die Orientierung verlieren können und dass mehr als die Hälfte der Menschen in Europa die Milchstraße von ihrem Wohnort aus nicht mehr sehen kann. Zum Abschluss sollte jedes Kind einen Vorschlag machen, was man in seiner Umgebung ändern könnte. Emil, der mit seinen Eltern im Seitenflügel des Fuchsbaus wohnt, schrieb in krakeliger Schrift: „Die Hoflampe nachts ausmachen.“

Der Vorschlag landete auf der Tagesordnung des nächsten Hoftreffens, wo er erwartungsgemäß umstritten war. Herr Lehmann war strikt dagegen. Er führte sowohl die Fahrraddiebe als auch die Stolpergefahr im Dunkeln an und erinnerte daran, dass er nicht mehr der Jüngste sei. Amara, die nach Spätdiensten oft erst gegen Mitternacht nach Hause kommt, war unentschieden. Schließlich einigte man sich auf einen Versuch: Vier Wochen lang sollte die Lampe um 23 Uhr ausgeschaltet werden. Für den Weg zu den Mülltonnen wurde eine kleine, nach unten gerichtete Leuchte mit Bewegungsmelder angebracht.

In den ersten Nächten beschwerte sich Herr Lehmann jeden Morgen. Es sei stockdunkel, er habe sein Schlüsselloch kaum gefunden, und überhaupt sei das alles übertrieben.

Dann kam die Nacht der Perseiden, Mitte August. Emil und zwei andere Kinder lagen mit Lina auf Decken mitten im Hof und starrten in den Himmel. Herr Lehmann, der eigentlich nur den Müll hinausbringen wollte, blieb stehen.

„Was macht ihr denn da?“

„Wir warten auf Sternschnuppen“, sagte Emil. „Wir haben schon vier gesehen.“

Herr Lehmann legte den Kopf in den Nacken. Viel war über den Dächern der Stadt nicht zu erkennen, aber mehr Sterne, als er hier je bemerkt hatte. Und gerade als er sich wieder abwenden wollte, zog ein heller Strich quer über den Himmel und verglühte über dem Hinterhaus.

„Die letzte habe ich als Junge gesehen“, sagte er leise. „Bei meiner Großmutter im Erzgebirge.“ Er stellte den Mülleimer ab und setzte sich, nicht ohne Mühe, zu den Kindern auf die Decke. Wäre die Lampe an gewesen, hätte er nichts davon mitbekommen.

„Sie müssen sich jetzt etwas wünschen“, sagte Emil.

„Hab ich schon“, antwortete Herr Lehmann.

Nach vier Wochen wurde abgestimmt. Der Antrag, die Lampe auch künftig ab 23 Uhr auszuschalten, wurde einstimmig angenommen, und gestellt hatte ihn ausgerechnet Herr Lehmann. Was er sich gewünscht hatte, verriet er nicht. Aber seitdem steht bei jeder Sternennacht ein Klappstuhl aus dem Leihkeller im Hof, und der ist immer für ihn reserviert.`,
    en: 'After a school project on light pollution, a pupil suggests switching off the courtyard light at night, and the cooperative agrees to a four-week trial despite Herr Lehmann’s objections. During the Perseid meteor shower he joins the children outside and sees his first shooting star since childhood. In the end, he is the one who proposes keeping the light off for good.',
    quiz: [
      { q: 'Wie kam der Vorschlag, die Hoflampe auszuschalten, zustande?', options: ['durch eine Beschwerde von Amara', 'durch ein Schulprojekt über Lichtverschmutzung', 'durch eine neue Vorschrift der Stadt', 'durch hohe Stromkosten'], answer: 1 },
      { q: 'Welche Argumente nennt Herr Lehmann zuerst gegen den Vorschlag?', options: ['Insekten und Zugvögel', 'Kosten und Lärm', 'Fahrraddiebe und Stolpergefahr', 'die Hausordnung und den Mietvertrag'], answer: 2 },
      { q: 'Was erlebt Herr Lehmann in der Nacht der Perseiden?', options: ['Er sieht zum ersten Mal seit seiner Kindheit eine Sternschnuppe.', 'Er erwischt einen Fahrraddieb.', 'Er stolpert im dunklen Hof.', 'Er sieht die Milchstraße ganz deutlich.'], answer: 0 },
      { q: 'Wer stellt am Ende den Antrag, die Lampe weiter auszuschalten?', options: ['Emil', 'Lina', 'Amara', 'Herr Lehmann'], answer: 3 },
    ],
  },
];
