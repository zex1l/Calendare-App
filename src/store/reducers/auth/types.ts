import { IUser } from "../../../models/IUser"

export interface AuthState {
    isAuth : boolean
    user: IUser
    loading: boolean
    error: string
}

export enum AuthActionsEnum {
    SET_AUTH = 'SET_AUTH',
    SET_USER = 'SET_USER',
    SET_LOADING = 'SET_LOADING',
    SET_ERROR = 'SET_ERROR'
}

export interface SetAuthAction {
    type: AuthActionsEnum.SET_AUTH
    payload: boolean
}

export interface SetUserhAction {
    type: AuthActionsEnum.SET_USER
    payload: IUser
}

export interface SetLoadingAction {
    type: AuthActionsEnum.SET_LOADING
    payload: boolean
}

export interface SetErrorAction {
    type: AuthActionsEnum.SET_ERROR
    payload: string
}

export type AuthAction = SetAuthAction | SetUserhAction | SetErrorAction | SetLoadingAction