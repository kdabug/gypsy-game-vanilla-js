const body = document.querySelector("body");
const floor = document.querySelector(".floor-scene");
const ground = document.querySelector(".ground");
const gems = document.querySelector(".gem");
const instructions = document.querySelector(".instructions");
const startButton = document.querySelector("#start-button");
const openingPage = document.querySelector(".opening-page");
const foliage = document.querySelector(".foliage");
const gypsyText = document.querySelector('.hello')

//Starting Conditions
let returnedGemObjs = [];
let gemCount = 0;
let countDown = 20;
let lowestScore = 15;
let lastPickedNumber = -1;
let firstPickedNumber = -1;
let secondPickedNumber = -1;

//create gem counter
const gemNameText = document.createElement("h2");
gemNameText.innerText = ``;
instructions.appendChild(gemNameText);
const addGemCounter = document.createElement("h2");
addGemCounter.innerText = "Gems: 0";

//create timer
const timer = document.querySelector(".timer");
const createTimer = document.createElement("h2");
createTimer.innerText = `Timer: ${countDown}`;
timer.appendChild(createTimer);
timer.appendChild(addGemCounter);

//create restart button
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

//create number form
const createNumberForm = place => {
  askForANumber = document.createElement("INPUT");
  askForANumber.id = "form";
  askForANumber.setAttribute("type", "number");
  askForANumber.setAttribute("placeholder", place);
  gypsy.appendChild(askForANumber);
};

//////FUNCTIONS

//turns Gypsy Red - LOSING sequence
const gypsyTurnsRed = () => {
  floor.style.display = "none";
  openingPage.style.display = "";
  document.querySelector(".openingGypsy").remove();
  const angryGypsy = document.createElement("div");
  angryGypsy.classList.add("angry-gypsy-red");
  openingPage.appendChild(angryGypsy);
  gypsyText.innerHTML =
    "<h2>STOP THIEF!!! <br> POLICE STOP THIS TRAVELER!! <br> CURSES ON YOU FOR ALL ETERNITY!</h2>";
  restartButton(openingPage);
};

//helper function for winningPicks
//to ask the player to choose again
const chooseAgain = () => {
  gypsyText.innerText = `Please pick a number between 1 and ${
    returnedGemObjs.length
  }`;
  openingPage.removeChild("#form");
  createNumberForm("new number");
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

//helper function for winningPicks
//first input sequence
const firstNumberInput = () => {
  createNumberForm("first number");
  let pickedNumber = document.querySelector("#form").value;
  if (
    checkDifferentNumbers(pickedNumber, secondPickedNumber, lastPickedNumber)
  ) {
    gypsyText.innerText = `Ahh yes. The ${
      returnedGemObjs[pickedNumber - 1].stone
    } is such a beautiful ${
      returnedGemObjs[pickedNumber - 1].color
    }. It's telling me your past was filled with ${
      returnedGemObjs[pickedNumber - 1].heals
    }.`;
    firstPickedNumber = pickedNumber;
    gypsy.removeChild("#form");
  } else {
    chooseAgain();
  }
};

//helper function for winningPicks
//second input sequence
const secondNumberInput = () => {
  createNumberForm("second number");
  if (
    checkDifferentNumbers(pickedNumber, firstPickedNumber, lastPickedNumber)
  ) {
    gypsyText.innerText = `Your present speaks to the ${
      returnedGemObjs[pickedNumber - 1].color
    } ${returnedGemObjs[pickedNumber - 1].stone} signifying ${
      returnedGemObjs[pickedNumber - 1].heals
    }.`;
    secondPickedNumber = pickedNumber;
    gypsy.removeChild("#form");
  } else {
    chooseAgain();
  }
};

//helper function for winningPicks
//final input sequence
const finalNumberInput = () => {
  createNumberForm("final number");
  if (
    checkDifferentNumbers(pickedNumber, firstPickedNumber, secondPickedNumber)
  ) {
    gypsyText.innerText = `Your futures bodes of ${
      returnedGemObjs[pickedNumber - 1].heals
    }. This requires further study of the ${
      returnedGemObjs[pickedNumber - 1].color
    } ${returnedGemObjs[pickedNumber - 1].stone}.`;
    lastPickedNumber = pickedNumber;
    gypsy.removeChild("#form");
  } else {
    chooseAgain();
  }
};
//WINNING SEQUENCE
//winning picks asks for three numbers if player picks > lowestCount
const winningPicks = () => {
  floor.style.display = "none";
  openingPage.style.display = "";
  const winningText = document.createElement("div");
  winningText.classList.add('hello')
  openingPage.appendChild(winningText);
  gypsyText.innerHTML = `<h2>Thank you, kind traveler, for helping me. <br>... ... ...<br> I'm feeling impressed to tell you coming thing. <br> Can you please give me a number between 1 and ${
    returnedGemObjs.length
  }.</h2>`;
  firstNumberInput();
  gyspyText.innerHTML = `<h2>Now for your present. Give me a different number between 1 and ${
    returnedGemObjs.length
  }.</h2>`;
  secondNumberInput();
  gyspyText.innerHTML = `<h2>Now, give me a different number between 1 and ${
    returnedGemObjs.length
  }.</h2>`;
  finalNumberInput();
};

// countDownTimer takes countDown and starts a countdown timer
//asynchronous event that triggers other events to occurs
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
    createTimer.innerText = `Timer: ${countDown}`;
  }
  countDown--;
};

// const endScene = () => {
//   gypsy.style.display = "none";
// };

//randomPosition takes and item and gives it a random position
const randomPosition = item => {
  item.style.left = Math.random() * window.innerWidth + "px";
  item.style.top = Math.random() * window.innerHeight - 200 + "px";
};

//pickUpItem takes an id and add an event listener to picked up items
const pickUpItemEvent = item => {
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
//placeItems takes an array of objects and randomly places the number of items specified in each object
//and adds an event listener
const placeItems = array => {
  for (let j = 0; j < foliageItems.length; j++) {
    for (let i = 0; i <= foliageItems[j].number; i++) {
      const item = document.createElement("img");
      item.setAttribute("src", foliageItems[j].url);
      item.classList.add(foliageItems[j].className);
      foliage.appendChild(item);
      randomPosition(item);
      pickUpItemEvent(item);
    }
  }
};

//placeGems makes a new element and appends it to the gems div
const placeGems = identify => {
  const newEl = document.createElement("div");
  newEl.id = identify;
  gems.appendChild(newEl);
  randomPosition(newEl);
};

//pickUpGemEvent takes an element and attaches an event listener
//that adds to counter and removes the item when it is clicked
const pickUpGemEvent = id => {
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

//helper functions for play game sequence
const setUpGround = () => {
  for (let i = 0; i < gemObjs.length; i++) {
    placeGems(gemObjs[i].id);
    pickUpGemEvent(gemObjs[i].id);
  }
  placeItems(foliageItems);
};

const removedFunction = () => {
  setInterval(countDownTimer, 1000);
  console.log("I want to play the game.");
};

const goToPickUp = ev => {
  ev.preventDefault();
  setUpGround();
  openingPage.style.display = "none";
  floor.style.display = "initial";
  document.querySelector(".ground").style.display = "initial";
  removedFunction();
};

const startGameSequence = () => {
  const newGypsy = document.createElement("div");
  newGypsy.classList.add("openingGypsy");
  openingPage.appendChild(newGypsy);
  setTimeout(function() {
    const newHello = document.createElement("div");
    newHello.classList.add("hello");
    newHello.innerHTML = "<h2>Hello traveler. <br> We seem to be lost.</h2>";
    openingPage.appendChild(newHello);
    setTimeout(function() {
      console.log("this is batty");
      const newBats = document.createElement("div");
      newBats.classList.add("bats");
      openingPage.appendChild(newBats);
      gyspyText.innerHTML = "<h2>What was THAT!</h2>";
      setTimeout(function() {
        document.querySelector(".bats").remove();
        gypsyText.innerHTML =
          "<h2>Oh no! <br> Help me please!</h2>";
        const helpButton = document.createElement("button");
        helpButton.innerText = "Click Here to Help!";
        gypsyText.appendChild(helpButton);
        helpButton.addEventListener("click", goToPickUp);
      }, 3000);
    }, 3000);
  }, 3000);
};

//start button event listener
startButton.addEventListener("click", ev => {
  ev.preventDefault();
  document.querySelector(".title").remove();
  setTimeout(startGameSequence(), 2000);
});
