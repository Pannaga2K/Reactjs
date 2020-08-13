export const initialState = {
    username: null,
    password: null
}

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case "SET_USERNAME_AND_PASSWORD":
            return {...state, username: action.username, password: action.password};
        default: return state;
    }
}

export default reducer;