import type { Product } from "../types";

export const products: Product[] = [
  { id: 1, name: "Wireless Headphones", category: "Electronics", price: 89, stock: 24, status: "active" },
  { id: 2, name: "Smart Watch", category: "Electronics", price: 149, stock: 0, status: "out-of-stock" },
  { id: 3, name: "Running Shoes", category: "Fashion", price: 65, stock: 40, status: "active" },
  { id: 4, name: "Leather Wallet", category: "Fashion", price: 30, stock: 75, status: "active" },
  { id: 5, name: "Coffee Maker", category: "Home", price: 55, stock: 12, status: "active" },
  { id: 6, name: "Desk Lamp", category: "Home", price: 25, stock: 0, status: "out-of-stock" },
  { id: 7, name: "Yoga Mat", category: "Sports", price: 20, stock: 60, status: "active" },
  { id: 8, name: "Backpack", category: "Fashion", price: 45, stock: 33, status: "draft" },
  { id: 9, name: "Bluetooth Speaker", category: "Electronics", price: 70, stock: 18, status: "active" },
  { id: 10, name: "Water Bottle", category: "Sports", price: 15, stock: 90, status: "draft" },
];