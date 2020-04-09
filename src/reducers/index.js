import { combineReducers } from "redux";
import authUser from "./authUser";
import currentTheme from "./currentTheme";

const rootReducer = combineReducers({
  authUser,
  currentTheme
});

export default rootReducer;
