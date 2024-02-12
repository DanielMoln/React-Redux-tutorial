import {RootReducerState} from "../../root-reducer";
import createAction from "../reducer.utils";

export interface ReducerActionInterface {
    type: string;
    payload: any;
}

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

/* reducer */
export const userReducer = (state: UserModel = INITIAL_STATE, action: ReducerActionInterface) => {
    const {type, payload} = action;

    switch (type) {
        case "SET_USER":
            return {
                ...state,
                ...payload
            };

        default:
            return state;
    }
};

/* selectors */
export const getCurrentUser = (state: RootReducerState) => state.user;

/* Actions */
export const setUser = (user: UserModel) => createAction({
    type: "SET_USER",
    payload: user
})