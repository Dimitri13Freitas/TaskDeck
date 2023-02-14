import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export const Login = () => {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="h-screen w-screen bg-gray-900 flex flex-col items-center justify-center">
      <header>
        <h1 className="text-gray-100 text-center text-2xl font-bold">
          Task Deck
        </h1>
        <p className="text-gray-400">Faça o login e começe a usar</p>
      </header>
      <form className="mt-8" onSubmit={handleSubmit}>
        <Input label="Email" type="email" placeholder="Digite seu e-mail" />
        <Input label="Senha" type="password" placeholder="********" />
        <Button children="Entrar" />
      </form>
      <Link className="text-gray-400 underline mt-8 hover:text-gray-100">
        Esqueçeu a senha?
      </Link>
      <Link className="text-gray-400 underline mt-3 hover:text-gray-100">
        Não possui conta? Crie um agora.
      </Link>
    </div>
  );
};
