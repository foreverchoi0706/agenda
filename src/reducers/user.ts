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
//테마색
export const GET_THEME_COLOR = "GET_THEME_COLOR";
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
    },
    themeColor: "",
}


const user: Reducer<User, AgendaAction> = (state: User = initialState, action: AgendaAction) => {
    switch (action.type) {
        case SIGN_IN:
            localforage.setItem("NAME", action.payload);
            return {
                ...state,
                name: action.payload,
            };
        case SIGN_OUT:
            Promise.all([
                localforage.removeItem("NAME"), 
                localforage.removeItem("EVENT"), 
                localforage.removeItem("THEME_COLOR")
            ]);
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
        case GET_THEME_COLOR:
            return {
                ...state,
                themeColor: action.payload
            };
        case CHANGE_THEME_COLOR:
            localforage.setItem("THEME_COLOR", action.payload);
            return {
                ...state,
                themeColor: action.payload
            };
        default:
            return state;
    }
}

export default user;