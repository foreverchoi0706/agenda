//components
import Tags from "../Tags";
//style
import styles from "../../../styles/components/main/History.module.scss";

const History = () => {
  return (
    <article id="History" className={styles.Article}>
      <h2>History</h2>
      <section>
        <ul className={styles.Career}>
          <li>
            <h3>CAL 株式会社 🇯🇵</h3>
            <ul>
              <li>
                <Tags args={["Java", "Oracle", "Linux"]} />
              </li>
              <li>2020/01 ~ 2021/01</li>
              <li>금융계 코어 시스템 개발 및 유지보수</li>
            </ul>
          </li>
          <li>
            <h3>Fatos.Co.Ltd 🇰🇷</h3>
            <ul>
              <li>
                <Tags
                  args={[
                    "React.js",
                    "Redux",
                    "Redux-toolkit",
                    "Sass",
                    "Docker",
                    "Jenkins",
                  ]}
                />
              </li>
              <li>2021/02 ~ 2021/05</li>
              <li>React.js기반 ERP 플랫폼 서비스 개발</li>
            </ul>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default History;
