# 🛍️ ShopEase: Product Catalog

A static product catalog built with **React + TypeScript + Vite** as part of my day-by-day React learning journey (**Day 2: Props, Composition and Reusability**).

The app shows a hero banner, summary stat cards and a responsive grid of reusable product cards. All data is static (no backend or API).

---

## ✨ Features

- Gradient hero banner with overlapping stat cards (total products, in stock, categories)
- Responsive product grid that reflows from 1 column on phones to 4+ on large screens
- Product cards with category-colored image area, rating, price, and status badges (**New**, **-% Sale**, **Out of stock**)
- Automatic sale price calculation and strikethrough original price
- "Add to Cart" button that is disabled for out-of-stock items
- Fully typed with TypeScript
- Component-scoped styling with CSS Modules

---

## 🧰 Tech Stack

| Tool | Purpose |
|---|---|
| React | UI library |
| TypeScript | Type safety for props and data |
| Vite | Dev server and build tool |
| CSS Modules | Locally scoped component styles |

---

## 📚 Concepts Covered

| Concept | Where it's used |
|---|---|
| Props | `ProductCard`, `StatCard` receive data from their parents |
| Typing props | `Product` type plus a props type per component |
| Optional props and defaults | `Badge` variant, `Button` variant/size/disabled, optional `discount` and `isNew` on products |
| `children` prop | `Card` wraps any content placed inside it |
| Component composition | `ProductCard` = `Card` + `Badge` + `Button` |
| Reusable components | `Button`, `Badge`, `Card` used across the app |
| Passing functions as props | `onAddToCart(id)` flows from `App` down to `Button` |
| CSS Modules | Every component has its own `.module.css` |
| Responsive grid | `grid-template-columns: repeat(auto-fill, minmax(...))` |
| Lists and keys | `products.map()` with `key={product.id}` |

---

## 📁 Project Structure

```
project2/
└── src/
    ├── components/
    │   ├── ui/                     # Generic reusable building blocks
    │   │   ├── Button/
    │   │   ├── Badge/
    │   │   └── Card/
    │   ├── StatCard/
    │   ├── ProductCard/
    │   └── ProductGrid/
    ├── data/
    │   └── products.ts             # Static product data
    ├── types/
    │   └── product.ts              # Product and Category types
    ├── App.tsx
    ├── App.module.css
    ├── main.tsx
    └── index.css                   # Global reset, fonts and CSS variables
```

### Component tree

```
App
├── Hero header
├── StatCard × 3
└── ProductGrid
    └── ProductCard × N
        ├── Card
        ├── Badge
        └── Button
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- npm

### Installation

```bash
# clone the repository
git clone https://github.com/ali-hassan-january2004/React_Projects.git

# go into this project
cd React_Projects/project2

# install dependencies
npm install

# start the dev server
npm run dev
```

Then open the local URL printed in the terminal (usually `http://localhost:5173`).

### Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Type-check and create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

---

## 🧩 Data Model

```ts
type Category = "Electronics" | "Fashion" | "Home" | "Sports";

type Product = {
  id: number;
  name: string;
  category: Category;
  price: number;
  image: string;       // emoji placeholder
  inStock: boolean;
  rating: number;
  discount?: number;   // optional, percentage
  isNew?: boolean;     // optional
};
```

---

## 🔮 Possible Improvements

- Category filter and search bar
- Sorting by price or rating
- Cart state with `useState` (next topic: state and events)
- Real product images instead of emoji
- Fetching products from an API

---

## 📝 Notes

This is a learning project. Part of my **React_Projects** repository, which collects my React projects from basic to advanced, one folder per project.