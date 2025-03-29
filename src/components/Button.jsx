import React from 'react'

const Button = ({text, type = "button", onClick, className}) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button