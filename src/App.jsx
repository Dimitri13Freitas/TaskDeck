import React from "react";
import "./index.css";
import { GlobalContext } from "./GlobalContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Boards } from "./pages/Boards";
import { Kanban } from "./pages/Kanban";
import { EndPoints, supabase } from "../supabase";
import { Cadastro } from "./pages/Cadastro";
import { Load } from "./components/Load";
import { GlobalStorage } from "./GlobalContext";

export function App() {
  const supa = new EndPoints();
  const { board, targetBoard, userSession } = React.useContext(GlobalContext);
  const [loadScreen, setLoadScreen] = React.useState(true);
  const [hasSession, setHasSession] = React.useState(false);

  function verifySession() {
    const { data, error } = userSession;

    if (data.session) {
      console.log("possui sessão");
      setHasSession(true);
    } else {
      console.log("não possui sessão");
      setHasSession(false);
    }
    setLoadScreen(false);
  }

  React.useEffect(() => {
    if (userSession) verifySession();
  }, [userSession]);

  if (loadScreen) {
    return (
      <div
        className={`h-screen w-screen bg-gray-900 flex flex-col items-center justify-center ${
          loadScreen ? " flex-1 " : null
        }`}
      >
        <Load isVisible={loadScreen} />
      </div>
    );
  } else {
    return (
      <GlobalStorage>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={hasSession ? <Boards /> : <Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route
              path="boards"
              element={hasSession ? <Boards /> : <Login />}
            />
            <Route
              path={"boards/:id"}
              element={hasSession ? <Kanban id={targetBoard} /> : <Login />}
            />
          </Routes>
        </BrowserRouter>
      </GlobalStorage>
    );
  }
}
