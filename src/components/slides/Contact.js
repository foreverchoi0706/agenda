import React from "react";
import styled from "styled-components";

import github from "../../imgs/github2.png";
import blog from "../../imgs/blog.png";
import email from "../../imgs/email.png";

const ContactStyled = styled.li`
  .Contact-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(-45deg, #f3f5f0 50%, #dfe8eb 50%);
    height: 100vh;
    .link-img {
      width: 100px;
    }
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
`;

const urlList = [
  {
    name: "Publishing01",
    href: "challenge_Day01.html",
  },
  {
    name: "Publishing02",
    href: "challenge_Day02.html",
  },
  {
    name: "Publishing03",
    href: "challenge_Day03.html",
  },
  {
    name: "Publishing04",
    href: "challenge_Day04.html",
  },
  {
    name: "Publishing05",
    href: "challenge_Day05.html",
  },
  {
    name: "Publishing06",
    href: "challenge_Day06.html",
  },
  {
    name: "Publishing07",
    href: "challenge_Day07.html",
  },
  {
    name: "Publishing08",
    href: "challenge_Day08.html",
  },
  {
    name: "Publishing09",
    href: "challenge_Day09.html",
  },
];

const Contact = () => {
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
      </div>
    </ContactStyled>
  );
};

export default Contact;
