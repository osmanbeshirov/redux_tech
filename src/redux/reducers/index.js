import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { profileReducer } from "./profileReducer";

const rootReducer = combineReducers({
    todo: todoReducer,
    profile: profileReducer,
})

export default rootReducer;
