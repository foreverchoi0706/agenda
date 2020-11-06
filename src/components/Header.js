import { useState, useEffect } from "react";
import styled from "styled-components";

const HeaderStyled = styled.header`
  padding-top: 50px;
  height: 90vh;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .Header-intro {
    margin: 0px 20px 0px 20px;
  }

  .Header-skills {
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const getSkills = ["HTML5", "CSS3", "REACT", "JS"][Symbol.iterator];

const Header = () => {
  const [skill, setSkill] = useState("");

  useEffect(() => {
    let skills = getSkills();
    setSkill(skills.next().value);
    setInterval(() => {
      skills.next().done
        ? (skills = getSkills())
        : setSkill(skills.next().value);
    }, 1000);
  }, [null]);

  return (
    <HeaderStyled>
      <h1 className="Header-into">
        전문성있는 프론트엔드 개발자를 꿈꿉니다. 향삼심을 가진 주니어 개발자
        최영원입니다.
      </h1>
      <h2 className="Header-skills">저는 {skill}이 가능합니다.</h2>
    </HeaderStyled>
  );
};

export default Header;
