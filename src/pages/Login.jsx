import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../assets/Logo";
import { EndPoints } from "../../supabase";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useForm } from "../hooks/useForm";

const forms = [
  {
    id: "email",
    label: "Email",
    type: "text",
    placeholder: "Digite seu e-mail",
  },
  {
    id: "password",
    label: "Senha",
    type: "password",
    placeholder: "********",
  },
];

export const Login = () => {
  const supa = new EndPoints();
  const form = forms.reduce((acc, e) => {
    return {
      ...acc,
      [e.id]: useForm(e.id),
    };
  }, {});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.email.validate() && form.email.validate()) {
      console.log("interface with supabase, one line code");
    } else {
      console.log("não envia");
      // console.log(form);
    }
  };

  return (
    <div className="h-screen w-screen bg-gray-900 flex flex-col items-center justify-center">
      <header className="flex flex-col items-center justify-center">
        <Logo className="block" />
        <h1 className="text-gray-100 mt-3 text-center text-2xl font-bold">
          Task Deck
        </h1>
        <p className="text-gray-400 mb-4">Faça o login e começe a usar</p>
      </header>
      <form onSubmit={handleSubmit}>
        {forms.map(({ id, label, placeholder, type }) => {
          return (
            <Input
              key={id}
              id={id}
              className="py-3 pl-3 lg:w-96"
              label={label}
              type={type}
              placeholder={placeholder}
              {...form[id]}
            />
          );
        })}
        <Button className="w-full py-3" children="Entrar" />
      </form>
      <Link
        to="cadastro"
        className="text-gray-400 underline mt-8 hover:text-gray-100"
      >
        Esqueçeu a senha?
      </Link>
      <Link className="text-gray-400 underline mt-3 hover:text-gray-100">
        Não possui conta? Crie um agora.
      </Link>
    </div>
  );
};
