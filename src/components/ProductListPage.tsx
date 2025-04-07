import React, { useEffect, useState } from "react";
import styles from "./../styles/ProductListPage.module.css";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

type Props = {
  productsFromServer: Product[];
};

const ProductListPage = ({ productsFromServer }: Props) => {
  const [showFilters, setShowFilters] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const toggleFilters = () => setShowFilters((prev) => !prev);

  useEffect(() => {
    if (productsFromServer?.length > 0) {
      setProducts(productsFromServer);
      setLoading(false);
    } else {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [productsFromServer]);

  return (
    <div className={styles.pageWrapper}>
      <header className={styles.header}>
        <div className={styles.logo}>LOGO</div>
        <nav className={styles.navMenu}>
          <a href="#">SHOP</a>
          <a href="#">SKILLS</a>
          <a href="#">STORIES</a>
          <a href="#">ABOUT</a>
          <a href="#">CONTACT US</a>
        </nav>
        <div className={styles.userActions}>
          <span>🔍</span>
          <span>🧡</span>
          <span>🛒</span>
          <span>👤</span>
        </div>
      </header>

      <section className={styles.heroSection}>
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Armet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </section>

      <div className={styles.controls}>
        <div className={styles.itemCount}>{products.length} ITEMS</div>
        <button className={styles.filterToggle} onClick={toggleFilters}>
          {showFilters ? "HIDE FILTER" : "SHOW FILTER"}
        </button>
        <select className={styles.sortSelect}>
          <option>RECOMMENDED</option>
          <option>NEWEST FIRST</option>
          <option>POPULAR</option>
          <option>PRICE: HIGH TO LOW</option>
          <option>PRICE: LOW TO HIGH</option>
        </select>
      </div>

      {showFilters && (
        <div className={styles.filterSection}>
          <h3>Filter by</h3>
          <label>
            <input type="checkbox" /> Category 1
          </label>
          <label>
            <input type="checkbox" /> Category 2
          </label>
        </div>
      )}

      {loading ? (
        <div className={styles.loading}>Loading products...</div>
      ) : products.length === 0 ? (
        <div className={styles.noProducts}>No products found.</div>
      ) : (
        <div className={styles.productGrid}>
          {products.map((product) => (
            <div className={styles.productCard} key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                className={styles.productImage}
              />
              <h4 className={styles.productName}>{product.title}</h4>
              <p className={styles.productDetails}>${product.price}</p>
              <span className={styles.wishlist}>🧡</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductListPage;

import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const productsFromServer: Product[] = await res.json();

    return { props: { productsFromServer } };
  } catch {
    return { props: { productsFromServer: [] } };
  }
};
