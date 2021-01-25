import React from "react";
import { memo } from "react";

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
            <a href="#Intro">인트로</a>
          </li>
          <li>
            <a href="#Skills">기술 스택</a>
          </li>
          <li>
            <a href="#Projects">프로젝트</a>
          </li>
          <li>
            <a href="#Publishings">퍼블리싱</a>
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
