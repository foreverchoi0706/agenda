import styled from "styled-components";

const ContactStyled = styled.section`
  .Contact-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.5rem;
    & > * {
      height : 100px;
    }
    & > *:hover {
      font-size: 3rem;
    }
  }
`;

const Contact = () => {
  return (
    <ContactStyled>
      <h1>#CONTACT</h1>
      <div className="Contact-container">
        <h2>foreverchoi0706@gamil.com</h2>
        <b>else</b>
        <h2>
          <a href="mailto:foreverchoi0706@gamil.com">Mail To</a>
        </h2>
      </div>
    </ContactStyled>
  );
};

export default Contact;
