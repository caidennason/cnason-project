export const addUser = (user) => {
    return {
        type: "user/signUp", 
        payload: user,
    };
};

const initialState = [];

export default function signUpReducer(state = initialState, action){
    switch(action.type) {
        case "user/signUp":
            console.log(action.payload)

        default: 
            return state
    }
}