const body = document.querySelector("body");
const floor = document.querySelector(".floor");
const rocks = document.querySelector(".rock");
const leaves = document.querySelector(".leaf");
const gems = document.querySelector(".gem");
const gemObjs = [];
const resetGems = () => {
  gemObjs = [];
};

const randomPosition = item => {
  item.style.left = Math.random() * window.innerWidth + "px";
  item.style.top = Math.random() * window.innerHeight + "px";
};

//creates a random position for the rocks and leaves
const placeItems = (n, item, url, selector) => {
  for (let i = 0; i < n; i++) {
    const newDiv = document.createElement("div");
    item = document.createElement("img");
    item.setAttribute("src", url);
    randomPosition(item);
    newDiv.appendChild(item);
    selector.appendChild(newDiv);
  }
};

placeItems(
  3,
  "largeRock",
  "https://images.vexels.com/media/users/3/145827/isolated/preview/357f06ecbaaa77d750259c459c0ed55f-round-rock-illustration-by-vexels.png",
  rocks
);

placeItems(
  3,
  "smallRock",
  "https://images.vexels.com/media/users/3/145827/isolated/preview/357f06ecbaaa77d750259c459c0ed55f-round-rock-illustration-by-vexels.png",
  rocks
);

placeItems(
  4,
  "largeRedLeaf",
  "http://res.freestockphotos.biz/pictures/16/16812-illustration-of-an-orange-autumn-leaf-pv.png",
  leaves
);

placeItems(
  3,
  "smallRedLeaf",
  "http://res.freestockphotos.biz/pictures/16/16813-illustration-of-an-orange-autumn-leaf-pv.png",
  leaves
);

placeItems(
  2,
  "greenLeaf",
  "http://www.lindicepensable.ch/wordpress/wp-content/uploads/2018/07/Feuille-de-vigne-avec-insecte.png",
  leaves
);

// CREATING AND PLACING THE GEMS

const placeGems = (stone, id) => {
  const newEl = document.createElement("div");
  newEl.id = id;
  gems.appendChild(newEl);
  randomPosition(newEl);
};

//function creates and places gem objects
const createGemObject = (stone, id, color, heals) => {
  gemObjs.push({
    stone,
    id,
    color,
    heals
  });
  placeGems(stone, id);
};

createGemObject(
  "roseQuartz",
  "rose-quartz",
  "pink",
  "love, heart, feminine energy, peace, and compassion"
);

createGemObject(
  "danburite",
  "danburite",
  "pink",
  "easing worries and peace of mind"
);

createGemObject(
  "pinkTopaz",
  "pink-topaz",
  "pink",
  "vitalizing personal energies and creativities"
);

createGemObject(
  "kunzite",
  "kunzite",
  "pink",
  "filling voids with feelings of love and protection"
);

createGemObject(
  "pinkAgate",
  "pink-agate",
  "pink",
  "balance in emotional love swings and supports parental love"
);

createGemObject(
  "carnelian",
  "carnelian",
  "red",
  "motivation, endurance, leadership, boldness"
);

createGemObject(
  "redJasper",
  "red-Jasper",
  "red",
  "empowerment, bringing strength to resist emotional domination by others, and the courage to overcome domestic violence"
);

createGemObject(
  "garnet",
  "garnet",
  "red",
  "protection of self, hurting others, removing inhibition, atrracting love, and dreaming"
);

createGemObject("ruby", "ruby", "red", "abundance, wealth, passion, anger");

createGemObject(
  "sunstone",
  "sunstone",
  "orange",
  "nuturing, self-worth, vitality, regeneration"
);

createGemObject(
  "redAventurine",
  "red-aventurine",
  "red",
  "reproductive organs, balancing male-female energies, metabolism"
);

createGemObject(
  "orangeCalcite",
  "orange-calcite",
  "orange",
  "energizes and cleanses"
);

createGemObject(
  "citrine",
  "citrine",
  "orange",
  "protecting environment, cleansing energies, holding and sharing joys"
);

createGemObject(
  "mookaite",
  "mookaite",
  "yellow",
  "versatility, peace, wholeness"
);

createGemObject("amber", "amber", "orange", "trust, wisdom, memory, cleaning");

createGemObject(
  "septarian",
  "septarian",
  "orange",
  "public speaking, caring for self, others, and the earth"
);

createGemObject(
  "yellowTopaz",
  "yellow-Topaz",
  "yellow",
  "correction of vision, astuteness, problem-solving"
);
createGemObject(
  "yellowAventurine",
  "yellow-aventurine",
  "yellow",
  "compassion, understanding, alleviating grief and centering emotions"
);

createGemObject(
  "sulfur",
  "sulfur",
  "yellow",
  "eruptions (of feelings, fevers, violence, destructive energies)"
);

createGemObject(
  "ironPyrite",
  "iron-pyrite",
  "yellow",
  "positive outlook, seeing beyond the physical"
);

createGemObject(
  "malachite",
  "malachite",
  "green",
  "protection against witchcraft and evil spirits"
);

createGemObject(
  "greenAventurine",
  "green-aventurine",
  "green",
  "a gambler's talisman, fortune, wealth"
);

createGemObject(
  "rainbowObsidian",
  "rainbow-obsidian",
  "green",
  "evolution of spirit and nature, cutting cords of old love"
);

createGemObject(
  "mossAgate",
  "moss-agate",
  "green",
  "a gardener's talisman, seeing beauty in all things, birth"
);

createGemObject(
  "greenFluorite",
  "green-fluorite",
  "green",
  "dissipating trauma, grounding excess energy"
);

createGemObject(
  "bloodstone",
  "bloodstone",
  "green",
  "repels unwanted energies, signals weather and recognition of chaos"
);

createGemObject(
  "gaiaStone",
  "gaia-stone",
  "green",
  "the soul of the earth, environmental harmony"
);

createGemObject(
  "chrysophase",
  "chrysophase",
  "green",
  "personal insight and truth"
);

createGemObject(
  "emerald",
  "iron-pyrite",
  "green",
  "positive outlook, seeing beyond the physical"
);

createGemObject(
  "ironPyrite",
  "iron-pyrite",
  "yellow",
  "positive outlook, seeing beyond the physical"
);

createGemObject(
  "ironPyrite",
  "iron-pyrite",
  "yellow",
  "positive outlook, seeing beyond the physical"
);

createGemObject(
  "ironPyrite",
  "iron-pyrite",
  "yellow",
  "positive outlook, seeing beyond the physical"
);

createGemObject(
  "ironPyrite",
  "iron-pyrite",
  "yellow",
  "positive outlook, seeing beyond the physical"
);

createGemObject(
  "ironPyrite",
  "iron-pyrite",
  "yellow",
  "positive outlook, seeing beyond the physical"
);

createGemObject(
  "ironPyrite",
  "iron-pyrite",
  "yellow",
  "positive outlook, seeing beyond the physical"
);

createGemObject(
  "ironPyrite",
  "iron-pyrite",
  "yellow",
  "positive outlook, seeing beyond the physical"
);

createGemObject(
  "ironPyrite",
  "iron-pyrite",
  "yellow",
  "positive outlook, seeing beyond the physical"
);

createGemObject(
  "ironPyrite",
  "iron-pyrite",
  "yellow",
  "positive outlook, seeing beyond the physical"
);

console.log(gemObjs[2].stone);
gemObjs.forEach(el => placeGems(el));
