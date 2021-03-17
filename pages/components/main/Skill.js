//components
import Tags from "../Tags";
//style
import styles from "../../../styles/components/main/Skill.module.scss";

const Skill = () => {
  return (
    <article id="Skill" className={styles.Article}>
      <h2>Skill</h2>
      <div>
        <Tags
          args={[
            "Javascript",
            "Typescript",
            "Sass",
            "React.js",
            "Next.js",
            "Redux",
            "Node.js",
            "Express.js",
          ]}
        />
      </div>
    </article>
  );
};

export default Skill;
