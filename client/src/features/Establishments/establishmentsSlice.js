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

const establishmentsSlice = createSlice({
    name: "establishments", 
    initialState:{
        entities: [],
        status: "idle",
    } ,
    reducers: {
        addEstablishment(state, action){ // do i need this? since adding is an async (post) function?
            console.log(action.payload);
            state.entities.push(action.payload);
            // console.log(state, 'this is state')
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
        [postEstablishment.fulfilled](state, action) {
            console.log(current(state));
            state.entities.push(action.payload);
            state.status = "posted"
            console.log(current(state.entities));
            console.log(state);
            console.log(action.payload);
            console.log('checking from post establishment');
        }
    },
})

export const {addEstablishment} = establishmentsSlice.actions;

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
