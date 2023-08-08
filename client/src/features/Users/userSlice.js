

import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

export const userLogin = createAsyncThunk("users/userLogin", (user) => {

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

const usersSlice = createSlice({
    name: "users", 
    initialState:{
        entities: [],
        status: "idle",
    } ,
    reducers: {

    },
    extraReducers: {
        [userLogin.fulfilled](state, action) {
            console.log(action.payload)
        },
        [signup.fulfilled](state, action) {
            console.log(action.payload)
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