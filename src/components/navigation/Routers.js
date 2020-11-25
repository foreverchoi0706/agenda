import styled from "styled-components";

const RoutersStyled = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  width: 100%;
  height: 200px;
  top: 0px;
  right: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  a {
    font-size: 1.5rem;
    color: black;
  }

  @media (max-width: 768px) {
    height: 150px;
    a {
      font-size: 1rem;
    }
    .Router-close {
      font-size: 1.5rem;
      top: 15px;
      right: 20px;
    }
  }
  @media (max-width: 512px) {
    height: 100px;
    a {
      font-size: 0.7rem;
    }
  }
`;

const stopBubbling = (e) => {
  e.stopPropagation();
};

const Routers = ({ isClicked }) => {
  if (isClicked) {
    return (
      <RoutersStyled>
        <a href="#root" onClick={stopBubbling}>
          #Top
        </a>
        <a href="#intro" onClick={stopBubbling}>
          #Intro
        </a>
        <a href="#skills" onClick={stopBubbling}>
          #SKILL STACKS
        </a>
        <a href="#projects" onClick={stopBubbling}>
          #Projects
        </a>
        <a href="#contact" onClick={stopBubbling}>
          #CONTACT ME?
        </a>
      </RoutersStyled>
    );
  } else {
    return null;
  }
};

export default Routers;
