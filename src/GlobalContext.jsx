import React from "react";
import { supabase } from "../supabase";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [targetBoard, setTargetBoard] = React.useState(null);
  const [userInfo, setUserInfo] = React.useState(null);
  const [hasSession, setHasSession] = React.useState(false);

  const [board, setBoard] = React.useState([
    { title: "teste 01", id: "teste-01" },
    { title: "teste 02", id: "teste-02" },
    { title: "teste 03", id: "teste-03" },
  ]);

  async function getUserContext() {
    const user = await supabase.auth.getSession();
    if (user.data.session) {
      setHasSession(true);
    } else {
      setHasSession(false);
    }

    setUserInfo(user);
  }

  React.useEffect(() => {
    getUserContext();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        board,
        setBoard,
        setTargetBoard,
        targetBoard,
        userInfo,
        setHasSession,
        hasSession,
        getUserContext,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
