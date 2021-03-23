//components
import Tag from "../Tag";
//style
import styles from "../../../styles/components/main/Skill.module.scss";
//aseets
import skills from "../../../public/assets/json/skills.json";

const Skill = () => {
  return (
    <article id="Skill" className={styles.Article}>
      <h2>Skill</h2>
      <div className={styles.Skill_container}>
        <ul className={styles.Career}>
          <li>
            <h3>Main Stack(Now Developing)</h3>
            <section>
              {skills.main_stack.map((skill, index) => (
                <Tag
                  key={index}
                  name={skill.name}
                  bg_color={skill.bg_color}
                  color={skill.color}
                />
              ))}
            </section>
          </li>
          <li>
            <h3>Sub Stack(Now Studing)</h3>
            <section>
              {skills.sub_stack.map((skill, index) => (
                <Tag
                  key={index}
                  name={skill.name}
                  bg_color={skill.bg_color}
                  color={skill.color}
                />
              ))}
            </section>
          </li>
          <li>
            <h3>Next Stack(Will Studing)</h3>
            <section>
              {skills.next_stack.map((skill, index) => (
                <Tag
                  key={index}
                  name={skill.name}
                  bg_color={skill.bg_color}
                  color={skill.color}
                />
              ))}
            </section>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Skill;
