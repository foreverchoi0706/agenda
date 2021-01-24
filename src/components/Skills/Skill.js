import React, { memo, useState } from "react";
import { Paper, Typography } from "@material-ui/core";

const Skill = ({ name, src, description }) => {
  return <img className="Skill" src={src} alt={name} />;
};

export default memo(Skill);
