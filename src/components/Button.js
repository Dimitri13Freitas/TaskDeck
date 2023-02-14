import React from "react";

// bg-cyan-800 rounded font-bold hover:bg-cyan-300;

export const Button = ({ className, children, ...props }) => {
  return (
    <button
      className={className + " bg-cyan-800 rounded font-bold hover:bg-cyan-300"}
      {...props}
    >
      {children ? children : "Botão Default"}
    </button>
  );
};
