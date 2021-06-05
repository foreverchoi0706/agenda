import React from "react";
import { BrowserRouter, Route, Switch, HashRouter } from "react-router-dom";
//pages
import Map from "./pages/Map";
import SignIn from "./pages/SignIn";
import About from "./pages/About";
import Calendar from "./pages/Calendar";
//components
import Layout from "./components/Layout";
import { useSelector } from "react-redux";

const App = () => {
  const { isLogined } = useSelector((root: any) => root.user);

  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={SignIn} exact />
        <Layout>
          <Route path="/home" component={Map} exact />
          <Route path="/about" component={About} exact />
          <Route path="/calendar" component={Calendar} exact />
        </Layout>
      </Switch>
    </HashRouter>
  );
};

export default App;
