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

const skills = [
  { name: "HTML5", color: "rgb(227, 79, 38)" },
  { name: "CSS3", color: " rgb(33, 150, 243)" },
  { name: "JAVASCRIPT", color: "rgb(247, 223, 30)" },
  { name: "REACT", color: "rgb(97, 218, 251)" },
  { name: "REDUX", color: "rgb(118, 74, 188)" },
];

let skillsIndex = 0;
let charIndex = 0;
let tempSkill = "";

const Typing = () => {
  const [skill, setSkill] = useState({
    name: null,
    color: null,
  });

  const typing = () => {
    const charArr = skills[skillsIndex].name.split("");
    tempSkill += charArr[charIndex++];
    setSkill({
      name: tempSkill,
      color: skills[skillsIndex].color,
    });
    if (charIndex > charArr.length) {
      charIndex = 0;
      skillsIndex++;
      setSkill({
        ...skill,
        name: "",
      });
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

  const { name, color } = skill;

  return (
    <TypingStyled style={{ color }}>
      {name}
    </TypingStyled>
  );
};

export default Typing;
