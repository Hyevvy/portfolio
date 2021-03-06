"use strict";
const navbarMenu = document.querySelector(".navbar__menu");
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
const contact = document.querySelector("#contact");
const home = document.querySelector("#home");
const about = document.querySelector("#about");
const work = document.querySelector("#work");
const skills = document.querySelector("#skills");
const testimonials = document.querySelector("#testimonials");
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
  navbarMenu.classList.remove('open');
  scrollIntoView(link);
});


/*Navbar toggle button for small screen*/
const toggleBtn = document.querySelector('.navbar__toggle-btn');

toggleBtn.addEventListener('click', (e)=>{
  navbarMenu.classList.toggle('open');
})

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

//Make categories work
const workCategory = document.querySelector(".work__categories");
const categories = document.querySelectorAll(".category__btn");
const projects = document.querySelectorAll(".project");
const projectContainer = document.querySelector(".work__projects");

workCategory.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  //Remove selection from the previous item and select the new one;
  const active = document.querySelector(".category__btn.selected");
  active.classList.remove("selected");
  const target = e.target.nodeName == "BUTTON" ? e.target : e.target.parentNode;
  target.classList.add("selected");

  projectContainer.classList.add("anim-out");
  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === "*" || filter === project.dataset.type) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
    projectContainer.classList.remove("anim-out");
  }, 300);
});


//Make navbar highlight when scroll 

function scrollIntoView(selector) {
  const item = document.querySelector(selector);
  window.scrollTo({ top: item.offsetTop, behavior: "smooth" });
}

