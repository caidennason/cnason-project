export const addEstablishment = (establishment) => {
    return {
        type: "establishments/add", 
        payload: establishment,
    };
};

const initialState = [];

export default function establishmentsReducer(state = initialState, action){
    switch(action.type) {
        case "establishments/add":
            console.log(action.payload)

        default: 
            return state
    }
}