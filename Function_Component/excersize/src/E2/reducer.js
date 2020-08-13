export const initialState = {
    username: null,
    password: null
}

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case "SET_USERNAME":
            return {...state, username: action.username};
        case "SET_PASSWORD":
            return {...state, password: action.password};
        default: return state;
    }
}

export default reducer;