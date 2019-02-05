const body = document.querySelector("body");
const floor = document.querySelector(".floor");
const ground = document.querySelector(".ground");
const rocks = document.querySelector(".rock");
const leaves = document.querySelector(".leaf");
const gems = document.querySelector(".gem");
const gypsy = document.querySelector(".wait-gypsy");
const instructions = document.querySelector(".instructions");

//logic for gems and gem counter
const gemNameText = document.createElement("h2");
gemNameText.innerText = ``;
instructions.appendChild(gemNameText);
const addGemCounter = document.createElement("h2");
addGemCounter.innerText = "Gems: 0";

//Starting Conditions
let gemObjs = [];
let returnedGemObjs = [];
let gemCount = 0;
let countDown = 20;
let lowestScore = 15;
let lastPickedNumber = -1;
let firstPickedNumber = -1;
let secondPickedNumber = 0;

//TIMER AND COUNTDOWN
const timer = document.querySelector(".timer");
const createTimer = document.createElement("h2");
createTimer.innerText = `Timer: ${countDown}`;
timer.appendChild(createTimer);
timer.appendChild(addGemCounter);

//////FUNCTIONS

const restartButton = element => {
  const createRestart = document.createElement("button");
  createRestart.innerText = "";
  createRestart.id = "restart-button";
  createRestart.innerText = "Restart";
  element.appendChild(createRestart);
  createRestart.addEventListener("click", function() {
    document.location.reload();
  });
};

const createNumberForm = place => {
  askForANumber = document.createElement("INPUT");
  askForANumber.id = "form";
  askForANumber.setAttribute("type", "number");
  askForANumber.setAttribute("placeholder", place);
  gypsy.appendChild(askForANumber);
};

//turns Gypsy Red
const gypsyTurnsRed = () => {
  gypsy.id = "changed";
  const meanGypsyText = document.createElement("h2");
  meanGypsyText.innerText =
    "STOP THIEF! /n POLICE!! THIS TRAVELER IS STEALING MY PRECIOUS GEMS!";
  gypsy.appendChild(meanGypsyText);
  setTimeout(function() {
    meanGypsyText.innerText = "";
    restartButton(gypsy);
    setTimeout(function() {
      document.location.reload();
    }, 10000);
  }, 2000);
};

const winningPicks = () => {
  const winningText = document.createElement("h1");
  gypsy.appendChild(winningText);
  winningText.innerText = `Thank you, kind traveler, for helping me. ... ... ... I'm feeling impressed to tell you coming thing. Can you please give me a number between 1 and ${
    returnedGemObjs.length
  }.`;
  createNumberForm("first number");
  let pickedNumber = document.querySelector("#form").value;
  if (
    pickedNumber !== lastPickedNumber &&
    pickedNumber > 0 &&
    pickedNumber <= returnedGemObjs.length
  ) {
    winningText.innerText = `Ahh yes. The ${
      returnedGemObjs[pickedNumber - 1].stone
    } is such a beautiful ${
      returnedGemObjs[pickedNumber - 1].color
    }. It's telling me your past was filled with ${
      returnedGemObjs[pickedNumber - 1].heals
    }.`;
    firstPickedNumber = pickedNumber;
    gypsy.removeChild("#form");
  } else {
    winningText.innerText = `Please pick a number between 1 and ${
      returnedGemObjs.length
    }`;
  }
  winningText.innerText = `Now for your present. Give me a different number between 1 and ${
    returnedGemObjs.length
  }.`;
  createNumberForm("second number");
  if (
    pickedNumber !== firstPickedNumber &&
    pickedNumber > 0 &&
    pickedNumber <= returnedGemObjs.length
  ) {
    winningText.innerText = `Your present speaks to the ${
      returnedGemObjs[pickedNumber - 1].color
    } ${returnedGemObjs[pickedNumber - 1].stone} signifying ${
      returnedGemObjs[pickedNumber].heals
    }.`;
    secondPickedNumber = pickedNumber;
    gypsy.removeChild("#form");
  } else {
    winningText.innerText = `Please pick a number between 1 and ${
      returnedGemObjs.length
    }`;
  }
  winningText.innerText = `Now, give me a different number between 1 and ${
    returnedGemObjs.length
  }.`;
  createNumberForm("final number");
  if (
    pickedNumber !== firstPickedNumber &&
    pickedNumber !== secondPickedNumber &&
    pickedNumber > 0 &&
    pickedNumber <= returnedGemObjs.length
  ) {
    winningText.innerText = `Your futures bodes of ${
      returnedGemObjs[pickedNumber - 1].heals
    }. This requires further study of the ${
      returnedGemObjs[pickedNumber - 1].color
    } ${returnedGemObjs[pickedNumber - 1].stone}.`;
    lastPickedNumber = pickedNumber;
    gypsy.removeChild("#form");
  } else {
    winningText.innerText = `Please pick a number between 1 and ${
      returnedGemObjs.length
    }`;
  }
};

// countDownTimer takes countDown and starts a countdown timer
const countDownTimer = () => {
  if (countDown === 0) {
    createTimer.innerText = `Timer: 0`;
    clearInterval(countDownTimer);
    alert(`You collected ${gemCount} gems.`);
    ground.style.display = "none";
    if (gemCount >= lowestScore) {
      winningPicks();
    } else {
      gypsyTurnsRed();
    }
  }
  if (countDown > 0) {
    createTimer.innerText = `Timer: ${countDown}`;
  }
  countDown--;
};

const endScene = () => {
  gypsy.style.display = "none";
};

//
const randomPosition = item => {
  item.style.left = Math.random() * window.innerWidth + "px";
  item.style.top = Math.random() * window.innerHeight - 200 + "px";
};

//pickUpItem takes an id and add anevent listener to picked up items
const pickUpItem = item => {
  item.addEventListener("click", function() {
    console.log(this);
    this.classList.add("picked");
    gemNameText.innerText = `Oh no! You've picked up a ${
      item.id
    } and lost a gem.`;
    gemCount--;
    addGemCounter.innerText = `Gems: ${gemCount}`;
    document.querySelector(".picked").remove();
  });
};

//creates a random position for the rocks and leaves
const placeItems = (n, url, selector, id) => {
  for (let i = 0; i < n; i++) {
    const newDiv = document.createElement("div");
    item = document.createElement("img");
    item.setAttribute("src", url);
    item.classList.add(id);
    randomPosition(item);
    newDiv.appendChild(item);
    pickUpItem(item);
    selector.appendChild(newDiv);
  }
};

placeItems(
  3,
  "https://images.vexels.com/media/users/3/145827/isolated/preview/357f06ecbaaa77d750259c459c0ed55f-round-rock-illustration-by-vexels.png",
  rocks,
  "rock"
);

placeItems(
  3,
  "https://images.vexels.com/media/users/3/145827/isolated/preview/357f06ecbaaa77d750259c459c0ed55f-round-rock-illustration-by-vexels.png",
  rocks,
  "rock"
);

placeItems(
  4,
  "http://res.freestockphotos.biz/pictures/16/16812-illustration-of-an-orange-autumn-leaf-pv.png",
  leaves,
  "leaf"
);

placeItems(
  3,
  "http://res.freestockphotos.biz/pictures/16/16813-illustration-of-an-orange-autumn-leaf-pv.png",
  leaves,
  "leaf"
);

placeItems(
  2,
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
        gemCount++;
        addGemCounter.innerText = `Gems: ${gemCount}`;
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

//Play GAMW
const groundPlayPickUp = () => {
  ground.style.display = "show";
  gemObjs.forEach(el => placeGems(el));
  console.log("This is: ", gemObjs.length);
  setInterval(countDownTimer, 1000);
};

const playGame = () => {
  //starting scene
  console.log("I want to play the game.");
  //groundscene
  groundPlayPickUp();
  //outcomes scene

  //final scene - cut to beginning
};

playGame();
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
