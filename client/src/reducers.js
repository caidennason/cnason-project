import { combineReducers } from "redux";
import establishmentsReducer from "./features/Establishments/establishmentsSlice";
import userReducer from "./features/Users/userSlice";

const rootReducer = combineReducers({
  establishments: establishmentsReducer,
  signups: userReducer,
});

export default rootReducer;