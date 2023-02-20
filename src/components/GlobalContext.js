import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [board, setBoard] = React.useState([]);

  return (
    <GlobalContext.Provider value={{ board, setBoard }}>
      {children}
    </GlobalContext.Provider>
  );
};
