import styled from "styled-components";

import blog from "../imgs/blog.png";
import github2 from "../imgs/github2.png";

const FooterStyled = styled.footer`
  background-color: gray;
  padding: 1vw 10vw 1vw 10vw;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 1vw;

  .Footer-container {
    display: flex;
    justify-content: space-around;
    ul {
      padding: 0px;
    }
    .Footer-links {
      li {
        img {
          width: 50px;
          height: 50px;
        }
      }
    }
  }

  .Footer-copy {
    font-size: 2rem;
    align-self: center;
  }
  @media (max-width: 768px) {
    padding: 20px 20px 20px 20px;
    .Footer-copy {
      font-size: 1rem;
    }
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <div className="Footer-container">
        <ul>
          <li>
            <a href="/">#todo_web</a>
          </li>
          <li>
            <a href="/">#calculator</a>
          </li>
          <li>
            <a href="/">#</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/">#horror movie</a>
          </li>
          <li>
            <a href="/">#horror movie</a>
          </li>
          <li>
            <a href="/">#horror movie</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/">#horror movie</a>
          </li>
          <li>
            <a href="/">#horror movie</a>
          </li>
          <li>
            <a href="/">#horror movie</a>
          </li>
        </ul>
        <ul className="Footer-links">
          <li>
            <a href="https://velog.io/@foreverchoi0706" target="_blank">
              <img src={blog} alt="blog" />
            </a>
          </li>
          <li>
            <a href="https://github.com/foreverchoi0706" target="_blank">
              <img src={github2} alt="github2" />
            </a>
          </li>
        </ul>
      </div>
      <div className="Footer-copy">
        &copy; 2020 foreverChoi All Right Reserved
      </div>
    </FooterStyled>
  );
};
export default Footer;
