import React from "react";
import { Input } from "../components/Input";

export const Login = () => {
  return (
    <div className="h-screen w-screen bg-gray-900 flex flex-col items-center justify-center">
      <header>
        <h1 className="text-gray-100 text-center text-2xl font-bold">
          Task Deck
        </h1>
        <p className="text-gray-400">Faça o login e começe a usar</p>
      </header>
      <form className="mt-8">
        <Input label="Email" placeholder="Digite seu e-mail" />
        <Input label="Senha" type="password" placeholder="********" />
      </form>
    </div>
  );
};
