# PARADOX — Reality Shift Edition

A cinematic, scroll-directed React homepage concept for **PARADOX — Tech Fiesta at NMIMS Shirpur**.

This is a frontend concept implementation, not a deployed website or a connected event-registration system.

## Run locally

Requirements: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## What makes this version different

- **Pinned Reality Shift sequence:** GSAP ScrollTrigger pins the scene while scrolling drives a three-state visual transition: the known world, two conflicting truths, and the frame breaking/reassembling.
- **Impossible geometry:** CSS 3D prism/gate forms, orbital rings, fractured slices, shards and light fields. No large video file or WebGL dependency is required for the core effect.
- **Scroll-led storytelling:** Hero parallax, scroll progress bar, active section rail, event-card reveals and section transitions.
- **Editorial visual system:** oversized typography, crimson signals, mono technical labels, grid/noise overlays, deep negative space and asymmetric sections.
- **Responsive implementation:** desktop navigation, mobile menu, mobile-specific scene composition and reduced-motion handling.

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

## Accuracy and publishing notes

- Event date remains **TO BE ANNOUNCED**. Countdown values remain placeholders until an official date is supplied.
- Registration is intentionally marked **NOT ANNOUNCED** and is not wired to a backend.
- BGMI, VALORANT and EA SPORTS FC are presented as concept event tiles only. Confirm the official lineup, game titles, rules and formats before publication.
- Sponsor or partner identities are not displayed. The partner area is a neutral visual placeholder.
- No event schedule, prizes, audience figures, contact details or social handles have been invented.

## Motion and performance notes

- The large scroll scene is driven by GSAP ScrollTrigger rather than a full-screen video sequence, keeping the project lighter and letting the animation respond to scroll position in both directions.
- The dimensional forms are CSS rather than a real-time 3D model. This keeps the first implementation relatively lightweight, but the final look still needs testing on target phones and laptops.
- `prefers-reduced-motion` disables the GSAP scene animations.
- Before production, test on real iOS/Android devices, validate keyboard navigation, tune ScrollTrigger pinning on mobile browsers, and compress/host fonts locally if required.

## Customization

- Navigation and active section labels: `NAV` in `src/main.jsx`.
- Scroll timing and choreography: the main `useEffect` in `App()` in `src/main.jsx`.
- Event card lineup: `eventItems` in `src/main.jsx`.
- Colors, 3D geometry and responsive breakpoints: `src/styles.css`.
