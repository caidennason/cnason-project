import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit"

export const fetchEstablishments = createAsyncThunk("establishments/fetchEstablishments", () => {
    return fetch("http://localhost:4000/establishments")
    .then((res) => res.json())
    .then((data) => data)
})

export const postEstablishment = createAsyncThunk("establishments/postEstablishment", (establishment) => {
    return fetch("http://localhost:4000/establishments", {
        method: 'POST',
        headers: {
            "Accept": "application/json", 
            "Content-Type": "application/json"
        },
        body: JSON.stringify(establishment)
    })
    .then((res) => res.json())
    .then((data) => data)
})

export const deleteEstablishment = createAsyncThunk("establishments/deleteEstablishment", (establishment) => {
    return fetch(`http://localhost:4000/establishments/${establishment.id}`, {
        method: 'DELETE'
    })
        .then((res) => res.json())
        .then((data) => data)
    })

export const updateEstablishment = createAsyncThunk("establishments/updateEstablishment", (establishment) => {
    return fetch(`http://localhost:4000/establishments/${establishment.id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(establishment)
    })
        .then((res) => res.json())
        .then((data) => data)
})


const establishmentsSlice = createSlice({
    name: "establishments", 
    initialState:{
        entities: [],
        status: "idle",
    } ,
    reducers: {
        removeEstablishment(state, action){
            const deletedEstablishment = action.payload
            let remainingEstablishments = state.entities.filter((e) => e.id !== deletedEstablishment.id)
            state.entities = remainingEstablishments
        }
    },
    extraReducers: {
        [fetchEstablishments.fulfilled](state, action) {
            state.entities = action.payload;
            state.status = "loaded";
        },
        [fetchEstablishments.pending](state, action){
            state.status = "loading...";
        },
        [postEstablishment.pending](state, action){
            state.status = "post request loading";
        },
        [postEstablishment.rejected](state, action){
            state.status = "post request failed";
        },
        [postEstablishment.fulfilled](state, action) {
            state.entities.push(action.payload);
            state.status = "posted";
        },
        [deleteEstablishment.fulfilled](state, action) {
            const deletedEstablishment = action.meta.arg;
            const remainingEstablishments = state.entities.filter((e) => e.id !== deletedEstablishment.id);
            state.entities = remainingEstablishments;
            state.status = 'deleted';
        },
        [deleteEstablishment.pending](state, action) {
            console.log(' pending ');
        },
        [updateEstablishment.pending](state, action) {
            console.log('pending')
            console.log(action.payload)
        },
        [updateEstablishment.fulfilled](state, action) {
            console.log('fulfilled')
            console.log(action.payload)
        }
    },
})

export const {addEstablishment, removeEstablishment} = establishmentsSlice.actions;

export default establishmentsSlice.reducer
