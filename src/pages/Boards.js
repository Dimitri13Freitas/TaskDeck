import React from "react";
import { Plus } from "@icon-park/react";
// import { Button } from "../components/Button";
import { Header } from "../components/Header";

export const Boards = () => {
  return (
    <div className="h-screen w-screen bg-gray-900">
      <Header />
      <div className="max-w-5xl m-auto">
        <h1 className="text-gray-400 text-2xl my-12">
          <span className="text-gray-100 font-bold">Usuário x</span>, Bem-vindo
          a sua central de tarefas.
        </h1>
        <button className="border-dashed border border-yellow-300 rounded-md p-2 text-gray-100">
          <Plus />
          Create a new board
        </button>
      </div>
    </div>
  );
};
