const greenPopup = document.querySelector('.green-popup');
const greenPopupButtonClose = greenPopup.querySelector('.green-popup__close');

function closeGreenPopup(modal) {
  modal.classList.add('popup_closed');
}

greenPopupButtonClose.addEventListener('click', () => closeGreenPopup(greenPopup));
