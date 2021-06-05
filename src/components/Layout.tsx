import React, { ReactNode } from "react";
import { useHistory } from "react-router-dom";

interface LayoutPorps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutPorps) => {
  const history = useHistory();

  const push = (path: string = "") => history.push(`/${path}`);

  return (
    <React.Fragment>
      <header className="bg-blue-500">
        <nav className="h-full flex flex-col justify-between relative">
          <div className="flex flex-col">
            <button className="agenda-menu">AG</button>
            <button className="agenda-menu" onClick={() => push("home")}>
              지도
            </button>
            <button className="agenda-menu" onClick={() => push("calendar")}>
              달력
            </button>
            <button className="agenda-menu" onClick={() => push("about")}>
              추가
            </button>
            <button className="agenda-menu" onClick={() => push("about")}>
              분석
            </button>
          </div>
          <button className="agenda-menu" onClick={() => push("about")}>
            설정
          </button>
        </nav>
      </header>
      <body className="flex-grow">{children}</body>
    </React.Fragment>
  );
};

export default Layout;
