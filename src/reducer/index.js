import { combineReducers } from "@reduxjs/toolkit";

import profileReducer from "../slices/profileSlice";
import projectReducer from "../slices/projectSlice";

const rootReducer = combineReducers({
    profile: profileReducer,
    project: projectReducer,
})

export default rootReducer;