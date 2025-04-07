document.addEventListener("DOMContentLoaded", () => {
  const enrollButtons = document.querySelectorAll(".enroll-btn");
  const modal = document.getElementById("enroll-modal");
  const closeModal = modal?.querySelector(".close-modal");
  const programInput = document.getElementById("program");
  const programNameHeading = document.getElementById("selected-program-name");
  const enrollForm = document.getElementById("enroll-form");

  // Check if modal and close button exist
  if (modal && closeModal) {
    enrollButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const card = e.target.closest(".training-card");
        const title = card.querySelector("h3").innerText.trim();

        programInput.value = title;
        programNameHeading.textContent = title;

        modal.classList.remove("hidden");
      });
    });

    closeModal.addEventListener("click", () => {
      modal.classList.add("hidden");
      enrollForm.reset();
      clearErrors();
    });

    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.classList.add("hidden");
        enrollForm.reset();
        clearErrors();
      }
    });
  } else {
    console.warn("Modal or close button not found in the DOM.");
  }

  // Clear all previous error messages and invalid highlights
  function clearErrors() {
    const errorFields = document.querySelectorAll(".error-msg");
    errorFields.forEach((el) => {
      el.style.display = "none";
      el.textContent = "";
    });

    const inputs = enrollForm.querySelectorAll("input, textarea");
    inputs.forEach((el) => el.classList.remove("invalid"));
  }

  // Validation regex
  const nameRegex = /^[a-zA-Z\s]{2,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;

  // Form validation logic
  enrollForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual form submission

    clearErrors();

    let hasError = false;

    // Full Name validation
    const fullName = document.getElementById("fullName");
    const nameError = document.getElementById("error-fullName");
    if (!fullName.value.trim()) {
      nameError.textContent = "Full name is required.";
      nameError.style.display = "block";
      fullName.classList.add("invalid");
      hasError = true;
    } else if (!nameRegex.test(fullName.value.trim())) {
      nameError.textContent = "Name must be at least 2 letters (only letters allowed).";
      nameError.style.display = "block";
      fullName.classList.add("invalid");
      hasError = true;
    }

    // Email validation
    const email = document.getElementById("email");
    const emailError = document.getElementById("error-email");
    if (!email.value.trim()) {
      emailError.textContent = "Email is required.";
      emailError.style.display = "block";
      email.classList.add("invalid");
      hasError = true;
    } else if (!emailRegex.test(email.value.trim())) {
      emailError.textContent = "Please enter a valid email address (e.g., abc@domain.com).";
      emailError.style.display = "block";
      email.classList.add("invalid");
      hasError = true;
    }

    // Phone validation
    const phone = document.getElementById("phone");
    const phoneError = document.getElementById("error-phone");
    if (!phone.value.trim()) {
      phoneError.textContent = "Phone number is required.";
      phoneError.style.display = "block";
      phone.classList.add("invalid");
      hasError = true;
    } else if (!phoneRegex.test(phone.value.trim())) {
      phoneError.textContent = "Phone number must be exactly 10 digits.";
      phoneError.style.display = "block";
      phone.classList.add("invalid");
      hasError = true;
    }

    // Program validation (should already be set via button click)
    // const program = document.getElementById("program");
    // const programError = document.getElementById("error-program");
    // if (!program.value.trim()) {
    //   programError.textContent = "Program field is required.";
    //   programError.style.display = "block";
    //   program.classList.add("invalid");
    //   hasError = true;
    // }

    // Message validation
    const message = document.getElementById("message");
    const messageError = document.getElementById("error-msg");
    if (!message.value.trim()) {
      messageError.textContent = "Please explain your interest with atleast 10 characters.";
      messageError.style.display = "block";
      message.classList.add("invalid");
      hasError = true;
    } else if (message.value.trim().length < 10) {
      messageError.textContent = "Message must be at least 10 characters.";
      messageError.style.display = "block";
      message.classList.add("invalid");
      hasError = true;
    }

    // Consent checkbox
    const consentCheckbox = enrollForm.querySelector('input[type="checkbox"]');
    if (!consentCheckbox.checked) {
      alert("Please agree to be contacted.");
      hasError = true;
    }

    // If all validation passes
    if (!hasError) {
      alert("Enrollment submitted successfully!");
      enrollForm.reset();
      modal.classList.add("hidden");
    }
  });
});
