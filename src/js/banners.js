//banner img
let slideIndexI = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndexI++;
  if (slideIndexI > slides.length) {
    slideIndexI = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activei", "");
  }
  slides[slideIndexI - 1].style.display = "block";
  dots[slideIndexI - 1].className += " activei";
  setTimeout(showSlides, 3500);
}

//banner shipping, fees, attention
let slideIndexB = 0;
function showSlidesBanners() {
  let i;
  let slides = document.getElementsByClassName("bannerSlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndexB++;
  if (slideIndexB > slides.length) {
    slideIndexB = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeBanners", "");
  }
  slides[slideIndexB - 1].style.display = "block";
  setTimeout(showSlidesBanners, 2500);
}
showSlidesBanners(slideIndexB);

//current date
let date = new Date();
let currentDate =
  date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
document.getElementById("date").innerHTML = currentDate;
