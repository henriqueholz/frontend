import { combineReducers } from "redux";

// Import all reducers
import galleryDataReducer from "./galleryDataReducer";

const reducers = combineReducers({
    galleryData: galleryDataReducer
})

export default reducers;