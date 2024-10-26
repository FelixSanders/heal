const carouselSlide = document.querySelector('.carousel-slide');
const carouselItems = document.querySelectorAll('.carousel-item');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

let counter = 0;

// Set the size dynamically based on the first item’s width
let size = carouselItems[0].offsetWidth + 10;

function updateCarousel() {
    // Adjust transform based on item width and counter
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    console.log(`Counter: ${counter}, Size: ${size}`);
}

nextButton.addEventListener('click', () => {
    if (counter >= carouselItems.length - 1) {
        counter = 0;  // Loop back to the start if at the end
    } else {
        counter++;
    }
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    if (counter <= 0) {
        counter = carouselItems.length - 1;  // Loop back to the end if at the start
    } else {
        counter--;
    }
    updateCarousel();
});

window.addEventListener('resize', () => {
    size = carouselItems[0].offsetWidth;
    updateCarousel();
});


var header = document.querySelector(".header");
var headerlogo = document.querySelector(".header-logo");

window.addEventListener("scroll", function () {

    var shouldToggle = window.scrollY > 20;


    header.classList.toggle("light", shouldToggle);
    headerlogo.classList.toggle("white", shouldToggle);

});

headerlogo.addEventListener('click', function () {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

});
