// Pictures and diagrams for B1 Kapitel 5: Umweltfreundlich?
import { who } from '../a1/images';
import { v2, type Visual } from '../a1/visuals';

export const SCENES_B1_K5: Record<string, { id: string; prompt: string }> = {
  'b1-k5/e-over': { id: 'b1-k5-intro', prompt: `a snowy January courtyard behind an old Leipzig apartment building, ${who('sofia', 'nele')} in winter hats holding a hand-drawn garden plan, bare trees, a few bicycles covered in snow` },
  'b1-k5/t1-text': { id: 'b1-k5-pilzwerk', prompt: 'a young woman and a young man in an old brick factory cellar with shelves of oyster mushrooms growing on bags of coffee grounds, a cargo bike with a wooden box parked by the door' },
  'b1-k5-t2-audio': { id: 'b1-k5-fairteiler-idea', prompt: `a small restaurant kitchen after closing time, ${who('kenji')} holding a pot of leftover soup, ${who('sofia', 'nele')} leaning on the counter and talking with lively gestures` },
  'b1-k5/t2-info': { id: 'b1-k5-foodsharing', prompt: 'a public food-sharing shelf and fridge in a friendly backyard, neighbors of different ages putting in bread, apples and vegetables, no readable text' },
  'b1-k5/t3-text': { id: 'b1-k5-weather-dach', prompt: 'three panels of winter weather: a gray windy North Sea beach in drizzle, a foggy frosty city street with old buildings, sunny snowy Alpine mountains under a clear blue sky' },
  'b1-k5-t3-audio': { id: 'b1-k5-weather-report', prompt: 'a female radio host at a microphone in a cozy studio, a window behind her showing snow falling at night, a small weather map with sun, cloud and snow symbols' },
  'b1-k5-t3-pt-audio': { id: 'b1-k5-radio-discussion', prompt: 'a radio studio discussion with a female host and two guests at a round table with microphones: a young female activist in a green sweater and a middle-aged baker in a white jacket' },
  'b1-k5/wg-intro': { id: 'b1-k5-folge', prompt: `a cold Saturday in a snowy courtyard, ${who('sofia', 'nele', 'amara', 'felix', 'kenji', 'herrLehmann')} with hats and cups of tea around a garden plan, ${who('herrVogt')} in a gray coat arriving through the gateway with a sheet of paper` },
  'b1-k5-wg-audio': { id: 'b1-k5-folge', prompt: '' },
  'b1-k5/wg-aushang': { id: 'b1-k5-notice', prompt: 'a formal printed notice pinned to a wooden board in an old stairwell with a simple company logo, a radiator and mailboxes nearby, no readable text' },
  'b1-k5/w-match': { id: 'b1-k5-objects', prompt: 'eco-friendly objects in a garden: a cargo bike, a wooden raised bed with herbs, a compost bin, a cloth shopping bag, a green watering can, a deposit bottle, no text' },
};

export const VOCAB_B1_K5: Record<string, string> = {
  'das Lastenrad': 'a cargo bike with a big wooden box in front',
  'das Hochbeet': 'a wooden raised garden bed with herbs and lettuce',
  'der Kompost': 'a wooden compost bin with vegetable scraps and leaves',
  'die Mülltonne': 'a gray wheeled garbage can with a lid',
  'die Stofftasche': 'a plain cotton shopping bag with vegetables inside',
  'die Pfandflasche': 'an empty returnable glass bottle',
  'die Solaranlage': 'solar panels on a red tiled roof under a blue sky',
  'der Regenschirm': 'an open red umbrella in the rain',
  'die Gießkanne': 'a green metal watering can',
};

export const VISUALS_B1_K5: Record<string, Visual> = {
  'b1-k5/t1-gram': {
    kind: 'articles', examples: ['der bessere Weg', 'das schnellere Rad', 'die günstigere Lösung', 'die besseren Ideen'],
    title: 'Komparativ vor Nomen: normale Endung', titleEn: 'Comparative before a noun: the normal adjective ending',
  },
  'b1-k5/t2-gram': {
    kind: 'positions', title: 'um … zu und damit: das Verb steht am Ende', titleEn: 'um … zu and damit: the verb goes to the end',
    rows: [
      v2('um … zu: gleiches Subjekt', 'um … zu: same subject', ['Sofia fährt Rad,', 'um', 'Geld', 'zu sparen.'], [3]),
      v2('damit: anderes Subjekt', 'damit: different subject', ['Kenji spendet Reste,', 'damit', 'sie', 'nicht im Müll', 'landen.'], [4]),
      v2('damit + Modalverb', 'damit + modal verb', ['Wir brauchen Pilze,', 'damit', 'Supermärkte', 'einkaufen', 'können.'], [3, 4]),
    ],
  },
};
