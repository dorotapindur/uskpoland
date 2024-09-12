const menuButton = document.querySelector('.menu-button--js');
const menu = document.querySelector('.menu');
let isOpen = false;

menuButton.addEventListener('click', () => {
    if (isOpen) {
        menu.classList.remove('menu-open');
        menuButton.innerHTML = '<img class="menu-img" src="main/images/pagegraphic/open_menu.svg" alt="close menu.">';
        isOpen = false;
    } else {
        menu.classList.add('menu-open');
        menuButton.innerHTML = '<img class="menu-img" src="main/images/pagegraphic/close_menu.svg" alt="open menu.">';
        isOpen = true;
    }
});

const workshopsInfo = document.querySelector('.workshops--js');
const workshopsContainer = document.querySelector('.workshops-container');
let workshopsOpen = true;

workshopsInfo.addEventListener('click', () => {
  if (workshopsOpen) {
      workshopsContainer.classList.remove('workshops-open');
      workshopsInfo.innerHTML = 'kliknij tutaj / click here';
      workshopsOpen = false;
  } else {
      workshopsContainer.classList.add('workshops-open');
      workshopsInfo.innerHTML = 'zamknij / close';
      workshopsOpen = true;
  }
});

const demosInfo = document.querySelector('.demos--js');
const demosContainer = document.querySelector('.demos-container');
let demosOpen = false;

demosInfo.addEventListener('click', () => {
  if (demosOpen) {
      demosContainer.classList.remove('demos-open');
      demosInfo.innerHTML = 'kliknij tutaj / click here';
      demosOpen = false;
  } else {
      demosContainer.classList.add('demos-open');
      demosInfo.innerHTML = 'zamknij / close';
      demosOpen = true;
  }
});
