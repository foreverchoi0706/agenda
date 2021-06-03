import React from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
//pages
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import About from "./pages/About";
//components
import Layout from "./components/Layout";
import { useSelector } from "react-redux";

const App = () => {
  const { isLogined } = useSelector((root: any) => root.user);

  return (
    <BrowserRouter>
      <Route path="/" component={SignIn} exact />
      <Layout>
        <Route path="/home" component={Home} exact />
        <Route path="/about" component={About} exact />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
