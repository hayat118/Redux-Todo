import { combineReducers } from "redux";
import { operations } from "./todoapp/reducers/operations";

export const rootReducers = combineReducers({
  operations,
  // more reducer can be added according to requirement
});
