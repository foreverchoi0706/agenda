import React, { memo } from "react";
import styled from "styled-components";

const ShowProgressBarStyled = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  position: fixed;
  bottom: 50px;

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
            backgroundColor: slidePosition === 0 ? "black" : "lightgrey",
          }}
        />
        <li
          className="ShowProgressBar-bar"
          style={{
            backgroundColor: slidePosition === -1 ? "black" : "lightgrey",
          }}
        />
        <li
          className="ShowProgressBar-bar"
          style={{
            backgroundColor: slidePosition === -2 ? "black" : "lightgrey",
          }}
        />
        <li
          className="ShowProgressBar-bar"
          style={{
            backgroundColor: slidePosition === -3 ? "black" : "lightgrey",
          }}
        />
        <li
          className="ShowProgressBar-bar"
          style={{
            backgroundColor: slidePosition === -4 ? "black" : "lightgrey",
          }}
        />
      </ul>
    </ShowProgressBarStyled>
  );
};

export default memo(ShowProgressBar);
