import React, { memo } from "react";

import blog from "../assets/blog.png";
import git from "../assets/git.png";
import email from "../assets/email.png";

import "../styles/Links.scss";

const Links = () => {
  return (
    <div className="Links">
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
  );
};

export default memo(Links);
