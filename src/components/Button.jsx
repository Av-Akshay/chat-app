import React from "react";

const Button = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={`${className} px-5 py-2 border-2 rounded-xl tex-xl font-semibold `}
    >
      {children}
    </button>
  );
};

export default Button;
