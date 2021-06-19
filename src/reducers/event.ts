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

const event = (state: AgendaEvent = initialState, action: AgendaAction) => {
    switch (action.type) {
        case ADD_EVENT:
            return {

            }
        default:
            return state;
    }
}

export default event;