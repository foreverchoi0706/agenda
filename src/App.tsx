import React, { useState } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import root from "./reducers/root";
import { BrowserRouter, Route } from "react-router-dom";
//pages
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import About from "./pages/About";
//components
import Layout from "./components/Layout";

const store = createStore(root);

const App = () => {
  const [isLogined, setIsLogined] = useState(true);

  return (
    <Provider store={store}>
      <BrowserRouter>
        {isLogined ? (
          <Route path="/" component={SignIn} exact />
        ) : (
          <Layout>
            <Route path="/home" component={Home} exact />
            <Route path="/about" component={About} exact />
          </Layout>
        )}
      </BrowserRouter>
    </Provider>
  );
};

export default App;
