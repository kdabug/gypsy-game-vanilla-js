const rocks = document.querySelector(".rock");
const leaves = document.querySelector(".leaf");
let foliageItems = [];

const createFoliageObject = (number, url, selector, className) => {
  foliageItems.push({
    number,
    url,
    selector,
    className
  });
};

createFoliageObject(
  3,
  "https://images.vexels.com/media/users/3/145827/isolated/preview/357f06ecbaaa77d750259c459c0ed55f-round-rock-illustration-by-vexels.png",
  rocks,
  "rock"
);

createFoliageObject(
  3,
  "https://images.vexels.com/media/users/3/145827/isolated/preview/357f06ecbaaa77d750259c459c0ed55f-round-rock-illustration-by-vexels.png",
  rocks,
  "rock"
);

createFoliageObject(
  4,
  "http://res.freestockphotos.biz/pictures/16/16812-illustration-of-an-orange-autumn-leaf-pv.png",
  leaves,
  "leaf"
);

createFoliageObject(
  3,
  "http://res.freestockphotos.biz/pictures/16/16813-illustration-of-an-orange-autumn-leaf-pv.png",
  leaves,
  "leaf"
);

createFoliageObject(
  2,
  "http://www.lindicepensable.ch/wordpress/wp-content/uploads/2018/07/Feuille-de-vigne-avec-insecte.png",
  leaves,
  "leaf"
);
