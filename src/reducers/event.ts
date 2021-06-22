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
        detail: "",
        tags: [],
    },
}

const event: Reducer<AgendaEvent, AgendaAction> = (state: AgendaEvent = initialState, action: AgendaAction) => {
    switch (action.type) {
        case ADD_EVENT:
            localforage.getItem("EVENT").then((value: any) => {
                console.log(value);
                if (!value) {
                    localforage.setItem("EVENT", [action.payload]);
                    alert("등록되었습니다.");
                    window.location.reload();
                } else {
                    localforage.setItem("EVENT", value.concat(action.payload));
                    alert("등록되었습니다.");
                    window.location.reload();
                }
            });
        default:
            return state;
    }
}

export default event;