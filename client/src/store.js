import { configureStore } from "@reduxjs/toolkit";
import establishmentsReducer from "./features/Establishments/establishmentsSlice";
import reviewsReducer from "./features/Reviews/reviewsSlice";
import userReducer from "./features/Users/userSlice";

const store = configureStore({
    reducer: {
        establishments: establishmentsReducer,
        reviews: reviewsReducer,
        signups: userReducer
    }
})

export default store;