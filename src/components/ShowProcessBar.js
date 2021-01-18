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
      border-radius : 5px;  
      width: 50px;
      height: 10px;
    }
  }
`;

const slideCounts = [0, -1, -2, -3, -4, -5];

const ShowProgressBar = ({ slidePosition }) => {
  return (
    <ShowProgressBarStyled>
      <ul className="ShowProgressBar-container">
        {slideCounts.map((slideCounts) => (
          <li
            className="ShowProgressBar-bar"
            style={{
              backgroundColor:
                slidePosition === slideCounts
                  ? "var(--first-theme-color)"
                  : "var(--second-theme-color)",
            }}
          />
        ))}
      </ul>
    </ShowProgressBarStyled>
  );
};

export default memo(ShowProgressBar);
