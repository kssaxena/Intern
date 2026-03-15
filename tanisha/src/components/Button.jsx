import React from "react";

const Button = ({ children, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg transition duration-200 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;