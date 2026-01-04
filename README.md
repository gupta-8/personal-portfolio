<div align="center">

# Harsh Gupta · Modern Portfolio

A premium, glassmorphism-inspired portfolio built with **React**, **TypeScript**, and **Tailwind CSS** — designed for speed, accessibility, and a polished personal brand.

[Live Demo](https://harshgupta.me) · [Report Bug](https://github.com/gupta-8/portfolio/issues) · [Request Feature](https://github.com/gupta-8/portfolio/issues)

<br/>

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)

</div>

---

## About

This project is a **minimal, modern portfolio template** with a premium “glass” aesthetic — built to showcase your work with clean typography, smooth motion, and a solid dark/light theme system.

> **Goal:** make your projects and story feel “expensive” without sacrificing performance or accessibility.

---

## Highlights

| | Feature | What you get |
|---|---|---|
| 🎨 | **Glassmorphism UI** | Subtle blur, gradients, and depth that feel modern (not noisy) |
| 🌓 | **Smart theme system** | Light/Dark mode with OS preference + persistent storage |
| 📱 | **Responsive by default** | Mobile → desktop layouts that stay clean and readable |
| 🧭 | **Modern navigation** | Pill-shaped bottom nav with active states + smooth transitions |
| 🎭 | **Lucide icons** | Crisp vector icons for skills/tools/sections |
| ✨ | **Framer Motion** | Page transitions and micro-interactions that feel premium |
| 🎯 | **Real-time search** | Filter projects by name, description, or tech |
| 📧 | **Contact form** | Netlify Forms integration + basic validation UX |
| ♿ | **Accessibility-first** | ARIA labels, semantic HTML, keyboard-friendly flows |
| 🚀 | **Performance-minded** | Lazy loading, optimized assets, minimal dependencies |

---

## Tech Stack

**Core**
- React 18
- TypeScript
- Vite
- Tailwind CSS

**Supporting**
- Framer Motion (animations)
- React Router (routing)
- Lucide React (icons)

---

## Getting Started

### Prerequisites
- Node.js **16+**
- npm / yarn / pnpm

### Typical setup

```bash
git clone https://github.com/gupta-8/portfolio.git
cd portfolio
npm install
npm run dev
```

The dev server usually runs at `http://localhost:3000`.

---

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Local development |
| `npm run build` | Production build |
| `npm run preview` | Preview production build locally |

---

## Project Structure

```plaintext
frontend/
├── public/                  # Static assets
├── src/
│   ├── assets/              # Images, fonts, icons
│   ├── components/          # Reusable UI + layout components
│   ├── data/                # Projects + social links
│   ├── hooks/               # Custom hooks (theme, etc.)
│   ├── pages/               # Route pages (Home, About, Projects, Contact)
│   ├── styles/              # Global styles + Tailwind utilities
│   ├── utils/               # Helpers (cn, animation variants)
│   ├── App.tsx              # App shell
│   └── main.tsx             # Entry
└── vite.config.ts           # Build config
```

---

## Customization

### 1) Theme & colors
- Tailwind theme settings live in `tailwind.config.js`
- Global background/gradients live in `src/styles/globals.css`

Example:
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#your-color",
        secondary: "#your-color",
      },
    },
  },
};
```

### 2) Projects
Your projects are defined in:

- `src/data/projects.ts`

Each project supports:
- title, description, image
- tech tags
- live/source URLs
- featured flag

### 3) Navigation
Navigation items live in:

- `src/components/layout/BottomNav.tsx`

### 4) Skills & tools
Skills configuration is typically in:

- `src/pages/AboutPage.tsx`

---

## Contact Form (Netlify Forms)

This template supports **Netlify Forms** for a working contact form in production.

**Notes**
- Netlify Forms generally only works when deployed on Netlify.
- After deployment, submissions show up in the Netlify dashboard under **Forms**.

---

## Deployment

### Vercel
Vercel typically detects Vite projects automatically after importing the repo.

### Netlify (recommended)
Suggested settings:
- Build command: `npm run build`
- Publish directory: `dist`
- Base directory: `frontend` (only if your repo uses that folder)

### GitHub Pages
A common approach is using `gh-pages` with the `dist` output directory.

---

## Performance & Accessibility

Target goals for this template:
- Performance: **95+**
- Accessibility: **100**
- Best Practices: **100**
- SEO: **100**

(Exact values depend on content, images, and hosting.)

---

## Contributing

Contributions are welcome

- Keep PRs focused (one feature/fix at a time)
- Prefer clear commit messages
- Update docs when behavior changes
- Add/adjust UI with accessibility in mind

---

## License

MIT © Harsh Gupta  
See `LICENSE` for details.

---

## Credits

Inspiration & learning:
- Brittany Chiang
- Lee Robinson
- Josh Comeau

Libraries & resources:
- Lucide Icons
- Framer Motion
- Google Fonts
- Tailwind CSS
- React Router
