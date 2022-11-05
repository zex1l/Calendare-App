import React, { FC } from 'react';

interface IInput {
    type: string,
    setValue: Function,
    value: string,
    placeholder: string
}

const Input: FC <IInput> = ({type, setValue, value, placeholder}) => {
    return (
        <input 
                        className='p-1 border border-slate-400 mb-4 focus:outline-none rounded-sm'
                        type={type} 
                        placeholder={placeholder}
                        onChange={e => setValue(e.target.value)}
                        value={value}
                    />
    );
};

export default Input;