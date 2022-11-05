import { useNavigate } from "react-router-dom";
import { useActions } from "../hooks/useActions";
import { useAppDispatch, useTypedSelector } from "../hooks/useTypedReduxr";
import { AuthActionCreators } from "../store/reducers/auth/action-creator";

const NavBar = () => {
    const auth = useTypedSelector(state => state.authReducer.isAuth)

    const navigate = useNavigate()
    const {logout} = useActions()

    const onLogout = () => {
        logout()
    }
    return (
        <header className='p-5 bg-slate-600 text-white'> 
            <div className='flex justify-end items-center'>
                {
                        auth ?
                        <>
                        <nav className='flex justify-center'>
                            <p className='mr-4 cursor-pointer'>Maks</p>
                            <p className='mr-4 cursor-pointer' onClick={onLogout}>Выйти</p>
                         </nav>
                            
                        </>
                            :
                            <nav className='flex justify-center'>
                            <p onClick={() => navigate('/login')} className='mr-4 cursor-pointer'>Войти</p>
                         </nav>
                    }
            </div>
        </header>
    );
};

export default NavBar;