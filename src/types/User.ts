import { Action } from "redux";

export interface User {
    name: "";
    isAdded: Boolean;
}

export interface AgendaAction extends Action {
    payload: Object
} 