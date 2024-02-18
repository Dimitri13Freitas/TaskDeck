import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [targetBoard, setTargetBoard] = React.useState(null);
  const [board, setBoard] = React.useState([
    { title: "teste 01", id: "teste-01" },
    { title: "teste 02", id: "teste-02" },
  ]);

  // React.useEffect(() => {
  //   window.localStorage.setItem("board", targetBoard);
  // }, [targetBoard]);

  return (
    <GlobalContext.Provider
      value={{ board, setBoard, setTargetBoard, targetBoard }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

