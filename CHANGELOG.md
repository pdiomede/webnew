# Changelog

All notable changes to this project are documented in this file. The format is based on
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-06-12

### Added
- SEO tags on every page: canonical URL, author, theme color, Open Graph, and Twitter card metadata.
- JSON-LD `Person` structured data on the home page (inert data block, safe under the strict CSP).
- Custom social share image (`images/og-image.png`, 1200x630) shown as the link preview on X, LinkedIn, Telegram, and other platforms.
- `robots.txt` and `sitemap.xml` for search engine indexing.
- Projects page now has a data-driven carousel (replacing the "Coming Soon" placeholder), matching the Journey and Education carousels with arrows, dots, sideways scroll, and global keyboard navigation.
- Four projects: Url Reporter, Magellan, HomeVault, and Graph Tools Pro, each linking out to its site with an "opens in a new tab" icon next to the title. All use their real logos.

### Changed
- README rewritten to be compact.
- Social share image no longer shows the domain text.
- Social (Open Graph / Twitter) descriptions shortened to under 125 characters so previews do not truncate on mobile. Projects page descriptions updated to name the live projects.
- Project card logos are 20% larger than the carousel logos on other pages (scoped to the Projects page).
- Project card category labels (e.g. "Security · Web Tool") use a deep navy color (`#001d3d`), scoped to the Projects page.
- Current Role (Certora) card: rewrote description, removed location ("Rome, Italy") from the date line, updated focus tags to Business Development, Client Advisory, Technical Pre-Sales, Customer Success, Security Strategy.
- Rewrote Magellan and Graph Tools Pro project card descriptions to be more concise.
- Shortened HomeVault category label from "Portfolio · Net Worth Tracker" to "Portfolio · Tracker".

### Fixed
- Anchor navigation (Current Role, Journey, Projects, Education) no longer hides the top of the target section under the sticky header (`scroll-margin-top`).
- Social icon tooltips no longer clip off-screen on narrow viewports; they are hidden on small (touch) screens where hover does not apply.
- Corrected the university name accent in the structured data ("Università degli Studi dell'Aquila").
- Projects carousel rendered no cards in production: the CDN (Cloudflare) was serving a stale cached copy of `js/projects.js`. Added version query strings to all page script tags so each deploy requests a fresh URL the CDN has not cached.

## [1.0.0] - 2026-06-12

First public release of the portfolio site.

### Added
- Multi-page static site: home (`index.html`), education (`education.html`), and projects (`projects.html`), sharing the nav, hero, and footer.
- Current Role card plus a data-driven "The Journey So Far" experience carousel (15 roles).
- "Education & Certifications" carousel: Harvard Business School Online programs and a Computer Science degree from the University of L'Aquila.
- Hover-driven animated hero banner (CSS and SVG): Hokusai-style layered waves with horizontal drift and vertical heave, gulls that fly across after a short delay, and a sunrise-to-sunset day cycle.
- Avatar fireworks on hover.
- Carousel controls: previous/next buttons, pagination dots, sideways scrolling, and keyboard navigation (Left/Right arrows work from anywhere on the page).
- Layered logo resolution with graceful fallback (local file, live fetch, colored monogram); institution logos and names link to their websites.
- Hokusai "seal" brand mark that links to the home page.
- Favicons, per-page meta descriptions, and accessible labels for carousel dots and social links.
- Responsive layout, including a wrapping mobile navigation row.

### Security
- All JavaScript lives in external `js/` files and no inline scripts or inline event handlers remain, so the site runs under a strict `script-src 'self'` Content-Security-Policy with no policy changes required.

### Accessibility
- Reduced-motion support for the hero animations and for page scrolling.
- Accessible names on icon-only social links and on carousel pagination dots.
