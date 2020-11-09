import styled from "styled-components";

import bg from "../imgs/bg.jpg";
import Skills from "./header/Skilsl";

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
      font-size: 3.5rem;
      padding-right: 5px;
    }
    .Header-bar {
      background-color: black;
      width: 3px;
      height: 63px;
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
      <img src={bg}></img>
      <div className="Header-container">
        <h1 className="Header-greeting">
          전문성있는 프론트엔드 개발자를 꿈꿉니다. 향삼심을 가진 주니어 개발자
          최영원입니다.
        </h1>
        <b className="Header-skills">#<Skills/></b>
        <span className="Header-bar"></span>
      </div>
    </HeaderStyled>
  );
};

export default Header;
