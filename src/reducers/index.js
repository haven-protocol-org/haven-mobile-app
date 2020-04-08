import { combineReducers } from "redux";
import authenticateUser from "./authenticateUser.js";

const applicationReducer = combineReducers({
  authenticateUser
});

export default applicationReducer;
