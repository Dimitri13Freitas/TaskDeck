import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../assets/Logo";
import { EndPoints } from "../../supabase";

const forms = [
  {
    id: "name",
    label: "Nome",
    type: "text",
    placeholder: "Digite seu nome de usuário",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "Digite seu e-mail",
  },
  {
    id: "password",
    label: "Senha",
    type: "password",
    placeholder: "********",
  },
  {
    id: "confirmedPass",
    label: "Confirmar senha",
    type: "password",
    placeholder: "********",
  },
];

export const Cadastro = () => {
  const supa = new EndPoints();
  const [nameError, setNameError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [namePass, setPassError] = React.useState("");

  const [form, setForm] = React.useState(() => {
    return forms.reduce((acc, e) => {
      return {
        ...acc,
        [e.id]: "",
      };
    }, {});
  });

  function validateForm() {
    let isValid = true;

    if (!form.name) {
      setNameError("Preencha o campo acima");
      isValid = false;
    } else {
      setNameError("");
    }

    // if (!form.email) {
    //   setEmailError("O email é obrigatório.");
    //   isValid = false;
    // } else if (!/\S+@\S+\.\S+/.test(email)) {
    //   setEmailError("O email está inválido.");
    //   isValid = false;
    // } else {
    //   setEmailError("");
    // }

    // if (!password) {
    //   setPasswordError("A senha é obrigatória.");
    //   isValid = false;
    // } else if (password !== confirmedPassword) {
    //   setPasswordError("As senhas não conferem.");
    //   isValid = false;
    // } else if (password.length < 8) {
    //   setPasswordError("A senha deve ter pelo menos 8 caracteres.");
    //   isValid = false;
    // } else {
    //   setPasswordError("");
    // }

    return isValid;
  }

  // const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    // const returnCadastro = await supa.createUser({
    //   email: "dimitri.gomes@grupodr.com.br",
    //   password: "12345678",
    //   options: {
    //     data: {
    //       first_name: "Dimitri",
    //     },
    //   },
    // });
    // supa.login(form);
    // console.log(returnCadastro);
  }

  return (
    <div className="h-screen w-screen bg-gray-900 flex flex-col items-center justify-center">
      <header className="flex flex-col items-center justify-center">
        <Logo className="block" />
        <h1 className="text-gray-100 mt-3 text-center text-2xl font-bold">
          Task Deck
        </h1>
        <p className="text-gray-400 mb-4">Faça seu cadastro e comece a usar</p>
      </header>

      <Form
        setForm={setForm}
        onSubmit={handleSubmit}
        options={forms}
        buttonLabel="Cadastrar"
        formValues={form}
      />
      <Link to="/" className="text-gray-400 underline mt-3 hover:text-gray-100">
        Já possui conta? Faça login.
      </Link>
    </div>
  );
};
