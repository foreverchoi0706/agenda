//style
import styles from "../../../styles/components/main/History.module.scss";

const History = () => {
  return (
    <article id="History" className={styles.Article}>
      <h2>
        {"<"}History{"/>"}
      </h2>
      <section>
        <ul className={styles.Career}>
          <li>
            <h3>2020/01 ~ 2021/01 CAL 주식회사 개발팀 인턴</h3>
            <ul>
              <li>Java/JS/Oracle/Linux</li>
              <li>asda</li>
              <li>asda</li>
              <li>asda</li>
              <li>asda</li>
            </ul>
          </li>
          <li>
            <h3>2021/02 ~ 2021/04</h3>
            <ul>
              <li>JAVA/ORA</li>
              <li>asda</li>
              <li>asda</li>
              <li>asda</li>
              <li>asda</li>
            </ul>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default History;
