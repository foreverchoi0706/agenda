import React from "react";
import { memo } from "react";

import Top from "./Top";
import Intro from "./Intro";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Publishings from "./Publishings/Publishings";
import Footer from "./Footer";

import "../styles/Main.scss";

const Main = () => {
  return (
    <main className="Main">
      <div className="Main-contents">
        <section>
          <Top />
        </section>
        <section>
          <Intro />
        </section>
        <section>
          <Skills />
        </section>
        <section>
          <Projects />
        </section>
        <section>
          <Publishings />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </main>
  );
};

export default memo(Main);
