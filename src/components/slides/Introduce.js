import React from "react";
import styled from "styled-components";

import me from "../../imgs/me.jpg";

const IntroduceStyled = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-image: url("https://source.unsplash.com/random/1920x1080");
  background-size: cover;
  .Introduce-about-me {
    display: flex;
    img {
      width: 200px;
    }
  }

  @media (max-width: 1028px) {
    height: 100vh;
    .Introduce-about-me {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
    .Introduce-about-me {
    }
  }
`;

const App = () => {
  return (
    <IntroduceStyled>
      <h2>#Introduce</h2>
      <section>
        <h3>Q. 자기소개</h3>
        <div>
          A.개발자의 길을 결심하게 되었던 것은, 그다지 오래되지는 않았습니다.
          예전부터 무언가를 창작하는 것을 좋아하여 초중학교 때는 항상 수업
          시간에 만화를 그려 선생님께 혼나기도 했고, 대학교 때는 동영상편집에
          재미를 붙여 해외여행을 다녀와 찍었던 사진으로 여행 영상을 만들기도
          했습니다. 전역 후 복학하여 적성에 맞지 않은 과와 미래에 대한 불안에
          방황하고 있었을 때, 개발자라는 직업을 만났습니다. 무언가를 고민하고,
          만들고, 기여하여 사람들의 삶에 도움을 준다는 개발자라는 직업은 큰
          매력으로 다가왔습니다. 프로그래밍을 공부한 9개월이 제 인생에서 가장
          열심히 했던 때였던 것 같습니다. 그 후, 제 전공을 살려 일본에서 IT관련
          업무를 1년간 마쳤고, 이제 한국으로 돌아와 제 2의 개발자의 길을
          시작해보려 합니다.
        </div>
      </section>

      <section>
        <h3>Q. 왜 프론트엔드 개발자인가?</h3>
        <div>
          A.처음 HTML 공부를 할 때 태그를 통해 웹 사이트간 이동을 할 때는 엄청난
          충격을 받았습니 다. 웹은 거대한 바다이고 웹 개발자라는 것은 거대한
          바다 어느 곳에 자신만의 섬을 만드는 것이라 생각합니다. 태그를 통해
          섬(사이트)에 닻을 내려 정박하고 컨텐츠를 소비하는 것이죠. 그렇게
          상상을 하고 나니 웹에 너무나도 큰 매력을 느꼈고, 나만의 웹사이트를
          만들어 보고 싶다 는 생각까지 하였습니다. 특히 유저와 상호작용을 하는
          프론트엔드 개발은 다른 길을 생각하지도 않고 몰두하게 만들었습니다.
          그런 저에게 그로테스큐 스튜디오의 인턴십은 협업을 경험하고, 선배님들의
          코드를 보며 현업에서 의 웹/앱의 동작 방식을 배울 수 있는 둘도 없는
          기회라고 생각합니다. 인턴십을 통해 배운 것을 그로테스큐 스튜디오에서
          발휘하고 더 멋지고 아름다운 섬을 만들고 싶습니다.
        </div>
      </section>

      <section>
        <h3>Q. 어떤 개발자가 되고싶은가?</h3>
        A.능동적인 개발을 주도하는 개발자가 되고 싶습니다. 여기서 제가 생각하는
        능동적인 개발이란
        <i>
          <strong>
            좋은 아이디어나 더 나은 의견이 있다면 제시하고, 흥미 로운 정보가
            있다면 공유하며 스스로의 부족함에 피드백을 받아 선순환을 일으키는
            개발입니다.
          </strong>
        </i>
        일본에서 일한 1년은 즐거운 시간이었지만, 그 과정에서의 업무구조에서는
        한계를 느꼈습니다. 위 로부터의 지시가 없다면 업무를 할 수 없는 구조였고
        결과적으로 스스로의 발전가능성이 보이지 않았기에 스스로에게 [어떤 개발이
        하고 싶은가?] 질문을 던졌을 때 항상 위와 같이 생각해 왔습 니다. 코딩을
        하면서 [이런 방법보다는 더 좋은 방법이 있지 않을까?]라는 생각을 하곤
        합니다. 또한 [이런 게 있었구나, 공유하고 싶어!]라는 생각 역시 하고
        있습니다. 일원이 된다면, 부족하지만 적극적으로 나서며 능 동적인 개발을
        실천하고자 계획하고 있습니다
      </section>
      <div></div>
    </IntroduceStyled>
  );
};

export default App;
