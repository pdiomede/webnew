# Paolo Diomede - Portfolio

A personal portfolio and resume site for Paolo Diomede, styled after a LinkedIn profile. Securing and growing web3 through technical excellence and ecosystem leadership.

## Overview

A static, multi-page site built with plain HTML, CSS, and a small amount of vanilla JavaScript. There is no build step, no framework, and no dependencies: each page is a self-contained file you can open directly in a browser.

## Pages

| Page | Content |
| --- | --- |
| `index.html` | Hero, the current role card (Certora), and "The Journey So Far" career carousel |
| `education.html` | Hero and the "Education & Certifications" carousel (Harvard Business School Online, University of L'Aquila) |
| `projects.html` | Hero and a "Coming Soon" placeholder |

The top navigation (Current Role, Journey, Projects, Education) is shared across all pages, and the brand logo links back to the home page.

## Features

- **Animated hero banner** (hover-driven, pure CSS/SVG): layered Hokusai-style waves that drift and heave, gulls that fly across after a moment, and a sunrise-to-sunset sky that cycles through the day. Everything pauses when not hovered and respects `prefers-reduced-motion`.
- **Avatar fireworks** on hover, built from animated `box-shadow` particles.
- **Data-driven carousels**: experience and education entries live in JavaScript arrays and render into scroll-snap carousels with arrow buttons, dots, sideways scrolling, and full keyboard navigation (Left/Right arrows work anywhere on the page).
- **Resilient logos**: each entry resolves its logo through a layered fallback (local file, then live fetch, then a colored monogram) so a broken image never leaves a blank slide. Logos and names link to each institution.
- **Responsive** layout with mobile breakpoints, and basic accessibility (labeled controls, reduced-motion support).

## Tech stack

Vanilla HTML + CSS + JavaScript. No package manager, no bundler, no tests. All styling is inline in each page's `<style>` block; theme colors are CSS custom properties on `:root`.

## Local development

Open a file directly:

```bash
open index.html
```

Or serve the folder with any static server:

```bash
python3 -m http.server 8742
# then visit http://localhost:8742
```

Edit the HTML file and refresh the browser to see changes.

## Deployment

The site is served as static files (for example from an nginx VPS). To deploy updates:

```bash
cd /path/to/site && git pull
```

No build or restart is needed; static files go live immediately.

## Project structure

```
.
├── index.html        # home: hero, current role, journey carousel
├── education.html    # education & certifications carousel
├── projects.html     # projects placeholder
├── js/               # per-page JavaScript (external, CSP-friendly)
│   ├── index.js
│   ├── education.js
│   └── projects.js
├── images/           # logos, photo, favicons
├── CLAUDE.md         # architecture notes and conventions
└── README.md
```

The JavaScript lives in external files (not inline) so the site works under a strict `script-src 'self'` Content-Security-Policy.

See `CLAUDE.md` for detailed architecture notes, the hero-animation internals, and content conventions.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for release notes. Current version: **1.0.0**.

## License

Personal project. Content and images are owned by Paolo Diomede.
