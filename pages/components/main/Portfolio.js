//style
import styles from "../../../styles/components/main/Portfolio.module.scss";

const Portfolio = () => {
  return (
    <article id="Portfolio" className={styles.Article}>
      <h2>Portfolio</h2>
      <div className={styles.Portfolios}>
        <div>TEST</div> <div>TEST</div> <div>TEST</div> <div>TEST</div>{" "}
        <div>TEST</div>
        <button className={styles.left_btn}>◀︎</button>
        <button className={styles.right_btn}>▶︎</button>
      </div>
    </article>
  );
};

export default Portfolio;
