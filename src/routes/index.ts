
import Login from '../pages/Login'
import Event from '../pages/Event'

export interface IRoute {
    path: string,
    component: React.ComponentType,
    
}

export enum RoutesNames {
    LOGIN = '/login',
    EVENT  ='/'
}

export const privateRoutes : IRoute[] = [
    {path: RoutesNames.EVENT, component: Event}
]

export const publickRoutes : IRoute[] = [
    {path: RoutesNames.LOGIN, component: Login}
]