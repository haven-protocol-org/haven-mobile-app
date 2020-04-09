import { AUTH_USER, SWITCH_THEME } from "./types.js";

export const authenticateUser = auth => ({
  type: AUTH_USER,
  payload: auth
});

export const switchTheme = theme => ({
  type: SWITCH_THEME,
  payload: theme
});
