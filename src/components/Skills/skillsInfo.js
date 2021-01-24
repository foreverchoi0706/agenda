import html5 from "../../assets/skills/html5.png";
import css3 from "../../assets/skills/css3.png";
import javascript from "../../assets/skills/javascript.png";
import typescript from "../../assets/skills/typescript.png";
import express from "../../assets/skills/express.png";
import react from "../../assets/skills/react.png";
import reactNative from "../../assets/skills/reactNative.png";
import redux from "../../assets/skills/redux.png";
import sass from "../../assets/skills/sass.png";
import nodeJs from "../../assets/skills/nodeJs.png";

const skillsInfo = {
  skills: [
    {
      name: "Html5",
      src: html5,
      description: `기본적인 태그 및 속성을 알고 있고, 시맨틱한 태그에 대한 지식이 있습니다.`,
    },
    {
      name: "Css3",
      src: css3,
      description: `적절한 지정자를 사용하여 스타일을 적용하고 반응형에도 대응이 가능합니다.`,
    },
    {
      name: "Javscript",
      src: javascript,
      description: `Vanilla JS를 통한 Dom 조작부터 모던 JS문법까지 두루 파악하고 있으며 가장 좋아하는 언어입니다.`,
    },
    {
      name: "Typescript",
      src: typescript,
      description: `TS의 인터페이스와 타입 추론 기능에 큰 편의성을 느끼고 있으며 공부중입니다.`,
    },
    {
      name: "React",
      src: react,
      description: `여러 서드파티 라이브러리와 함께 사용하고 있으며 클래스 및 함수형 컴포넌트 두루 활용이 가능합니다.`,
    },

    {
      name: "Redux",
      src: redux,
      description: `효율적인 상태관리에 방법에 대해 고민하고 있습니다. thunk,saga를 활용한 사이드 이펙트 핸들링에도 관심이 많습니다.`,
    },
    {
      name: "Express",
      src: express,
      description: `Node.js 대표 웹 프레임워크인 Express를 통해 Web App을 작성할 수 있습니다.`,
    },
    {
      name: "Node.js",
      src: nodeJs,
      description: `웹 서버 구축 및 Npm,Yarn,Webpack,Babel 패키지매니저,모듈번들러,트랜스파일러의 역할을 이해하고 있으며 활용이 가능합니다.`,
    },
    {
      name: "Sass",
      src: sass,
      description: `css 전처리기인 sass에 지식이 있습니다. sass 특유의 nesting에 큰 매력을 느끼고 있습니다.`,
    },
  ],
};

export default skillsInfo;
