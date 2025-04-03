document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("general-application-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Simulate successful form submission
    alert("Application submitted successfully!");

    // Reset form fields
    form.reset();
  });
});
