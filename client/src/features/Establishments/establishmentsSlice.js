import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

export const fetchEstablishments = createAsyncThunk("establishments/fetchEstablishments", () => {
    return fetch("http://localhost:4000/establishments")
    .then((res) => res.json())
    .then((data) => data)
    // .then((data) => console.log(data, 'from redux')) 
})


const establishmentsSlice = createSlice({
    name: "establishments", 
    initialState:{
        entities: [],
        status: "idle",
    } ,
    reducers: {
        addEstablishment(state, action){
            console.log(action.payload)
            state.entities.push(action.payload)
            console.log(state, 'this is state')
        }
    }
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

