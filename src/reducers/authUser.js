import { AUTH_USER } from "../actions/types.js";

const INITIAL_STATE = false;

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER:
      return action.payload;
    default:
      return state;
  }
}
