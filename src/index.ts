import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import root from "./reducers/root";

import "../styles/global.css";

const agenda = document.querySelector("#agenda");

const store = createStore(root);

const app = () => {
    return <Provider store={ store }> <App/></Provider >
}


ReactDom.render(React.createElement(App), agenda);
