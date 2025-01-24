import React from "react";
import "./index.css";
import { GlobalContext } from "./GlobalContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Boards } from "./pages/Boards";
import { Kanban } from "./pages/Kanban";
import { Cadastro } from "./pages/Cadastro";
import { Load } from "./components/Load";
import { GlobalStorage } from "./GlobalContext";

export function App() {
  const { board, targetBoard, hasSession, getUserContext } =
    React.useContext(GlobalContext);
  const [loadScreen, setLoadScreen] = React.useState(true);

  React.useEffect(() => {
    setLoadScreen(false);
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
