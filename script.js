// script.js
document.addEventListener("DOMContentLoaded", () => {
  console.log("HRG site ready 🚀");

  const openModal  = (id) => document.getElementById(id)?.classList.add("active");
  const closeModal = (id) => document.getElementById(id)?.classList.remove("active");

  // --- Event delegation: works even if elements load later or change ---
  document.addEventListener("click", (e) => {
    const openBtn  = e.target.closest("[data-open]");
    const closeBtn = e.target.closest("[data-close]");

    if (openBtn) {
      const id = openBtn.dataset.open;
      if (id) openModal(id);
      e.preventDefault();
      return;
    }

    if (closeBtn) {
      const id = closeBtn.dataset.close;
      if (id) closeModal(id);
      e.preventDefault();
      return;
    }
  });

  // Inline thank-you confirmation
  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fields = form.querySelector(".form-fields");
      const thanks = form.querySelector(".thank-you");
      if (fields && thanks) {
        fields.style.display = "none";
        thanks.style.display = "block";
      }
    });
  });
});
