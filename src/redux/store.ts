import { createStore, combineReducers, applyMiddleware } from "redux";
const thunkMiddleware = require("redux-thunk").thunk;
import { composeWithDevTools } from "@redux-devtools/extension";

import cartItems from "./reducers/cartItem";

const reducers = combineReducers({
  cartItems: cartItems,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
