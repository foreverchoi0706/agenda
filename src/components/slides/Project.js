import React from "react";

import styled from "styled-components";

const ProjectStyled = styled.div`
  width: 80vw;
  height: 80vh;
  background-color: white;
  border: 1px solid lightgray;
  box-shadow: 5px 5px 5px lightgray;

  position: absolute;
  top: 0;

  opacity: 1;
  transition-duration: 1s;
  transition-property: opacity;
`;

const Project = ({ division, isClicked }) => {
  const handleClick = () => {
    isClicked = false;
  };

  <ProjectStyled onClick={handleClick}></ProjectStyled>;
};

export default Project;
