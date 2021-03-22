import Image from "next/image";
import { useRef } from "react";
//styles
import styles from "../../../styles/components/main/Portfolio.module.scss";
//assets

const Portfolio = () => {
  const refArticle = useRef(null);

  const toLeft = () => {
    refArticle.current.style.transitionProperty = "transform";
    refArticle.current.style.transform = "translateX(600px)";
    refArticle.current.style.transitionDuration = "0.5s";
  };

  const toRight = () => {
    refArticle.current.style.transitionProperty = "transform";
    refArticle.current.style.transform = "translateX(-600px)";
    refArticle.current.style.transitionDuration = "0.5s";
  };

  return (
    <article id="Portfolio" className={styles.Article}>
      <h2>Portfolio</h2>
      <div className={styles.Portfolios} ref={refArticle}>
        <Image
          src="/assets/log_of_legend.png"
          alt="log_of_legend"
          width={"inhert"}
          height={500}
        />
        <Image
          src="/assets/for_you.png"
          alt="for_you"
          width={"inhert"}
          height={500}
        />
        <Image
          src="/assets/watcher.png"
          alt="watcher"
          width={"inhert"}
          height={500}
        />
        <span className={styles.left_btn} onClick={toLeft}>
          ◀︎
        </span>
        <span className={styles.right_btn} onClick={toRight}>
          ▶︎
        </span>
      </div>
    </article>
  );
};

export default Portfolio;
