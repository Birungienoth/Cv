/*==================================================
  ENOTH BIRUNGI PORTFOLIO
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==============================================
      AOS
    ==============================================*/

    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 900,
            once: true,
            easing: "ease-in-out"
        });
    }

    /*==============================================
      STICKY HEADER
    ==============================================*/

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 60) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }

    });

    /*==============================================
      MOBILE MENU
    ==============================================*/

    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            navLinks.classList.toggle("show");

        });

    }

    /*==============================================
      CLOSE MENU AFTER CLICK
    ==============================================*/

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("show");

        });

    });

    /*==============================================
      SMOOTH SCROLL
    ==============================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                window.scrollTo({

                    top: target.offsetTop - 80,

                    behavior: "smooth"

                });

            }

        });

    });

    /*==============================================
      ACTIVE NAVIGATION
    ==============================================*/

    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight) {

                current = section.getAttribute("id");

            }

        });

        navItems.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    /*==============================================
      COUNTER ANIMATION
    ==============================================*/

    const counters = document.querySelectorAll(".counter");

    const counterObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const counter = entry.target;

                const target = +counter.dataset.target;

                let count = 0;

                const speed = target / 80;

                const updateCounter = () => {

                    count += speed;

                    if (count < target) {

                        counter.innerText = Math.ceil(count);

                        requestAnimationFrame(updateCounter);

                    } else {

                        counter.innerText = target + "+";

                    }

                };

                updateCounter();

                counterObserver.unobserve(counter);

            }

        });

    }, {

        threshold: 0.6

    });

    counters.forEach(counter => {

        counterObserver.observe(counter);

    });

    /*==============================================
      SCROLL TO TOP
    ==============================================*/

    const scrollBtn = document.getElementById("scrollTop");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            scrollBtn.classList.add("show");

        } else {

            scrollBtn.classList.remove("show");

        }

    });

    if (scrollBtn) {

        scrollBtn.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /*==============================================
      DARK MODE
    ==============================================*/

    const themeBtn = document.getElementById("theme-toggle");

    if (themeBtn) {

        themeBtn.addEventListener("click", () => {

            document.body.classList.toggle("dark-mode");

            const icon = themeBtn.querySelector("i");

            if (document.body.classList.contains("dark-mode")) {

                icon.classList.remove("fa-moon");

                icon.classList.add("fa-sun");

            } else {

                icon.classList.remove("fa-sun");

                icon.classList.add("fa-moon");

            }

        });

    }

});
