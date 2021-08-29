import { Reducer } from "redux";
import produce from "immer";
//interface
import { AgendaEvent, AgendaAction } from "../types/Agenda";

//이벤트추가
export const ADD_EVENT = "ADD_EVENT";
//이벤트리스트가져오기
export const GET_EVENT_LIST = "GET_EVENT_LIST";

const initialState: AgendaEvent = {
    title: "",
    start: new Date(),
    end: new Date(),
    resource: {
        placeName: "",
        addressName: "",
        position: null,
        tags: [],
    },
    list: []
}

const event: Reducer<AgendaEvent, AgendaAction> = (state: AgendaEvent = initialState, action: AgendaAction) => {
    switch (action.type) {
        case ADD_EVENT:
            if (!localStorage.getItem("EVENT_LIST")) localStorage.setItem("EVENT_LIST", JSON.stringify([]));
            state.list = JSON.parse(localStorage.getItem("EVENT_LIST")!.toString());
            state.list!.push(action.payload);
            localStorage.setItem("EVENT_LIST", JSON.stringify(state.list));
            window.location.reload();
            return state;
        case GET_EVENT_LIST:
            return {
                ...state,
                list: localStorage.getItem("EVENT_LIST") ? JSON.parse(localStorage.getItem("EVENT_LIST")!.toString()) : []
            }
        default:
            return state;
    }
}

export default event;