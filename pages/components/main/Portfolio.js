import Image from "next/image";
import { useRef } from "react";
//styles
import styles from "../../../styles/components/main/Portfolio.module.scss";
//assets

const Portfolio = () => {
  const refArticle = useRef(null);

  return (
    <article id="Portfolio" className={styles.Article}>
      <h2>Portfolio</h2>
      <div className={styles.Portfolio_container} ref={refArticle}>
        <Image
          src="/assets/img/log_of_legend.png"
          alt="log_of_legend"
          width={"inhert"}
          height={"inhert"}
        />
        <Image
          src="/assets/img/for_you.png"
          alt="for_you"
          width={"inhert"}
          height={"inhert"}
        />
        <Image
          src="/assets/img/watcher.png"
          alt="watcher"
          width={"inhert"}
          height={"inhert"}
        />
        <Image
          src="/assets/img/todo_web.png"
          alt="watcher"
          width={"inhert"}
          height={"inhert"}
        />
      </div>
    </article>
  );
};

export default Portfolio;
