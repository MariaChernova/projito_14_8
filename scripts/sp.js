const spPopup = document.querySelector('.sp-popup');
const spPopupButtonClose = spPopup.querySelector('.sp-popup__close');

function closeSpPopup(modal) {
  modal.classList.add('popup_closed');
}

spPopupButtonClose.addEventListener('click', () => closeSpPopup(spPopup));