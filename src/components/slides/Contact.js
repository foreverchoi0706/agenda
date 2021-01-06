import React from "react";
import styled from "styled-components";

import github from "../../imgs/github2.png";
import blog from "../../imgs/blog.png";
import email from "../../imgs/email.png";
import mouse_black from "../../imgs/mouse_black.png";

const ContactStyled = styled.li`
  .Contact-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(-45deg, #9A2D37 50%, wheat 50%);
    height: 100vh;
    .link-img {
      width: 100px;
    }
  }
  .Contact-mouse {
    position: absolute;
    bottom: 10vh;
    animation: mouse-animation 0.5s infinite linear;
    cursor: pointer;
  }
  @media (max-width: 1028px) {
    .Contact-container {
      .link-img {
        width: 75px;
      }
    }
  }

  @media (max-width: 768px) {
    .Contact-container {
      .link-img {
        width: 50px;
      }
    }
  }
  @media (max-width: 384px) {
    .Contact-container {
      .link-img {
        width: 25px;
      }
    }
  }
  @keyframes mouse-animation {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-10px);
    }
  }
`;

const Contact = ({ isShow }) => {
  return (
    <ContactStyled>
      <div className="Contact-container">
        <h2>읽어 주셔서 감사합니다 :)</h2>
        <footer>
          <a href="https://github.com/foreverchoi0706" target="_blank">
            <img src={github} alt="github" className="link-img" />
          </a>
          <a href="https://velog.io/@foreverchoi0706" target="_blank">
            <img src={blog} alt="blog" className="link-img" />
          </a>
          <a href="mailto:foreverchoi0706@gmail.com" target="_blank">
            <img src={email} alt="email" className="link-img" />
          </a>
        </footer>
        {isShow || (
          <a href="#top" className="Contact-mouse">
            <img  src={mouse_black} alt="mouse" />
          </a>
        )}
      </div>
    </ContactStyled>
  );
};

export default Contact;
