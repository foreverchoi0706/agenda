import React, { useState } from "react";
import styled from "styled-components";

import Skill from "./Skill";

const SkillsStyled = styled.li`
  .Skills-sections {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 10px;
    section {
      flex-grow: 1;
      background-color: black;
      color: white;
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
    }
  }
  @media (max-width: 1028px) {
    .Skills-sections {
      section {
        h2 {
          font-size: 1rem;
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
        h2 {
          font-size: 0.7rem;
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

  @media (max-width: 384px) {
    .Skills-sections {
      section {
        h2 {
          font-size: 0.5rem;
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

const basedSkills = ["html5", "css3", "javascript"];
const frontEndSkills = ["react", "redux"];
const backEndSkills = ["express", "nest"];
const etcSkills = ["node_js", "typescript", "sass", "github"];

const skills = [basedSkills,frontEndSkills,backEndSkills,etcSkills];

const Skills = () => {
  const [skillText, setSkillText] = useState({});

  const handleMouseOver = (skillText) => {
    console.log(skillText);
  };

  const handleMouseOut = () => {};

  return (
    <SkillsStyled>
      <div className="Skills-sections">
        <section>
          {basedSkills.map((skill) => (
            <Skill
              name={skill}
              handleMouseOver={handleMouseOver}
              handleMouseOut={handleMouseOut}
            />
          ))}
          <h2>BASED SKILLS</h2>
        </section>
        <section>
          <h2>FRONT-END SKILLS</h2>
          {frontEndSkills.map((skill) => (
            <Skill
              name={skill}
              handleMouseOver={handleMouseOver}
              handleMouseOut={handleMouseOut}
            />
          ))}
        </section>
        <section>
          {backEndSkills.map((skill) => (
            <Skill
              name={skill}
              handleMouseOver={handleMouseOver}
              handleMouseOut={handleMouseOut}
            />
          ))}
          <h2>BACK-END SKILLS</h2>
        </section>
        <section>
          <h2>ETC SKILLS</h2>
          {etcSkills.map((skill) => (
            <Skill
              name={skill}
              handleMouseOver={handleMouseOver}
              handleMouseOut={handleMouseOut}
            />
          ))}
        </section>
      </div>
    </SkillsStyled>
  );
};

export default Skills;
