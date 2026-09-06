/* ==================================================
   COZA STORE - HOME PAGE JAVASCRIPT
================================================== */


/* ==================================================
   SELECT SLIDER ELEMENTS
================================================== */

const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".dot");

const prevButton = document.querySelector(".slider-prev");
const nextButton = document.querySelector(".slider-next");


/* ==================================================
   SLIDER VARIABLES
================================================== */

let currentSlide = 0;

let slideInterval;


/* ==================================================
   SHOW SLIDE
================================================== */

function showSlide(index) {

    /* Make sure index stays inside the range */

    if (index >= slides.length) {
        currentSlide = 0;
    }

    if (index < 0) {
        currentSlide = slides.length - 1;
    }


    /* Hide all slides */

    slides.forEach((slide) => {

        slide.style.opacity = "0";
        slide.style.visibility = "hidden";

    });


    /* Remove active class from dots */

    dots.forEach((dot) => {

        dot.classList.remove("active");

    });


    /* Show current slide */

    slides[currentSlide].style.opacity = "1";
    slides[currentSlide].style.visibility = "visible";


    /* Activate current dot */

    if (dots[currentSlide]) {
        dots[currentSlide].classList.add("active");
    }


    /* ==================================================
       RESTART TEXT ANIMATION
    ================================================== */

    const smallText =
        slides[currentSlide].querySelector(".hero-small-text");

    const heading =
        slides[currentSlide].querySelector("h1");

    const description =
        slides[currentSlide].querySelector(".hero-description");

    const button =
        slides[currentSlide].querySelector(".shop-button");


    /* Remove animation */

    smallText.style.animation = "none";
    heading.style.animation = "none";
    description.style.animation = "none";
    button.style.animation = "none";


    /*
       Force browser to restart animation
    */

    void smallText.offsetWidth;
    void heading.offsetWidth;
    void description.offsetWidth;
    void button.offsetWidth;


    /* Start animation again */

    smallText.style.animation =
        "textFromLeft 1s ease forwards";

    heading.style.animation =
        "textFromLeft 1s ease forwards";

    description.style.animation =
        "textFromLeft 1s ease forwards";

    button.style.animation =
        "buttonFromLeft 1s ease forwards";


    /* Animation delays */

    smallText.style.animationDelay = "0.2s";

    heading.style.animationDelay = "0.4s";

    description.style.animationDelay = "0.6s";

    button.style.animationDelay = "0.8s";

}


/* ==================================================
   NEXT SLIDE
================================================== */

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

    resetAutoSlide();

}


/* ==================================================
   PREVIOUS SLIDE
================================================== */

function previousSlide() {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);

    resetAutoSlide();

}


/* ==================================================
   NEXT BUTTON
================================================== */

nextButton.addEventListener("click", function () {

    nextSlide();

});


/* ==================================================
   PREVIOUS BUTTON
================================================== */

prevButton.addEventListener("click", function () {

    previousSlide();

});


/* ==================================================
   DOT NAVIGATION
================================================== */

dots.forEach((dot, index) => {

    dot.addEventListener("click", function () {

        currentSlide = index;

        showSlide(currentSlide);

        resetAutoSlide();

    });

});


/* ==================================================
   AUTOMATIC SLIDER
================================================== */

function startAutoSlide() {

    slideInterval = setInterval(function () {

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);

    }, 5000);

}


/* ==================================================
   RESET AUTOMATIC SLIDER
================================================== */

function resetAutoSlide() {

    clearInterval(slideInterval);

    startAutoSlide();

}


/* ==================================================
   START SLIDER
================================================== */

showSlide(currentSlide);

startAutoSlide();


/* ==================================================
   PAUSE SLIDER WHEN MOUSE IS OVER IT
================================================== */

const hero = document.querySelector(".hero");

hero.addEventListener("mouseenter", function () {

    clearInterval(slideInterval);

});


/* ==================================================
   RESUME SLIDER WHEN MOUSE LEAVES
================================================== */

hero.addEventListener("mouseleave", function () {

    startAutoSlide();

});


/* ==================================================
   KEYBOARD CONTROLS
================================================== */

document.addEventListener("keydown", function (event) {

    if (event.key === "ArrowRight") {

        nextSlide();

    }

    if (event.key === "ArrowLeft") {

        previousSlide();

    }

});

document.addEventListener("DOMContentLoaded", function () {

    const categoryCards = document.querySelectorAll(".category-card");

    categoryCards.forEach(function (card) {

        card.addEventListener("click", function (event) {

            // SHOP NOW button par click ho to normal link open hone dein
            if (event.target.closest(".shop-now-btn")) {
                return;
            }

            // Baaki picture/card par click karne se effect
            categoryCards.forEach(function (item) {
                if (item !== card) {
                    item.classList.remove("active");
                }
            });

            card.classList.toggle("active");

        });

    });

});