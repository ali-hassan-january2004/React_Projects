# 💸 Expense Tracker

A clean expense tracker built with **React, TypeScript and Vite**. Add expenses, set a monthly budget, get live budget alerts, search with a debounced input, and keep everything saved in the browser with `localStorage`.

This project is part of my [React_Projects](../README.md) learning journey and focuses on **side effects and hooks**: `useEffect`, `useRef`, cleanup functions and the component lifecycle.

---

## ✨ Features

- ➕ Add expenses with title, amount, category and date
- 🗑️ Delete expenses
- 🎯 Monthly budget with a progress bar
- 🚨 Budget alerts: green (safe), orange (80% or more), red (over budget)
- 🔍 Search by title or category with **debounced** input (400ms)
- ⌨️ Press `Esc` to clear the search
- 💾 Data persists after refresh (`localStorage`)
- 🏷️ Browser tab title warns you when over budget
- 📱 Responsive layout

---

## 🧠 Concepts Covered

| Concept | Where it is used |
|---|---|
| Side effects | Saving data, changing `document.title`, timers, listeners |
| `useEffect` hook | `useLocalStorage`, `BudgetBar`, `SearchBar`, `useDebounce` |
| Dependency arrays | `[key, value]`, `[status]`, `[value, delay]`, `[onChange]` |
| Effect cleanup (timers) | `useDebounce` clears its `setTimeout` |
| Effect cleanup (event listeners) | `SearchBar` removes its `keydown` listener |
| Component lifecycle | Mount (load saved data), update (save), unmount (cleanup) |
| `useRef` (DOM access) | Auto-focus the title input after adding an expense |
| `useRef` (stored value) | Warn about exceeding the budget only once without re-rendering |
| `localStorage` | Expenses and budget are saved in the browser |
| Debounced search | Filter runs after the user stops typing |
| Custom hooks | `useLocalStorage`, `useDebounce` |
| Common hook mistakes | Missing dependencies, infinite loops, forgotten cleanup |

---

## 🛠️ Tech Stack

- React 18+
- TypeScript
- Vite
- Plain CSS (one file per component)

---

## 📁 Project Structure

```
project5/
└── src/
    ├── components/
    │   ├── Header.tsx
    │   ├── BudgetBar.tsx
    │   ├── ExpenseForm.tsx
    │   ├── SearchBar.tsx
    │   ├── ExpenseList.tsx
    │   └── ExpenseItem.tsx
    ├── hooks/
    │   ├── useLocalStorage.ts
    │   └── useDebounce.ts
    ├── types/
    │   └── expense.ts
    ├── styles/
    │   ├── Header.css
    │   ├── BudgetBar.css
    │   ├── ExpenseForm.css
    │   ├── SearchBar.css
    │   └── ExpenseList.css
    ├── App.tsx
    ├── main.tsx
    └── index.css
```

---

## 🚀 Getting Started

```bash
# Go to the project folder
cd project5

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### Other scripts

```bash
npm run build     # production build
npm run preview   # preview the production build
```

---

## 🧪 How to Test the Features

1. **Persistence:** add some expenses, refresh the page, and they are still there (DevTools → Application → Local Storage).
2. **Budget alert:** set the budget to `100` and add expenses. The bar turns orange at 80% and red above 100%.
3. **Debounced search:** type quickly. "Searching..." appears and the list filters after you stop typing.
4. **Listener cleanup:** press `Esc` to clear the search box.
5. **useRef:** after adding an expense, the cursor jumps back to the title field.

---

## ⚠️ Common Hook Mistakes (Learned)

- Missing a dependency in the array, which causes stale values
- Calling `setState` inside an effect without proper dependencies, which causes infinite loops
- Forgetting cleanup, so timers and listeners pile up
- Using state for values that should not re-render (use `useRef`)
- Calling hooks inside conditions or loops

---

## 🔮 Future Improvements

- Edit existing expenses
- Filter by category and date range
- Monthly summary chart
- Export expenses to CSV
- Dark mode

---

## 👤 Author

**Ali Hassan**
GitHub: [@ali-hassan-january2004](https://github.com/ali-hassan-january2004)