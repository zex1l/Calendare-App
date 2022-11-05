import { FC, useState} from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedReduxr";
import Input from "./Input";


const Form : FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const error = useTypedSelector(state => state.authReducer.error)

    const {login} = useActions()

    const onSubmit = (e : any) => {
        e.preventDefault()
        login(username, password)
        
        setUsername('')
        setPassword('')
    }

    return (
        <div className='bg-white p-10 rounded-sm w-fit mx-auto shadow-xl'>
            <div className=''>
                {error ? 
                    <div style={{color: 'red'}}>{error}</div>
                    :
                    null
                }
                <form 
                    onSubmit={onSubmit}
                    className='flex flex-col items-center justify-center'
                >
                    
                    <Input type="text" setValue={setUsername} value={username} placeholder="username"/>
                    <Input type="password" setValue={setPassword} value={password} placeholder="password"/>
                    
                    <button
                        className='bg-slate-500 text-white p-2 w-32 rounded-sm'
                    >Login</button>
                </form>
            </div>
        </div>
    );
};

export default Form;