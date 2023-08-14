import { configureStore } from "@reduxjs/toolkit";
import establishmentsReducer from "./features/Establishments/establishmentsSlice";
import reviewsReducer from "./features/Reviews/reviewsSlice";
import userReducer from "./features/Users/userSlice";
import commentsReducer from "./features/Comments/commentsSlice";

const store = configureStore({
    reducer: {
        establishments: establishmentsReducer,
        reviews: reviewsReducer,
        users: userReducer, 
        comments: commentsReducer
    }
})

export default store;