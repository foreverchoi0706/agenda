import React, { memo } from "react";
import {
  CardActionArea,
  CardMedia,
  CardActions,
  CardContent,
  Card,
  Button,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const Project = ({ title, src }) => {
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
        </CardContent>
        <img src={src} />
      </CardActionArea>
    </Card>
  );
};

export default memo(Project);
