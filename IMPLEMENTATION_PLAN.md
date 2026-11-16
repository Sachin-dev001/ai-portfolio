# Comprehensive Implementation Plan: Quorvel Paper-and-Ink Neo-Brutalist Redesign

## 1. Executive Summary & Design System Reverse-Engineering
Based on our deep reverse-engineering of **Quorvel** (`https://www.quorvel.tech/`), the goal is to transform **Sachin Sharma's Portfolio** from a dark/black neon-green terminal theme into a tactile, neo-brutalist **"Paper, Ink & Sketchbook"** stationery aesthetic while preserving 100% of real portfolio content, data, interactive simulation logic, credentials, and links.

---

## 2. Reverse-Engineered Design Tokens (`tokens.css`)

### A. Color Palette
```css
:root {
  /* Canvas & Paper Surfaces */
  --paper: #fbf3e2;         /* Warm cream tactile paper background */
  --paper2: #f4e9cf;        /* Darker cream contrast / subheaders / table bands */
  --card: #fffaf0;          /* Warm ivory/cream card surface */
  --card-white: #ffffff;    /* Pure crisp white card surface */
  --card-yellow: #fff6e0;   /* Pale yellow highlight card surface */
  --card-mint: #eafaf4;     /* Pale mint/teal highlight surface */
  --card-blue: #eef3ff;     /* Pale cobalt/blue highlight surface */
  --card-pink: #fff2f2;     /* Pale pink highlight surface */

  /* Ink & Typography */
  --ink: #241f1a;           /* Deep rich charcoal black ink (primary text & borders) */
  --ink2: #544b3f;          /* Secondary warm ink / body text */
  --faint: #8c8270;         /* Muted slate faint ink / disabled text */
  --line: #241f1a;          /* Standard 2px solid ink border */
  --rule: rgba(36, 31, 26, 0.16); /* Faint ruled notebook line */

  /* Stationery Marker, Tape & Badge Accents */
  --coral: #ff5a5f;         /* Coral / red CTA pill & danger/primary highlights */
  --sun: #ffc23c;           /* Amber / yellow marker highlight */
  --teal: #1fbfa4;          /* Mint / teal status badges & live accents */
  --cobalt: #3a7bff;        /* Cobalt blue tape strips & eyebrows */
  --grape: #8b5cf6;         /* Purple sticker badge accent */
  --leaf: #36c25f;          /* Emerald green live indicator dot */
  --pink: #ff7eb6;          /* Pink marker highlighter accent */

  /* Neo-Brutalist Hard Offset Shadows */
  --shadow: 6px 6px 0 var(--ink);
  --shadow-sm: 3px 3px 0 var(--ink);
  --shadow-lg: 10px 12px 0 var(--ink);
  --shadow-card: 4px 4px 0 var(--ink);

  /* 4-Role Typography System */
  --disp: "Fraunces", Georgia, serif;
  --hand: "Caveat", cursive;
  --sans: "Nunito", system-ui, sans-serif;
  --mono: "JetBrains Mono", monospace;
}
```

### B. Typography Specifications
1. **Display / Headings (`--disp`):** `"Fraunces", Georgia, serif`  
   - High-contrast editorial bold serif with optical sizing (`opsz: 9..144`).
   - Used for `SACHIN SHARMA`, Hero H1, Section Titles, and Marquee text.
2. **Body & UI Sans (`--sans`):** `"Nunito", system-ui, sans-serif`  
   - Friendly rounded modern sans-serif with weights `400, 600, 700, 800`.
   - Used for navbar links, card descriptions, buttons, and FAQs.
3. **Monospace / Ledger (`--mono`):** `"JetBrains Mono", monospace`  
   - Developer terminal font for log streaming, metrics, KPI pills, and stack tags.
4. **Handwritten Marker Script (`--hand`):** `"Caveat", cursive`  
   - Organic marker script (`wght: 500, 700`) for eyebrows (`specializing in production rag ✎`), sticky notes, callout arrows (`spin it →`), and sticker badges.

---

## 3. Signature Stationery Primitives to Build

1. **`<WavyDivider />` & `<WavyNavbar />`:**
   - Translucent warm cream sticky header with `-webkit-mask` wavy SVG bottom border.
   - Contains Brand, 8 Section Links, Social Icons, and Coral `Resume →` CTA pill with hard ink shadow.
2. **`<MaskingTape color="yellow|blue|mint" />`:**
   - Semi-transparent masking tape strip with dashed border (`rgba(36,31,26,0.35)`) and subtle rotation (`-4deg` to `+3deg`).
3. **`<PushPin color="coral|cobalt|teal" />`:**
   - Circular pushpin with hard black border and offset drop shadow (`3px 3px 0 var(--ink)`).
4. **`<MarkerHighlight color="yellow|teal|pink" />`:**
   - Brushstroke background highlighting key phrases behind display text.
5. **`<WavyStrikethrough color="coral" />`:**
   - SVG double wavy strike line crossing out old/brittle concepts.
6. **`<StickerBadge color="purple|amber" />`:**
   - Circular rotated badge (`-12deg`) with hard ink border and drop shadow.
7. **`<PaperPlaneDoodle />` & `<OrbitalGlobe />`:**
   - Custom hand-drawn vector doodle SVGs matching Quorvel's branding.
8. **`<RuledNotebookSheet />`:**
   - Punched-hole spiral paper with red margin line and ruled notebook background lines.

---

## 4. Section-by-Section Migration Roadmap

- **Section 1: Sticky Wavy Navbar & Floating Status Pill**
  - Brand: `SACHIN SHARMA` + Paper Plane SVG + green live dot.
  - Links: `Architecture`, `Work`, `Capabilities`, `Process`, `Why Sachin`, `Evals Lab`, `Credentials`, `FAQ`.
  - CTA: Coral Pill `Resume →` with press-down effect (`:active { transform: translate(2px, 2px); box-shadow: 1px 1px 0 var(--ink); }`).
  - Persistent bottom-left pill: `● Open to work · AI Engineer` on ivory card with hard ink border.

- **Section 2: Hero Section (2-Column Paper & Taped Cards)**
  - Left: Cobalt handwritten eyebrow `specializing in production rag, autonomous agents & llmops ✎`, Bold Serif H1 with yellow marker highlight, Lead copy, and dual buttons (`Explore Console →` and `Flagship Work`).
  - Right: Stack of 3 overlapping masking-taped index cards (`rag_retrieval.log`, `stealth_agent.run`, `eval_guardrails.pass`) + Purple circular sticker badge `zero hallucinations!`.

- **Section 3: Flagship Architecture Console (`Built like this.`)**
  - Header: Coral handwritten eyebrow `flagship architecture console ✎`, Bold Serif H2 with teal marker highlight.
  - Paper-and-ink macOS ledger window with window dots, URL bar `https://videosage.ai/rag-pipeline`, `60 FPS SSE STREAM` badge.
  - Toggles for `VideoSage AI` and `AutoApply`, plus interactive simulation player.
  - Left pane: Ruled notebook blueprint card with tech stack monospace pills.
  - Right pane: `live_telemetry.log` ink terminal streaming live events.

- **Section 4: Tilted Dark Marquee Strip**
  - Angled (`-1.2deg`) dark charcoal banner with white serif text separated by yellow squares:
    `✦ PYTHON 3.12 · ASYNC CORE ✦ DOCKER & MICROSERVICES ✦ PYTORCH & HUGGINGFACE ✦ GEMINI 2.5 FLASH ✦ QDRANT HNSW ✦ PLAYWRIGHT STEALTH ✦`

- **Section 5: Ruled-Paper Statement & 4 Sticky Metric Cards**
  - Faint horizontal notebook lines background.
  - Bold serif statement: *"Production-grade engineering, AI-accelerated where it counts, bespoke where it matters."*
  - 4 Floating sticky cards: `85%`, `+28%`, `0 Flags`, `<800ms`.

- **Section 6: Recent Work — Flagship AI Systems**
  - 2 Large tilted sketchbook project cards with `2px` black ink borders and `6px 6px 0 var(--ink)` shadows:
    - Card 1 (Pale yellow): AutoApply Stealth Web Agent with 3 KPI boxes and Coral CTA button.
    - Card 2 (Pale mint): VideoSage AI Timestamp-Aware Video RAG with 3 KPI boxes and Dark ink CTA button.

- **Section 7: Core Capabilities (2×2 Grid)**
  - Header with wavy strikethrough over `brittle AI demos` and pink marker on `production engineering.`.
  - 4 Cards: `01 / RETRIEVAL ARCHITECTURE`, `02 / AGENT SYSTEMS`, `03 / EVALS & OBSERVABILITY`, `04 / PRODUCTION SYSTEMS`.

- **Section 8: Engineering Methodology (Interactive 3D Carousel)**
  - Quorvel's exact mathematical 3D spinning dial (`primDial`) with 5 stepper cards (`01-05`), red pushpins, circular arrow buttons (`←` and `→`), and drag/click interaction.

- **Section 9: Why Engineering Teams Hire Sachin (4 Taped Cards)**
  - 4 Cards numbered `001-004` with masking tape strips, monospace metric footers, and hard ink shadows.

- **Section 10: Interactive Evals & RAG Benchmarking Lab**
  - Interactive toggle for BAAI Cross-Encoder with dynamic metric recalculations (`+28% precision lift`, `680ms TTFT`).
  - Punched-hole spiral notebook output card with red margin line and grounded citation display.

- **Section 11: Education & Credentials**
  - 3 Tilted pricing-style credential cards:
    - B.Tech CSE (Poornima University, 2022–2026).
    - Certificate in AI & DS from Skill India (Govt. of India / NSDC) with accredited starburst badge.
    - Independent Applied Engineering.

- **Section 12: Technical FAQ, Bottom CTA & Dark Ink Footer**
  - 5 Ink-bordered accordion cards with hard shadows.
  - Big CTA card with paper plane doodles and yellow highlight.
  - Deep charcoal dark ink footer with social links, copyright, and yellow handwritten taglines.
