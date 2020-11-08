import { useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import { context } from "../App";

import Skills from "./main/Skills";
import Intro from "./main/Intro";
import Presentations from "./main/Presentations";
import Contact from "./main/Contact";

const MainStyled = styled.main`
  background-color: black;
  color: white;
  margin: 0px 10vw 0px 10vw; //양사이드 공백
  & > section {
    padding: 50px; //모든 세션에 패딩값
  }

  @media (max-width: 768px) {
    margin: 0px;
    & > section {
      padding: 25px; //모든 세션에 패딩값
    }
  }
`;

const Main = () => {
  const refMain = useRef(null);

  const { state, dispatch } = useContext(context);

  useEffect(() => {
    console.log(state);
    console.log(dispatch);
    refMain.current.childNodes.forEach((section) => {
      console.dir(section);
    });
  }, [refMain,context]);

  return (
    <MainStyled ref={refMain}>
      <Intro />
      <hr/>
      <Skills />
      <hr/>
      <Presentations />
      <hr/>
      <Contact />
    </MainStyled>
  );
};

export default Main;
