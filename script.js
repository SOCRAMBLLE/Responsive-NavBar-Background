// Select header and first section
const header = document.querySelector("header");
const sectionOne = document.querySelector(".section-one");

// add a rootmargin to sectionOne intersection
const sectionOneOptions = {
    rootMargin: "-200px 0px 0px 0px"
  };
  
// Observe when header passes sectionOne and change background
const sectionOneObserver = new IntersectionObserver(function(
    entries,
    sectionOneObserver
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.add("nav-scrolled");
      } else {
        header.classList.remove("nav-scrolled");
      }
    });
  },
  sectionOneOptions);
  
  sectionOneObserver.observe(sectionOne);