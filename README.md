# Excel SQL Career Academy 🎓

A premium dark-themed learning platform for mastering **Microsoft Excel** and **SQL** — built with React, TypeScript, Tailwind CSS, and Vite.

## ✨ Features

- **Hero Section** — animated counters, ambient gradient orbs, CTAs
- **Learning Roadmaps** — phased Excel & SQL paths with topic tracking
- **Interactive Quiz** — 8-question adaptive quiz with instant feedback
- **Progress Tracker** — clickable checklist with SVG progress rings
- **Interview Questions** — accordion Q&A for real interview prep
- **Dark Glassmorphism UI** — blur cards, gradient accents, grid overlays
- **Mobile Responsive** — hamburger nav, fluid layouts

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm

### Install & Run

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
excel-sql-academy/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── GlassCard.tsx
│   │   │   └── Badge.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── RoadmapSection.tsx
│   │   │   ├── QuizSection.tsx
│   │   │   ├── ProgressSection.tsx
│   │   │   └── InterviewSection.tsx
│   │   ├── NavBar.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   ├── roadmaps.ts
│   │   ├── quiz.ts
│   │   └── interview.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── vercel.json
```

## 🌐 Deploy to Vercel

### Option 1: Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2: GitHub Integration
1. Push to GitHub
2. Import repo at [vercel.com/new](https://vercel.com/new)
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy!

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| TypeScript | Type safety |
| Tailwind CSS 3 | Utility-first styling |
| Vite 5 | Build tool & dev server |
| PostCSS + Autoprefixer | CSS processing |

## 📝 Customisation

- **Add quiz questions** → `src/data/quiz.ts`
- **Add roadmap topics** → `src/data/roadmaps.ts`
- **Add interview questions** → `src/data/interview.ts`
- **Change accent colors** → update hex values in `tailwind.config.js` and inline styles
- **Add a new section** → create in `src/components/sections/`, add to `NavSection` type and `App.tsx` switch

## License

MIT
