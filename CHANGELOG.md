# Changelog

Notable changes, newest first. Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/); versioning: [SemVer](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-06-13
- **Added:** landing splash on the home page — a bare intro (name set in the Oswald webfont, a current-role line, a smaller italic "by night" line, a star-marked italic previous-roles line, social + email icons, and a rotating sphere that opens into a connected-node graph) that fades on click to reveal the full site. A `position:fixed` overlay over the unchanged page (content stays in the DOM, so SEO and URLs are intact) driven by `js/landing.js` (CSP-safe, no flash); light-locked and reduced-motion aware. The nav brand returns to it; deep links skip it.
- **Added:** email icon (`mailto:me@pdiomede.com`) in the hero social row on every page.
- **Fixed:** splash keeps the page behind it out of the tab order and the a11y tree while open (`inert`), hides its tooltips on small screens, and no longer leaves a focus ring on the logo after entering; sticky-nav blur works in Safari (`-webkit-backdrop-filter`); page content wrapped in a `<main>` landmark; corrected the L'Aquila degree to "MSc in Computer Science"; in dark mode the education cards' institution link now uses the lighter blue (`--li-blue-light`).
- **SEO:** added `email` to the home-page `Person` JSON-LD and refreshed `sitemap.xml` lastmod; the splash leaves canonical / Open Graph / Twitter tags and the in-DOM content intact.

## [1.0.3] - 2026-06-13
- **Fixed:** dark-mode readability — hard-to-read blue accents now use the lighter `--li-blue-light`, and the active pagination dot is visible again.

## [1.0.2] - 2026-06-12
- **Added:** dark-mode toggle, persisted in `localStorage` and following `prefers-color-scheme`, via a shared `js/theme.js` (CSP-safe, no flash).
- **Fixed:** synced CSS that had drifted between the standalone page clones.

## [1.0.1] - 2026-06-12
- **Added:** full SEO per page (canonical, Open Graph, Twitter, JSON-LD, share image, `robots.txt`, `sitemap.xml`) and a data-driven Projects carousel.
- **Changed:** compact README, shorter social descriptions, larger project logos, rewritten Certora and project copy.
- **Fixed:** `scroll-margin-top` under the sticky header, tooltip clipping on narrow screens, a structured-data name, and `?v=` cache-busters so deploys don't serve stale `js/*.js`.

## [1.0.0] - 2026-06-12
First public release.
- Three-page static site (home, education, projects) with a Current Role card and data-driven Journey (15 roles) and Education carousels (arrows, dots, swipe, keyboard nav), a hover-animated hero with avatar fireworks, and layered logo fallback.
- **Security:** all JS external, no inline scripts or handlers — runs under a strict `script-src 'self'` CSP.
- **Accessibility:** reduced-motion support and accessible labels on icon-only controls.
