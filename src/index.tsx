import React from "react";
import ReactDom from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

import root from "./reducers/root";
import App from "./App";
import "../styles/global.css";

const store = createStore(root, applyMiddleware());

const agenda = document.querySelector("#agenda");

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  agenda
);
