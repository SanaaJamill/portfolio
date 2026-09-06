/* ==================================================
   COZA STORE - SHOP JAVASCRIPT
================================================== */


/* ==================================================
   ELEMENTS
================================================== */

const categoryButtons = document.querySelectorAll(".category");

const products = document.querySelectorAll(".product-card");

const filterButton = document.querySelector(".filter-button");

const searchButton = document.querySelector(".search-button");

const filterArea = document.querySelector(".filter-area");

const searchArea = document.querySelector(".search-area");

const searchInput = document.querySelector("#product-search");

const searchProductsButton =
    document.querySelector("#search-products");

const sortSelect =
    document.querySelector("#sort-products");

const priceFilter =
    document.querySelector("#price-filter");

const colorFilter =
    document.querySelector("#color-filter");

const wishlistButtons =
    document.querySelectorAll(".wishlist-button");

const quickViewButtons =
    document.querySelectorAll(".quick-view");


/* ==================================================
   CURRENT FILTER
================================================== */

let selectedCategory = "All Products";


/* ==================================================
   CATEGORY FILTER
================================================== */

categoryButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        event.preventDefault();


        /* Remove active class */

        categoryButtons.forEach(function (item) {

            item.classList.remove("active");

        });


        /* Add active class */

        this.classList.add("active");


        /* Get selected category */

        selectedCategory =
            this.textContent.trim();


        filterProducts();

    });

});


/* ==================================================
   FILTER PRODUCTS
================================================== */

function filterProducts() {

    const searchText =
        searchInput.value.toLowerCase().trim();


    const selectedPrice =
        priceFilter.value;


    const selectedColor =
        colorFilter.value;


    products.forEach(function (product) {

        const category =
            product.dataset.category;

        const price =
            parseFloat(product.dataset.price);

        const color =
            product.dataset.color.toLowerCase();


        const productName =
            product
                .querySelector("h3")
                .textContent
                .toLowerCase();


        /* ------------------------------------------
           CATEGORY
        ------------------------------------------ */

        let categoryMatch = true;

        if (selectedCategory !== "All Products") {

            categoryMatch =
                category === selectedCategory;

        }


        /* ------------------------------------------
           PRICE
        ------------------------------------------ */

        let priceMatch = true;


        if (selectedPrice === "0-50") {

            priceMatch =
                price >= 0 && price <= 50;

        }


        if (selectedPrice === "50-100") {

            priceMatch =
                price > 50 && price <= 100;

        }


        if (selectedPrice === "100-150") {

            priceMatch =
                price > 100 && price <= 150;

        }


        if (selectedPrice === "150+") {

            priceMatch =
                price > 150;

        }


        /* ------------------------------------------
           COLOR
        ------------------------------------------ */

        let colorMatch = true;


        if (selectedColor !== "all") {

            colorMatch =
                color === selectedColor;

        }


        /* ------------------------------------------
           SEARCH
        ------------------------------------------ */

        let searchMatch = true;


        if (searchText !== "") {

            searchMatch =
                productName.includes(searchText);

        }


        /* ------------------------------------------
           SHOW / HIDE
        ------------------------------------------ */

        if (
            categoryMatch &&
            priceMatch &&
            colorMatch &&
            searchMatch
        ) {

            product.style.display = "";

        } else {

            product.style.display = "none";

        }

    });

}


/* ==================================================
   FILTER BUTTON
================================================== */

filterButton.addEventListener("click", function () {

    filterArea.classList.toggle("show");

});


/* ==================================================
   SEARCH BUTTON
================================================== */

searchButton.addEventListener("click", function () {

    searchArea.classList.toggle("show");


    if (searchArea.classList.contains("show")) {

        searchInput.focus();

    }

});


/* ==================================================
   SEARCH
================================================== */

searchProductsButton.addEventListener(
    "click",
    function () {

        filterProducts();

    }
);


/* ==================================================
   SEARCH WITH ENTER
================================================== */

searchInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            filterProducts();

        }

    }
);


/* ==================================================
   LIVE SEARCH
================================================== */

searchInput.addEventListener(
    "input",
    function () {

        filterProducts();

    }
);


/* ==================================================
   PRICE FILTER
================================================== */

priceFilter.addEventListener(
    "change",
    function () {

        filterProducts();

    }
);


/* ==================================================
   COLOR FILTER
================================================== */

colorFilter.addEventListener(
    "change",
    function () {

        filterProducts();

    }
);


/* ==================================================
   SORT PRODUCTS
================================================== */

sortSelect.addEventListener(
    "change",
    function () {

        const sortValue =
            this.value;


        const productContainer =
            document.querySelector(".product-grid");


        const productArray =
            Array.from(products);


        /* ------------------------------------------
           LOW TO HIGH
        ------------------------------------------ */

        if (sortValue === "low") {

            productArray.sort(function (a, b) {

                const priceA =
                    parseFloat(a.dataset.price);

                const priceB =
                    parseFloat(b.dataset.price);

                return priceA - priceB;

            });

        }


        /* ------------------------------------------
           HIGH TO LOW
        ------------------------------------------ */

        if (sortValue === "high") {

            productArray.sort(function (a, b) {

                const priceA =
                    parseFloat(a.dataset.price);

                const priceB =
                    parseFloat(b.dataset.price);

                return priceB - priceA;

            });

        }


        /* ------------------------------------------
           NEWEST
        ------------------------------------------ */

        if (sortValue === "newest") {

            productArray.reverse();

        }


        /* ------------------------------------------
           ADD PRODUCTS AGAIN
        ------------------------------------------ */

        productArray.forEach(function (product) {

            productContainer.appendChild(product);

        });

    }
);


/* ==================================================
   WISHLIST
================================================== */

wishlistButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            const icon =
                this.querySelector("i");


            /* Change heart */

            icon.classList.toggle("fa-regular");

            icon.classList.toggle("fa-solid");


            /* Active class */

            this.classList.toggle("active");


            /* Update header wishlist */

            updateWishlistCount();

        }
    );

});


/* ==================================================
   WISHLIST COUNT
================================================== */

function updateWishlistCount() {

    const activeWishlist =
        document.querySelectorAll(
            ".wishlist-button.active"
        );


    const heartCount =
        document.querySelector(".heart-icon span");


    if (heartCount) {

        heartCount.textContent =
            activeWishlist.length;

    }

}


/* ==================================================
   QUICK VIEW
================================================== */

quickViewButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            const product =
                this.closest(".product-card");


            const productName =
                product.querySelector("h3")
                    .textContent;


            const productPrice =
                product.querySelector(".product-info p")
                    .textContent;


            alert(
                "Product: " +
                productName +
                "\nPrice: " +
                productPrice
            );

        }
    );

});


/* ==================================================
   HEADER CART
================================================== */

const cartIcon =
    document.querySelector(".cart-icon");


let cartCount = 0;


products.forEach(function (product) {

    const quickView =
        product.querySelector(".quick-view");


    /*
       Double click on product image
       adds product to cart
    */

    product.querySelector(".product-image")
        .addEventListener(
            "dblclick",
            function () {

                cartCount++;

                const cartNumber =
                    document.querySelector(
                        ".cart-icon span"
                    );


                if (cartNumber) {

                    cartNumber.textContent =
                        cartCount;

                }

            }
        );

});


/* ==================================================
   PAGINATION
================================================== */

const paginationPages =
    document.querySelectorAll(".pagination .page");


paginationPages.forEach(function (page) {

    page.addEventListener(
        "click",
        function (event) {

            event.preventDefault();


            paginationPages.forEach(
                function (item) {

                    item.classList.remove("active");

                }
            );


            if (
                !this.querySelector(
                    ".fa-angle-right"
                )
            ) {

                this.classList.add("active");

            }

        }
    );

});


/* ==================================================
   INITIAL FILTER
================================================== */

filterProducts();