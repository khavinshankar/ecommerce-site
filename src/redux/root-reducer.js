import { combineReducers } from "redux";

import UserReducer from "./user/user-reducer.js";

export default combineReducers({
  user: UserReducer,
});
