import styled from "styled-components";

import html from "../../imgs/html.png";
import css from "../../imgs/css.png";
import javscript from "../../imgs/javascript.png";
import react from "../../imgs/react.png";

import skillStack from "../../modules/skillStack.json";

const SkillsStyled = styled.section`
  .Skills-container {
    display: grid;
    grid-template-columns: repeat(6, 200px);
    grid-auto-rows: 200px;
    gap: 20px;
    img {
      width: 200px;
      height: 200px;
    }
  }
  details {
    textarea {
      width: 100%;
      height: 333px;
      background-color: lightgray;
      font-weight: bold;
      border-radius: 5px;
      font-size : 1.5rem;
    }
  }
`;
const Skills = () => {
  return (
    <SkillsStyled>
      <h1>#SKILL STACK</h1>
      <div className="Skills-container">
        <img src={html} alt="HTML5" />
        <img src={css} alt="HTML5" />
        <img src={javscript} alt="HTML5" />
        <img src={react} alt="HTML5" />
      </div>
      <details>
        <summary>detail?</summary>
        <textarea
          readOnly
          value={`
const skillStacks = {
    html: ["html5"],
    css: ["css3", "scss"],
    javascript: ["es5", "es6", "es7", "typescript"],
    node.js: ["babel", "webpack"],
    react: ["react-redux", "react-router-dom", "styled-component", "hooks"],
    aws: ["ec2", "s3", "rdb"]}
        `}
        ></textarea>
      </details>
    </SkillsStyled>
  );
};

export default Skills;
