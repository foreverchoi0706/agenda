import styled from "styled-components";

import me from "../../imgs/me.jpg";

const IntroStyled = styled.section`
  .Intro-container {
    display: flex;
    .Intro-summary {
      display: flex;
      justify-content: center;
      img {
        flex-basis: 15%;
        height: 266px;
        border-radius: 5px;
        margin: 25px;
      }
      ul {
        flex-basis: 35%;
        height: 266px;
        list-style: square;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
    }

    .Intro-detail {
      flex-basis: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      b {
        font-size: 1.5rem;
      }
    }
  }
  @media (max-width: 1536px) {
    .Intro-container {
      flex-direction: column;
      align-items: center;
      .Intro-summary {
        ul {
          flex-basis: 50%;
        }
      }
    }
  }
  @media (max-width: 768px) {
    .Intro-container {
      .Intro-summary {
        flex-direction: column;
        align-items: center;
      }
    }
  }
`;

const Intro = () => {
  return (
    <IntroStyled>
      <h2>#Intro</h2>
      <div className="Intro-container">
        <div className="Intro-summary">
          <img src={me} alt="me" />
          <ul>
            <li>한양사이버대학교 컴퓨터공학과 재학(졸업예정)</li>
            <li>JSL 인재개발원 하이브라드 소프트웨어 전문가 과정 35기 수료</li>
            <li>정보처리산업기사</li>
            <li>MICROSOFT MOS MASTER</li>
          </ul>
        </div>
        <div className="Intro-detail">
          <p>
            <b>개</b>발자의 길을 결심하게 되었던 것은, 그다지 오래되지는
            않았습니다. 예전부터 무언가를 창작하는 것을 좋아하여 초중학교 때는
            항상 수업 시간에 만화를 그려 선생님께 혼나기도 했고, 대학교 때는
            동영상편집에 재미를 붙여 해외여행을 다녀와 찍었던 사진으로 여행
            영상을 만들기도 했습니다.
          </p>
          <p>
            <b>프</b>런트엔드 개발은 사람이 하루 중 가장 많이 사용하는 '웹'의
            앞부분을 다루는 중요한 직군입니다. 그리고 제 적성과 흥미에 가장 잘
            맞는 부분이기도 합니다. 특히 제 결과물을 다른 사람들에게 보여줄 때
            '잘 만들었다!','신기하다!' 등의 칭찬을 들었을 때는 정말 큰 기쁨을
            느낍니다.
          </p>
          <p>
            <b>저</b>는 4년을 전공한 전공자에 비해 기본적인 지식이나 기술이
            부족할 수도 있습니다. 하지만 저는 제가 무엇이 부족한지 알며, 어떻게
            채워나가야 하는지 알고 있습니다. 그리고 노력하고 공부하는 향상심
            역시 놓지 않을 것입니다.
          </p>
        </div>
      </div>
    </IntroStyled>
  );
};

export default Intro;
