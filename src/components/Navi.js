import React from "react";
import { memo } from "react";

import "../styles/Navi.scss";

const Navi = () => {
    return <header className="Navi">
        <ul>
            <li>
                Navi1
            </li>
            <li>
                Navi1
            </li> <li>
                Navi1
            </li> <li>
                Navi1
            </li>

        </ul>
    </header>
}

export default memo(Navi);