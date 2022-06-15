import { createStore, combineReducers } from "redux";

import interviewPage from "./interviewPage/reducer";

export default function configureStore(initialState) {
  const reducer = combineReducers({
    interviewPage,
  });
  const store = createStore(reducer, initialState);
  return store;
}
