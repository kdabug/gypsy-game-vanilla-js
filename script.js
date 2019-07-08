const body = document.querySelector("body");
const floor = document.querySelector(".floor-scene");
const ground = document.querySelector(".ground");
const gems = document.querySelector(".gem");
const instructions = document.querySelector(".instructions");
const startButton = document.querySelector("#start-button");
const numberSubmitButton = document.querySelector("#submit-button");
const openingPage = document.querySelector(".opening-page");
const foliage = document.querySelector(".foliage");
const formDiv = document.querySelector(".show-input");
const form = document.querySelector("input");
const gypsy = document.querySelector(".opening-gypsy");
const gameText = document.querySelector(".hello");

//Starting Conditions
let returnedGemObjs = [];
let gemCount = 0;
let countDown = 20;
let lowestScore = 15;
let lastPickedNumber = -1;
let firstPickedNumber = -1;
let secondPickedNumber = -1;
let pickedNumber = 0;
let level = "";

//create gem counter
const gemNameText = document.createElement("h2");
gemNameText.innerText = ``;
instructions.appendChild(gemNameText);
const addGemCounter = document.createElement("h2");
addGemCounter.innerHTML = "<h2>Gems: 0</h2>";

//create timer
const timer = document.querySelector(".timer");
const createTimer = document.createElement("div");
createTimer.innerHTML = `<h2>Timer: ${countDown}</h2>`;
timer.appendChild(createTimer);
timer.appendChild(addGemCounter);

//create restart button
const restartButton = element => {
  const createRestart = document.createElement("button");
  createRestart.innerText = "";
  createRestart.id = "restart-button";
  createRestart.innerHTML = "RESTART";
  element.appendChild(createRestart);
  createRestart.addEventListener("click", function() {
    document.location.reload();
  });
};

//////FUNCTIONS

//turns Gypsy Red - LOSING sequence
const gypsyTurnsRed = () => {
  floor.style.display = "none";
  openingPage.style.display = "";
  gypsy.style.display = "none";
  const angryGypsy = document.createElement("div");
  angryGypsy.classList.add("angry-gypsy-red");
  openingPage.appendChild(angryGypsy);
  document.querySelector(".hello").innerHTML =
    "<h2>STOP THIEF!!!<br> CURSES ON YOU FOR ALL ETERNITY! </h2><br><h3>umm...RUN</h3>";
  restartButton(openingPage);
  setTimeout(function() {
    document.querySelector(".angry-gypsy-red").remove();
    gameText.remove();
  }, 14000);
};

//helper function for winningPicks
//to ask the player to choose again
const chooseAgain = () => {
  gameText.innerHTML = `<p>Please pick a number between 1 and ${
    returnedGemObjs.length
  }</p>`;
};

//helper function for winningPicks
//to compare numbers chosen
const checkDifferentNumbers = (picked, diff1, diff2) => {
  if (
    picked !== diff1 &&
    picked !== diff2 &&
    picked > 0 &&
    picked <= returnedGemObjs.length
  ) {
    return true;
  }
};

//event listeners for submitted numbers
const getPickedNumber = () => {
  const number = form.value;
  return number;
};

const firstSubmitEvent = ev => {
  ev.preventDefault();
  pickedNumber = getPickedNumber();
  firstNumberInput();
};

const secondSubmitEvent = ev => {
  ev.preventDefault();
  pickedNumber = getPickedNumber();
  secondNumberInput();
};

const finalSubmitEvent = ev => {
  ev.preventDefault();
  pickedNumber = getPickedNumber();
  finalNumberInput();
};

//helper function for winningPicks
//final input sequence
const finalNumberInput = () => {
  if (
    checkDifferentNumbers(pickedNumber, firstPickedNumber, secondPickedNumber)
  ) {
    gameText.innerHTML = `<h2>Your future ...bodes of... ${
      returnedGemObjs[pickedNumber - 1].heals
    }. This requires further study of the ${
      returnedGemObjs[pickedNumber - 1].color
    } ${
      returnedGemObjs[pickedNumber - 1].stone
    }....hmmm</h2><h3>The woman mumbles.</h3>`;
    lastPickedNumber = pickedNumber;
    formDiv.style.display = "none";
    setTimeout(function() {
      const cardPicture = document.createElement("img");
      cardPicture.classList.add("tarot");
      cardPicture.setAttribute("src", shuffledDeck[pickedNumber - 1].image);
      openingPage.appendChild(cardPicture);
      gameText.innerHTML = `<h2> Yes you picked ${pickedNumber}....I pulled out that card in my tarot. The ${
        shuffledDeck[pickedNumber - 1].name
      } of ${shuffledDeck[pickedNumber - 1].suit}. <br>
      Be Aware. ${shuffledDeck[pickedNumber - 1].meaning}.<h3>`;
      setTimeout(function() {
        gypsy.style.display = "none";
        document.querySelector(".tarot").style.display = "none";
        gameText.innerHTML = `<h3>......she's.......gone?.......</h3>`;
        restartButton(openingPage);
      }, 9000);
    }, 9000);
  } else {
    chooseAgain();
  }
};

//helper function for winningPicks
//second input sequence
const secondNumberInput = () => {
  if (
    checkDifferentNumbers(pickedNumber, firstPickedNumber, lastPickedNumber)
  ) {
    gameText.innerHTML = `<h2>Your present speaks to the ${
      returnedGemObjs[pickedNumber - 1].color
    } ${
      returnedGemObjs[pickedNumber - 1].stone
    } <br>signifying that you are currently working with<br> ${
      returnedGemObjs[pickedNumber - 1].heals
    }.</h2>`;
    secondPickedNumber = pickedNumber;
    numberSubmitButton.removeEventListener("click", secondSubmitEvent);
    setTimeout(function() {
      gameText.innerHTML = `<h2>Now for your future...</h2><br> <h3>Give her a different number between 1 and ${
        returnedGemObjs.length
      }.</h3>`;
      numberSubmitButton.addEventListener("click", finalSubmitEvent);
    }, 8000);
  } else {
    chooseAgain();
  }
};

//helper function for winningPicks
//first input sequence
const firstNumberInput = () => {
  if (
    checkDifferentNumbers(pickedNumber, secondPickedNumber, lastPickedNumber) !=
    1
  ) {
    chooseAgain();
  } else {
    gameText.innerHTML = `<h2>Ahh yes. <br>The ${
      returnedGemObjs[pickedNumber - 1].stone
    } is such a beautiful ${
      returnedGemObjs[pickedNumber - 1].color
    } stone. <br>It's telling me your recent past has reflected itself with  <br>${
      returnedGemObjs[pickedNumber - 1].heals
    }.</h2>`;
    firstPickedNumber = pickedNumber;
    numberSubmitButton.removeEventListener("click", firstSubmitEvent);
    setTimeout(function() {
      gameText.innerHTML = `<h2>I'm sensing your present state ...</h2><br><h3>Give her a different number between 1 and ${
        returnedGemObjs.length
      }.</h3>`;
      numberSubmitButton.addEventListener("click", secondSubmitEvent);
    }, 8000);
  }
};

//WINNING SEQUENCE
//winning picks asks for three numbers if player picks > lowestCount
const winningPicks = () => {
  floor.style.display = "none";
  openingPage.style.display = "";
  gameText.innerHTML = `<h2>Thank you, kind traveler, for helping me collect ${gemCount} of my gems. <br> I'm feeling impressed to tell you of coming things. </h2> <br> <h3>Give her a number between 1 and ${
    returnedGemObjs.length
  }.</h3>`;
  formDiv.style.display = "flex";
  numberSubmitButton.addEventListener("click", firstSubmitEvent);
};

// countDownTimer takes countDown and starts a countdown timer
//asynchronous event that triggers
//either a winning scenario or a losing scenario
const countDownTimer = () => {
  if (countDown === 0) {
    createTimer.innerText = `Timer: 0`;
    clearInterval(countDownTimer);
    //alert(`You collected ${gemCount} gems.`);
    ground.style.display = "none";
    if (gemCount >= lowestScore) {
      winningPicks();
    } else {
      gypsyTurnsRed();
    }
  }
  if (countDown > 0) {
    createTimer.innerHTML = `<h2>Timer: ${countDown}</h2>`;
  }
  countDown--;
};

//randomPosition takes and item and gives it a random position
const randomPosition = item => {
  item.style.left = Math.random() * window.innerWidth + "px";
  item.style.top = Math.random() * window.innerHeight - 200 + "px";
};

//pickUpItem takes an id and add an event listener to picked up items
const pickUpItemEvent = item => {
  item.addEventListener("click", function() {
    this.classList.add("picked");
    gemNameText.innerHTML = `<h2>Oh no! You've picked up a ${
      item.id
    } and lost a gem.</h2>`;
    returnedGemObjs.pop();
    gemCount--;
    addGemCounter.innerText = `Gems: ${gemCount}`;
    document.querySelector(".picked").remove();
  });
};
//placeItems takes an array of objects and randomly places the number of items specified in each object
//and adds an event listener
const placeItems = identify => {
  for (let i = 0; i < identify.number; i++) {
    const item = document.createElement("img");
    item.setAttribute("src", identify.url);
    item.classList.add(identify.className);
    foliage.appendChild(item);
    randomPosition(item);
    pickUpItemEvent(item);
  }
};

//placeGems makes a new element and appends it to the gems div
const placeGems = identify => {
  const newEl = document.createElement("div");
  newEl.id = identify;
  newEl.classList.add("gem");
  gems.appendChild(newEl);
  randomPosition(newEl);
};

//pickUpGemEvent takes an element and attaches an event listener
//that adds to counter and removes the item when it is clicked
const pickUpGemEvent = id => {
  document.querySelector(`#${id}`).addEventListener("click", function() {
    const gemName = this.getAttribute("id");
    this.classList.add("picked");
    for (let i = 0; i < gemObjs.length; i++) {
      if (gemName === gemObjs[i].id) {
        returnedGemObjs.push(gemObjs[i]);
        gemNameText.innerHTML = `<h2>You've picked up the ${gemName}.<h2>`;
        gemCount++;
        addGemCounter.innerHTML = `<h2>Gems: ${gemCount}</h2>`;
      }
    }
    document.querySelector(".picked").remove();
  });
};

//RUN GAME //#endregionconst width = window.innerWidth;
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

const runGame = () => {
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
};

//helper functions for play game sequence
const setUpGround = () => {
  for (let i = 0; i < gemObjs.length; i++) {
    placeGems(gemObjs[i].id);
    pickUpGemEvent(gemObjs[i].id);
  }
  for (let i = 0; i < foliageItems.length; i++) {
    placeItems(foliageItems[i]);
  }
};

const sequenceTimer = () => {
  setInterval(countDownTimer, 1000);
};

const goToPickUp = ev => {
  ev.preventDefault();
  setUpGround();
  openingPage.style.display = "none";
  floor.style.display = "initial";
  document.querySelector(".ground").style.display = "initial";
  runGame();
  //sequenceTimer();
};

const batsFlyThrough = () => {
  document.querySelector(".bats").style.display = "block";
  gameText.innerHTML = "<h2>What was THAT!</h2>";
  setTimeout(function() {
    document.querySelector(".bats").remove();
    gameText.innerHTML = "<h2>Oh no! <br> Help me please!<br></h2>";
    const helpButton = document.createElement("button");
    helpButton.innerText = "Click Here to Help!";
    gameText.appendChild(helpButton);
    helpButton.addEventListener("click", goToPickUp);
  }, 1800);
};

const levelArr = [
  { level: "easy", lowestScore: 15, text: "Never" },
  { level: "normal", lowestScore: 20, text: "Once or twice" },
  { level: "hard", lowestScore: 25, text: "Many times" }
];

const getTravelerLevel = () => {
  gameText.innerHTML =
    "<h2>Tell me, have you traveled these woods before?</h2>";
  levelArr.forEach(obj => {
    createButton = document.createElement("button");
    createButton.id = "level-button";
    createButton.innerHTML = `${obj.text}`;
    createButton.lowestScore = `${obj.lowestScore}`;
    createButton.level = `${obj.level}`;
    createButton.addEventListener("click", function(ev) {
      ev.preventDefault;
      level = ev.target.level;
      lowestScore = ev.target.lowestScore;
      batsFlyThrough();
    });
    gameText.appendChild(createButton);
  });
};

const startGameSequence = () => {
  gypsy.style.display = "block";
  setTimeout(function() {
    gameText.style.display = "block";
    gameText.innerHTML = "<h2>Hello traveler. <br> We seem to be lost.</h2>";
    setTimeout(getTravelerLevel, 3000);
  }, 3000);
};

//start button event listener
startButton.addEventListener("click", ev => {
  ev.preventDefault();
  document.querySelector(".title").remove();
  setTimeout(startGameSequence(), 2000);
});
