import React from "react";
import styled from "styled-components";

import geppetto from "../../imgs/geppetto.png";

const ProjectsStyled = styled.li`
  .Projects-container {
    height: calc(100vh - 68px);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 5px;
    justify-items: center;
    align-items: center;
    div {
      cursor: pointer;
      img {
        width: 100%;
      }
      &:hover {
        width: 105%;
      }
    }
  }
  @media (max-width: 1028px) {
    .Projects-container {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
      div {
      }
    }
  }

  @media (max-width: 768px) {
    .Projects-container {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      div {
        display: flex;
        justify-content: center;
        img {
          width: 50%;
        }
      }
    }
  }
`;

const Projects = () => {
  return (
    <ProjectsStyled>
      <h2>#Projects</h2>
      <div className="Projects-container">
        <div>
          <img src={geppetto} />
        </div>
        <div>
          <img src={geppetto} />
        </div>
        <div>
          <img src={geppetto} />
        </div>
        <div>
          <img src={geppetto} />
        </div>
        <div>
          <img src={geppetto} />
        </div>
        <div>
          <img src={geppetto} />
        </div>
      </div>
    </ProjectsStyled>
  );
};

export default Projects;
