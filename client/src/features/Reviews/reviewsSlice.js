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
            console.log('pending fetch')

        },
        [getReviews.fulfilled](state, action){
            console.log(action.payload)
            state.entities = action.payload
            console.log(state.entities)
        },
        [postReview.pending](state, action){
            console.log(' pending ')
        },
        [postReview.fulfilled](state, action){
            console.log(action.payload, ' from the slice ')
            console.log(current(state.entities))
            state.entities.push(action.payload)
        },
        [postReview.rejected](state, action) {
            console.log(action.payload)
        },
    }
})

export const {testingFromSlice} = reviewsSlice.actions;

export default reviewsSlice.reducer