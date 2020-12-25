import React from "react";
import styled from "styled-components";

import Skill from "./Skill";

const SkillsStyled = styled.li`
  .Skills-sections {
    height: calc(100vh - 68px);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 10px;

    section {
      flex-grow: 1;
      background-color: lightgray;
      border-radius: 5px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      &:nth-child(odd) {
        margin: 0 20vw 0 0;
      }
      &:nth-child(even) {
        margin: 0 0 0 20vw;
      }
      img {
        width: 200px;
        height: 200px;
      }
    }
  }
  @media (max-width: 1028px) {
    .Skills-sections {
      section {
        img {
          width: 150px;
          height: 150px;
        }
        &:nth-child(odd) {
          margin: 0 10vw 0 0;
        }
        &:nth-child(even) {
          margin: 0 0 0 10vw;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .Skills-sections {
      section {
        img {
          width: 80px;
          height: 80px;
        }
        &:nth-child(odd) {
          margin: 0 5vw 0 0;
        }
        &:nth-child(even) {
          margin: 0 0 0 5vw;
        }
      }
    }
  }
`;

const Skills = () => {
  return (
    <SkillsStyled>
      <h2>#Skills</h2>
      <div className="Skills-sections">
        <section>
          <Skill name={"html5"} />
          <Skill name={"css3"} />
          <Skill name={"javascript"} />
        </section>
        <section>
          <Skill name={"sass"} />
          <Skill name={"react"} />
          <Skill name={"redux"} />
        </section>
        <section>
          <Skill name={"typescript"} />
          <Skill name={"node_js"} />
          <Skill name={"github"} />
        </section>
      </div>
    </SkillsStyled>
  );
};

export default Skills;
