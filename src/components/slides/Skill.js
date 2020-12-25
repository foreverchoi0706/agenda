import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

import html from "../../imgs/html.png";
import css from "../../imgs/css.png";
import javascript from "../../imgs/javascript.png";

import typescript from "../../imgs/typescript.png";
import react from "../../imgs/react.png";
import redux from "../../imgs/redux.png";

import sass from "../../imgs/sass.png";
import node_js from "../../imgs/node-js.png";
import github from "../../imgs/github.png";

const SkillStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .SKill-img {
    width: 200px;
    height: 200px;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      display: none;
    }
  }

  @media (max-width: 1028px) {
    .SKill-img {
      width: 150px;
      height: 150px;
    }
  }

  @media (max-width: 768px) {
    .SKill-img {
      width: 80px;
      height: 80px;
    }
  }
`;

const Skill = ({ name }) => {
  const [skillText, setSkillText] = useState("");

  const refDiv = useRef(null);
  const refI = useRef(null);

  useEffect(() => {
    let division;
    switch (name) {
      case "html5":
        division = html;
        setSkillText(
          "기본적인 태그 및 속성을 알고 있고, 시멘틱한 태그에 대한 지식이 있습니다."
        );
        break;
      case "css3":
        division = css;
        break;
      case "javascript":
        division = javascript;
        break;
      case "typescript":
        division = typescript;
        break;
      case "react":
        division = react;
        break;
      case "redux":
        division = redux;
        break;
      case "sass":
        division = sass;
        break;
      case "node_js":
        division = node_js;
        break;
      case "github":
        division = github;
        break;
    }
    refDiv.current.style.backgroundImage = `url(${division})`;
  }, [name, refDiv]);

  const handleMouseOver = () => {
    refDiv.current.style.opacity = "0.5";
    refI.current.style.display = "block";
  };

  const handleMouseOut = () => {
    refDiv.current.style.opacity = "1";
    refI.current.style.display = "none";
  };

  return (
    <SkillStyled>
      <div
        ref={refDiv}
        className="SKill-img"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <i ref={refI}>{skillText}</i>
      </div>
      <strong>{name}</strong>
    </SkillStyled>
  );
};

export default Skill;
