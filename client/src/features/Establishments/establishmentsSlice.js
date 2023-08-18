// this one handles reviews

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
    .then((res) => {
        if (!res.ok) {
            return res.json()
            .then((errorData) => {
                throw new Error(errorData.error)
            })
        }
        return res.json()
    })
    .then((data) => data)
    // .then((res) => res.json())
    // .then((data) => data)
})

export const deleteEstablishment = createAsyncThunk("establishments/deleteEstablishment", (establishment) => {
    return fetch(`http://localhost:4000/establishments/${establishment.id}`, {
        method: 'DELETE'
    })
        .then((res) => {
            if (!res.ok) {
                throw new Error("unable to delete establishment")
            }
            return res.json()
        })
        .then((data) => data)
    })

export const updateEstablishment = createAsyncThunk("establishments/updateEstablishment", (establishment) => {
    console.log(establishment)
    return fetch(`http://localhost:4000/establishments/${establishment.id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(establishment)
    })
        .then((res) => {
            if (!res.ok) {
                throw new Error("Make sure all fields are still filled out! (except photo url, that's ok)")
            } 
            return res.json()
        })
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
})


const establishmentsSlice = createSlice({
    name: "establishments", 
    initialState:{
        entities: [],
        reviews: {},
        error: null,
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
            console.log(action.payload)
            state.error = action.error.message
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
        [deleteEstablishment.rejected](state, action) { 
            console.log( ' unable to delete ', action.error.message)
            state.error = action.error.message
            console.log(state.error, ' checking if state.error works')
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
            const updatedEstablishments = state.entities.map((est) => {
                if (est.id === action.payload.id){
                    return action.payload
                } else {
                    return est
                }
            })
            state.entities = updatedEstablishments
        },
        [postReview.pending](state, action){
            console.log(' pending ')
        },
        [postReview.fulfilled](state, action){
            const { establishment_id, ...review } = action.payload; // destructuring the object here.so basically, you're taking the establishment id from this action.payload object, and saving that to a variable called 'establishment_id'. you're saving the rest of the object to 'review'. then, you're finding an establishment from state.entities that has the same id as establishment_id. if that establishment exists, you push the review to the end of the reviews
            const establishment = state.entities.find((e) => e.id === establishment_id);
            if (establishment) {
              establishment.reviews.push(review);
            }
        }
    },
})

export const {addEstablishment, removeEstablishment} = establishmentsSlice.actions;

export default establishmentsSlice.reducer
