import { Action } from "redux";
//interface
import User from "../types/User";

export const SIGN_IN = "SIGN_IN";

const initialState: User = {
    isLogined: false
}

const user = (state: User = initialState, action: Action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                isLogined: true
            };
        default:
            return state;
    }
}

export default user;