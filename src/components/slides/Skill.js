import React from "react";
import styled from "styled-components";

import html from "../../imgs/html.png";
import css from "../../imgs/css.png";
import javascript from "../../imgs/javascript.png";

import typescript from "../../imgs/typescript.png";
import react from "../../imgs/react.png";
import redux from "../../imgs/redux.png";

import sass from "../../imgs/sass.png";
import node_js from "../../imgs/node-js.png";
import github from "../../imgs/github.png";

const SkillStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Skill = ({ name }) => {
  switch (name) {
    case "html5":
      return (
        <SkillStyled>
          <img src={html} alt={name} />
          <strong>{name}</strong>
        </SkillStyled>
      );
    case "css3":
      return (
        <SkillStyled>
          <img src={css} alt={name} />
          <strong>{name}</strong>
        </SkillStyled>
      );
    case "javascript":
      return (
        <SkillStyled>
          <img src={javascript} alt={name} />
          <strong>{name}</strong>
        </SkillStyled>
      );
    case "typescript":
      return (
        <SkillStyled>
          <img src={typescript} alt={name} />
          <strong>{name}</strong>
        </SkillStyled>
      );
    case "react":
      return (
        <SkillStyled>
          <img src={react} alt={name} />
          <strong>{name}</strong>
        </SkillStyled>
      );
    case "redux":
      return (
        <SkillStyled>
          <img src={redux} alt={name} />
          <strong>{name}</strong>
        </SkillStyled>
      );
    case "html5":
      return (
        <SkillStyled>
          <img src={html} alt={name} />
          <strong>{name}</strong>
        </SkillStyled>
      );
    case "sass":
      return (
        <SkillStyled>
          <img src={sass} alt={name} />
          <strong>{name}</strong>
        </SkillStyled>
      );
    case "node_js":
      return (
        <SkillStyled>
          <img src={node_js} alt={name} />
          <strong>{name}</strong>
        </SkillStyled>
      );
    case "github":
      return (
        <SkillStyled>
          <img src={github} alt={name} />
          <strong>{name}</strong>
        </SkillStyled>
      );
  }
};

export default Skill;
