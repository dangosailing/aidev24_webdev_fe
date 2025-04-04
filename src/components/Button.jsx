import React from "react";

const Button = ({ text, type = "button", onClick, className, id }) => {
  return (
    <button
    className={className ? `${className}` : "btn btn-primary"}
      type={type}
      onClick={onClick}
      id={id}
    >
      {text}
    </button>
  );
};

export default Button;
