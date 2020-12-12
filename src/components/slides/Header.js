import React, { useRef, useEffect } from "react";
import styled from "styled-components";

import mouse from "../../imgs/mouse.png";

const HeaderStyled = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url("https://source.unsplash.com/random/1920x1080");
  background-size: cover;
  .Header-greeting {
    margin: 0 10px 0 10px;
    text-align: center;
  }
  .Header-mouse {
    position: absolute;
    bottom: 405vh;
    animation: mouse-animation 0.5s infinite linear;
  }

  @media (max-width: 1028px) {
    height: 100vh;
    .Header-greeting {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    .Header-greeting {
      font-size: 1rem;
    }
  }

  @keyframes mouse-animation {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(10px);
    }
  }
`;

const skills = ["HTML5", "CSS3", "JAVASCRIPT", "REACT", "REDUX"];

const App = ({ isShow }) => {
  const refH2 = useRef(null);

  useEffect(() => {});

  return (
    <HeaderStyled>
      <h1 className="Header-greeting">
        전문성있는 프론트엔드 개발자를 꿈꿉니다. 향삼심을 가진 지원자
        최영원입니다.
      </h1>
      <h2 className="Header-skills" ref={refH2} />
      {isShow || <img className="Header-mouse" src={mouse} alt="mouse" />}
    </HeaderStyled>
  );
};

export default App;
