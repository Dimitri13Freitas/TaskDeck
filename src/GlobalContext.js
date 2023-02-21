import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [targetBoard, setTargetBoard] = React.useState(null);
  const [board, setBoard] = React.useState([]);

  return (
    <GlobalContext.Provider
      value={{ board, setBoard, setTargetBoard, targetBoard }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
