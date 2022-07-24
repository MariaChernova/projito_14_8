const greenPopup = document.querySelector('.green-popup');
const greenPopupButtonClose = greenPopup.querySelector('.green-popup__close');

function closePopup(modal) {
  modal.classList.add('green-popup_closed');
}

greenPopupButtonClose.addEventListener('click', () => closePopup(greenPopup));