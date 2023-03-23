import { createStore } from "react-redux";
import { rootReducers } from "./rootReducer";

export const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
