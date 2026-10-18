// Pictures and diagrams for B1 Kapitel 8: Rund um Körper und Geist.
import { who } from '../a1/images';
import { v2, type Visual } from '../a1/visuals';

export const SCENES_B1_K8: Record<string, { id: string; prompt: string }> = {
  'b1-k8/e-over': { id: 'b1-k8-intro', prompt: `a busy restaurant kitchen late in the evening with steaming pots and many order tickets, ${who('kenji')} leaning exhausted against the counter, wiping his forehead` },
  'b1-k8-t1-audio': { id: 'b1-k8-help', prompt: 'three panels: a young woman carrying an older woman’s suitcase up the stairs at a train station, a physiotherapist stopping a young man at a gym from lifting a heavy weight, a woman phoning a friend who is surrounded by moving boxes' },
  'b1-k8/t2-text': { id: 'b1-k8-music-therapy', prompt: 'a music therapist with a guitar sitting at a hospital bed, an elderly woman patient singing along happily, her daughter smiling with tears, soft afternoon light' },
  'b1-k8-t3-audio': { id: 'b1-k8-radio', prompt: 'a cozy radio studio with a female host and three guests at microphones: a calm learning coach in his forties, a tired female student with a coffee cup, and a cheerful man in his seventies holding a Spanish vocabulary notebook' },
  'b1-k8/t3-pt-text': { id: 'b1-k8-hospital-rules', prompt: 'a bright hospital corridor with a hand sanitizer dispenser next to a door, a visitor holding cut flowers in a vase, a quiet waiting area in the background, no readable signs' },
  'b1-k8/wg-intro': { id: 'b1-k8-folge', prompt: `a hospital room, ${who('kenji')} sitting in the hospital bed looking sheepish, ${who('amara')} in a nurse uniform, ${who('nele', 'felix', 'sofia')} visiting, Sofia holding a small potted orchid` },
  'b1-k8-wg-audio': { id: 'b1-k8-folge', prompt: '' },
  'b1-k8-wg-audio2': { id: 'b1-k8-salsa', prompt: `an evening salsa dance class in a studio with warm lights, ${who('sofia')} laughing and leading ${who('kenji')}, who is clumsy but smiling, other couples dancing around them` },
  'b1-k8/u-text': { id: 'b1-k8-senses', prompt: 'four panels of special places for the senses: bare feet walking on a path of stones and mud, a dark room with a guide holding a white cane, wooden sound installations on a mountain trail, a museum visitor conducting a virtual orchestra on a screen' },
  'b1-k8/w-match': { id: 'b1-k8-objects', prompt: 'hospital and health objects on a white table: a box of bandages, pills, a fever thermometer, crutches, headphones and a large water bottle, no text' },
};

export const VOCAB_B1_K8: Record<string, string> = {
  'der Rettungswagen': 'a German ambulance van with blue lights',
  'das Pflaster': 'a small adhesive bandage',
  'die Tablette': 'two white pills next to a glass of water',
  'das Fieberthermometer': 'a digital fever thermometer',
  'der Rollstuhl': 'an empty wheelchair',
  'die Krücken': 'a pair of crutches leaning against a wall',
  'das Krankenhausbett': 'an empty hospital bed with white sheets',
  'die Kopfhörer': 'a pair of over-ear headphones',
  'die Wasserflasche': 'a large reusable water bottle',
};

export const VISUALS_B1_K8: Record<string, Visual> = {
  'b1-k8/t1-gram': {
    kind: 'positions', title: 'brauchen auf Position 2, zu + Infinitiv am Ende', titleEn: 'brauchen in position 2, zu + infinitive at the end',
    rows: [
      v2('nicht … zu', 'don’t have to', ['Du', 'brauchst', 'nicht', 'anzurufen.'], [1, 3]),
      v2('nur … zu', 'only have to', ['Du', 'brauchst', 'nur', 'kurz', 'anzurufen.'], [1, 4]),
      v2('kein … zu', 'no need for', ['Ihr', 'braucht', 'keine Angst', 'zu haben.'], [1, 3]),
    ],
  },
  'b1-k8/t3-gram': {
    kind: 'positions', title: 'Zweiteilige Konnektoren', titleEn: 'Two-part connectors',
    rows: [
      v2('sowohl … als auch', 'both … and', ['Musik', 'hilft', 'sowohl dem Körper', 'als auch dem Geist.']),
      v2('weder … noch', 'neither … nor', ['Ich', 'habe', 'weder Zeit', 'noch Lust.']),
      v2('zwar … aber', 'admittedly … but', ['Malte', 'ist', 'zwar jung,', 'aber er kocht gut.']),
    ],
  },
};
