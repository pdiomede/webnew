# Paolo Diomede - Portfolio

Personal portfolio and resume site, live at [pdiomede.com](https://pdiomede.com). Plain HTML, CSS, and vanilla JavaScript: no framework, no build step, no dependencies.

## Pages

- `index.html`: hero, current role (Hypernative), and the career journey carousel
- `education.html`: education and certifications carousel
- `projects.html`: projects carousel (Url Reporter, Magellan, HomeVault, Graph Tools Pro)

## Features

- Landing splash on the home page: a bare intro (name, subtitle, socials + email, a rotating sphere that opens into a connected-node graph on hover), framed by gradient bars down the left and right edges, that fades away on click to reveal the full site; the nav brand returns to it, deep links skip it, CSP-safe, no flash
- Light/dark theme toggle (top-right): persists the choice, follows the device setting on first visit, no flash on load
- Hover-driven hero animation: Hokusai-style waves, flying gulls, dolphins breaching every second, and a sunrise-to-sunset sky cycle (pure CSS/SVG, respects reduced motion)
- Profile photo tilts in 3D to follow the mouse pointer (skipped on touch devices and under reduced motion)
- Data-driven carousels with arrows, dots, swipe, and global keyboard navigation
- Layered logo fallback so a broken image never leaves a blank slide
- External JavaScript only (`js/`), compatible with a strict `script-src 'self'` CSP
- SEO: canonical, Open Graph, Twitter cards, JSON-LD, share image, robots.txt, sitemap.xml

## Develop

```bash
python3 -m http.server 8742   # or just: open index.html
```

Edit, refresh, done.

## Deploy

Static files. On the server: `git pull`. Live immediately.

## Version

Current: **1.2.1**. See [CHANGELOG.md](CHANGELOG.md). Architecture notes in [CLAUDE.md](CLAUDE.md); color tokens in [COLOR_PALETTE.md](COLOR_PALETTE.md).

## License

Code is released under the MIT License (see [LICENSE.md](LICENSE.md)). Site content, copy, and images are owned by Paolo Diomede.
