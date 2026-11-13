import type { Product } from "../../types/product";
import Card from "../ui/Card/Card";
import Badge from "../ui/Badge/Badge";
import Button from "../ui/Button/Button";
import styles from "./ProductCard.module.css";

type ProductCardProps = {
  product: Product;
  onAddToCart: (id: number) => void;
};

function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const { id, name, category, price, image, inStock, rating, discount, isNew } =
    product;

  const finalPrice = discount ? price - (price * discount) / 100 : price;

  return (
    <Card>
      <div className={`${styles.imageBox} ${styles[category.toLowerCase()]}`}>
        <span className={styles.emoji}>{image}</span>
        <div className={styles.badges}>
          {isNew && <Badge text="New" variant="green" />}
          {discount !== undefined && <Badge text={`-${discount}%`} variant="red" />}
          {!inStock && <Badge text="Out of stock" variant="gray" />}
        </div>
      </div>

      <p className={styles.category}>{category}</p>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.rating}>
        <span className={styles.star}>★</span> {rating.toFixed(1)}
      </p>

      <div className={styles.priceRow}>
        <span className={discount ? styles.salePrice : styles.price}>
          ${finalPrice.toFixed(2)}
        </span>
        {discount !== undefined && (
          <span className={styles.oldPrice}>${price.toFixed(2)}</span>
        )}
      </div>

      <Button
        label={inStock ? "Add to Cart" : "Unavailable"}
        disabled={!inStock}
        onClick={() => onAddToCart(id)}
      />
    </Card>
  );
}

export default ProductCard;