import React from "react";
import ReactDom from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import root from "./reducers/root";
import App from "./App";
import "../styles/global.css";

const store = createStore(root);

const agenda = document.querySelector("#agenda");

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  agenda
);
