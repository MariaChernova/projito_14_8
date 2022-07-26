const spPopup = document.querySelector('.sp-popup');
const spPopupButtonClose = spPopup.querySelector('.sp-popup__close');

const spPopupTable = document.querySelector('.table-popup');
const spPopupTableCloseButton = spPopupTable.querySelector('.table-popup__close-button');

function closeSpPopup(modal) {
  modal.classList.add('popup_closed');
}

spPopupButtonClose.addEventListener('click', () => closeSpPopup(spPopup));
spPopupTableCloseButton.addEventListener('click', () => closeSpPopup(spPopupTable));