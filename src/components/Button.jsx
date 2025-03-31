import React from "react";

const Button = ({ text, type = "button", onClick, className }) => {
  return (
    <button
      className={`btn btn-primary ${className || ""}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
