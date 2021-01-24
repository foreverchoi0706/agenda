import React, { memo } from "react";
import rocket from "../assets/rocket.png";

import "../styles/RocketLine.scss";

const RocketLine = () => {
  return (
    <div className="RocketLine">
      <div/>
      <img src={rocket} alt="rocket" />
    </div>
  );
};

export default memo(RocketLine);
