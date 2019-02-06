const body = document.querySelector("body");
const floor = document.querySelector(".floor-scene");
const ground = document.querySelector(".ground");
const gems = document.querySelector(".gem");
const instructions = document.querySelector(".instructions");
const startButton = document.querySelector("#start-button");
const openingPage = document.querySelector(".opening-page");
const foliage = document.querySelector(".foliage");
//const gypsyText = document.querySelector('.hello');
const form = document.querySelector('input');

//Starting Conditions
let returnedGemObjs = [];
let gemCount = 0;
let countDown = 20;
let lowestScore = 1;
let lastPickedNumber = -1;
let firstPickedNumber = -1;
let secondPickedNumber = -1;

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
  createRestart.innerHTML = "<h1>Restart</h1>";
  element.appendChild(createRestart);
  createRestart.addEventListener("click", function() {
    document.location.reload();
  });
};

//create number form
const createNumberForm = place => {
  form.style.display = '';
  form.setAttribute("placeholder", place);
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
  document.querySelector('.hello').innerHTML =
    "<h2>STOP THIEF!!! <br> POLICE STOP THIS TRAVELER!! <br> CURSES ON YOU FOR ALL ETERNITY!</h2>";
  restartButton(openingPage);
};

//helper function for winningPicks
//to ask the player to choose again
const chooseAgain = () => {
  document.querySelector('.hello').innerText = `Please pick a number between 1 and ${
    returnedGemObjs.length
  }`;
  openingPage.remove(form);
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
//final input sequence
const finalNumberInput = () => {
  createNumberForm("final number");
  if (
    checkDifferentNumbers(pickedNumber, firstPickedNumber, secondPickedNumber)
  ) {
    document.querySelector('.hello').innerHTML = `<p>Your futures bodes of ${
      returnedGemObjs[pickedNumber - 1].heals
    }. This requires further study of the ${
      returnedGemObjs[pickedNumber - 1].color
    } ${returnedGemObjs[pickedNumber - 1].stone}.</p>`;
    lastPickedNumber = pickedNumber;
    form.style.display = 'none';
    setTimeout(function() {
      document.querySelector('.hello').innerHTML = `<h2>Now for your present. Give me a different number between 1 and ${
        returnedGemObjs.length}.</h2>`;
      setTimeout(secondNumberInput, 3000)},
       4000);
  } else {
    chooseAgain();
  }
 openingPage.remove(form);

 setTimeout(function() {
   openingPage.remove(document.querySelector('.openingGypsy'));
   document.querySelector('.hello').innerHTML = '<h2> *POOF* <br><br></h2> <p>she is gone</p>';
 }, 3000);
};

//helper function for winningPicks
//second input sequence
const secondNumberInput = () => {
  createNumberForm("second number");
  if (
    checkDifferentNumbers(pickedNumber, firstPickedNumber, lastPickedNumber)
  ) {
    document.querySelector('.hello').innerHTML = `<p>Your present speaks to the ${
      returnedGemObjs[pickedNumber - 1].color
    } ${returnedGemObjs[pickedNumber - 1].stone} signifying ${
      returnedGemObjs[pickedNumber - 1].heals
    }.</p>`;
    secondPickedNumber = pickedNumber;
    form.style.display = 'none';
    setTimeout(function() {
      document.querySelector('.hello').innerHTML = `<h2>Now, give me a different number between 1 and ${
        returnedGemObjs.length
      }.</h2>`;
      setTimeout(finalNumberInput, 3000)},
       4000);
  } else {
    chooseAgain();
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
    document.querySelector('.hello').innerHTML = `<p>Ahh yes. The ${
      returnedGemObjs[pickedNumber - 1].stone
    } is such a beautiful ${
      returnedGemObjs[pickedNumber - 1].color
    }. It's telling me your past was filled with ${
      returnedGemObjs[pickedNumber - 1].heals
    }.</p>`;
    firstPickedNumber = pickedNumber;
    form.style.display = 'none';
    setTimeout(function() {
      document.querySelector('.hello').innerHTML = `<h2>Now for your present. Give me a different number between 1 and ${
        returnedGemObjs.length}.</h2>`;
      setTimeout(secondNumberInput, 3000)},
     4000);
  } else {
    chooseAgain();
  }

};

//WINNING SEQUENCE
//winning picks asks for three numbers if player picks > lowestCount
const winningPicks = () => {
  floor.style.display = "none";
  openingPage.style.display = "";
  document.querySelector('.hello').innerHTML = `<p>Thank you, kind traveler, for helping me. <br>... ... ...<br> I'm feeling impressed to tell you coming thing. <br> Can you please give me a number between 1 and ${
    returnedGemObjs.length
  }.</p>`;
  firstNumberInput();
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
    console.log(gemName);
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
  console.log("I want to play the game.");
};

const goToPickUp = ev => {
  ev.preventDefault();
  setUpGround();
  openingPage.style.display = "none";
  floor.style.display = "initial";
  document.querySelector(".ground").style.display = "initial";
  sequenceTimer();
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
      document.querySelector('.hello').innerHTML = "<h2>What was THAT!</h2>";
      setTimeout(function() {
        document.querySelector(".bats").remove();
        document.querySelector('.hello').innerHTML =
          "<h2>Oh no! <br> Help me please!</h2>";
        const helpButton = document.createElement("button");
        helpButton.innerText = "Click Here to Help!";
        document.querySelector('.hello').appendChild(helpButton);
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
