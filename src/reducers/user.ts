import { Reducer } from "redux";
//db
import localforage from "../db/localforage";
//interface
import { User, AgendaAction } from "../types/Agenda";

//로그인
export const SIGN_IN = "SIGN_IN";
//로그아웃
export const SIGN_OUT = "SIGN_OUT";
//이벤트추가
export const CLICK_ADD = "CLICK_ADD";
//환경설정
export const CLICK_CONFIG = "CLICK_CONFIG";
//테마색변경
export const CHANGE_THEME_COLOR = "CHANGE_THEME_COLOR";

const initialState: User = {
    name: "",
    isAddClicked: false,
    isConfigClicked: false,
    resource: {
        placeName: "",
        addressName: "",
        position: null,
    }
}


const user: Reducer<User, AgendaAction> = (state: User = initialState, action: AgendaAction) => {
    switch (action.type) {
        case SIGN_IN:
            localforage.setItem("NAME", action.payload);
            return {
                ...state,
                name: "",
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
                isConfigClicked: false,
                resource: {
                    ...action.payload
                }
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