const rocks = document.querySelector(".rock");
const leaves = document.querySelector(".leaf");
const foliageItems = [];

createFoliageObject = (number, url, className) => {
  foliageItems.push({
    number,
    url,
    className
  });
};

createFoliageObject(
  10,
  "https://images.vexels.com/media/users/3/145827/isolated/preview/357f06ecbaaa77d750259c459c0ed55f-round-rock-illustration-by-vexels.png",
  "rock"
);

createFoliageObject(
  10,
  "https://images.vexels.com/media/users/3/145827/isolated/preview/357f06ecbaaa77d750259c459c0ed55f-round-rock-illustration-by-vexels.png",
  "rock"
);

createFoliageObject(
  10,
  "http://res.freestockphotos.biz/pictures/16/16812-illustration-of-an-orange-autumn-leaf-pv.png",
  "leaf"
);

createFoliageObject(
  10,
  "http://res.freestockphotos.biz/pictures/16/16813-illustration-of-an-orange-autumn-leaf-pv.png",
  "leaf"
);

createFoliageObject(
  10,
  "http://www.lindicepensable.ch/wordpress/wp-content/uploads/2018/07/Feuille-de-vigne-avec-insecte.png",
  "leaf"
);
