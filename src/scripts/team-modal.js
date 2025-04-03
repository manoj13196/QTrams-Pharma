document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".team-card");
    const modal = document.getElementById("team-modal");
    const modalImage = document.getElementById("modal-image");
    const modalName = document.getElementById("modal-name");
    const modalRole = document.getElementById("modal-role");
    const modalBio = document.getElementById("modal-bio");
    const closeBtn = document.querySelector(".close-btn");
  
    cards.forEach(card => {
      card.addEventListener("click", () => {
        modalImage.src = card.dataset.image;
        modalName.textContent = card.dataset.name;
        modalRole.textContent = card.dataset.role;
        modalBio.textContent = card.dataset.bio;
        modal.classList.remove("hidden");
      });
    });
  
    closeBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.add("hidden");
      }
    });
  });
  