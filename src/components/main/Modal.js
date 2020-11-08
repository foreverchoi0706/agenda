import styled from "styled-components";

const ModalStyled = styled.div`
  position: absolute;
  top: 10px;
  color: black;
  width: 500px;
  height: 500px;
  background-color: rgba(255, 255, 255, 0.8);
`;

const Modal = ({ isClicked, division, xPosotion, yPosition }) => {
  if (isClicked) {
    return <ModalStyled>{division}</ModalStyled>;
  } else {
    return <div></div>;
  }
};

export default Modal;
