const body = document.querySelector("body");
const floor = document.querySelector(".floor");
const rocks = document.querySelectorAll(".rock");
const leaves = document.querySelectorAll(".leaf");
const gems = document.querySelectorAll(".gem");
const gemObjs = [];

//creates a random position for the rocks and leaves
const randomPosition = item => {
  item.style.left = Math.random() * window.innerWidth + "px";
  item.style.top = Math.random() * window.innerHeight + "px";
};

rocks.forEach(el => randomPosition(el));
leaves.forEach(el => randomPosition(el));

// CREATING AND PLACING THE GEMS

const placeGems = stone => {
  const gem = document.createElement("div");
  gem.classList.add("gem");
  gem.style.position = absolute;
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
  //     stone.id = `${id}`;
  //   stone.color = string;
  //   stone.heal = heals;
  //   //placeGems(stone);
  //   //gemObjs.push(stone);
  //   return stone;
};

let roseQuartzPrac = createGemObject(
  "roseQuartz",
  "rose-quartz",
  "pink",
  "love, heart, feminine energy, peace, and compassion"
);

console.log(roseQuartzPrac);
