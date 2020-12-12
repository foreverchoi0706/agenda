import React from "react";
import styled from "styled-components";

import geppetto from "../../imgs/geppetto.png";

const ProjectsStyled = styled.li`
  .Projects-container {
    height: calc(100vh - 67px);
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
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(6, 1fr);
      div {
        margin: 0;
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
