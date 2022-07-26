const btnScrRigthNews = document.querySelector("#btnScrRigthNews");
const btnScrLeftNews = document.querySelector("#btnScrLeftNews");
const sliderNews = document.querySelector("#sliderNews");

const btnScrRigthMagaz = document.querySelector("#btnScrRigthMagaz");
const btnScrLeftMagaz = document.querySelector("#btnScrLeftMagaz");
const sliderMagaz = document.querySelector("#sliderMagaz");

function activateBtn(slide) {
  slide.classList.remove("slider__slide-button_disabled");
}

function disactivateBtn(slide) {
  slide.classList.add("slider__slide-button_disabled");
}

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
