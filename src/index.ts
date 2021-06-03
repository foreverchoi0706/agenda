import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import "../styles/global.css";

const agenda = document.querySelector("#agenda");

ReactDom.render(React.createElement(App), agenda);
