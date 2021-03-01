//style
import styles from "../../styles/Menu.module.css";

const Menu = () => {
  return (
    <div className={styles.Menu}>
      {/* <ul className={styles.left_arrow}>
        <li />
        <li />
      </ul>
      <ul className={styles.right_arrow}>
        <li />
        <li />
      </ul> */}
      <div className={styles.test1}>‹</div>
      <div  className={styles.test2}>›</div>
    </div>
  );
};

export default Menu;
