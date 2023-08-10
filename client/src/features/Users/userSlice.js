

import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

const baseUrl = "http://localhost:4000"

export const userLogin = createAsyncThunk("users/userLogin", (user) => {
    return fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then((res) => res.json())
    .then((data) => data)
})

export const getUsers = createAsyncThunk("users/getUsers", (user) => {
    return fetch(`${baseUrl}/users`)
        .then((res) => res.json())
        .then((data => data))
    })

export const getCurrentUser = createAsyncThunk("users/getCurrentUser", (user) => {
    return fetch(`${baseUrl}/me`)
    .then((res) => res.json())
    .then((data) => data)
})

export const signup = createAsyncThunk("users/signup", (user) => {
    return fetch("http://localhost:4000/signup", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(user)
    })
    .then((res) => res.json())
    .then((data) => data)
})

export const signout = createAsyncThunk("users/signout", () => {
    return fetch(`${baseUrl}/logout`, {
        method: "DELETE"
    })
    .then((res) => res.json())
    .then((data) => data)
})

const usersSlice = createSlice({
    name: "users", 
    initialState:{
        entities: [],
        currentUser: null,
        status: "idle",
    } ,
    reducers: {

    },
    extraReducers: {
        [getUsers.fulfilled](state, action) {
            console.log(action.payload)
        },
        [userLogin.fulfilled](state, action) {
            console.log(action.payload)
        },
        [signup.fulfilled](state, action) {
            console.log(action.payload)
        },
        [getCurrentUser.fulfilled](state, action) {
            console.log(action.payload)
            state.currentUser = action.payload
        },
        [signout.fulfilled](state, action) {
            console.log(state.currentUser)
            state.currentUser = null
            console.log(state.currentUser)
        }
    }
})

export default usersSlice.reducer

// export const addUser = (user) => {
//     return {
//         type: "user/signUp", 
//         payload: user,
//     };
// };

// export const userLogin = (user) => {
//     return {
//         type: "user/login", 
//         payload: user
//     };
// };

// const initialState = [];

// export default function userReducer(state = initialState, action){
//     switch(action.type) {
//         case "user/signUp":
//             console.log(action.payload)

//         case "user/login":
//             console.log(action.payload)

//         default: 
//             return state
//     }
// }