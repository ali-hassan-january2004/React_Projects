# Personal Portfolio Website

A clean, responsive personal portfolio built with **React**, **TypeScript** and **Vite**. It includes a sticky navbar, a hero section with a profile photo, a skills section and a contact footer.

This project was built as part of my React learning journey (Day 1: JSX, components, fragments, props and click events).

## Screenshots

Check screenshot folder

## Features

- Sticky navbar with smooth-scrolling links
- Hero section with headline, intro text and call-to-action buttons
- "Contact me" button that scrolls to the footer using a click event
- Skills section rendered from data, with a reusable `SkillBadge` component
- Contact footer with email, social links and an automatic year
- Responsive layout for desktop, tablet and mobile
- Visible keyboard focus and reduced-motion support

## Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- Plain CSS (one stylesheet per component)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- npm (comes with Node.js)

### Installation

```bash
git clone https://github.com/ali-hassan-january2004/React_Projects.git
cd React_Projects/project1
npm install
```

### Run the development server

```bash
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview
```

## Project Structure

```
project1/
├── public/
├── screenshot/
├── src/
│   ├── assets/            # images (profile photo, icons)
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Skills.tsx
│   │   ├── SkillBadge.tsx
│   │   └── Footer.tsx
│   ├── styles/
│   │   ├── Navbar.css
│   │   ├── Hero.css
│   │   ├── Skills.css
│   │   └── Footer.css
│   ├── App.tsx            # assembles all components
│   ├── App.css            # shared layout styles
│   ├── index.css          # global styles, fonts and colour variables
│   └── main.tsx           # app entry point
├── index.html
├── package.json
└── vite.config.ts
```

## Customization

- **Colours and fonts:** edit the variables at the top of `src/index.css`.
- **Skills:** edit the `skillGroups` array in `src/components/Skills.tsx`.
- **Name, email and social links:** edit `Navbar.tsx`, `Hero.tsx` and `Footer.tsx`.
- **Profile photo:** replace the image in `src/assets/` and update the import at the top of `Hero.tsx`.

## What I Learned

- Setting up a React + TypeScript project with Vite
- Writing JSX and following its rules
- Building functional components and splitting a UI into small pieces
- Using fragments, `{ }` expressions and `onClick` events
- Passing props and rendering lists with `.map()`

## Author

**Ali Hassan**
GitHub: [@ali-hassan-january2004](https://github.com/ali-hassan-january2004)