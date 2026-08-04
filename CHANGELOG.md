# Changelog

Notable changes, newest first. Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/); versioning: [SemVer](https://semver.org/spec/v2.0.0.html).

## [1.4.0] - 2026-08-04
- **Added:** breaching dolphins in the hero banner on all three pages — two flat navy silhouettes (pure CSS/SVG, no JS) leap out of the water between the mid and front wave layers, arc nose-up to nose-down, and dive back behind the front wave from time to time while the banner is hovered (staggered 13.5s/17s cycles that never sync with the birds or sky). The hover play-state rule and its reduced-motion re-pause now list seven selectors.
- **Fixed:** the splash previous-roles line stays on one line — fluid font size (14px on wide screens, shrinking to 11px near 900px viewports, wrapping normally below that) after the line grew with the Certora entry; the splash content column widened from 680px to 900px to give it room.
- **Fixed:** arrow keys no longer scroll the Journey carousel (or the page) behind the open landing splash — the carousels' document-level keydown handler now bails while the carousel sits in an `inert` subtree.
- **Fixed:** removed the dead Clearbit hop from the logo fallback chain — `logo.clearbit.com` was discontinued and every `domain:` logo request failed before falling back; Google favicons are now fetched directly (one less doomed request per logo, faster chips, same rendering).
- **Fixed:** refreshed the stale `sitemap.xml` lastmod dates (2026-06-13 → 2026-08-04) after the role-change and animation updates.
- **Docs:** bumped `js/index.js` / `js/education.js` / `js/projects.js` cache-busters to `1.4.0`; updated README, CLAUDE.md, and COLOR_PALETTE.md.

## [1.3.0] - 2026-08-04
- **Added:** avatar pointer-tilt on all three pages — the hero profile badge (photo + white ring) tilts in 3D toward the mouse pointer, like the face is watching it. New shared `js/avatar.js?v=1.3.0` (end-of-body on every page; rAF-throttled document `mousemove`, 12° max tilt eased near the face, resets when the pointer leaves the page). Skipped entirely on touch / coarse-pointer devices and under `prefers-reduced-motion` (gated in JS), and idle while the landing splash is open. One shared CSS line (`.avatar{transition:transform .16s ease-out;will-change:transform}`) smooths the motion and the return to neutral.

## [1.2.1] - 2026-08-04
- **Changed:** completed the Hypernative Current Role card — replaced the placeholder blurb with a concise, two-sentence description of the role (EMEA client onboarding and success, platform adoption, KPIs and QBRs, expansion with Sales, renewals, and voice-of-customer), and updated the focus pills to Customer Success, Onboarding & Adoption, Retention & Renewals, Stakeholder Management, and Security Strategy.

## [1.2.0] - 2026-08-04
- **Changed:** current role updated to Customer Success Manager @ Hypernative (August 2026 – Present) across the splash, hero meta/`<title>`, Open Graph / Twitter tags, and the `Person` JSON-LD; the previous Technical Account Manager @ Certora role (January 2026 – July 2026) moved into the Journey carousel as its newest entry.
- **Added:** stylized sun and moon SVG icons on the splash, before the current-role line (amber sun `#F5A623`) and the "by night" line (slate crescent moon `#5A6483`).
- **Changed:** the Journey carousel location slot is now optional — an experience entry with no `location` renders no map-pin row (matching the Projects carousel's conditional fields); the Certora entry uses this.
- **Docs:** bumped `js/index.js` cache-buster to `1.2.0`; updated README, COLOR_PALETTE, and CLAUDE.md.

## [1.1.1] - 2026-06-14
- **Changed:** refined the splash text colors — the role label "Technical Account Manager @" to `#14213D`, the "by night" line to `#495057`, and the previous-roles line (with its ✦) plus the "Want to know more?" caption to `#343A40`; the inline links (Certora / The Graph / Livepeer) keep their blue.
- **Added:** two vertical gradient bars framing the landing splash along its left and right edges (orb-matched `#6FA8FF → #0A66C2 → #004182`, ~100px wide on desktop / 30px on mobile, hardcoded light so dark mode never touches them, and present only on the splash). Pure CSS via `.splash::before`/`::after`; they fade out with the overlay on enter.
- **Added:** `COLOR_PALETTE.md` cataloguing every color used across the site (core tokens, dark mode, hero animation, current-role card, splash, sphere, and logo-monogram fallbacks); linked from the README.
- **Added:** MIT `LICENSE.md`.
- **Docs:** aligned the `js/*.js` `?v=` cache-busters to `1.1.1` across all three pages.

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
