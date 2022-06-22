import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { profileReducer } from "./profileReducer";
import { productReducer } from "./productReducer";



const rootReducer = combineReducers({
    todo: todoReducer,
    profile: profileReducer,
    product: productReducer,
    
})

export default rootReducer;
