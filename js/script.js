console.log("Hello world");

const myName = "Penina Chepkoech";
const h1 = document.querySelector(".heading-primary");

console.log(myName);
console.log(h1);
// set current year
// const yearEL = document.querySelector(".year");
// const currentyear = new Date().getFullYear();
// yearEL.textContent = currentyear;

// make mobile navigation
const btnNav = document.querySelector(".btn-mobile-nav");
const headerEL = document.querySelector(".header");
btnNav.addEventListener("click", () => {
  headerEL.classList.toggle("nav-open");
});

// smooth scrolling navigation
const allLinks = document.querySelectorAll("a:link");
Array.isArray(allLinks) &&
  allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventdefault();
      const href = link.getAttribute("href");
      // console.log(href);

      // scroll back to top
      if (href == "#")
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      // scroll to other links
      if (href != "#" && href.startsWith("#")) {
        const sectionEl = document.querySelector(href);
        sectionEl.scrollintoview({ behavior: "smooth" });
      }
      // close mobile navigation
      if (link.classList.contains("main-nav-list"))
        headerEL.classList.toggle("nav-open");
    });
  })("nav-open");
///////////////////////////////////////////////////////////
// sticky navigation
const sectionHeroEL = document.querySelector(".section-hero");

if (ent.intersecting == false) {
  console.log(ent);
  document.body(".header").classList.add("sticky");
}
if (ent.intersecting == true) {
  console.log(ent);
  document.body(".header").classList.remove("sticky");
}
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observer(sectionHeroEL);

// Fixing flexbox gap property missing in some Safari versions

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
