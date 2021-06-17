//db
import localforage from "../db/localforage";
//interface
import { User, AgendaAction } from "../types/Agenda";

//로그인
export const SIGN_IN = "SIGN_IN";
//로그아웃
export const SIGN_OUT = "SIGN_OUT";
//일정추가
export const CLICK_ADD = "CLICK_ADD";
//환경설정
export const CLICK_CONFIG = "CLICK_CONFIG";

const initialState: User = {
    name: "",
    isAddClicked: false,
    isConfigClicked: false
}

const user = (state: User = initialState, action: AgendaAction) => {
    switch (action.type) {
        case SIGN_IN:
            localforage.setItem("NAME", action.payload);
            return {
                ...state,
                name: action.payload,
            };
        case SIGN_OUT:
            localforage.removeItem("NAME");
            window.location.href = "/";
            return {
                ...initialState
            };
        case CLICK_ADD:
            return {
                ...state,
                isAddClicked: !state.isAddClicked,
                isConfigClicked: false
            };
        case CLICK_CONFIG:
            return {
                ...state,
                isAddClicked: false,
                isConfigClicked: !state.isConfigClicked
            };
        default:
            return state;
    }
}

export default user;