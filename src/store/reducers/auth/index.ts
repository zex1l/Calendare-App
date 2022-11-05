import { IUser } from "../../../models/IUser"
import { AuthState, AuthAction, AuthActionsEnum } from "./types"


const initialState : AuthState = {
    isAuth: false,
    user: {} as IUser,
    loading: false,
    error: ''
}

export default function authReducer(state = initialState, action : AuthAction) : AuthState {
    switch(action.type) {

        case AuthActionsEnum.SET_AUTH:
            return {...state, isAuth: action.payload, error: ''}

        case AuthActionsEnum.SET_USER:
            return {...state, user: action.payload}

        case AuthActionsEnum.SET_LOADING:
            return {...state, loading: action.payload}

        case AuthActionsEnum.SET_ERROR:
            return {...state, error: action.payload, loading: false}

        default: 
            return state
    }
}