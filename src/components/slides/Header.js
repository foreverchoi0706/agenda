import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  .Header-greeting {
    margin: 0 10px 0 10px;
    text-align: center;
  }

  @media (max-width: 1028px) {
    height: 100vh;
    .Header-greeting {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    .Header-greeting {
      font-size: 1rem;
    }
  }
`;

const App = () => {
  return (
    <HeaderStyled>
      <h1 className="Header-greeting">
        전문성있는 프론트엔드 개발자를 꿈꿉니다. 향삼심을 가진 지원자
        최영원입니다.
      </h1>
    </HeaderStyled>
  );
};

export default App;
