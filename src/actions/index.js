import { AUTH_USER } from "./types.js";

export const authenticateUser = () => {
  console.log("ACTION PAGE");
  return { type: AUTH_USER, payload: true };
};
