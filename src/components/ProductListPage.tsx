import React, { useEffect, useState } from "react";
import styles from "./../styles/ProductListPage.module.css";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import ProductCard from "./ProductCard";

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
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedCount, setSelectedCount] = useState<number | null>(null);
  const [sortOption, setSortOption] = useState("RECOMMENDED");

  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showRatingDropdown, setShowRatingDropdown] = useState(false);
  const [showCountDropdown, setShowCountDropdown] = useState(false);

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
      if (selectedCategory && product.category !== selectedCategory)
        return false;
      if (selectedRating && Math.floor(product.rating.rate) !== selectedRating)
        return false;
      if (selectedCount && product.rating.count < selectedCount) return false;
      return true;
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
          <p style={{ fontWeight: "bolder" }}>Filter by</p>
          <hr style={{ border: "0", borderTop: "1px solid #ddd" }} />
          {/* Category Dropdown */}
          <div className={styles.dropdown}>
            <div
              className={styles.dropdownHeader}
              onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
            >
              Category <FaChevronDown />
            </div>
            {showCategoryDropdown && (
              <div className={styles.dropdownContent}>
                {[
                  "men's clothing",
                  "women's clothing",
                  "jewelery",
                  "electronics",
                ].map((cat) => (
                  <label key={cat}>
                    <input
                      type="checkbox"
                      checked={selectedCategory === cat}
                      onChange={() =>
                        setSelectedCategory(
                          selectedCategory === cat ? null : cat
                        )
                      }
                    />
                    <span style={{ marginLeft: "5px" }}>
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>
          <hr style={{ border: "0", borderTop: "1px solid #ddd" }} />
          {/* Rating Dropdown */}
          <div className={styles.dropdown}>
            <div
              className={styles.dropdownHeader}
              onClick={() => setShowRatingDropdown(!showRatingDropdown)}
            >
              Rating <FaChevronDown />
            </div>
            {showRatingDropdown && (
              <div className={styles.dropdownContent}>
                {[5, 4, 3].map((rate) => (
                  <label key={rate}>
                    <input
                      type="checkbox"
                      checked={selectedRating === rate}
                      onChange={() =>
                        setSelectedRating(selectedRating === rate ? null : rate)
                      }
                    />
                    {rate} stars & up
                  </label>
                ))}
              </div>
            )}
          </div>
          <hr style={{ border: "0", borderTop: "1px solid #ddd" }} />
          {/* Minimum Reviews Dropdown */}
          <div className={styles.dropdown}>
            <div
              className={styles.dropdownHeader}
              onClick={() => setShowCountDropdown(!showCountDropdown)}
            >
              Minimum Reviews <FaChevronDown />
            </div>
            {showCountDropdown && (
              <div className={styles.dropdownContent}>
                {[100, 200, 300].map((count) => (
                  <label key={count}>
                    <input
                      type="checkbox"
                      checked={selectedCount === count}
                      onChange={() =>
                        setSelectedCount(selectedCount === count ? null : count)
                      }
                    />
                    {count}+ reviews
                  </label>
                ))}
              </div>
            )}
          </div>
          <hr style={{ border: "0", borderTop: "1px solid #ddd" }} />
        </div>

        {loading ? (
          <div className={styles.loading}>Loading products...</div>
        ) : filteredAndSortedProducts.length === 0 ? (
          <div className={styles.noProducts}>No products found.</div>
        ) : (
          <div className={styles.productGrid}>
            {filteredAndSortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListPage;
