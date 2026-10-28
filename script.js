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

// fr/en toggle
const toggleLanguageButton = document.getElementById("toggle-language");
const fr = document.getElementById("fr");
const en = document.getElementById("en");

// select all elements that need translation
const translatableElements = document.querySelectorAll("[data-translate]");

// Save original English text from HTML
const englishText = {};

translatableElements.forEach(function (element) {
  const key = element.dataset.translate;
  englishText[key] = element.innerHTML;
});

// translate content object
const translations = {
  // navbar
  home: "Accueil",
  projects: "Projets",
  contact: "Contact",
  // header
  greeting: "Salut, c'est Rumi.",
  title: "Diplômée en linguistique<br />et développeuse de logiciels",
  description:
    "J’explore les connexions entre les langues, la technologie ainsi que les données à travers la linguistique informatique et le développement de logiciels.",
  // project section
  myWork: "Mes projets",
  project1:
    "Emprunts lexicaux de russe en géorgien : analyse de données linguistiques",
  project2: "Générateur de personnages par IA",
  project3: "Application d'apprentissage du darija",
  inDevelopment: "En développement",
  deployed: "Déployé",
  moreProjects: "Plus de projets sur GitHub",
  // contact section
  letsTalk: "Discutons",
  availability:
    "Disponible pour des travaux indépendants et des postes à temps plein.",
  submit: "Envoyer",
  // footer
  copyright: "Copyright © 2026 Roumaissaa Lassal — Tous droits réservés",
  icons: "Icônes par Font Awesome et Devicon.",
};

// Select form placeholders
const nameInput = document.querySelector('.contact-form input[type="text"]');
const emailInput = document.querySelector('.contact-form input[type="email"]');
const messageInput = document.querySelector(".contact-form textarea");

// Save original English placeholders
const englishPlaceholders = {
  name: nameInput.placeholder,
  email: emailInput.placeholder,
  message: messageInput.placeholder,
};

let isFrench = false; // English is the default language

if (toggleLanguageButton) {
  toggleLanguageButton.addEventListener("click", function () {
    if (isFrench) {
      //switch to English
      translatableElements.forEach(function (element) {
        const key = element.dataset.translate;
        element.innerHTML = englishText[key];
      });

      nameInput.placeholder = englishPlaceholders.name;
      emailInput.placeholder = englishPlaceholders.email;
      messageInput.placeholder = englishPlaceholders.message;

      fr.classList.remove("active");
      en.classList.add("active");

      document.documentElement.lang = "en";
      isFrench = false;
    } else {
      // Switch to French
      translatableElements.forEach(function (element) {
        const key = element.dataset.translate;

        if (translations[key] !== undefined) {
          element.innerHTML = translations[key];
        }
      });

      nameInput.placeholder = "Nom";
      emailInput.placeholder = "Courriel";
      messageInput.placeholder = "Message";

      en.classList.remove("active");
      fr.classList.add("active");

      document.documentElement.lang = "fr";
      isFrench = true;
    }
  });
}

// submit button in contact section
