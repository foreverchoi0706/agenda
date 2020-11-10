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

  .Router-close {
    position: absolute;
    font-size: 2rem;
    top: 20px;
    right: 30px;
    border: none;
    color: red;
    font-weight: bold;
    cursor: pointer;
    background: none;
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
    .Router-close {
      font-size: 1rem;
      top: 10px;
      right: 10px;
    }
  }
`;

const Routers = ({ isClicked, handleClick }) => {
  if (isClicked) {
    return (
      <RoutersStyled>
        <a href="#root">#Top</a>
        <a href="#intro">#Intro</a>
        <a href="#skills">#SKILL STACKS</a>
        <a href="#projects">#Projects</a>
        <a href="#contact">#CONTACT ME?</a>
        <button className="Router-close" onClick={handleClick}>
          X
        </button>
      </RoutersStyled>
    );
  } else {
    return null;
  }
};

export default Routers;
