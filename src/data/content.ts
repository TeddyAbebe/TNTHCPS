export type Picture = {
  src: string;
  alt: string;
  caption: string;
  credit: string;
};

export type Community = {
  slug: string;
  name: string;
  place: string;
  summary: string;
  reading: string;
};

export type Entry = {
  slug: string;
  title: string;
  summary: string;
  lede: string;
  picture: Picture;
  paragraphs: string[];
  points?: string[];
  programme?: string;
  also?: string[];
};

const wiki = (file: string, alt: string, caption: string, credit: string): Picture => ({
  src: `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=1800`,
  alt,
  caption,
  credit,
});

export const pictures = {
  mist: wiki(
    "Montane sholas and grasslands Nilgiris.jpg",
    "Rolling shola grassland in the Nilgiris",
    "Shola and grassland, the Nilgiris",
    "Anand Osuri, CC BY-SA 4.0",
  ),
  fog: wiki(
    "Shola grasslands - IMG 20180215 150359098.jpg",
    "High grassland with pockets of shola forest in the Nilgiris",
    "Upper grassland",
    "Abhishekgopal1993, CC BY-SA 4.0",
  ),
  forest: wiki(
    "Longwood Shola Reserve Forest, Kotagiri, Tamil Nadu.jpg",
    "A road through Longwood Shola at Kotagiri",
    "Longwood Shola, Kotagiri",
    "SeethaG, CC BY-SA 4.0",
  ),
  grass: wiki(
    "Shola grasslands - IMG 20180215 150359098.jpg",
    "High grassland with pockets of shola forest in the Nilgiris",
    "Upper grassland",
    "Abhishekgopal1993, CC BY-SA 4.0",
  ),
  path: wiki(
    "Longwood Shola Reserve Forest, Kotagiri, Tamil Nadu.jpg",
    "A road through Longwood Shola at Kotagiri",
    "Longwood Shola, Kotagiri",
    "SeethaG, CC BY-SA 4.0",
  ),
  leaves: wiki(
    "Nilgiri Biosphere Reserve-Wenlock Downs-WUS06100.jpg",
    "Open downs in the Nilgiri Biosphere Reserve",
    "Wenlock Downs",
    "Rainer Halama, CC BY-SA 4.0",
  ),
  honey: {
    src: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=1600&q=80",
    alt: "Honey lifted from a jar",
    caption: "Honey",
    credit: "Unsplash",
  },
  cloth: wiki(
    "Toda embroidery and poothkuli shawls, National Crafts Museum, New Delhi.jpg",
    "Toda embroidery and poothkuli shawls displayed at the National Crafts Museum",
    "Toda embroidery and poothkuli shawls",
    "Niranjan Ramamurthy, CC BY-SA 4.0",
  ),
  buffalo: wiki(
    "Toda Buffalo Female Ooty Jun26 OM5 0234.jpg",
    "A Toda buffalo grazing near Ooty",
    "Toda buffalo, Ooty",
    "Timothy A. Gonsalves, CC BY-SA 4.0",
  ),
  clay: wiki(
    "Clay craft design.jpg",
    "A gathering of earthen vessels",
    "Earthen vessels",
    "Bhoomi lakher, CC BY-SA 4.0",
  ),
};

export const six: Community[] = [
  {
    slug: "toda",
    name: "Toda",
    place: "High plateau",
    summary:
      "Pastoral people of the upper grasslands, living with the buffalo and a counted-thread embroidery.",
    reading:
      "The Toda live on the high plateau of the Nilgiris, a small community of roughly fifteen hundred people, in hamlets called munds, among grassland and shola. Their life turns around a hill buffalo found in these hills: long crescent horns, a modest yield, and milk rich enough to become ghee. The embroidery worked by Toda women is counted from the threads of the cloth — geometric, reversible, and registered as a geographical indication in 2013.",
  },
  {
    slug: "kota",
    name: "Kota",
    place: "Artisan villages",
    summary:
      "Makers and musicians. Potters, smiths, and carpenters of the old exchange between communities.",
    reading:
      "The Kota are the artisans of the upper Nilgiris. In the older order of the hills they made pots, tools, and music for neighbouring communities. Kotagiri still carries their name. The craft has narrowed, but the villages and the music remain.",
  },
  {
    slug: "kurumba",
    name: "Kurumba",
    place: "Forest slopes",
    summary:
      "Forest specialists. Honey collectors who read cliff, season, and the giant rock bee.",
    reading:
      "Kurumba is a name held by several related forest communities on the slopes below the plateau. They are known above all as honey collectors, climbing to the combs of the giant rock bee. The work is skill, song, and a close reading of the forest year.",
  },
  {
    slug: "irula",
    name: "Irula",
    place: "Forest edge",
    summary:
      "People of the forest edge, moving between field, jungle, and a long knowledge of plants.",
    reading:
      "The Irula live along the lower slopes and forest margins of the Nilgiris, and in other districts of Tamil Nadu. Their knowledge of plants, snakes, and the edge between farm and jungle is practical and inherited. Daily life now often sits between wage work and the forest.",
  },
  {
    slug: "paniya",
    name: "Paniya",
    place: "Lower slopes",
    summary:
      "A community of the Gudalur side and the neighbouring forests, long pressed by landlessness.",
    reading:
      "The Paniya live on the lower, wetter side of the hills, including the Gudalur region and across the line into Wayanad. Many households have lived with bonded labour and little land of their own. Forest, field, and the struggle for a secure place are the ground of daily life.",
  },
  {
    slug: "kattunayakan",
    name: "Kattunayakan",
    place: "Deep forest",
    summary:
      "Forest people of Mudumalai and Gudalur. The name is often heard as rulers of the forest.",
    reading:
      "The Kattunayakan are hunters and gatherers of the forests around Mudumalai, Gudalur, and into Wayanad and Nilambur. Honey, tubers, and a careful movement through the forest shaped the older economy. Settlements today sit close to reserves whose rules have changed what the forest will allow.",
  },
];

export const three: Community[] = [
  {
    slug: "badaga",
    name: "Badaga",
    place: "Upper plateau",
    summary:
      "The large indigenous farming community of the upper Nilgiris, in villages called hattis.",
    reading:
      "The Badaga are the largest indigenous community of the upper Nilgiris, farmers in several hundred hattis. Their language, Badugu, is Dravidian and traditionally unwritten. They are not classified as a Particularly Vulnerable Tribal Group. They remain central to the life of the plateau.",
  },
  {
    slug: "cholanaikan",
    name: "Cholanaikan",
    place: "Nilambur forests",
    summary:
      "A small forest community of the Nilambur valley, on the Kerala side of the Nilgiri Biosphere.",
    reading:
      "The Cholanaikan live in the forests of Nilambur, within the Nilgiri Biosphere on the Kerala side. They are one of the smallest indigenous communities of these hills, with a life long tied to the interior forest rather than the plateau towns.",
  },
  {
    slug: "kurichya",
    name: "Kurichya",
    place: "Wayanad slopes",
    summary:
      "An indigenous farming community of the Wayanad slopes, west of the Nilgiri plateau.",
    reading:
      "The Kurichya are an indigenous farming people of Wayanad, on the western side of the same mountain system. Their settlements and fields belong to the wider Nilgiri landscape, across the state line from the Tamil Nadu plateau.",
  },
];

export const programmes: Entry[] = [
  {
    slug: "livelihood",
    title: "Livelihood",
    summary: "Work that stays with the household — cloth, honey, grain, and a fair return.",
    lede: "A livelihood is not a scheme. It is the way a household meets the week, without being asked to leave its own skill behind.",
    picture: pictures.cloth,
    paragraphs: [
      "On these hills, making and gathering are already livelihoods: embroidery counted by thread, honey taken from the cliff, pots thrown in a Kota street, grain from a Badaga field, plants known at the forest edge.",
      "The livelihood programme stays with that work. It looks for a return that reaches the maker, a pace that does not exhaust the grassland or the bee, and a form of selling that does not rename the thing or the person who made it.",
      "What it does not do is invent a new craft for its own sake. The skill is already here. The programme’s work is to keep the path between that skill and a living from closing.",
    ],
  },
  {
    slug: "conservation",
    title: "Conservation",
    summary: "Shola, grassland, water, and the customary care that already belongs to these places.",
    lede: "The forest and the grassland are not a backdrop to community life. They are the life.",
    picture: pictures.forest,
    paragraphs: [
      "The Nilgiris are a mosaic: high grassland, shola forest in the folds, tea where the grass once was, and deeper jungle on the slopes. Indigenous care of that mosaic is older than the reserve boundaries drawn across it.",
      "Conservation, here, begins by listening to that care. It means the grass the buffalo needs, the trees that hold water, the cliff that still has bees, and the right to walk a path a family has always walked. The Toda buffalo is part of that care. A 2023 count across Toda hamlets, reported from the Sheep Breeding Research Station at Sandynallah, found fewer than a thousand animals left, a share of them already crossed with other cattle. Breeding stock held at that station is a public programme. The line on this site stays with the grassland and the people who still graze it.",
      "The programme works at that meeting point — ecology and tenure, species and settlement — so that protection does not become another way of removing people from the places they keep.",
    ],
  },
  {
    slug: "education",
    title: "Education",
    summary: "Learning that does not ask a child to set their language down at the school gate.",
    lede: "School should add a language. It should not take one away.",
    picture: pictures.path,
    paragraphs: [
      "Children of these communities already learn a great deal before a classroom: the names of grass, the count of a thread, the season a comb is ready, the story of a place. Formal school often treats that knowledge as a delay.",
      "The education programme is for learning that can hold both. Mother tongue and the language of the exam. The skill of a household and the certificate a young person may need in order to be heard.",
      "It is slow work, and it belongs with parents and elders as much as with teachers. A school that cannot say a child’s home is not a neutral school.",
    ],
  },
  {
    slug: "rights",
    title: "Rights",
    summary: "Land, forest, identity, and the consent to be consulted before a decision is made.",
    lede: "A right is a practical thing: a paper that holds, a boundary that is recognised, a meeting that waits for the people it concerns.",
    picture: pictures.leaves,
    paragraphs: [
      "The indigenous communities of the Nilgiris have lived through settlement, plantation, reserve, and tourism. Each one redrew who could be on the land, and on what terms. Many of those lines are still in dispute.",
      "The rights programme stays with the unglamorous parts of that history: forest rights, housing, identity documents, and the habit of asking before a project, a study, or a photograph proceeds.",
      "It does not speak in place of a community. It helps make room for the community to speak, and for that speech to count.",
    ],
  },
];

export const projects: Entry[] = [
  {
    slug: "high-grassland",
    title: "The high grassland",
    summary: "With Toda pastoral landscapes — the mund, the buffalo, and the grass that holds both.",
    lede: "A project on the plateau, concerned with the grassland itself and the pastoral life that reads it.",
    programme: "conservation",
    also: ["rights"],
    picture: pictures.grass,
    paragraphs: [
      "The upper Nilgiris are a grassland punctuated by shola. Toda pastoral life belongs to that pattern. When the grass is planted over, or fenced, the relationship thins with it.",
      "This project stays on the plateau. It is about the condition of the grazing ground, the daily care of the buffalo, and a record of the mund that is made with the people who live there — not about them, from elsewhere.",
      "It is the first line under Project. It will deepen as the work is agreed, season by season.",
    ],
  },
  {
    slug: "honey-on-the-slope",
    title: "Honey on the slope",
    summary: "With Kurumba collectors, a slower path for wild honey from cliff to household.",
    lede: "Wild honey is a forest relationship before it is a jar. The project tries to keep that order.",
    programme: "livelihood",
    also: ["conservation"],
    picture: pictures.honey,
    paragraphs: [
      "Collecting honey from the giant rock bee is dangerous, skilled, and timed to a season. The people who do it already know the cliff. What they are often denied is a price, a story, and a say that match the risk.",
      "Honey on the slope follows the honey from the comb to the household that climbed for it. It is interested in the forest remaining a place where bees and collectors can both continue.",
      "Nothing on this page is a finished yield or a promise of scale. It is the shape of the work.",
    ],
  },
  {
    slug: "counted-thread",
    title: "Counted thread",
    summary: "Embroidery that keeps the geometry, the makers, and the return in the same place.",
    lede: "Toda embroidery is counted, not drawn. The project’s task is to leave it that way.",
    programme: "livelihood",
    also: ["education"],
    picture: pictures.cloth,
    paragraphs: [
      "The stitch is worked by counting threads, in red and black, and the pattern can be read from either side of the cloth. It is a Toda women’s practice. The ceremonial shawl is the putukuli. The embroidery was registered as a geographical indication in 2013, so the name belongs to work done by hand in the Nilgiris.",
      "Counted thread is a livelihood project and a matter of authorship. The cloth should travel, if it travels, with the name of the maker and a return that she recognises.",
      "Design can sit beside the geometry. It does not need to correct it.",
    ],
  },
];

export function programmesFor(project: Entry) {
  const slugs = [project.programme, ...(project.also ?? [])].filter((slug): slug is string => Boolean(slug));
  return slugs
    .map((slug) => programmes.find((item) => item.slug === slug))
    .filter((item): item is Entry => Boolean(item));
}

export function projectsFor(programme: Entry) {
  return projects.filter(
    (item) => item.programme === programme.slug || item.also?.includes(programme.slug),
  );
}

export const palette = [
  { name: "Olive gold", hex: "#C6A15A" },
  { name: "Ivory", hex: "#F7F1E6" },
  { name: "Forest green", hex: "#1B4D3E" },
  { name: "Brick red", hex: "#8E342E" },
  { name: "Charcoal", hex: "#1C1916" },
  { name: "Beige", hex: "#E7D8C3" },
];

export const breedFacts = [
  {
    label: "The breed",
    value: "Toda buffalo",
    note: "A hill buffalo of the Nilgiris, kept by the Toda, and confined to these hills.",
  },
  {
    label: "The milk",
    value: "About 8.5% fat",
    note: "A 2026 study of milk from munds near Sandynallah measured a mean of 8.57% fat. Older breed records sit near 8.2%.",
  },
  {
    label: "The yield",
    value: "A few litres a day",
    note: "Under traditional care the mean is about 2.6 kilograms a day. The milk is clarified into ghee, butter, and curd.",
  },
  {
    label: "The herd",
    value: "Under 1,000",
    note: "A 2023 count across Toda hamlets found fewer than a thousand animals, including crossbreds. A few decades earlier the herd was put at 15,000 to 20,000.",
  },
];

export const inspirations = [
  { title: "Nilgiri buffalo", text: "The herd the milk comes from, on the high grassland." },
  { title: "Toda hut", text: "The barrel-vault mund, a form carried onto the label." },
  { title: "Nilgiri landscape", text: "Shola and grass behind the jar, not a studio backdrop." },
  { title: "Toda motifs", text: "Counted geometry in brick red, charcoal, and ivory." },
];

export type JarShape = "round" | "salsa" | "koyna" | "matki" | "pickle" | "apple" | "straight";

export type JarSpec = {
  name: string;
  capacity: string;
  capacityMl: number;
  neckMm: number;
  heightMm: number;
  bottomMm: number;
  boxPcs: number;
  shape: JarShape;
};

export const jarFamilies: { id: string; title: string; jars: JarSpec[] }[] = [
  {
    id: "round-jar",
    title: "Round jar",
    jars: [
      { name: "30 ml round jar", capacity: "30 ml", capacityMl: 30, neckMm: 43, heightMm: 38, bottomMm: 44, boxPcs: 300, shape: "round" },
      { name: "50 ml round jar", capacity: "50 ml", capacityMl: 50, neckMm: 43, heightMm: 60, bottomMm: 44, boxPcs: 360, shape: "round" },
      { name: "125 ml round jar", capacity: "125 ml", capacityMl: 125, neckMm: 53, heightMm: 80, bottomMm: 50, boxPcs: 108, shape: "round" },
      { name: "160 ml Koyna jar", capacity: "160 ml", capacityMl: 160, neckMm: 53, heightMm: 88, bottomMm: 58, boxPcs: 96, shape: "koyna" },
      { name: "200 ml salsa jar", capacity: "200 ml", capacityMl: 200, neckMm: 63, heightMm: 78, bottomMm: 67, boxPcs: 50, shape: "salsa" },
      { name: "350 ml salsa jar", capacity: "350 ml", capacityMl: 350, neckMm: 82, heightMm: 79, bottomMm: 86, boxPcs: 72, shape: "salsa" },
      { name: "100 ml salsa jar", capacity: "100 ml", capacityMl: 100, neckMm: 53, heightMm: 69, bottomMm: 58, boxPcs: 108, shape: "salsa" },
      { name: "225 ml salsa jar", capacity: "225 ml", capacityMl: 225, neckMm: 82, heightMm: 59, bottomMm: 82, boxPcs: 80, shape: "salsa" },
      { name: "525 ml salsa jar", capacity: "525 ml", capacityMl: 525, neckMm: 82, heightMm: 121, bottomMm: 82, boxPcs: 48, shape: "salsa" },
    ],
  },
  {
    id: "glass-jar",
    title: "Glass jar",
    jars: [
      { name: "300 ml AT round jar", capacity: "300 ml", capacityMl: 300, neckMm: 63, heightMm: 86, bottomMm: 74, boxPcs: 70, shape: "straight" },
      { name: "400 ml AT round jar", capacity: "400 ml", capacityMl: 400, neckMm: 63, heightMm: 120, bottomMm: 78, boxPcs: 70, shape: "straight" },
      { name: "780 ml pickle jar", capacity: "780 ml", capacityMl: 780, neckMm: 82, heightMm: 165, bottomMm: 84, boxPcs: 24, shape: "pickle" },
      { name: "1 kg Koyna jar", capacity: "1000 ml", capacityMl: 1000, neckMm: 82, heightMm: 179, bottomMm: 87, boxPcs: 20, shape: "koyna" },
      { name: "100 ml matki jar", capacity: "100 ml", capacityMl: 100, neckMm: 43, heightMm: 84, bottomMm: 57, boxPcs: 120, shape: "matki" },
      { name: "200 ml matki jar", capacity: "200 ml", capacityMl: 200, neckMm: 53, heightMm: 38, bottomMm: 44, boxPcs: 90, shape: "matki" },
      { name: "350 ml matki jar", capacity: "350 ml", capacityMl: 350, neckMm: 63, heightMm: 100, bottomMm: 88, boxPcs: 48, shape: "matki" },
      { name: "500 ml matki jar", capacity: "500 ml", capacityMl: 500, neckMm: 82, heightMm: 108, bottomMm: 106, boxPcs: 36, shape: "matki" },
      { name: "1 kg apple jar", capacity: "1000 ml", capacityMl: 1000, neckMm: 82, heightMm: 164, bottomMm: 79, boxPcs: 24, shape: "apple" },
    ],
  },
];

export const products: Entry[] = [
  {
    slug: "toda-buffalo-ghee",
    title: "Toda buffalo ghee",
    summary: "NERSHROF. A pure traditional ghee, made in small batches.",
    lede: "Ghee from the milk of the Toda buffalo. The fat runs near 8.5 percent, so a small daily yield becomes a jar.",
    picture: pictures.grass,
    points: [
      "About 8.5% milk fat",
      "Artisanal, small batch",
      "A pure traditional product",
      "Gold lid, natural finish",
    ],
    paragraphs: [
      "Toda households have long clarified this milk into butter and ghee. A study of herds under traditional care, in munds near Sandynallah, found the milk at 8.57 percent fat on average, from a yield of only a few litres a day. NERSHROF is that ghee: locally sourced, made in a small batch, and named for the breed.",
      "The colour of the ghee is the olive gold of the palette. The lid is gold. The band on the label is forest green. Brick red and charcoal carry the Toda geometry, the same counted motifs that appear on cloth.",
      "Nothing here is a finished price list. The jar on this page is the product to show: what it is made from, who the milk comes from, and how the vessel should look.",
    ],
  },
  {
    slug: "buffalo-milk",
    title: "Buffalo milk",
    summary: "Locally sourced pure milk. The ghee begins here.",
    lede: "Locally sourced milk from the Toda buffalo: crescent horns, a fawn or ash-grey coat, and a life on the upper grassland.",
    picture: pictures.buffalo,
    points: ["Locally sourced", "About 8.5% fat", "Semi-wild and hardy", "The start of the ghee"],
    paragraphs: [
      "The Toda buffalo is the hill buffalo of Tamil Nadu, reared by the Toda and confined to the Nilgiris. The horns are long and set in a crescent. The animals graze the upper grassland in a semi-wild way, and veterinary notes record them as unusually free of mastitis.",
      "The milk is modest in quantity and high in fat. Breed records put daily yield near 2.5 kilograms, with fat around 8 percent. A 2026 study of 150 animals in eight munds near Sandynallah measured 2.65 kilograms a day and 8.57 percent fat. That richness is why the milk is kept for ghee.",
      "The herd has thinned. Officials told The Hindu that a few decades ago it stood between 15,000 and 20,000. A 2023 enumeration of every Toda hamlet found fewer than 1,000 animals, a considerable number of them already crossed. The milk on this page is from the breed that remains.",
    ],
  },
  {
    slug: "the-jar",
    title: "The jar",
    summary: "Glass, a gold lid, and a label drawn from buffalo, hut, hill, and motif.",
    lede: "Clear glass and a gold lid. Eighteen sizes, from 30 ml to 1 kg, packed by the box.",
    picture: pictures.grass,
    points: ["Gold lid", "Clear glass", "Round jars", "Glass jars"],
    paragraphs: [
      "The label is a circle and a band. NERSHROF sits at the top. A buffalo stands in front of a Toda hut, with the grassland behind them. GHEE is set large, in a serif, and under it: a pure traditional product.",
      "Around that, two short lines: locally sourced pure milk, and artisanal small batch premium ghee. The border takes the brick-red and charcoal geometry of Toda cloth, so the jar is recognisable before the words are read.",
      "The glass itself comes from two families: round jars and glass jars. Eighteen sizes, from a 30 ml round jar to a 1 kg Koyna or apple jar. Each one is clear glass with a gold lid, and each is packed by the box.",
    ],
  },
  {
    slug: "toda-embroidery",
    title: "Toda embroidery",
    summary: "Counted-thread cloth, worked by Toda women. Geometric, reversible, unhurried.",
    lede: "A length of cloth counted by hand. The pattern is the record of the counting.",
    picture: pictures.cloth,
    points: ["Counted thread", "Red and black", "Reversible", "Geographical indication"],
    paragraphs: [
      "Toda embroidery is worked without a frame or a drawn guide. The stitch follows the threads already in the cloth. Traditional pieces use a deep red and black on an unbleached ground, in bands of geometry that read the same from both sides. The ceremonial shawl is the putukuli. The craft received a geographical indication in 2013: the name is for handwork from the Nilgiris, not a print made elsewhere.",
      "Pieces offered here are made with Toda women. The form may be a shawl, a length, or a cloth for the house. Each one stays small, because the stitch cannot be rushed and should not be imitated by a machine and then renamed.",
    ],
  },
];
