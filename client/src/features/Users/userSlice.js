export const addUser = (user) => {
    return {
        type: "user/signUp", 
        payload: user,
    };
};

export const userLogin = (user) => {
    return {
        type: "user/login", 
        payload: user
    };
};

const initialState = [];

export default function userReducer(state = initialState, action){
    switch(action.type) {
        case "user/signUp":
            console.log(action.payload)

        case "user/login":
            console.log(action.payload)

        default: 
            return state
    }
}