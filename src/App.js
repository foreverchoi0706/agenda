import React, { createContext, useReducer } from "react";
import styled from "styled-components";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const AppStyled = styled.div`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  & ul {
    //모든 ul태그에 적용
    list-style: none;
    margin: 0px;
  }
`;
export const context = createContext();

const App = ({ heightState }) => {
  const reducer = (state, action) => {
    return state;
  };

  const [state, dispatch] = useReducer(reducer, heightState);

  return (
    <context.Provider value={{ state, dispatch }}>
      <AppStyled>
        <Navigation />
        <Header />
        <Main />
        <Footer />
      </AppStyled>
    </context.Provider>
  );
};

export default App;
