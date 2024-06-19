import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../features/counter-slice";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
