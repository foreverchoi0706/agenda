import { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

import html from "../../imgs/html.png";
import css from "../../imgs/css.png";
import javscript from "../../imgs/javascript.png";
import react from "../../imgs/react.png";
import redux from "../../imgs/redux.png";
import nodeJs from "../../imgs/node-js.png";
import github from "../../imgs/github.png";
import etc from "../../imgs/etc.png";

const SkillsStyled = styled.section`
  position: relative;

  .Skills-container {
    display: grid;
    grid-template-columns: repeat(6, 150px);
    grid-auto-rows: 150px;
    justify-content: space-around;
    gap: 10px;

    img {
      width: 150px;
      height: 150px;
      cursor: pointer;
      &:hover {
        //호버되면 약간 크게
        width: 105%;
        height: 105%;
      }
    }
  }

  @media (max-width: 1300px) {
    .Skills-container {
      grid-template-columns: repeat(4, 100px);
      grid-auto-rows: 100px;
      img {
        width: 100px;
        height: 100px;
      }
    }
  }
  @media (max-width: 768px) {
    .Skills-container {
      grid-template-columns: repeat(3, 75px);
      grid-auto-rows: 75px;
      img {
        width: 75px;
        height: 75px;
      }
    }
  }
`;
const Skills = () => {
  const [modalState, setModalState] = useState({
    isClicked: false,
    division: null,
    xPosition: 0,
    yPosition: 0,
  });

  const handleChange = (e) => {
    console.dir(e);
    setModalState({
      ...modalState,
      xPosition: e.screenX,
      yPosition: e.screenY,
    });
  };

  const handleClick = (e) => {
    setModalState({
      ...modalState,
      isClicked: true,
      division: e.target.alt,
    });
  };

  return (
    <SkillsStyled>
      <h1>#SKILL STACKS(Click Stack!)</h1>
      <div className="Skills-container" onChange={handleChange}>
        <img src={html} alt="html" onClick={handleClick} />
        <img src={css} alt="css" onClick={handleClick} />
        <img src={javscript} alt="javscript" onClick={handleClick} />
        <img src={react} alt="react" onClick={handleClick} />
        <img src={redux} alt="redux" onClick={handleClick} />
        <img src={nodeJs} alt="nodeJs" onClick={handleClick} />
        <img src={github} alt="github" onClick={handleClick} />
        <img src={etc} alt="github" onClick={handleClick} />
      </div>
      {modalState.isClicked && <Modal {...modalState} />}
    </SkillsStyled>
  );
};

export default Skills;
