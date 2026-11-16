# Antigravity Portfolio Phase 2: Implementation & Verification Plan (V2)

## Overview & Objectives
This document establishes the architecture and execution plan for Phase 2 of Sachin Sharma's AI & Agentic Systems Engineering Portfolio (`D:\ai-portfolio`), following the exact specifications in `c:\Users\t\Downloads\antigravity_portfolio_redesign_plan (2).md` reverse-engineered from Quorvel (`https://www.quorvel.tech/`).

---

## Targeted Files & Components

| Component / File | Role & Target Modifications |
| :--- | :--- |
| `src/components/AWNavPill.jsx` | Refactor to permanent fixed navbar (`position: fixed; top: 0; left: 0; right: 0; z-index: 1000`), warm cream frosted glass `rgba(250, 246, 239, 0.88)`, animated expanding coral underline bar (`#FF5A4F`), high-impact coral pill CTA button (`Resume →`), full-width hand-drawn organic wavy SVG line with soft paper drop-shadow, and responsive mobile slide-down drawer. |
| `src/App.jsx` | Mount `<AWNavPill />` as fixed header, add top padding `pt-20 sm:pt-24` to `<main>` to prevent content clipping, mount new `<AWGlobeSection />` right after `<AWEvalsSection />` (before Credentials), and verify global container overflow constraints. |
| `src/components/AWGlobeSection.jsx` *(New File)* | Interactive 2-column Sketchbook Globe Section (`#everywhere`):<br>• **Left Column**: Dashed outer orbital ring (`border: 2px dashed #6E6A63` / `stroke-dasharray: 6 6`, `60s` continuous rotation), orbiting teal paper-plane icon (`#2EC4B6`, 2px ink stroke), inner 3D white sphere with soft blue radial glow & periwinkle blue (`#6B93F6`) latitude/longitude grid, 4 interactive nodes (Purple Qdrant, Amber Gemini, Green Playwright, Coral Telegram), pointer drag physics with inertia damping + auto-rotation, and 3 cycling/cross-fading monospace telemetry pills (`3.2s` interval).<br>• **Right Column**: Teal handwritten eyebrow (`deployed & production-ready everywhere ✎`), bold serif H2 (`Ships wherever your teams build.`), copy, and 3 handwritten script bullet points (`→`). |
| `src/components/AWProcessSection.jsx` | Add horizontal touch-swipe delta detection (`onTouchStart`, `onTouchMove`, `onTouchEnd`) to the 5-step methodology 3D carousel, scale active card to 100% width on `< 640px`, and optimize mobile button padding. |
| `src/components/AWHeroCinematic.jsx` | Optimize mobile stack alignment, tighten card margins for `< 480px`, and prevent badge overflow. |
| `src/components/AWBuiltSection.jsx` | Refactor button wraps (`flex-wrap: wrap; gap: 8px`) and ensure terminal internal scrolling height on mobile. |
| `src/components/AWEvalsSection.jsx` | Ensure 2×2 mobile grid layout for the 4 KPI boxes (`92.4%`, `0.96`, `680ms`, `Demoted`). |
| `src/components/AWFloatingStatus.jsx` | Mobile position docking (`bottom: 12px; left: 12px; font-size: 0.75rem`) and auto-hide/fade when entering footer. |
| `src/index.css` & `src/quorvel-tokens.css` | Enforce `overflow-x: clip;` on `html, body`, add `@keyframes orbitmove` for CSS offset-path paper-plane flight, add globe grab/grabbing cursors and paper pill drop shadow styles. |

---

## Upgrade 1: Persistent Sticky Wavy Navbar Specifications
- **Positioning**: Fixed to top (`fixed top-0 left-0 right-0 z-[1000]`).
- **Surface**: Warm cream paper translucency: `background: rgba(250, 246, 239, 0.88); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);`.
- **Logo (Left)**: Blue paper plane SVG (`#4A80F0`, 2px ink stroke) tilted + Bold serif `Sachin Sharma` (`font-size: 1.5rem; font-weight: 800; color: #1A1917`).
- **Nav Links**: 7 clean sans links (`Architecture`, `Work`, `Capabilities`, `Process`, `Evals Lab`, `Credentials`, `FAQ`) with animated expanding coral-red (`#FF5A4F`) underline bar on hover (`transform: scaleX(0)` to `scaleX(1)`).
- **CTA (Right)**: Coral pill `Resume →` with `#FF5A4F` fill, white text, 2px `#1A1917` border, `3px 3px 0px #1A1917` hard offset shadow (`hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none`).
- **Wavy Bottom Border**: Organic hand-drawn inline SVG wave (`viewBox="0 0 1440 14"`, `preserveAspectRatio="none"`) with cubic bezier path, `#1A1917` ink stroke (1.75px), filled with `#FAF6EF`, and soft drop-shadow `filter: drop-shadow(0px 4px 6px rgba(26, 25, 23, 0.08))`.
- **Mobile Menu**: Ink-bordered toggle button (`40px × 40px`, `☰`/`✕`), full-width paper dropdown drawer with wavy bottom border, tap-friendly 44px links.

---

## Upgrade 2: Interactive Sketchbook Globe Section (`#everywhere`) Specifications
- **Container**: 2-column layout (`grid-template-columns: 0.95fr 1.05fr; gap: 48px; items-center;` on desktop; `1fr` stacked on mobile).
- **Outer Orbital Ring**: `360px × 360px` (scaled to `260px` on mobile), circular dashed ink ring (`stroke: #6E6A63; stroke-width: 2; stroke-dasharray: 6 6; animation: spin 60s linear infinite`).
- **Orbiting Teal Paper Plane**: Mint/teal paper-plane SVG (`fill: #2EC4B6; stroke: #1A1917; stroke-width: 2px`) traveling along outer orbit path with tangent angle rotation (`offset-path: circle(46% at 50% 50%); animation: orbitmove 18s linear infinite;`).
- **Inner Globe Sphere**: `300px × 300px` (scaled to `210px` on mobile) crisp white sphere with soft periwinkle radial glow, `2.5px solid #1A1917` ink border.
- **3D Latitude/Longitude & Nodes**:
  - Horizontal latitude rings in periwinkle blue (`#6B93F6`, 1.75px).
  - Rotating vertical longitude meridians projected in orthographic 3D space (`cx + cos(theta)*r`, `sin(theta)`).
  - 4 Colored Interactive Nodes:
    - Purple (`#9B5DE5` — Qdrant HNSW Vector Cluster)
    - Amber (`#F59E0B` — Gemini 2.5 Flash Inference Node)
    - Green (`#22C55E` — Playwright Stealth Runner)
    - Coral (`#FF5A4F` — Telegram HITL Webhook Gate)
  - Drag Physics: `pointerdown`, `pointermove`, `pointerup` with momentum velocity damping (`vel *= 0.92`), idle rotation (`+0.0035/frame`), and mobile single-finger drag with `touch-action: pan-y`.
- **3 Floating Monospace Status Pills**:
  - Left Pill (`-2deg` tilt): Cycles every `3.2s` between `gate · precision>+28%`, `human approved ✋`, `qdrant.hnsw · <15ms`.
  - Bottom Pill (`1deg` tilt): Cycles between `recovered ✓`, `0 bot flags ✓`, `faithfulness · 0.96 ✓`.
  - Right Pill (`1.5deg` tilt): Cycles between `in-jaipur · global-remote`, `us-east · eu-west`, `60fps sse · active`.
- **Right Column Content**:
  - Eyebrow: `deployed & production-ready everywhere ✎` (Teal, handwritten Caveat).
  - Title: `Ships wherever your teams build.` (Bold Serif Fraunces H2).
  - Body: *"Cloud-native & remote-ready by default. My RAG pipelines are containerized, my stealth agents are fault-tolerant, and my evaluation suites are deterministic — deployed on cloud microservices or inside your VPC."*
  - 3 Script Bullet Points:
    - `→ videosage.rag · sub-800ms streaming across 5,000+ chunks`
    - `→ autoapply.stealth · 50+/day runs routed to Telegram HITL`
    - `→ evals.triad · 92.4% precision verified on every commit`

---

## Upgrade 3: Full Mobile & Tablet Responsiveness Plan
1. **Global Anti-Overflow**:
   - `overflow-x: clip` applied to root containers and body.
   - Rotated cards (`-1.5deg`) clamped on mobile to `±0.5deg` to eliminate horizontal scroll bleed.
2. **Carousel Touch-Swipe**:
   - Touch gesture listeners added to `AWProcessSection.jsx`.
3. **Stacked Responsive Grids**:
   - Capabilities 2×2 grid → 1 column on `< 640px`.
   - Credentials 3 cards → 1 column on `< 768px`.
   - Evals Lab KPI 4 boxes → 2×2 grid on mobile.
4. **Touch Target Dimensions**:
   - Minimum `44px × 44px` on all mobile buttons, links, and accordions.

---

## Verification Plan
1. **Vite Production Build**: `npm run build` with zero errors.
2. **Desktop Viewport Test**: Headless Chrome capture at `1440 × 900` to verify persistent navbar, wavy drop shadow, and 2-column globe layout.
3. **Mobile Viewport Test**: Headless Chrome capture at `390 × 844` to verify mobile drawer, 1-column stacked globe, 2×2 evals grid, and zero horizontal scroll overflow.
4. **Interactive Verification**: Validate drag physics, animation loops, and resume modal opening.
