import React, { memo } from "react";

import Main from "./Main";
import Navi from "./Navi";
import "../styles/App.scss";

const App = () => {
    return <div className="App">
        <Navi />
        <Main/>
    </div>

};

export default memo(App);