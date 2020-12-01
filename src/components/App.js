import React from "react";
import SlideContainerStyled from "./SlideContainer";
import styled from "styled-components";

const AppStyled = styled.main`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

const App = () => {
  return (
    <AppStyled>
      <SlideContainerStyled />
      <ShowProcessBar />
    </AppStyled>
  );
};

export default App;
