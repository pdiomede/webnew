# Changelog

All notable changes to this project are documented in this file. The format is based on
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.3.1] - 2026-06-12

### Added
- Real logo for the Graph Tools Pro project card (`images/graphtoolspro.jpg`), replacing its monogram placeholder. All four project cards now use their real logos.

### Changed
- Updated `CLAUDE.md` to document the Projects carousel (previously described as a "Coming Soon" placeholder).

## [1.3.0] - 2026-06-12

### Added
- Projects page now has a data-driven carousel (replacing the "Coming Soon" placeholder), matching the Journey and Education carousels with arrows, dots, sideways scroll, and global keyboard navigation.
- Four projects: Url Reporter, Magellan, HomeVault, and Graph Tools Pro, each linking out to its site with an "opens in a new tab" icon next to the title.

### Changed
- Project card logos are 20% larger than the carousel logos on other pages (scoped to the Projects page).
- Projects page meta description and social (Open Graph / Twitter) descriptions updated to name the live projects instead of "coming soon".

## [1.2.0] - 2026-06-12

### Added
- `robots.txt` and `sitemap.xml` for search engine indexing.

### Changed
- Social share image no longer shows the domain text.
- Social (Open Graph / Twitter) descriptions shortened to under 125 characters so previews do not truncate on mobile.

### Fixed
- Anchor navigation (Current Role, Journey, Projects, Education) no longer hides the top of the target section under the sticky header (`scroll-margin-top`).
- Social icon tooltips no longer clip off-screen on narrow viewports; they are hidden on small (touch) screens where hover does not apply.
- Corrected the university name accent in the structured data ("Università degli Studi dell'Aquila").

## [1.1.0] - 2026-06-12

### Added
- SEO tags on every page: canonical URL, author, theme color, Open Graph, and Twitter card metadata.
- JSON-LD `Person` structured data on the home page (inert data block, safe under the strict CSP).
- Custom social share image (`images/og-image.png`, 1200x630) shown as the link preview on X, LinkedIn, Telegram, and other platforms.

### Changed
- README rewritten to be compact.

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
