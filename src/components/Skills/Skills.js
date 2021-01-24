import React, { memo } from "react";
import { ViewModule } from "@material-ui/icons";

import Skill from "./Skill";

import skillsInfo from "./skillsInfo";
import "../../styles/Skills.scss";

const Skills = () => {
  return (
    <div id="Skills" className="Skills">
      <h2>
        기술 스택 <ViewModule />
      </h2>
      <div className="Skills-contents">
        {skillsInfo.skills.map((skill) => (
          <Skill
            name={skill.name}
            src={skill.src}
            description={skill.description}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(Skills);
