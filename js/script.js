// Script para hacer funcionar el carousel
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

window.addEventListener('scroll', function () {
    var navBar = document.querySelector('.nav-bar');
    if (window.scrollY > 150) {
        navBar.classList.add('scrolled');
    } else {
        navBar.classList.remove('scrolled');
    }
});
let counter = 0;
const slideWidth = slides[0].clientWidth;

// Función para mover el carrusel a la izquierda
const moveToPrevSlide = () => {
    if (counter <= 0) return;
    counter--;
    carousel.style.transform = `translateX(${-slideWidth * counter}px)`;
};

// Función para mover el carrusel a la derecha
const moveToNextSlide = () => {
    if (counter >= slides.length - 1) return;
    counter++;
    carousel.style.transform = `translateX(${-slideWidth * counter}px)`;
};

prevButton.addEventListener('click', moveToPrevSlide);
nextButton.addEventListener('click', moveToNextSlide);


