import React, { useRef, useEffect } from "react";
import styled from "styled-components";

import mouse_white from "../../imgs/mouse_white.png";
import bg from "../../imgs/bg.jpg";

const HeaderStyled = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image : url(${bg});
  background-size : 100vw 100vh;
  background-repeat: no-repeat;

  .Header-greeting {
    margin: 0 10px 0 10px;
    text-align: center;
    color : white;
  }
  .Header-mouse {
    position: absolute;
    top: 80vh;
    animation: mouse-animation 0.5s infinite linear;
  }

  @media (max-width: 1028px) {
    .Header-greeting {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 768px) {
    .Header-greeting {
      font-size: 0.8rem;
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
      {isShow || <img className="Header-mouse" src={mouse_white} alt="mouse" />}
    </HeaderStyled>
  );
};

export default App;
