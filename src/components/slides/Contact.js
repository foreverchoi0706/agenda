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

const Contact = () => {
  return (
    <ContactStyled>
      <div className="Contact-sections">
        <section>
          <ul className="Contact-sections-publishing">
            <li><a href="">publishing01</a></li>
            <li><a href="">publishing01</a></li>
            <li><a href="">publishing01</a></li>
            <li><a href="">publishing01</a></li>
            <li><a href="">publishing01</a></li>
            <li><a href="">publishing01</a></li>
            <li><a href="">publishing01</a></li>
            <li><a href="">publishing01</a></li>
          </ul>
        </section>
        <section>
          <h2>읽어 주셔서 감사합니다 :)</h2>
        </section>
        <section>
          <div className="Contact-sections-link">
            <a href>
              <img src={github} alt="github" />
            </a>
            <a href>
              <img src={blog} alt="blog" />
            </a>
            <a href>
              <img src={email} alt="email" />
            </a>
          </div>
        </section>
      </div>
    </ContactStyled>
  );
};

export default Contact;
