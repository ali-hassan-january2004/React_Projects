# React State Quiz

A small, responsive quiz app for practicing React state, events, and conditional rendering. It is built with React, TypeScript, and Vite.

## Features

- Eight multiple-choice questions about React and TypeScript fundamentals
- One-answer-per-question flow with immediate correct/incorrect feedback
- Progress indicator, final score, and restart action
- Responsive start, question, and results screens

## Getting started

Run these commands from the `project3` directory:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173/`).

From PowerShell at the parent `React Projects` directory, first enter the project folder:

```powershell
cd .\project3
npm.cmd run dev
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check and create a production build in `dist/` |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview the production build locally |

## Project layout

```text
src/
  components/       Quiz screens and reusable UI components
  data/questions.ts Quiz questions and correct answers
  styles/           Component-scoped CSS modules
  types/quiz.ts     Quiz and question types
  App.tsx           Quiz flow and state
  index.css         Global theme and base styles
```

To change the quiz content, edit `src/data/questions.ts`. Each question has an `id`, prompt (`text`), `options`, and a zero-based `correctIndex`.
