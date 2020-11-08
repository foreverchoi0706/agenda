import styled from "styled-components";

import me from "../../imgs/me.jpg";

const IntroStyled = styled.section`
  .Intro-container {
    display: flex;
    flex-grow: 1;
    img {
      width: 200px;
      border-radius: 5px;
      margin : 25px;
    }
    ul {
      list-style: square;
      flex-grow: 2;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }
  @media (max-width: 768px) {
    .Intro-container {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const Intro = () => {
  return (
    <IntroStyled>
      <h1>#Intro</h1>
      <div className="Intro-container">
        <img src={me} alt="me" />
        <ul>
          <li>한양사이버대학교 컴퓨터공학과 재학(졸업예정)</li>
          <li>JSL 인재개발원 하이브라드 소프트웨어 전문가 과정 35기 수료</li>
          <li>정보처리산업기사</li>
          <li>MICROSOFT MOS MASTER</li>
        </ul>
      </div>
    </IntroStyled>
  );
};

export default Intro;
