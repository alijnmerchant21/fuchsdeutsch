import type { Chapter, Course } from './types';
import { kapitel1 } from './kapitel1';

const soon = (number: number, title: string, theme: string, grammar: string): Chapter => ({
  id: `kapitel-${number}`, number, title, theme, grammar, sections: [], exam: [], games: [],
});

export const b21: Course = {
  id: 'b2-1',
  level: 'B2.1',
  title: 'Deutsch B2.1',
  blurb: 'Der Brückenkurs von B1 nach B2. Acht Kapitel, jedes mit Lesen, Hören, Grammatik, Spielen und einer Prüfung.',
  weeks: 8,
  chapters: [
    kapitel1,
    soon(2, 'Kopfsache', 'Lernen, Gedächtnis, Wissen', 'Infinitiv mit und ohne zu. Modalverben und Alternativen.'),
    soon(3, 'Vier Wände', 'Wohnen, Umziehen, Nachbarn', 'Wechselpräpositionen. Adjektivdeklination.'),
    soon(4, 'Von Beruf', 'Arbeit, Berufswege, Bewerbung', 'Genitiv. Präpositionen mit Genitiv.'),
    soon(5, 'Meins, deins, unsers', 'Konsum, Geld, Werbung', 'Passiv in allen Zeiten. Passiv mit Modalverben.'),
    soon(6, 'Gut in Form', 'Körper, Gesundheit, Ernährung', 'Finalsätze mit damit und um … zu.'),
    soon(7, 'Miteinander', 'Zusammenleben, Werte, Regeln', 'Relativsätze.'),
    soon(8, 'Grüner wird es nicht', 'Umwelt, Klima, Natur', 'Relativsätze mit wo, was und Präposition.'),
  ],
};

export const courses: Course[] = [b21];
// Planned levels, shown on the landing page. Add a Course object above to open one.
export const roadmapLevels = ['A1', 'A2', 'B1', 'B2.1', 'B2.2', 'C1', 'C2'];

export const course = b21;
export const chapterById = (id: string) => course.chapters.find((c) => c.id === id);
