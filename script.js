const footer = document.querySelector("#site-footer");
const pattern = document.querySelector(".footer-pattern");

const observer = new IntersectionObserver(([entry]) => {
  pattern.classList.toggle("visible", entry.isIntersecting);
});

observer.observe(footer);

const header = document.querySelector("#site-header");
const headerPattern = document.querySelector(".header-pattern");

const headerObserver = new IntersectionObserver(([entry]) => {
  headerPattern.classList.toggle("visible", entry.isIntersecting);
});

headerObserver.observe(header);