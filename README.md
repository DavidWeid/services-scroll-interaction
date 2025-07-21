# Scroll Animations Testing Ground

This project is created from a video inspiration using HTML, CSS, and Javascript. Additionally, it uses TailwindCSS and AstroJS for scaffolding. Here are some of the things considered during build:

- Components and templates: There are two components: `Nav` and `Details`, and there is one template `Layout` that's used by the page (`index`)
  - `index.astro` has `script` and `style` blocks, which is acceptable practice with AstroJS due to how the framework scopes and proccesses these. In a different setting, these could be moved out into separate places as needed
- Accessibility and semantic HTML considerations
  - There are native elements where possible: `nav`, `main`, `section`, `details` with `summary`
  - You can tab through interactive elements (nav items and details)
  - The page has 1 `h1` with an `aria-label` because the content of the `h1` is split into `span` encased characters for the animated effect
  - The page has 2 `h2` elements for each main section ("Front End Services" and "Back End Services")
  - Animations are turned off if the user prefers reduced motion and the SVG animation is paused when the browser tab loses focus
  - An blurred background was added to the main content to help with readability, especially with the background SVG
- Performance and SEO
  - In `Layout` we preload the 3 font files in use
  - A meta title and description are passed into `Layout` for SEO
  - Other SEO meta data is set (url, locale, site_name, type)
- Animation: The main text animation is done through CSS and IntersectionObserver

## Installation

To setup this project and install it's tools/dependencies run the
following command(s):

```
npm install
```

## Running locally

To run this project locally as a static-webpage, run the following command(s):

```
npm run dev
```

## Future improvements

- OG image
- Host this on a domain (such as AWS Amplify or GitHub Pages, which is relatively simple)
- Make it responsive (tablet and mobile devices)
- Organize CSS and JS as needed - both could be removed from the `index.astro` file, but Astro scopes these to the component, which makes sense in this setting
- Abstraction of page content data into a content file (more applicable for a larger site)
- Browser compatibility tests, performance tests
- Analytics (such as Google Analytics)
