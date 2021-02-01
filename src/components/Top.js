import React, { memo, useRef, useEffect } from "react";
import { Typography } from "@material-ui/core";
import me from "../assets/me.jpg";

import "../styles/Top.scss";

const skills = [
  "HTML5",
  "CSS3",
  "JAVASCRIPT",
  "REACT",
  "REDUX",
  "EXPRESS",
  "NEST",
  "NODE",
  "TYPESCRIPT",
  "SASS",
];
const Top = () => {
  const refH2 = useRef(null);

  const wait = (ms) =>
    new Promise((resolve) => setTimeout(() => resolve(), ms));

  const typing = async (tempChars) => {
    for (let char of tempChars) {
      refH2.current.innerHTML += char;
      await wait(500);
    }
    refH2.current.innerHTML = "";
  };

  const startTyping = async () => {
    while (true) {
      for (let skill of skills) {
        const tempChars = Array.from(skill);
        await typing(tempChars);
      }
    }
  };

  useEffect(() => {
    startTyping();
    return () => startTyping;
  }, [startTyping]);

  return (
    <div id="Top" className="Top">
      <div className="Top-comment">
        <Typography variant="h5">
          전문성 있는 개발자를 꿈꿉니다. <br />
          향상심을 가진 지원자 최영원입니다.
        </Typography>
        <Typography className="Top-typing" ref={refH2} variant="overline" />
      </div>
      <img className="Top-img" src={me} alt="me" />
    </div>
  );
};

export default memo(Top);
