import { Action } from "redux";

export interface User {
    name: "";
    isAddClicked: Boolean;
    isConfigClicked: Boolean;
}

export interface AgendaAction extends Action {
    payload: Object
}