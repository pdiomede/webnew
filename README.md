# Paolo Diomede - Portfolio

Personal portfolio and resume site, live at [pdiomede.com](https://pdiomede.com). Plain HTML, CSS, and vanilla JavaScript: no framework, no build step, no dependencies.

## Pages

- `index.html`: hero, current role (Certora), and the career journey carousel
- `education.html`: education and certifications carousel
- `projects.html`: projects carousel (Url Reporter, Magellan, HomeVault, Graph Tools Pro)

## Features

- Hover-driven hero animation: Hokusai-style waves, flying gulls, and a sunrise-to-sunset sky cycle (pure CSS/SVG, respects reduced motion)
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

Current: **1.3.2**. See [CHANGELOG.md](CHANGELOG.md). Architecture notes in [CLAUDE.md](CLAUDE.md).

## License

Personal project. Content and images are owned by Paolo Diomede.
