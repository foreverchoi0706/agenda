import { useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import { context } from "../App";

import Skills from "./main/Skills";
import Intro from "./main/Intro";
import Projects from "./main/Projects";
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
    refMain.current.childNodes.forEach((section) => {
      // console.dir(section);
    });
  }, [refMain]);

  return (
    <MainStyled ref={refMain}>
      <Intro />
      <hr/>
      <Skills />
      <hr/>
      <Projects />
      <hr/>
      <Contact />
    </MainStyled>
  );
};

export default Main;
