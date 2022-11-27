import { combineReducers } from "redux";

// Import all reducers
import dummyDataReducer from "./dummyDataReducer";

const reducers = combineReducers({
    dummyData: dummyDataReducer
})

export default reducers;