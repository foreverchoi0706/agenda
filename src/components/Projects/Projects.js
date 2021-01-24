import React, { memo } from "react";
import Project from "./Project";
import { ImportantDevices } from "@material-ui/icons";

import projectsInfo from "./projectsInfo";

import "../../styles/Projects.scss";

const Porjects = () => {
  return (
    <div id="Projects" className="Projects">
      <h2>
        03. 프로젝트 <ImportantDevices />
      </h2>
      <div className="Projects-container">
        {projectsInfo.projects.map((project, index) => (
          <Project
            key={index}
            title={project.name}
            src={project.src}
            skills={project.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(Porjects);
