import React from "react";
import styled from "styled-components";

const ProjectsStyled = styled.li`
  .Projects-container {
    height: calc(100vh - 67px);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
    div {
      cursor: pointer;
      width: 100px;
      height: 100px;
      background-color: black;
      &:hover {
        width: 110px;
        height: 110px;
      }
    }
  }
  @media (max-width: 1028px) {
    .Projects-container {
      height : auto;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
      div{
        margin : 50px;
      }
    }
  }

  @media (max-width: 768px) {
    .Projects-container {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(6, 1fr);
    }
  }
`;

const Projects = () => {
  return (
    <ProjectsStyled>
      <h2>#Projects</h2>
      <div className="Projects-container">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </ProjectsStyled>
  );
};

export default Projects;
