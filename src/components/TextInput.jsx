import React from 'react'

const TextInput = ({ name, label, register, registerOptions, error, ...props }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input id={name} {...register(name, registerOptions)} {...props} />
            {error && <p>{error.message}</p>}
        </div>
    )
}

export default TextInput
