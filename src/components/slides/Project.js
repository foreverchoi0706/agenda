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
  opacity: 1;
  transition-duration: 1s;
  transition-property: opacity;

  @media (max-width: 1028px) {
    top: 310vh;
    left: 10vw;
  }
`;

const Project = ({ division, handleClick }) => {
  return <ProjectStyled onClick={handleClick}>{division}</ProjectStyled>;
};

export default Project;
