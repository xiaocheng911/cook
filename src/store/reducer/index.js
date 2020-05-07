import { combineReducers } from "redux";

import cookStudy from "./cookStudy";
import cookCircleReducer from "./cookCircle";
import questAnswers from "./questAnswers/index";

export default combineReducers({
    cookStudy,
    cookCircle: cookCircleReducer,
    questAnswers
})