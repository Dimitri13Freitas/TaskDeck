import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import "./index.css";
import { Boards } from "./pages/Boards";
import { GlobalContext, GlobalStorage } from "./components/GlobalContext";

export function App() {
  return (
    <GlobalStorage>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="boards" element={<Boards />} />
        </Routes>
      </BrowserRouter>
    </GlobalStorage>
  );
}
