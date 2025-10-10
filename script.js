window.addEventListener("load", () => {
  console.log("HRG site ready 🚀");

  const openModal = (id) => {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  const closeModal = (id) => {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.remove("active");
    document.body.style.overflow = "";
  };

  document.addEventListener("click", (e) => {
    const openBtn = e.target.closest("[data-open]");
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
