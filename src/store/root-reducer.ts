import { combineReducers } from "redux";
import {UserModel, userReducer} from "./reducers/user/user.reducer";

export interface RootReducerState
{
    user: UserModel,
}

export const rootReducer: any = combineReducers({
    user: userReducer,
});