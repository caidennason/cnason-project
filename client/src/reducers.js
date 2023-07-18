import { combineReducers } from "redux";
import establishmentsReducer from "./features/Establishments/establishmentsSlice";

const rootReducer = combineReducers({
  establishments: establishmentsReducer,
//   books: booksReducer,
});

export default rootReducer;