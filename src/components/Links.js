import React, { memo } from "react";

import blog from "../assets/blog.png";
import github from "../assets/github.png";
import email from "../assets/email.png";

import "../styles/Links.scss";

const Links = () => {
  return (
    <div className="Links">
      <a href="mailto:foreverchoi0706@gmail.com" target="blank">
        <img src={email} alt="blog" />
      </a>
      <a href="https://github.com/foreverchoi0706" target="blank">
        <img src={github} alt="github" />
      </a>
      <a href="https://velog.io/@foreverchoi0706" target="blank">
        <img src={blog} alt="email" />
      </a>
    </div>
  );
};

export default memo(Links);
