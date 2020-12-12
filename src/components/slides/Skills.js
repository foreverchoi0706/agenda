import React from "react";
import styled from "styled-components";

const SkillsStyled = styled.li`
display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://source.unsplash.com/random/1920x1080");
  background-size: cover;
  @media (max-width: 1028px) {
    height: 100vh;
  }

  @media (max-width: 768px) {
  }`;

const Skills = () => {
  return <SkillsStyled>#Skills</SkillsStyled>;
};

export default Skills;
