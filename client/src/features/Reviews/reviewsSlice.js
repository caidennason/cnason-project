import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

const reviewsSlice = createSlice({
    name: "reviews", 
    initialState:{
        entities: [],
        status: "idle",
    } ,
    reducers: {
        testingFromSlice(state, action){
            console.log(' hello from the review state ')
        },
    }, 
    extraReducers: {

    }
})

export const {testingFromSlice} = reviewsSlice.actions;

export default reviewsSlice.reducer