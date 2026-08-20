# MISL Technologies Website

> Beyond Code. Building Intelligence.

A Next.js 14 website for MISL Technologies — a modern, responsive, TypeScript-first application.

---

## Tech Stack

| Tool | Version |
|---|---|
| Next.js | 14 (App Router) |
| TypeScript | 5 |
| Tailwind CSS | 3 |
| ESLint | 8 |
| Prettier | 3 |
| Font | Inter (via next/font/google) |

---

## Getting Started

### 1. Clone the repository

```bash
git clone <repo-url>
cd misl
```

### 2. Set up environment variables

```bash
cp .env.local.example .env.local
```

Open `.env.local` and fill in your values. See `.env.local.example` for descriptions of each variable.

### 3. Install dependencies

```bash
npm install
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

```bash
npm run dev       # Start dev server on http://localhost:3000
npm run build     # Build for production
npm run start     # Run production build locally
npm run lint      # Lint with ESLint
```

---

## Folder Structure

```
src/
├── app/
│   ├── (home)/         # Homepage route
│   ├── services/       # Services page
│   ├── solutions/      # Solutions page
│   ├── portfolio/      # Portfolio page
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── globals.css     # Global styles + Tailwind
│   └── layout.tsx      # Root layout (font, metadata)
├── components/
│   ├── common/         # Nav, Footer (shared across all pages)
│   ├── home/           # Hero, MISL grid
│   ├── services/       # Services-specific components
│   ├── portfolio/      # Portfolio-specific components
│   └── ui/             # Reusable UI: Button, Card, Container, Section, Grid
├── lib/                # Utility functions, API helpers
├── hooks/              # Custom React hooks
└── types/              # TypeScript interfaces and types
public/
├── images/
├── icons/
└── fonts/
```

---

## Module Assignments

| Module | Developer | Branch | Pages |
|---|---|---|---|
| 1 — Project Setup | Sharif (Lead) | `feature/sharif-setup` | Foundation, UI components |
| 2 — Nav, Footer & Homepage | Louis | `feature/louis-nav-hero` | Home, Navigation, Footer |
| 3 — Services & Solutions | Imaan | `feature/imaan-services` | /services, /solutions |
| 4 — Portfolio, About & Contact | Mus | `feature/mus-portfolio-contact` | /portfolio, /about, /contact |

---

## Branch Naming Convention

```
main                          # Production-ready code
feature/sharif-setup          # Module 1 — Sharif
feature/louis-nav-hero        # Module 2 — Louis
feature/imaan-services        # Module 3 — Imaan
feature/mus-portfolio-contact # Module 4 — Mus
```

### Creating your branch

```bash
git checkout main
git pull origin main
git checkout -b feature/<your-branch-name>
```

---

## Commit Message Format

```
[FEAT] Add hero section with typing animation
[FIX] Fix mobile menu z-index issue
[STYLE] Update button hover effects
[REFACTOR] Extract ServiceCard into separate component
[DOCS] Update README with setup instructions
```

---

## Brand Colors

| Token | Hex | Usage |
|---|---|---|
| `navy` | `#0A192F` | Primary background |
| `cyan` | `#00FFAB` | Primary accent, CTAs |

Use via Tailwind: `bg-navy`, `text-cyan`, `border-cyan`, etc.

---

## Reusable UI Components

All components live in `src/components/ui/` and are exported from `src/components/ui/index.ts`.

```tsx
import { Button, Card, Container, Section, Grid } from '@/components/ui';
```

| Component | Props | Notes |
|---|---|---|
| `Button` | `variant`, `onClick`, `children`, `className`, `type` | variants: `primary`, `secondary`, `outline` |
| `Card` | `children`, `className` | Hover effect included |
| `Container` | `children`, `className` | max-w-7xl, centered |
| `Section` | `children`, `className`, `id` | py-16 md:py-24 |
| `Grid` | `cols`, `gap`, `children`, `className` | cols: 1–4, responsive |
