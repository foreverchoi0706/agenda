import Image from "next/image";
//style
import styles from "../../styles/components/Intro.module.css";

const Intro = () => {
  return (
    <article className={styles.Intro}>
      <h2>#Intro</h2>
      <p>
        좋은 아이디어나 더 나은 의견이 있다면 제시하고, 흥미로운 정보가 있다면
        공유하며 스스로 부족함에 피드백을 받아 선 순환을 일으키는 능동적인
        개발을 주도하는 개발자가 되고 싶습니다.
      </p>
    </article>
  );
};

export default Intro;
