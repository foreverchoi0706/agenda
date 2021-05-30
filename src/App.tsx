import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
//pages
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import About from "./pages/About";
//components
import Layout from "./components/Layout";

const App = () => {
  const [isLogined, setIsLogined] = useState(true);

  return (
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
  );
};

export default App;
