import styles from "./../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>YourBrand</div>
      <nav className={styles.nav}>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
