import { useState } from "react";
import styles from "./../styles/ProductListPage.module.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FaHeartPulse } from "react-icons/fa6";
type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
};

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [wishlist, setWishList] = useState(false);
  return (
    <div className={styles.productCard}>
      <img
        src={product.image}
        alt={product.title}
        className={styles.productImage}
      />
      <h4 className={styles.productName}>{product.title}</h4>
      <p className={styles.productDetails}>${product.price}</p>
      <span onClick={() => setWishList(!wishlist)} className={styles.wishlist}>
        {wishlist ? <FaHeart color="red" /> : <FaHeart color="gray" />}
      </span>
    </div>
  );
}
