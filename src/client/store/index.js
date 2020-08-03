import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import thunkMiddleware from "redux-thunk";
import counterReducer from "./reducers/counter";

const store = createStore(counterReducer, composeWithDevTools());

export default store;
