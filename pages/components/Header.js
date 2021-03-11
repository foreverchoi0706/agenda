//style
import styles from "../../styles/components/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.Header}>
      <h1>최영원의 포토폴리오</h1>
      <nav className={styles.nav}>
        <a href="#Intro">
          {"<a>"}Intro{"</a>"}
        </a>
        <a href="#History">
          {"<a>"}History{"</a>"}
        </a>
        <a href="#Skill">
          {"<a>"}Skill{"</a>"}
        </a>
        <a href="#Portfolio">
          {"<a>"}Portfolio{"</a>"}
        </a>
      </nav>
    </header>
  );
};

export default Header;
