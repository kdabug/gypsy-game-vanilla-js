// const openingPage = document.querySelector(".opening-page");
// const spill = document.querySelector(".spill-gems");
// const randomColor =
//   "rgb(" +
//   Math.floor(Math.random() * 255) +
//   "," +
//   Math.floor(Math.random() * 255) +
//   "," +
//   Math.floor(Math.random() * 255) +
//   ")";

// const newLeft = parseInt(spill.style.left) + (10*Math.random());
// const newbottom = parseInt(spill.style.top) + (10*Math.random());

// const createFlyingGems = (number, className) => {
//   for (let i = 0; i <= number; i++) {
//     const newEl = document.createElement("div");
//     newEl.classList.add(className);
//     newEl.style.backgroundColor = randomColor;
//     spill.appendChild(newEl);
//     newEl.animate([ {opacity: 1},
//         { left: newLeft+'px', bottom: newBottom+'px', offset: 0.7 },
//         { left: newLeft+10+'px', bottom: 1%} ],
//       2000);
//   }
// };

// const treeCut = window.innerWidth * 0.4;
// const bushDiv = document.querySelector(".bush");

// const randomPositionTree = item => {
//   item.style.left = Math.random() * window.innerWidth + "px";
//   if (parseInt(item.style.left) < treeCut) {
//     item.style.left = parseInt(item.style.left) + treeCut + "px";
//   }
//   if (parseInt(item.style.left) > window.innerWidth) {
//     item.style.left = window.innerwidth - 30 + "px";
//   }
//   item.style.top = Math.random() * window.innerHeight + "px";
//   if (parseInt(item.style.top) > parseInt(item.style.left)) {
//     item.style.top = item.style.left;
//   }
//   if (parseInt(item.style.top) > window.innerHeight) {
//     item.style.top = window.innerHeight - 30 + "px";
//   }
//   console.log("this is ", parseInt(item.style.left));
// };

// const createOpeningCircles = (number, className, shape, color) => {
//   for (let i = 0; i <= number; i++) {
//     const newEl = document.createElement("div");
//     newEl.classList.add(className);
//     newEl.classList.add(shape);
//     newEl.style.backgroundColor = color;
//     openingPage.appendChild(newEl);
//     randomPositionTree(newEl);
//   }
// };

// const createOpeningBushes = (number, className, shape, url) => {
//   for (let i = 0; i <= number; i++) {
//     const newEl = document.createElement("div");
//     newEl.classList.add(className);
//     newEl.classList.add(shape);
//     newEl.style.backgroundImage = url;
//     openingPage.appendChild(newEl);
//     randomPositionTree(newEl);
//   }
// };

// createOpeningCircles(150, "tree", "circle", "darkgreen");
// createOpeningCircles(150, "tree", "circle", "green");
// createOpeningBushes(40, "bush", "bushTwo", "./images/bush3.png");
// createOpeningCircles(50, "tree", "circle", "darkolivegreen");
// createOpeningCircles(80, "tree", "circle", "green");
// createOpeningBushes(400, "bush", "bushOne", "./images/bush1.png");