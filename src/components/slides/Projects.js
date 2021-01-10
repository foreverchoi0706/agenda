import React from "react";
import { useState } from "react";
import styled from "styled-components";

import Project from "./Project";

import geppetto from "../../imgs/projects/geppetto.png";
import todo_web from "../../imgs/projects/todo_web.png";
import velog from "../../imgs/projects/velog.png";

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
      img {
        height: 200px;
      }
    }
  }
  @media (max-width: 768px) {
    .Projects-container {
      img {
        height: 150px;
      }
    }
  }
  @media (max-width: 384px) {
    .Projects-container {
      img {
        height: 100px;
      }
    }
  }
`;

const Projects = () => {
  const [modalState, setModalState] = useState({
    isClicked: false,
    division: "",
    src: "",
  });

  const handleClick = (division, src) => {
    setModalState({
      isClicked: !modalState.isClicked,
      division,
      src,
    });
  };

  const { isClicked, division, src } = modalState;

  return (
    <ProjectsStyled>
      <h2>💻Projects💻</h2>
      <div className="Projects-container">
        <img src={geppetto} onClick={() => handleClick("geppetto", geppetto)} />
        <img src={todo_web} onClick={() => handleClick("todo_web", todo_web)} />
        <img src={velog} onClick={() => handleClick("velog", velog)} />
        <img src={geppetto} onClick={() => handleClick("geppetto", geppetto)} />
        <img src={todo_web} onClick={() => handleClick("todo_web", todo_web)} />
        <img src={velog} onClick={() => handleClick("velog", velog)} />
      </div>
      {isClicked && (
        <Project src={src} division={division} handleClick={handleClick} />
      )}
    </ProjectsStyled>
  );
};

export default Projects;
