import React from "react";
import Header from "./slides/Header";
import Introduce from "./slides/Introduce";
import styled from "styled-components";

const SlideContainerStyled = styled.ul`
  width: 500vw;
  height: 100vh;
  display : flex;
  & > li{
    width : 100vw;
  }
`;

const App = () => {
  return (
    <SlideContainerStyled>
      <Header />
      <Introduce />
    </SlideContainerStyled>
  );
};

export default App;
