import React, { memo } from "react";
import { Typography } from "@material-ui/core";
import "../styles/Footer.scss";
import Links from "./Links";

const Footer = () => {
  return (
    <footer className="Footer">
      <Typography variant="h5">Thank You For Watching!</Typography>
      <Typography variant="overline" gutterBottom>좋은 인연이 되었으면 좋겠습니다 :)</Typography>
      <div className="Footer-links">
        <Links />
      </div>
    </footer>
  );
};

export default memo(Footer);
