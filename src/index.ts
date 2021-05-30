import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import "../styles/global.css";

const root = document.querySelector("#root");

ReactDom.render(React.createElement(App), root);
