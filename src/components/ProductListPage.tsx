import React, { useEffect, useState } from "react";
import styles from "./../styles/ProductListPage.module.css";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

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

const ProductListPage = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState("RECOMMENDED");

  const toggleFilters = () => setShowFilters((prev) => !prev);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredAndSortedProducts = [...products]
    .filter((product) => {
      if (!selectedCategory) return true;
      return product.category === selectedCategory;
    })
    .sort((a, b) => {
      switch (sortOption) {
        case "PRICE: LOW TO HIGH":
          return a.price - b.price;
        case "PRICE: HIGH TO LOW":
          return b.price - a.price;
        case "POPULAR":
          return b.rating?.rate - a.rating?.rate;
        case "NEWEST FIRST":
          return b.id - a.id;
        default:
          return 0;
      }
    });

  return (
    <div className={styles.pageWrapper}>
      <section className={styles.heroSection}>
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Armet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </section>
      <hr style={{ border: "0", borderTop: "1px solid #ddd" }} />

      <div className={styles.controls}>
        <div style={{ display: "flex", gap: "40px" }}>
          <div className={styles.itemCount}>
            {filteredAndSortedProducts.length} ITEMS
          </div>

          <button className={styles.filterToggle} onClick={toggleFilters}>
            <FaChevronRight /> {showFilters ? "HIDE FILTER" : "SHOW FILTER"}
          </button>
        </div>
        <div className={styles.selectWrapper}>
          <select
            className={styles.sortSelect}
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option>RECOMMENDED</option>
            <option>NEWEST FIRST</option>
            <option>POPULAR</option>
            <option>PRICE: HIGH TO LOW</option>
            <option>PRICE: LOW TO HIGH</option>
          </select>
          <FaChevronDown className={styles.selectIcon} />
        </div>
      </div>
      <hr
        style={{
          marginBottom: "10px",
          border: "0",
          borderTop: "1px solid #ddd",
        }}
      />

      <div className={styles.contentArea}>
        <div
          className={`${styles.filterSection} ${
            showFilters ? styles.showFilter : ""
          }`}
        >
          <h3>Filter by</h3>
          <label>
            <input
              type="checkbox"
              checked={selectedCategory === "men's clothing"}
              onChange={() =>
                setSelectedCategory(
                  selectedCategory === "men's clothing"
                    ? null
                    : "men's clothing"
                )
              }
            />
            Men's Clothing
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedCategory === "women's clothing"}
              onChange={() =>
                setSelectedCategory(
                  selectedCategory === "women's clothing"
                    ? null
                    : "women's clothing"
                )
              }
            />
            Women's Clothing
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedCategory === "jewelery"}
              onChange={() =>
                setSelectedCategory(
                  selectedCategory === "jewelery" ? null : "jewelery"
                )
              }
            />
            Jewelry
          </label>
          <label>
            <input
              type="checkbox"
              checked={selectedCategory === "electronics"}
              onChange={() =>
                setSelectedCategory(
                  selectedCategory === "electronics" ? null : "electronics"
                )
              }
            />
            Electronics
          </label>
        </div>

        {loading ? (
          <div className={styles.loading}>Loading products...</div>
        ) : filteredAndSortedProducts.length === 0 ? (
          <div className={styles.noProducts}>No products found.</div>
        ) : (
          <div className={styles.productGrid}>
            {filteredAndSortedProducts.map((product) => (
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
    </div>
  );
};

export default ProductListPage;
