const workshopsInfo = document.querySelector('.workshops--js');
const workshopsContainer = document.querySelector('.workshops-container');
let workshopsOpen = false;

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
