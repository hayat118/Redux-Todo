import { combineReducers } from "react-redux";
import { operationsReducer } from "./todoapp/reducers/operations";

export const rootReducers = combineReducers({
  operationsReducer,
  // more reducer can be added according to requirement
});
