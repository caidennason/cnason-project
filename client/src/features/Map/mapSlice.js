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
// make a migration for MapInfo that has longitude and latitude, as well as user_id