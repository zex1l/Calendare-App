import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const auth = false

    const navigate = useNavigate()
    return (
        <header className='p-5 bg-slate-600 text-white'> 
            <div className='flex justify-end items-center'>
                {
                        auth ?
                        <>
                        <nav className='flex justify-center'>
                            <p className='mr-4 cursor-pointer'>Maks</p>
                            <p className='mr-4 cursor-pointer'>Выйти</p>
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