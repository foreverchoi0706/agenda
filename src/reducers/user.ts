//db
import localforage from "../db/localforage";
//interface
import { User, AgendaAction } from "../types/User";

//로그인
export const SIGN_IN = "SIGN_IN";
//로그아웃
export const SIGN_OUT = "SIGN_OUT";
//일정추가
export const CLICK_ADD = "CLICK_ADD";

const initialState: User = {
    name: "",
    isAdded: false,
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
            window.location.href="/";
            return {
                ...initialState
            };
        case CLICK_ADD:
            console.log(action.payload);
            return {
                ...state,
                isAdded: !state.isAdded
            };
        default:
            return state;
    }
}

export default user;