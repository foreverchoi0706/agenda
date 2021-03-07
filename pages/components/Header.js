//style
import styles from "../../styles/components/Header.module.css";

const Header = () => {
  return (
    <header className={styles.Header}>
      <h1>최영원의 포토폴리오</h1>
      <nav className={styles.nav}>
        <a href="#">#Intro</a> <a href="#">#History</a> <a href="#">#Portfolio</a>
      </nav>
    </header>
  );
};

export default Header;
