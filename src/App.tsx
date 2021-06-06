import React from "react";
import { BrowserRouter, Route, Switch, HashRouter } from "react-router-dom";
//pages
import Map from "./pages/Map";
import SignIn from "./pages/SignIn";
import Chart from "./pages/Chart";
import Calendar from "./pages/Calendar";
import Add from "./pages/Add";
//components
import Layout from "./components/Layout";
import { useSelector } from "react-redux";
import { RootState } from "./reducers/root";

const App = () => {
  const { isAdd } = useSelector((root: RootState) => root.user);

  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={SignIn} exact />
        <Layout>
          <Route path="/map" component={Map} exact />
          <Route path="/calendar" component={Calendar} exact />
          <Route path="/chart" component={Chart} exact />
        </Layout>
      </Switch>
      {isAdd && <Add />}
    </HashRouter>
  );
};

export default App;
