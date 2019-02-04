const body = document.querySelector("body");
const floor = document.querySelector(".floor");
const rocks = document.querySelector(".rock");
const leaves = document.querySelector(".leaf");
const gems = document.querySelectorAll(".gem");
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

const placeGems = stone => {
  const gem = document.createElement("div");
  gem.classList.add("gem");
  gem.id = `${stone}`.id;
  gem.style.position = "absolute";
  ground.appendChild(gem);
  randomPosition(gem);
};

//function creates and places gem objects
const createGemObject = (stone, id, color, heals) => {
  gemObjs.push({
    stone,
    id,
    color,
    heals
  });
};

createGemObject(
  "roseQuartz",
  "rose-quartz",
  "pink",
  "love, heart, feminine energy, peace, and compassion"
);

createGemObject(
  "roseQuartz",
  "rose-quartz",
  "pink",
  "love, heart, feminine energy, peace, and compassion"
);
