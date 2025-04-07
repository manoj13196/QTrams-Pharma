document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("general-application-form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Form submitted successfully!");
    });
  }
});
