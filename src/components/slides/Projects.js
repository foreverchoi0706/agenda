import React from "react";
import { useState } from "react";
import styled from "styled-components";

import Project from "./Project";

import geppetto from "../../imgs/projects/geppetto.png";
import todo_web from "../../imgs/projects/todo_web.png";
import aquarium from "../../imgs/projects/aquarium.png";

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
      height: 300px;
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
        height: 250px;
      }
    }
  }
  @media (max-width: 768px) {
    .Projects-container {
      img {
        height: 200px;
      }
    }
  }
  @media (max-width: 512px) {
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

const projects = [
  {
    name: "todo_web",
    src: todo_web,
    skills: [
      "html5",
      "css3",
      "javascript",
      "react",
      "redux",
      "sass",
      "node_js",
    ],
    description: `투두 리스트를 리액트로 구현하였습니다. 
    상태관리 라이브리인 리덕스와 browser storage를 사용하여 데이터를 관리하였습니다. 
    테마색을 정할 수 있도록 하였으며 브라우저를 닫아도 유지되게 하였습니다.`,
  },
  {
    name: "geppetto",
    src: geppetto,
    skills: ["html5", "css3", "javascript", "react", "redux"],
    description: "",
  },

  {
    name: "aquarium",
    src: aquarium,
    skills: ["html5", "css3", "javascript"],
    description: `바닐라 자바스크립트를 이용하여 아이들을 위한 간단한 수족간 웹사이트를 만들었습니다.
    물고기는 난수를 생성하여 자동으로 움직이도록 하였으며, 손(마우스)을 대면 도망가도록 하였습니다.`,
  },
];

const Projects = () => {
  const [modalState, setModalState] = useState({
    isClicked: false,
    name: "",
    src: "",
    skills: [],
  });

  const handleClick = (name, src, skills, description) => {
    setModalState({
      isClicked: !modalState.isClicked,
      name,
      src,
      skills,
      description,
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
                project.description
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
