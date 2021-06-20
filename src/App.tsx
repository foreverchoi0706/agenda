import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
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
import Config from "./pages/Config";
//components
import Layout from "./components/Layout";
//reducer
import { GET_THEME_COLOR } from "./reducers/user";

const App = () => {
  //이벤트추가,설정클릭여부
  const { isAddClicked, isConfigClicked } = useSelector(
    (root: RootState) => root.user,
    shallowEqual
  );

  const dispatch = useDispatch();

  //로그인여부
  const [isSigned, setIsSigned] = useState(false);

  useEffect(() => {
    localforage.getItem("NAME").then((value) => {
      setIsSigned(Boolean(value));
    });
    localforage.getItem("THEME_COLOR").then((value) => {
      dispatch({ type: GET_THEME_COLOR, payload: value });
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
      {isAddClicked && <Add />}
      {isConfigClicked && <Config />}
    </HashRouter>
  );
};

export default App;
