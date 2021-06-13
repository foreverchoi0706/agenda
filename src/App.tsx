import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./reducers/root";
import { Route, Switch, HashRouter, Redirect } from "react-router-dom";
//db
import localforage from "./db/localforage";
//pages
import Map from "./pages/Map";
import SignIn from "./pages/SignIn";
import Chart from "./pages/Chart";
import Calendar from "./pages/Calendar";
import Add from "./pages/Add";
//components
import Layout from "./components/Layout";

const App = () => {
  //일정추가여부
  const { isAdded } = useSelector((root: RootState) => root.user);
  //로그인여부
  const [isSigned, setIsSigned] = useState(false);

  useEffect(() => {
    localforage.getItem("NAME").then((result) => {
      setIsSigned(Boolean(result));
    });
  });

  return (
    <HashRouter>
      <Switch>
        {!isSigned && <Route path="/" component={SignIn} exact />}
        <Layout>
          <Route path="/map" component={Map} exact />
          <Route path="/calendar" component={Calendar} exact />
          <Route path="/chart" component={Chart} exact />
          <Redirect path="/" to="/map" />
        </Layout>
      </Switch>
      {isAdded && <Add />}
    </HashRouter>
  );
};

export default App;
