import styled from "styled-components";
import HamburgerMenu from "./HamburgerMenu";

const NavigationStyled = styled.nav`
  position: absolute;
  background-color: bisque;
  width: 100vw;
  height: 50px;

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
  return (
    <NavigationStyled>
      <HamburgerMenu />
      <h1 className="Navigation-logo">ForeverChoi's portfolio</h1>
    </NavigationStyled>
  );
};

export default Navigation;
