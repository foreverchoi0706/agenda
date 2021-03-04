//style
import styles from "../../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.Header}>
      <h1>최영원의 포토폴리오</h1>
      <nav className={styles.nav}>
        <a href="#">#INTRO</a> <a href="#">#HISTOTY</a> <a href="#">#CONTACT</a>
      </nav>
    </header>
  );
};

export default Header;
