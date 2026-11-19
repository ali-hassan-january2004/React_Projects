export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: "active" | "draft" | "out-of-stock";
};

export type Order = {
  id: number;
  customer: string;
  total: number;
  status: "pending" | "shipped" | "delivered" | "cancelled";
  date: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
  role: "admin" | "manager" | "customer";
  status: "active" | "blocked";
};