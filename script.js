```javascript
/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("show");

});


/* =========================================
   CLOSE MOBILE MENU
   WHEN A LINK IS CLICKED
========================================= */

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("show");

    });

});


/* =========================================
   CONTACT FORM
========================================= */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Thank you! Your message has been received.");

    contactForm.reset();

});


/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

const header = document.querySelector("header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.style.background = "rgba(5, 5, 5, 0.98)";

    } else {

        header.style.background = "rgba(8, 8, 8, 0.95)";

    }

});


/* =========================================
   REVEAL SECTIONS ON SCROLL
========================================= */

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.1
    }

);


sections.forEach(function (section) {

    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(section);

});


/* =========================================
   ACTIVE NAVIGATION LINK
========================================= */

const pageSections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", function () {

    let currentSection = "";

    pageSections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });


    navItems.forEach(function (link) {

        link.style.color = "#ddd";

        if (link.getAttribute("href") === "#" + currentSection) {

            link.style.color = "#ff5722";

        }

    });

});
```
