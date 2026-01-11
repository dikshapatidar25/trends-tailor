// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }


let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
    dots[i].classList.toggle('active', i === index);
  });
  currentSlide = index;
}

function changeSlide(index) {
  showSlide(index);
}

// Auto slide every 5 seconds (optional)
setInterval(() => {
  let nextSlide = (currentSlide + 1) % slides.length;
  changeSlide(nextSlide);
}, 5000);

// Show the first slide initially
document.addEventListener('DOMContentLoaded', () => {
  showSlide(0);
});

