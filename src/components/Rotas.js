import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { Boards } from "../pages/Boards";
import { Kanban } from "../pages/Kanban";
import { GlobalContext } from "../GlobalContext";

export const Rotas = () => {
  const { targetBoard } = React.useContext(GlobalContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="boards" element={<Boards />} />
        <Route
          path={`boards/${targetBoard}`}
          element={<Kanban id={targetBoard} />}
        />
      </Routes>
    </BrowserRouter>
  );
};
