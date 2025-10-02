// Reveal animations on scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const trigger = window.innerHeight / 1.2;

    if (sectionTop < trigger) {
      section.classList.add("visible");
    }
  });
});
