import { useState, useEffect } from "react";
import styled from "styled-components";

import bg from "../imgs/bg.jpg";

const HeaderStyled = styled.header`
  padding-top: 66.813px;
  height: 93.1vh;
  display: flex;

  justify-content: center;

  text-align: center;

  img {
    width: 100%;
  }

  .Header-container {
    position: absolute;
    color: black;
    top: 30vh;
    .Header-greeting {
      opacity: 0;
      margin: 0px 20px 0px 20px;
      animation: appear-anime 2s forwards;
    }
    .Header-skills {
      opacity: 0;
      animation: appear-anime 2s forwards 1.5s;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }

  @keyframes appear-anime {
    to {
      opacity: 1;
      transform: translateY(-2.5vh);
    }
  }
`;

const getSkills = ["HTML5", "CSS3", "REACT", "JS"][Symbol.iterator];

const Header = () => {
  const [skill, setSkill] = useState("");

  useEffect(() => {});

  return (
    <HeaderStyled>
      <img src={bg}></img>
      <div className="Header-container">
        <h1 className="Header-greeting">
          전문성있는 프론트엔드 개발자를 꿈꿉니다. 향삼심을 가진 주니어 개발자
          최영원입니다.
        </h1>
        <h2 className="Header-skills">저는 HTML이 가능합니다.</h2>
      </div>
    </HeaderStyled>
  );
};

export default Header;
