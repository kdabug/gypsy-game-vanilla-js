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

//randomPosition takes and item and gives it a random position
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

const placeItems = (n, url, selector, id) => {
  for (let i = 0; i < n; i++) {
    const newDiv = document.createElement("div");
    item = document.createElement("img");
    item.setAttribute("src", url);
    item.classList.add(id);
    newDiv.appendChild(item);
    selector.appendChild(newDiv);
    randomPosition(item);
    pickUpItem(item);
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

//creates a random position for the rocks and leaves

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
