

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
    .then((res) => {
        if (!res.ok) {
            throw new Error('Unable to login. Make sure your username and password are correct, or sign up for an account!')
            console.log(res)
        }
        return res.json()
    })
    .then((data) => data)
    // .then((res) => res.json())
    // .then((data) => data)
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
            state.entities = action.payload
        },
        [userLogin.fulfilled](state, action) {
            console.log(action.payload)
            // state.currentUser = action.payload
            return {
                ...state, 
                currentUser: action.payload
            }
        },
        [userLogin.rejected](state, action) {
            console.log(action.payload)
        },
        [signup.fulfilled](state, action) {
            console.log(action.payload)
            state.entities.push(action.payload)
            state.currentUser = action.payload
        },
        [getCurrentUser.fulfilled](state, action) {
            console.log(action.payload)
            state.currentUser = action.payload
            console.log(state.currentUser)
        },
        [getCurrentUser.pending](state, action) { 
            console.log(' current user is pending ')
        },
        [signout.fulfilled](state, action) {
            state.currentUser = null
            console.log('you are signed out')
        }, 
        [signout.pending](state, action) {
            console.log(' you are being signed out, slowly but surely ')
            console.log(current(state.currentUser))
        },
        [signout.rejected](state, action) {
            console.log('error is happening on the signout')
        }
    }
})

export default usersSlice.reducer