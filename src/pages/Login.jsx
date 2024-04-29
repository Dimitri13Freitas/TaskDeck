import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "../components/Form";
// import { ReactComponent } from "../assets/logo.svg";

const forms = [
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "Digite seu e-mail",
  },
  {
    id: "senha",
    label: "Senha",
    type: "password",
    placeholder: "********",
  },
];

export const Login = () => {
  const [form, setForm] = React.useState(() => {
    return forms.reduce((acc, e) => {
      return {
        ...acc,
        [e.id]: "",
      };
    }, {});
  });

  const navigate = useNavigate();

  function handleSubmit(e) {
    console.log(form);
    e.preventDefault();
    navigate("boards");
  }

  return (
    <div className="h-screen w-screen bg-gray-900 flex flex-col items-center justify-center">
      <header className="flex flex-col items-center justify-center">
        {/* <ReactComponent className="block" /> */}
        <h1 className="text-gray-100 mt-3 text-center text-2xl font-bold">
          Task Deck
        </h1>
        <p className="text-gray-400">Faça o login e começe a usar</p>
      </header>
      <Form
        setForm={setForm}
        onSubmit={handleSubmit}
        options={forms}
        buttonLabel="Entrar"
      />
      <Link className="text-gray-400 underline mt-8 hover:text-gray-100">
        Esqueçeu a senha?
      </Link>
      <Link className="text-gray-400 underline mt-3 hover:text-gray-100">
        Não possui conta? Crie um agora.
      </Link>
    </div>
  );
};
