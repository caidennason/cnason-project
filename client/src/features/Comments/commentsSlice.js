import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';

const baseUrl = "http://localhost:4000"

export const getComments = createAsyncThunk("comments/fetchComments", () => {
    return fetch(`${baseUrl}/comments`)
    .then((res) => res.json())
    .then((data) => data)
})

export const postComment = createAsyncThunk("comments/postComment", (comment) => {
    return fetch(`${baseUrl}/comments`, {
        method: 'POST', 
        headers: {
            "ACCEPT": "application/json",
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(comment)
    })
    .then((res) => res.json())
    .then((data) => data)
})

const commentsSlice = createSlice({
    name: "comments", 
    initialState:{
        entities: [],
        status: "idle",
    } ,
    reducers: {
        
    }, 
    extraReducers: {
        [getComments.fulfilled](state, action){
            console.log(state.entities)
            state.entities = action.payload
        },
        [postComment.fulfilled](state, action){
            console.log(action.payload)
            state.entities.push(action.payload)
        },
    }
})


export default commentsSlice.reducer