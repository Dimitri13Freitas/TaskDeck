import React from "react";

export const Button = ({ children, ...props }) => {
  return (
    <button
      className="bg-cyan-800 w-full py-3 rounded font-bold hover:bg-cyan-300"
      {...props}
    >
      {children ? children : "Botão Default"}
    </button>
  );
};
