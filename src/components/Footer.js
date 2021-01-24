import React, { memo } from "react";

const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        height: "33vh",
      }}
    >
      <h2>Thank You For Watching!</h2>
      <h3>좋은 인연이 되었으면 좋겠습니다 :)</h3>
    </footer>
  );
};

export default memo(Footer);
