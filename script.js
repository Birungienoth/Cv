/*==================================================
ENOTH BIRUNGI PORTFOLIO
==================================================*/

/*==============================
PRELOADER
==============================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/*==============================
STICKY HEADER
==============================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});

/*==============================
MOBILE MENU
==============================*/

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});

}

/*==============================
CLOSE MENU WHEN LINK IS CLICKED
==============================*/

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("active");

});

});

/*==============================
ACTIVE NAVIGATION
==============================*/

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

const sectionHeight=section.clientHeight;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#" + current){

link.classList.add("active");

}

});

});
