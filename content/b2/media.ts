// Pictures and grammar diagrams for B2.1. Same picture style as A1 to B1.
// B2.1 has its own speakers (content/speakers.ts), not the Fuchsbau cast, so their looks are fixed here.
import { v2, type Visual } from '../a1/visuals';

/** Fixed looks for the B2.1 speakers, so a person looks the same in every picture. */
const LOOK: Record<string, string> = {
  mira: 'a young woman of 25 with a short dark pixie cut, a striped sweater and paint on her fingers',
  frauHuber: 'a Viennese woman in her sixties with silver hair in a bun, pearl earrings and a burgundy cardigan',
  herrYilmaz: 'a man of 40 with short black hair, a neat beard and a gray jacket',
  atze: 'a broad Berlin man of 50 with a bald head, gray stubble and blue work overalls',
  priya: 'an Indian woman of 32 with long black hair in a low ponytail and a teal blouse',
  frauBaumann: 'a Swiss woman of 45 with a short blond bob, glasses, a white blouse and a navy blazer',
  tomasz: 'a tall man of 35 with short light brown hair, a short beard and a green sweater',
  opaFiete: 'a North German man of 78 with a white beard, a navy fisherman cap and a thick cream wool sweater',
  lena: 'a teenage girl of 16 with a long blond braid and a yellow raincoat',
  seppi: 'a Bavarian man of 68 with a round friendly face, a gray mustache and a red checked shirt',
  frauHaeberle: 'a Swabian woman of 60 with curly gray hair, reading glasses on a chain and a flowered blouse',
  herrLehmann: 'an old man of 72 with a white mustache, a flat cap and a brown vest',
  jule: 'a Hamburg woman of 44 with short ash-blond hair and a navy and white striped shirt',
  elif: 'a woman of 35 with wavy dark shoulder-length hair, gold earrings and a mustard yellow sweater',
  moderatorin: 'a radio host, a woman of 40 with short red hair and big headphones',
  ben: 'a podcast host, a man of 30 with curly brown hair, round glasses and headphones',
  urs: 'a Swiss man of 65 with gray hair, a trimmed gray beard, rimless glasses and a dark green vest',
  resi: 'a sporty Tyrolean woman of 30 with a long brown braid and a red outdoor jacket',
};
const p = (...ids: string[]) => ids.map((i) => LOOK[i]).join('; ');

const end = (label: string, labelEn: string, parts: string[]) => v2(label, labelEn, parts, [parts.length - 1]);

/** Scene picture per block. Key: a scoped audio id, or "<chapter id>/<block id>" for other blocks. */
export const SCENES_B21: Record<string, { id: string; prompt: string }> = {
  // Kapitel 1: Zeit ist relativ
  'kapitel-1/e-over': { id: 'b21-k1-intro', prompt: 'a big friendly hourglass and a wall clock without numbers, an owl on the left under a moon and a lark on the right under a rising sun' },
  'kapitel-1/e-intro': { id: 'b21-k1-owl-lark', prompt: 'a split picture: on one side a cheerful person jumping out of bed at sunrise, on the other side a wide-awake person reading under a lamp at midnight with an owl at the window' },
  'kapitel-1/m1-text': { id: 'b21-k1-bakery', prompt: 'a split picture: an old grandmother in a white apron taking bread out of the oven in a small village bakery at dawn, and a young office woman today juggling a phone, a sandwich and one sneaker' },
  'kapitel-1-m1-audio': { id: 'b21-k1-harbor', prompt: `a small North Sea harbor with a fishing cutter and fishing nets on the quay, ${p('opaFiete')} talking to his granddaughter, ${p('lena')}` },
  'kapitel-1/m2-intro': { id: 'b21-k1-alarm', prompt: 'an alarm clock ringing on a bedside table in the morning light, a sleepy person pulling the duvet over their head' },
  'kapitel-1-m2-audio': { id: 'b21-k1-slam', prompt: `a small cozy poetry slam stage with a warm spotlight and a microphone, ${p('mira')} performing, a quiet audience in silhouette` },
  'kapitel-1/m3-textA': { id: 'b21-k1-inner-clock', prompt: 'a calm human silhouette with a softly glowing clock inside the chest, a sun on one side and a moon on the other, a lark and an owl sitting on the arms' },
  'kapitel-1/m3-textB': { id: 'b21-k1-time-feeling', prompt: 'a split picture: a bored person in a quiet waiting room with a slow clock, and a group of friends laughing at a dinner table with candles' },
  'kapitel-1-k-a1': { id: 'b21-k1-ordination', prompt: `a calm Viennese doctor's reception desk with a phone and a calendar, ${p('frauHuber')} on the phone, a small bubble showing ${p('herrYilmaz')} calling` },
  'kapitel-1-k-a2': { id: 'b21-k1-plumber', prompt: `${p('atze')} on the phone next to his work van with a toolbox, a small bubble showing ${p('priya')} calling from her apartment with a radiator` },
  'kapitel-1-k-a3': { id: 'b21-k1-language-school', prompt: `a bright language school reception in Zurich with plants and a lake view, ${p('frauBaumann')} on the phone, a small bubble showing ${p('tomasz')} calling` },
  'kapitel-1/u-bio': { id: 'b21-k1-comic-artist', prompt: 'a woman of 34 with long dark hair drawing comic panels without text at a desk in a bright art classroom, students sketching behind her, a harbor town with brick gables outside the window' },

  // Kapitel 2: Kopfsache
  'kapitel-2/e-over': { id: 'b21-k2-intro', prompt: 'a friendly brain made of glowing connected lines, surrounded by books, a light bulb, a piano key and a puzzle piece' },
  'kapitel-2/e-intro': { id: 'b21-k2-memory-net', prompt: 'a soft net of glowing lines connecting small pictures in the air, and a little donkey walking over a small wooden bridge in the middle' },
  'kapitel-2/e-test': { id: 'b21-k2-memory-test', prompt: 'eight objects neatly arranged on a table: a candle, a bicycle, a lemon, an envelope, a small rain cloud, a key, a guitar and a baker figurine in a white hat' },
  'kapitel-2-m1-audio': { id: 'b21-k2-street-survey', prompt: `a pedestrian zone, ${p('moderatorin')} holding out a microphone, ${p('jule')} talking with her hands in sign language, ${p('seppi')} with an accordion, ${p('elif')}, ${p('herrLehmann')}` },
  'kapitel-2/m2-text': { id: 'b21-k2-dinner-debate', prompt: 'a family dinner table, a teenage niece holding up a smartphone, her aunt thinking with a finger on her chin, a map of Europe on the wall without names' },
  'kapitel-2/m2-tip': { id: 'b21-k2-commentary', prompt: 'a person writing at a desk, four colored paper cards laid out in a row in front of them, a cup of tea, no readable text' },
  'kapitel-2/m3-text': { id: 'b21-k2-talent', prompt: 'three panels: a man of 35 practicing at a piano, a woman putting away a tennis racket, a math teacher at a board with simple shapes and smiling students' },
  'kapitel-2/k-intro': { id: 'b21-k2-information', prompt: 'a split picture: the reception of an adult education center with course brochures without text, and a quiet library hall with tall bookshelves' },
  'kapitel-2-k-a1': { id: 'b21-k2-vhs', prompt: `${p('frauHaeberle')} on the phone at an adult education center desk with a stack of colorful brochures, a small bubble showing ${p('priya')} calling` },
  'kapitel-2-k-a2': { id: 'b21-k2-library', prompt: `a library counter in Bern, ${p('urs')} as a librarian handing a form to ${p('tomasz')}, study desks with lamps in the background` },

  // Kapitel 3: Vier Wände
  'kapitel-3/e-over': { id: 'b21-k3-intro', prompt: 'a cutaway apartment building with different homes on every floor: plants, moving boxes, a sofa, a tiny balcony with flowers' },
  'kapitel-3/e-intro': { id: 'b21-k3-moving', prompt: 'a happy young woman with a red ponytail taping up moving boxes in an empty apartment, a set of keys on top of a box, sunlight on the wooden floor' },
  'kapitel-3-m1-audio': { id: 'b21-k3-tidy-up', prompt: `a small podcast studio, ${p('ben')} and ${p('resi')} talking at microphones, behind them a tidy hallway with a key bowl next to the door, coat hooks and a shelf with mail compartments` },
  'kapitel-3/m2-text': { id: 'b21-k3-visit', prompt: 'a guest at the door of a warm apartment, six pairs of shoes in a neat row in the hallway, the host in thick socks offering slippers, a window wide open to a snowy street' },
  'kapitel-3/m2-tip': { id: 'b21-k3-differences', prompt: 'two people from different cultures chatting with curiosity over tea at a small kitchen table, friendly gestures' },
  'kapitel-3/m3-text': { id: 'b21-k3-tiny-house', prompt: 'a pretty tiny house of light wood in a green garden, a big window, a father of 41 with short brown hair and his nine-year-old daughter reading on a bed under the roof' },
  'kapitel-3/k-intro': { id: 'b21-k3-landlord', prompt: 'a landlord with a key ring showing an empty bright apartment, and a craftsman with a toolbox at a radiator' },
  'kapitel-3-k-a1': { id: 'b21-k3-viewing', prompt: `${p('herrLehmann')} showing ${p('priya')} a bright empty living room with a big south window and an open fitted kitchen` },
  'kapitel-3-k-a2': { id: 'b21-k3-cold-heating', prompt: `${p('elif')} wrapped in a blanket next to a cold radiator, on the phone, a small bubble showing ${p('atze')} at a property management desk` },
  'kapitel-3/u-anzeige': { id: 'b21-k3-floor-plan', prompt: 'a simple floor plan of a three-room apartment with a balcony and a fitted kitchen, a key lying on it, no numbers or letters' },

  // Kapitel 4: Von Beruf
  'kapitel-4/e-over': { id: 'b21-k4-intro', prompt: 'different workplaces side by side: a carpentry workshop, a classroom, an office, a kindergarten and a train driver cabin' },
  'kapitel-4/e-intro': { id: 'b21-k4-joke', prompt: 'a friendly boss in a suit and a nervous new employee shaking hands at a desk, both smiling a little' },
  'kapitel-4/m1-text': { id: 'b21-k4-career-change', prompt: 'a split picture: a woman of 40 with dark hair repairing a violin in a small wooden workshop, and a former truck driver, a tall man of 45, teaching children in a classroom' },
  'kapitel-4/m2-text': { id: 'b21-k4-application', prompt: 'application documents on a desk: a folder, a résumé page with a small photo and no readable text, a laptop and a cup of coffee' },
  'kapitel-4/m2-anzeige': { id: 'b21-k4-customer-service', prompt: 'a friendly customer service team in a bright office, one person with a headset answering a call, others at laptops' },
  'kapitel-4-m3-audio': { id: 'b21-k4-early-retirement', prompt: `a radio studio, ${p('moderatorin')} interviewing ${p('jule')}, a thought bubble with a small tent, a bicycle and a piggy bank` },
  'kapitel-4/k-intro': { id: 'b21-k4-small-talk', prompt: 'colleagues chatting in an elevator and in an office coffee kitchen, relaxed and friendly' },
  'kapitel-4-k-a1': { id: 'b21-k4-coffee-kitchen', prompt: `an office coffee kitchen in Cologne, ${p('elif')} welcoming ${p('tomasz')} with a coffee cup` },
  'kapitel-4-k-a2': { id: 'b21-k4-trade-fair', prompt: `a glass elevator at a busy trade fair, ${p('seppi')} and ${p('frauBaumann')} chatting, both with lanyards, exhibition halls below` },

  // Kapitel 5: Meins, deins, unsers
  'kapitel-5/e-over': { id: 'b21-k5-intro', prompt: 'shopping bags, a delivery parcel, a price tag and a shared toolbox floating together' },
  'kapitel-5/e-intro': { id: 'b21-k5-advertising', prompt: 'a person with shopping bags hesitating in front of shop windows with bright sale signs without text' },
  'kapitel-5/m1-text': { id: 'b21-k5-lending-shop', prompt: 'a cozy lending shop with shelves of drills, tents, a sewing machine and a waffle iron, next door a repair café with volunteers fixing a lamp' },
  'kapitel-5/m2-text': { id: 'b21-k5-city-center', prompt: 'a changing city center: a café, a small workshop, a second-hand shop, apartments above, and a tiny delivery robot rolling along the pavement' },
  'kapitel-5/m2-tip': { id: 'b21-k5-chart', prompt: 'a person presenting a simple colorful bar chart to two listeners, no numbers or text' },
  'kapitel-5-m3-audio': { id: 'b21-k5-nothing-new', prompt: `a small podcast studio, ${p('ben')} talking with ${p('elif')}, a thought bubble with stacked moving boxes and three kitchen blenders` },
  'kapitel-5/k-intro': { id: 'b21-k5-complaint', prompt: 'a customer at a shop counter with a broken device and a receipt, a friendly sales assistant listening' },
  'kapitel-5-k-a1': { id: 'b21-k5-coffee-machine', prompt: `an electronics shop counter, ${p('tomasz')} showing a leaking coffee machine to ${p('frauHaeberle')}` },
  'kapitel-5-k-a2': { id: 'b21-k5-wrong-size', prompt: `${p('jule')} at home holding up a far too big jacket, on the phone, a small bubble showing ${p('frauHuber')} with a headset` },
  'kapitel-5/u-tip': { id: 'b21-k5-lending', prompt: 'two neighbors in a stairwell, one handing a rolled-up tent to the other, both smiling' },

  // Kapitel 6: Gut in Form
  'kapitel-6/e-over': { id: 'b21-k6-intro', prompt: 'healthy things arranged together: running shoes, a water bottle, an apple, a yoga mat and a soft pillow' },
  'kapitel-6/e-intro': { id: 'b21-k6-rules', prompt: 'a fitness watch, two glasses of water, a bowl of fruit and vegetables and a neatly made bed' },
  'kapitel-6/m1-text': { id: 'b21-k6-eaters', prompt: 'four panels: a woman filling food boxes with rice and vegetables, a man snacking cookies at his desk, a woman buying fresh vegetables at a market, a man reading a food label in a supermarket' },
  'kapitel-6/m2-text': { id: 'b21-k6-news', prompt: 'three panels: a person under a cold shower looking very awake, an office worker stretching next to a desk, a group of people laughing together' },
  'kapitel-6/m2-tip': { id: 'b21-k6-explain-simply', prompt: 'a person explaining something to a friend with a simple drawing of a shield on a notepad, both relaxed on a sofa' },
  'kapitel-6-m3-audio': { id: 'b21-k6-in-motion', prompt: `a split picture: ${p('opaFiete')} in swimming trunks walking into the cold North Sea with a small group in winter, and ${p('resi')} running up a mountain path toward a wooden hut` },
  'kapitel-6/k-intro': { id: 'b21-k6-pharmacy', prompt: 'a calm pharmacy with a green cross, shelves of medicine boxes without text and a pharmacist at the counter' },
  'kapitel-6-k-a1': { id: 'b21-k6-cough', prompt: `a pharmacy counter in Bern, ${p('urs')} in a white coat handing cough syrup and throat lozenges to ${p('priya')}, who wears a scarf` },
  'kapitel-6-k-a2': { id: 'b21-k6-back-pain', prompt: `an office with moving boxes, ${p('seppi')} holding his lower back, ${p('elif')} looking worried, a hot water bottle on the desk` },

  // Kapitel 7: Miteinander
  'kapitel-7/e-over': { id: 'b21-k7-intro', prompt: 'a lively neighborhood: an apartment building, a tram, a sports club field and people of all ages greeting each other' },
  'kapitel-7/e-intro': { id: 'b21-k7-together', prompt: 'neighbors greeting each other in a bright stairwell, a child, an old woman with a cane and a young man with a bike' },
  'kapitel-7-m1-audio': { id: 'b21-k7-street-survey', prompt: `a street survey, ${p('moderatorin')} with a microphone, ${p('jule')}, ${p('herrLehmann')}, ${p('elif')} and ${p('urs')} standing in a friendly row` },
  'kapitel-7/m2-text': { id: 'b21-k7-hallig', prompt: 'a tiny flat island in the North Sea with two small grassy mounds, red brick houses on top, sheep, the sea all around and a small ferry in the distance' },
  'kapitel-7/m3-text': { id: 'b21-k7-arriving', prompt: 'a split picture: a Vietnamese man of 34 in nurse scrubs playing volleyball with friends in Graz, and a Colombian woman of 41 in a hard hat arriving at a rainy northern harbor' },
  'kapitel-7/k-intro': { id: 'b21-k7-describe', prompt: 'a person in a shop describing an object with their hands, a thought bubble with a simple tool, a friendly shop assistant listening' },
  'kapitel-7-k-a1': { id: 'b21-k7-hardware-store', prompt: `a hardware store aisle in Berlin, ${p('atze')} handing a spirit level to ${p('priya')}, boxes of screws and wall plugs on the shelf` },
  'kapitel-7-k-a2': { id: 'b21-k7-flat-kitchen', prompt: `a shared flat kitchen in Hamburg, ${p('tomasz')} at a pot of pasta, ${p('jule')} pointing at a colander hanging next to the fridge` },

  // Kapitel 8: Grüner wird es nicht
  'kapitel-8/e-over': { id: 'b21-k8-intro', prompt: 'a green planet with wind turbines, a forest, a white T-shirt on a hanger and a starry night sky above' },
  'kapitel-8/e-intro': { id: 'b21-k8-bags', prompt: 'a cloth bag and a paper bag, a glass bottle and a plastic bottle, on a big friendly balance scale' },
  'kapitel-8/m1-text': { id: 'b21-k8-climate', prompt: 'the earth wrapped in a soft glowing layer of air, sun rays coming in, small factories and cars below, a melting glacier in the mountains' },
  'kapitel-8/m2-text': { id: 'b21-k8-tshirt', prompt: 'the journey of a white T-shirt as a winding path: a cotton field, a spinning machine, colorful dye baths, a sewing workshop, a container ship and a clothing shop' },
  'kapitel-8/m2-forum': { id: 'b21-k8-fair-fashion', prompt: 'three panels: a young woman browsing a second-hand clothes rail, a father with three growing children, a tailor sewing a small hole in a sweater' },
  'kapitel-8/m3-flyer': { id: 'b21-k8-light-pollution', prompt: 'a city street at night with very bright street lamps, insects circling a lamp, migrating birds confused in the sky and only a few faint stars' },
  'kapitel-8-m3-audio': { id: 'b21-k8-stars', prompt: `${p('urs')} on a balcony with a telescope, showing two grandchildren the Milky Way, street lamps below shining only downward` },
  'kapitel-8/k-intro': { id: 'b21-k8-passing-on', prompt: 'a person explaining notes to a colleague at an office desk, and a neighbor reading a notice board in a stairwell, no readable text' },
  'kapitel-8-k-a1': { id: 'b21-k8-office-recycling', prompt: `an office coffee kitchen with four colored recycling bins and mugs on a shelf, ${p('elif')} explaining to ${p('tomasz')}` },
  'kapitel-8-k-a2': { id: 'b21-k8-stairwell', prompt: `a clean old stairwell in Stuttgart, ${p('frauHaeberle')} with a broom talking to ${p('tomasz')}, yellow recycling bags by the door` },
};

/** Picture vocabulary: German word exactly as in the match exercise → what to draw. */
export const VOCAB_B21: Record<string, string> = {
  // Kapitel 1
  'der Nachtmensch': 'a person wide awake at a desk lamp under a moon',
  'der Frühaufsteher': 'a person stretching happily next to a bed at sunrise',
  'das Gehirn': 'a human brain',
  'das Sinnesorgan': 'an eye, an ear and a nose side by side',
  'die Schichtarbeit': 'a factory worker with a helmet under a moon and a sun',
  // Kapitel 2
  'eine Prüfung': 'an exam sheet with check boxes and a pencil',
  'Notizen': 'an open notebook with scribbles and a pen',
  'einen Kurs': 'a small group of adults at tables facing a teacher',
  'eine Frage': 'a raised hand next to a big question mark',
  'einen Fehler': 'a pencil eraser removing a red cross on paper',
  // Kapitel 3
  'die Kaution': 'an envelope with banknotes and a key',
  'die Nebenkosten': 'a water tap, a radiator and a trash bin',
  'die WG': 'three young people cooking together in a shared kitchen',
  'der Umzug': 'a stack of moving boxes and a small van',
  'Zimmer': 'an empty room with a window and a door',
  'Einbauküche': 'a fitted kitchen with cabinets and a stove',
  'Balkon': 'a small balcony with flower pots',
  // Kapitel 4
  'die Erzieherin': 'a kindergarten teacher reading to small children',
  'der Pfleger': 'a male nurse in scrubs with a patient',
  'die Schreinerin': 'a female carpenter planing a wooden board',
  'der Steuerberater': 'a tax advisor with a calculator and folders',
  'die Bauingenieurin': 'a female engineer in a hard hat in front of a bridge',
  'der Lokführer': 'a train driver in a locomotive cabin',
  'einen Vertrag': 'a contract page and a fountain pen',
  'Urlaub': 'a suitcase, sunglasses and a beach umbrella',
  // Kapitel 5
  'das Schnäppchen': 'a happy shopper with a bag and a small price tag',
  'der Rabatt': 'a price tag with a percent sign',
  'die Quittung': 'a long paper receipt',
  'der Spontankauf': 'a person grabbing an item from a shelf on impulse',
  'die Lieferung': 'a courier handing over a parcel at a door',
  'die Hälfte': 'a pie chart with one half colored',
  'ein Viertel': 'a pie chart with one quarter colored',
  // Kapitel 6
  'Kopfschmerzen': 'a person holding their aching head',
  'Husten': 'a person coughing into their elbow',
  'Tee mit Honig': 'a cup of tea with a honey jar',
  'das Fieber': 'a digital thermometer',
  'ein Rezept': 'a doctor’s prescription pad and a pen',
  'eine Tablette': 'a white tablet and a glass of water',
  'den Blutdruck': 'a blood pressure cuff on an arm',
  'eine Salbe': 'a tube of ointment',
  // Kapitel 7
  'das Bügeleisen': 'an iron on an ironing board',
  'der Flaschenöffner': 'a bottle opener',
  'der Kleiderschrank': 'a wardrobe with clothes on hangers',
  'die Briefträgerin': 'a female mail carrier with a bag of letters',
  'das Mehrgenerationenhaus': 'a house with grandparents, parents and children on a shared terrace',
  'die Sturmflut': 'huge waves crashing over a dike in a storm',
  'das Festland': 'a coastline seen from the sea, with fields and a village',
  // Kapitel 8
  'Pfandflaschen': 'a crate of empty returnable bottles',
  'Müll': 'colored trash bins for sorting waste',
  'die Dürre': 'cracked dry earth under a hot sun',
  'die Überschwemmung': 'a flooded street with water up to the doors',
  'das Gewitter': 'a dark cloud with a lightning bolt',
  'die Hitzewelle': 'a glowing sun over a thermometer in the red',
  'der Frost': 'frosty leaves covered in ice crystals',
  'der Sturm': 'trees bending in strong wind',
};

/** Grammar diagrams. Key: "<chapter id>/<grammar block id>". */
export const VISUALS_B21: Record<string, Visual> = {
  // Kapitel 1
  'kapitel-1/m1-gram': {
    kind: 'positions', title: 'Drei Zeitformen der Vergangenheit', titleEn: 'Three past tenses',
    rows: [
      v2('Perfekt', 'Perfect', ['Ich', 'habe', 'drei Mails', 'beantwortet.'], [1, 3]),
      v2('Präteritum', 'Simple past', ['Sie', 'führte', 'eine Bäckerei.']),
      v2('Plusquamperfekt', 'Past perfect', ['Die Bahn', 'war', 'schon', 'abgefahren.'], [1, 3]),
    ],
  },
  'kapitel-1/g-3': {
    kind: 'positions', title: 'Dativ und Akkusativ im Mittelfeld', titleEn: 'Dative and accusative in the middle of the sentence',
    rows: [
      v2('zwei Nomen', 'two nouns', ['Ich', 'schreibe', 'dem Chef', 'eine Mail.']),
      v2('Pronomen vor Nomen', 'pronoun first', ['Ich', 'schreibe', 'ihm', 'eine Mail.']),
      v2('Akkusativ-Pronomen zuerst', 'accusative pronoun first', ['Ich', 'schreibe', 'sie', 'dem Chef.']),
    ],
  },
  // Kapitel 2
  'kapitel-2/m1-gram': {
    kind: 'positions', title: 'Infinitiv mit zu: zu + Verb am Ende', titleEn: 'Infinitive with zu: zu + verb at the end',
    rows: [
      v2('anfangen', 'to start', ['Ich', 'habe', 'angefangen,', 'Gebärdensprache', 'zu lernen.'], [1, 2, 4]),
      v2('versuchen', 'to try', ['Ich', 'versuche,', 'jeden Tag', 'zu üben.'], [1, 3]),
      v2('trennbar', 'separable', ['Vergiss', 'nicht,', 'mich', 'anzurufen.'], [0, 3]),
    ],
  },
  'kapitel-2/k-gram': {
    kind: 'positions', title: 'Indirekte Frage: höflich, Verb am Ende', titleEn: 'Indirect question: polite, verb at the end',
    rows: [
      v2('direkt', 'direct', ['Wann', 'beginnt', 'der Kurs?']),
      end('indirekt', 'indirect', ['Könnten Sie mir sagen,', 'wann', 'der Kurs', 'beginnt?']),
      end('ob', 'whether', ['Wissen Sie,', 'ob', 'es eine Ermäßigung', 'gibt?']),
    ],
  },
  // Kapitel 3
  'kapitel-3/m1-gram': { kind: 'articles', examples: ['an den Haken', 'ins Regal', 'in die Küche', 'auf die Stühle'], caseLabel: 'Akkusativ', title: 'Wohin? Bewegung zum Ziel: Akkusativ', titleEn: 'Where to? Movement to a goal: accusative' },
  'kapitel-3/m3-gram': { kind: 'articles', examples: ['der kleine Tisch', 'das kleine Bad', 'die kleine Küche', 'die kleinen Räume'], title: 'Nach der, das, die: -e, im Plural -en', titleEn: 'After der, das, die: -e, plural -en' },
  // Kapitel 4
  'kapitel-4/m1-gram': { kind: 'articles', examples: ['des Geigenbauers', 'des Kindes', 'der Versicherung', 'der Schüler'], caseLabel: 'Genitiv', title: 'Wessen? Maskulin und neutral mit -(e)s', titleEn: 'Whose? Masculine and neuter add -(e)s' },
  'kapitel-4/m3-gram': {
    kind: 'positions', title: 'Grund und Gegengrund: Wo steht das Verb?', titleEn: 'Reason and concession: where does the verb go?',
    rows: [
      end('weil', 'because', ['…, weil', 'ich', 'viel gearbeitet', 'habe.']),
      v2('denn', 'because (position 0)', ['…, denn', 'ich', 'habe', 'viel gearbeitet.'], [2]),
      v2('trotzdem', 'nevertheless', ['Sie muss nicht mehr arbeiten,', 'trotzdem', 'arbeitet', 'sie.'], [2]),
    ],
  },
  // Kapitel 5
  'kapitel-5/m1-gram': {
    kind: 'positions', title: 'Passiv: werden auf Position 2, Partizip am Ende', titleEn: 'Passive: werden in position 2, participle at the end',
    rows: [
      v2('Präsens', 'Present', ['Der Gegenstand', 'wird', 'nach der Rückgabe', 'geprüft.'], [1, 3]),
      v2('Präteritum', 'Simple past', ['Der Laden', 'wurde', 'vor einigen Jahren', 'eröffnet.'], [1, 3]),
      v2('Perfekt', 'Perfect', ['Tauschregale', 'sind', 'in vielen Städten', 'aufgestellt worden.'], [1, 3]),
      v2('mit Modalverb', 'with a modal', ['Fast alles', 'kann', 'heute', 'geteilt werden.'], [1, 3]),
    ],
  },
  // Kapitel 6
  'kapitel-6/m1-gram': {
    kind: 'positions', title: 'Wozu? um … zu und damit', titleEn: 'What for? um … zu and damit',
    rows: [
      v2('um … zu', 'same subject', ['Ich esse langsam,', 'um', 'satt', 'zu werden.'], [3]),
      end('damit', 'different subjects', ['Sie kauft auf dem Markt ein,', 'damit', 'das Gemüse', 'frisch', 'ist.']),
    ],
  },
  'kapitel-6/m3-gram2': {
    kind: 'positions', title: 'Bei Sachen: wo(r)- fragt, da(r)- antwortet', titleEn: 'For things: wo(r)- asks, da(r)- answers',
    rows: [
      v2('Frage', 'Question', ['Worauf', 'freust', 'du dich?']),
      v2('Antwort', 'Answer', ['Ich', 'freue', 'mich', 'darauf.']),
      v2('Frage', 'Question', ['Woran', 'denkst', 'du?']),
      v2('Antwort', 'Answer', ['Ich', 'denke', 'daran.']),
    ],
  },
  // Kapitel 7
  'kapitel-7/m1-gram': {
    kind: 'positions', title: 'Relativsatz: Pronomen vorne, Verb am Ende', titleEn: 'Relative clause: pronoun first, verb at the end',
    rows: [
      end('Nominativ', 'subject', ['ein Freund,', 'der', 'mir nur nach dem Mund', 'redet']),
      end('Dativ', 'indirect object', ['ein Nachbar,', 'dem', 'ich mein Auto', 'geliehen habe']),
      end('mit Präposition', 'with a preposition', ['das Haus,', 'in dem', 'ich', 'wohne']),
    ],
  },
  'kapitel-7/m3-gram': {
    kind: 'positions', title: 'Temporale Nebensätze: Verb, Komma, Verb', titleEn: 'Time clauses: verb, comma, verb',
    rows: [
      v2('als', 'when (once)', ['Als ich ankam,', 'regnete', 'es.']),
      v2('während', 'while', ['Während ich wartete,', 'arbeitete', 'ich in einer Küche.']),
      end('nachdem', 'after', ['Ich bewarb mich,', 'nachdem', 'ich mein Studium', 'abgeschlossen hatte.']),
    ],
  },
  // Kapitel 8
  'kapitel-8/m1-gram': {
    kind: 'positions', title: 'Relativsätze mit wo und was', titleEn: 'Relative clauses with wo and was',
    rows: [
      end('wo', 'where', ['In den Alpen,', 'wo', 'viele Flüsse', 'entspringen,']),
      end('was', 'that/which', ['Alles,', 'was', 'den Ausstoß', 'senkt,']),
    ],
  },
  'kapitel-8/m3-gram': {
    kind: 'positions', title: 'Konjunktiv II: Was wäre, wenn …?', titleEn: 'Subjunctive II: what if …?',
    rows: [
      v2('Bedingung zuerst', 'condition first', ['Wenn ich mehr Zeit hätte,', 'würde', 'ich öfter', 'Rad fahren.'], [1, 3]),
      v2('Bedingung hinten', 'condition second', ['Die Stadt könnte Strom sparen,', 'wenn', 'die Laternen', 'ausgeschaltet', 'würden.'], [3, 4]),
    ],
  },
};
