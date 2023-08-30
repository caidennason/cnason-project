import {createSlice, createAsyncThunk, current } from '@reduxjs/toolkit'

const mapSlice = createSlice({
    name: "map", 
    initialState:{
        locations: [],
        status: 'idle',
    }, 
    reducers: {

    },
    extraReducers: {

    }
})

export default mapSlice.reducer 