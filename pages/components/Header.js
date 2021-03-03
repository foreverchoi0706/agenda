import Link from "next/link";
//style
import styles from "../../styles/Header.module.css";

//component
import Menu from "./Menu";
//style
import styles from "../../styles/Header.module.css";

const Header = () => {
  return (
<<<<<<< HEAD
    <header id="Header" className={styles.header}>
      <nav className={styles.nav}>
        <Menu />
        <div className={styles.links}>
          <Link href="/">INTRO</Link>
          <Link href="/">HISTORY</Link>
          <Link href="./Config" as="/config">
            COTACT
          </Link>
        </div>
=======
    <header className={styles.Header}>
      <h1>최영원의 포토폴리오2</h1>
      <nav className={styles.nav}>
>>>>>>> re
      </nav>
    </header>
  );
};

export default Header;
