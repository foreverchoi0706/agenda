import styled from "styled-components";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const AppStyled = styled.div`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  & ul {//모든 ul태그에 적용 
    list-style: none;
    margin: 0px;
  }
  & a { //모든 a태그 적용 
    color: white; 
  }
`;

const App = () => {
  return (
    <AppStyled>
      <Navigation />
      <Header />
      <Main />
      <Footer />
    </AppStyled>
  );
};

export default App;
