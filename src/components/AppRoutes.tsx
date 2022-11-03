import { FC } from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import { useTypedSelector } from "../hooks/useTypedSelector";

import {
    publickRoutes,
    privateRoutes,
    RoutesNames
} from '../routes/index'

const AppRoutes :FC = () => {
    const {isAuth} = useTypedSelector(state => state.authReducer)
    
    return (
        isAuth 
            ?
        <Routes>
            {privateRoutes.map((route, i) => {
                
                return (
                    <Route key={i} path={route.path} element={<route.component/>}/>
                    
                )
            }) }
            <Route path="*" element={<Navigate to={RoutesNames.EVENT} replace={true}/>}/>
        </Routes>
            :
        <Routes>
        {publickRoutes.map((route, i) => {
            return (
                <Route key={i} path={route.path} element={<route.component/>}/>
            )
        }) }
        <Route path="*" element={<Navigate to={RoutesNames.LOGIN} replace={true}/>}/>
    </Routes>
    );
};

export default AppRoutes;