# React Projects

A collection of React projects built while learning React step by step, from the basics to more advanced topics. Each project lives in its own folder and focuses on a specific set of concepts.

## Projects

| # | Project | Folder | Key Concepts |
|---|---|---|---|
| 1 | Personal Portfolio | [project1](./project1) | JSX, functional components, splitting UI into components, Fragments |
| 2 | ShopEase Product Catalog | [project2](./project2) | Props, TypeScript props, children, composition, reusable components, CSS Modules |
| 3 | React State Quiz | [project3](./project3) | `useState`, events, conditional rendering, immutable updates, derived values |
| 4 | Student Registration App | [project4](./project4) | Lists and keys, controlled forms, validation, lifting state up, search/filter, Tailwind CSS |
| 5 | Expense Tracker | [project5](./project5) | `useEffect`, cleanup, `useRef`, localStorage, debounced search |
| 6 | Multi-Page Admin Dashboard | [project6](./project6) | React Router, nested routes, protected routes, `useParams`, `useSearchParams`, auth context |
| 7 | Product Inventory Dashboard | [project7](./project7) | REST API, Fetch, CRUD, loading/error/empty states, retry, pagination, `AbortController` |

## Learning Path

1. **Foundations**: React intro, SPAs, Vite + TypeScript, JSX, components
2. **Props and composition**: typed props, children, reusable components
3. **State with `useState`**: re-rendering, immutable updates, derived values
4. **Events and conditional rendering**
5. **Lists, keys and forms**: controlled inputs, validation, lifting state up
6. **Side effects**: `useEffect`, cleanup, `useRef`, localStorage
7. **Routing**: React Router, nested and protected routes
8. **Data fetching**: REST APIs, async/await, CRUD, request cancellation

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS (from project 4 onward), CSS Modules (earlier projects)
- React Router (project 6)
- Fetch API with DummyJSON (project 7)

## Running a Project

Every project is an independent Vite app.

```bash
# clone the repo
git clone https://github.com/ali-hassan-january2004/React_Projects.git
cd React_Projects

# pick a project
cd project7

# install and run
npm install
npm run dev
```

Some projects need an `.env` file. Check the README inside each project folder.

## Repository Structure

```
React_Projects/
├── README.md
├── project1/
├── project2/
├── project3/
├── project4/
├── project5/
├── project6/
└── project7/
```

## Author

**Ali Hassan**
GitHub: [@ali-hassan-january2004](https://github.com/ali-hassan-january2004)

⭐ If you find this useful, consider starring the repo!
