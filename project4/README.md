# Student Registration App

A registration form with validation and a table of registered students. Students can be added, searched and deleted. Built with React, TypeScript, Vite and Tailwind CSS.

## Features

- Registration form with name, email, age, course and optional notes
- Validation with an error message under each field
- Table of registered students
- Search by name, email or course
- Delete a student from the table
- Responsive layout styled with Tailwind CSS

## Concepts Covered

| Concept | Where it is used |
|---------|------------------|
| Rendering lists | `StudentTable` renders rows with `students.map()` |
| Keys | Each row uses the student's unique `id`, not the array index |
| Rendering and reconciliation | Adding and deleting rows shows how React updates only what changed |
| Controlled components | Name, email, age and course inputs are driven by state |
| Uncontrolled components | The notes field is read through `useRef` on submit |
| Form handling and submission | `onSubmit` with `preventDefault` in `StudentForm` |
| Input validation | Rules in `utils/validation.ts`, errors shown under each input |
| Lifting state up | `App` owns `students` and `query` and passes them to the children |
| Search and filter | The filtered list is derived from `students` and `query` |
| Tailwind CSS setup | Tailwind v4 with the `@tailwindcss/vite` plugin |

## Validation Rules

| Field | Rule |
|-------|------|
| Name | Required, at least 3 characters |
| Email | Required, must be a valid email format |
| Age | Required, a whole number between 16 and 60 |
| Course | Required, must select one |
| Notes | Optional |

## Project Structure

```
project4/
├── src/
│   ├── components/
│   │   ├── StudentForm.tsx    # registration form
│   │   ├── StudentTable.tsx   # list of students
│   │   └── SearchBar.tsx      # search input
│   ├── types/
│   │   └── student.ts         # Student interface and form types
│   ├── utils/
│   │   └── validation.ts      # validation function
│   ├── App.tsx                # main state and layout
│   ├── main.tsx
│   └── index.css              # Tailwind import
├── vite.config.ts
└── package.json
```

## Data Flow

```
App (students[], query)
 ├── StudentForm   → onAddStudent(student)
 ├── SearchBar     → onSearchChange(query)
 └── StudentTable  ← filteredStudents, onDeleteStudent(id)
```

## Getting Started

```bash
cd project4
npm install
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/) v4

## Possible Improvements

- Save students in `localStorage` so they survive a page refresh
- Edit an existing student
- Sort the table by column
- Prevent duplicate emails