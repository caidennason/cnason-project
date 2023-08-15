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
    .then((res) => {
        if (!res.ok) {
            throw new Error('Unable to post comment. Make sure you filled it out!')
        }
        return res.json()
    })
    .then((data) => data)
    // .then((res) => res.json())
    // .then((data) => data)
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
        [postComment.rejected](state, action){
            console.log(action.paylaod)
        }
    }
})


export default commentsSlice.reducer