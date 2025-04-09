document.addEventListener("DOMContentLoaded", function () {
    // Toggle nav on mobile
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

    // Dropdown toggle on mobile
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector("a");

        link.addEventListener("click", function (e) {
            // Prevent default anchor click
            e.preventDefault();

            // Close other open dropdowns
            dropdowns.forEach(d => {
                if (d !== dropdown) {
                    d.classList.remove("open");
                }
            });

            // Toggle the current dropdown
            dropdown.classList.toggle("open");
        });
    });

    // Optional: Close dropdown if clicking outside
    document.addEventListener("click", function (e) {
        if (!e.target.closest(".dropdown")) {
            document.querySelectorAll(".dropdown").forEach(dropdown => {
                dropdown.classList.remove("open");
            });
        }
    });
});

