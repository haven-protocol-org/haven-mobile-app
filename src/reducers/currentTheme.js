import { SWITCH_THEME } from "../actions/types.js";

const INITIAL_STATE = "dark";

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SWITCH_THEME:
      return action.payload;
    default:
      return state;
  }
}
