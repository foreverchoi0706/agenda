import { Reducer } from "redux";
//interface
import { User, AgendaAction } from "../types/Agenda";

//초기화
export const INIT = "INIT";
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
//현위치가져오기
export const SET_RESOURCE = "SET_RESOURCE";

const initialState: User = {
    nickName: "",
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
        case INIT:
            const themeColor = localStorage.getItem("THEME_COLOR") || "red-500";
            const nickName = localStorage.getItem("NICK_NAME");
            return {
                ...state,
                nickName,
                themeColor
            };
        case SIGN_IN:
            localStorage.setItem("NICK_NAME", action.payload);
            return {
                ...state,
                nickName: action.payload,
            };
        case SIGN_OUT:
            localStorage.removeItem("NICK_NAME");
            localStorage.removeItem("EVENT_LIST");
            localStorage.removeItem("THEME_COLOR");
            window.location.href = "/";
            return {
                ...initialState
            };
        case SET_RESOURCE:
            return {
                ...state,
                resource: {
                    ...action.payload
                }
            }
        case CLICK_ADD:
            return {
                ...state,
                isAddClicked: !state.isAddClicked,
                isConfigClicked: false,
                //위치정보가{}이면기존것을할당
                resource: action.payload && Object.keys(action.payload).length != 0 ? {
                    ...action.payload
                } : state.resource
            };
        case CLICK_CONFIG:
            return {
                ...state,
                isAddClicked: false,
                isConfigClicked: !state.isConfigClicked
            };
        case CHANGE_THEME_COLOR:
            localStorage.setItem("THEME_COLOR", action.payload);
            return {
                ...state,
                themeColor: action.payload
            };
        default:
            return state;
    }
}

export default user;