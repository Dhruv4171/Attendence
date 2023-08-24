import { createStore } from "redux"

const initialState={
    logincred : [],
    users : [],
    loggedInUser : null,
    isPresent: null
}
const reducer = (state =initialState,action) =>{
    switch (action.type) {
        case "SIGN_UP":
            return {
                ...state,
                logincred : [...state.logincred,action.payload]
            }
        case "LOG_IN":
            const user = state.logincred.find((user)=>user.email === action.payload.email && user.password === action.payload.password)
            return user ? {
                ...state,
                loggedInUser : user
            }:state
        case "REGISTER_USER":
            return {
                ...state,
                users :[...state.users,action.payload]
            }
        default :
            return state
    }
}
export default createStore(reducer)