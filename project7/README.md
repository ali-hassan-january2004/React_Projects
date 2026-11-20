# Product Inventory Dashboard

A product inventory dashboard with full **Create, Read, Update and Delete** (CRUD) built on a REST API. It uses [DummyJSON](https://dummyjson.com) as the backend and covers the main patterns of real-world data fetching in React: loading, error and empty states, retry, search, filtering, sorting, pagination and request cancellation.

## Features

- View products in a table with image, brand, category, price and stock badge
- **Create** a product with a validated form (POST)
- **Edit** a product (PUT)
- **Quick restock** with one click, `+10` stock (PATCH)
- **Delete** a product with a confirmation dialog (DELETE)
- **Search** products with a debounced input
- **Filter** by category
- **Sort** by name, price or stock
- **Pagination** (10 products per page)
- Summary cards: total products, low-stock count and stock value
- Loading spinner, error message with **Retry**, and empty state
- Stale requests are cancelled with `AbortController`

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS
- Fetch API (async/await)
- DummyJSON REST API

## Topics Covered

- REST API basics and HTTP methods
- Fetch API with async/await
- GET, POST, PUT, PATCH and DELETE
- Loading, error and empty states
- Handling API failures and retry
- Search, filtering and sorting
- Pagination
- Typing API responses with TypeScript
- Cancelling old requests with `AbortController`
- Debouncing user input

## API Endpoints Used

| Action | Method | Endpoint |
|---|---|---|
| List products | GET | `/products?limit=10&skip=0` |
| Sort | GET | `/products?sortBy=price&order=asc` |
| Search | GET | `/products/search?q=phone` |
| Filter by category | GET | `/products/category/{slug}` |
| Category list | GET | `/products/categories` |
| Create | POST | `/products/add` |
| Update | PUT | `/products/{id}` |
| Partial update | PATCH | `/products/{id}` |
| Delete | DELETE | `/products/{id}` |

## Project Structure

```
project7/
├── .env
├── index.html
├── package.json
├── vite.config.ts
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── types/
    │   └── product.ts
    ├── api/
    │   ├── client.ts            # fetch wrapper with error handling
    │   └── products.ts          # one function per HTTP method
    ├── hooks/
    │   ├── useProducts.ts       # data, loading, error, retry, AbortController, CRUD actions
    │   ├── useCategories.ts
    │   └── useDebounce.ts
    ├── components/
    │   ├── layout/              # Header, StatCards
    │   ├── controls/            # SearchBar, CategoryFilter, SortSelect, Pagination
    │   ├── products/            # ProductTable, ProductRow, ProductForm, ProductModal, DeleteConfirm
    │   └── ui/                  # Button, Spinner, ErrorMessage, EmptyState
    └── utils/
        └── format.ts
```

## Getting Started

```bash
# from the repo root
cd project7

# install dependencies
npm install

# create the environment file
echo "VITE_API_URL=https://dummyjson.com" > .env

# start the dev server
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

## How It Works

1. `App.tsx` holds the search, category, sort and page state and passes it to `useProducts`.
2. `useProducts` calls `api/products.ts` inside a `useEffect`. Its cleanup function aborts the previous request, so a slow old response can never overwrite a newer one.
3. `api/client.ts` converts bad HTTP statuses (404, 500) into errors, because `fetch` does not throw on them by itself.
4. The UI shows one of four states: loading, error (with Retry), empty, or the product table.
5. Create, edit, restock and delete call the API first, then update local state only if the request succeeded.

## Notes

- DummyJSON **simulates** writes. POST, PUT, PATCH and DELETE return a success response but do not change the server data, so the app updates local state after each successful call.
- Newly created products get a local id, so editing or deleting them skips the network call.
- Changing page, search, filter or sort, or clicking Retry, refetches from the server and resets local changes.
- Search and category filter cannot be combined on this API, so the category dropdown is disabled while a search is active.

## What I Learned

- Structuring an API layer separately from components and hooks
- Handling every state of a network request in the UI
- Preventing race conditions with `AbortController`
- Typing API data and form values with TypeScript
- Building reusable create/edit forms and modals