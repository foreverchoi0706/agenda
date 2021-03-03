import Link from "next/link";
//style
import styles from "../../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.Header}>
      <h1>최영원의 포토폴리오2</h1>
      <nav className={styles.nav}>
      </nav>
    </header>
  );
};

export default Header;
