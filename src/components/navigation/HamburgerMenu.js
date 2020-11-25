import { useRef, useEffect } from "react";
import styled from "styled-components";

const HamburgerMenuStyled = styled.ul`
  z-index: 999;
  list-style: none;
  width: 45px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 0px;
  .HamburgerMenu-line {
    background-color: white;
    width: inherit;
    height: 7.5px;
  }
  &:hover {
    //호버되면
    li:nth-child(even) {
      //짝수번째에 애니메이션 적용
      animation: menu-hover-anime 0.5s forwards;
    }
  }
  .clicked-0 {
    background-color: black;
    transform: translateY(10px);
    transition-duration: 0.5s;
    transition-delay: 0.5s;
  }

  .clicked-1 {
    opacity: 0;
    transition-property: opacity;
    transition-duration: 0.5s;
  }

  .clicked-2 {
    background-color: black;
    transform: translateY(-10px);
    transition-duration: 0.5s;
    transition-delay:0.5s;
  }

  .crossed-0 {
    transform: rotate(35deg);
    transform-origin: left;
    transition-property: background-color, transform;
    transition-delay: 1s;
  }

  .crossed-2 {
    transform: rotate(-35deg);
    transform-origin: left;
    transition-property: background-color, transform;
    transition-delay: 1s;
  }

  @keyframes menu-hover-anime {
    to {
      width: 35px;
    }
  }
  @media (max-width: 768px) {
    padding-left: 20px;
  }
`;

const HamburgerMenu = ({ handleClick, isClicked }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (isClicked) {
      ref.current.childNodes.forEach((bar, index) => {
        bar.classList.add(`clicked-${index}`);
        bar.classList.add(`crossed-${index}`);
      });
    } else {
      ref.current.childNodes.forEach((bar, index) => {
        bar.classList.remove(`clicked-${index}`);
        bar.classList.remove(`crossed-${index}`);
      });
    }
  });

  return (
    <HamburgerMenuStyled onClick={handleClick} ref={ref}>
      <li className="HamburgerMenu-line"></li>
      <li className="HamburgerMenu-line"></li>
      <li className="HamburgerMenu-line"></li>
    </HamburgerMenuStyled>
  );
};

export default HamburgerMenu;
