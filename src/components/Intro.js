import React, { memo } from "react";
import { Typography } from "@material-ui/core";
import { Chat } from "@material-ui/icons";

import "../styles/Intro.scss";

const Intro = () => {
  return (
    <div id="Intro" className="Intro">
      <Typography variant="h5" gutterBottom>
        01. 인트로 <Chat />
      </Typography>
      <div className="Intro-contents">
        <article>
          <h3>😎자기소개😎</h3>
          <Typography variant="overline" gutterBottom>
            개발자의 길을 결심하게 되었던 것은, 그다지 오래되지는 않았습니다.
            예전부터 무언가를 창작하는 것을 좋아하여 초중학교 때는 만화를 그려
            친구들에게 보여주기도 했고, 대학교 때는 동영상편집에 재미를 붙여
            해외여행을 다녀와 찍었던 사진으로 여행 영상을 만들기도 했습니다. 전역
            후 복학하여 미래에 대한 불안에 방황하고 있었을 때,개발자라는 직업을
            만났습니다.
          <strong>
              무언가를 고민하고, 만들고, 이바지하여 사람들의 삶에 도움을 준다는
              개발자라는 직업은 저에게 큰 매력으로 다가왔습니다.
          </strong>
          개발자의 길을 결심하고 프로그래밍을 공부한 9개월이 제 인생에서 가장
          열심히 했던 때였던 것 같습니다. 그 후, 제 전공을 살려 일본에서 IT
          인턴을 1년간 마쳤고, 이제 한국으로 돌아와 제2의 개발자의 길을
          시작해보려 합니다.
          </Typography>
        </article>
        <article>
          <h3>🤔왜 웹 개발자인가?🤔</h3>
          <Typography variant="overline" gutterBottom>
            처음 개발 공부로써 HTML을 접했을 때 엄청난 충격을 받았습니다. 지금까지
            무심코 보아왔었던 웹이 이런 식으로 보여지고 있구나,
          <strong>
              웹은 거대한 바다이고 웹 개발자라는 것은 거대한 바다 어느 곳에
              자신만의 섬을 만드는 직업이구나.
          </strong>
          라고 느꼈습니다. 그렇게 상상을 하고 나니 웹에 너무나도 큰 매력을
          느꼈고, 나만의 웹 어플리케이션을 만들어 보고 싶다는 생각까지
          하였습니다. 특히 사용자와의 상호작용을 다루는 프론트엔드 개발은 다른
          길을 생각하지도 않고 저를 몰두하게 했습니다.
          </Typography>
        </article>
        <article>
          <h3>😤어떤 개발자를 목표로 하는지😤</h3>
          <Typography variant="overline" gutterBottom>
            능동적인 개발을 주도하는 개발자가 되고 싶습니다. 여기서 제가 생각하는
            능동적인 개발이란
          <strong>
              좋은 아이디어나 더 나은 의견이 있다면 제시하고, 흥미로운 정보가
              있다면 공유하며 스스로 부족함에 피드백을 받아 선순환을 일으키는
              개발입니다.
          </strong>
          스스로에게 '어떤 개발이 하고 싶은가?' 질문을 던졌을 때 항상 위와 같이
          생각해 왔습니다. 코딩하면서 '이런 방법보다는 더 좋은 방법이 있지
          않을까?'라는 생각을 하곤 합니다. 또한 '이런 게 있었구나, 공유하고
          싶어.'라는 생각 역시 하고 있습니다.
          </Typography>
        </article>
      </div>
    </div>
  );
};

export default memo(Intro);
