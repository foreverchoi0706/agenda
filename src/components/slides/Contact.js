import React from "react";
import styled from "styled-components";

import github from "../../imgs/github2.png";
import blog from "../../imgs/blog.png";
import email from "../../imgs/email.png";
import mouse from "../../imgs/mouse.png";

const ContactStyled = styled.li`
  color: white;
  .Contact-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
      -45deg,
      var(--first-theme-color) 50%,
      var(--second-theme-color) 50%
    );
    height: 100vh;

    .Contact-links {
      display: flex;
      flex-direction: column;
      gap: 10px;

      a {
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 5px;
        color: black;
        text-decoration: none;
        border-radius: 5px;
        background-color: lightgray;
      }
      .link-img {
        width: 50px;
      }
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
      .Contact-links {
        .link-img {
          width: 40px;
        }
      }
    }

    @media (max-width: 768px) {
      font-size: 0.7rem;
      .Contact-container {
        .Contact-links {
          .link-img {
            width: 30px;
          }
        }
      }
    }
    @media (max-width: 384px) {
      font-size: 0.5rem;
      .Contact-container {
        .Contact-links {
          .link-img {
            width: 20px;
          }
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
  }
`;

const Contact = ({ isShow }) => {
  return (
    <ContactStyled>
      <div className="Contact-container">
        <h2>읽어 주셔서 감사합니다 :)</h2>
        <footer className="Contact-links">
          <a href="https://github.com/foreverchoi0706" target="_blank">
            <img src={github} alt="github" className="link-img" />
            <strong>
              Github 링크입니다. 작성한 코드를 Git을 통해 관리하고 있습니다.
            </strong>
          </a>
          <a href="https://velog.io/@foreverchoi0706" target="_blank">
            <img src={blog} alt="blog" className="link-img" />
            <strong>
              개인 블로그를 운영중입니다. 이곳에서 배운것을 기록하고 있습니다.
            </strong>
          </a>
          <a href="mailto:foreverchoi0706@gmail.com" target="_blank">
            <img src={email} alt="email" className="link-img" />
            <strong>
              메일 주시면 1일 이내에 가능한 빨리 답장 드리겠습니다.
            </strong>
          </a>
        </footer>
        {isShow || (
          <a href="#top" className="Contact-mouse">
            <img src={mouse} alt="mouse" />
          </a>
        )}
      </div>
    </ContactStyled>
  );
};

export default Contact;
