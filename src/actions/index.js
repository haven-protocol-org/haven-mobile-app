import { AUTH_USER } from "./types.js";

export const authenticateUser = auth => ({
  type: AUTH_USER,
  payload: auth
});
