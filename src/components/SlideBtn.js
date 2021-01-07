import React, { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const SlideBtnStyled = styled.div`
  position: fixed;
  top: calc(50vh - 50px);
  width: 100px;
  height: 100px;
  background-color: var(--first-theme-color);
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: var(--second-theme-color);;
  }

  @media (max-width: 1028px) {
    display: none;
  }
`;

const LEFT = "LEFT";
const RIGHT = "RIGHT";

const SlideBtn = ({ clickSlideBtn, division, slidePosition }) => {
  if (division === LEFT) {
    return (
      <>
        {slidePosition !== 0 ? (
          <SlideBtnStyled
            onClick={clickSlideBtn}
            style={{ left: "0", borderRadius: "0 50% 50% 0" }}
          >
            <FontAwesomeIcon icon={faArrowLeft} size={"2x"} />
          </SlideBtnStyled>
        ) : null}
      </>
    );
  } else if (division === RIGHT) {
    return (
      <>
        {slidePosition !== -5 ? (
          <SlideBtnStyled
            onClick={clickSlideBtn}
            style={{ right: "0", borderRadius: "50% 0  0 50%" }}
          >
            <FontAwesomeIcon icon={faArrowRight} size={"2x"} />
          </SlideBtnStyled>
        ) : null}
      </>
    );
  }
};

export default memo(SlideBtn);
