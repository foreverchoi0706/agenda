import React, { useEffect, useState } from "react";
import SlideContainerStyled from "./SlideContainer";
import SlideBtn from "./SlideBtn";
import ShowProcessBar from "./ShowProcessBar";
import styled from "styled-components";

const AppStyled = styled.main`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  overflow-x: hidden;
  position: relative;
  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li > section {
      //모든 섹션에 좌우패딩값
      padding: 0px 10vw 0px 10vw;
    }
  }
`;

const App = () => {
  const [isShow, setIsShow] = useState(true);

  const [slidePosition, setSlidePotion] = useState(0);

  useEffect(() => {
    if (window.innerWidth < 1028) {
      setIsShow(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1028) {
        //1028px이하면 가로모드
        setIsShow(true);
      } else {
        //1028px이하면 세로모드
        setIsShow(false);
        setSlidePotion(0);
      }
    });
  }, [window]);

  const slideLeft = () => {
    setSlidePotion(slidePosition + 1);
  };

  const slideRight = () => {
    setSlidePotion(slidePosition - 1);
  };

  return (
    <AppStyled>
      <SlideContainerStyled isShow={isShow} slidePosition={slidePosition} />
      {isShow && <ShowProcessBar slidePosition={slidePosition} />}
      <SlideBtn
        clickSlideBtn={slideLeft}
        division={"LEFT"}
        slidePosition={slidePosition}
      />
      <SlideBtn
        clickSlideBtn={slideRight}
        division={"RIGHT"}
        slidePosition={slidePosition}
      />
    </AppStyled>
  );
};

export default App;
