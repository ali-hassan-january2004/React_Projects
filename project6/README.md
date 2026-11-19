# 🛒 ShopAdmin: Multi-Page Admin Dashboard

A multi-page admin dashboard for an e-commerce store, built with **React Router**. It has a login page, a sidebar layout, list and detail pages for products, orders and users, tabbed settings, and filters that live in the URL.

Built as **Project 6** of my React learning path, focused on client-side routing.

---

## ✨ Features

- 🔐 **Login** with a fake auth check and a session saved in `localStorage`
- 🛡️ **Protected routes:** logged-out users are redirected to `/login`, then sent back to the page they wanted
- 🧭 **Sidebar navigation** with active link highlighting
- 📊 **Overview page** with stat cards (products, orders, pending orders, users, revenue)
- 📋 **List pages** for Products, Orders and Users
- 🔎 **Filters in the URL:** search and status filters that survive refresh and can be shared as links
- 📄 **Detail pages** using dynamic routes (`/products/:id`, `/orders/:id`, `/users/:id`)
- ⚙️ **Settings with nested tabs:** Profile, Security, Notifications
- 🚫 **404 Not Found page** for unknown URLs
- 🎨 Clean, responsive UI with Tailwind CSS

---

## 🧠 Concepts Covered

| Concept | Where it is used |
|---------|------------------|
| `BrowserRouter` | `main.tsx` wraps the whole app |
| `Routes` and `Route` | `App.tsx` holds the full route map |
| `Link` | Table rows linking to detail pages |
| `NavLink` | Sidebar and settings tabs (active styles) |
| `useNavigate` | Login redirect, logout, back buttons |
| `useParams` | Detail pages read `:id` from the URL |
| Nested routes and `Outlet` | `DashboardLayout` and `SettingsLayout` |
| Protected routes | `ProtectedRoute` guards the dashboard |
| 404 page | `*` route renders `NotFound` |
| `useSearchParams` | `useUrlFilters` hook stores filters in the URL |
| `Navigate` | `/settings` redirects to `/settings/profile` |
| Context API | `AuthContext` shares login state |
| Custom hooks | `useAuth`, `useUrlFilters` |

---

## 🗺️ Route Map

| URL | Page | Protected |
|-----|------|-----------|
| `/login` | Login | No |
| `/` | Overview | Yes |
| `/products` | Product list | Yes |
| `/products/:id` | Product detail | Yes |
| `/orders` | Order list | Yes |
| `/orders/:id` | Order detail | Yes |
| `/users` | User list | Yes |
| `/users/:id` | User detail | Yes |
| `/settings` | Redirects to `/settings/profile` | Yes |
| `/settings/profile` | Profile tab | Yes |
| `/settings/security` | Security tab | Yes |
| `/settings/notifications` | Notifications tab | Yes |
| `*` | 404 Not Found | No |

### Route nesting

```
<Routes>
  /login                         → Login
  <ProtectedRoute>               ← checks login state
    <DashboardLayout>            ← sidebar + topbar + <Outlet />
      index                      → Overview
      products, products/:id
      orders, orders/:id
      users, users/:id
      settings                   ← SettingsLayout (tabs + <Outlet />)
        profile | security | notifications
  *                              → NotFound
</Routes>
```

---

## 🔗 Filters in the URL

Filters are stored in the query string, so the page state is part of the link:

```
/orders?status=pending
/orders?status=shipped&search=sara
/products?status=out-of-stock
/users?search=ali&status=active
```

The `useUrlFilters` hook reads and writes these params with `useSearchParams`.

---

## 🔑 Demo Login

```
Email:    admin@shop.com
Password: admin123
```

> This is a demo-only login with hardcoded credentials. A real app would verify users on a backend.

---

## 🛠️ Tech Stack

- React
- TypeScript
- Vite
- React Router (`react-router-dom`)
- Tailwind CSS

---

## 📁 Folder Structure

```
project6/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── FilterBar.tsx
│   │   ├── ProtectedRoute.tsx
│   │   ├── Sidebar.tsx
│   │   ├── StatCard.tsx
│   │   ├── StatusBadge.tsx
│   │   └── Topbar.tsx
│   ├── context/
│   │   ├── AuthContext.tsx
│   │   └── auth-context.ts
│   ├── data/
│   │   ├── orders.ts
│   │   ├── products.ts
│   │   └── users.ts
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   └── useUrlFilters.ts
│   ├── layouts/
│   │   ├── DashboardLayout.tsx
│   │   └── SettingsLayout.tsx
│   ├── pages/
│   │   ├── Login.tsx
│   │   ├── NotFound.tsx
│   │   ├── Overview.tsx
│   │   ├── Orders/
│   │   │   ├── OrderDetail.tsx
│   │   │   └── OrderList.tsx
│   │   ├── Products/
│   │   │   ├── ProductDetail.tsx
│   │   │   └── ProductList.tsx
│   │   ├── Settings/
│   │   │   ├── Notifications.tsx
│   │   │   ├── Profile.tsx
│   │   │   └── Security.tsx
│   │   └── Users/
│   │       ├── UserDetail.tsx
│   │       └── UserList.tsx
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

### Why is auth split into several files?

The auth code is separated so each file exports only one kind of thing:

- `context/auth-context.ts` creates the context object and its types
- `context/AuthContext.tsx` exports the `AuthProvider` component
- `hooks/useAuth.ts` exports the `useAuth` hook

This keeps components and non-components in separate files, which Vite's fast refresh and the React ESLint rules prefer.

---

## 🚀 Getting Started

```bash
# 1. Go into the project folder
cd project6

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open `http://localhost:5173` and log in with the demo account.

### Other scripts

```bash
npm run build     # production build
npm run preview   # preview the production build
npm run lint      # run ESLint
```

---

## ✅ Test Checklist

- [ ] Opening `/` while logged out redirects to `/login`
- [ ] Login with the demo account opens the dashboard
- [ ] A wrong password shows an error
- [ ] The sidebar highlights the active page
- [ ] `/orders?status=pending` shows only pending orders
- [ ] Typing in search updates the URL and survives a refresh
- [ ] Clicking a name opens its detail page, and Back works
- [ ] `/products/999` shows "Product not found"
- [ ] `/settings` redirects to `/settings/profile`
- [ ] Switching settings tabs keeps the sidebar in place
- [ ] An unknown URL shows the 404 page
- [ ] Logout returns to `/login` and blocks the dashboard again

---

## 🔮 Possible Improvements

- Connect to a real backend API instead of mock data
- Add create, edit and delete for products, orders and users
- Add sorting and pagination (also stored in the URL)
- Add role-based access (admin vs manager)
- Add charts to the Overview page
- Add a dark mode toggle

---

## 👤 Author

**Ali Hassan**
GitHub: [@ali-hassan-january2004](https://github.com/ali-hassan-january2004)