import React from "react";
import { memo } from "react";

import "../styles/Navi.scss";

import blog from "../assets/blog.png";
import git from "../assets/git.png";
import email from "../assets/email.png";

const Navi = () => {
  return (
    <nav className="Navi">
      <h1 className="Navi-title">Navigation</h1>
      <div className="Navi-contents">
        <ul>
          <li>
            <a href="#">Top</a>
          </li>
          <li>
            <a href="#Intro">Intro</a>
          </li>
          <li>
            <a href="">Skills</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Publishings</a>
          </li>
        </ul>
        <div className="Navi-link">
          <a href="mailto:foreverchoi0706@gmail.com" target="blank">
            <img src={blog} alt="blog" />
          </a>
          <a href="https://github.com/foreverchoi0706" target="blank">
            <img src={git} alt="git" />
          </a>
          <a href="https://velog.io/@foreverchoi0706" target="blank">
            <img src={email} alt="email" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default memo(Navi);
