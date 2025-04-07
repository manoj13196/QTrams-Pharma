document.addEventListener("DOMContentLoaded", () => {
  const teamCards = document.querySelectorAll(".team-card");
  const modal = document.getElementById("team-modal");
  const closeModal = modal?.querySelector(".close-btn");

  if (teamCards && modal && closeModal) {
    teamCards.forEach((card) => {
      card.addEventListener("click", () => {
        modal.classList.remove("hidden");
      });
    });

    closeModal.addEventListener("click", () => {
      modal.classList.add("hidden");
    });

    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.classList.add("hidden");
      }
    });
  }
});
