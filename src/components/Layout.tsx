import React, { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
//reducers
import { CLICK_ADD } from "../reducers/user";

//assets
// import setting from "../assets/setting.png";

interface LayoutPorps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutPorps) => {
  const dispatch = useDispatch();

  const history = useHistory();

  const push = (path: string = "") => history.push(`/${path}`);

  return (
    <React.Fragment>
      <header className="bg-blue-500">
        <nav className="h-full flex flex-col justify-between relative">
          <div className="flex flex-col">
            <h2 className="text-center text-white font-bold">A</h2>
            <h2 className="text-center text-white font-bold">G</h2>
            <h2 className="text-center text-white font-bold">E</h2>
            <h2 className="text-center text-white font-bold">N</h2>
            <h2 className="text-center text-white font-bold">D</h2>
            <h2 className="text-center text-white font-bold">A</h2>
            <button className="agenda-menu" onClick={() => push("map")}>
              지도
            </button>
            <button className="agenda-menu" onClick={() => push("calendar")}>
              달력
            </button>
            <button className="agenda-menu" onClick={() => push("chart")}>
              분석
            </button>
            <button
              className="agenda-menu"
              onClick={() => dispatch({ type: CLICK_ADD })}
            >
              추가
            </button>
          </div>
          <button className="agenda-menu" onClick={() => push("config")}>
            설정
          </button>
        </nav>
      </header>
      <div className="flex-grow">{children}</div>
    </React.Fragment>
  );
};

export default Layout;
