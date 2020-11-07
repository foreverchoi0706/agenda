import styled from "styled-components";

const RoutersStyled = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  width: inherit;
  height: 300px;
  cursor: pointer;
`;

const Routers = ({ isClicked, handleClick }) => {
  if (isClicked) {
    return (
      <RoutersStyled onClick={handleClick}>
       
      </RoutersStyled>
    );
  } else {
    return null;
  }
};

export default Routers;
