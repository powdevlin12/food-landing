const backToTop = document.getElementsByClassName("back-to-top")[0];
window.onscroll = () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }
};

const menuItems = document.getElementsByClassName("menu-item");
Array.from(menuItems).map((item) => {
  item.onclick = () => {
    let currentActive = document.querySelector(".menu-item.active");
    currentActive.classList.remove("active");
    item.classList.add("active");
  };
});

// category
const listItems = document.querySelector(".food-item-wrap");
const category = document.querySelector(".food-category");
const listCategory = category.querySelectorAll(".food-category button");
Array.from(listCategory).map((item) => {
  item.onclick = () => {
    let currentBtn = category.querySelector(".active");
    currentBtn.classList.remove("active");
    item.classList.add("active");
    listItems.classList = "food-item-wrap " + item.dataset.foodType;
  };
});
// scroll animation
let scroll =
  window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
let elToShow = document.getElementsByClassName("play-on-scroll");
const isElInViewPort = (el) => {
  let rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
};
const loop = () => {
  Array.from(elToShow).map((item) => {
    if (isElInViewPort(item)) {
      item.classList.add("start");
    } else {
      item.classList.remove("start");
    }
  });
  scroll(loop);
};
loop();
// MOBILE NAV BAR
let mbMove = document.querySelector(".mb-nav-move");
let mbItems = document.querySelectorAll(".mb-nav-item>a");
Array.from(mbItems).map((item,index) => {
  item.onclick = () => {
    let currActive = document.querySelector(".mb-nav-item>.active");
    currActive.classList.remove("active");
    item.classList.add("active");
    mbMove.style.left=index*25+"%";
  };
});
