import React, { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt,
  faCalendarAlt,
  faList,
  faCogs,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import localforage from "../db/localforage";
//reducers
import { CLICK_ADD, CLICK_CONFIG } from "../reducers/user";

interface LayoutPorps {
  children: ReactNode;
}

const iconStyle: React.CSSProperties = {
  fontSize: "1.5rem",
  margin: "1rem 0.5rem",
  cursor: "pointer",
};

const Layout = ({ children }: LayoutPorps) => {
  const dispatch = useDispatch();

  const history = useHistory();

  const push = (path: string = "") => history.push(`/${path}`);

  return (
    <React.Fragment>
      <header className="hidden bg-blue-500 h-full sm:block">
        <nav className="h-full flex flex-col justify-between relative">
          <div className="flex flex-col items-center text-white text-center font-bold">
            <h2>A</h2>
            <h2>G</h2>
            <h2>E</h2>
            <h2>N</h2>
            <h2>D</h2>
            <h2>A</h2>
            <FontAwesomeIcon
              icon={faMapMarkedAlt}
              style={iconStyle}
              onClick={() => push("map")}
            />
            <FontAwesomeIcon
              icon={faCalendarAlt}
              style={iconStyle}
              onClick={() => push("calendar")}
            />
            <FontAwesomeIcon
              icon={faList}
              style={iconStyle}
              onClick={() => push("chart")}
            />
            <FontAwesomeIcon
              icon={faPen}
              style={iconStyle}
              onClick={() => dispatch({ type: CLICK_ADD })}
            />
          </div>
          <FontAwesomeIcon
            className="text-white"
            icon={faCogs}
            style={iconStyle}
            onClick={() => dispatch({ type: CLICK_CONFIG })}
          />
        </nav>
      </header>
      <div className="flex-grow">{children}</div>
    </React.Fragment>
  );
};

export default Layout;
