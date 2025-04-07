document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contactForm');
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const emailPattern = /^\S+@\S+\.\S+$/;
        let valid = true;

        const errorMessages = document.querySelectorAll('.error-msg');
        errorMessages.forEach((el) => (el.textContent = ''));

        // Validate Name
        if (name === '') {
            errorMessages[0].textContent = "Name should not be empty!";
            valid = false;
        }

        // Validate Email
        if (email === '' || !emailPattern.test(email)) {
            errorMessages[1].textContent = "Enter a valid email address (e.g., abc@domain.com).";
            valid = false;
        }

        // Validate Message
        if (message === '' || message.length < 10) {
            errorMessages[2].textContent = "Message should be at least 10 characters long.";
            valid = false;
        }

        // If all fields are valid
        if (valid) {
            alert("Form submitted successfully!");
            form.reset();
        }
    });
});