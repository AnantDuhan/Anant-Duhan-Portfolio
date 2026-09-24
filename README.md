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
- Animated timeline line in Experience section
- Staggered skill bar reveals
- Responsive mobile menu
- Animated theme toggle (sun ↔ moon)

## Sections

- **Hero** — intro, photo, impact stats, CTAs
- **About** — background, focus-area cards
- **Experience** — timeline with animated line draw
- **Projects** — MAISON, limiter-core, FossLens, PMT Reports
- **Skills** — animated bars + tech chip cloud
- **Contact** — links to GitHub, limiter-core, LinkedIn, LeetCode

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
├── assets/          # Profile photo (profile.jpeg)
├── components/      # Hero, About, Projects, Skills, Experience, Contact, Footer, Navbar
├── data/            # All content (projects, skills, experience, links)
├── hooks/           # useInView, useTheme
└── index.css        # Tailwind directives + gradient-text utility

index.html           # Meta tags, Open Graph tags, Google Fonts
```

## Customisation

All content lives in `src/data/index.ts` — update projects, skills, experience, and contact links there without touching any component.

---

© 2026 Anant Duhan