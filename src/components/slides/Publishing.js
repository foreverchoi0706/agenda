import React from "react";
import styled from "styled-components";

const PublishingStyle = styled.li`

  .Publishing-container {
 
    width : 80vw;
    height: calc(100vh - 68px);
    margin : 0 auto;
    border-radius : 5px;
   
    
  }
`;
const urlList = [
  {
    name: "Publishing01",
    href: "challenge_Day01.html",
  },
  {
    name: "Publishing02",
    href: "challenge_Day02.html",
  },
  {
    name: "Publishing03",
    href: "challenge_Day03.html",
  },
  {
    name: "Publishing04",
    href: "challenge_Day04.html",
  },
  {
    name: "Publishing05",
    href: "challenge_Day05.html",
  },
  {
    name: "Publishing06",
    href: "challenge_Day06.html",
  },
  {
    name: "Publishing07",
    href: "challenge_Day07.html",
  },
  {
    name: "Publishing08",
    href: "challenge_Day08.html",
  },
  {
    name: "Publishing09",
    href: "challenge_Day09.html",
  },
];
const Publishing = () => {
  return (
    <PublishingStyle>
      <h2>#Publishing</h2>
      <div className="Publishing-container"></div>
    </PublishingStyle>
  );
};

export default Publishing;
