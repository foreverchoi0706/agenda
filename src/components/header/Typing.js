import { useState, useEffect } from "react";
import styled from "styled-components";

const TypingStyled = styled.b`
  opacity: 0;
  animation: appear-anime 2s forwards 1.5s;
  font-size: 3.5rem;
  padding-right: 5px;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  @keyframes appear-anime {
    to {
      opacity: 1;
      transform: translateY(-2.5vh);
    }
  }
`;

const skills = ["HTML5", "CSS3", "JAVASCRIPT", "REACT", "REDUX"];
let skillsIndex = 0;
let charIndex = 0;
let tempSkill = "";

const Typing = () => {
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
  return <TypingStyled>#{skill}</TypingStyled>;
};

export default Typing;
