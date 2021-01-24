import React, { memo, useState } from "react";
import { CardActionArea, CardContent, Card } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import Modal from "../Modal";

const Project = ({ name, src, description, skills, link, git }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => setIsClicked(!isClicked);

  return (
    <Card onClick={handleClick}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
        <img src={src} />
      </CardActionArea>
      {isClicked && (
        <Modal
          name={name}
          src={src}
          link={link}
          git={git}
          description={description}
          skills={skills}
        />
      )}
    </Card>
  );
};

export default memo(Project);
