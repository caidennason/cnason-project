import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

export const postReview = createAsyncThunk("reveiws/postReview", (review) => {
    return fetch("http://localhost:4000/reviews", {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(review)
    })
    .then((res) => res.json())
    .then((data) => data)
})

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
        [postReview.pending](state, action){
            console.log(' pending ')
        },
        [postReview.fulfilled](state, action){
            console.log(action.payload, ' from the slice ')
            state.entities.push(action.payload)
        }
    }
})

export const {testingFromSlice} = reviewsSlice.actions;

export default reviewsSlice.reducer