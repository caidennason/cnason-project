import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

export const getReviews = createAsyncThunk("reviews/fetchReviews", () => {
    return fetch("http://localhost:4000/reviews")
    .then((res) => res.json())
    .then((data) => data)
})

export const postReview = createAsyncThunk("reviews/postReview", (review) => {
    return fetch("http://localhost:4000/reviews", {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(review)
    })
    .then((res) => {
        if (!res.ok) {
            throw new Error('Unable to post review. Make sure you filled it out!')
        }
        return res.json()
    })
    .then((data) => data)
    // .then((res) => res.json())
    // .then((data) => data)
})

const reviewsSlice = createSlice({
    name: "reviews", 
    initialState:{
        entities: [],
        status: "idle",
    } ,
    reducers: {
        
    }, 
    extraReducers: {
        [getReviews.pending](state, action){


        },
        [getReviews.fulfilled](state, action){

            state.entities = action.payload

        },
        [postReview.pending](state, action){

        },
        [postReview.fulfilled](state, action){

            state.entities.push(action.payload)
        },
        [postReview.rejected](state, action) {

        },
    }
})

export const {testingFromSlice} = reviewsSlice.actions;

export default reviewsSlice.reducer