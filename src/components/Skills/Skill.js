import React, { memo, useState } from "react";
import { Paper, Typography } from "@material-ui/core";

const Skill = ({ name, src, description }) => {
  return (
    <Paper
      className="Skill"
      elevation={0}
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
      }}
    ></Paper>
  );
};

export default memo(Skill);
