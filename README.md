# State Cancer Institute — Website

Static website for the State Cancer Institute, Kurnool. Built as a plain HTML/CSS/JS site — no build step, no framework, no dependencies. Just open `index.html` in a browser.

## Stack

- **HTML5** — 9 static pages
- **CSS3** — single `styles.css`, no preprocessor
- **Vanilla JS** — 2 small scripts (`carousel.js`, `ui.js`)
- **Fonts** — Merriweather (headings) + Inter (body) from Google Fonts

Design system: Indian government / academic style. Navy `#0d2247` primary, maroon `#7d1d3f` accent, gold `#b07c2a` highlight, cream `#faf7f0` backgrounds.

## Pages

| File | Purpose |
|---|---|
| `index.html` | Home — hero carousel, welcome, quick stats, latest news |
| `about.html` | About the institute, history, milestones |
| `equipment.html` | Equipment & infrastructure — radiation/medical/surgical oncology |
| `research.html` | Research programmes, publications, HBCR |
| `faculty.html` | Faculty directory by department |
| `gallery.html` | Photo gallery — facilities + outreach events |
| `patient-care.html` | Patient care services, OPD hours, admission info |
| `csr.html` | CSR donations, donor recognition |
| `contact.html` | Contact info, location, phone, email |

## Assets

All images live in `images/`.

| File | Used In | Description |
|---|---|---|
| `ap-emblem.png` | All pages (header) | Government of Andhra Pradesh emblem |
| `sci-emblem.png` | All pages (header) | State Cancer Institute emblem |
| `linac-elekta.jpg` | equipment, gallery | Elekta Versa HD Linear Accelerator (Radiation Oncology) |
| `ct-simulator.jpg` | equipment, gallery | Siemens CT Simulator (Treatment Planning) |
| `ot-1.jpg` | equipment, gallery | Modular OT complex — team at work |
| `ot-2.jpg` | gallery | Onco-Surgical Team during procedure |
| `ot-3.jpg` | gallery | OT — Post-Operative Handover |
| `ot-4.jpg` | gallery | OT — Onco-Anaesthesia & Instruments |

Adding a new photo:

1. Drop the file into `images/` (use a clean lowercase name, no spaces)
2. Reference it in the target HTML — either as `<img src="images/name.jpg">` or via a CSS class in `styles.css`
3. For gallery tiles, use `<div class="cimg cimg-photo cimg-YOURNAME">` and add `.cimg-YOURNAME { background-image: url('images/name.jpg'); }` to `styles.css`

## Running Locally

The site is fully static — no server required. Options:

**Just open the file:**
```
Double-click index.html
```

**Or serve with Python** (better — lets internal links work as `/about.html`):
```bash
python -m http.server 8090
```
Then open http://localhost:8090

## File Structure

```
sci-site/
├── images/               # All images (emblems, facility photos)
├── index.html            # Home page
├── about.html
├── equipment.html
├── research.html
├── faculty.html
├── gallery.html
├── patient-care.html
├── csr.html
├── contact.html
├── styles.css            # All styles
├── carousel.js           # Home page hero carousel
├── ui.js                 # Nav interactions, accessibility helpers
└── README.md
```

## Deploying

The whole site is static — deploy to any host that serves files:

- **GitHub Pages** — push to a repo, enable Pages on `main`
- **Netlify / Vercel** — drag & drop the folder, done
- **Government hosting** — upload via SFTP, works with any web server (Apache, Nginx, IIS)

No environment variables, no build step, no CI needed.

## Editing

- **Text changes** — open the relevant `.html` file and edit directly
- **Colours / fonts / spacing** — edit `styles.css`
- **Carousel slides on home** — `index.html` (search for `cslide`)
- **Navigation menu** — every page has the same `<nav class="primary-nav">` block; update all 9 files when adding a new page

## Credit

Website designed and built by **Naga Pranav Wuppala** — [pranavwuppala.in](https://pranavwuppala.in)
