import React, { createContext, memo, useReducer } from "react";

import Main from "./Main";
import Navi from "./Navi";
import "../styles/App.scss";


const initialState = {};

const context = createContext();

const App = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <context.Provider value={{ state, dispatch }}>
        <Navi />
        <Main />
      
      </context.Provider>
    </div>
  );
};

export default memo(App);
