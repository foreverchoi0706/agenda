import React from "react";
import { useState } from "react";
import styled from "styled-components";

import Project from "./Project";
import info from "../../info";

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
      height: 350px;
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
        height: 275px;
      }
    }
  }
  @media (max-width: 768px) {
    .Projects-container {
      img {
        height: 225px;
      }
    }
  }
  @media (max-width: 512px) {
    .Projects-container {
      img {
        height: 175px;
      }
    }
  }
  @media (max-width: 384px) {
    .Projects-container {
      img {
        height: 125px;
      }
    }
  }
`;

const { projects } = info;

const Projects = () => {
  const [modalState, setModalState] = useState({
    isClicked: false,
    name: "",
    src: "",
    skills: [],
    link: "",
    git: "",
  });

  const handleClick = (name, src, skills, description, link, git) => {
    setModalState({
      isClicked: !modalState.isClicked,
      name,
      src,
      skills,
      description,
      link,
      git,
    });
  };

  return (
    <ProjectsStyled>
      <h2>💻Projects💻</h2>
      <div className="Projects-container">
        {projects.map((project, index) => (
          <img
            key={index}
            src={project.src}
            onClick={() =>
              handleClick(
                project.name,
                project.src,
                project.skills,
                project.description,
                project.link,
                project.git
              )
            }
          />
        ))}
      </div>
      {modalState.isClicked && (
        <Project handleClick={handleClick} {...modalState} />
      )}
    </ProjectsStyled>
  );
};

export default Projects;
