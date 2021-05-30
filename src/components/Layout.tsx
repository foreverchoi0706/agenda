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
      <header className="bg-green-400">
        <nav className="flex flex-col relative">
          <span onClick={() => push()}>home</span>
          <span onClick={() => push("about")}>map</span>
          <span onClick={() => push("about")}>calendar</span>
          <button className="absolute top-50vh left-10 bg-blue-400">+</button>
        </nav>
      </header>
      <body className="flex-grow bg-red-400">{children}</body>
    </React.Fragment>
  );
};

export default Layout;
