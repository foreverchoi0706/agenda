import { Action } from "redux";
import { Event } from "react-big-calendar";

/** @summary 유저&상호작용 **/
export interface User {
    nickName: string;
    isAddClicked: Boolean;
    isConfigClicked: Boolean;
    resource: {
        placeName?: string,
        addressName?: string
        position?: any,
    } | null;
    themeColor: string;
}

/** @summary 이벤트 */
export interface AgendaEvent extends Event {
    title: string;
    start: Date;
    end: Date;
    resource: {
        placeName: string | undefined,
        addressName: string | undefined
        position: any | undefined,
        tags: Array<string> | undefined
    };
    list? : Array<Event>
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
    payload: any
}