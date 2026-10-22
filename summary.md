# Portfolio Website — Progress Summary

## Wins

- Built a one-page portfolio from scratch using HTML and CSS, inspired by [ThemeWagon's Dark Minimal template](https://preview.themewagon.com/dark-minimal/), with my own code and customizations.
- Organized the Home, Projects, and Contact sections using semantic HTML (`header`, `nav`, `main`, `section`, `article`, `footer`) and Flexbox instead of CSS Grid.
- Created a two-column hero section with my introduction, title, and interests, using Google's _Manrope_ font.
- Added a custom OpenMoji robot favicon, changed the browser title to "Rumi", and included a footer with copyright and icon credits.
- Built a rounded, sticky navbar with my name, working section links using HTML IDs, a blurred background, and white-to-gray hover effects.
- Added GitHub, LinkedIn, and email buttons with Font Awesome icons, using `target="_blank"` for external links and `mailto:` for email.
- Created a technology list featuring Python, pandas, Jupyter Notebook, HTML, CSS, Git, and JavaScript.
- Used Devicon for the original technology logos and colors, replacing Python and pandas icons with SVG images for a better look. Removed NLTK because it lacked a suitable logo.
- Made the technology list scroll infinitely using CSS `@keyframes` and duplicated HTML elements instead of JavaScript, with a gradient mask to fade the icons at both edges.

## Difficulties

- **CSS alignment:** Getting text, buttons, and project cards to line up properly with Flexbox took a lot of trial and error.
- **Responsive design:** Making everything look good on mobile has been my biggest challenge so far. Still working on it!
- **Icons:** Some icons wouldn't show up, while others had the wrong colors or didn't look right.
- **CSS animations:** Figuring out how to make the technology list scroll continuously without JavaScript took some experimenting.
- **GitHub Pages:** Ran into failed deployments and broken live demo links. I also accidentally had a duplicate folder being treated as a Git submodule, which caused a whole mess.
- **Design consistency:** Getting the spacing, fonts, colors, and styling to look consistent across the website was trickier than I expected.
- **Learning new CSS properties:** Had to figure out how properties like `mask-image`, `flex-wrap`, `position: sticky`, and `backdrop-filter` work.

## Future Improvements / Ideas

- Add light/dark mode and French/English translations.
- Highlight the active navbar link with a blue circle.
- Add blue hover effects to project cards.
- Create a "What I Do" skills section.
- Use JavaScript loops instead of duplicating the technology list.
- Replace placeholder images with actual project screenshots.
- Finish the mobile layout and make the contact form functional.
