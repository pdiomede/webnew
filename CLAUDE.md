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
- `projects.html`: hero plus a static **Coming Soon** placeholder (`#projects`). No carousel; its only script (`js/projects.js`) wires the avatar image fallback.

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

## Carousel architecture

The carousel pages are data-driven: content lives in an array inside the page's external script (`experiences[]` in `js/index.js`, `education[]` in `js/education.js`), not in HTML. A generic `makeCarousel(items, trackEl, dotsEl, prevBtn, nextBtn, renderFn)` renders each array into a horizontal scroll-snap carousel, paired with a per-page render function (`renderExperience` / `renderEducation`). To add or change a job or certification, edit the array entry; never hand-write slide markup. The CSS `<style>` block is still duplicated inline in every page (change one, change all), but the JavaScript now lives per-page in `js/`: `makeCarousel` and the logo helpers are duplicated across `js/index.js` and `js/education.js` (standalone-clone convention). `makeCarousel` also registers a document-level `keydown` handler so ArrowLeft / ArrowRight navigate the carousel no matter where focus is (modifier-held keys and editable elements are ignored; if the carousel is fully off-screen it is scrolled into view first). This relies on one carousel per page; a second carousel on the same page would need the handler scoped.

### Logo resolution (layered fallback)

Each entry resolves its logo through `logoChip()` so a broken image never leaves a blank slide:

1. `logo:` is a local file under `images/` (rendered in a white chip; add `logoFull:true` for a full-bleed square logo that fills the chip edge-to-edge).
2. `domain:` is fetched live from `https://logo.clearbit.com/<domain>`, falling back to a Google favicon, then to a colored monogram.
3. Neither: a colored monogram chip built from `initials` + `color`.

`logoChip()` emits the chip markup with `data-init` / `data-color` (and `data-fav` for the domain path) but **no inline `onerror`** (CSP). After `makeCarousel` injects each slide, it attaches the `onLogoError` handler to the chip images via `addEventListener`; that handler walks the fallback chain (favicon, then monogram via `chipMono`). Keep `initials` and `color` set on every entry. An optional `url:` makes both the logo (wrapped in `a.logo-link`) and the company/school name link to that site in a new tab.

### Styling

Theme colors are CSS custom properties on `:root` (the `--li-*` LinkedIn-blue palette, `--bg`, `--card`, `--ink`, etc.); change colors there, not at call sites. Layout is responsive via `@media` breakpoints (notably 680px, where carousel slides collapse to a single column).

## Conventions

- **No em dashes** in page content (the long `U+2014` dash). Date ranges use the en dash (`U+2013`), which is the correct range dash and is intentional. Page titles use a pipe separator (`Paolo Diomede | ...`).

## Content / fact-checking notes

This is a real person's professional history. Dates, employers, titles, and metrics in the data arrays are factual claims: do not invent, embellish, or "improve" them. When asked to add an entry, use only details the user supplies.
