import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./components/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
