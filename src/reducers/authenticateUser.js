import { AUTH_USER } from "../actions/types.js";

const initialState = false;

export default function(state = initialState, action) {
  console.log("REDUCER PAGE");
  switch (action.type) {
    case AUTH_USER:
      return { ...state };
    default:
      return state;
  }
}
