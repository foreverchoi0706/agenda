import React, { memo, useState } from "react";
import { CardActionArea, CardContent, Card } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import Modal from "../Modal";

const Project = ({ title, src }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => setIsClicked(!isClicked);

  return (
    <Card onClick={handleClick}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
        </CardContent>
        <img src={src} />
      </CardActionArea>
      {isClicked && <Modal />}
    </Card>
  );
};

export default memo(Project);
