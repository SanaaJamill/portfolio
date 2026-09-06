/* ==================================================
   COZA STORE - ABOUT PAGE JAVASCRIPT
================================================== */


/* ==================================================
   MOBILE MENU
================================================== */

const menuButton = document.querySelector(".menu-button");
const navbar = document.querySelector(".navbar");

if (menuButton && navbar) {

    menuButton.addEventListener("click", function () {

        navbar.classList.toggle("show");

        const icon = menuButton.querySelector("i");

        if (navbar.classList.contains("show")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}


/* ==================================================
   CLOSE MOBILE MENU AFTER CLICK
================================================== */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navbar) {

            navbar.classList.remove("show");

        }

        if (menuButton) {

            const icon = menuButton.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

});


/* ==================================================
   SCROLL ANIMATION
================================================== */

const animatedElements = document.querySelectorAll(
    ".about-row, .why-card, .stat-box"
);


const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach(function (element) {

    observer.observe(element);

});


/* ==================================================
   STATISTICS COUNTER
================================================== */

const statNumbers = document.querySelectorAll(
    ".stat-box h2"
);


let countersStarted = false;


function startCounters() {

    if (countersStarted) {
        return;
    }

    countersStarted = true;


    statNumbers.forEach(function (counter) {

        const originalText =
            counter.textContent.trim();


        /* 10+ / 500+ / 10K+ / 24/7 */

        if (originalText === "10+") {

            animateNumber(counter, 10, "+");

        }

        else if (originalText === "500+") {

            animateNumber(counter, 500, "+");

        }

        else if (originalText === "10K+") {

            animateNumber(counter, 10, "K+");

        }

        else {

            counter.textContent =
                originalText;

        }

    });

}


/* ==================================================
   NUMBER ANIMATION
================================================== */

function animateNumber(
    element,
    target,
    suffix
) {

    let current = 0;

    const duration = 1500;

    const intervalTime = 30;

    const increment =
        target /
        (duration / intervalTime);


    const counterInterval =
        setInterval(function () {

            current += increment;


            if (current >= target) {

                current = target;

                clearInterval(counterInterval);

            }


            element.textContent =
                Math.floor(current) + suffix;


        }, intervalTime);

}


/* ==================================================
   START COUNTER WHEN STATISTICS ARE VISIBLE
================================================== */

const statsSection =
    document.querySelector(".about-stats");


if (statsSection) {

    const statsObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        startCounters();

                        statsObserver.unobserve(
                            statsSection
                        );

                    }

                });

            },
            {
                threshold: 0.3
            }
        );


    statsObserver.observe(statsSection);

}


/* ==================================================
   HEADER SHADOW ON SCROLL
================================================== */

const header =
    document.querySelector(".header");


window.addEventListener(
    "scroll",
    function () {

        if (!header) {
            return;
        }


        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }
);


/* ==================================================
   SMOOTH SCROLL
================================================== */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            const targetId =
                this.getAttribute("href");


            if (
                targetId === "#" ||
                targetId === ""
            ) {

                return;

            }


            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

});


/* ==================================================
   ACTIVE NAVIGATION
================================================== */

const currentPage =
    window.location.pathname
        .split("/")
        .pop();


navLinks.forEach(function (link) {

    const linkPage =
        link.getAttribute("href");


    if (
        linkPage === currentPage &&
        linkPage !== "#"
    ) {

        navLinks.forEach(function (item) {

            item.classList.remove("active");

        });

        link.classList.add("active");

    }

});


/* ==================================================
   SHOP NOW BUTTON
================================================== */

const shopButton =
    document.querySelector(".about-button");


if (shopButton) {

    shopButton.addEventListener(
        "click",
        function () {

            window.location.href =
                "shop.html";

        }
    );

}


/* ==================================================
   PAGE LOADED
================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        document.body.classList.add(
            "page-loaded"
        );

    }
);