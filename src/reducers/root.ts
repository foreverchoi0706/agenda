import { combineReducers } from "redux";
//reducers
import user from "./user";

const root = combineReducers({
    user,
});

export type RootState = ReturnType<typeof root>;

export default root;