import React from "react";

// bg-yellow-800 rounded font-bold hover:bg-yellow-300;

export const Button = ({ className, children, ...props }) => {
  return (
    <button
      className={
        className + " bg-yellow-800 rounded font-bold hover:bg-yellow-300"
      }
      {...props}
    >
      {children ? children : "Botão Default"}
    </button>
  );
};
