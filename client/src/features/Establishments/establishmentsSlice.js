import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit"

export const fetchEstablishments = createAsyncThunk("establishments/fetchEstablishments", () => {
    return fetch("http://localhost:4000/establishments")
    .then((res) => res.json())
    .then((data) => data)
    // .then((data) => console.log(data, 'from redux')) 
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
    return fetch("http://localhost:4000/establishments", {
        method: 'DELETE',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        
    })
})


const establishmentsSlice = createSlice({
    name: "establishments", 
    initialState:{
        entities: [],
        status: "idle",
    } ,
    reducers: {
        // addEstablishment(state, action){ // do i need this? since adding is an async (post) function?
        //     console.log(action.payload);
        //     state.entities.push(action.payload);
        //     // console.log(state, 'this is state')
        // }
        removeEstablishment(state, action){
            // const deletedEstablishmentId = action.payload
            // return state.entities.filter(establishment => establishment.id !== deletedEstablishmentId)
            console.log(current(state.entities))
            console.log(action.payload, ' from redux')
            const deletedEstablishment = action.payload
            let check = state.entities.filter((e) => e.id !== deletedEstablishment.id)
            state.entities = check
        }
    },
    extraReducers: {
        [fetchEstablishments.fulfilled](state, action) {
            state.entities = action.payload;
            state.status = "loaded";
            console.log(state.status, state.entities, 'is the get request working');
        },
        [fetchEstablishments.pending](state, action){
            state.status = "loading...";
            // console.log(state.status);
        },
        [postEstablishment.pending](state, action){
            state.status = "post request loading"
        },
        [postEstablishment.rejected](state, action){
            state.status = "post request failed"
        },
        [postEstablishment.fulfilled](state, action) {
            state.entities.push(action.payload);
            state.status = "posted"
            console.log(current(state.entities));
            console.log(state);
        },
        [deleteEstablishment.fulfilled](state, action) {
            console.log('deleting in redux')
        }
    },
})

export const {addEstablishment, removeEstablishment} = establishmentsSlice.actions;

export default establishmentsSlice.reducer

// export default function establishmentsReducer(state = initialState, action){
//     switch(action.type) {
//         case "establishments/add":
//             console.log(action.payload)

//         default: 
//             return state
//     }
// }

// export const fetchEstablishments = () => {
//     return function (dispatch) {
//         dispatch({ type: "establishments/establishmentsLoading" });
//         fetch("localhost4000/establishments")
//         .then((res => res.json()))
//         .then((establishments) => {
//             dispatch({ type: "establishments/establishmentsLoaded", payload: establishments})
//         })
//     }
// }

// export const postEstablishment = createAsyncThunk("establishments/postEstablishment", (establishment) => {
//     return fetch("http://localhost:4000/establishments", {
//         method: 'POST',
//         headers: {
//             "Accept": "application/json", 
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(establishment)
//     })
//     .then((res) => res.json())
// })
