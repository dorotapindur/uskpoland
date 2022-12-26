const menuButton = document.querySelector('.menu-button--js');
const menu = document.querySelector('.menu');
let isOpen = false;

menuButton.addEventListener('click', () => {
    if (isOpen) {
        menu.classList.remove('menu-open');
        menuButton.innerHTML = '<img class="menu-img" src="main/images/open_menu.svg" alt="close menu.">';
        isOpen = false;
    } else {
        menu.classList.add('menu-open');
        menuButton.innerHTML = '<img class="menu-img" src="main/images/close_menu.svg" alt="open menu.">';
        isOpen = true;
    }
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
