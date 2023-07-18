import { combineReducers } from "redux";
import establishmentsReducer from "./features/Establishments/establishmentsSlice";
import signUpReducer from "./features/Users/signupSlice";

const rootReducer = combineReducers({
  establishments: establishmentsReducer,
  signups: signUpReducer,
});

export default rootReducer;