import React, { memo } from "react";

const Skill = ({ name, src, description }) => {
  return <img className="Skill" src={src} alt={name} />;
};

export default memo(Skill);
