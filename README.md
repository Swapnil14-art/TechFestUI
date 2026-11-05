# PARADOX — Reality Shift Edition

A cinematic, scroll-directed React homepage concept for **PARADOX — Tech Fiesta at NMIMS Shirpur**.

This is a frontend concept implementation, not a deployed website or a connected event-registration system.

## Run locally

Requirements: Node.js 18+ and npm.

```bash
npm install
npm run dev -- --host 0.0.0.0
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## What makes this version different

- **Paradox Themed:** The tech fest ui design is totally taken inspiration from PARADOX and Intersteller movie.

- **Compatible for Phone UI:** Deisng is compatible with pohone ui too


## Project structure

```text
paradox-tech-fiesta/
├── src/
│   ├── main.jsx       # React sections and GSAP ScrollTrigger scenes
│   └── styles.css     # Visual system, CSS 3D forms and responsive rules
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Customization

- Navigation and active section labels: `NAV` in `src/main.jsx`.
- Scroll timing and choreography: the main `useEffect` in `App()` in `src/main.jsx`.
- Event card lineup: `eventItems` in `src/main.jsx`.
- Colors, 3D geometry and responsive breakpoints: `src/styles.css`.
