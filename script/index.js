const buttonScrRigth = document.querySelector(
  ".slider__slide-button_direction_right"
);
const buttonScrLeft = document.querySelector(
  ".slider__slide-button_direction_left"
);

const t = document.querySelector(".slider__container");

function scrollPx() {
  t.scrollTo(328, 0);
}

function activateBtn(slide) {
  slide.classList.remove("slider__slide-button_disabled");
}

function disactivateBtn(slide) {
  slide.classList.add("slider__slide-button_disabled");
}

buttonScrRigth.addEventListener("click", function () {
  scrollPx(t);
  activateBtn(buttonScrLeft);
});

buttonScrLeft.addEventListener("click", function () {
  scrollPx(t);
  disactivateBtn(buttonScrLeft);
});

function scrollPercent() {
  const half = t.scrollHeight / 2;
  t.scrollTo(0, Math.ceil(half));
}
