// Pictures and diagrams for B1 Kapitel 11: Stadt, Land, Fluss.
import { who } from '../a1/images';
import { v2, type Visual } from '../a1/visuals';

export const SCENES_B1_K11: Record<string, { id: string; prompt: string }> = {
  'b1-k11/e-over': { id: 'b1-k11-intro', prompt: `a sunny July day on the Karl-Heine canal in Leipzig-Plagwitz, old brick factory buildings turned into lofts, canoes on the water, ${who('nele', 'amara', 'felix', 'sofia')} sitting on the canal bank with bikes` },
  'b1-k11/t1-text': { id: 'b1-k11-leipzig', prompt: 'collage of Leipzig: the huge historic main railway station hall, the massive stone Monument to the Battle of the Nations with its reflecting pool, a lake with a sandy beach and sailboats, canals between old factories, no text' },
  'b1-k11-t2-audio': { id: 'b1-k11-debate', prompt: 'a radio studio with a female host in headphones between three guests: a calm city planner in a blazer, a young woman student with a bike helmet, and a middle-aged taxi driver with a cap, all at microphones, lively discussion' },
  'b1-k11/t3-text': { id: 'b1-k11-zurich', prompt: 'summer evening in Zurich: people floating in a clear green river through the old town with waterproof bags, a blue and white tram on a bridge, church towers and a lake in the background' },
  'b1-k11/t3-prog': { id: 'b1-k11-visit', prompt: `${who('sofia')} at a train station platform hugging a young Brazilian woman with a suitcase, a hand-drawn weekend map with little icons of a lake, a monument and a restaurant in the corner, no text` },
  'b1-k11/wg-intro': { id: 'b1-k11-folge', prompt: `in front of the grand stone Neues Rathaus town hall in Leipzig with its tall tower, ${who('nele', 'sofia', 'felix', 'herrLehmann')} carrying a box of petition signature lists, nervous and hopeful` },
  'b1-k11-wg-audio': { id: 'b1-k11-hearing', prompt: `a wood-paneled committee room in a historic town hall, a chairwoman at the head of a long table, ${who('nele')} speaking, ${who('herrLehmann', 'sofia', 'felix')} beside her, ${who('herrVogt')} in a suit on the other side, listeners in rows` },
  'b1-k11/wg-mail': { id: 'b1-k11-mail', prompt: `${who('sofia')} at her desk with plants writing a formal email on a laptop, a printed invitation letter next to it, no readable text` },
  'b1-k11-wg-texte': { id: 'b1-k11-kitchen', prompt: `evening in the shared kitchen, ${who('sofia')} typing on a laptop, ${who('kenji')} putting bowls of food on the table, ${who('amara', 'nele')} reading over her shoulder and laughing` },
  'b1-k11/w-match': { id: 'b1-k11-street', prompt: 'a lively city street scene with a streetcar, a traffic light, a crosswalk, a bike lane with a cargo bike, a bus stop and a ticket machine, no text' },
};

export const VOCAB_B1_K11: Record<string, string> = {
  'die Straßenbahn': 'a modern yellow streetcar on rails in a city street',
  'die Ampel': 'a pedestrian traffic light showing red',
  'der Radweg': 'a red-paved bike lane next to a sidewalk',
  'die Haltestelle': 'a bus stop with a shelter and a bench',
  'der Zebrastreifen': 'a black and white zebra crosswalk on a street',
  'das Lastenrad': 'a cargo bike with a wooden box in front',
  'das Parkhaus': 'a multi-story parking garage',
  'der Fahrkartenautomat': 'a ticket vending machine at a tram stop, no readable text',
  'das Denkmal': 'a large stone monument on a square',
  'der Kanal': 'a quiet canal between old brick buildings',
};

export const VISUALS_B1_K11: Record<string, Visual> = {
  'b1-k11/t3-gram': {
    kind: 'positions', title: 'Relativsatz mit was und wo: das Verb am Ende', titleEn: 'Relative clause with was and wo: the verb at the end',
    rows: [
      v2('was nach alles', 'was after alles', ['alles,', 'was', 'ich', 'brauche'], [3]),
      v2('was nach Superlativ', 'was after a superlative', ['das Beste,', 'was', 'es hier', 'gibt'], [3]),
      v2('wo nach einem Ort', 'wo after a place', ['die Stadt,', 'wo', 'ich', 'wohne'], [3]),
    ],
  },
  'b1-k11/t2-gram': {
    kind: 'articles', examples: ['der Bekannte', 'das Neue', 'die Bekannte', 'die Bekannten'], title: 'Adjektive als Nomen', titleEn: 'Adjectives used as nouns',
  },
};
