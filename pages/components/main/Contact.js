//components
import Tags from "../Tags";
//style
import styles from "../../../styles/components/main/Contact.module.scss";

const Contact = () => {
  return (
    <article id="Contact" className={styles.Article}>
      <h2>Contact</h2>
      <div className={styles.Contact_container}>
        <a href="https://velog.io/@foreverchoi0706" target="blink">
          BLOG
        </a>
        <a href="https://github.com/foreverchoi0706" target="blink">
          GITHUB
        </a>
        <a href="mailto:foreverchoi0706@gmail.com">E-MAIL</a>
      </div>
    </article>
  );
};

export default Contact;
