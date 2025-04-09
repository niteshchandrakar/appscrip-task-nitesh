import { useState } from "react";
import {
  FaBars,
  FaSearch,
  FaHeart,
  FaShoppingBag,
  FaUser,
} from "react-icons/fa";
import styles from "./../styles/Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      {/* Top Alert Bar */}
      <div className={styles.topAlertBar}>
        <p>
          <span className={styles.icon}>🎉</span> Lorem ipsum
        </p>
        <p>
          <span className={styles.icon}>🎉</span> Lorem ipsum
        </p>
        <p>
          <span className={styles.icon}>🎉</span> Lorem ipsum
        </p>
      </div>

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.leftSection}>
          <FaBars
            className={styles.menuIcon}
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <img src="/Logo.png" alt="Logo" className={styles.logoIcon} />
        </div>

        <div className={styles.logo}>LOGO</div>

        <div className={styles.userActions}>
          <FaSearch />
          <FaHeart color="red" />
          <FaShoppingBag />
          <FaUser />
          <div className={styles.language}>
            ENG <span className={styles.arrow}>▼</span>
          </div>
        </div>
      </header>

      {/* Navigation Menu */}
      <nav className={`${styles.navMenu} ${menuOpen ? styles.navVisible : ""}`}>
        <a href="#">SHOP</a>
        <a href="#">SKILLS</a>
        <a href="#">STORIES</a>
        <a href="#">ABOUT</a>
        <a href="#">CONTACT US</a>
      </nav>
    </div>
  );
}
