import React from "react";
import styled from "styled-components";

import challenge_Day01 from "../../imgs/publishing/challenge_Day01.png";
import challenge_Day02 from "../../imgs/publishing/challenge_Day02.png";
import challenge_Day03 from "../../imgs/publishing/challenge_Day03.png";
import challenge_Day04 from "../../imgs/publishing/challenge_Day04.png";
import challenge_Day05 from "../../imgs/publishing/challenge_Day05.png";
import challenge_Day06 from "../../imgs/publishing/challenge_Day06.png";
import challenge_Day07 from "../../imgs/publishing/challenge_Day07.png";
import challenge_Day09 from "../../imgs/publishing/challenge_Day09.png";

import horror from "../../imgs/publishing/horror.png";
import paintBox from "../../imgs/publishing/paintBox.png";

const PublishingStyle = styled.li`
  .Publishing-container {
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    h2 {
      grid-column: 2/3;
      grid-row: 2/3;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img {
      width: 33.333vw;
      height: 33.333vh;
    }
  }
  @media (max-width: 1028px) {
    .Publishing-container {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 10% repeat(4, 22.5%);
      h2 {
        grid-column: 1/-1;
        grid-row: 1/1;
      }
      img {
        width: 50vw;
        height: 100%;
      }
    }
  }
`;
const urlList = [
  {
    name: "Publishing01",
    href: "challenge_Day01",
    src: horror,
  },
  {
    name: "Publishing02",
    href: "challenge_Day02.html",
    src: paintBox,
  },
  {
    name: "Publishing03",
    href: "challenge_Day03.html",
    src: challenge_Day03,
  },
  {
    name: "Publishing04",
    href: "challenge_Day04.html",
    src: challenge_Day04,
  },
  {
    name: "Publishing05",
    href: "challenge_Day05.html",
    src: challenge_Day05,
  },
  {
    name: "Publishing06",
    href: "challenge_Day06.html",
    src: challenge_Day06,
  },
  {
    name: "Publishing07",
    href: "challenge_Day07.html",
    src: challenge_Day07,
  },
  {
    name: "Publishing09",
    href: "challenge_Day09.html",
    src: challenge_Day09,
  },
];

const Publishing = () => {
  return (
    <PublishingStyle>
      <div className="Publishing-container">
        <h2>💡Publishing💡</h2>
        {urlList.map((url, index) => (
          <img key={index} src={url.src} alt={url.name} />
        ))}
      </div>
    </PublishingStyle>
  );
};

export default Publishing;
