import React from "react";
import Skill from "./Skill";

import styled from "styled-components";

const ProjectStyled = styled.div`
  font-weight: bold;
  width: 800px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 5px;
  position: absolute;
  top: 10vh;
  left: calc(350vw - 400px);
  animation: project-appear 0.5s linear;
  background: linear-gradient(-45deg, var(--first-theme-color) 50%, white 50%);
  h2 {
    height: 30px;
    margin: 10px;
  }
  .Project-container {
    height: calc(100% - 68px);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    .Project-subject {
      display: flex;
      flex-direction: column;
      gap: 10px;
      .Project-detail {
        img {
          width: 100%;
          height: 50%;
        }
      }
      nav {
        display: flex;
        justify-content: space-between;
        border-top: 1px solid gray;
        padding: 5px;
        a {
          color: black;
        }
      }
    }
    .Project-skills {
      width: 100%;
      border: 1px solid black;
      border-radius: 5px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: auto;
      justify-content: center;
      align-content: center;
      span {
        text-align: center;
      }
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
    width: 80vw;
    font-size: 0.7rem;
    top: 330vh;
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

const Project = ({
  name,
  src,
  handleClick,
  skills,
  description,
  link,
  git,
}) => {
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
            {name !== "For you" ? (
              <a href={link} target="blank">
                👉사이트 바로가기👈
              </a>
            ) : (
              <a href={link} target="blank">
                👉소개영상 바로가기👈
              </a>
            )}

            {git && (
              <a href={git} target="blank">
                👉Github바로가기👈
              </a>
            )}
          </nav>
        </div>

        <div className="Project-skills">
          {skills.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>
      </div>
    </ProjectStyled>
  );
};

export default Project;
