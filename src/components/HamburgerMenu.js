import { useRef } from "react";
import styled from "styled-components";

const HamburgerMenuStyled = styled.ul`
  list-style: none;
  width: 45px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 0px 0px 0px 20px;
  .HamburgerMenu-line {
    background-color: black;
    width: inherit;
    height: 7.5px;
  }
  &:hover {
    //호버되면
    li:nth-child(even) {
      //짝수번째에 애니메이션 적용
      animation: hover-anime 0.5s forwards;
    }
  }
  .clicked-0 {
    transform: translateY(12.5px);
    transition-duration: 1s;
  }
  .clicked-1 {
    transition-delay: 1s;
    transition-duration: 1s;
    transform: rotate(140deg);
  }
  .clicked-2 {
    transform: translateY(-12.5px);
    transition-duration: 1s;
  }
  .crossed{
    transition-delay: 1s;
    transition-duration: 1s;
    transform: rotate(140deg);
  }

  @keyframes hover-anime {
    to {
      width: 40px;
    }
  }
`;

const HamburgerMenu = () => {
  const refHamberMenu = useRef(null);

  const handleClick = () => {
    console.dir(refHamberMenu.current.children);

    refHamberMenu.current.childNodes.forEach((li, index) => {
      li.classList.add(`clicked-${index}`);
    });
  };

  return (
    <HamburgerMenuStyled onClick={handleClick} ref={refHamberMenu}>
      <li className="HamburgerMenu-line"></li>
      <li className="HamburgerMenu-line"></li>
      <li className="HamburgerMenu-line"></li>
    </HamburgerMenuStyled>
  );
};

export default HamburgerMenu;
