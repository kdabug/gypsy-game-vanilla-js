## GYPSY

**link:** https://gypsy-in-red.surge.sh

**GAME DESCRIPTION**

You are walk into the woods. An old woman pops out. You are sent to a 'ground scene' and told to help her pick up her items.

You have 20 seconds to pick up as many gems as possible while avoiding the rocks and leaves. On the screen you will see a count-down timer, a gem counter (which removes points for picking up rocks and leaves), and a text display which tells you the gems you are picking up.

If, at the end of the timer, you have less than a certain number of gems - the old woman will claim that you are a thief and curse you forever. You have the option to restart the game.

If you collect the required number of gems, the old woman will thank you and tell you how many of the gems you collected. She will say she has something to tell you and ask you for a series of three numbers. Those numbers will correspond with the order of all of the gems you picked up, and she will tell you your past, present, and future based on the gems that you picked up. She reads you a tarot card for your future as well and vanishes. The restart button appears.

**CODE SNIPPET**

Below, I create helper functions that will allow me to loop over an array of objects. For each object, the code will create a gem (as a div) that adopts the styling of the id corresponding to the gem's name. It then places the item in a random position on the screen and attaches an event listener to it. The event listener will remove the gem from the screen when the gem is clicked as well as add the object attached to the gem into a new array (which allows the gypsy to ask you questions about the gems you picked up later in the game).

```
//randomPosition takes and item and gives it a random position
const randomPosition = item => {
  item.style.left = Math.random() * window.innerWidth + "px";
  item.style.top = Math.random() * window.innerHeight - 200 + "px";
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
```
