const menuButton = document.querySelector('.menu-button--js');
const menu = document.querySelector('.menu');
let isOpen = false;

menuButton.addEventListener('click', () => {
    if (isOpen) {
        menu.classList.remove('menu-open');
        menuButton.innerHTML = '<img class="menu-img" src="./open_menu.svg" alt="close menu.">';
        isOpen = false;
    } else {
        menu.classList.add('menu-open');
        menuButton.innerHTML = '<img class="menu-img" src="./close_menu.svg" alt="open menu.">';
        isOpen = true;
    }
});

