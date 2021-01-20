import watcher from "./imgs/projects/watcher.png";
import todo_web from "./imgs/projects/todo_web.png";
import aquarium from "./imgs/projects/aquarium.png";
import log_of_legend from "./imgs/projects/log_of_legend.png";
import for_you from "./imgs/projects/for_you.png";

const info = {
  projects: [
    {
      name: "Todo Web",
      src: todo_web,
      skills: [
        "HTML5",
        "CSS3",
        "JAVASCRIPT",
        "REACT",
        "REDUX",
        "SASS",
        "BROWSER STORAGE",
        "WHEATER API",
      ],
      description: `투두 리스트를 REACT로 구현하였습니다. 
          상태관리 라이브러리인 REDUX와 BROWSER STORAGE를 사용하여 데이터를 관리하였고 
          테마컬러를 정할 수 있도록 하였으며 브라우저를 닫아도 컬러가 유지되게끔 하였습니다.
          위치기반 WHEATER API를 이용하여 현재위치 및 날씨,온도 정보를 제공하며 
          스타일은 CSS 전처리기인 SASS를 사용하였습니다.`,
      link: "https://foreverchoi0706.github.io/todo_web/",
      git: "https://github.com/foreverchoi0706/todo_web",
    },
    {
      name: "Wacther",
      src: watcher,
      skills: [
        "HTML5",
        "CSS3",
        "JAVASCRIPT",
        "REACT",
        "REDUX",
        "REDUX-THUNK",
        "REDUX-LOGGER",
        "REACT-ROUTER-DOM",
        "SASS",
        "NODEJS",
        "AXIOS",
        "MOVIE-API",
      ],
      description: `영화 검색 웹 사이트 WATCHER를 구현하였습니다.
          상태관리 라이브러리인 REDUX를 사용하였고 AXIOS를 통해 API와 통신하였습니다. 
          REACT-ROUTER-DOM으로 라우팅하였으며 사이트이펙트는 REDUX-THUNK를 사용하여 핸들링하였습니다.
          스타일은 CSS 전처리기인 SASS를 사용하였습니다.`,
      link: "https://foreverchoi0706.github.io/watcher/",
      git: "https://github.com/foreverchoi0706/watcher",
    },
    {
      name: "aquarium",
      src: aquarium,
      skills: ["HTML5", "CSS3", "JAVASCRIPT"],
      description: `바닐라 자바스크립트를 이용하여 아이들을 위한 간단한 수족간 웹사이트를 만들었습니다.
            물고기는 난수를 생성하여 자동으로 움직이도록 하였으며, 손(마우스)을 대면 무작위 위치로 이동하게 하였습니다.`,
      link: "https://foreverchoi0706.github.io/js_basic/aquarium",
      git: "https://github.com/foreverchoi0706/js_basic",
    },

    {
      name: "Log Of Legend",
      src: log_of_legend,
      skills: [
        "HTML5",
        "CSS3",
        "JAVASCRIPT",
        "REACT",
        "REDUX",
        "REDUX-SAGA",
        "STYLED-COMPONENTS",
        "AXIOS",
        "EXPRESS",
        "NODEJS",
        "HEROKU",
        "RIOT-API",
      ],
      description: `유명 게임의 전적 검색 사이트를 구현하였습니다. UI는 REACT, 상태관리는 REDUX를 사용하였으며 백엔드는 EXPRESS를 사용, HEROKU로 배포하였습니다.
      백엔드로부터 서버 상태와 게임 정보를 받아올 수 있으며  REDUX-SAGA를 통해 사이트 이펙트를 관리하였습니다.
      `,
      link: "https://foreverchoi0706.github.io/log-of-legend/",
      git: "https://github.com/foreverchoi0706/log-of-legend",
    },

    {
      name: "For you",
      src: for_you,
      skills: [
        "JAVA",
        "CSS3",
        "JAVASCRIPT",
        "SPRING LEGACY",
        "ORACLE",
        "TOMCAT",
      ],
      description: `
      `,
      link: "https://www.youtube.com/watch?v=OIqNYLeudTQ",
      git: "",
    },
  ],
};

export default info;
