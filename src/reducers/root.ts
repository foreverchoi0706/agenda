import { combineReducers } from "redux";
//reducers
import user from "./user";

const root = combineReducers({
    user,
});

export default root;