import Link from "next/link";

//component
import Menu from "./Menu";
//style
import styles from "../../styles/Header.module.css";

const Header = () => {
  return (
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
      </nav>
    </header>
  );
};

export default Header;
