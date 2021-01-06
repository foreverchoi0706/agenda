import React from "react";
import { useState } from "react";
import styled from "styled-components";

import geppetto from "../../imgs/geppetto.png";
import todo_web from "../../imgs/todo_web.png";
import Project from "./Project";

const ProjectsStyled = styled.li`
  h2 {
    height: 3vh;
    margin: 2vh;
  }
  .Projects-container {
    height: calc(100vh - 7vh);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 5px;
    justify-items: center;
    align-items: center;
    img {
      width: 100%;
      cursor: pointer;
      &:hover {
        width: 105%;
      }
    }
  }
  @media (max-width: 1028px) {
    .Projects-container {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
    }
  }
`;

const Projects = () => {
  const [modalState, setModalState] = useState({
    isClicked: false,
    division: "",
  });

  const handleClick = (division) => {
    setModalState({
      isClicked: !modalState.isClicked,
      division,
    });
  };

  const { isClicked, division } = modalState;

  return (
    <ProjectsStyled>
      <h2>#Projects</h2>
      <div className="Projects-container">
        <img src={geppetto} onClick={() => handleClick("geppetto")} />
        <img src={todo_web} onClick={() => handleClick("todo_web")} />
        <img src={geppetto} onClick={() => handleClick("geppetto")} />
        <img src={todo_web} onClick={() => handleClick("todo_web")} />
        <img src={geppetto} onClick={() => handleClick("geppetto")} />
        <img src={todo_web} onClick={() => handleClick("todo_web")} />
      </div>
      {isClicked && <Project division={division} handleClick={handleClick} />}
    </ProjectsStyled>
  );
};

export default Projects;
