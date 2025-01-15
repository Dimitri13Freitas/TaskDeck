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
  console.log("app");
  const supa = new EndPoints();
  const { board, targetBoard, userSession } = React.useContext(GlobalContext);
  const [loadScreen, setLoadScreen] = React.useState(true);
  const [hasSession, setHasSession] = React.useState(false);

  const { data, error } = userSession;

  function verifySession() {
    if (error) {
      setHasSession(false);
    } else {
      setHasSession(true);
    }
    setLoadScreen(false);
  }

  React.useEffect(() => {
    verifySession();
  }, []);

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
            <Route path="boards" element={<Boards />} />
            <Route path={"boards/:id"} element={<Kanban id={targetBoard} />} />
          </Routes>
        </BrowserRouter>
      </GlobalStorage>
    );
  }
}
