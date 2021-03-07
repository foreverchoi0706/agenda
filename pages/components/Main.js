//component
import Intro from "./Intro";
import History from "./History";
import Portfolio from "./Portfolio";
//style
import styles from "../../styles/components/Main.module.css";

const Main = () => {
  return (
    <main className={styles.Main}>
      <Intro />
      <History />
      <Portfolio />
    </main>
  );
};

export default Main;
