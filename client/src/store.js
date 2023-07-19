import { configureStore } from "@reduxjs/toolkit";
import establishmentsReducer from "./features/Establishments/establishmentsSlice";
import userReducer from "./features/Users/userSlice";

const store = configureStore({
    reducer: {
        establishments: establishmentsReducer,
        signups: userReducer
    }
})

export default store;