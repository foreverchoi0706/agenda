import { Action } from "redux";

/** @summary 유저&상호작용 **/
export interface User {
    name: "";
    isAddClicked: Boolean;
    isConfigClicked: Boolean;
}

/** @summary 날씨정보 **/
export interface WeatherInfo {
    name?: string,
    visibility?: number,
    main: {
        temp?: number;
        temp_max?: number,
        temp_min?: number,
        humidity?: number,
        feels_like?: number,
    };
    weather: Array<any>
}

/** @summary 액션 **/
export interface AgendaAction extends Action {
    payload: Object
}