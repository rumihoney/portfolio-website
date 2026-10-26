// Light/dark modes

// Select HTML elements
const toggleBackgroundButton = document.getElementById("toggle-background");
const navbar = document.querySelector(".navbar");
const navbarLinks = document.querySelectorAll(".navbar a");

// Select text elements
const textElements = document.querySelectorAll(
  ".hero h1, .hero-description, .hero > p, .social-links a, .technology-list li, .project-item p, .project-item a, .contact-text, footer",
);

// Select elements with dark backgrounds
const darkElements = document.querySelectorAll(
  ".contact-form input, .contact-form textarea, .contact-form button, .more-projects",
);

// Select sun/moon icons
const sunIcon = document.querySelector(".fa-sun");
const moonIcon = document.querySelector(".fa-moon");

let isLightMode = false; // Dark mode is the default

// Toggle between light and dark mode
if (toggleBackgroundButton) {
  toggleBackgroundButton.addEventListener("click", function () {
    if (isLightMode) {
      // Dark mode: Restore original CSS colors
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
      navbar.style.backgroundColor = "";

      // Restore original navbar link colors
      navbarLinks.forEach(function (link) {
        link.style.color = "";
      });

      // Restore original text colors
      textElements.forEach(function (element) {
        element.style.color = "";
      });

      // Restore original background and text colors
      darkElements.forEach(function (element) {
        element.style.backgroundColor = "";
        element.style.color = "";
      });

      // Update sun/moon icons
      sunIcon.classList.add("inactive");
      moonIcon.classList.remove("inactive");

      isLightMode = false;
    } else {
      // Light mode: Apply new colors
      document.body.style.backgroundColor = "lightgrey";
      document.body.style.color = "black";
      navbar.style.backgroundColor = "#777";

      // Change navbar link colors
      navbarLinks.forEach(function (link) {
        link.style.color = "white";
      });

      // Change text colors
      textElements.forEach(function (element) {
        element.style.color = "#333";
      });

      // Change background and text colors
      darkElements.forEach(function (element) {
        element.style.backgroundColor = "#eee";
        element.style.color = "black";
      });

      // Update sun/moon icons
      sunIcon.classList.remove("inactive");
      moonIcon.classList.add("inactive");

      isLightMode = true;
    }
  });
}

// submit button in contact section

// fr/en options
