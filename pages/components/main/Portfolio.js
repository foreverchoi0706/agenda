import Image from "next/image";
import { useState } from "react";
//components
import Tag from "../Tag";
//styles
import styles from "../../../styles/components/main/Portfolio.module.scss";
//assets
import portfolios from "../../../public/assets/json/porfolios.json";

const initialState = {
  isClick: false,
  name: "",
  src: "",
  description: "",
  link: "",
  used_skills: [],
  git: "",
};

const Modal = ({
  setModalState,
  name,
  src,
  description,
  link,
  git,
  used_skills,
}) => {
  return (
    <div
      className={styles.Modal}
      onClick={() =>
        setModalState({
          ...initialState,
          isClick: false,
        })
      }
    >
      <div className={styles.Modal_container}>
        <h2>{name}</h2>
        <img src={src} alt={name} />
        <p>{description}</p>
        <section>
          {used_skills.map((used_skill,index) => (
            <Tag
              key={index}
              name={used_skill.name}
              bg_color={used_skill.bg_color}
              color={used_skill.color}
            />
          ))}
        </section>
        <div className={styles.Modal_link_container}>
          <a href={link} target="blink">
            바로가기
          </a>
          {git && (
            <a href={git} target="blink">
              깃허브
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [ModalState, setModalState] = useState(initialState);

  const handleClick = (name, src, description, link, git, used_skills) => {
    setModalState({
      name,
      src,
      description,
      link,
      git,
      used_skills,
      isClick: true,
    });
  };

  return (
    <article id="Portfolio" className={styles.Article}>
      <h2>Portfolio</h2>
      <div className={styles.Portfolio_container}>
        {portfolios.map((portfolio, index) => (
          <Image
            key={index}
            onClick={() =>
              handleClick(
                portfolio.name,
                portfolio.src,
                portfolio.description,
                portfolio.link,
                portfolio.git,
                portfolio.used_skills
              )
            }
            src={portfolio.src}
            alt={portfolio.name}
            width={"inhert"}
            height={"inhert"}
          />
        ))}
      </div>
      {ModalState.isClick && (
        <Modal
          handleClick={handleClick}
          setModalState={setModalState}
          {...ModalState}
        />
      )}
    </article>
  );
};

export default Portfolio;
