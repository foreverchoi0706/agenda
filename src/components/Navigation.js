import { useState } from "react";
import styled from "styled-components";
import HamburgerMenu from "./navigation/HamburgerMenu";
import Routers from "./navigation/Routers";

const NavigationStyled = styled.nav`
  position: fixed; //고정
  background-color: black;
  width: 100%;
  color: white;
  z-index: 999; //제일앞으로

  display: flex;
  justify-content: space-between;
  align-items: center;

  .Navigation-logo {
    padding-right: 20px;
  }
  @media (max-width: 400px) {
    font-size: 0.75rem;
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
