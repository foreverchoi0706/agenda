import { Action } from "redux";

//interfaces
export interface User {
    name: "";
    isAddClicked: Boolean;
    isConfigClicked: Boolean;
}

export interface WeatherInfo {
    main: {
        temp: number;
    };
}
//actions
export interface AgendaAction extends Action {
    payload: Object
}