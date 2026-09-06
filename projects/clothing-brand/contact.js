/* ==================================================
   COZA STORE - CONTACT PAGE JAVASCRIPT
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
   CLOSE MOBILE MENU
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
   CONTACT FORM
================================================== */

const contactForm =
    document.querySelector("#contact-form");

const successMessage =
    document.querySelector("#form-success");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            /* ------------------------------------------
               GET INPUTS
            ------------------------------------------ */

            const name =
                document.querySelector("#name");

            const email =
                document.querySelector("#email");

            const subject =
                document.querySelector("#subject");

            const message =
                document.querySelector("#message");


            /* ------------------------------------------
               VALIDATION
            ------------------------------------------ */

            let isValid = true;


            /* Name */

            if (name.value.trim() === "") {

                showError(
                    name,
                    "Please enter your name."
                );

                isValid = false;

            } else {

                clearError(name);

            }


            /* Email */

            if (email.value.trim() === "") {

                showError(
                    email,
                    "Please enter your email."
                );

                isValid = false;

            }

            else if (!isValidEmail(email.value)) {

                showError(
                    email,
                    "Please enter a valid email address."
                );

                isValid = false;

            }

            else {

                clearError(email);

            }


            /* Subject */

            if (subject.value.trim() === "") {

                showError(
                    subject,
                    "Please enter a subject."
                );

                isValid = false;

            } else {

                clearError(subject);

            }


            /* Message */

            if (message.value.trim() === "") {

                showError(
                    message,
                    "Please enter your message."
                );

                isValid = false;

            }

            else if (message.value.trim().length < 10) {

                showError(
                    message,
                    "Message must contain at least 10 characters."
                );

                isValid = false;

            }

            else {

                clearError(message);

            }


            /* ------------------------------------------
               IF FORM IS VALID
            ------------------------------------------ */

            if (isValid) {

                sendMessage();

            }

        }
    );

}


/* ==================================================
   SHOW ERROR
================================================== */

function showError(
    input,
    message
) {

    const formGroup =
        input.closest(".form-group");

    const errorMessage =
        formGroup.querySelector(
            ".error-message"
        );


    formGroup.classList.add("error");

    errorMessage.textContent =
        message;

}


/* ==================================================
   CLEAR ERROR
================================================== */

function clearError(input) {

    const formGroup =
        input.closest(".form-group");

    const errorMessage =
        formGroup.querySelector(
            ".error-message"
        );


    formGroup.classList.remove("error");

    errorMessage.textContent = "";

}


/* ==================================================
   EMAIL VALIDATION
================================================== */

function isValidEmail(email) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);

}


/* ==================================================
   SEND MESSAGE
================================================== */

function sendMessage() {

    const sendButton =
        document.querySelector(".send-button");


    if (!sendButton) {
        return;
    }


    const originalText =
        sendButton.innerHTML;


    /* Loading */

    sendButton.disabled = true;

    sendButton.innerHTML =
        '<i class="fa-solid fa-spinner fa-spin"></i> SENDING...';


    /* Simulate sending */

    setTimeout(function () {

        sendButton.disabled = false;

        sendButton.innerHTML =
            originalText;


        /* Show success message */

        if (successMessage) {

            successMessage.classList.add("show");

        }


        /* Clear form */

        if (contactForm) {

            contactForm.reset();

        }


        /* Remove errors */

        const formGroups =
            document.querySelectorAll(
                ".form-group"
            );

        formGroups.forEach(
            function (group) {

                group.classList.remove(
                    "error"
                );

                const error =
                    group.querySelector(
                        ".error-message"
                    );

                if (error) {
                    error.textContent = "";
                }

            }
        );


        /* Hide success message */

        setTimeout(function () {

            if (successMessage) {

                successMessage.classList.remove(
                    "show"
                );

            }

        }, 5000);


    }, 1200);

}


/* ==================================================
   LIVE INPUT VALIDATION
================================================== */

const formInputs =
    document.querySelectorAll(
        "#contact-form input, #contact-form textarea"
    );


formInputs.forEach(function (input) {

    input.addEventListener(
        "input",
        function () {

            if (this.value.trim() !== "") {

                clearError(this);

            }

        }
    );

});


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

        navLinks.forEach(
            function (item) {

                item.classList.remove(
                    "active"
                );

            }
        );


        link.classList.add("active");

    }

});


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
                document.querySelector(
                    targetId
                );


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
   MAP BUTTON
================================================== */

const mapButton =
    document.querySelector(".map-button");


if (mapButton) {

    mapButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();


            /*
               Opens Google Maps search.
            */

            window.open(
                "https://www.google.com/maps/search/?api=1&query=Karachi+Pakistan",
                "_blank"
            );

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