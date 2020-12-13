import React from "react";
import styled from "styled-components";

const ContactStyled = styled.li`
  .Contact-sections {
    display: flex;
    justify-content: center;
    align-items: center;

    section{
      flex-grow : 1;

      display : flex;

      &:nth-child(odd){

      }
      &:nth-child(even){
        justify-content : center;
        align-items : center;
      }
    }
  }

  background: linear-gradient(-45deg, #f3f5f0 50%, #dfe8eb 50%);

  @media (max-width: 1028px) {
    height: 100vh;
  }

  @media (max-width: 768px) {
  }
`;

const Contact = () => {
  return (
    <ContactStyled>
      <div className="Contact-sections">
        <section>AAA</section>
        <section><h2># Contact</h2></section>
        <section>AAA</section>
      </div>
    </ContactStyled>
  );
};

export default Contact;
