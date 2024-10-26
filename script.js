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
