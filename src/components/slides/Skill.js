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
    cursor: grab;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      text-align: center;
      display: none;
      font-weight: bold;
    }
  }

  @media (max-width: 1028px) {
  }

  @media (max-width: 768px) {
    .SKill-img {
      width: 80px;
      height: 80px;
      i {
        font-size: 0.7rem;
      }
    }
  }
  @media (max-width: 384px) {
    .SKill-img {
      width: 80px;
      height: 80px;
      i {
        font-size: 0.4rem;
      }
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
        setSkillText(
          "적절한 지정자를 활용하여 스타일을 입히며, 반응형에도 대응가능합니다."
        );
        break;
      case "javascript":
        division = javascript;
        setSkillText(
          "바닐라JS를 통한 돔 조작부터 모던 JS문법까지 두루 파악하고 있으며 가장 좋아하는 언어입니다."
        );
        break;
      case "sass":
        division = sass;
        setSkillText(
          "css 전처리기인 sass에 지식이 있습니다. sass 특유의 nesting에 큰 매력을 느끼고 있습니다."
        );
        break;
      case "react":
        division = react;
        setSkillText(
          "여러 서드파티 라이브러리와 함께 사용하고 있으며 클래스 및 함수형 컴포넌트 두루 활용이 가능합니다."
        );
        break;
      case "redux":
        division = redux;
        setSkillText(
          "효율적인 상태관리에 방법에 대해 고민하고 있습니다. thunk,saga를 활용한 사이드 이펙트 핸들링에도 관심이 많습니다."
        );
        break;
      case "typescript":
        division = typescript;
        setSkillText(
          "TS의 인터페이스와 타입 추론 기능에 큰 편의성을 느끼고 있으며 공부중입니다."
        );
        break;
      case "node_js":
        division = node_js;
        setSkillText(
          "기초적인 웹 서버 구축 및 npm,yarn,webpack,babel등 관리도구,모듈번들러,트랜스파일러의 사용이 가능합니다."
        );
        break;
      case "github":
        division = github;
        setSkillText(
          "git를 통해 프로젝트를 관리하고 있으며 버전관리의 중요성을 항상 느끼고 있습니다."
        );
        break;
    }
    refDiv.current.style.backgroundImage = `url(${division})`;
  }, [name, refDiv]);

  const handleMouseOver = () => {
    refDiv.current.style.opacity = "0.8";
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
