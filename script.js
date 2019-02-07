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
    "<h2>STOP THIEF!!!<br> CURSES ON YOU FOR ALL ETERNITY! </h2><br><h3>RUN</h3>";
  restartButton(openingPage);
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
    gameText.innerHTML = `<p>Your future ...bodes of... ${
      returnedGemObjs[pickedNumber - 1].heals
    }. This requires further study of the ${
      returnedGemObjs[pickedNumber - 1].color
    } ${
      returnedGemObjs[pickedNumber - 1].stone
    }....hmmm</p><br><h3>The woman mumbles.</h3>`;
    lastPickedNumber = pickedNumber;
    formDiv.style.display = "none";
    setTimeout(function() {
      const cardPicture = document.createElement("img");
      cardPicture.classList.add("tarot");
      cardPicture.setAttribute("src", shuffledDeck[pickedNumber - 1].image);
      openingPage.appendChild(cardPicture);
      gypsy.style.display = "none";
      gameText.innerHTML = `<h2> Yes you picked ${pickedNumber}....I pulled out that card in my tarot. The ${
        shuffledDeck[pickedNumber - 1].number
      } of ${shuffledDeck[pickedNumber - 1].suit}. 
   Be Aware. ${shuffledDeck[pickedNumber - 1].meaning}.<h2>`;
      setTimeout(function() {
        document.querySelector(".tarot").style.display = "none";
        gameText.innerHTML = `<h3>......she's.......gone?.......</h3>`;
        restartButton(openingPage);
      }, 4000);
    }, 6000);
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
    gameText.innerHTML = `<p>Your present speaks<br>to the ${
      returnedGemObjs[pickedNumber - 1].color
    } ${
      returnedGemObjs[pickedNumber - 1].stone
    } <br>signifying that you are currently<br>working on or with some significant <br> ${
      returnedGemObjs[pickedNumber - 1].heals
    }.</p>`;
    secondPickedNumber = pickedNumber;
    numberSubmitButton.removeEventListener("click", secondSubmitEvent);
    setTimeout(function() {
      gameText.innerHTML = `<h2>Now for your future...</h2><br> <h3>Give the woman a different number between 1 and ${
        returnedGemObjs.length
      }.</h3>`;
      numberSubmitButton.addEventListener("click", finalSubmitEvent);
    }, 6000);
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
    gameText.innerHTML = `<p>Ahh yes. The ${
      returnedGemObjs[pickedNumber - 1].stone
    } is such a beautiful ${
      returnedGemObjs[pickedNumber - 1].color
    } stone. It's telling me your recent past has reflected itself with ${
      returnedGemObjs[pickedNumber - 1].heals
    }.</p>`;
    firstPickedNumber = pickedNumber;
    numberSubmitButton.removeEventListener("click", firstSubmitEvent);
    setTimeout(function() {
      gameText.innerHTML = `<h2>I'm sensing your present state ...</h2><br><h3>Give me a different number between 1 and ${
        returnedGemObjs.length
      }.</h3>`;
      numberSubmitButton.addEventListener("click", secondSubmitEvent);
    }, 6000);
  }
};

//WINNING SEQUENCE
//winning picks asks for three numbers if player picks > lowestCount
const winningPicks = () => {
  floor.style.display = "none";
  openingPage.style.display = "";
  gameText.innerHTML = `<h2>Thank you, kind traveler, for helping me collect ${gemCount} of my gems. <br> <br> I'm feeling impressed to tell you coming thing. <br> Can you please give me a number between 1 and ${
    returnedGemObjs.length
  }.</h2>`;
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
    createTimer.innerText = `Timer: ${countDown}`;
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

//helper functions for play game sequence
const setUpGround = () => {
  for (let i = 0; i < gemObjs.length; i++) {
    placeGems(gemObjs[i].id);
    pickUpGemEvent(gemObjs[i].id);
  }
  placeItems(foliageItems);
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
  sequenceTimer();
};

const batsFlyThrough = () => {
  console.log(level);
  document.querySelector(".bats").style.display = "block";
  gameText.innerHTML = "<h2>What was THAT!</h2>";
  setTimeout(function() {
    document.querySelector(".bats").remove();
    gameText.innerHTML = "<h2>Oh no! <br> Help me please!</h2>";
    const helpButton = document.createElement("button");
    helpButton.innerText = "Click Here to Help!";
    gameText.appendChild(helpButton);
    helpButton.addEventListener("click", goToPickUp);
  }, 3000);
};

const setLevel = ev => {
  ev.preventDefault;
  if (level === "hard") {
    countDown = 20;
    lowestScore = 24;
    //document.querySelector("#submit-button").remove();
    batsFlyThrough();
  }
  if (level === "normal") {
    countDown = 20;
    lowestScore = 20;
    //document.querySelector("#submit-button").remove();
    batsFlyThrough();
  }
  if (level === "easy" || level != true) {
    countDown = 20;
    lowestScore = 15;
    //document.querySelector("#submit-button").remove();
    batsFlyThrough();
  }
};

const levelClickEvent = ev => {
  ev.preventDefault;
  level = document.querySelector("form").value;
  debugger;
  console.log(level);
  batsFlyThrough();
};

const getTravelerLevel = () => {
  gameText.innerHTML =
    '<h2>Tell me, have you traveled these woods before?</h2><form><input type="radio" name="level" value="hard"> <p>Yes, many times!</p> <br><input type="radio" name="level" value="normal"> <p>Only once or twice.</p> <br><input type="radio" name="level" value="easy"> <p>Never!</p><input type="submit"></form>';
  let form2 = document.querySelector("form");
  form2[3].removeEventListener();
  form2[3].addEventListener("click", setLevel);
  // createButton = document.createElement("button");
  // createButton.id = "submit-button";
  // createButton.innerHTML = "SUBMIT";
  // createButton.addEventListener("click", levelClickEvent);
  // gameText.appendChild(createButton);
};
const startGameSequence = () => {
  gypsy.style.display = "block";
  setTimeout(function() {
    gameText.style.display = "block";
    gameText.innerHTML = "<h2>Hello traveler. <br> We seem to be lost.</h2>";
    setTimeout(batsFlyThrough, 3000);
  }, 3000);
};

//start button event listener
startButton.addEventListener("click", ev => {
  ev.preventDefault();
  document.querySelector(".title").remove();
  setTimeout(startGameSequence(), 2000);
});
