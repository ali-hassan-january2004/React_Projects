export type Category = "Electronics" | "Fashion" | "Home" | "Sports";

export type Product = {
  id: number;
  name: string;
  category: Category;
  price: number;
  image: string; // emoji placeholder
  inStock: boolean;
  rating: number;
  discount?: number; // optional, percentage
  isNew?: boolean; // optional
};