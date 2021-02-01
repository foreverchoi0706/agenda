import React, { memo } from "react";
import { Typography } from "@material-ui/core";

import Links from "./Links";

import "../styles/Navi.scss";

const Navi = () => {
  return (
    <nav className="Navi">
      <h1 className="Navi-title">
        <a href="#Top">#ForeverChoi</a>
      </h1>
      <div className="Navi-contents">
        <ul>
          <li>
            <a href="#Intro">  <Typography className="Navi-menu" variant="overline">인트로</Typography></a>
          </li>
          <li>
            <a href="#Skills"><Typography className="Navi-menu" variant="overline">기술 스택</Typography></a>
          </li>
          <li>
            <a href="#Projects"><Typography className="Navi-menu" variant="overline">프로젝트</Typography></a>
          </li>
          <li>
            <a href="#Publishings"><Typography className="Navi-menu" variant="overline">퍼블리싱</Typography></a>
          </li>
        </ul>
        <div className="Navi-links">
          <Links />
        </div>
      </div>
    </nav>
  );
};

export default memo(Navi);
