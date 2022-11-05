import {SetAuthAction, AuthActionsEnum, SetErrorAction, SetLoadingAction, SetUserhAction} from './types'
import { IUser } from '../../../models/IUser'
import { AppDispatch } from '../..'
import axios from 'axios'

export const AuthActionCreators =  {
    setUser : (user: IUser) : SetUserhAction => ({type: AuthActionsEnum.SET_USER, payload: user}),
    setIsAuth: (auth: boolean) : SetAuthAction => ({type: AuthActionsEnum.SET_AUTH, payload: auth}),
    setLoading: (loading: boolean) : SetLoadingAction => ({type: AuthActionsEnum.SET_LOADING, payload: loading}),
    setError: (error: string) : SetErrorAction => ({type: AuthActionsEnum.SET_ERROR, payload: error}),

    login : (username: string, password: string) => async(dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setLoading(true))
            const responce = await axios.get<IUser[]>('./user.json')
            const mockUser = responce.data.find(user => user.username === username && user.password === password)
            
            if(mockUser) {
                localStorage.setItem('auth', 'true')
                localStorage.setItem('username', mockUser.username)
                dispatch(AuthActionCreators.setIsAuth(true))
                dispatch(AuthActionCreators.setUser(mockUser))
                
            }
            else {
                dispatch(AuthActionCreators.setError('Пользователь не найден'))
            }
            dispatch(AuthActionCreators.setLoading(false))
        }
        catch(e) {
            dispatch(AuthActionCreators.setError('Ошибка при авторизации'))
        }
    },

    logout : () => (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsAuth(false))
            dispatch(AuthActionCreators.setUser({} as IUser))
            localStorage.removeItem('auth')
            localStorage.removeItem('username')
        }
        catch(e) {
            dispatch(AuthActionCreators.setError('Ошибка при выходе'))
        }
    }
}
