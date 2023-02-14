import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import "./index.css";
import { Boards } from "./pages/Boards";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="boards" element={<Boards />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
