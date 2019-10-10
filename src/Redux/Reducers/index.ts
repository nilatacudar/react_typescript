import { combineReducers } from "redux";
import catalog from "./catalog";
import basket from "./basket";

export const rootReducer = combineReducers({ catalog, basket });

export type AppStateType = ReturnType<typeof rootReducer>;
