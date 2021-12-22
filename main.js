"use strict";
const navbarMenu = document.querySelector(".navbar__menu");
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
const contact = document.querySelector("#contact");
const home = document.querySelector("#home");
const about = document.querySelector("#about");
const work = document.querySelector("#work");
const skills = document.querySelector("#skills");
const testimonails = document.querySelector("#testimonials");
const homeBtn = document.querySelector(".home__btn");
const arrowBtn = document.querySelector(".arrowBtn");

// Make navbar transparent when it is on the top
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

//Handle homeBtn and scrolling when tapping on the navbar menu
homeBtn.addEventListener("click", (e) => {
  scrollIntoView("#contact");
});

navbarMenu.addEventListener("click", (e) => {
  const target = e.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  scrollIntoView(link);
});

//Make home transparent when window scroll down
const homeContainer = document.querySelector(".home__container");
const homeHeight = homeContainer.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  const homeOpacity = 1 - window.scrollY / homeHeight;
  homeContainer.style.opacity = homeOpacity;
});

//Make ArrowButton possible when scroll down
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowBtn.classList.add("visible");
  } else arrowBtn.classList.remove("visible");
});
arrowBtn.addEventListener("click", (e) => {
  scrollIntoView("#home");
});

function scrollIntoView(selector) {
  const item = document.querySelector(selector);
  window.scrollTo({ top: item.offsetTop, behavior: "smooth" });
}
