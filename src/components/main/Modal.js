import styled from "styled-components";

const ModalStyled = styled.div`
  position: absolute;
  color: black;
  width: 300px;
  height: 300px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.8);
`;

const Modal = ({ isClicked, division, xPosotion, yPosition }) => {
  if (isClicked) {
    return <ModalStyled style={{
      top: `${yPosition}px`,
      left:`${xPosotion}px`
    }}>{division}</ModalStyled>;
  } else {
    return <div></div>;
  }
};

export default Modal;
