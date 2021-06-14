import React, { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import localforage from "../db/localforage";
//reducers
import { CLICK_ADD, SIGN_OUT } from "../reducers/user";

//assets
import map from "../assets/map.png";
import calendar from "../assets/calendar.png";
import bargraph from "../assets/bargraph.png";
import alarmclock from "../assets/alarmclock.png";
import adjustments from "../assets/adjustments.png";

interface LayoutPorps {
  children: ReactNode;
}

console.log(calendar);

const Layout = ({ children }: LayoutPorps) => {
  const dispatch = useDispatch();

  const history = useHistory();

  const push = (path: string = "") => history.push(`/${path}`);

  const signOut = () => {
    dispatch({
      type: SIGN_OUT,
    });
  };

  return (
    <React.Fragment>
      <header className="hidden bg-blue-500 sm:block">
        <nav className="h-full flex flex-col justify-between relative">
          <div className="flex flex-col">
            <h2 className="text-center text-white font-bold">A</h2>
            <h2 className="text-center text-white font-bold">G</h2>
            <h2 className="text-center text-white font-bold">E</h2>
            <h2 className="text-center text-white font-bold">N</h2>
            <h2 className="text-center text-white font-bold">D</h2>
            <h2 className="text-center text-white font-bold">A</h2>
            <img
              className="agenda-menu"
              src={map}
              onClick={() => push("map")}
            />
            <img
              className="agenda-menu"
              src={calendar}
              onClick={() => push("calendar")}
            />
            <img
              className="agenda-menu"
              src={bargraph}
              onClick={() => push("chart")}
            />
            <img
              className="agenda-menu"
              src={alarmclock}
              onClick={() => dispatch({ type: CLICK_ADD })}
            />
          </div>
          <img
            className="agenda-menu"
            src={adjustments}
            onClick={() => dispatch({ type: CLICK_ADD })}
          />
        </nav>
      </header>
      <div className="flex-grow">{children}</div>
    </React.Fragment>
  );
};

export default Layout;
