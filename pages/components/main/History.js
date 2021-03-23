//components
import Tag from "../Tag";
//style
import styles from "../../../styles/components/main/History.module.scss";
//assets
import histories from "../../../public/assets/json/histories.json";

const History = () => {
  return (
    <article id="History" className={styles.Article}>
      <h2>History</h2>
      <section>
        <ul className={styles.History_container}>
          <li>
            <h3>CAL 株式会社 🇯🇵</h3>
            <ul>
              <li>
                <section>
                  {histories.cal.map((skill, index) => (
                    <Tag
                      key={index}
                      name={skill.name}
                      bg_color={skill.bg_color}
                      color={skill.color}
                    />
                  ))}
                </section>
              </li>
              <li>2020/01 ~ 2021/01</li>
              <li>Java 기반 금융계 코어 시스템 개발 및 유지보수</li>
              <li>React.js 기반 금융계 어드민 사이트 개발</li>
            </ul>
          </li>
          <li>
            <h3>Fatos.Co.Ltd 🇰🇷</h3>
            <ul>
              <li>
                <section>
                  {histories.fatos.map((skill, index) => (
                    <Tag
                      key={index}
                      name={skill.name}
                      bg_color={skill.bg_color}
                      color={skill.color}
                    />
                  ))}
                </section>
              </li>
              <li>2021/02 ~ 현재</li>
              <li>React.js기반 ERP 플랫폼 서비스 개발</li>
            </ul>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default History;
