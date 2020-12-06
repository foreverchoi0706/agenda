import React, { useEffect, useRef } from "react";
import Header from "./slides/Header";
import Introduce from "./slides/Introduce";
import Projects from "./slides/Projects";
import Contact from "./slides/Contact";
import FooterStyled from "./slides/Footer";

import styled from "styled-components";

const SlideContainerStyled = styled.ul`
  width: 500vw;
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

const SlideContainer = ({ slidePosition }) => {
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
      <Header />
      <Introduce />
      <Projects />
      <Contact />
      <FooterStyled />
    </SlideContainerStyled>
  );
};

export default SlideContainer;
