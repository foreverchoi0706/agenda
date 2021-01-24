import React, { memo } from "react";
import { Card } from "@material-ui/core";

const Publishing = ({ name, src }) => {
  return (
    <Card>
      <img src={src} alt={name} />
    </Card>
  );
};
export default memo(Publishing);
