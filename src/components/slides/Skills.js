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
      border-radius: 5px;
      flex-grow: 1;
      background-color: black;
      color: white;
      display: flex;
      justify-content: space-around;
      align-items: center;
      h2 {
        font-size: 1rem;
        width: 150px;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
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
          font-size: 0.8rem;
          width: 100px;
          height: 100px;
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


  @media (max-width: 384px) {
    .Skills-sections {
      section {
        h2 {
          font-size: 0.5rem;
          width: 50px;
          height: 50px;
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
const frontEndSkills = ["react", "redux", "sass"];
const backEndSkills = ["express"];
const etcSkills = ["node_js", "typescript"];

const Skills = () => {
  const [skillsText, setSkillsText] = useState({
    basedSkillsText: { text: "", isMouseOver: false },
    frontEndSkillsText: { text: "", isMouseOver: false },
    backEndSkillsText: { text: "", isMouseOver: false },
    etcSkillsText: { text: "", isMouseOver: false },
  });

  const handleMouseOver = (skillText, division) => {
    setSkillsText({
      ...skillsText,
      [division]: {
        text: skillText,
        isMouseOver: true,
      },
    });
  };

  const handleMouseOut = (division) => {
    setSkillsText({
      ...skillsText,
      [division]: {
        text: "",
        isMouseOver: false,
      },
    });
  };

  const {
    basedSkillsText,
    frontEndSkillsText,
    backEndSkillsText,
    etcSkillsText,
  } = skillsText;

  return (
    <SkillsStyled>
      <div className="Skills-sections">
        <section>
          {basedSkills.map((skill, index) => (
            <Skill
              key={index}
              name={skill}
              handleMouseOver={handleMouseOver}
              handleMouseOut={handleMouseOut}
            />
          ))}
          <h2>
            {basedSkillsText.isMouseOver
              ? basedSkillsText.text
              : "BASED SKILLS"}
          </h2>
        </section>
        <section>
          <h2>
            {frontEndSkillsText.isMouseOver
              ? frontEndSkillsText.text
              : "FRONTEND SKILLS"}
          </h2>
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
          <h2>
            {backEndSkillsText.isMouseOver
              ? backEndSkillsText.text
              : "BACKEND SKILLS"}
          </h2>
        </section>
        <section>
          <h2>
            {etcSkillsText.isMouseOver ? etcSkillsText.text : "ETC SKILLS"}
          </h2>
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
