import React, { useEffect, useRef } from "react";
import Header from "./slides/Header";
import Introduce from "./slides/Introduce";
import Skills from "./slides/Skills";
import Projects from "./slides/Projects";
import Contact from "./slides/Contact";

import styled from "styled-components";

const SlideContainerStyled = styled.ul`
  width: 600vw;
  height: 100vh;
  display: flex;
  & > li {
    width: 100vw;
    h2 {
      text-align: center;
    }
  }
  @media (max-width: 1028px) {
    width: 100vw;
    height: auto;
    flex-direction: column;
  }
`;

const SlideContainer = ({ isShow, slidePosition }) => {
  const refSlideContainer = useRef(null);

  useEffect(() => {
    refSlideContainer.current.style.transform = `translateX(${
      slidePosition * 100
    }vw)`;
    refSlideContainer.current.style.transitionProperty = "transform";
    refSlideContainer.current.style.transitionDuration = "1s";
  }, [slidePosition]);

  return (
    <SlideContainerStyled ref={refSlideContainer}>
      <Header isShow={isShow} />
      <Introduce />
      <Skills />
      <Projects />
      <Contact />
    </SlideContainerStyled>
  );
};

export default SlideContainer;
