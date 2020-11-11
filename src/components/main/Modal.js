import styled from "styled-components";
import { useEffect } from "react";

const ModalStyled = styled.div`
  position: absolute;
  color: black;
  width: 300px;
  height: 300px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  .Modal-level {
    width: 100%;
    height: 50%;
  }
  .Modal-contents {
    width: 100%;
    height: 50%;
    font-weight: bold;
    text-align: justify;
  }
`;

const HtmlModal = () => {
  return (
    <>
      <div className="Modal-level"></div>
      <p className="Modal-contents">
        태그의 개념과 용도를 알고 있어 상황에 맞게 태그를 적용하여 html 구조에
        이해하고 사용합니다.
      </p>
    </>
  );
};

const CssModal = () => {
  return (
    <>
      <div className="Modal-level"></div>
      <p className="Modal-contents">
        기본적은 스타일 적용 및 트랜지션,애니메이션 속성 등 css3의 속성 역시
        활용 가능합니다. 미디어 쿼리를 반응형 웹 구현이 가능하며 CSS의
        전처리기인 SCSS 사용하여 유지보수 및 직관적인 코드작성을 위해
        노력합니다.
      </p>
    </>
  );
};

const JavascriptModal = () => {
  return (
    <>
      <div className="Modal-level"></div>
      <p className="Modal-contents">
        기본적은 스타일 적용 및 트랜지션,애니메이션 속성 등 css3의 속성 역시
        활용 가능합니다. 미디어 쿼리를 반응형 웹 구현이 가능하며 CSS의
        전처리기인 SCSS 사용하여 유지보수 및 직관적인 코드작성을 위해
        노력합니다.
      </p>
    </>
  );
};

const ReactModal = () => {
  return (
    <>
      <div className="Modal-level"></div>
      <p className="Modal-contents">
        기본적은 스타일 적용 및 트랜지션,애니메이션 속성 등 css3의 속성 역시
        활용 가능합니다. 미디어 쿼리를 반응형 웹 구현이 가능하며 CSS의
        전처리기인 SCSS 사용하여 유지보수 및 직관적인 코드작성을 위해
        노력합니다.
      </p>
    </>
  );
};

const ReduxModal = () => {
  return (
    <>
      <div className="Modal-level"></div>
      <p className="Modal-contents">
        기본적은 스타일 적용 및 트랜지션,애니메이션 속성 등 css3의 속성 역시
        활용 가능합니다. 미디어 쿼리를 반응형 웹 구현이 가능하며 CSS의
        전처리기인 SCSS 사용하여 유지보수 및 직관적인 코드작성을 위해
        노력합니다.
      </p>
    </>
  );
};

const NodeJsModal = () => {
  return (
    <>
      <div className="Modal-level"></div>
      <p className="Modal-contents">
        기본적은 스타일 적용 및 트랜지션,애니메이션 속성 등 css3의 속성 역시
        활용 가능합니다. 미디어 쿼리를 반응형 웹 구현이 가능하며 CSS의
        전처리기인 SCSS 사용하여 유지보수 및 직관적인 코드작성을 위해
        노력합니다.
      </p>
    </>
  );
};

const GithubModal = () => {
  return (
    <>
      <div className="Modal-level"></div>
      <p className="Modal-contents">
        기본적은 스타일 적용 및 트랜지션,애니메이션 속성 등 css3의 속성 역시
        활용 가능합니다. 미디어 쿼리를 반응형 웹 구현이 가능하며 CSS의
        전처리기인 SCSS 사용하여 유지보수 및 직관적인 코드작성을 위해
        노력합니다.
      </p>
    </>
  );
};

const Modal = ({ handleClick, isClicked, division, xPosition, yPosition }) => {
  useEffect(() => {
    window.addEventListener("resize", () => {
      handleClick();
    });
  }, [null]);

  if (isClicked) {
    return (
      <ModalStyled
        onClick={handleClick}
        style={{
          left: `${xPosition}px`,
          top: `${yPosition}px`,
        }}
      >
        {division === "html" && <HtmlModal />}
        {division === "css" && <CssModal />}
        {division === "javscript" && <JavascriptModal />}
        {division === "react" && <ReactModal />}
        {division === "redux" && <ReduxModal />}
        {division === "nodeJs" && <NodeJsModal />}
        {division === "github" && <GithubModal />}
      </ModalStyled>
    );
  } else {
    return null;
  }
};

export default Modal;
