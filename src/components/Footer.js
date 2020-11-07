import styled from "styled-components";

const FooterStyled = styled.footer`
  height: 25vh;
  background-color: gray;

  padding: 5vw 10vw 5vw 10vw;
`;

const Footer = () => {
  return (
    <FooterStyled>
      <ul>
        <li> foreverchoi0706@gamil.com</li>
        <li> &copy; foreverChoi All Right Reserved</li>
        <li></li>
        <li></li>
      </ul>
    </FooterStyled>
  );
};
export default Footer;
