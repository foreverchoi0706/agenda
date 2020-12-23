import React from "react";
import styled from "styled-components";

import github from "../../imgs/github2.png";
import blog from "../../imgs/blog.png";
import email from "../../imgs/email.png";

const ContactStyled = styled.li`
  .Contact-sections {
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(-45deg, #f3f5f0 50%, #dfe8eb 50%);

    section {
      flex-basis: 33%;
      display: flex;
      height: 100vh;
      justify-content: center;
      &:nth-child(1) {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        gap: 10px;
        a {
          color: black;
        }
      }
      &:nth-child(2) {
        align-items: center;
      }
      &:nth-child(3) {
        align-items: flex-end;
        display: flex;
        justify-content: space-around;
        gap: 10px;
        a {
          img {
            cursor: pointer;
            width: 70px;
          }
        }
      }
    }
  }
  @media (max-width: 1028px) {
    height: 100vh;
  }

  @media (max-width: 768px) {
    .Contact-sections {
      section {
        &:nth-child(1) {
          font-size: 0.8rem;
          align-items: center;
          justify-content: space-around;
        }
        &:nth-child(3) {
          font-size: 0.4rem;
          flex-direction: column;
          align-items: center;
          a {
            img {
              width: 50px;
            }
          }
        }
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
      <div className="Contact-sections">
        <section>
          {urlList.map((url, index) => (
            <a
              key={index}
              href={
                "https://foreverchoi0706.github.io/publishing/challenge/" +
                url.href
              }
              target="_blank"
            >
              {url.name}
            </a>
          ))}
        </section>
        <section>
          <h2>읽어 주셔서 감사합니다 :)</h2>
        </section>
        <section>
          <a href="https://github.com/foreverchoi0706">
            <img src={github} alt="github" />
          </a>
          <a href="https://velog.io/@foreverchoi0706">
            <img src={blog} alt="blog" />
          </a>
          <a href="mailto:foreverchoi0706@gmail.com">
            <img src={email} alt="email" />
          </a>
        </section>
      </div>
    </ContactStyled>
  );
};

export default Contact;
