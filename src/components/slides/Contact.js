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

    section {
      flex-basis: 33%;
      display: flex;
      height: 100vh;
      justify-content: center;
      &:nth-child(1) {
        align-items: flex-start;
        .Contact-sections-publishing {
          padding: 10px;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
      }
      &:nth-child(2) {
        align-items: center;
      }
      &:nth-child(3) {
        align-items: flex-end;
        .Contact-sections-link {
          padding: 10px;
          width: 100%;
          display: flex;
          justify-content: space-between;
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
  }

  background: linear-gradient(-45deg, #f3f5f0 50%, #dfe8eb 50%);

  @media (max-width: 1028px) {
    height: 100vh;
  }

  @media (max-width: 768px) {
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
          <ul className="Contact-sections-publishing">
            {urlList.map((url) => (
              <li>
                <a
                  href={
                    "https://foreverchoi0706.github.io/publishing/challenge/" +
                    url.href
                  }
                  target="_blank"
                >
                  {url.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2>읽어 주셔서 감사합니다 :)</h2>
        </section>
        <section>
          <div className="Contact-sections-link">
            <a href="https://github.com/foreverchoi0706">
              <img src={github} alt="github" />
            </a>
            <a href="https://velog.io/@foreverchoi0706">
              <img src={blog} alt="blog" />
            </a>
            <a href="mailto:foreverchoi0706@gmail.com">
              <img src={email} alt="email" />
            </a>
          </div>
        </section>
      </div>
    </ContactStyled>
  );
};

export default Contact;
