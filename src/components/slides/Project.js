import React from "react";
import Skill from "./Skill";

import styled from "styled-components";

const ProjectStyled = styled.div`
  width: 80vw;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 5px;
  position: absolute;
  top: 10vh;
  left: 310vw;
  animation: project-appear 0.5s linear;
  background: linear-gradient(-45deg, var(--first-theme-color) 50%, white 50%);
  h2 {
    height: 30px;
    margin: 10px;
  }
  .Project-container {
    height: calc(100% - 68px);
    display: flex;
    align-items: center;
    padding: 10px;
    gap: 20px;
    .Project-subject {
      height: 100%;
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 10px;
      .Project-detail {
        img {
          width: 100%;
          height: 50%;
        }
        strong {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }

      nav {
        display: flex;
        justify-content: space-between;
        border-top: 1px solid gray;
        padding: 5px;
        a {
          color: black;
          font-weight: bold;
        }
      }
    }
    .Project-skills {
      width: 50%;
      display: grid;
      justify-content: center;
      align-content: center;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: auto;
    }

    @keyframes project-appear {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }

  @media (max-width: 1028px) {
    font-size: 0.7rem;
    top: 310vh;
    left: 10vw;
    .Project-container {
      flex-direction: column;
      align-items: center;
      .Project-subject {
        width: 100%;
        height: 50%;
        img {
          width: 50%;
          height: 100%;
        }
      }
    }
  }
`;

const tempEvent = () => {};

const Project = ({ name, src, handleClick, skills, description }) => {
  return (
    <ProjectStyled onClick={handleClick}>
      <h2>{name}</h2>
      <hr />
      <div className="Project-container">
        <div className="Project-subject">
          <div className="Project-detail">
            <img src={src} alt={name} />
            <strong>{description}</strong>
          </div>
          <nav>
            <a href="">👉사이트 바로가기👈</a>
            <a href="">👉Github바로가기👈</a>
          </nav>
        </div>

        <div className="Project-skills">
          {skills.map((skill, index) => (
            <Skill
              key={index}
              name={skill}
              handleMouseOver={tempEvent}
              handleMouseOut={tempEvent}
            />
          ))}
        </div>
      </div>
    </ProjectStyled>
  );
};

export default Project;
