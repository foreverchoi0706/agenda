import ReactDOM from "react-dom";
import App from "./App";

const heightState = {
  windowHeight: 0, //브라우저 높이
  bodyHeight: document.body.scrollHeight, //웹 높이
  nowHeight: 0, //스크롤 값
};

window.addEventListener("scroll", (e) => {
  heightState.windowHeight = window.innerHeight;
  heightState.nowHeight = window.scrollY;
});

ReactDOM.render(
  <App heightState={heightState} />,
  document.getElementById("root")
);
