const body = document.querySelector("body");
const floor = document.querySelector(".floor");
const ground = document.querySelector(".ground");
const rocks = document.querySelector(".rock");
const leaves = document.querySelector(".leaf");
const gems = document.querySelector(".gem");
const gypsy = document.querySelector("#gypsy-picture");
const text = document.querySelector(".text");
const gemNameText = document.createElement("h2");
gemNameText.innerText = ``;
text.appendChild(gemNameText);
const gemObjs = [];
const resetGems = () => {
  gemObjs = [];
};
const returnedGemObjs = [];

//TIMER AND COUNTDOWN
const timer = document.querySelector(".timer");
const createTimer = document.createElement("h2");
createTimer.innerText = "";
timer.appendChild(createTimer);
let countDown = 20;
const countDownTimer = setInterval(function() {
  if (countDown <= 0) {
    clearInterval(countDownTimer);
  }
  if (countDown > 0) {
    createTimer.innertext = `Timer: ${countDown}`;
  }
  countDown--;
}, 1000);

// GEM COUNTER
let count = 0;
const addGemCounter = document.createElement("h2");
addGemCounter.innerText = "Gems: 0";
timer.appendChild(addGemCounter);
console.log(count);

//
const randomPosition = item => {
  item.style.left = Math.random() * window.innerWidth + "px";
  item.style.top = Math.random() * window.innerHeight - 100 + "px";
};

//pickUpItem takes an id and add anevent listener to picked up items
const pickUpItem = item => {
  item.addEventListener("click", function() {
    console.log(this);
    this.classList.add("picked");
    gemNameText.innerText = `Oh no! You've picked up a ${
      item.id
    } and lost a gem.`;
    count--;
    addGemCounter.innerText = `Gems: ${count}`;
    document.querySelector(".picked").remove();
  });
};

//creates a random position for the rocks and leaves
const placeItems = (n, item, url, selector, id) => {
  for (let i = 0; i < n; i++) {
    const newDiv = document.createElement("div");
    item = document.createElement("img");
    item.setAttribute("src", url);
    item.setAttribute("id", id);
    randomPosition(item);
    newDiv.appendChild(item);
    pickUpItem(item);
    selector.appendChild(newDiv);
  }
};

//turns Gypsy Red
const gypsyTurnsRed = () => {
  setTimeout(function() {
    gypsy.id = "changed";
    console.log(gypsy.id);
  }, 500);
};

//turns Gypsy Normal
const gypsyTurnsNormal = () => {
  setTimeout(function() {
    gypsy.id = "gypsy-picture";
    console.log(gypsy.id);
  }, 500);
};

placeItems(
  3,
  "largeRock",
  "https://images.vexels.com/media/users/3/145827/isolated/preview/357f06ecbaaa77d750259c459c0ed55f-round-rock-illustration-by-vexels.png",
  rocks,
  "rock"
);

placeItems(
  3,
  "smallRock",
  "https://images.vexels.com/media/users/3/145827/isolated/preview/357f06ecbaaa77d750259c459c0ed55f-round-rock-illustration-by-vexels.png",
  rocks,
  "rock"
);

placeItems(
  4,
  "largeRedLeaf",
  "http://res.freestockphotos.biz/pictures/16/16812-illustration-of-an-orange-autumn-leaf-pv.png",
  leaves,
  "leaf"
);

placeItems(
  3,
  "smallRedLeaf",
  "http://res.freestockphotos.biz/pictures/16/16813-illustration-of-an-orange-autumn-leaf-pv.png",
  leaves,
  "leaf"
);

placeItems(
  2,
  "greenLeaf",
  "http://www.lindicepensable.ch/wordpress/wp-content/uploads/2018/07/Feuille-de-vigne-avec-insecte.png",
  leaves,
  "leaf"
);

// CREATING AND PLACING THE GEMS

const placeGems = identify => {
  const newEl = document.createElement("div");
  newEl.id = identify;
  gems.appendChild(newEl);
  randomPosition(newEl);
};

const pickUpGem = id => {
  document.querySelector(`#${id}`).addEventListener("click", function() {
    const gemName = this.getAttribute("id");
    this.classList.add("picked");
    console.log(gemName);
    for (let i = 0; i < gemObjs.length; i++) {
      if (gemName === gemObjs[i].id) {
        returnedGemObjs.push(gemObjs[i]);
        gemNameText.innerText = `You've picked up the ${gemName}.`;
        count++;
        addGemCounter.innerText = `Gems: ${count}`;
      }
    }
    document.querySelector(".picked").remove();
  });
};
//function creates and places gem objects

const createGemObject = (stone, id, color, heals) => {
  gemObjs.push({
    stone,
    id,
    color,
    heals
  });
  placeGems(id);
  pickUpGem(id);
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
  "emerald",
  "green",
  "the talisman of magicians, enchantments"
);

createGemObject(
  "howlite",
  "howlite",
  "white",
  "receiving wisdom, dreams, attunement"
);

createGemObject(
  "greenCalcite",
  "green-calcite",
  "green",
  "fertility and abundance"
);

createGemObject("jade", "jade", "green", "purity, serenity, nurturing");

createGemObject(
  "peridot",
  "peridot",
  "green",
  "detaching from negative influences to acheive fullness of destiny"
);

createGemObject(
  "moldavite",
  "moldavite",
  "green",
  "cosmic energies, releasing fixed ideas"
);

createGemObject("fuschite", "fuschite", "green", "speeding healing process");

createGemObject(
  "amazonite",
  "amazonite",
  "blue",
  "balancing two sides of an argument"
);

createGemObject(
  "apatite",
  "apatite",
  "blue",
  "manifestation attuned to the future, connection to past lives"
);

createGemObject(
  "aquamarine",
  "aquamarine",
  "blue",
  "dynamic change, guarding against figurative and literal drowning"
);

createGemObject(
  "turquoise",
  "turquoise",
  "blue",
  "bridging earth and heaven, communicaiton between worlds"
);

createGemObject(
  "chrysocolla",
  "chrysocolla",
  "blue",
  "speaking truth and balancing the home"
);

createGemObject(
  "smithsonite",
  "smithsonite",
  "blue",
  "healing the inner child"
);

createGemObject(
  "azurite",
  "azurite",
  "blue",
  "psychic developement, metaphysical energies"
);

createGemObject(
  "auraQuartz",
  "aura-quartz",
  "blue",
  "working towards powerful goals"
);

createGemObject(
  "blueCalcite",
  "blue-calcite",
  "blue",
  "heals and restores personal energies, soothes anxieties"
);

createGemObject(
  "angelite",
  "angelite",
  "blue",
  "peace, brotherhood, and angelic presences"
);

createGemObject(
  "celestite",
  "celestite",
  "blue",
  "spiritual developement, metaphysical powers and energies"
);

createGemObject(
  "blueChalcedony",
  "blue-chalcedony",
  "blue",
  "weather and pressure changes"
);

createGemObject(
  "blueAventurine",
  "blue-aventurine",
  "blue",
  "masculine energy"
);

createGemObject(
  "blueLaceAgate",
  "blue-lace-agate",
  "blue",
  "counteracting fears of rejection"
);

createGemObject(
  "sapphire",
  "sapphire",
  "blue",
  "resists imprisonment, helpful in legal matters"
);

createGemObject(
  "larimar",
  "larimar",
  "blue",
  "soothing and calm, like dolphins in the sea"
);

createGemObject(
  "lapisLazuli",
  "lapis-lazuli",
  "blue",
  "transportation, travel, public speaking, and thought amplification. The royal stone."
);

createGemObject(
  "sodalite",
  "sodalite",
  "blue",
  "higher mind, integrity, urge toward idealism"
);
createGemObject(
  "lithiumQuartz",
  "lithium-quartz",
  "purple",
  "natural antidepressant, combats roots of mental and emotional disease"
);
createGemObject(
  "amethyst",
  "amethyst",
  "purple",
  "the sobriety stone, a natural tranquilizer and cleanser"
);
createGemObject(
  "smokyAmethyst",
  "smoky-amethyst",
  "purple",
  "grounds spiritual energy, reaching highest potentials"
);
createGemObject(
  "smokyHerkimer",
  "smoky-herkimer",
  "brown",
  "soul-shielding, emphasizing meditation"
);
createGemObject(
  "argonite",
  "argonite",
  "brown",
  "overcoming stress and anxiety"
);
createGemObject(
  "fluorite",
  "fluorite",
  "purple",
  "strength, overcoming disorganization"
);
createGemObject(
  "lepidolite",
  "lepidolite",
  "purple",
  "the stone of transition, brings about reconciliation and forward progress"
);
createGemObject(
  "smokyQuartz",
  "smoky-quartz",
  "brown",
  "efficiency, concentration, acceptance of the uncontrolables"
);
createGemObject(
  "agate",
  "agate",
  "brown",
  "bringing information to light, balancing yin and yang"
);
createGemObject(
  "desertRose",
  "desert-rose",
  "brown",
  "sacred moments, helping with secrets or hiding"
);
createGemObject(
  "lodestone",
  "lodestone",
  "brown",
  "earth healing and flow of energy, magnetic forces"
);
createGemObject(
  "serpentine",
  "serpentine",
  "brown",
  "aiding meditation and understanding the spiritual basis of life"
);

createGemObject(
  "tigersEye",
  "tigers-eye",
  "brown",
  "heals self-worth, self-criticism, and blocked creativity"
);
createGemObject(
  "shungite",
  "shungite",
  "black",
  "restores your connection to the ancient earth"
);
createGemObject(
  "tourmaline",
  "tourmaline",
  "black",
  "dense energy protection against negative forces and self-doubts, promoting laid-back attitudes"
);
createGemObject(
  "blackSpinnel",
  "black-spinnel",
  "black",
  "offering insight to material problems"
);
createGemObject(
  "obsidian",
  "obsidian",
  "black",
  "divination, exposing flaws, protecting against untruths"
);
createGemObject(
  "snowflakeObsidian",
  "snowflake-obsidian",
  "black",
  "the stone of purity, empowerment from isolation"
);

createGemObject(
  "dalmationJasper",
  "dalmation-jasper",
  "black",
  "promting relationship ties, family and loyalty, calming for children and animals"
);
createGemObject(
  "tektite",
  "tektite",
  "black",
  "a fertility talisman, seeing into other planes"
);
createGemObject(
  "hawksEye",
  "hawks-eye",
  "black",
  "clairvoyance, surfacing blocked emotions"
);
createGemObject(
  "onyx",
  "onyx",
  "black",
  "protection in dark nights and lonely places"
);
createGemObject("black-opal", "black-opal", "black", "ritual magic");
createGemObject(
  "galena",
  "galena",
  "black",
  "holistic healing and harmonizing"
);
createGemObject(
  "labradorite",
  "labradorite",
  "black",
  "seeing into other worlds, preventing energy leakage"
);
createGemObject("pumice", "pumice", "black", "");
createGemObject("quartz", "quartz", "white", "a");
createGemObject("spiritAuartz", "spirit-quartz", "white", "");
createGemObject("phantomQuartz", "phantom-quartz", "white", "");
createGemObject("chalcedony", "chalcedony", "white", "");
createGemObject("selenite", "selenite", "white", "");
createGemObject("abaloneShell", "abalone-shell", "white", "");
createGemObject("moonstone", "moonstone", "white", "");
createGemObject("opal", "opal", "white", "");
createGemObject("diamond", "diamond", "white", "");
createGemObject("clearTopaz", "clearTopaz", "white", "");

console.log(gemObjs.length);
gemObjs.forEach(el => placeGems(el));

//Play Game

const groundPlayPickUp = () => {
  ground.style.display = "show";
  countDownTimer();
};

const playGame = () => {
  //starting scene

  //groundscene
  groundPlayPickUp();
  //outcomes scene

  //final scene - cut to beginning
};

playGame();

gypsy.addEventListener("click", gypsyTurnsRed);

//ADDING LOGIC FOR THE TAROT CARD GAME

const tarotDeck = [];

const addToDeck = (name, number, suit, meaning, image) => {
  tarotDeck.push({
    name,
    number,
    suit,
    meaning,
    image
  });
};

addToDeck(
  "the fool",
  0,
  "major arcana",
  "new beginnings, optimism, trust in life"
);
addToDeck("the magician", 1, "major arcana", "");
addToDeck("the high priestess", 2, "major arcana", "");
addToDeck("the empress", 3, "major arcana", "");
addToDeck("the emperor", 4, "major arcana", "");
addToDeck("the heirophant", 5, "major arcana", "");
addToDeck("the lovers", 6, "major arcana", "");
addToDeck("the chariot", 7, "major arcana", "");
addToDeck("strength", 8, "major arcana", "");
addToDeck("the hermit", 9, "major arcana", "");
addToDeck("wheel of fortune", 10, "major arcana", "");
addToDeck("justice", 11, "major arcana", "");
addToDeck("the hanged man", 12, "major arcana", "");
addToDeck("death", 13, "major arcana", "");
addToDeck("temperance", 14, "major arcana", "");
addToDeck("the devil", 15, "major arcana", "");
addToDeck("the tower", 16, "major arcana", "");
addToDeck("the star", 17, "major arcana", "");
addToDeck("the moon", 18, "major arcana", "");
addToDeck("the sun", 19, "major arcana", "");
addToDeck("judgement", 20, "major arcana", "");
addToDeck("the world", 21, "major arcana", "");
addToDeck("ace", 1, "wands", "");
addToDeck("two", 2, "wands", "");
addToDeck("three", 3, "wands ", "");
addToDeck("four", 4, "wands", "");
addToDeck("five", 5, "wands", "");
addToDeck("six", 6, "wands", "");
addToDeck("seven", 7, "wands", "");
addToDeck("eight", 8, "wands", "");
addToDeck("nine", 9, "wands", "");
addToDeck("ten", 10, "wands", "");
addToDeck("page", 11, "wands", "");
addToDeck("prince", 12, "wands", "");
addToDeck("queen", 13, "wands", "");
addToDeck("king", 14, "wands", "");
addToDeck("fool", 0, "swords", "");
addToDeck("fool", 0, "swords", "");
addToDeck("fool", 0, "swords", "");
addToDeck("fool", 0, "swords", "");
addToDeck("fool", 0, "swords", "");
addToDeck("fool", 0, "swords", "");
addToDeck("fool", 0, "swords", "");
addToDeck("fool", 0, "swords", "");
addToDeck("fool", 0, "swords", "");
addToDeck("fool", 0, "swords", "");
