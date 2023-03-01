import React from "react";
import "./index.css";
import { GlobalContext } from "./GlobalContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Boards } from "./pages/Boards";
import { Kanban } from "./pages/Kanban";

export function App() {
  const { targetBoard } = React.useContext(GlobalContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="boards" element={<Boards />} />
        <Route path={"boards/:id"} element={<Kanban id={targetBoard} />} />
      </Routes>
    </BrowserRouter>
  );
}
