import React from "react";
import { EndPoints, supabase } from "../supabase";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [targetBoard, setTargetBoard] = React.useState(null);
  const [userSession, setUserSession] = React.useState(null);

  const [board, setBoard] = React.useState([
    { title: "teste 01", id: "teste-01" },
    { title: "teste 02", id: "teste-02" },
    { title: "teste 03", id: "teste-03" },
  ]);

  async function getUserContext() {
    const user = await supabase.auth.getSession();
    // if (!user.error) {
    //   setUserSession(true);
    // } else {
    //   setUserSession(false);
    // }
    setUserSession(user);
    console.log("user");
  }

  React.useEffect(() => {
    window.localStorage.setItem("board", targetBoard);
    getUserContext();
  }, [targetBoard]);

  return (
    <GlobalContext.Provider
      value={{
        board,
        setBoard,
        setTargetBoard,
        targetBoard,
        userSession,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
