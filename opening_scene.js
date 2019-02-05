const openingPage = document.querySelector(".opening-page");
const treeCut = window.innerWidth * 0.4;

const randomPositionTree = item => {
  item.style.left = Math.random() * window.innerWidth + treeCut + "px";
  item.style.top = Math.random() * parseInt(item.style.left) + "px";
  console.log("this is ", parseInt(item.style.left));
};

const createElement = (number, className, shape) => {
  for (let i = 0; i <= number; i++) {
    newEl = document.createElement("div");
    newEl.classList.add(className);
    newEl.classList.add(shape);
    openingPage.appendChild(newEl);
    randomPositionTree(newEl);
  }
};

createElement(200, "tree", "circle");
