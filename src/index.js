import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";

import "../styles/global.css";

const root = document.querySelector("#root");

ReactDom.render(<App/>,root);