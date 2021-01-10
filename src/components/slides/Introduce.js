import React from "react";
import styled from "styled-components";

const IntroduceStyled = styled.li`
  h2 {
    height: 3vh;
    margin: 2vh;
  }
  .Introduce-container {
    height: calc(100vh - 7vh);
    padding: 0 10vw 0 10vw;
    font-size: 1.1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    section {
      border-radius: 5px;
      border: 2px solid lightgray;
      box-shadow: 5px 5px gray;
      h3 {
        margin: 10px;
      }
      div {
        margin: 20px;
      }
    }
  }

  @media (max-width: 1028px) {
    .Introduce-container {
      font-size: 0.9rem;
      padding: 0 7vw 0 7vw;
      section {
        h3 {
          margin: 7px;
        }
        div {
          margin: 15px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .Introduce-container {
      font-size: 0.7rem;
      padding: 0 5vw 0 5vw;
      section {
        h3 {
          margin: 5px;
        }
        div {
          margin: 10px;
        }
      }
    }
  }
  @media (max-width: 384px) {
    .Introduce-container {
      font-size: 0.5rem;
      padding: 0 1vw 0 1vw;
      section {
        h3 {
          margin: 2.5px;
        }
        div {
          margin: 5px;
        }
      }
    }
  }
`;

const StrongI = ({ text }) => {
  return (
    <i>
      <strong>{text}</strong>
    </i>
  );
};

const App = () => {
  return (
    <IntroduceStyled>
      <h2>😎Introduce😎</h2>
      <div className="Introduce-container">
        <section>
          <h3>Q. 자기소개?😊</h3>
          <div>
            A.개발자의 길을 결심하게 되었던 것은, 그다지 오래되지는 않았습니다.
            예전부터 무언가를 창작하는 것을 좋아하여 초중학교 때는 항상 수업
            시간에 만화를 그려 선생님께 혼나기도 했고, 대학교 때는 동영상편집에
            재미를 붙여 해외여행을 다녀와 찍었던 사진으로 여행 영상을 만들기도
            했습니다. 전역 후 복학하여 적성에 맞지 않은 과와 미래에 대한 불안에
            방황하고 있었을 때,{" "}
            <StrongI
              text={
                "개발자라는 직업을 만났습니다. 무언가를 고민하고, 만들고, 이바지하여 사람들의 삶에 도움을 준다는 개발자라는 직업은 큰 매력으로 다가왔습니다."
              }
            />
            프로그래밍을 공부한 9개월이 제 인생에서 가장 열심히 했던 때였던 것
            같습니다. 그 후, 제 전공을 살려 일본에서 IT 관련 업무를 1년간
            마쳤고, 이제 한국으로 돌아와 제2의 개발자의 길을 시작해보려 합니다.
          </div>
        </section>

        <section>
          <h3>Q. 왜 프론트엔드 개발자인가?🤔</h3>
          <div>
            A.처음 HTML 공부를 할 때 태그를 통해 웹 사이트 간 이동을 할 때는
            엄청난 충격을 받았습니다.{" "}
            <StrongI
              text={
                "웹은 거대한 바다이고 웹 개발자라는 것은 거대한 바다 어느 곳에 자신만의 섬을 만드는 것이라 생각합니다. 태그를 통해 섬(사이트)에 닻을 내려 정박하고 콘텐츠를 소비하는 것이죠."
              }
            />
            그렇게 상상을 하고 나니 웹에 너무나도 큰 매력을 느꼈고, 나만의
            웹사이트를 만들어 보고 싶다는 생각까지 하였습니다. 특히 사용자와
            상호작용을 하는 프론트엔드 개발은 다른 길을 생각하지도 않고 저를
            몰두하게 했습니다.
          </div>
        </section>
        <section>
          <h3>Q. 어떤 개발자가 되고싶은가?😘</h3>
          <div>
            A.능동적인 개발을 주도하는 개발자가 되고 싶습니다. 여기서 제가
            생각하는 능동적인 개발이란
            <StrongI
              text={
                "좋은 아이디어나 더 나은 의견이 있다면 제시하고, 흥미로운 정보가 있다면 공유하며 스스로 부족함에 피드백을 받아 선순환을 일으키는 개발입니다. "
              }
            />
            스스로에게 '어떤 개발이 하고 싶은가?' 질문을 던졌을 때 항상 위와
            같이 생각해 왔습니다. 코딩하면서 '이런 방법보다는 더 좋은 방법이
            있지 않을까?'라는 생각을 하곤 합니다. 또한 '이런 게 있었구나,
            공유하고 싶어!'라는 생각 역시 하고 있습니다.
          </div>
        </section>
      </div>
    </IntroduceStyled>
  );
};

export default App;
