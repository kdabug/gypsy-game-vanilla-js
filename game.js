const width = window.innerWidth;
const height = window.innerHeight;
const bitGypsy = { x: width / 2, y: height / 2 };

const isCoordinateInGrid = function(x, y) {
  if (x < 0 || y < 0 || x > width || y > height) {
    return false;
  }
  return true;
};

const isThereAnItemAt = function(x, y) {
  // Loop through rocks, and check if any rock is at the given point.
  for (let i = 0; i < foliageItems.length; i++) {
    if (foliageItems[i].offsetLeft === x && foliageItems[i].offsetTop === y) {
      return true;
    }
  }
  return false;
};

// Check if a player can move to the provided coordinates.
// Returns a Boolean
const canMoveTo = function(x, y) {
  // If the coordinate to move is outside of the grid,
  // the player can't move to it.
  if (!isCoordinateInGrid(x, y)) {
    return false;
  }
  // If there is a rock at the coordinate,
  // the player can't move to it.
  if (isThereAnItemAt(x, y)) {
    return false;
  }
  return true;
};

// Check if there is a gem at the provided coordinates.
// Returns a Boolean
const isThereAGemAt = (x, y) => {
  // Loop through gems, and check if any gem is at the given point.
  for (let i = 0; i < gems.length; i++) {
    if (gems[i].offsetLeft === x && gems[i].offsetTop === y) {
      return true;
    }
  }
  return false;
};

const removeGemAt = function(x, y) {
  for (let i = 0; i < gems.length; i++) {
    const gem = gems[i];
    if (gem.offsetLeft === x && gem.offsetTop === y) {
      gems.splice(i, 1);
    }
  }
};

function moveCharacterTo(x, y) {
  const gypsyEl = document.querySelector(".runner");
  gyspyEl.style.left = gypsy.x.toString() + "px";
  gypsyEl.style.top = gypsy.y.toString() + "px";
  if (isThereAnItemAt(x, y)) {
    console.log(`gypsy hit an item.`);
  }
}

function moveUp() {
  console.log("move up");
  if (canMoveTo(gypsy.x, gypsy.y - 1)) {
    gypsy.y -= 1;
    moveCharacterTo(gypsy.x, gypsy.y);
  }
}
function moveDown() {
  console.log("move down");
  if (canMoveTo(gypsy.x, gypsy.y + 1)) {
    gypsy.y += 1;
    moveCharacterTo(gypsy.x, gypsy.y);
  }
}
function moveLeft() {
  console.log("move left");
  if (canMoveTo(gypsy.x - 1, gypsy.y)) {
    gypsy.x -= 1;
    moveCharacterTo(gypsy.x, gypsy.y);
  }
}

const moveRight = function() {
  if (canMoveTo(gypsy.x + 1, gypsy.y)) {
    gypsy.x += 1;
    moveCharacterTo(gypsy.x, gypsy.y);
  }
};

document.body.addEventListener("keydown", function(evt) {
  const keyCode = evt.keyCode;
  // If the user pressed any directional keys,
  // prevent the browser default of scrolling the page.
  if ([37, 38, 39, 40].includes(keyCode)) {
    evt.preventDefault();
  }
  // Attempt to move the character in the direction
  switch (keyCode) {
    case 37:
      moveLeft();
      break;
    case 38:
      moveUp();
      break;
    case 39:
      moveRight();
      break;
    case 40:
      moveDown();
      break;
  }
});

function run() {
  createRunner();
}

run();
