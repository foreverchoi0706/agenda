import React, { useState } from "react";
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
  }
`;

const App = () => {
  const [slidePosition, setSlidePotion] = useState(0);

  const slideLeft = () => {
    setSlidePotion(slidePosition + 1);
  };

  const slideRight = () => {
    setSlidePotion(slidePosition - 1);
  };

  return (
    <AppStyled>
      <SlideContainerStyled slidePosition={slidePosition} />
      <ShowProcessBar slidePosition={slidePosition} />
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
