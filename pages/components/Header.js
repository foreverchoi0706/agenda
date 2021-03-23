//style
import styles from "../../styles/components/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.Header}>
      <h1>{"< "}foreverChoi{" />"}</h1>
      <nav className={styles.nav}>
        <a href="#Intro">Intro</a>
        <a href="#History">History</a>
        <a href="#Skill">Skill</a>
        <a href="#Portfolio">Portfolio</a>
      </nav>
    </header>
  );
};

export default Header;
