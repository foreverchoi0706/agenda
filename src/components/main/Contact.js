import styled from "styled-components";
import mail128 from "../../imgs/mail128.png";

const ContactStyled = styled.section`
  .Contact-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.5rem;
  }
  .jumping {
    animation: jumping-anime 0.3s linear infinite;
  }

  @keyframes jumping-anime {
    to {
      transform: translateY(-10px);
    }
  }

  @media (max-width: 768px) {
    .Contact-container {
      font-size: 1rem;
    }
  }
`;

const Contact = () => {
  const handleMouseEnter = (e) => {
    e.target.classList.add("jumping");
  };

  const handleMouseOut = (e) => {
    e.target.classList.remove("jumping");
  };

  return (
    <ContactStyled>
      <h2>#CONTACT ME?</h2>
      <div className="Contact-container">
        {"if(checkMail)  {"} <h2>foreverchoi0706@gmail.com</h2>
        <b>{"} else if(sendMail) {"}</b>
        <a href="mailto:foreverchoi0706@gmail.com">
          <img
            src={mail128}
            alt="mail"
            onMouseEnter={handleMouseEnter}
            onMouseOut={handleMouseOut}
          />
        </a>
        {"}"}
        <b>🎃메일 보내주시면 1일 안에 최대한 빠르게 답장 드리겠습니다!🎃</b>
      </div>
    </ContactStyled>
  );
};

export default Contact;
