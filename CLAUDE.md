# Brittany's Herbalist Website

## Project Overview

A personal website for an herbalist, hosted for free on GitHub Pages. The site should feel warm, natural, and professional — reflecting the herbalist's craft and personality.

## Hosting

- **Platform:** GitHub Pages (free static site hosting)
- **URL pattern:** `https://<username>.github.io/<repo-name>/` or a custom domain if configured
- **Deployment:** Push to the `main` branch (or a `gh-pages` branch if configured) to deploy automatically
- **No build step required** unless a static site generator is added later

## Tech Stack

- **HTML5** — semantic markup
- **CSS3** — custom properties (variables) for theming, no frameworks unless added intentionally
- **Vanilla JavaScript** — minimal, progressive enhancement only
- **No dependencies by default** — keep it lightweight and maintainable without npm or a bundler

If a static site generator is introduced later (e.g., Jekyll, which GitHub Pages supports natively), update this section.

## File Structure

```
/
├── index.html          # Single-page site (all sections)
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── main.js         # Smooth scroll, mobile nav, minimal enhancements
├── images/             # Photos of herbs, the herbalist, etc.
└── CLAUDE.md           # This file
```

## Design Guidelines

### Aesthetic
- Earthy, natural color palette: greens, creams, warm browns, muted terracotta
- Clean and readable typography — a serif for headings, a legible sans-serif for body text
- Use whitespace generously; avoid clutter
- Botanical illustrations or high-quality herb photography where appropriate

### Colors (starting point — adjust to match brand)
```css
:root {
  --color-bg:        #f8f4ee;   /* warm cream */
  --color-surface:   #ffffff;
  --color-primary:   #4a7c59;   /* forest green */
  --color-accent:    #a0522d;   /* earthy sienna */
  --color-text:      #2c2c2c;
  --color-muted:     #6b6b6b;
}
```

### Typography
- Headings: a serif such as `Georgia`, `Playfair Display` (Google Font), or similar
- Body: a humanist sans-serif such as `system-ui`, `Lato`, or `Source Sans Pro`
- Font sizes should scale with `clamp()` for fluid responsiveness

### Accessibility
- All images must have descriptive `alt` text
- Color contrast must meet WCAG AA (4.5:1 for body text, 3:1 for large text)
- Keyboard navigation must work throughout the site
- Use semantic HTML elements (`<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`)

## Page Sections (single `index.html`)

### `#hero`
- Full-width welcoming headline + short tagline
- Call-to-action button scrolling to `#contact`

### `#about`
- Herbalist's story, background, and training
- Philosophy and approach to herbalism
- Photo

### `#services`
- List of offerings: consultations, tinctures, workshops, custom blends, etc.
- Pricing (if desired) or "contact for pricing"
- Booking/contact call-to-action

### `#herbs`
- Profiles of commonly used or favorite herbs
- Each herb: name (common + Latin), properties, uses, notes
- Simple card grid

### `#contact`
- Contact form (use Formspree for free form handling — no backend needed)
- Social media links
- Location/service area and hours (if applicable)

## GitHub Pages Setup

1. Push the repo to GitHub
2. Go to **Settings > Pages** in the repository
3. Under **Source**, select `Deploy from a branch` → `main` → `/ (root)`
4. Save — the site will be live within a minute or two
5. Optionally configure a custom domain under the same Pages settings

## Development Guidelines

- Keep all paths **relative** (e.g., `./css/style.css`, not `/css/style.css`) so the site works in a subdirectory on GitHub Pages
- Test locally by opening `index.html` directly in a browser, or use a simple local server:
  ```bash
  python -m http.server 8080
  # then open http://localhost:8080
  ```
- Optimize images before committing: aim for < 200 KB per image; use `.webp` where possible with `.jpg` fallback
- Keep JavaScript minimal — the site should work without JS enabled

## Out of Scope

- E-commerce / payment processing (would require a backend or a third-party platform)
- User accounts or login
- CMS or database (keep it flat-file for simplicity and free hosting)
- Server-side code (GitHub Pages serves static files only)
