# Anant Duhan — Portfolio

Personal portfolio website built with React, TypeScript, and Tailwind CSS.

🔗 **Live:** [anantduhan.netlify.app](https://anantduhan.netlify.app/)

---

## Tech Stack

| | |
|---|---|
| **Framework** | React 19 + TypeScript |
| **Styling** | Tailwind CSS v3 |
| **Animations** | Framer Motion |
| **Icons** | Lucide React, React Icons |
| **Build** | Vite |
| **Deploy** | Netlify |

## Features

- Hero entrance animation (respects the OS "reduce motion" setting)
- Dark / light mode that follows the system setting until the visitor picks one
- Case studies for Unified Desk and FossLens, with inline SVG architecture diagrams
- Featured project cards with real code excerpts
- Keyboard focus styles, responsive mobile menu, Open Graph tags

## Sections

- **Hero** — intro, photo, impact stats, CTAs
- **About** — background, focus-area cards
- **Experience** — work history timeline
- **Projects** — MAISON, limiter-core, Unified Desk, FossLens, PMT Reports
- **Skills** — grouped technologies
- **Contact** — email, LinkedIn, GitHub, limiter-core, LeetCode
- **/case-studies/unified-desk**, **/case-studies/fosslens** — case studies

## Getting Started

```bash
# Clone
git clone https://github.com/AnantDuhan/Anant-Duhan-Portfolio.git
cd Anant-Duhan-Portfolio

# Install
npm install

# Dev server
npm run dev

# Production build
npm run build
```

## Project Structure

```
src/
├── assets/          # Profile photo (profile.webp)
├── components/      # Hero, About, Projects, Skills, Experience, Contact, Footer, Navbar
├── data/            # All content (projects, skills, experience, links)
├── hooks/           # useTheme
├── components/case-study/  # Shared case study layout + SVG diagram primitives
├── pages/           # Unified Desk and FossLens case studies
└── index.css        # Tailwind directives + gradient-text utility

index.html           # Meta tags, Open Graph tags, Google Fonts
public/_redirects    # Netlify SPA fallback for /case-studies/*
public/resume.pdf    # Resume linked from the hero (add this file)
```

## Customisation

All content lives in `src/data/index.ts` — update projects, skills, experience, and contact links there without touching any component.

---

© 2026 Anant Duhan