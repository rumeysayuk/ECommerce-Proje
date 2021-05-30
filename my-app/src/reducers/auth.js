import * as actionTypes from "../constants/actionTypes"

const authReducer = (state = {authData: null}, action) => {
    switch (action.type) {
        case actionTypes.AUTH:
            localStorage.setItem("profile", JSON.stringify({...action?.data}))
            return {...state, authData: action.data}
        case actionTypes.LOG_OUT:
            localStorage.removeItem("profile")
            return {...state, authData: null}
        default:
            return state
    }
}
export default authReducer;
