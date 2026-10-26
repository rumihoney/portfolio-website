// Light/dark modes

// Select HTML elements
const toggleBackgroundButton = document.getElementById("toggle-background");
const navbar = document.querySelector(".navbar");
const navbarLinks = document.querySelectorAll(".navbar a");

const textElements = document.querySelectorAll(
  ".hero h1, .hero-description, .hero > p, .social-links a, .technology-list li, .project-item p, .project-item a, .contact-text, footer",
);

const darkElements = document.querySelectorAll(
  ".contact-form input, .contact-form textarea, .contact-form button, .more-projects",
);

let isLightMode = false; // Dark mode is the default

// Toggle between light and dark mode
if (toggleBackgroundButton) {
  toggleBackgroundButton.addEventListener("click", function () {
    if (isLightMode) {
      // Dark mode: Restore original CSS colors
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
      navbar.style.backgroundColor = "";

      navbarLinks.forEach(function (link) {
        link.style.color = "";
      });

      textElements.forEach(function (element) {
        element.style.color = "";
      });

      darkElements.forEach(function (element) {
        element.style.backgroundColor = "";
        element.style.color = "";
      });

      isLightMode = false;
    } else {
      // Light mode: Apply new colors
      document.body.style.backgroundColor = "lightgrey";
      document.body.style.color = "black";
      navbar.style.backgroundColor = "#777";

      navbarLinks.forEach(function (link) {
        link.style.color = "white";
      });

      textElements.forEach(function (element) {
        element.style.color = "#333";
      });

      darkElements.forEach(function (element) {
        element.style.backgroundColor = "#eee";
        element.style.color = "black";
      });

      isLightMode = true;
    }
  });
}

// submit button in contact section

// fr/en options
