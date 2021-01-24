import React, { memo } from "react";

import "../styles/Footer.scss";
import Links from "./Links";

const Footer = () => {
  return (
    <footer className="Footer">
      <h2>Thank You For Watching!</h2>
      <h3>좋은 인연이 되었으면 좋겠습니다 :)</h3>
      <div className="Footer-links">
        <Links />
      </div>
    </footer>
  );
};

export default memo(Footer);
