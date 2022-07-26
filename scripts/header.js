const headerMenu = document.querySelector('.header__menu');
const btnAboutProj = headerMenu.querySelector('#btnAboutProj');
const subHeaderMenu = document.querySelector('.header__links-down');

const btnMenuOpen = document.querySelector('.header__menu-button_action_open');
const btnMenuClose = headerMenu.querySelector('.header__menu-button_action_close');

function showHeaderSubMenu(subMenu) {
  subMenu.classList.add('header__links-down_open');
};

function hideHeaderSubMenu(subMenu) {
  subMenu.classList.remove('header__links-down_open');
};

function showMobileHeaderMenu(menu) {
  menu.classList.add('header__menu_opened');
};

function closeMobileHeaderMenu(menu) {
  menu.classList.remove('header__menu_opened');
};

btnAboutProj.addEventListener('mouseenter', () => { showHeaderSubMenu(subHeaderMenu) });

btnAboutProj.addEventListener('mouseleave', () => { hideHeaderSubMenu(subHeaderMenu) });

subHeaderMenu.addEventListener('mouseenter', () => { showHeaderSubMenu(subHeaderMenu) });

subHeaderMenu.addEventListener('mouseleave', () => { hideHeaderSubMenu(subHeaderMenu) });

btnMenuOpen.addEventListener('click', () => { showMobileHeaderMenu(headerMenu) });

btnMenuClose.addEventListener('click', () => { closeMobileHeaderMenu(headerMenu) });
