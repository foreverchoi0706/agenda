import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

import html from "../../imgs/skills/html.png";
import css from "../../imgs/skills/css.png";
import javascript from "../../imgs/skills/javascript.png";
import typescript from "../../imgs/skills/typescript.png";
import react from "../../imgs/skills/react.png";
import redux from "../../imgs/skills/redux.png";
import express from "../../imgs/skills/express.png";
import sass from "../../imgs/skills/sass.png";
import node_js from "../../imgs/skills/node-js.png";
import nest from "../../imgs/skills/nest.png";

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
    .SKill-img {
      width: 150px;
      height: 150px;
      i {
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 768px) {
    .SKill-img {
      width: 70px;
      height: 70px;
      i {
        font-size: 0.7rem;
      }
    }
  }
  @media (max-width: 384px) {
    .SKill-img {
      width: 40px;
      height: 40px;
      i {
        font-size: 0.4rem;
      }
    }
  }
`;

const Skill = ({ name, handleMouseOver, handleMouseOut }) => {
  const [skill, setSkill] = useState({
    text: "",
    division: "",
  });

  const refDiv = useRef(null);
  const refI = useRef(null);

  useEffect(() => {
    let division;
    switch (name) {
      case "html5":
        division = html;
        setSkill({
          text:
            "기본적인 태그 및 속성을 알고 있고, 시멘틱한 태그에 대한 지식이 있습니다.",
          division: "basedSkillsText",
        });
        break;
      case "css3":
        division = css;
        setSkill({
          text:
            "적절한 지정자를 활용하여 스타일을 입히며, 반응형에도 대응가능합니다.",
          division: "basedSkillsText",
        });
        break;
      case "javascript":
        division = javascript;
        setSkill({
          text:
            "바닐라JS를 통한 돔 조작부터 모던 JS문법까지 두루 파악하고 있으며 가장 좋아하는 언어입니다.",
          division: "basedSkillsText",
        });
        break;
      case "sass":
        division = sass;
        setSkill({
          text:
            "css 전처리기인 sass에 지식이 있습니다. sass 특유의 nesting에 큰 매력을 느끼고 있습니다.",
          division: "etcSkillsText",
        });
        break;
      case "react":
        division = react;
        setSkill({
          text:
            "여러 서드파티 라이브러리와 함께 사용하고 있으며 클래스 및 함수형 컴포넌트 두루 활용이 가능합니다.",
          division: "frontEndSkillsText",
        });
        break;
      case "redux":
        division = redux;
        setSkill({
          text:
            "효율적인 상태관리에 방법에 대해 고민하고 있습니다. thunk,saga를 활용한 사이드 이펙트 핸들링에도 관심이 많습니다.",
          division: "frontEndSkillsText",
        });
        break;
      case "typescript":
        division = typescript;
        setSkill({
          text:
            "TS의 인터페이스와 타입 추론 기능에 큰 편의성을 느끼고 있으며 공부중입니다.",
          division: "etcSkillsText",
        });
        break;
      case "node_js":
        division = node_js;
        setSkill({
          text:
            "기초적인 웹 서버 구축 및 npm,yarn,webpack,babel등 관리도구,모듈번들러,트랜스파일러의 사용이 가능합니다.",
          division: "etcSkillsText",
        });
        break;
      case "express":
        division = express;
        setSkill({
          text:
            "node환경 대표 웹 프레임워크인 express를 통해 간단한 웹 API를 작성할 수 있습니다.",
          division: "backEndSkillsText",
        });
        break;
      case "nest":
        division = nest;
        setSkill({
          text:
            "nest의 cli기반 코딩과 데코레이션 등에 큰 흥미를 느끼고 공부 중입니다.",
          division: "backEndSkillsText",
        });
        break;
    }
    refDiv.current.style.backgroundImage = `url(${division})`;
  }, [name, refDiv]);

  return (
    <SkillStyled>
      <div
        ref={refDiv}
        className="SKill-img"
        onMouseOver={() => handleMouseOver(skill.text, skill.division)}
        onMouseOut={() => handleMouseOut(skill.division)}
      >
        <i ref={refI}>{skill.text}</i>
      </div>
      <strong>{name}</strong>
    </SkillStyled>
  );
};

export default Skill;
