import React from 'react'

const TextInput = ({ name, label, register, registerOptions, error, ...props }) => {
    return (
        <div>
            <input
                id={name}
                className="primery-user-input"
                placeholder={label}
                {...register(name, registerOptions)}
                {...props}
            />
            {error && <p>{error.message}</p>}
        </div>
    )
}

export default TextInput
