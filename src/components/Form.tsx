import { FC, useState } from "react";

type DataType = {
    email: string | null,
    password: string | null
}
const initialState = {
    email: null,
    password: null
}

const Form : FC = () => {

    const [data, setData] = useState<DataType>(initialState)

    const onSubmit = (e : any) => {
        e.preventDefault()
    }

    return (
        <div>
            <form action="">
                <input 
                    type="email" 
                    placeholder="email"
                    value={data.email?.toString()}
                />
                <input 
                    type="password" 
                    placeholder="password"
                    value={data.password?.toString()}
                />
            </form>
        </div>
    );
};

export default Form;