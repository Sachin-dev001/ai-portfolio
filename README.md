# Sachin Sharma — AI Engineer Portfolio

A production-grade, ATS/Recruiter-optimized portfolio engineered specifically for **AI Engineer**, **GenAI Engineer**, and **Agentic Systems** roles.

Designed with the **"Modern AI Lab / Infrastructure" aesthetic** (Linear / Vercel style) rather than generic 3D fluff:
- **Interactive 3D Semantic Vector Space**: Built with Three.js, visualizes embedding clusters (Agents, RAG, Evals, Inference) with cosine-distance topology, mouse drag orbit, and node hover inspection.
- **Deep-Dive System Architecture Case Studies**: Interactive flow diagrams and hard-metric impact for **AutoApply** (Autonomous Stealth Agent) and **VideoSage AI** (Timestamped Video RAG).
- **Live RAG & Eval Playground**: Interactive simulator allowing recruiters and hiring managers to toggle cross-encoder rerankers, adjust similarity thresholds, and inspect live Ragas/DeepEval benchmark scores.
- **Structured Skills Bento Grid**: Taxonomy organized by functional AI domains (LLMs, Multi-Agent, Vector Search, LLMOps, Serving, Backend).
- **Direct Recruiter CTAs**: 1-click ATS Resume PDF download and email clipboard copy.

---

## 🚀 Quick Start

All project files and heavy dependencies are located in `D:\ai-portfolio`:

```bash
# Navigate to the project directory
cd D:\ai-portfolio

# Start the local development server (with hot reload)
npm run dev

# Or test the production build locally
npm run build
npm run preview
```

Open `http://localhost:5173/` in your browser.

---

## 📁 Project Structure

```
D:\ai-portfolio/
├── .planning/                  # GSD roadmap, requirements, and project state
├── public/
│   └── Sachin_Sharma_AI_Engineer_Resume.pdf  # Downloadable ATS resume
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Header with live status badge and quick nav
│   │   ├── Hero.jsx            # Value proposition, TTFT latency, precision metrics
│   │   ├── VectorSpace3D.jsx   # Three.js 3D vector space with hover HUD
│   │   ├── Projects.jsx        # AutoApply & VideoSage AI case studies & architecture
│   │   ├── AIPlayground.jsx    # Interactive RAG vs. Naive search & Eval simulator
│   │   ├── SkillsGrid.jsx      # Technical stack bento grid
│   │   ├── Experience.jsx      # AU Foundation experience & Poornima Univ degree
│   │   ├── ResumeModal.jsx     # In-browser ATS resume preview & download
│   │   ├── Footer.jsx          # Contact card, email copy, and social links
│   │   └── Icons.jsx           # SVG icons for GitHub & LinkedIn
│   ├── App.jsx                 # Main layout assembly
│   ├── index.css               # Tailwind CSS v4 styling & dark theme tokens
│   └── main.jsx
├── package.json
└── vite.config.js
```

---

## 🎨 Easy Customization & Redesign

If you want to tweak or redesign any aspect:
1. **Colors & Themes**: Modify `src/index.css` or Tailwind classes in components (`cyan-400`, `emerald-400`, `purple-400`).
2. **Projects**: Edit `src/components/Projects.jsx` to update descriptions, metrics, or add new projects.
3. **3D Embedding Nodes**: Edit the `EMBEDDING_NODES` array at the top of `src/components/VectorSpace3D.jsx` to add or modify clusters, coordinates, or metrics.
4. **Resume**: Replace `public/Sachin_Sharma_AI_Engineer_Resume.pdf` whenever you update your resume.

---

## 🌐 Deploy to Vercel (1-Click)

1. Push this folder to your GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "feat: AI engineer portfolio with 3D vector space"
   git remote add origin https://github.com/Sachin-dev001/<your-repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) -> **Add New Project** -> Select your repo.
3. Framework Preset: **Vite**
4. Click **Deploy**!
