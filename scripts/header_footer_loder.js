// Define basePath globally
window.basePath =
  window.location.hostname === "manoj13196.github.io" ? "/QTrams-Pharma/" : "/";

// Load header and footer dynamically
window.addEventListener("DOMContentLoaded", () => {
  loadComponent(
    `${basePath}components/header.html`,
    "header-placeholder",
    initHeaderScripts
  );
  loadComponent(`${basePath}components/footer.html`, "footer-placeholder");
});


function loadComponent(file, elementId, callback) {
  fetch(file)
    .then((response) => {
      if (!response.ok) {  
        throw new Error(`Cannot fetch ${file}: ${response.statusText}`);
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
      if (typeof callback === "function") callback();
    })
    .catch((error) => console.error("Error loading component:", error));
}

function initHeaderScripts() {
  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // Dropdowns
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const link = dropdown.querySelector("a");

    link.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();

        // Close other open dropdowns
        dropdowns.forEach((d) => {
          if (d !== dropdown) {
            d.classList.remove("open");
          }
        });

        // Toggle this dropdown
        dropdown.classList.toggle("open");
      }
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".dropdown")) {
      dropdowns.forEach((d) => d.classList.remove("open"));
    }
  });

  // Highlight current page in nav
  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.classList.remove("active"); // Remove active class from all links
    if (currentPage === "" || currentPage === "index.html") {
      // Default to home if no specific page is detected
      document.getElementById("nav-home").classList.add("active");
    } else if (currentPage.includes("industry")) {
      // Highlight "Industry" for any industry-related page
      document.getElementById("nav-industry").classList.add("active");
    } else if (link.getAttribute("href").includes(currentPage)) {
      link.classList.add("active");
    }
  });
}
