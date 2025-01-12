import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../assets/Logo";
import { EndPoints } from "../../supabase";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

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
  // const [nameError, setNameError] = React.useState("");
  // const [emailError, setEmailError] = React.useState("");
  // const [namePass, setPassError] = React.useState("");
  // const [confirmedPass, setConfirmedPass] = React.useState("");

  const [form, setForm] = React.useState(() => {
    return forms.reduce((acc, e) => {
      return {
        ...acc,
        [e.id]: "",
      };
    }, {});
  });

  console.log(form);

  const [formError, setFormError] = React.useState(() => {
    return forms.reduce((acc, e) => {
      return {
        ...acc,
        [e.id + "Error"]: "",
      };
    }, {});
  });

  function validateForm() {
    let isValid = true;
    if (form.name.length === 0) {
      setFormError((e) => {
        return { ...e, nameError: "Campo vazio! Preencha e tente novamente" };
      });
      isValid = false;
    }
    if (form.email.length === 0) {
      setFormError((e) => {
        return { ...e, emailError: "Campo vazio! Preencha e tente novamente" };
      });
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      setFormError((e) => {
        return {
          ...e,
          emailError: "Email inválido, verifique e tente novamente",
        };
      });
      isValid = false;
    } else {
      setFormError((e) => {
        return {
          ...e,
          emailError: "",
        };
      });
      isValid = true;
    }

    if (form.password.length === 0) {
      setFormError((e) => {
        return {
          ...e,
          passwordError: "Campo vazio! Preencha e tente novamente",
        };
      });
      isValid = false;
    } else if (form.password.length < 6) {
      setFormError((e) => {
        return {
          ...e,
          passwordError:
            "Senha tem o minimo de 6 caracteres, verifique e tente novamente",
        };
      });
      isValid = false;
    } else if (form.confirmedPass.length !== form.password.length) {
      setFormError((e) => {
        return {
          ...e,
          passwordError: "As senhas não conferem, tente novamente!!",
        };
      });
      isValid = false;
    } else {
      setFormError((e) => {
        return {
          ...e,
          passwordError: "",
        };
      });
      isValid = true;
    }

    return isValid;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (validateForm()) {
      console.log("valido");
      const returnCadastro = supa.createUser(
        { email: form.email, password: form.password },
        form.name,
      );
      console.log(returnCadastro);
    } else {
      console.log("não válido");
    }
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
      <form onSubmit={handleSubmit}>
        {forms.map(({ id, label, placeholder, type }) => {
          return (
            <Input
              key={id}
              id={id}
              label={label}
              type={type}
              placeholder={placeholder}
              error={formError}
              setForm={setForm}
            />
          );
        })}
        <Button className="w-full py-3" children="Entrar" />
      </form>
      <Link to="/" className="text-gray-400 underline mt-3 hover:text-gray-100">
        Já possui conta? Faça login.
      </Link>
    </div>
  );
};
