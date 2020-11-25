import styled from "styled-components";
import { useEffect } from "react";

const ModalStyled = styled.div`
  position: absolute;
  color: black;
  width: 250px;
  height: 250px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const GraphStyled = styled.div`
  height: 100%;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  ul {
    height: 200px;
    padding: 0px;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    border-bottom: 1px solid black;
    li {
      width: 25px;
      transition-property: height;
      transition-duration: 2s;
    }
  }
  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    b {
      text-align: center;
      width: 33%;
    }
  }
`;

const HtmlModal = () => {
  return (
    <GraphStyled>
      <ul>
        <li style={{ backgroundColor: "red", height: "100px" }}></li>
        <li style={{ backgroundColor: "blue", height: "150px" }}></li>
        <li style={{ backgroundColor: "blue", height: "150px" }}></li>
      </ul>
      <div>
        <b>semantic</b>
        <b>html5 tag</b>
        <b>html5 tag</b>
      </div>
    </GraphStyled>
  );
};

const CssModal = () => {
  return (
    <GraphStyled>
      <ul>
        <li></li>
        <li></li>
      </ul>
      <div>
        <b>css property</b>
        <b>scss</b>
      </div>
    </GraphStyled>
  );
};

const JavascriptModal = () => {
  return (
    <GraphStyled>
      <ul>
        <li></li>
        <li></li>
      </ul>
      <div>
        <b>Modern JS</b>
        <b>Typescript</b>
      </div>
    </GraphStyled>
  );
};

const ReactModal = () => {
  return (
    <GraphStyled>
      <ul>
        <li></li>
        <li></li>
      </ul>
      <div>
        <b>function component</b>
        <b>third party lib</b>
      </div>
    </GraphStyled>
  );
};

const ReduxModal = () => {
  return (
    <GraphStyled>
      <ul>
        <li></li>
        <li></li>
      </ul>
      <div>
        <b>redux-thunk</b>
        <b>redux-saga</b>
      </div>
    </GraphStyled>
  );
};

const NodeJsModal = () => {
  return (
    <GraphStyled>
      <ul>
        <li></li>
        <li></li>
      </ul>
      <div>
        <b>npm/yarn</b>
        <b>express</b>
      </div>
    </GraphStyled>
  );
};

const GithubModal = () => {
  return (
    <GraphStyled>
      <ul>
        <li></li>
        <li></li>
      </ul>
      <div>
        <b>semantic?</b>
        <b>html5 tag?</b>
      </div>
    </GraphStyled>
  );
};

const EctModal = () => {
  return (
    <GraphStyled>
      <ul>
        <li></li>
        <li></li>
      </ul>
      <div>
        <b>semantic?</b>
        <b>html5 tag?</b>
      </div>
    </GraphStyled>
  );
};
const Modal = ({ handleClick, isClicked, division, xPosition, yPosition }) => {
  const modalStyle = {
    left: window.innerWidth > 768 ? `${xPosition}px` : "25%",
    top: window.innerWidth > 768 ? `${yPosition}px` : "2000px",
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      handleClick();
    });
  }, [null]);

  if (isClicked) {
    return (
      <ModalStyled onClick={handleClick} style={modalStyle}>
        {division === "html" && <HtmlModal />}
        {division === "css" && <CssModal />}
        {division === "javscript" && <JavascriptModal />}
        {division === "react" && <ReactModal />}
        {division === "redux" && <ReduxModal />}
        {division === "nodeJs" && <NodeJsModal />}
        {division === "github" && <GithubModal />}
        {division === "etc" && <EctModal />}
      </ModalStyled>
    );
  } else {
    return null;
  }
};

export default Modal;
