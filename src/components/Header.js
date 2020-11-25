import styled from "styled-components";

import bg from "../imgs/bg.jpg";
import Typing from "./header/Typing";

const HeaderStyled = styled.header`
  padding-top: 7.25vh;
  height: 93vh;
  display: flex;

  justify-content: center;

  text-align: center;

  .Header-bg {
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
const Header = () => {
  return (
    <HeaderStyled>
      <img src={bg} className="Header-bg"></img>
      <div className="Header-container">
        <h1 className="Header-greeting">
          전문성있는 프론트엔드 개발자를 꿈꿉니다. 향삼심을 가진 주니어 개발자
          최영원입니다.
        </h1>
        <Typing />
      </div>
    </HeaderStyled>
  );
};

export default Header;
