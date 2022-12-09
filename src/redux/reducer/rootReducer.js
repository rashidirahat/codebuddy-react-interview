import { combineReducers } from "redux";
import formReducer from "./formReducer";

const appReducer = combineReducers({ formReducer });

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
