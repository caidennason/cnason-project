import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

// export const addEstablishment = (establishment) => {
//     return {
//         type: "establishments/add", 
//         payload: establishment,
//     };
// };

export const fetchEstablishments = createAsyncThunk("establishments/fetchEstablishments", () => {
    return fetch("localhost4000/establishments")
    .then((res) => res.json())
    .then((data) => data)
})

const initialState = {
    entities: [], 
    status: "idle"
};

const establishmentsSlice = createSlice({
    name: "establishments", 
    initialState, 
    reducers: {
        addEstablishment(state, action){
            console.log(action.payload)
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