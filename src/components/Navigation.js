import { useState } from "react";
import styled from "styled-components";
import HamburgerMenu from "./navigation/HamburgerMenu";
import Routers from "./navigation/Routers";

const NavigationStyled = styled.nav`
  position: fixed; //고정
  background-color: black;
  width: 80vw;
  color: white;
  z-index: 999; //제일앞으로
  padding: 0vw 10vw 0vw 10vw; //양사이드 공백
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 400px) {
    font-size: 0.75rem;
  }
  @media (max-width: 768px) {
    padding: 0vw 0vw 0vw 0vw; //양사이드 공백 없애고
    width: 100%; //넓이 100%으로
    .Navigation-logo {
      padding-right: 20px; //우공백
    }
  }
`;

const Navigation = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <NavigationStyled>
      <HamburgerMenu handleClick={handleClick} />
      <h1 className="Navigation-logo">
        <a href="/portfolio">ForeverChoi's portfolio</a>
      </h1>
      <Routers isClicked={isClicked} handleClick={handleClick} />
    </NavigationStyled>
  );
};

export default Navigation;
