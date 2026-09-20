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

- Scroll-driven animations powered by Framer Motion
- Dark / light mode with `localStorage` persistence
- Magnetic hover effect on hero photo
- Animated timeline line in Experience section
- Staggered skill bar reveals
- Responsive mobile menu
- Animated theme toggle (sun ↔ moon)

## Sections

- **Hero** — intro, photo, stats, CTAs
- **About** — background, cards
- **Projects** — MAISON, FossLens, PMT Reports, limiter-core
- **Skills** — animated bars + tech chip cloud
- **Experience** — timeline with animated line draw
- **Contact** — links to GitHub, MAISON, LinkedIn

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
├── assets/          # Profile photo
├── components/      # Hero, About, Projects, Skills, Experience, Contact, Footer, Navbar
├── data/            # All content (projects, skills, experience, links)
├── hooks/           # useInView, useTheme
└── index.css        # Tailwind directives + gradient-text utility
```

## Customisation

All content lives in `src/data/index.ts` — update projects, skills, experience, and contact links there without touching any component.

---

© 2026 Anant Duhan