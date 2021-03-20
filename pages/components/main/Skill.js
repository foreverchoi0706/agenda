//components
import Tags from "../Tags";
//style
import styles from "../../../styles/components/main/Skill.module.scss";

const Skill = () => {
  return (
    <article id="Skill" className={styles.Article}>
      <h2>Skill</h2>
      <div className={styles.Skill_container}>
        <Tags
          args={[
            "Javascript",
            "Typescript",
            "Sass",
            "React.js",
            "Next.js",
            "Redux",
            "Redux-toolkit",
            "Redux-thunk",
            "Redux-saga",
            "Node.js",
            "Express.js",
            "Aws",
            "Linux",
          ]}
        />
      </div>
    </article>
  );
};

export default Skill;
