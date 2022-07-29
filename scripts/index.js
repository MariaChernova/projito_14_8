const greenPopup = document.querySelector(".green-popup");
const greenPopupButtonClose = greenPopup.querySelector(".green-popup__close");

const btnScrRigthNews = document.querySelector("#btnScrRigthNews");
const btnScrLeftNews = document.querySelector("#btnScrLeftNews");
const sliderNews = document.querySelector("#sliderNews");

const btnScrRigthMagaz = document.querySelector("#btnScrRigthMagaz");
const btnScrLeftMagaz = document.querySelector("#btnScrLeftMagaz");
const sliderMagaz = document.querySelector("#sliderMagaz");

const diarysContainer = document.querySelector("#diarysContainer");
const btnMaterSlideEl1 = document.querySelector("#materSlideEl1");
const btnMaterSlideEl2 = document.querySelector("#materSlideEl2");
const btnMaterSlideEl3 = document.querySelector("#materSlideEl3");

function closeGreenPopup(modal) {
  modal.classList.add("popup-closer");
}

function activateBtn(slide) {
  slide.classList.remove("slider__slide-button_disabled");
}

function disactivateBtn(slide) {
  slide.classList.add("slider__slide-button_disabled");
}

greenPopupButtonClose.addEventListener("click", () =>
  closeGreenPopup(greenPopup)
);

btnScrRigthNews.addEventListener("click", function () {
  sliderNews.scrollBy(348, 0);
  activateBtn(btnScrLeftNews);
});

btnScrLeftNews.addEventListener("click", function () {
  sliderNews.scrollBy(-348, 0);
});

btnScrRigthMagaz.addEventListener("click", function () {
  sliderMagaz.scrollBy(348, 0);
  activateBtn(btnScrLeftMagaz);
});

btnScrLeftMagaz.addEventListener("click", function () {
  sliderMagaz.scrollBy(-348, 0);
});

btnMaterSlideEl1.addEventListener("click", function () {
  diarysContainer.scrollTo(0, 0);
  btnMaterSlideEl1.classList.add("slide__ellipse_active");
  btnMaterSlideEl2.classList.remove("slide__ellipse_active");
  btnMaterSlideEl3.classList.remove("slide__ellipse_active");
});

btnMaterSlideEl2.addEventListener("click", function () {
  diarysContainer.scrollTo(276, 0);
  btnMaterSlideEl2.classList.add("slide__ellipse_active");
  btnMaterSlideEl1.classList.remove("slide__ellipse_active");
  btnMaterSlideEl3.classList.remove("slide__ellipse_active");
});

btnMaterSlideEl3.addEventListener("click", function () {
  diarysContainer.scrollTo(552, 0);
  btnMaterSlideEl3.classList.add("slide__ellipse_active");
  btnMaterSlideEl2.classList.remove("slide__ellipse_active");
  btnMaterSlideEl1.classList.remove("slide__ellipse_active");
});
