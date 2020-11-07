import styled from "styled-components";

const RoutersStyled = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  width: inherit;
  height: 300px;
  cursor : pointer;

  .hide {
    top: -300px;
  }
  .show {
    top: 0px;
  }
`;

const Routers = ({ isClicked, handleClick }) => {
  if (isClicked) {
    return <RoutersStyled onClick={handleClick} />;
  } else {
    return null;
  }
};

export default Routers;
