import { Action } from "redux";
//interface
import User from "../types/User";

export const SIGN_IN = "SIGN_IN";

export const CLICK_ADD = "CLICK_ADD";

const initialState: User = {
    isLogined: false,
    isAdd: false,
}

const user = (state: User = initialState, action: Action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                isLogined: true
            };
        case CLICK_ADD:
            return {
                ...state,
                isAdd: !state.isAdd
            };
        default:
            return state;
    }
}

export default user;