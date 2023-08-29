

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
    .then((res) => {
        if (!res.ok) {
            throw new Error("You aren't logged in")
        } 
        return res.json()
    })
    .then((data) => data)
    // .then((res) => res.json())
    // .then((data) => data)

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
    .then((res) => {
        if (!res.ok) {
            return res.json()
            .then((errorData) => {
                throw new Error(errorData.error)
            })
            // throw new Error('Make sure all required forms are filled out!')
            // console.log(res.errors)
        }
        return res.json()
    })
    .then((data)=> data)
    // .then((res) => res.json())
    // .then((data) => data)
})

export const signout = createAsyncThunk("users/signout", () => {
    return fetch(`${baseUrl}/logout`, {
        method: "DELETE"
    })
    // .then((res) => res.json())
    // .then((data) => data)
})

const usersSlice = createSlice({
    name: "users", 
    initialState:{
        entities: [],
        currentUser: null,
        status: "idle",
        errors: null
    } ,
    reducers: {

    },
    extraReducers: {
        [getUsers.fulfilled](state, action) {

            state.entities = action.payload
        },
        [userLogin.fulfilled](state, action) {

            // state.currentUser = action.payload
            return {
                ...state, 
                currentUser: action.payload
            }
        },
        [userLogin.rejected](state, action) {

        },
        [signup.fulfilled](state, action) {

            state.entities.push(action.payload)
            state.currentUser = action.payload
            state.errors = null
        },
        [signup.rejected](state, action){

            state.error = action.error.message
        },
        [getCurrentUser.fulfilled](state, action) {

            state.currentUser = action.payload

        },
        [getCurrentUser.pending](state, action) { 

        },
        [signout.fulfilled](state, action) {
            state.currentUser = null

        }, 
        [signout.pending](state, action) {

        },
        [signout.rejected](state, action) {
           
        }
    }
})

export default usersSlice.reducer