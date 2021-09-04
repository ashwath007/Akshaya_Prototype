import { SET_USER, IS_AUTHENDICATED, IS_SENT, IS_USER_VERIFYED } from "../action/action.types";


const initialState = {
    user: null,
    loading: true,
    isAuthendicated: false,
    isSent: false,
    error: ''
}


export default (state => initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case 'IS_AUTHENDICATED':
            return {
                ...state,
                isAuthendicated: action.payload,
                loading: false
            }
        case 'IS_SENT':
            return {
                ...state,
                isSent: true
            }
        default:
            return state
    }
}