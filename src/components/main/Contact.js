import styled from "styled-components";

const ContactStyled = styled.section`
  .Contact-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.5rem;
  }
  @media (max-width: 768px) {
    .Contact-container {
      font-size: 1rem;
    }
  }
`;

const Contact = () => {
  return (
    <ContactStyled>
      <h1>#CONTACT?</h1>
      <div className="Contact-container">
        <h2>foreverchoi0706@gamil.com</h2>
        <b>else if</b>
        <h2>
          <a href="mailto:foreverchoi0706@gamil.com">Mail To</a>
        </h2>
      </div>
    </ContactStyled>
  );
};

export default Contact;
