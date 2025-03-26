import React from 'react'

const TextInput = ({ name, label, register, registeOptions, error, ...props }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input id={name} {...register(name, registeOptions)} {...props} />
            {error && <p>{error.message}</p>}
        </div>
    )
}

export default TextInput
