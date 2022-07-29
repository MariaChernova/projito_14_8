const spPopup = document.querySelector(".sp-popup");
const spPopupButtonClose = spPopup.querySelector(".sp-popup__close");

const spPopupTable = document.querySelector(".table-popup");
const spPopupTableCloseButton = spPopupTable.querySelector(
  ".table-popup__close-button"
);
const spPopupTableOpenButton = document.querySelector(".rotated-button");

let imageTextBook = document.querySelector("#imageTextBook");
console.log(imageTextBook.src);
const galleryButtonForward = document.querySelector("#galleryButtonForward");
galleryButtonForward.addEventListener("click", function () {
  if (imageTextBook.getAttribute("src") == "images/content-img2.jpg") {
    imageTextBook.src = "images/content-img1.jpg";
  } else {
    imageTextBook.src = "images/content-img2.jpg";
  }
});

function closeSpPopup(modal) {
  modal.classList.add("popup-closer");
}

function openSpPopup(modal) {
  modal.classList.remove("popup-closer");
}

spPopupButtonClose.addEventListener("click", () => closeSpPopup(spPopup));
spPopupTableCloseButton.addEventListener("click", () =>
  closeSpPopup(spPopupTable)
);
spPopupTableOpenButton.addEventListener("click", () =>
  openSpPopup(spPopupTable)
);
