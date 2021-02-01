import React, { memo } from "react";
import { Typography } from "@material-ui/core";
import { ImportantDevices } from "@material-ui/icons";

import Project from "./Project";
import projectsInfo from "./projectsInfo";

import "../../styles/Projects.scss";

const Porjects = () => {
  return (
    <div id="Projects" className="Projects">
      <Typography variant="h5" gutterBottom>
        03. 프로젝트 <ImportantDevices />
      </Typography>
      <div className="Projects-container">
        {projectsInfo.projects.map((project, index) => (
          <Project
            key={index}
            name={project.name}
            src={project.src}
            skills={project.skills}
            description={project.description}
            link={project.link}
            git={project.git}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(Porjects);
