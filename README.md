# ✨ Modern Portfolio Website

<div align="center">

![Portfolio Banner](https://via.placeholder.com/1200x400/0f172a/ffffff?text=Harsh+Gupta+Portfolio)

**A premium, glassmorphism-inspired portfolio built with React, TypeScript, and Tailwind CSS**

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

[View Demo](https://harshgupta.me) · [Report Bug](https://github.com/gupta-8/portfolio/issues) · [Request Feature](https://github.com/gupta-8/portfolio/issues)

</div>

---

## 📖 About The Project

This is a **modern, minimalist portfolio website** designed to showcase projects, skills, and professional experience with a premium glassmorphism aesthetic. Built with performance and accessibility in mind, it features smooth animations, responsive design, and an elegant dark/light theme system.

### 🎯 Purpose

- **Showcase Work**: Present projects and technical skills in an elegant, organized manner
- **Professional Presence**: Create a strong first impression with a polished, modern design
- **User Experience**: Provide seamless navigation and readability across all devices
- **Performance**: Deliver a fast, optimized experience with smooth animations

### 👥 Who It's For

- Developers looking for a modern portfolio template
- Designers seeking a clean, minimal showcase
- Anyone wanting a professional web presence with style

---

## ✨ Features

<table>
  <tr>
    <td>🎨</td>
    <td><strong>Glassmorphism Design</strong><br/>Premium glass-like UI elements with blur effects and subtle gradients</td>
  </tr>
  <tr>
    <td>🌓</td>
    <td><strong>Smart Theme System</strong><br/>Light/Dark mode with OS preference detection and persistent storage</td>
  </tr>
  <tr>
    <td>📱</td>
    <td><strong>Fully Responsive</strong><br/>Optimized for mobile, tablet, and desktop with adaptive layouts</td>
  </tr>
  <tr>
    <td>🧭</td>
    <td><strong>Modern Navigation</strong><br/>Pill-shaped bottom navigation with smooth transitions and active states</td>
  </tr>
  <tr>
    <td>🎭</td>
    <td><strong>Vector Icons</strong><br/>Clean Lucide icons throughout (Skills, Tools, Philosophy sections)</td>
  </tr>
  <tr>
    <td>✨</td>
    <td><strong>Smooth Animations</strong><br/>Framer Motion powered transitions and hover effects</td>
  </tr>
  <tr>
    <td>🎯</td>
    <td><strong>Real-time Search</strong><br/>Filter projects by name, description, or technology</td>
  </tr>
  <tr>
    <td>📧</td>
    <td><strong>Working Contact Form</strong><br/>Netlify Forms integration with validation and success/error feedback</td>
  </tr>
  <tr>
    <td>♿</td>
    <td><strong>Accessibility First</strong><br/>ARIA labels, keyboard navigation, and semantic HTML</td>
  </tr>
  <tr>
    <td>🚀</td>
    <td><strong>Performance Optimized</strong><br/>Fast load times, lazy loading, and optimized assets</td>
  </tr>
  <tr>
    <td>🧩</td>
    <td><strong>Modular Components</strong><br/>Reusable, maintainable React component architecture</td>
  </tr>
</table>

---

## 🛠️ Tech Stack

### Core Technologies

```plaintext
├── ⚛️  React 18.x          → Component-based UI library
├── 📘 TypeScript 5.x       → Type-safe JavaScript
├── ⚡ Vite                 → Lightning-fast build tool
└── 🎨 Tailwind CSS 3.x     → Utility-first CSS framework
```

### Libraries & Tools

| Category | Technology | Purpose |
|----------|-----------|---------|
| **Animation** | Framer Motion | Smooth transitions & gestures |
| **Icons** | Lucide React | Clean, consistent vector icons |
| **Routing** | React Router | SPA navigation |
| **Fonts** | Google Fonts | Inter & Roboto Mono |
| **Build** | Vite | Development & production builds |
| **Deployment** | Vercel/Netlify | Serverless hosting |

### Styling Approach

- **Glassmorphism**: Custom backdrop-blur utilities
- **Dark Mode**: CSS variables + Tailwind dark mode
- **Responsive**: Mobile-first with Tailwind breakpoints
- **Animations**: CSS transitions + Framer Motion

---

## 📸 Screenshots

### 🏠 Home Page
![Home Page Light](https://via.placeholder.com/800x450/f8fafc/0f172a?text=Home+Light+Mode)
*Hero section with introduction, CTAs, and highlight cards*

### 🌙 Dark Mode
![Home Page Dark](https://via.placeholder.com/800x450/0f172a/ffffff?text=Home+Dark+Mode)
*Elegant dark theme with purple accents and glass effects*

### 💼 Projects Page
![Projects](https://via.placeholder.com/800x450/f8fafc/0f172a?text=Projects+with+Search)
*Filterable project grid with real-time search*

### 👤 About Page
![About](https://via.placeholder.com/800x450/f8fafc/0f172a?text=About+with+Skills)
*Philosophy cards, skills pills, and tech stack showcase*

### 📧 Contact Section
![Contact](https://via.placeholder.com/800x450/f8fafc/0f172a?text=Contact+Form)
*Contact form with social links and quick info cards*

### 📱 Mobile Navigation
![Mobile Nav](https://via.placeholder.com/400x800/0f172a/ffffff?text=Mobile+Bottom+Nav)
*Compact pill navigation with smooth transitions*

---

## 🚀 Installation

### Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager

### Quick Start

1️⃣ **Clone the repository**
```bash
git clone https://github.com/gupta-8/portfolio.git
cd portfolio
```

2️⃣ **Install dependencies**
```bash
npm install
# or
yarn install
```

3️⃣ **Run development server**
```bash
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:3000`

4️⃣ **Build for production**
```bash
npm run build
# or
yarn build
```

5️⃣ **Preview production build**
```bash
npm run preview
# or
yarn preview
```

---

## 📁 Folder Structure

```plaintext
frontend/
├── public/                  # Static assets
│   ├── index.html          # HTML template
│   └── favicon.ico         # Site icon
│
├── src/
│   ├── assets/             # Images, fonts, icons
│   │   └── icons/          # Custom SVG icons
│   │
│   ├── components/         # React components
│   │   ├── common/         # Shared components
│   │   │   ├── AnimatedPage.tsx
│   │   │   └── ScrollToTop.tsx
│   │   │
│   │   ├── effects/        # Visual effects
│   │   │   ├── FloatingOrbs.tsx
│   │   │   └── ScrollProgress.tsx
│   │   │
│   │   ├── home/           # Home page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── FeaturedProjects.tsx
│   │   │   └── HighlightsRow.tsx
│   │   │
│   │   ├── layout/         # Layout components
│   │   │   ├── AppLayout.tsx
│   │   │   ├── BottomNav.tsx
│   │   │   ├── Container.tsx
│   │   │   └── Footer.tsx
│   │   │
│   │   ├── projects/       # Project components
│   │   │   └── ProjectCard.tsx
│   │   │
│   │   └── ui/             # UI primitives
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── TechPill.tsx
│   │       ├── SocialLink.tsx
│   │       ├── ThemeToggle.tsx
│   │       └── ...
│   │
│   ├── data/               # Static data
│   │   ├── projects.ts     # Project information
│   │   └── socialLinks.ts  # Social media links
│   │
│   ├── hooks/              # Custom React hooks
│   │   └── useTheme.ts     # Theme management hook
│   │
│   ├── pages/              # Page components
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ProjectsPage.tsx
│   │   └── ContactPage.tsx
│   │
│   ├── styles/             # Global styles
│   │   └── globals.css     # Tailwind + custom CSS
│   │
│   ├── utils/              # Utility functions
│   │   ├── animations.ts   # Framer Motion variants
│   │   └── cn.ts           # Class name utility
│   │
│   ├── App.tsx             # Root component
│   └── main.tsx            # Entry point
│
├── .gitignore
├── package.json
├── tsconfig.json           # TypeScript config
├── tailwind.config.js      # Tailwind customization
├── vite.config.ts          # Vite configuration
└── README.md
```

---

## 🎨 Customization Guide

### 🌈 Changing Theme Colors

**Edit `tailwind.config.js`:**
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',    // Primary accent
        secondary: '#your-color',  // Secondary accent
      }
    }
  }
}
```

**Update gradient backgrounds in `globals.css`:**
```css
body {
  background: linear-gradient(135deg, #color1, #color2);
}
```

### 🧭 Modifying Navigation

**Edit `src/components/layout/BottomNav.tsx`:**
```typescript
const navItems = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/new-page', label: 'New Page', icon: YourIcon },
  // Add or remove items
];
```

### 💼 Updating Projects

**Edit `src/data/projects.ts`:**
```typescript
export const projects: Project[] = [
  {
    id: 'unique-id',
    title: 'Project Name',
    description: 'Project description...',
    image: '/path/to/image.jpg',
    tech: ['React', 'TypeScript', 'Tailwind'],
    liveUrl: 'https://project-url.com',
    sourceUrl: 'https://github.com/...',
    featured: true
  },
  // Add more projects
];
```

### 🛠️ Changing Skills & Tools

**Edit `src/pages/AboutPage.tsx`:**
```typescript
const skills = {
  backend: ['PHP', 'Node.js', 'Python'],
  frontend: ['React', 'Vue', 'Angular'],
  tools: ['VS Code', 'Docker', 'Git']
};
```

**To add new tech pill icons, edit `src/components/ui/TechPill.tsx`:**
```typescript
const techIcons = {
  'NewTech': { 
    Icon: YourIcon,
    lightText: 'text-blue-900',
    darkText: 'dark:text-white/90',
    // ... other properties
  }
};
```

### 🎭 Replacing Icons

**Import from Lucide React:**
```typescript
import { IconName } from 'lucide-react';
```

**Use in your component:**
```tsx
<IconName className="w-5 h-5 text-blue-500" strokeWidth={1.5} />
```

---

## 🌐 Deployment

### Deploying to Vercel

1. Push your code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Vercel auto-detects Vite configuration
4. Deploy with one click

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Deploying to Netlify

#### Option 1: Deploy via GitHub (Recommended for Contact Form)

1. **Push code to GitHub**
2. Go to [Netlify](https://app.netlify.com) and click **"Add new site"** → **"Import an existing project"**
3. **Select "Deploy with GitHub"** and authorize Netlify
4. **Choose your repository**
5. **Configure build settings:**
   - Build command: `yarn build` (or `npm run build`)
   - Publish directory: `build`
   - Base directory: `frontend` (if your repo has a frontend folder)
6. Click **"Deploy site"**

**Important**: The contact form uses Netlify Forms, which only works when deployed to Netlify (not in local development).

#### Option 2: Manual Deploy

1. Build the project: `yarn build`
2. Drag and drop the `build` folder to [Netlify](https://app.netlify.com/drop)

**Or use Netlify CLI:**
```bash
npm i -g netlify-cli
netlify deploy --prod
```

#### 📧 Setting Up Contact Form Notifications

After deploying, go to:
1. **Netlify Dashboard** → Your Site → **Forms**
2. Click on the **"contact"** form
3. **Set up email notifications** or integrate with Slack/Zapier
4. You'll receive an email whenever someone submits the contact form!

### Deploying to GitHub Pages

**Install gh-pages:**
```bash
npm install --save-dev gh-pages
```

**Add to `package.json`:**
```json
{
  "scripts": {
    "deploy": "vite build && gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/portfolio"
}
```

**Deploy:**
```bash
npm run deploy
```

### Environment Variables

If using any API keys or secrets:

**Create `.env` file:**
```bash
VITE_API_KEY=your_api_key
VITE_CONTACT_EMAIL=your@email.com
```

**Access in code:**
```typescript
const apiKey = import.meta.env.VITE_API_KEY;
```

---

## ⚡ Performance

### Lighthouse Scores

| Metric | Score |
|--------|-------|
| 🎯 Performance | 95+ |
| ♿ Accessibility | 100 |
| 🔍 Best Practices | 100 |
| 📱 SEO | 100 |

### Optimization Techniques

✅ **Image Optimization**
- WebP format for modern browsers
- Responsive images with `srcset`
- Lazy loading for off-screen images

✅ **Code Splitting**
- Route-based code splitting with React Router
- Dynamic imports for large components

✅ **Caching Strategy**
- Service worker for offline support
- Browser caching for static assets
- CDN delivery for optimal speed

✅ **Bundle Size**
- Tree-shaking unused code
- Minification and compression
- Minimal dependencies

✅ **Performance Monitoring**
```bash
# Analyze bundle size
npm run build -- --analyze
```

---

## 🤝 Contributing

Contributions make the open-source community an amazing place to learn and create. Any contributions you make are **greatly appreciated**!

### How to Contribute

1. **Fork the Project**
2. **Create your Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your Changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Pull Request Guidelines

- ✅ Follow the existing code style
- ✅ Write clear commit messages
- ✅ Test your changes thoroughly
- ✅ Update documentation if needed
- ✅ Keep PRs focused on a single feature/fix

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` file for more information.

```
MIT License

Copyright (c) 2024 Harsh Gupta

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 🙏 Credits & Acknowledgments

### Inspiration

- [Brittany Chiang](https://brittanychiang.com/) - Portfolio design inspiration
- [Lee Robinson](https://leerob.io/) - Modern web development practices
- [Josh Comeau](https://www.joshwcomeau.com/) - Animation techniques

### Libraries & Resources

| Resource | Purpose |
|----------|---------|
| [Lucide Icons](https://lucide.dev/) | Beautiful, consistent icon set |
| [Framer Motion](https://www.framer.com/motion/) | Production-ready animations |
| [Google Fonts](https://fonts.google.com/) | Inter & Roboto Mono typefaces |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework |
| [React Router](https://reactrouter.com/) | Declarative routing |

### Tools

- **VS Code** - Code editor
- **Figma** - Design and prototyping
- **Vercel** - Hosting and deployment
- **GitHub** - Version control

---

## 📬 Contact

**Harsh Gupta** - [@harshguptame](https://x.com/harshguptame)

Project Link: [https://github.com/gupta-8/portfolio](https://github.com/gupta-8/portfolio)

Website: [https://harshgupta.me](https://harshgupta.me)

---

<div align="center">

### ⭐ If you found this helpful, consider giving it a star!

**Built with ❤️ using React, TypeScript, and Tailwind CSS**

</div>
