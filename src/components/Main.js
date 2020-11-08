import styled from "styled-components";
import Skills from "./main/Skills";
import Intro from "./main/Intro";
import Presentations from "./main/Presentations";
import Contact from "./main/Contact";

const MainStyled = styled.main`
  background-color: black;
  color: white;
  margin: 0px 10vw 0px 10vw;
  & > section {
    padding: 50px; //모든 세션에 패딩값
  }

  @media (max-width: 768px) {
   margin : 0px;
   & > section {
    padding: 25px; //모든 세션에 패딩값
  }
  }
`;

const Main = () => {
  return (
    <MainStyled>
      <Intro />
      <hr />
      <Skills />
      <hr />
      <Presentations />
      <hr />
      <Contact />
      <hr />
    </MainStyled>
  );
};

export default Main;
