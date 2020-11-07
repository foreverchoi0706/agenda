import styled from "styled-components";
import Skills from "./main/Skills";
import Intro from "./main/Intro";
import Presentations from "./main/Presentations";
import Contact from "./main/Contact";

const MainStyled = styled.main`
  background-color: black;
  color: white;
  margin: 0px 10vw 0px 10vw;
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
