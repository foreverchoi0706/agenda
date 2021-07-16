import React, { ReactNode, useEffect, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt,
  faCalendarAlt,
  faList,
  faCogs,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
//reducers
import { RootState } from "../reducers/root";
import { CLICK_ADD, CLICK_CONFIG } from "../reducers/user";

interface LayoutPorps {
  children: ReactNode;
}

const iconStyle: React.CSSProperties = {
  margin: "1rem 0.5rem",
};

const Layout = ({ children }: LayoutPorps) => {
  const { resource, themeColor } = useSelector((root: RootState) => root.user, shallowEqual);

  const [state, setState] = useState<any | null>(null);

  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    setState({
      ...resource
    })
  }, [resource])

  const push = (path: string = "/") => history.push(`/${path}`);

  return (
    <React.Fragment>
      <header className={`bg-${themeColor} h-full sm:block`}>
        <nav className="h-full flex flex-col justify-between relative">
          <div className="flex flex-col items-center text-white text-center font-bold">
            <h2>A</h2>
            <h2>G</h2>
            <h2>E</h2>
            <h2>N</h2>
            <h2>D</h2>
            <h2>A</h2>
            <ul>
              <li className="cursor-pointer" onClick={() => push("map")}>
                <FontAwesomeIcon
                  className="text-base sm:text-2xl"
                  icon={faMapMarkedAlt}
                  style={iconStyle}
                />
              </li>
              <li className="cursor-pointer" onClick={() => push("calendar")}>
                <FontAwesomeIcon
                  className="text-base sm:text-2xl"
                  icon={faCalendarAlt}
                  style={iconStyle}
                />
              </li>
              <li className="cursor-pointer" onClick={() => push("overview")}>
                <FontAwesomeIcon
                  className="text-base sm:text-2xl"
                  icon={faList}
                  style={iconStyle}
                />
              </li>
              <li className="cursor-pointer" onClick={() => dispatch({
                type: CLICK_ADD,
                payload: { ...state }
              })}>
                <FontAwesomeIcon
                  className="text-base sm:text-2xl"
                  icon={faPen}
                  style={iconStyle}

                />
              </li>
              <li className="cursor-pointer" onClick={() => dispatch({ type: CLICK_CONFIG })}>
                <FontAwesomeIcon
                  className="text-base sm:text-2xl text-white"
                  icon={faCogs}
                  style={iconStyle}
                />
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div className="flex-grow">{children}</div>
    </React.Fragment>
  );
};

export default Layout;
