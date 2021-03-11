//component
import Intro from "./main/Intro";
import History from "./main/History";
import Skill from "./main/Skill";
import Portfolio from "./main/Portfolio";
//style
import styles from "../../styles/components/Main.module.scss";

const Main = () => {
  return (
    <main className={styles.Main}>
      <Intro />
      <History />
      <Skill/>
      <Portfolio />
    </main>
  );
};

export default Main;
