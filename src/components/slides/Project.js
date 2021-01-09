import React from "react";

import styled from "styled-components";

const ProjectStyled = styled.div`
  width: 80vw;
  height: 80vh;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 5px;
  position: absolute;
  top: 10vh;
  left: 310vw;
  animation: project-appear 0.5s linear;

  h2 {
    height : 3%;
    margin : 1%;
  }
  .Project-container {
    height : 96%;
    display: flex;
    align-items: center;
    img {
      width: 50%;
    }
  }

  @keyframes project-appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 1028px) {
    top: 310vh;
    left: 10vw;
  }
`;

const Project = ({ src, division, handleClick }) => {
  return (
    <ProjectStyled onClick={handleClick}>
      <h2>{division}</h2>
      <div className="Project-container">
        <img src={src}></img>
        <div className="Project-description">das</div>
      </div>
    </ProjectStyled>
  );
};

export default Project;
