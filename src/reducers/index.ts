import { combineReducers } from "redux";
import galleryDataReducer from "./galleryDataReducer";

const reducers = combineReducers({
    galleryData: galleryDataReducer
})

export default reducers;