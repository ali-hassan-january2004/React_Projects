import { products } from "./data/products";
import StatCard from "./components/StatCard/StatCard";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import styles from "./App.module.css";

function App() {
  const handleAddToCart = (id: number) => {
    const product = products.find((p) => p.id === id);
    alert(`${product?.name} added to cart!`);
  };

  const totalProducts = products.length;
  const inStockCount = products.filter((p) => p.inStock).length;
  const categoryCount = new Set(products.map((p) => p.category)).size;

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>🛍️ ShopEase Catalog</h1>
        <p>Browse our latest products</p>
      </header>

      <section className={styles.stats}>
        <StatCard icon="📦" label="Total Products" value={totalProducts} />
        <StatCard icon="✅" label="In Stock" value={inStockCount} />
        <StatCard icon="🏷️" label="Categories" value={categoryCount} />
      </section>

      <ProductGrid products={products} onAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;