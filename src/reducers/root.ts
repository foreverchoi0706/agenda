import { combineReducers } from "redux";
//reducers
import user from "./user";
import event from "./event";
import wheather from "./wheather";

const root = combineReducers({
    user,
    event,
    wheather,
});

export type RootState = ReturnType<typeof root>;

export default root;