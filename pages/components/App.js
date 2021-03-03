//comp
import Header from "./Header";
<<<<<<< HEAD
import Intro from "./Intro";
import History from "./History";
import Contact from "./Contact";
import Footer from "./Footer";
//style
import styles from "../../styles/App.module.css";

const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <Intro />
      <History />
      <Contact />
      <Footer />
    </div>
=======
import Main from "./Main";

const App = () => {
  return (
    <>
      <Header />
      <Main />
    </>
>>>>>>> re
  );
};

export default App;
