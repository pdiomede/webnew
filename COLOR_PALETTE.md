# Color Palette

A reference for every color used across the site. The canonical values are the CSS
custom properties in each page's `:root` block; everything else is grouped by the section
or component it belongs to. Change shared colors at the token level (`:root`) rather than
at call sites.

> The site is duplicated across `index.html`, `education.html`, and `projects.html`
> (standalone clones), so these tokens are defined identically in all three. The splash
> and sphere colors are **index-only** and intentionally hardcoded (never themed).

## Core tokens — light (`:root`)

| Token | Hex | Used for |
|---|---|---|
| `--li-blue` | `#0A66C2` | Primary LinkedIn-blue accent (links, labels, buttons) |
| `--li-blue-dark` | `#004182` | Darker blue (gradients, button hover) |
| `--li-blue-light` | `#378FE9` | Lighter blue (gradients, dark-mode accents) |
| `--bg` | `#F4F2EE` | Page background |
| `--card` | `#FFFFFF` | Card surfaces |
| `--ink` | `#1B1F23` | Primary text |
| `--ink-soft` | `#56687A` | Secondary / muted text |
| `--line` | `#E3E0DA` | Borders & dividers |
| `--green` | `#057642` | Success-green token |

## Core tokens — dark (`html[data-theme="dark"]`)

| Token | Hex | Used for |
|---|---|---|
| `--bg` | `#0F1419` | Page background |
| `--card` | `#1A2129` | Card surfaces |
| `--ink` | `#E8EAED` | Primary text |
| `--ink-soft` | `#9AA7B4` | Secondary / muted text |
| `--line` | `#2A333D` | Borders & dividers |

In dark mode, blue **foreground** accents re-point from `--li-blue` to `--li-blue-light`
(`#378FE9`) for legibility; filled blue **surfaces** keep the deep `--li-blue`/`--li-blue-dark`.

## Brand & navigation

| Color | Hex / value | Used for |
|---|---|---|
| Brand red | `#C8102E` | "PD" brand logo background (also Telecom Italia monogram) |
| Nav bar (light) | `rgba(255,255,255,.92)` | Sticky nav background |
| Nav bar (dark) | `rgba(15,20,25,.92)` | Sticky nav background |
| Theme-color meta | `#0A66C2` / `#0F1419` | Browser UI color (light / dark), kept in sync by `js/theme.js` |

## Text & prose (non-token literals)

| Color | Hex | Used for |
|---|---|---|
| Prose body | `#3a4a5a` | Hero summary, slide blurbs (light) |
| Timeline detail | `#43525f` | `.role-item .rd` (light) |
| Prose body (dark) | `#aeb9c4` | Hero summary, slide blurbs |
| Timeline detail (dark) | `#9aa7b4` | `.role-item .rd` |

## Chips, dots, tooltips

| Color | Hex / value | Used for |
|---|---|---|
| Chip / ghost-btn bg (light) | `#eaf3fc` | `.chip-tag`, `.btn-ghost:hover` |
| Chip / ghost-btn bg (dark) | `rgba(55,143,233,.16)` | `.chip-tag`, `.btn-ghost:hover` |
| Pagination dot (light) | `#c8d2dc` | Inactive carousel dot |
| Pagination dot (dark) | `#3a4654` | Inactive carousel dot |
| Tooltip (light) | bg `#1B1F23`, text `#fff` | Social-icon tooltips |
| Tooltip (dark) | bg `#283340`, text `#E8EAED` | Social-icon tooltips |

## Current-role card (`index.html`)

| Color | Hex / value | Used for |
|---|---|---|
| Card gradient | `#0A66C2` → `#004182` | Card background |
| Card text | `#fff` | All card text |
| "Current" pulse dot | `#4ade80` | Live-status indicator (glow `rgba(74,222,128,…)`) |
| Badge background | `rgba(255,255,255,.16)` | `.badge-now` |
| Focus tags background | `rgba(255,255,255,.15)` | `.focus-tags span` |
| Corner glow | `rgba(255,255,255,.12)` | `::after` radial highlight |

## Hero banner animation (hover-driven)

| Element | Colors |
|---|---|
| Banner base gradient | `#004182` → `#0A66C2` (55%) → `#378FE9` |
| Sky — sunrise | `#B24592`, `#F15F79`, `#FFC371` |
| Sky — sunset | `#41295A`, `#B85C38`, `#F2994A` |
| Sky — night | `#020F1F`, `#0A2342`, `#16324F` |
| Waves (dark fills) | back `#0B3D66`, mid `#04365E`, front `#062A47`; foam `#fff` |
| Dolphins | fill `#062A47` (front-wave navy), opacity .95 / .8 |
| Birds | stroke `#fff` |
| Avatar gradient | `#0A66C2` → `#378FE9`, border `#fff` |
| Avatar fireworks | `#F5B700`, `#E0552B`, `#378FE9`, `#fff`, `#057642`, `#0A66C2` |

## Projects page (page-scoped)

| Color | Hex | Used for |
|---|---|---|
| Category label (light) | `#001d3d` | `#projects .loc` |
| Category label (dark) | `#7FA8D4` | `#projects .loc` |

## Landing splash & sphere (`index.html` only — hardcoded light, never themed)

| Color | Hex / value | Used for |
|---|---|---|
| Splash background | `#F4F2EE` | Overlay background |
| Splash text | `#1B1F23` | Name + body |
| Role label | `#14213D` | "Customer Success Manager @" (`.splash-role`) |
| Sun icon | `#F5A623` | Stylized sun before `.splash-role` |
| "By night" line | `#495057` | `.splash-night` subtitle |
| Moon icon | `#5A6483` | Crescent moon before `.splash-night` |
| Prev-roles line + ✦ | `#343A40` | `.splash-prev` text & star (links excluded) |
| "Want to know more?" | `#343A40` | `.splash-prompt` caption |
| Splash links | `#0A66C2` | Inline links (Certora, The Graph, Livepeer) |
| Splash borders | `#E3E0DA` | Social-icon borders |
| **Frame bars** | `linear-gradient(180deg, #6FA8FF 0%, #0A66C2 45%, #004182 100%)` | Left/right vertical bars |
| Sphere orb | `radial-gradient(#6FA8FF 0%, #0A66C2 45%, #004182 100%)` | Glossy globe |
| Sphere graph | line stroke `#0A66C2`, node fill `#fff` / stroke `#0A66C2` | Connected-node hover state |

The frame bars deliberately reuse the **sphere orb's gradient** so the two read as one
visual family.

## Logo monogram fallbacks (data-driven, `js/*.js`)

Each carousel entry carries a `color` used for the monogram chip when no logo/domain image
resolves.

| Entry | Hex |
|---|---|
| Certora | `#E8543F` |
| Livepeer | `#00A66C` |
| The Graph | `#6F4CFF` |
| Nemax Tech | `#1B9E8F` |
| Graphtronauts | `#E0552B` |
| OpenText | `#0A66C2` |
| Software AG | `#2D2D7A` |
| Telecom Italia | `#C8102E` |
| University of L'Aquila | `#4A5568` |
| Harvard Business School | `#A41034` |
| Url Reporter | `#0A1A2F` |
| Magellan | `#0E1626` |
| HomeVault | `#0E1F3D` |
| Graph Tools Pro | `#0A0E1F` |
