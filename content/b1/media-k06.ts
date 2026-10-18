// Pictures and diagrams for B1 Kapitel 6: Blick nach vorn.
import { who } from '../a1/images';
import { v2, type Visual } from '../a1/visuals';

export const SCENES_B1_K6: Record<string, { id: string; prompt: string }> = {
  'b1-k6/e-over': { id: 'b1-k6-intro', prompt: `a cozy February evening in an old Leipzig apartment kitchen, light snow outside the tall window, ${who('nele', 'amara', 'felix', 'sofia')} around the table with sticky notes and a calendar, looking ahead with hopeful faces` },
  'b1-k6/t1-text': { id: 'b1-k6-resolutions', prompt: 'three panels: a man in his forties breaking a cigarette in half next to a colleague, a young woman with a backpack looking at a map of Canada, an older man playing with his grandchildren on a free afternoon' },
  'b1-k6-t2-audio': { id: 'b1-k6-radio', prompt: 'a friendly evening radio studio with a female host at a microphone, small bubbles showing a woman working from home with a laptop, a worried young man in front of apartment buildings, an older woman planting vegetables with a young neighbor' },
  'b1-k6/t3-pt-text': { id: 'b1-k6-living-2040', prompt: 'a bright modern multigenerational housing building in 2040 with solar panels on the roof, a large shared kitchen where young families and seniors cook together, plants on balconies, children playing in a green courtyard' },
  'b1-k6/wg-intro': { id: 'b1-k6-folge', prompt: `a Saturday evening in the shared kitchen, ${who('felix')} bursting in excitedly holding up his phone, ${who('amara')} at the table with an open laptop looking thoughtful, ${who('nele')} with a pile of notes, ${who('kenji')} serving bowls of ramen, ${who('sofia')} cheering` },
  'b1-k6-wg-audio': { id: 'b1-k6-folge', prompt: '' },
  'b1-k6/wg-lied': { id: 'b1-k6-song', prompt: `${who('felix')} sitting on a kitchen chair playing an acoustic guitar, ${who('amara', 'sofia', 'nele')} listening quietly, warm lamp light, a notebook with handwritten song lines on the table, no readable text` },
  'b1-k6-wg-gruppe': { id: 'b1-k6-tenant-group', prompt: `${who('herrLehmann')} and ${who('nele')} at his old-fashioned kitchen table with coffee cups, a handwritten list of names and a stack of colorful flyers with a simple fox logo, no readable text` },
  'b1-k6/u-tip': { id: 'b1-k6-music', prompt: 'a young language learner with headphones singing along to music while cooking, a phone with a playlist and a notebook with marked words on the counter, no readable text' },
  'b1-k6/w-match': { id: 'b1-k6-objects', prompt: 'future and resolution objects on a table: running shoes, a piggy bank, a wall calendar, a guitar, a microphone, headphones, no text' },
};

export const VOCAB_B1_K6: Record<string, string> = {
  'der Laufschuh': 'a single colorful running shoe',
  'das Sparschwein': 'a pink ceramic piggy bank with coins',
  'der Kalender': 'a wall calendar with a few days circled, no readable text',
  'die Bühne': 'an empty outdoor festival stage with lights at dusk',
  'das Mikrofon': 'a vintage microphone on a stand',
  'die Gitarre': 'an acoustic guitar',
  'die Solaranlage': 'solar panels on a red tiled roof in the sun',
  'der Kopfhörer': 'a pair of over-ear headphones',
};

export const VISUALS_B1_K6: Record<string, Visual> = {
  'b1-k6/t1-gram': {
    kind: 'positions', title: 'Futur I: werden auf 2, Infinitiv am Ende', titleEn: 'Future: werden in position 2, infinitive at the end',
    rows: [
      v2('Plan', 'plan', ['Ich', 'werde', 'nächstes Jahr', 'umziehen.'], [1, 3]),
      v2('Prognose', 'prediction', ['Die Mieten', 'werden', 'weiter', 'steigen.'], [1, 3]),
      v2('Vermutung', 'assumption', ['Felix', 'wird', 'wohl im Proberaum', 'sein.'], [1, 3]),
    ],
  },
  'b1-k6/t3-gram': {
    kind: 'positions', title: 'Relativsatz: Präposition + Pronomen, Verb am Ende', titleEn: 'Relative clause: preposition + pronoun, verb at the end',
    rows: [
      v2('mit + Dativ', 'with + dative', ['der Nachbar,', 'mit dem', 'ich', 'rede'], [3]),
      v2('Dativ', 'dative', ['die Kollegin,', 'der', 'ich', 'helfe'], [3]),
      v2('Plural', 'plural', ['die Freunde,', 'mit denen', 'wir', 'spielen'], [3]),
    ],
  },
};
