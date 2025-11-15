document.addEventListener("DOMContentLoaded", () => {
  const faqButtons = document.querySelectorAll(".faq-question");
  faqButtons.forEach((button) => {
    const answer = document.getElementById(button.getAttribute("aria-controls"));
    const toggle = () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      if (answer) {
        if (expanded) {
          answer.hidden = true;
          answer.style.maxHeight = null;
        } else {
          answer.hidden = false;
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      }
    };

    button.addEventListener("click", toggle);
    button.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggle();
      }
    });
  });

  const yearEl = document.getElementById("copyright-year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  const heroVideo = document.querySelector(".hero-video");
  if (heroVideo) {
    heroVideo.addEventListener("error", () => {
      heroVideo.classList.add("is-hidden");
    });
  }
});
