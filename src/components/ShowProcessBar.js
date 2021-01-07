import React, { memo } from "react";
import styled from "styled-components";

const ShowProgressBarStyled = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  position: fixed;
  bottom: 30px;

  .ShowProgressBar-container {
    display: flex;
    gap: 25px;
    .ShowProgressBar-bar {
      width: 50px;
      height: 10px;
      border-radius: 5px;
    }
  }
`;

const ShowProgressBar = ({ slidePosition }) => {
  return (
    <ShowProgressBarStyled>
      <ul className="ShowProgressBar-container">
        <li
          className="ShowProgressBar-bar"
          style={{
            backgroundColor:
              slidePosition === 0 ? "rgba(154, 45, 55, 0.8)" : "wheat",
          }}
        />
        <li
          className="ShowProgressBar-bar"
          style={{
            backgroundColor:
              slidePosition === -1
                ? "var(--first-theme-color)"
                : "var(--second-theme-color)",
          }}
        />
        <li
          className="ShowProgressBar-bar"
          style={{
            backgroundColor:
              slidePosition === -2
                ? "var(--first-theme-color)"
                : "var(--second-theme-color)",
          }}
        />
        <li
          className="ShowProgressBar-bar"
          style={{
            backgroundColor:
              slidePosition === -3
                ? "var(--first-theme-color)"
                : "var(--second-theme-color)",
          }}
        />
        <li
          className="ShowProgressBar-bar"
          style={{
            backgroundColor:
              slidePosition === -4
                ? "var(--first-theme-color)"
                : "var(--second-theme-color)",
          }}
        />
        <li
          className="ShowProgressBar-bar"
          style={{
            backgroundColor:
              slidePosition === -5
                ? "var(--first-theme-color)"
                : "var(--second-theme-color)",
          }}
        />
      </ul>
    </ShowProgressBarStyled>
  );
};

export default memo(ShowProgressBar);
