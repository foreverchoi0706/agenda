import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { RootState } from "./reducers/root";
import { Route, Switch, HashRouter, Redirect } from "react-router-dom";
//pages
import Map from "./pages/Map";
import SignIn from "./pages/SignIn";
import Overview from "./pages/Overview";
import Calendar from "./pages/Calendar";
import Add from "./pages/Add";
import Config from "./pages/Config";
//components
import Layout from "./components/Layout";
//reducer
import { INIT } from "./reducers/user";

const App = () => {
  //이벤트추가,설정클릭여부
  const { isAddClicked, isConfigClicked } = useSelector(
    (root: RootState) => root.user,
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: INIT });
  }, []);

  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={SignIn} exact />
        <Layout>
          <Route path="/map" component={Map} exact />
          <Route path="/calendar" component={Calendar} exact />
          <Route path="/overview" component={Overview} exact />
          <Redirect path="/" to="/map" />
        </Layout>
      </Switch>
      {isAddClicked && <Add />}
      {isConfigClicked && <Config />}
    </HashRouter>
  );
};

export default App;
