import {RootReducerState} from "../../root-reducer";
import createAction, {ReducerActionInterface} from "../reducer.utils";

export interface UserModel {
    id: number;
    name: string;
    uniqueIdentifier: string;
}

/* use in the selectors */
const INITIAL_STATE: UserModel = {
    id: 0,
    name: "",
    uniqueIdentifier: "",
}

/* action types */
export const UserActionTypes = {
    SET_USER: "SET_USER",
    SET_NAME: "SET_NAME"
}

/* reducer */
export const userReducer = (state: UserModel = INITIAL_STATE, action: ReducerActionInterface) => {
    const {type, payload} = action;

    switch (type) {
        case UserActionTypes.SET_USER:
            return {
                ...state,
                ...payload
            };
        case UserActionTypes.SET_NAME:
            return {
                ...state,
                name: payload
            };

        default:
            return state;
    }
};

/* selectors */
export const getCurrentUser = (state: RootReducerState) => state.user;

/* Actions */
export const setName = (name: string) => createAction({
    type: "SET_NAME",
    payload: name
})

export const setUser = (user: UserModel) => createAction({
    type: "SET_USER",
    payload: user
})