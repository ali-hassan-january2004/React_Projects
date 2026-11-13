import type { Product } from "../types/product";

export const products: Product[] = [
  { id: 1, name: "Wireless Headphones", category: "Electronics", price: 120, image: "🎧", inStock: true, rating: 4.7, isNew: true },
  { id: 2, name: "Smart Watch", category: "Electronics", price: 250, image: "⌚", inStock: true, rating: 4.5, discount: 15 },
  { id: 3, name: "Gaming Mouse", category: "Electronics", price: 60, image: "🖱️", inStock: false, rating: 4.3 },
  { id: 4, name: "Running Shoes", category: "Sports", price: 90, image: "👟", inStock: true, rating: 4.6, discount: 20 },
  { id: 5, name: "Yoga Mat", category: "Sports", price: 35, image: "🧘", inStock: true, rating: 4.4, isNew: true },
  { id: 6, name: "Denim Jacket", category: "Fashion", price: 80, image: "🧥", inStock: true, rating: 4.2 },
  { id: 7, name: "Leather Backpack", category: "Fashion", price: 110, image: "🎒", inStock: false, rating: 4.8, discount: 10 },
  { id: 8, name: "Table Lamp", category: "Home", price: 45, image: "💡", inStock: true, rating: 4.1 },
  { id: 9, name: "Coffee Maker", category: "Home", price: 140, image: "☕", inStock: true, rating: 4.6, isNew: true, discount: 5 },
  { id: 10, name: "Ceramic Vase", category: "Home", price: 30, image: "🏺", inStock: true, rating: 4.0 },
];