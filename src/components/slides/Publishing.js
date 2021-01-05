import React from "react";
import styled from "styled-components";

import challenge_Day01 from "../../imgs/publishing/challenge_Day01.png";
import challenge_Day02 from "../../imgs/publishing/challenge_Day02.png";
import challenge_Day03 from "../../imgs/publishing/challenge_Day03.png";
import challenge_Day04 from "../../imgs/publishing/challenge_Day04.png";
import challenge_Day05 from "../../imgs/publishing/challenge_Day05.png";
import challenge_Day06 from "../../imgs/publishing/challenge_Day06.png";
import challenge_Day07 from "../../imgs/publishing/challenge_Day07.png";
import challenge_Day08 from "../../imgs/publishing/challenge_Day08.png";
import challenge_Day09 from "../../imgs/publishing/challenge_Day09.png";

const PublishingStyle = styled.li`
  h2 {
    height: 3vh;
    margin: 2vh;
  }
  .Publishing-container {
    height: calc(100vh - 7vh);
    margin: 0 auto;
    border-radius: 5px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);

    a {
      border: 1px solid black;
      img {
        width: 100%;
        height : 100%;
      }
    }
  }
`;
const urlList = [
  {
    name: "Publishing01",
    href: "challenge_Day01",
    src: challenge_Day01,
  },
  {
    name: "Publishing02",
    href: "challenge_Day02.html",
    src: challenge_Day02,
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
    name: "Publishing08",
    href: "challenge_Day08.html",
    src: challenge_Day08,
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
      <h2>#Publishing</h2>
      <div className="Publishing-container">
        {urlList.map((url) => (
          <a
            href={`https://foreverchoi0706.github.io/publishing/challenge/${url.href}`}
            target="blank"
          >
            <img src={url.src} alt={url.name} />
          </a>
        ))}
      </div>
    </PublishingStyle>
  );
};

export default Publishing;
