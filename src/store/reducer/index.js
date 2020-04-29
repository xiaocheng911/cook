import { combineReducers } from "redux";
import cookCircleReducer from "./cookCircle";
export default combineReducers({
    cookCircle: cookCircleReducer
})