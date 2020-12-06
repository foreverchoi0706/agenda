import React from "react";
import styled from "styled-components";

const FooterStyled = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  .Footer-bye {
    margin: 0 10px 0 10px;
    text-align: center;
  }

  @media (max-width: 1028px) {
    height: 100vh;
    .Footer-bye {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    .Footer-bye {
      font-size: 1rem;
    }
  }
`;

const App = () => {
  return (
    <FooterStyled>
      <h1 className="Footer-bye">감사합니다.</h1>
    </FooterStyled>
  );
};

export default App;
