const buttonScrRigth = document.querySelector(
  ".slider__slide-button_direction_right"
);
const buttonScrLeft = document.querySelector(
  ".slider__slide-button_direction_left"
);

const t = document.querySelector(".slider__container");

function scrollLeft() {
  t.scrollBy(348, 0);
}

function scrollRight() {
  t.scrollBy(-348, 0);
}

function activateBtn(slide) {
  slide.classList.remove("slider__slide-button_disabled");
}

function disactivateBtn(slide) {
  slide.classList.add("slider__slide-button_disabled");
}

buttonScrRigth.addEventListener("click", function () {
  scrollLeft(t);
  activateBtn(buttonScrLeft);
});

buttonScrLeft.addEventListener("click", function () {
  scrollRight(t);
});
