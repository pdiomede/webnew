# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static personal portfolio / résumé site for Paolo Diomede, styled after a LinkedIn profile. Plain HTML: each page bundles its own inline `<style>` block; the JavaScript (data arrays + rendering logic) lives in external files under `js/`. `images/` holds local logo/photo assets.

**CSP note:** the site is deployed behind a strict Content-Security-Policy (`script-src 'self'`). That is why all JavaScript is in external `js/*.js` files and there are **no inline `<script>` blocks and no inline `on*=` event handlers** anywhere in the HTML (image fallbacks are wired with `addEventListener` instead). Inline `<style>` and `style=` attributes are fine (the CSP allows inline styles). Do not reintroduce inline scripts or inline event handlers, or they will be blocked in production. Exception: the `<script type="application/ld+json">` block on `index.html` is an inert SEO data block, never executed, and is not affected by `script-src`.

Every page carries SEO/social tags in the `<head>` (canonical, Open Graph, Twitter card) pointing at the production domain `https://pdiomede.com` and the share image `images/og-image.png` (1200x630). Keep these in sync when adding pages or changing titles/descriptions.

There is **no build step, no package manager, no framework, and no tests**. To work on it, edit the HTML file and refresh the browser. Either open a file directly (`open index.html`) or serve the site with the preconfigured static server in `.claude/launch.json` (`python3 -m http.server 8742`), which the Claude Preview tools can launch as `static-site`.

## Pages and navigation

Each page is a **standalone clone**: the full `<style>` block, nav, hero (banner + avatar + socials), and footer are copied into every file. There is no shared CSS/JS file, so any change to shared chrome must be applied to all three pages identically (md5-comparing the edited blocks across files is the established way to confirm sync).

- `index.html`: hero, the **Current Role** card (`#now`), and **The Journey So Far** carousel (`#journey`), driven by the `experiences[]` array.
- `education.html`: hero plus the **Education & Certifications** carousel (`#education`), driven by the `education[]` array.
- `projects.html`: hero plus the **Projects** carousel (`#projects`), driven by the `projects[]` array in `js/projects.js`.

Nav conventions: the brand block (`a.brand`, logo + name) links to `index.html` on every page. The four nav links are Current Role, Journey, Projects, Education; on `index.html` the first two are in-page anchors (`#now`, `#journey`), on other pages they point to `index.html#now` / `index.html#journey`, and each page's own section is a local anchor. Keep these cross-links in sync when adding pages.

## Hero animations (all hover-driven, duplicated on every page)

Everything animates only while the banner is hovered, via a single pattern: animations are declared with `animation-play-state:paused` and flipped to `running` by one rule that MUST list all five selectors: `.hero-banner:hover .wave, .hero-banner:hover .wave svg, .hero-banner:hover .bird, .hero-banner:hover .bird svg, .hero-banner:hover .sky`. The same five are re-paused inside the `prefers-reduced-motion` media query. Pausing freezes each animation's clock, so delayed animations (birds) only count down while hovering, and everything resumes where it stopped.

Banner layers, bottom to top (all inside `.hero-banner`, which has `overflow:hidden`):

1. **Sky day-cycle**: three `.sky` overlay divs (`.sky-sunrise` / `.sky-sunset` / `.sky-night`), the FIRST children so everything else paints above them. CSS cannot interpolate gradients, so each phase is a fixed gradient whose opacity animates on a shared 24s loop (`skySunrise` / `skySunset` / `skyNight`); the base blue gradient on the banner itself is the "daytime" sky. All sky keyframes start and end at opacity 0, so the resting banner looks unchanged.
2. **Waves**: three layers (`.wave-back` / `.wave-mid` / `.wave-front`), each a `<div class="wave">` wrapping an inline SVG, carrying two animations: the div runs `waveScroll` (horizontal drift, `translateX(-50%)` loop) and the inner svg runs `waveHeave` (bottom-anchored swell via translateY + scaleY, alternate, staggered durations/delays so layers never sync). Inside each SVG, a white "foam" path sits under an identical dark path shifted down via `transform="translate(0,N)"` so white shows only along the crest; the path pattern repeats every half viewBox, which is what makes the -50% scroll seamless.
3. **Birds**: a `.birds` overlay (`pointer-events:none`) holding three `.bird` divs, same div/svg split (`birdFly` glide on the div, `birdFlap` wing-beat on the svg). Birds start off-canvas at `left:-30px` with staggered delays (1.5s / 3.2s / 5s), so they appear only after some cumulative hover time. The flight path is a fixed 1300px (sized to the max 1040px banner); on narrow viewports each bird exits early and the sky is empty until its next cycle, which is intentional.

**Safari constraint (the reason for the div/svg split)**: percentage transforms on SVG elements resolve against the viewBox in Safari, not the CSS box. The percentage-based `waveScroll` must stay on the wrapper div; px/scale-only keyframes (`waveHeave`, `birdFlap`) are safe on svg elements. All keyframes use `translate3d` to keep Safari compositing.

**Avatar fireworks**: the avatar is wrapped in `.avatar-fx`, whose `::before` / `::after` hold the hover fireworks (the `fireworks` keyframe animates a 12-particle `box-shadow` list outward; particles cannot live on `.avatar` because its `overflow:hidden` would clip them). The wrapper carries the `-72px` banner overlap; `.avatar` gets `margin-top:0` inside it.

**Hover-zone wiring (fragile, keep intact)**:
- `.avatar-fx` has `pointer-events:none` and `.avatar` restores `pointer-events:auto`: only the avatar circle (border-radius shapes hit-testing) captures the mouse for fireworks, while the wrapper's transparent corners fall through to the banner and trigger the waves.
- `.hero-body` has `display:flow-root` to stop the avatar wrapper's `-72px` margin from collapsing through it. Without it, hero-body's box silently rides up over the banner's lower 72px and swallows hover across the banner's full width.

## Dark mode

A light/dark toggle sits in the top-right of the nav (`.theme-toggle` button, with inline sun/moon SVGs swapped by CSS). Theming is driven by a `data-theme` attribute on `<html>`: the dark palette is a single `html[data-theme="dark"]{...}` block that overrides the `:root` color variables, plus two kinds of explicit override on top of it.

1. **Hardcoded colors that don't read from a variable**: nav background, the body grays, `.chip-tag`/`.btn-ghost` backgrounds, `.dot`, the socials tooltip (background is `var(--ink)`, which would otherwise invert), and the white `.nav-btn` backgrounds.
2. **Blue accents on the dark background**: anything that uses `--li-blue` as a *foreground* (text, icon, or border) is re-pointed to the lighter `--li-blue-light` (`#378FE9`) so it stays legible against dark. That currently covers `.role-title`, `.section-label`, the year numbers (`.era` / `.edu-card .edu-year`), the `.nav-btn` arrow glyph, `footer a`, the `.btn-ghost` text and border, the active pagination dot, the education card's institution link (`.slide .period-line a`), and the `.nav-links a:hover` / `.socials a:hover` states. *Filled* blue surfaces deliberately keep the deep `--li-blue` (the `.btn-primary` button, the `.current-card`, the brand logo) because their text sits on the blue, not on the dark background. **Rule of thumb:** when you add a new blue foreground accent, add a matching `html[data-theme="dark"] … {color:var(--li-blue-light)}` override or it will be near-invisible in dark mode. **Specificity gotcha:** `html[data-theme="dark"] .dot{…}` out-specifies a bare `.dot.active`, so the active-dot override must itself be `html[data-theme="dark"] .dot.active` (or the active pill silently renders grey).

That dark block is part of the duplicated inline `<style>` and follows the same "change one, change all" rule as the rest of the chrome. Two page-scoped blocks intentionally break that byte-identity: the `#projects`-scoped overrides live only on `projects.html` (the light `#projects .logo-chip`/`#projects .loc` rules and the dark `html[data-theme="dark"] #projects .loc` override), and the `.splash`/`.sphere` rules live only on `index.html` (see Landing splash below). Aside from those page-scoped additions the shared chrome stays byte-identical across all three pages, and `education.html` carries only that shared chrome.

The toggle logic lives in **`js/theme.js`**, a single shared file (unlike the per-page carousel scripts) loaded **synchronously in `<head>`** on all three pages. Same-origin so it satisfies `script-src 'self'`; synchronous-in-head so it sets `data-theme` before first paint (no flash). It reads `localStorage.theme` (falling back to `prefers-color-scheme` on first visit), applies the theme, keeps the `<meta name="theme-color">` content in sync (`#0F1419` dark / `#0A66C2` light), and wires the button's click + `aria-pressed` on `DOMContentLoaded`. Bump its `?v=` like any other `js/*.js` file when you change it.

## Landing splash

`index.html` opens behind a **bare splash overlay** (`.splash`, `#splash`) appended as the last element in `<body>` (just before the scripts): the name (set in the **Oswald** webfont, see the font note below), a current-role line (preceded by a stylized amber sun SVG), a smaller italic "by night" line (preceded by a slate crescent-moon SVG), and a star-marked (`✦`) italic previous-roles line linking out to Certora / The Graph Foundation / Livepeer, the socials row plus an email icon (`mailto:me@pdiomede.com`), an italic "Want to know more?" caption, and a rotating CSS **sphere** (`.sphere` → an `.orb` glossy globe that cross-fades into a connected-squares `.graph` SVG on `:hover`/`:focus-visible`). The overlay is `position:fixed; z-index:1000` over the otherwise-unchanged page; the real content stays in the DOM and rendered beneath it, so SEO, canonical/OG, and `sitemap.xml` are untouched. Do **not** switch the underlying content to `display:none` to "hide" it behind the splash.

Control logic is in **`js/landing.js`** (a shared single-file script like `theme.js`, not a per-page carousel script), loaded **synchronously in `<head>`** so the show/skip decision lands before first paint (no flash). It shows the splash at the bare home URL and **skips** it (adding `splash-skip`, which triggers `html.splash-skip .splash{display:none}`) only when `location.hash` is a deep link (e.g. `index.html#now` / `#journey` arriving from the Projects/Education nav), so those land straight on the section. Otherwise it adds `splash-open` to `<html>` (scroll lock) and, on `DOMContentLoaded`, marks every other `<body>` child `inert` + `aria-hidden` so the page behind stays out of the tab order and the a11y tree. The nav brand points at `index.html` (no hash), so clicking it returns to the splash. The sphere click (`#splash-enter`) runs `dismiss()`: it removes the scroll lock, un-inerts the page, fades the overlay via the `is-dismissed` class, and (only for keyboard activation, to avoid a stray focus ring on a mouse click) moves focus to the nav brand. Escape also dismisses; a `<noscript>` rule hides the splash when JS is off so no-JS visitors aren't trapped. There is no session-based skip (so the brand always returns here). Bump its `?v=` like any other `js/*.js` file when you change it.

The splash is **intentionally hardcoded light** (literal hex, no `--*` variables anywhere under `.splash`) so dark mode can never touch it, and it freezes the sphere animation under `prefers-reduced-motion`. As noted in Dark mode, the `.splash*`/`.sphere` rules are an **index-only** addition to the inline `<style>` (mirroring the `#projects`-on-`projects.html` precedent): they live only on `index.html` and are exempt from the chrome "change one, change all" rule.

**Frame bars:** two full-height vertical bars flank the splash via `.splash::before` (left) / `.splash::after` (right) — `position:fixed`, `pointer-events:none`, filled with the same gradient as the sphere orb (`#6FA8FF → #0A66C2 → #004182`), ~100px wide on desktop and 30px on mobile. They are part of `.splash` (and hardcoded light like the rest of it), so they fade out with the overlay on dismiss and never appear once you enter or on the other pages. **Coupling to keep intact:** `.splash` carries deliberately wide horizontal padding (`24px 120px`, narrowing to `24px 38px` on mobile) sized to exceed the bar width, so the centered `.splash-inner` always clears the fixed bars at every viewport. Do not "normalize" that back to a small symmetric padding, or the bars will overlap the content on mid-width screens (the centered content is only naturally clear of fixed edge bars once the viewport exceeds `max-width + 2·barWidth`).

**External font (the one exception to self-hosting):** the splash name (`.splash-name`) uses the **Oswald** webfont, loaded via a `<link>` to Google Fonts in `index.html`'s `<head>` (index-only), with `display=swap` and a condensed system fallback (`"Arial Narrow"`) so it degrades gracefully. This is the site's only external runtime dependency — everything else (logos, scripts, styles) is self-hosted. If the production CSP restricts `font-src` / `style-src`, the browser blocks the load and the name falls back to the system stack; self-hosting the `.woff2` is the fully CSP-safe alternative.

## Carousel architecture

All three pages are data-driven: content lives in an array inside the page's external script (`experiences[]` in `js/index.js`, `education[]` in `js/education.js`, `projects[]` in `js/projects.js`), not in HTML. A generic `makeCarousel(items, trackEl, dotsEl, prevBtn, nextBtn, renderFn)` renders each array into a horizontal scroll-snap carousel, paired with a per-page render function (`renderExperience` / `renderEducation` / `renderProject`). To add or change an entry, edit the array; never hand-write slide markup. The CSS `<style>` block is still duplicated inline in every page (change one, change all), but the JavaScript lives per-page in `js/`: `makeCarousel` and the logo helpers (`logoChip` / `onLogoError` / `chipMono`) are duplicated across all three scripts (standalone-clone convention). `makeCarousel` also registers a document-level `keydown` handler so ArrowLeft / ArrowRight navigate the carousel no matter where focus is (modifier-held keys and editable elements are ignored; if the carousel is fully off-screen it is scrolled into view first). This relies on one carousel per page; a second carousel on the same page would need the handler scoped.

Experience entries support an optional `group:` field (e.g. `"OpenText · 1 of 6"`) that renders as a small chip tag on the card, used to label consecutive roles at the same company so readers can see they belong to one employer's arc.

`renderProject` differs from the other two render functions in ways worth preserving: its `era`, `period`, and `category` fields are **conditional** (omitting a field hides that slot, so a card with no year shows no era number or date line), the project name links out via an inline external-link SVG with a "Opens in a new tab" title (rendered only when the entry has a `url`), and project logos are sized 20% larger than the other carousels via a page-scoped `#projects .logo-chip` rule (72px) in `projects.html`. Project `category` labels are descriptive classifications (e.g. "Security · Web Tool") rather than the locations the other pages put in that slot.

### Logo resolution (layered fallback)

Each entry resolves its logo through `logoChip()` so a broken image never leaves a blank slide:

1. `logo:` is a local file under `images/` (rendered in a white chip; add `logoFull:true` for a full-bleed square logo that fills the chip edge-to-edge).
2. `domain:` is fetched live from `https://logo.clearbit.com/<domain>`, falling back to a Google favicon, then to a colored monogram.
3. Neither: a colored monogram chip built from `initials` + `color`.

`logoChip()` emits the chip markup with `data-init` / `data-color` (and `data-fav` for the domain path) but **no inline `onerror`** (CSP). After `makeCarousel` injects each slide, it attaches the `onLogoError` handler to the chip images via `addEventListener`; that handler walks the fallback chain (favicon, then monogram via `chipMono`). Keep `initials` and `color` set on every entry. An optional `url:` makes both the logo (wrapped in `a.logo-link`) and the company/school name link to that site in a new tab.

### Styling

Theme colors are CSS custom properties on `:root` (the `--li-*` LinkedIn-blue palette, `--bg`, `--card`, `--ink`, etc.); change colors there, not at call sites. Layout is responsive via `@media` breakpoints (notably 680px, where carousel slides collapse to a single column). Every color used across the site (core tokens, dark-mode overrides, hero animation, current-role card, splash, sphere, frame bars, and the logo-monogram fallbacks) is catalogued in `COLOR_PALETTE.md` — keep it in sync when you add or change a color.

## Conventions

- **No em dashes** in page content (the long `U+2014` dash). Date ranges use the en dash (`U+2013`), which is the correct range dash and is intentional. Page titles use a pipe separator (`Paolo Diomede | ...`).
- **Cache-busting JS version**: each page loads its script with a version query (`<script src="js/projects.js?v=1.1.1">`). The site sits behind Cloudflare, which caches `js/*.js` for hours, so a deploy that changes a JS file without changing the query string will keep serving the stale cached copy (symptom: a carousel renders no cards in production while working locally). Bump the `?v=` on the affected page(s) whenever you change a `js/*.js` file, keeping it aligned with the version in `README.md` / `CHANGELOG.md`.
- **Versioning / releases**: the project tracks a single semantic version, recorded in `CHANGELOG.md` (Keep a Changelog format) and echoed in the README "Version" line. On a meaningful change, add a CHANGELOG entry, bump the README version, and (if a `js/*.js` file changed) bump the matching `?v=` query. Deploy is a plain `git pull` on the VPS; there is no CI.

## Content / fact-checking notes

This is a real person's professional history. Dates, employers, titles, and metrics in the data arrays are factual claims: do not invent, embellish, or "improve" them. When asked to add an entry, use only details the user supplies.
