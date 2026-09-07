/* ================================
   ABOUT SECTION SCROLL REVEAL
================================ */

document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector(".about-intro");

  if (!aboutSection) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");

          // Stop observing after the animation runs.
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  observer.observe(aboutSection);
});


/* ================================
   OPTIONAL: MOUSE PARALLAX EFFECT
================================ */

document.addEventListener("mousemove", (event) => {
  const aboutSection = document.querySelector(".about-intro");

  if (!aboutSection) {
    return;
  }

  const rect = aboutSection.getBoundingClientRect();

  // Only activate while the section is visible.
  if (rect.bottom < 0 || rect.top > window.innerHeight) {
    return;
  }

  const x = (event.clientX - window.innerWidth / 2) * 0.002;
  const y = (event.clientY - window.innerHeight / 2) * 0.002;

  aboutSection.style.setProperty(
    "--mouse-x",
    `${x}px`
  );

  aboutSection.style.setProperty(
    "--mouse-y",
    `${y}px`
  );
});
