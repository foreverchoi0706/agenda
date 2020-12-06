import React from "react";
import styled from "styled-components";

const ContactStyled = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1028px) {
    height: 100vh;
  }

  @media (max-width: 768px) {
  }
`;

const Contact = () => {
  return (
    <ContactStyled>
      <h2># Contact</h2>
    </ContactStyled>
  );
};

export default Contact;
