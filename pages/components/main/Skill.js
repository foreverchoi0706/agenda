//components
import Tags from "../Tags";
//style
import styles from "../../../styles/components/main/Skill.module.scss";

const Skill = () => {
  return (
    <article id="Skill" className={styles.Article}>
      <h2>Skill</h2>
      <div className={styles.Skill_container}>
        <ul className={styles.Career}>
          <li>
            <h3>Main Stack - -Now Developing</h3>
            <Tags
              args={[
                "Html5",
                "Css3",
                "Sass",
                "Css Module",
                "Javascript",
                "React.js",
                "Redux",
                "Node.js",
              ]}
            />
          </li>
          <li>
            <h3>Sub Stack - -Now Studing</h3>
            <Tags
              args={[
                "Typescript",
                "Next.js",
                "Express.js",
                "Linux",
                "ReactNative",
              ]}
            />
          </li>
          <li>
            <h3>Will Studing</h3>
            <Tags args={["Cloud", "Docker", "Jenkins", "Etc..."]} />
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Skill;
