import React, { memo } from "react";
import { Code } from "@material-ui/icons";

import Publishing from "./Publishing";
import publishingsInfo from "./publishingsInfo";

import "../../styles/Publishings.scss";

const Publishings = () => {
  return (
    <div id="Publishings" className="Publishings">
      <h2>
        04. 퍼블리싱 <Code />
      </h2>
      <div className="Publishing-contents">
        {publishingsInfo.publishings.map((url, index) => (
          <Publishing key={index} name={url.name} src={url.src} />
        ))}
      </div>
    </div>
  );
};

export default memo(Publishings);
