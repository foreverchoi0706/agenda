import { Reducer } from "redux";
//db
import localforage from "../db/localforage";
//interface
import { AgendaEvent, AgendaAction } from "../types/Agenda";

//이벤트추가버튼클릭
export const CLICK_ADD = "CLICK_ADD";
//이벤트추가
export const ADD_EVENT = "ADD_EVENT";

const initialState: AgendaEvent = {
    title: "",
    start: new Date(),
    end: new Date(),
    resource: {
        placeName: "",
        addressName: "",
        position: null,
    },
}

const event: Reducer<AgendaEvent, AgendaAction> = (state: AgendaEvent = initialState, action: AgendaAction) => {
    switch (action.type) {
        case ADD_EVENT:
            localforage.getItem("EVENT").then((value: any) => {
                if (!value) {
                    localforage.setItem("EVENT", []);
                } else {
                    localforage.setItem("EVENT", value.concat(action.payload));
                }
            });
        default:
            return state;
    }
}

export default event;