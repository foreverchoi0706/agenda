import { useState, useEffect } from "react";

const skills = ["HTML5", "CSS3", "JAVASCRIPT", "REACT", "REDUX"];
let skillsIndex = 0;
let charIndex = 0;
let tempSkill = "";

const Skills = () => {
  const [skill, setSkill] = useState("");

  const typing = () => {
    const charArr = skills[skillsIndex].split("");
    tempSkill += charArr[charIndex++];
    setSkill(tempSkill);
    if (charIndex > charArr.length) {
      charIndex = 0;
      skillsIndex++;
      setSkill("");
      tempSkill = "";
    }
    if (skillsIndex === skills.length) {
      skillsIndex = 0;
    }
    setTimeout(typing, 500);
  };

  useEffect(() => {
    setTimeout(typing, 3000);
  }, []);
  return <>{skill}</>;
};

export default Skills;
