window.addEventListener("load", () => {

  console.log("HRG site ready 🚀");

  const openModal = (id) => document.getElementById(id)?.classList.add("active");
  const closeModal = (id) => document.getElementById(id)?.classList.remove("active");

  // Open modal buttons
  document.querySelectorAll("[data-open]").forEach(btn => {
    btn.addEventListener("click", () => openModal(btn.dataset.open));
  });

  // Close modal buttons and overlays
  document.querySelectorAll("[data-close]").forEach(btn => {
    btn.addEventListener("click", () => closeModal(btn.dataset.close));
  });

  // Inline thank-you confirmation
  document.querySelectorAll("form").forEach(form => {
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
