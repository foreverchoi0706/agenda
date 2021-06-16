import { combineReducers } from "redux";
//reducers
import user from "./user";
import event from "./event";

const root = combineReducers({
    user,
    event,
});

export type RootState = ReturnType<typeof root>;

export default root;