import { combineReducers } from "redux";
import cookCircleReducer from "./cookCircle";
import questAnswers from "./questAnswers/index"
export default combineReducers({
    cookCircle: cookCircleReducer,
    questAnswers
})