import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../assets/Logo";
import { GlobalContext } from "../GlobalContext";
import { EndPoints } from "../../supabase";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Load } from "../components/Load";

const forms = [
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
];

export const Login = () => {
  const supa = new EndPoints();
  const [load, setLoad] = React.useState(false);
  const [form, setForm] = React.useState(() => {
    return forms.reduce((acc, e) => {
      return {
        ...acc,
        [e.id]: "",
      };
    }, {});
  });

  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoad(true);
    if (validateForm()) {
      console.log("valido");
      const returnLogin = await supa.login(form);
      if (!returnLogin.error) {
        location.reload();
      }
    } else {
      setLoad(false);
      console.log("não válido");
    }
  };

  return (
    <div
      className={`h-screen w-screen bg-gray-900 flex flex-col items-center justify-center ${
        load ? " flex-1 " : null
      }`}
    >
      <Load isVisible={load} />
      {!load ? (
        <>
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
          <Link
            to="cadastro"
            className="text-gray-400 underline mt-8 hover:text-gray-100"
          >
            Esqueçeu a senha?
          </Link>
          <Link
            to="cadastro"
            className="text-gray-400 underline mt-3 hover:text-gray-100"
          >
            Não possui conta? Crie um agora.
          </Link>
        </>
      ) : null}
    </div>
  );
};
