"use strict";
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
const contact = document.querySelector("#contact");
const home = document.querySelector("#home");
const about = document.querySelector("#about");
const work = document.querySelector("#work");
const skills = document.querySelector("#skills");
const testimonails = document.querySelector("#testimonials");

// Make navbar transparent when it is on the top
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

//Handle scrolling when tapping on the navbar menu
const homeBtn = document.querySelector(".home__btn");
homeBtn.addEventListener("click", (e) => {
  window.scrollTo({ top: contact.offsetTop, behavior: "smooth" });
});
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (e) => {
  const target = e.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  const item = document.querySelector(link);
  window.scrollTo({ top: item.offsetTop, behavior: "smooth" });
});
